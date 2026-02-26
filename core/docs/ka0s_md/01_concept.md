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

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
