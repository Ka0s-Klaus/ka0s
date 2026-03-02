#!/usr/bin/env python3
import json
import os
import subprocess
import time
from datetime import datetime

# Configuración
SERVICE_NAME = "storage-system"
NAMESPACE = "storage-system"
# Ruta ajustada para ejecutarse desde devops/core/k8s/
# devops/core/k8s -> ../../../audit/deploy
AUDIT_DIR = "../../../audit/deploy"


def run_command(cmd):
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError:
        return None


def check_deployment():
    report = {
        "timestamp": datetime.now().isoformat(),
        "service": SERVICE_NAME,
        "checks": {},
        "status": "Unknown"
    }

    print(f"Iniciando auditoría post-despliegue para {SERVICE_NAME}...")

    # 1. Verificar Pods del Provisioner
    cmd_pods = (
        f"kubectl get pods -n {NAMESPACE} "
        "-l app=nfs-client-provisioner -o jsonpath='{.items[*].status.phase}'"
    )
    pods_status = run_command(cmd_pods)
    report["checks"]["provisioner_pods"] = pods_status

    # 2. Verificar Job de Validación
    # Esperar un momento si el job acaba de lanzarse
    print("Esperando finalización del Job de validación...")
    job_status = "0"
    for _ in range(10):  # Esperar hasta 20s
        cmd_job = (
            f"kubectl get job nfs-validation-job -n {NAMESPACE} "
            "-o jsonpath='{.status.succeeded}'"
        )
        job_status_check = run_command(cmd_job)
        if job_status_check == "1":
            job_status = "1"
            break
        time.sleep(2)

    job_result = "Success" if job_status == "1" else "Failed/Running"
    report["checks"]["validation_job"] = job_result

    # 3. Verificar Nodos
    cmd_nodes = (
        "kubectl get nodes -o jsonpath='"
        "{range .items[*]}{.metadata.name}:"
        "{.status.conditions[?(@.type==\"Ready\")].status} {end}'"
    )
    nodes_ready = run_command(cmd_nodes)
    report["checks"]["nodes_status"] = (
        nodes_ready.split() if nodes_ready else []
    )

    # Determinar estado global
    if "Running" in str(pods_status) and job_result == "Success":
        report["status"] = "Success"
        print("✅ Verificación exitosa.")
    else:
        report["status"] = "Failed"
        print("❌ Verificación fallida.")

    # Guardar reporte
    # Asegurar ruta absoluta para evitar errores de cwd
    script_dir = os.path.dirname(os.path.abspath(__file__))
    audit_path = os.path.join(script_dir, AUDIT_DIR)

    if not os.path.exists(audit_path):
        os.makedirs(audit_path, exist_ok=True)

    timestamp = int(datetime.now().timestamp())
    filename = f"deployment-report-{SERVICE_NAME}-{timestamp}.json"
    full_path = os.path.join(audit_path, filename)

    with open(full_path, 'w') as f:
        json.dump(report, f, indent=2)

    print(f"Reporte de auditoría generado en: {full_path}")
    return full_path


if __name__ == "__main__":
    check_deployment()
