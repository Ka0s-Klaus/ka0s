# Módulo Ka0s Inspector - Integración

## Políticas de Seguridad
El Inspector maneja información sensible (logs), por lo que aplica políticas estrictas:
*   **Token Scope**: Usa `KAOS_REPO_TOKEN` con permisos mínimos necesarios.
*   **Sanitización**: Filtra secretos conocidos antes de guardar logs en disco (aunque GitHub Actions ya hace esto, el Inspector añade una capa extra).
*   **Identidad**: Los commits de auditoría se firman con una identidad de bot específica para distinguirlos de cambios humanos.

## Integración con Otros Módulos
*   **Ka0s Lint**: Si un linter falla, el Inspector puede ser invocado automáticamente para registrar el detalle del fallo.
*   **Ka0s Execution**: Actúa como supervisor de las ejecuciones orquestadas, proporcionando el "feedback loop" necesario para la mejora continua (Kaizen).
