# Procesador de Pods Fallidos a Tickets iTop

Este script de Python procesa el archivo JSON generado por `audit-failed-pods.sh` y crea automáticamente tickets de tipo `UserRequest` en iTop para cada pod detectado.

## Propósito
Automatizar la gestión de incidentes convirtiendo alertas de auditoría (Pods caídos) en tickets operativos accionables en la CMDB.

## Ubicación
*   **Script**: `devops/core/k8s/process-failed-pods.py`
*   **Input**: `audit/kube/failed_pods.json` (por defecto)

## Requisitos
*   Python 3.x
*   Librerías estándar (`json`, `os`, `sys`, `urllib`, `ssl`) - **Zero dependencies**.

## Variables de Entorno Requeridas
El script espera las siguientes variables de entorno para conectar con la API de iTop:

*   `ITOP_URL`: URL base de iTop (ej. `https://itop.ka0s.io`)
*   `ITOP_USER`: Usuario REST API.
*   `ITOP_PASSWORD`: Contraseña REST API.
*   `FAILED_PODS_FILE`: Ruta al archivo JSON (Opcional, default: `audit/kube/failed_pods.json`).

## Lógica de Mapeo
*   **Clase iTop**: `UserRequest`
*   **Caller/Org**: Se infieren dinámicamente mediante OQL buscando al usuario de la API (`ITOP_USER`).
*   **Título**: `[K8s Audit] Pod Failed: <namespace>/<pod_name>`
*   **Descripción**: HTML con detalles de fase y condiciones de error.
*   **Impacto/Urgencia**: 2 (Medium).

## Uso en Workflow
```yaml
      - name: Process Tickets
        env:
          ITOP_URL: ${{ secrets.ITOP_URL || vars.ITOP_URL }}
          ITOP_USER: ${{ secrets.ITOP_API_USER }}
          ITOP_PASSWORD: ${{ secrets.ITOP_API_PASSWORD }}
          FAILED_PODS_FILE: 'audit/kube/failed_pods.json'
        run: python3 devops/core/k8s/process-failed-pods.py
```
