# Módulo Ka0s Markdown Lint

Documentación sobre la estandarización de documentos en Ka0s.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Filosofía "Docs as Code".
    *   Herramientas: `markdownlint` + `prettier`.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Cómo mantener `README.md` limpios.
    *   Configuración de auto-fix.
3.  [**Integración en el Ecosistema**](./03_integration.md)
    *   Beneficios de la documentación estandarizada.
    *   Proceso de Pull Request.

## Histórico
*   [Documentación de Workflow Legacy](./legacy_workflow.md): Referencia al antiguo workflow monolítico.

## Cambios 2026-03-04 (Hardening de Workflows)
- Permisos por defecto del workflow reducidos a `contents: read`. Elevación a `contents: write` solo en el job que realiza auto-fix y commits.
- `handle-failure` ahora depende únicamente del job principal y no de `handle-success`.
- Apertura de incidencias con `${{ secrets.GITHUB_TOKEN }}` y permisos `issues: write` en el job de fallo.
- `end-workflow` permanece con `actions: write` y `contents: read` para orquestar `inspector.yml`.
- Se mantiene `KAOS_CODE: ${{ github.run_id }}` como identificador de ejecución.
