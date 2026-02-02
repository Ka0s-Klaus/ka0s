# Ka0s JSON Compliance

Este directorio contiene las reglas de conformidad para todos los archivos JSON en el ecosistema Ka0s.

## Estándares

1.  **Sintaxis**: Debe ser JSON válido (RFC 8259).
2.  **Formato**:
    *   Indentación: 2 espacios.
    *   Sin comas finales (trailing commas).
    *   Comillas dobles para claves y cadenas.
    *   Final de línea: LF.

## Herramientas

El workflow de GitHub `jsonlint.yml` utiliza las siguientes herramientas para asegurar el cumplimiento:

*   **jsonlint**: Validación de sintaxis estricta.
*   **prettier**: Verificación y corrección automática de estilo (usando `.prettierrc.json`).

## Configuración

La configuración se encuentra en `.prettierrc.json`.
