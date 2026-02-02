# Ka0s Lint Markdown - Concepto y Funcionamiento

## Descripción General
**Ka0s Lint Markdown** es una "Composite Action" encargada de mantener la calidad de la documentación en el proyecto Ka0s. Dado el énfasis en la documentación exhaustiva (como esta misma guía), asegurar que los archivos `.md` sean legibles y sigan un estándar es vital.

## Arquitectura de Validación Dual
Al igual que sus contrapartes, utiliza dos niveles de chequeo:

1.  **Validación de Sintaxis/Reglas (Hard Check)**:
    *   **Herramienta**: `markdownlint-cli`
    *   **Propósito**: Verificar reglas de estructura (ej. niveles de encabezados correctos, no usar HTML inline excesivo, listas bien formadas).
    *   **Comportamiento**: Reporta violaciones de reglas estándar de Markdown.

2.  **Validación de Estilo (Soft Check)**:
    *   **Herramienta**: `prettier`
    *   **Propósito**: Formateo de texto (ancho de línea, espaciado en tablas, consistencia en viñetas).
    *   **Comportamiento**: Asegura una experiencia de lectura consistente.

## Mecanismo de Auto-Curación (Self-Healing)
*   Soporta el parámetro `fix: true`.
*   Utiliza `markdownlint --fix` y `prettier --write` para corregir automáticamente problemas comunes como espaciado incorrecto, líneas en blanco faltantes o indentación de listas.

## Herramientas Utilizadas
*   **markdownlint-cli**: Linter de línea de comandos para reglas de Markdown.
*   **prettier**: Formateador universal.
*   **npm**: Para la instalación de ambas herramientas.
