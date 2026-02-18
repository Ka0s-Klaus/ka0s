# Concepto y Arquitectura: GitHub → iTop Sync

## Descripción General
El workflow escucha eventos de Issues en GitHub y sincroniza la información relevante hacia iTop. Toda acción realizada queda auditada en `audit/sync/`.

## Disparadores
- `issues`: tipos `opened`, `edited`, `closed`.
- `issue_comment`: tipo `created`.

## Arquitectura Técnica
- Orquestación: [github-sync-itop.yml](file:///Users/santale/ka0s-klaus/ka0s/.github/workflows/github-sync-itop.yml).
- Runtime: `swarm-runners-scaleset`.
- Dependencias: Python 3.10 + `requests`.
- Lógica: script de sincronización que consume variables del evento y credenciales de iTop.
- Evidencias: salida JSON movida a `audit/sync/<timestamp>_issue_<ID>.json` y commit automático.

## Variables y Secretos
- `ITOP_URL`: URL base de iTop.
- `ITOP_API_USER` / `ITOP_API_PASSWORD`: credenciales de acceso a la API.
- Eventos GitHub:
  - `GITHUB_EVENT_NAME`, `GITHUB_EVENT_ACTION`.
  - `GITHUB_ISSUE_PAYLOAD`, `GITHUB_COMMENT_PAYLOAD`, `GITHUB_REPO_FULL_NAME`.

## Flujo Resumido
1. Checkout del repositorio.
2. Preparación de Python y dependencias.
3. Ejecución del script de sincronización y generación de `result.json`.
4. Persistencia de evidencias en `audit/sync/` y commit condicional.

