# Integración en el Ecosistema

## Dependencias
- Workflow orquestador: `.github/workflows/github-sync-itop.yml`.
- Runtime: Python 3.10 + librería `requests`.
- Secretos: `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`.
- Variables:
  - `ITOP_ORIGIN` (nombre de la Organización).
  - `ITOP_IMPACT_*` / `ITOP_URGENCY_*` para alinear el mapeo impacto/urgencia con el datamodel local.

## Mapeo de Campos por Clase

| Clase iTop | Template GitHub | Campos Obligatorios (Sync) | Campos Opcionales | Notas |
|---|---|---|---|---|
| **UserRequest** | - | Título, Descripción, Org, Caller | Impacto, Urgencia, Origen | Clase por defecto. Log: `public_log`. |
| **Incident** | `incident.yml` | Título, Descripción, Org, Caller, Estado, Impacto, Urgencia | Servicio, Origen | `status` mapeado explícitamente. `priority` se calcula en iTop. Log: `public_log`. |
| **Problem** | `problem.yml` | Título, Descripción, Org, Servicio, Impacto, Urgencia | - | Log: `private_log`. |
| **Change** | `change.yml` | Título, Descripción, Org, Tipo de Cambio | Outage | Log: `private_log`. Subclases según Tipo (`Normal`, `Routine`, `Emergency`). |

## Interoperabilidad
- Soporta eventos de Issues y Comentarios para mantener sincronización con iTop.
- Genera evidencias inmutables en `audit/sync/` para trazabilidad.
- Mapeo por etiquetas del Issue → clases iTop: `itop-incident`/`Incident`, `itop-problem`/`Problem`, `itop-change`/`Change`, `itop-request`/`UserRequest`.
- Búsqueda idempotente por marcador en el título `[GH:#<n> <owner>/<repo>]`.

### Clases de Cambio (ITIL)
- El módulo ITIL de cambios usa subclases: `NormalChange`, `RoutineChange`, `EmergencyChange`.
- La subclase efectiva se determina por el campo "Tipo de cambio" en la plantilla de GitHub:
  - `Normal` → `NormalChange`
  - `Routine` → `RoutineChange`
  - `Emergency` → `EmergencyChange`
- El atributo `outage` solo aplica a cambios: se mapea a `yes`/`no` a partir del campo "Outage".
- Los cambios (`Change`) no exponen `public_log`: las entradas de log se agregan a `private_log`.

## Seguridad
- Uso de secretos para autenticación con iTop (nunca embebidos en código).
- Principio de mínimo privilegio en permisos del workflow.
- Permisos actuales: `contents: write`, `issues: write`, `actions: write`.
39→- Uso de `KAOS_REPO_TOKEN` (o PAT equivalente) para permitir operaciones a nivel de organización y evitar la limitación recursiva de `GITHUB_TOKEN`. El workflow implementa un fallback robusto: `${{ secrets.KAOS_REPO_TOKEN || secrets.GITHUB_TOKEN }}`.
40→- Validación estricta de regex en el script Python para evitar inyecciones en campos de texto libre.

## Runners
- Recomendado `swarm-runners-scaleset` (self-hosted) con conectividad saliente hacia la instancia de iTop.

## Requisitos de iTop
- `ITOP_ORIGIN` debe existir como Organización en iTop.
- El `ITOP_API_USER` debe ser un `User` con login coincidente y vinculado a un `Person`.
- Los estímulos `ev_assign`, `ev_resolve`, `ev_close` deben estar habilitados en el ciclo de vida de la clase.
 - Notas de envío de campos:
   - `origin` se envía solo para `UserRequest` e `Incident`.
   - `status` se envía explícitamente para `Incident` si está presente en la plantilla.
   - `impact`/`urgency` se calculan desde la plantilla; pueden ajustarse con `ITOP_IMPACT_*` y `ITOP_URGENCY_*`.
