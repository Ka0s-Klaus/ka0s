# Integración iTop <-> GitHub Actions: Guía Maestra

Esta documentación detalla la integración completa entre **iTop (ITSM)** y **GitHub Actions (Automatización)**. El objetivo es permitir que la operativa diaria (tickets) dispare acciones técnicas automatizadas de forma segura y estructurada.

## Índice de Contenidos

### Fase 1: Fundamentos
*   **[01. Configuración del Workflow](01_github_workflow.md)**: Cómo preparar un archivo `.yml` en GitHub para aceptar disparos externos (`workflow_dispatch`).
*   **[02. Creación del Token (PAT)](02_PAT_creation.md)**: Generación de credenciales seguras para permitir que iTop hable con GitHub.
*   **[03. Configuración en iTop](03_itop_configuration.md)**: Configuración básica de disparadores y acciones webhook en iTop.
*   **[04. Verificación](04_verification.md)**: Cómo probar que la conexión básica funciona.

### Fase 2: Automatización Avanzada (Ciclo de Vida)
*   **[05. Workflow Avanzado (Éxito/Fallo)](05_advanced_workflow.md)**:
    *   Cierre automático del ciclo: El workflow actualiza el ticket en iTop.
    *   Manejo de errores: Si el script falla, el ticket queda abierto y asignado para revisión.
    *   Registro de logs: Inserción de enlaces a los logs de GitHub en el `public_log` de iTop.

### Fase 3: Estrategias de Disparo y Parámetros
Existen dos estrategias para conectar tickets con workflows, dependiendo de la necesidad:

*   **[06. Disparo Condicional y Parámetros Dinámicos](06_conditional_trigger_parameters.md)**:
    *   *Caso de uso*: Ejecuciones ad-hoc o flexibles.
    *   *Método*: Filtro por etiquetas en el título (ej. `[A]`) y parsing de parámetros `clave:valor` desde la descripción.

*   **[07. Estrategia por Catálogo de Servicios (Recomendada)](07_workflow_selection_strategy.md)**:
    *   *Caso de uso*: Automatizaciones estandarizadas y recurrentes.
    *   *Método*: Mapeo directo de **Subcategoría de Servicio** -> **Workflow Específico**.
    *   *Ventaja*: Mayor control, seguridad y facilidad de uso para el operador.

### Referencia Técnica
*   **[Guía de la API REST de iTop](ITOP_API_GUIDE.md)**: Referencia rápida de JSON para manipular objetos `UserRequest` (fechas, logs, relaciones).
