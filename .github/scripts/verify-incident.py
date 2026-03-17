#!/usr/bin/env python3
"""
Script para verificar el estado de un servicio en Kubernetes basado en una Issue.
Soporta modo 'single' (una issue) o 'batch' (todas las issues abiertas).
Requiere 'gh' CLI autenticado y acceso a 'kubectl'.
"""

import os
import re
import sys
import json
import subprocess
import argparse
from typing import Optional, List, Dict, Tuple


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


def get_open_incidents() -> List[Dict]:
    """Obtiene issues abiertas con etiqueta itop-incident."""
    cmd = (
        "gh issue list "
        "--label itop-incident "
        "--state open "
        "--json number,title,body "
        "--limit 100"
    )
    output = run_command(cmd)
    if not output:
        return []
    try:
        return json.loads(output)
    except json.JSONDecodeError:
        return []


def close_issue(number: int, service: str, message: str):
    """Cierra una issue en GitHub."""
    comment = (
        f"✅ **Auto-Verificación Exitosa**\n\n"
        f"El servicio **{service}** ha sido detectado como **UP** (Running) "
        f"en el clúster.\n\n"
        f"**Detalles Técnicos:**\n```\n{message}\n```\n\n"
        f"🤖 *Acción automática por Ka0s Auto-Remediation.*"
    )
    # Escapar comillas para bash
    # Mejor usar input file temporal para evitar problemas de quoting
    # Pero gh soporta --comment-body desde archivo? No directamente en close.
    # Usaremos gh issue close --comment "..."
    
    # Simple sanitization
    comment_safe = comment.replace('"', '\\"')
    
    cmd = f'gh issue close {number} --comment "{comment_safe}"'
    run_command(cmd)
    print(f"Issue #{number} cerrada.")


def comment_issue(number: int, service: str, message: str):
    """Añade comentario a una issue."""
    comment = (
        f"⚠️ **Auto-Verificación Fallida**\n\n"
        f"El servicio **{service}** parece estar **DOWN** o degradado.\n\n"
        f"**Detalles Técnicos:**\n```\n{message}\n```\n\n"
        f"🚨 **Acción Requerida**: Revisión manual."
    )
    comment_safe = comment.replace('"', '\\"')
    cmd = f'gh issue comment {number} --body "{comment_safe}"'
    run_command(cmd)
    print(f"Comentario añadido a Issue #{number}.")


def find_service_name(issue_body: str) -> Optional[str]:
    """Intenta extraer el nombre del servicio del cuerpo de la issue."""
    if not issue_body:
        return None

    patterns = [
        r"\*\*Servicio / CI afectado\*\*\s*\n\s*(?:GitHub Actions / )?([a-zA-Z0-9\-_]+)",
        r"### Servicio / CI afectado\s*\n\s*(?:GitHub Actions / )?([a-zA-Z0-9\-_]+)",
        r"(?:Service|Servicio|Deployment|App):\s*([a-zA-Z0-9\-_]+)"
    ]

    for pattern in patterns:
        match = re.search(pattern, issue_body, re.IGNORECASE | re.MULTILINE)
        if match:
            return match.group(1).strip()
    return None


def check_pods(service_name: str) -> Optional[List[Dict]]:
    """Verifica pods por label app o nombre."""
    cmd = f"kubectl get pods -A -l app={service_name} -o json"
    output = run_command(cmd)

    if not output or output == "":
        cmd = f"kubectl get pods -A -l app.kubernetes.io/name={service_name} -o json"
        output = run_command(cmd)

    if not output:
        return None

    try:
        pods = json.loads(output)
        return pods.get('items', [])
    except json.JSONDecodeError:
        return None


def verify_k8s_service(service_name: str) -> Tuple[bool, str]:
    """Verifica si hay pods corriendo para el servicio dado."""
    items = check_pods(service_name)

    if not items:
        # Intentar búsqueda por nombre de deployment
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
                            return True, f"Deployment {service_name} ({ns}) saludable ({ready}/{desired})."
                        else:
                            return False, f"Deployment {service_name} ({ns}) NO saludable ({ready}/{desired})."
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
            return True, f"Todos los pods ({running_count}) Running."
        else:
            return True, f"Parcial ({running_count} Running). Problemas: {', '.join(not_running)}"
    else:
        return False, f"Ningún pod Running. Estado: {', '.join(not_running)}"


def process_single_incident(issue_body: str, issue_number: Optional[int] = None, dry_run: bool = False):
    """Procesa una única incidencia."""
    service_name = find_service_name(issue_body)
    
    if not service_name:
        result = {"status": "unknown", "message": "No se detectó servicio."}
        if not dry_run:
            print(json.dumps(result))
        return

    is_up, message = verify_k8s_service(service_name)
    
    if dry_run and issue_number:
        # Modo acción: Cerrar o Comentar
        if is_up:
            close_issue(issue_number, service_name, message)
        else:
            comment_issue(issue_number, service_name, message)
    else:
        # Modo reporte (usado por el workflow en modo 'issue event' antiguo,
        # o si no se pasa issue_number)
        print(json.dumps({
            "status": "up" if is_up else "down",
            "service": service_name,
            "message": message
        }))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--issue-body', help='Cuerpo de la issue (Modo Single)')
    parser.add_argument('--issue-number', type=int, help='Número de issue (para cerrar/comentar)')
    parser.add_argument('--scan-all', action='store_true', help='Escanear todas las issues abiertas')
    
    args = parser.parse_args()

    if args.scan_all:
        print("Iniciando escaneo de issues abiertas...")
        issues = get_open_incidents()
        print(f"Encontradas {len(issues)} issues abiertas.")
        
        for issue in issues:
            print(f"--- Procesando Issue #{issue['number']} ---")
            process_single_incident(issue['body'], issue['number'], dry_run=True)
            
    else:
        # Prioridad: Argumento > Variable de Entorno
        issue_body = args.issue_body or os.environ.get('ISSUE_BODY')
        
        if not issue_body:
            # Si no hay body, no podemos hacer nada en modo single
            print(json.dumps({"status": "error", "message": "No issue body provided"}))
            sys.exit(1)
            
        process_single_incident(issue_body, args.issue_number, dry_run=False)


if __name__ == "__main__":
    main()
