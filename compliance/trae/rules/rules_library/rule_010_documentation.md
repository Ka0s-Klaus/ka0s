# Regla 010: Documentación Técnica (MkDocs)

Estándares de calidad para la documentación viva en `core/docs/`.

## 1. Estructura y Navegación
- **Raíz**: `core/docs/` es la única fuente de documentación técnica.
- **Índice**: `mkdocs.yml` debe reflejar la estructura de carpetas.
- **Atomicidad**: Un archivo por concepto (`01_concept.md`, `02_usage.md`).

## 2. Formato Markdown
- **Headers**: Usar jerarquía lógica (`#`, `##`, `###`).
- **Bloques de Código**: Especificar lenguaje (`python`, `yaml`).
- **Admonitions**: Usar `!!! note` o `!!! warning` para resaltar información crítica.

## 3. Diagramas
- **Mermaid**: Preferir código sobre imágenes binarias.
- **Ubicación**: Embebido en el Markdown o en `core/docs/imgs/` si es binario indispensable.
