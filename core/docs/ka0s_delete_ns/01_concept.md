# Módulo de Eliminación Segura de Namespaces

Este módulo proporciona un mecanismo automatizado y auditado para la eliminación completa de namespaces en Kubernetes.

## Componentes

### 1. Workflow (`kaos-delete-namespace.yml`)
Este flujo de trabajo orquesta el proceso de eliminación.
- **Entrada**: Nombre del namespace y confirmación de seguridad ("DELETE").
- **Acción**: Conecta vía SSH al cluster y ejecuta el script de purgado.
- **Salida**: Genera un reporte en `audit/trash/` y dispara automáticamente una auditoría de estado del cluster.

### 2. Script de Purgado (`force-delete-namespace.sh`)
Script Bash robusto que asegura la eliminación:
1.  **Inventario**: Lista todos los recursos existentes antes de borrar.
2.  **Eliminación Recursiva**: Borra deployments, services, pods, PVCs, configmaps, secrets e ingress.
3.  **Manejo de Bloqueos**: Si el namespace se queda en estado `Terminating` (común por finalizers atascados), parchea el recurso vía API raw para forzar su desaparición.

## Uso

### Ejecución Manual
Desde la pestaña **Actions** de GitHub:
1.  Seleccionar **"Ka0s Delete Namespace & Audit"**.
2.  Introducir el namespace (ej: `test-ns`).
3.  Escribir `DELETE` en el campo de confirmación.
4.  Ejecutar.

### Auditoría
Los informes se guardan en:
`audit/trash/delete-report-<namespace>-<timestamp>.md`

Contienen:
- Lista de recursos eliminados.
- Logs de la operación de borrado.
- Confirmación de éxito o detalle de errores.
