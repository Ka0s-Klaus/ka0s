# Guía de Uso y Validación

## Ejecución
- **Manual**: desde la pestaña Actions, selecciona "Ka0s Audit Failed Pods" y pulsa "Run workflow".
- **Programada**: corre automáticamente cada 30 minutos.

## Resultados
- Se genera/actualiza el archivo: `audit/kube/failed_pods.json`.
- Si hay cambios, se commitea con mensaje `[Audit] Update failed pods report <fecha>`.
- Al finalizar, se dispara el `inspector.yml` para auditar la ejecución.

## Validación Funcional
1. Provoca un Pod fallido (por ejemplo, imagen inexistente) y espera a la siguiente ejecución.
2. Verifica la existencia y contenido de `audit/kube/failed_pods.json`.
3. Comprueba si se realizó commit automático en el historial del repositorio.
4. Si está habilitada la integración con iTop, verifica la conectividad y el procesamiento de tickets asociado.

## Inputs Relevantes de la Acción SSH
- `script-path`: `devops/core/k8s/audit-failed-pods.sh`.
- `remote-results-path`: `/tmp/results`.
- `local-results-path`: `audit/kube/`.

## Robustez y Manejo de Errores
El script de auditoría (`devops/core/k8s/audit-failed-pods.sh`) incluye mecanismos de seguridad:
- **`set -o pipefail`**: Asegura que cualquier fallo en la cadena de comandos (ej. `kubectl | jq`) provoque la terminación inmediata del script con error.
- **Verificación de Conectividad**: Antes de auditar, comprueba explícitamente la conexión al clúster (`kubectl get nodes`). Si falla, el script termina con un mensaje de error claro, evitando ejecuciones parciales o silenciosas.

## Troubleshooting
Para detalles sobre resolución de problemas, consulta la [Guía de Troubleshooting](./04_troubleshooting.md).
