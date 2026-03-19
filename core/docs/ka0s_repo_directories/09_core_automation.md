# `core/automation/`: automatizaciones por dominio

## Propósito
Automatizaciones “de producto” y por dominio (integraciones y sincronizaciones).

## Contenido típico
- Subcarpetas por dominio con scripts, dependencias y entrypoints.

## Ejemplos en este repo
- `core/automation/itop-sync/`

## Patrón Ka0s
- Scripts con `requirements.txt` o dependencias declaradas.
- Verificación mínima + evidencia en `audit/` cuando se ejecutan vía workflow.

