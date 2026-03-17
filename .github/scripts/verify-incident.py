#!/usr/bin/env python3
"""
Script para verificar el estado de un servicio en Kubernetes basado en una Issue.
Se utiliza en workflows de GitHub Actions para auto-remediación o verificación.
"""

import os
import re
import sys
import json
import subprocess
import argparse
from typing import Optional


def run_command(command: str) -> Optional[str]:
    """Ejecuta un comando de shell y devuelve la salida."""
    try:
        result = subprocess.run(
            command,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            shell=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError:
        return None


def find_service_name(issue_body):
    """
    Intenta extraer el nombre del servicio del cuerpo de la issue.
    Busca patrones comunes usados en Ka0s.
    """
    if not issue_body:
        return None

    # Patrones de búsqueda
    patterns = [
        # Formato Template Standard
        r"\*\*Servicio / CI afectado\*\*\s*\n\s*(?:GitHub Actions / )?([a-zA-Z0-9\-_]+)",
        # Formato Markdown Header
        r"### Servicio / CI afectado\s*\n\s*(?:GitHub Actions / )?([a-zA-Z0-9\-_]+)",
        # Formato Genérico clave: valor
        r"(?:Service|Servicio|Deployment|App):\s*([a-zA-Z0-9\-_]+)"
    ]

    for pattern in patterns:
        match = re.search(pattern, issue_body, re.IGNORECASE | re.MULTILINE)
        if match:
            return match.group(1).strip()

    return None


def check_pods(service_name):
    """Verifica pods por label app o nombre."""
    # Intentar con label app=<service_name>
    cmd = f"kubectl get pods -A -l app={service_name} -o json"
    output = run_command(cmd)

    if not output or output == "":
        # Intentar con label app.kubernetes.io/name
        cmd = f"kubectl get pods -A -l app.kubernetes.io/name={service_name} -o json"
        output = run_command(cmd)

    if not output:
        return None

    try:
        pods = json.loads(output)
        return pods.get('items', [])
    except json.JSONDecodeError:
        return None


def verify_k8s_service(service_name):
    """
    Verifica si hay pods corriendo para el servicio dado.
    Intenta buscar por deployment, statefulset o label app.
    """
    # 1. Buscar Pods
    items = check_pods(service_name)

    if not items:
        # Intentar búsqueda por nombre de deployment directo
        cmd = "kubectl get deployments -A -o json"
        all_deps = run_command(cmd)
        if all_deps:
            try:
                deps = json.loads(all_deps)
                for d in deps.get('items', []):
                    if d['metadata']['name'] == service_name:
                        ns = d['metadata']['namespace']
                        ready = d['status'].get('readyReplicas', 0)
                        desired = d['spec'].get('replicas', 1)
                        if ready >= desired and desired > 0:
                            msg = (f"Deployment {service_name} en namespace {ns} "
                                   f"está saludable ({ready}/{desired}).")
                            return True, msg
                        else:
                            msg = (f"Deployment {service_name} en namespace {ns} "
                                   f"NO saludable ({ready}/{desired}).")
                            return False, msg
            except json.JSONDecodeError:
                pass

        return False, f"No se encontraron recursos K8s para: {service_name}"

    running_count = 0
    not_running = []

    for pod in items:
        phase = pod['status']['phase']
        name = pod['metadata']['name']

        if phase == 'Running':
            running_count += 1
        else:
            not_running.append(f"{name} ({phase})")

    if running_count > 0:
        if not not_running:
            return True, f"Todos los pods ({running_count}) de {service_name} están Running."
        else:
            msg = (f"Servicio {service_name} parcial ({running_count} Running). "
                   f"Problemas: {', '.join(not_running)}")
            return True, msg
    else:
        msg = (f"Ningún pod de {service_name} está Running. "
               f"Estado: {', '.join(not_running)}")
        return False, msg


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--issue-body', help='Cuerpo de la issue')

    args = parser.parse_args()

    # Prioridad: Argumento > Variable de Entorno
    issue_body = args.issue_body or os.environ.get('ISSUE_BODY')

    if not issue_body:
        print(json.dumps({
            "status": "error",
            "message": "No se proporcionó cuerpo de la issue (arg o env var)."
        }))
        sys.exit(1)

    service_name = find_service_name(issue_body)

    if not service_name:
        # No fallamos, solo reportamos unknown
        print(json.dumps({
            "status": "unknown",
            "message": "No se detectó nombre de servicio."
        }))
        sys.exit(0)

    is_up, message = verify_k8s_service(service_name)

    result = {
        "status": "up" if is_up else "down",
        "service": service_name,
        "message": message
    }

    print(json.dumps(result))


if __name__ == "__main__":
    main()
