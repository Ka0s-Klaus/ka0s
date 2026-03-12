# Módulo Ka0s Version Manager

Gestión automatizada de versiones y releases.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
3.  [**Integración en el Ecosistema**](./03_integration.md)

## Histórico
*   [Documentación Legacy](./legacy_workflow.md)

## Cambios 2026-03-04 (Hardening de Workflows)
- Permisos a nivel de workflow ajustados a `contents: read`; elevación por job cuando hay escritura.
- `handle-failure` ahora depende únicamente de `job-core` y usa `${{ secrets.GITHUB_TOKEN }}` con permisos `issues: write`.
- `end-workflow` mantiene `actions: write` y `contents: read` para `inspector.yml`.
- Uso consistente de `KAOS_CODE: ${{ github.run_id }}`.
