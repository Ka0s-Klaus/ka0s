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
- Evidencias: salida JSON movida a `audit/sync/<timestamp>_<itop_ref>_<issue>.json` y commit automático.

## Comportamiento Funcional
- Detección de tipo ITSM por etiquetas del Issue:
  - `itop-incident` → `Incident`
  - `itop-problem` → `Problem`
  - `itop-change` → `Change`
  - `itop-request` → `UserRequest` (valor por defecto)
- Trazabilidad: inserta un marcador en el título del ticket `[GH:#<n> <owner>/<repo>]` y realiza la búsqueda por título.
- Comentarios: cualquier comentario en la Issue crea una entrada en `public_log` del ticket en iTop.
- Cierre: al cerrar la Issue se aplica una secuencia robusta en iTop:
  1. `ev_assign` al usuario API (por OQL de login)
  2. `ev_resolve` con `solution` y `resolution_code`
  3. `ev_close` con `user_satisfaction` y `user_comment`
  En caso de fallo en estímulos, se registra en `public_log` sin interrumpir el flujo.

## Mapa de Eventos GitHub → Operaciones iTop

| Evento GitHub              | Acción        | Operación iTop            | Tipo JSON en `audit/sync`                 | Notas clave                               |
|----------------------------|--------------|---------------------------|-------------------------------------------|-------------------------------------------|
| `issues`                   | `opened`     | `core/create`             | `operation: "create"`                    | Crea ticket nuevo con marcador en título. |
| `issues`                   | `edited`     | `core/update`             | `operation: "update"`                    | Actualiza descripción y añade `public_log`.|
| `issues`                   | `closed`     | `ev_assign` → `ev_resolve` → `ev_close` | `operation: "close"`                     | Asigna, resuelve y cierra el ticket.      |
| `issue_comment`            | `created`    | `core/update` (`public_log`) | `operation: "add_comment"`             | Añade comentario a `public_log`.          |
| `issue_comment` (sin ticket previo) | `created`    | `core/create`             | `operation: "create_from_comment"`       | Crea ticket mínimo y registra el comentario.|

## Variables y Secretos
- `ITOP_URL`: URL base de iTop.
- `ITOP_API_USER` / `ITOP_API_PASSWORD`: credenciales de la API.
- `ITOP_ORIGIN`: nombre de la Organización en iTop (requerida por el datamodel).
- Eventos GitHub:
  - `GITHUB_EVENT_NAME`, `GITHUB_EVENT_ACTION`.
  - `GITHUB_ISSUE_PAYLOAD`, `GITHUB_COMMENT_PAYLOAD`, `GITHUB_REPO_FULL_NAME`.

## Flujo Resumido
1. Checkout del repositorio.
2. Preparación de Python y dependencias.
3. Ejecución del script de sincronización y generación de `result.json`.
4. Persistencia de evidencias en `audit/sync/` y commit condicional.
