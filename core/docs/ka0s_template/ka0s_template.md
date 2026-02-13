# Módulo Ka0s Template

Documentación oficial sobre las plantillas de estandarización de workflows y automatización en Ka0s.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Filosofía "Golden Path".
    *   Estructura estándar de workflows.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Cómo crear un workflow desde la plantilla.
    *   Checklist de calidad.
3.  [**Integración Técnica**](./03_integration.md)
    *   Runners, Secretos y GitOps.
    *   Mecanismos de reintento y notificación.

## Componentes Clave

| Componente | Tipo | Descripción | Ubicación |
| :--- | :--- | :--- | :--- |
| **Basic Template** | Workflow | Plantilla base para nuevos workflows. Incluye ciclo de vida y auditoría. | `core/templates/workflow/basic-template.yaml` |
| **Workflow Readme** | Doc | Guía técnica detallada sobre la plantilla y sus variables. | `core/templates/workflow/README.md` |
| **Docs Template** | Estructura | Estructura de referencia para documentación de módulos (este directorio). | `core/docs/ka0s_template/` |

## Recursos
*   [Plantilla YAML](../../templates/workflow/basic-template.yaml)
*   [README Técnico](../../templates/workflow/README.md)
