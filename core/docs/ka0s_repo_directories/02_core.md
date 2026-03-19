# `core/`: núcleo funcional

## Propósito
`core/` agrupa el núcleo del proyecto: IA/agent, automatización, configuración y despliegues.

## Subdirectorios clave (alto nivel)
- `core/ai/`: inferencia del agente, memoria/ingest y evaluación.
- `core/automation/`: automatizaciones “de producto” (ej: integraciones como iTop).
- `core/b2b/`: manifiestos y despliegues de servicios core (Kubernetes).
- `core/config/`: configuraciones de linting/controles y ficheros de control.
- `core/docs/`: documentación viva del proyecto.

## `core/ai/` (en 60s)
- `core/ai/inference/query.py`: entrypoint del agente; incluye rutas deterministas y modo offline.
- `core/ai/eval/`: casos y runner de evaluación para validar respuestas.
- `core/ai/memory/`: ingesta y cronjob para pipeline de conocimiento.

## Patrón Ka0s
- Cambios funcionales relevantes deben traer:
  - docs en `core/docs/<modulo>/`.
  - verificación mínima (CI / dry-run / eval).

