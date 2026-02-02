# Módulo Ka0s MongoDB - Uso

## Disparadores
*   **Cron**: `0 * * * *` (Cada hora).
*   **Manual**: `workflow_dispatch` para intervenciones puntuales.

## Validación
*   **Reportes**: Revisar `audit/mongodb/` para ver los JSON de resultados de cada ejecución.
*   **Issues**: Si falla, el sistema creará automáticamente un Issue en GitHub.
