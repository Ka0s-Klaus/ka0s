# Ka0s Lint JSON - Concepto y Funcionamiento

## Descripción General
**Ka0s Lint JSON** es una "Composite Action" de GitHub diseñada para garantizar la integridad y el estilo de los archivos JSON dentro del workspace de Ka0s. Esta acción encapsula la lógica de validación en un componente reutilizable, permitiendo que múltiples workflows mantengan estándares consistentes sin duplicar código.

## Arquitectura de Validación Dual
Esta acción implementa una estrategia de validación en dos niveles:

1.  **Validación de Sintaxis (Hard Check)**:
    *   **Herramienta**: `jsonlint`
    *   **Propósito**: Asegurar que el archivo sea un JSON válido.
    *   **Comportamiento**: Si la sintaxis es incorrecta, la acción falla inmediatamente. Los errores de sintaxis no son recuperables automáticamente.

2.  **Validación de Estilo (Soft Check)**:
    *   **Herramienta**: `prettier`
    *   **Propósito**: Asegurar que el formato (indentación, espaciado) cumpla con los estándares de Ka0s.
    *   **Comportamiento**: Si el estilo es incorrecto, la acción puede optar por fallar o intentar corregirlo automáticamente (Self-Healing).

## Mecanismo de Auto-Curación (Self-Healing)
Una de las características clave de esta acción es su capacidad de **Self-Healing**.
*   Si el parámetro `fix` se establece en `true`.
*   Y se detectan errores de *estilo* (no de sintaxis).
*   La acción ejecutará `prettier --write` para corregir automáticamente el archivo.
*   Si la corrección es exitosa, el workflow continúa como exitoso.

## Herramientas Utilizadas
*   **jsonlint**: Parser y validador estricto de JSON.
*   **prettier**: Formateador de código opinionado.
*   **bash**: Scripting para la lógica de control de flujo.
