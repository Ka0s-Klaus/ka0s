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
