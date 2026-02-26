# Módulo Ka0s Execution - Concepto

## Descripción
**Ka0s Execution** es el orquestador de tareas. Es el motor que decide *qué* se ejecuta, *cuándo* y *en qué orden*.

## Responsabilidades
*   **Gestión de Dependencias**: Asegura que las tareas prerrequisito se completen antes de iniciar las dependientes.
*   **Paralelismo**: Ejecuta tareas independientes simultáneamente para optimizar tiempos.
*   **Manejo de Contexto**: Pasa variables y estados entre diferentes jobs y workflows.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
