# Ka0s HTML Compliance

Este directorio contiene las reglas de conformidad para todos los archivos HTML en el ecosistema Ka0s.

## Estándares

1.  **Sintaxis**: Verificado por `htmllint-cli`.
    *   Reglas: Definidas en `core/config/.htmllintrc`.
    *   Foco: Accesibilidad, estructura válida, atributos prohibidos.

2.  **Formato**:
    *   Indentación: 2 espacios.
    *   Ancho de línea: 120 caracteres.
    *   Final de línea: LF.

## Herramientas

El workflow de GitHub `htmllint.yml` utiliza:

*   **htmllint-cli**: Validación de sintaxis y mejores prácticas HTML.
*   **prettier**: Verificación y corrección automática de estilo.

## Configuración

La configuración de estilo se encuentra en `.prettierrc.json`.
