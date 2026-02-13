# Guía de Uso y Validación

## Cómo utilizar las Plantillas

### Para Usuarios Finales

1.  Navegar a la pestaña **Issues** del repositorio.
2.  Hacer clic en **New Issue**.
3.  Seleccionar la plantilla adecuada:

    *   **🚀 Solicitud de Onboarding**: Úsala si eres nuevo y quieres instalar Ka0s en tu infraestructura.
        *   *Dato Crítico*: Especifica correctamente el tipo de entorno (Kubernetes Cloud vs On-Premise).
    
    *   **🐛 Reporte de Bug**: Úsala si algo se ha roto.
        *   *Validación*: No envíes el reporte sin logs. Usa el campo de "Logs" formateado como código.
    
    *   **💡 Solicitud de Funcionalidad**: Úsala para ideas.
        *   *Consejo*: Sé claro en el "Pitch". ¿Por qué esto es importante para todos?

### Validación Automática

GitHub Forms incluye validaciones básicas en el frontend:
*   **Campos Requeridos**: No se puede enviar el issue si faltan campos marcados con `validations: required: true`.
*   **Formatos**: Algunos campos pueden validar si es un email o un enlace (dependiendo de la configuración avanzada).

## Flujo de Trabajo Posterior

Una vez creado el Issue:
1.  **Etiquetado Automático**: El sistema asigna labels como `bug`, `enhancement` o `onboarding` automáticamente.
2.  **Triaje Humano**: El equipo revisa la solicitud.
3.  **Conversión a Tarea**: Si es aceptado, puede convertirse en una tarea de desarrollo o disparar un workflow de GitHub Actions (en el caso de Onboarding).
