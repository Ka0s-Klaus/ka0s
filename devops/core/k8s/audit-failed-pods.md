# Auditoría de Pods Fallidos

Este documento describe el script `audit-failed-pods.sh`, diseñado para detectar anomalías en los workloads del clúster.

## Propósito
Identificar todos los Pods que no se encuentran en estado `Running` o `Succeeded` (ej. `CrashLoopBackOff`, `Pending`, `Error`, `Evicted`) y exportar sus detalles para análisis.

## Ubicación
*   **Script**: `devops/core/k8s/audit-failed-pods.sh`
*   **Salida**: Archivo JSON en `audit/kube/failed_pods.json` (tras la ejecución del workflow).

## Lógica Técnica
1.  Conecta al API Server usando `kubectl`.
2.  Obtiene todos los pods de todos los namespaces (`-A`).
3.  Filtra aquellos cuyo `status.phase` sea distinto de `Running` y `Succeeded`.
4.  Genera un archivo JSON compatible con herramientas de análisis (jq, pandas, etc.).

## Ejecución vía GitHub Actions

### Inputs del Workflow
Este script se invoca mediante el workflow reutilizable `ssh-connect.yml` o el específico `audit-pods.yml`.

*   **script-path**: `devops/core/k8s/audit-failed-pods.sh`
*   **results-path**: `audit/kube/`

### Ejemplo de Workflow Dedicado
Ver `.github/workflows/audit-pods.yml`.
