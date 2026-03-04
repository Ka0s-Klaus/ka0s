# Concepto y Arquitectura: Estandarización de Workflows

## Filosofía "Golden Path"
En Ka0s, adoptamos la filosofía del **"Golden Path"** (Camino Dorado) para la automatización. Esto significa proveer plantillas soportadas y opinadas que reducen la carga cognitiva y garantizan que todos los procesos automáticos cumplan con los estándares de calidad, seguridad y observabilidad del proyecto desde el día uno.

El objetivo no es restringir, sino facilitar: "Haz lo correcto, de la manera más fácil".

## Estructura Estándar de un Workflow
Todo workflow en Ka0s, independientemente de su propósito (CI, CD, Auditoría, Mantenimiento), debe adherirse a una estructura canónica dividida en tres fases lógicas:

### 1. Inicialización y Configuración
*   Definición clara de `name` y `on` (triggers).
*   Configuración de permisos mínimos a nivel global (`permissions: contents: read`) y elevación granular solo por job cuando se requiera (p.ej., `contents: write` para commits, `issues: write` para incidencias, `actions: write` para disparar workflows).
*   Variables de entorno globales para trazabilidad (`KAOS_MODULE`, `KAOS_CODE`, `KAOS_ACTOR`).

### 2. Núcleo de Ejecución (`job-core`)
*   Es el job principal donde reside la lógica de negocio.
*   Debe ser idempotente siempre que sea posible.
*   Genera salidas (outputs) que determinan el éxito o fallo funcional.

### 3. Ciclo de Vida y Auditoría
Garantizamos que **siempre** sepamos qué pasó, cuándo y por qué.
*   **`handle-success`**: Se ejecuta si `job-core` termina bien. Notifica o registra el éxito.
*   **`handle-failure`**: Se ejecuta si `job-core` falla (sin depender de `handle-success`). Abre issues, manda alertas o registra el error.
*   **`end-workflow`**: (Recomendado) Cierre formal que dispara `inspector.yml` para auditoría, con permisos `actions: write`.

## Beneficios
*   **Observabilidad Uniforme**: Todos los workflows reportan de la misma manera.
*   **Mantenibilidad**: Si mejoramos la plantilla base, es fácil propagar mejoras.
*   **Seguridad por Defecto**: Permisos restringidos por defecto, uso de `GITHUB_TOKEN` y buenas prácticas anti-inyección.
