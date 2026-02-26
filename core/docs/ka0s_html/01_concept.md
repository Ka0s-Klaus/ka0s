# Ka0s Lint HTML - Concepto y Funcionamiento

## Descripción General
**Ka0s Lint HTML** es una "Composite Action" destinada a validar archivos HTML. Aunque menos frecuente que YAML o JSON en este proyecto de infraestructura, es crucial para reportes generados, dashboards estáticos o documentación exportada en HTML.

## Arquitectura de Validación Dual
Sigue el patrón estándar de Ka0s Lint:

1.  **Validación de Sintaxis (Hard Check)**:
    *   **Herramienta**: `htmlhint` (o similar, configurado vía npm).
    *   **Propósito**: Detectar etiquetas no cerradas, atributos duplicados, y estructura DOM inválida.
    *   **Comportamiento**: Fallo crítico si el HTML es inválido.

2.  **Validación de Estilo (Soft Check)**:
    *   **Herramienta**: `prettier`
    *   **Propósito**: Indentación consistente y formato de etiquetas.
    *   **Comportamiento**: Asegura código limpio y legible.

## Mecanismo de Auto-Curación (Self-Healing)
*   Habilitado con `fix: true`.
*   Utiliza `prettier --write` para reformatear el HTML desordenado.
*   Esto es especialmente útil para HTML generado automáticamente que suele estar minificado o mal indentado.

## Herramientas Utilizadas
*   **htmlhint**: Linter estático para HTML.
*   **prettier**: Formateador.
*   **npm**: Instalación de dependencias.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
