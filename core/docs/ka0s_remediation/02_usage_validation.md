# Uso y Validación

## Ejecución Manual (GitHub Actions)

Para disparar una remediación manualmente:

1.  Ve a la pestaña **Actions** en GitHub.
2.  Selecciona el workflow de remediación deseado (ej. `[Ka0S] Remediation High Load`).
3.  Haz clic en **Run workflow**.
4.  Completa los inputs requeridos:
    *   `node_name`: Nombre del nodo afectado (ej. `k8-worker-1`).
    *   `issue_number`: ID de la Issue de GitHub asociada al incidente.

## Ejecución desde iTop

Si tienes iTop integrado:

1.  En el Ticket de Incidente, localiza la pestaña de **Acciones Automáticas**.
2.  Selecciona "Ejecutar Remediación".
3.  El sistema llamará a la API de GitHub Actions.
4.  El Ticket se actualizará automáticamente con el resultado:
    *   **Éxito**: El Ticket se resuelve y cierra.
    *   **Fallo**: El Ticket se actualiza con el enlace a los logs de error.

## Validación

Para verificar que una remediación funcionó:

1.  **En GitHub**: Revisa el log del workflow. Busca el paso "Execute Diagnostic Script".
2.  **En la Issue**: Debería aparecer un comentario automático con el resumen del diagnóstico.
3.  **En el Sistema**: Verifica que la alerta (ej. CPU alto) haya desaparecido.
