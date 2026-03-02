# Validación de Uso

## Pasos para Verificar
1.  **Crear un Issue**: Navega a la pestaña de "Issues" y selecciona una plantilla (ej. Incident).
2.  **Enviar**: Completa el formulario y envía el issue.
3.  **Verificar Panel Derecho**: En la vista detallada del issue creado, observa el panel lateral derecho.
    *   **Projects**: Debería aparecer automáticamente "Ka0s-Klaus/4" (o el nombre del proyecto).
4.  **Verificar Proyecto**: Accede al Tablero del Proyecto y confirma que el nuevo issue aparece en la columna de entrada (o según reglas configuradas).

## Solución de Problemas
*   **No aparece el Proyecto**:
    *   Verifica que el nombre de la organización y el número del proyecto en la plantilla sean correctos (`projects: ["Ka0s-Klaus/4"]`).
    *   Verifica que el repositorio tiene permisos de escritura en los proyectos de la organización.
