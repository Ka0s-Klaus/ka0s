# Módulo Ka0s Inspector - Guía de Uso

## Ejecución Manual
El inspector puede ser disparado manualmente desde la pestaña "Actions" de GitHub para auditar un workflow específico.

### Parámetros (Inputs)
| Input | Descripción |
| :--- | :--- |
| `kaos-issue-id` | ID del issue relacionado (para reportar resultados). |
| `kaos-workflow-id` | ID de la ejecución (Run ID) que se desea inspeccionar. |
| `kaos-user-start` | Flag booleano para indicar inicio manual. |

## Salidas (Outputs)
El módulo genera archivos en la ruta `audit/inspector/<RUN_ID>/`:
*   `execution.log`: Log crudo de la consola.
*   `report.json`: Metadatos estructurados (duración, estado, pasos fallidos).

## Validación
Para verificar que el Inspector funciona:
1.  Ejecuta cualquier workflow que falle intencionalmente.
2.  Dispara el Inspector apuntando a ese Run ID.
3.  Verifica que se haya creado un nuevo Issue en GitHub con la etiqueta `bug` o `audit-fail`.
