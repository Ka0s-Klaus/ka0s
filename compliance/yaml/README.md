# Ka0s YAML Compliance

Este directorio contiene las reglas de conformidad para todos los archivos YAML en el ecosistema Ka0s.

## Estándares

1.  **Sintaxis**: Verificado por `yamllint`.
    *   Reglas: Definidas en `core/config/kaos-yamllint-config.yaml`.
    *   Excepciones: line-length, indentation, trailing-spaces (desactivados/laxos según config actual).

2.  **Formato**:
    *   Indentación: 2 espacios.
    *   Final de línea: LF.

## Herramientas

El workflow de GitHub `yamllint.yml` utiliza:

*   **yamllint**: Validación de sintaxis y estructura YAML.
*   **prettier**: Verificación y corrección automática de estilo.

## Configuración

La configuración de estilo se encuentra en `.prettierrc.json`.
