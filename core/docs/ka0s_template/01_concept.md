# Concepto y Arquitectura: Estandarización de Workflows

## Filosofía "Golden Path"
En Ka0s, adoptamos la filosofía del **"Golden Path"** (Camino Dorado) para la automatización. Esto significa proveer plantillas soportadas y opinadas que reducen la carga cognitiva y garantizan que todos los procesos automáticos cumplan con los estándares de calidad, seguridad y observabilidad del proyecto desde el día uno.

El objetivo no es restringir, sino facilitar: "Haz lo correcto, de la manera más fácil".

## Estructura Estándar de un Workflow
Todo workflow en Ka0s, independientemente de su propósito (CI, CD, Auditoría, Mantenimiento), debe adherirse a una estructura canónica dividida en tres fases lógicas:

### 1. Inicialización y Configuración
*   Definición clara de `name` y `on` (triggers).
*   Configuración de permisos mínimos (`permissions: contents: read`).
*   Variables de entorno globales para trazabilidad (`KAOS_MODULE`, `KAOS_AREA`).

### 2. Núcleo de Ejecución (`job-core`)
*   Es el job principal donde reside la lógica de negocio.
*   Debe ser idempotente siempre que sea posible.
*   Genera salidas (outputs) que determinan el éxito o fallo funcional.

### 3. Ciclo de Vida y Auditoría
Garantizamos que **siempre** sepamos qué pasó, cuándo y por qué.
*   **`handle-success`**: Se ejecuta si `job-core` termina bien. Notifica o registra el éxito.
*   **`handle-failure`**: Se ejecuta si `job-core` falla. Abre issues, manda alertas o registra el error.
*   **`end-workflow`**: (Opcional pero recomendado) Cierre formal de la auditoría.

## Beneficios
*   **Observabilidad Uniforme**: Todos los workflows reportan de la misma manera.
*   **Mantenibilidad**: Si mejoramos la plantilla base, es fácil propagar mejoras.
*   **Seguridad por Defecto**: Permisos restringidos y manejo seguro de secretos integrados.
