# Regla 002: Docs Vivos

Sincronización total entre Código y Documentación. La documentación desactualizada es deuda técnica crítica.

## Mandatos
1.  **Trigger de Actualización**: Al modificar cualquier archivo en `core/docs/` o crear nuevos módulos, se DEBE actualizar el índice.
2.  **Herramienta Obligatoria**: Usar SIEMPRE el script `.github/scripts/update-docs-index.py` para sincronizar `index.md` y `core/docs/README.md`.
3.  **Prohibido**: No editar manualmente los índices autogenerados.

## Alcance
Aplica a todos los archivos Markdown (`.md`) dentro del repositorio.
