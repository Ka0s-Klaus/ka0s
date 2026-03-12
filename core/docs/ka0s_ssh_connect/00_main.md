# Módulo Ka0s SSH Connect

Utilidad central para ejecución remota segura.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
3.  [**Integración en el Ecosistema**](./03_integration.md)

## Histórico
*   [Documentación Legacy](./legacy_workflow.md)

## Cambios 2026-03-04 (Hardening de Workflows)
- Permisos globales del workflow ajustados a `contents: read`. Elevación a `contents: write` únicamente en jobs que realizan commits/push (p. ej., `commit-results`).
- `handle-failure` deja de depender de `handle-success` y usa `${{ secrets.GITHUB_TOKEN }}` con permisos `issues: write` para incidencias.
- `end-workflow` mantiene `actions: write` y `contents: read` para ejecutar `inspector.yml`.
- Uso consistente de `KAOS_CODE: ${{ github.run_id }}`.
