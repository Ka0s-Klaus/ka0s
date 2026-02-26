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
- Evidencias: salida JSON movida a `audit/sync/<timestamp>_<itop_ref>_<issue>.json` y commit automático. En caso de error en la llamada a iTop se genera además `*_ERROR.json` con el mismo contenido para facilitar el filtrado.

## Comportamiento Funcional
- Detección de tipo ITSM por etiquetas del Issue y título:
  - `itop-incident` → `Incident`
  - `itop-problem` → `Problem`
  - `itop-change` → `Change` (mapeado a subclase efectiva: `NormalChange`, `RoutineChange` o `EmergencyChange` según el campo "Tipo de cambio" de la plantilla)
  - `itop-request` → `UserRequest` (valor por defecto)
- Trazabilidad: inserta un marcador en el título del ticket `[GH:#<n> <owner>/<repo>]` y realiza la búsqueda por título.
- Comentarios: el atributo de log depende de la clase en iTop:
  - `UserRequest`/`Incident` → `public_log`
  - `Problem`/`Change` (incluye `NormalChange`, `RoutineChange`, `EmergencyChange`) → `private_log`
- Cierre: al cerrar la Issue se aplica una secuencia robusta en iTop:
  1. `ev_assign` al usuario API (por OQL de login)
  2. `ev_resolve` con `solution` y `resolution_code`
  3. `ev_close` con `user_satisfaction` y `user_comment`
  En caso de fallo en estímulos, se registra en el log correspondiente a la clase (`public_log` o `private_log`) sin interrumpir el flujo.

## Mapa de Eventos GitHub → Operaciones iTop

| Evento GitHub              | Acción        | Operación iTop            | Tipo JSON en `audit/sync`                 | Notas clave                               |
|----------------------------|--------------|---------------------------|-------------------------------------------|-------------------------------------------|
| `issues`                   | `opened`     | `core/create`             | `operation: "create"`                    | Crea ticket nuevo con marcador en título. |
| `issues`                   | `edited`     | `core/update`             | `operation: "update"`                    | Actualiza descripción y añade log según clase.|
| `issues`                   | `closed`     | `ev_assign` → `ev_resolve` → `ev_close` | `operation: "close"`                     | Asigna, resuelve y cierra el ticket (log según clase). |
| `issue_comment`            | `created`    | `core/update` (log según clase) | `operation: "add_comment"`             | UR/Incident: `public_log`; Problem/Change: `private_log`.|
| `issue_comment` (sin ticket previo) | `created`    | `core/create`             | `operation: "create_from_comment"`       | Crea ticket mínimo y registra el comentario.|

## Variables y Secretos
- `ITOP_URL`: URL base de iTop.
- `ITOP_API_USER` / `ITOP_API_PASSWORD`: credenciales de la API.
- `ITOP_ORIGIN`: nombre de la Organización en iTop (requerida por el datamodel).
- Notas de mapeo:
  - El campo `Origen` (origin) solo se envía para `UserRequest` e `Incident`.
  - El campo `Outage` solo aplica a `Change` y se mapea a `outage: "yes"|"no"`.
  - Para `Change` se selecciona la subclase efectiva a partir de "Tipo de cambio": `Normal` → `NormalChange`, `Routine` → `RoutineChange`, `Emergency` → `EmergencyChange`.
- `ITOP_IMPACT_*` / `ITOP_URGENCY_*`: opcionales. Permiten alinear los valores numéricos de impacto/urgencia con el datamodel concreto de la instancia de iTop.
- Eventos GitHub:
  - `GITHUB_EVENT_NAME`, `GITHUB_EVENT_ACTION`.
  - `GITHUB_ISSUE_PAYLOAD`, `GITHUB_COMMENT_PAYLOAD`, `GITHUB_REPO_FULL_NAME`.

## Flujo Resumido
1. Checkout del repositorio.
2. Preparación de Python y dependencias.
3. Ejecución del script de sincronización y generación de `result.json`.
4. Persistencia de evidencias en `audit/sync/` y commit condicional.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
