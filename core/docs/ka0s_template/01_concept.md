# Concepto y Arquitectura: Plantillas de Automatización

## Filosofía
En Ka0s, la automatización no es opcional ni artesanal. Seguimos el principio de **"Golden Path"**: proveer una ruta pavimentada y estandarizada para crear automatizaciones seguras y consistentes.

El directorio `core/templates/workflow` es la fuente de verdad para la creación de cualquier nuevo pipeline de CI/CD u operación.

## Componentes del Estándar

### 1. Identidad Unificada
Todo workflow debe ser identificable y trazable.
*   **Prefijo**: `[Ka0s]` en el nombre visible.
*   **Variables de Contexto**:
    *   `KAOS_MODULE`: Qué es esto.
    *   `KAOS_CORRELATION_ID`: Identificador único de ejecución (`run_id`).
    *   `KAOS_ACTOR`: Responsable de la ejecución.

### 2. Ciclo de Vida Estructurado
Abandonamos los scripts monolíticos por una estructura de fases claras:
1.  **Core Execution**: La lógica de negocio.
2.  **Handle Success/Failure**: Gestión de estados finales.
3.  **End Workflow**: Cierre administrativo (notificaciones, auditoría).

### 3. Inmutabilidad y Auditoría
Los workflows no solo "hacen cosas", sino que **dejan evidencia**.
*   Uso de `git` para commitear logs y reportes.
*   Integración con el sistema de Issues para notificar resultados.

## Estructura de Archivos
```
core/templates/
└── workflow/
    ├── basic-template.yaml  # La plantilla maestra
    └── README.md            # Guía rápida de implementación
```
