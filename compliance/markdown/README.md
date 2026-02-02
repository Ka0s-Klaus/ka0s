# Ka0s Markdown Compliance

Este directorio contiene las reglas de conformidad para todos los archivos Markdown en el ecosistema Ka0s.

## Estándares

1.  **Sintaxis**: Verificado por `markdownlint-cli2`.
    *   Reglas: Definidas en `core/config/.markdownlint.json`.
    *   Excepción: MD013 (Line length) desactivado.

2.  **Formato**:
    *   Indentación: 2 espacios.
    *   Wrap de prosa: Always (80 caracteres).
    *   Final de línea: LF.

## Herramientas

El workflow de GitHub `mdlint.yml` utiliza:

*   **markdownlint-cli2**: Validación de sintaxis y buenas prácticas.
*   **prettier**: Verificación y corrección automática de estilo.

## Configuración

La configuración de estilo se encuentra en `.prettierrc.json`.
