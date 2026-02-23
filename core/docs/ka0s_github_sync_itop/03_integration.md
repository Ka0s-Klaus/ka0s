# Integración en el Ecosistema

## Dependencias
- Workflow orquestador: `.github/workflows/github-sync-itop.yml`.
- Runtime: Python 3.10 + librería `requests`.
- Secretos: `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`.
- Variables:
  - `ITOP_ORIGIN` (nombre de la Organización).
  - `ITOP_IMPACT_*` / `ITOP_URGENCY_*` para alinear el mapeo impacto/urgencia con el datamodel local.

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
- Evita inyección directa de inputs en `run:` a través de variables de entorno.

## Runners
- Recomendado `swarm-runners-scaleset` (self-hosted) con conectividad saliente hacia la instancia de iTop.

## Requisitos de iTop
- `ITOP_ORIGIN` debe existir como Organización en iTop.
- El `ITOP_API_USER` debe ser un `User` con login coincidente y vinculado a un `Person`.
- Los estímulos `ev_assign`, `ev_resolve`, `ev_close` deben estar habilitados en el ciclo de vida de la clase.
 - Notas de envío de campos:
   - `origin` se envía solo para `UserRequest` e `Incident`.
   - `impact`/`urgency` se calculan desde la plantilla; pueden ajustarse con `ITOP_IMPACT_*` y `ITOP_URGENCY_*`.
