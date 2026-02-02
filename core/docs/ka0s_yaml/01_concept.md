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
