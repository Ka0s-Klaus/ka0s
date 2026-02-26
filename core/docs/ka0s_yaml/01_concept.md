# Ka0s Lint YAML - Concepto y Funcionamiento

## Descripción General
**Ka0s Lint YAML** es una "Composite Action" de GitHub que asegura la validez sintáctica y el estilo consistente de los archivos YAML en el proyecto Ka0s. Dado que YAML es el lenguaje principal para definir workflows de GitHub Actions y configuraciones de Kubernetes, esta acción es crítica para la estabilidad de la infraestructura.

## Arquitectura de Validación Dual
La acción emplea dos motores de validación secuenciales:

1.  **Validación de Sintaxis (Hard Check)**:
    *   **Herramienta**: `yamllint`
    *   **Propósito**: Detectar errores estructurales, indentación incorrecta que rompa la lógica, y violaciones de buenas prácticas (ej. llaves duplicadas).
    *   **Comportamiento**: Fallo inmediato ante errores críticos. Utiliza una configuración personalizada (`core/config/kaos-yamllint-config.yaml`).

2.  **Validación de Estilo (Soft Check)**:
    *   **Herramienta**: `prettier`
    *   **Propósito**: Estandarizar el formato visual (espaciado, comillas, saltos de línea).
    *   **Comportamiento**: Detecta desviaciones estilísticas y permite corrección automática.

## Mecanismo de Auto-Curación (Self-Healing)
Incluye capacidad de **Self-Healing** activada mediante el input `fix: true`:
*   Si `yamllint` aprueba la estructura (el YAML es válido).
*   Pero `prettier` detecta problemas de formato.
*   La acción reescribe el archivo con el formato correcto automáticamente.

## Herramientas Utilizadas
*   **yamllint**: Linter específico para YAML, enfocado en corrección estructural.
*   **prettier**: Formateador de código para consistencia visual.
*   **pip**: Gestor de paquetes para instalar `yamllint`.
*   **npm**: Gestor de paquetes para instalar `prettier`.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
