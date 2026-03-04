# Módulo Ka0s JSON Lint

Bienvenido a la documentación del módulo de linting JSON. Este módulo asegura que todos los archivos `.json` en el repositorio cumplan con los estándares de sintaxis y estilo.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Explicación de la validación dual (Sintaxis + Estilo).
    *   Mecanismo de Self-Healing.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Cómo integrar la acción en tus workflows.
    *   Parámetros de configuración.
    *   Cómo se prueba la herramienta.
3.  [**Integración en el Ecosistema**](./03_integration.md)
    *   Rol en Quality Gates.
    *   Flujo de trabajo recomendado.

## Histórico
*   [Documentación de Workflow Legacy](./legacy_workflow.md): Referencia al antiguo workflow monolítico.

## Cambios 2026-03-04 (Hardening de Workflows)
- Se aplica principio de mínimos privilegios: permisos por defecto `contents: read` a nivel de workflow y elevación a `contents: write` solo en el job principal que realiza commits.
- El job `handle-failure` deja de depender de `handle-success` para garantizar la apertura de incidencias incluso si el flujo de éxito falla.
- Incidencias: uso de `${{ secrets.GITHUB_TOKEN }}` y permisos `issues: write` exclusivamente en el job de fallo.
- `end-workflow` mantiene `actions: write` y `contents: read` para ejecutar `inspector.yml`.
- Variables de identidad estandarizadas: `KAOS_CODE: ${{ github.run_id }}`.
