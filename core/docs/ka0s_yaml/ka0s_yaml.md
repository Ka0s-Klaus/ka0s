# Módulo Ka0s YAML Lint

Documentación oficial para el linter de YAML, pieza clave en la infraestructura como código de Ka0s.

## Índice de Documentación

1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   Validación crítica para Kubernetes y GitHub Actions.
    *   Integración con `yamllint`.
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   Ejemplos de implementación.
    *   Casos de prueba (Positive/Negative).
3.  [**Integración en el Ecosistema**](./03_integration.md)
    *   Prevención de errores en pipelines.
    *   Ciclo de vida del linting.

## Histórico
*   [Documentación de Workflow Legacy](./legacy_workflow.md): Referencia al antiguo workflow monolítico.

## Cambios 2026-03-04 (Hardening de Workflows)
- Permisos por defecto del workflow ajustados a `contents: read` y elevación por job cuando es necesaria la escritura.
- `handle-failure` ahora depende únicamente del job principal y no de `handle-success`.
- Incidencias abiertas con `${{ secrets.GITHUB_TOKEN }}` y permisos `issues: write` en el job de fallo.
- `end-workflow` mantiene `actions: write` y `contents: read` para la ejecución de `inspector.yml`.
