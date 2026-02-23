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

## Plantillas de Issues → iTop

### Incident
- Plantilla: `.github/ISSUE_TEMPLATE/incident.yml`
- Requeridos en la plantilla:
  - Título del issue ← title (Requerido por GitHub)
  - Servicio Afectado ← service (Requerido en template)
  - Descripción ← description (Requerido en template)
  - Impaco ← impact (Requerido en template)
  - Urgencia ← urgency (Requerido en template)
- Opcionales en la plantilla:
  - Pasos / Evidencias ← reproduction (Opcional)
- Obligatorios (iTop) cubiertos por la integración:
  - Organización ← organization (Proviene de `ITOP_ORIGIN`)
  - Solicitante ← caller (Derivado del actor de GitHub o mapeo interno)
- Notas de mapeo:
  - Servicio afectado se usa para relacionar CIs en iTop
  - Impacto / Urgencia se transforman a códigos internos si se configuran `ITOP_IMPACT_*` / `ITOP_URGENCY_*`

### Change (iTop)
- Plantilla: `.github/ISSUE_TEMPLATE/change.yml`
- Obligatorios (iTop):
  - Título del issue ← title (Obligatorio)
  - Descripción ← description (Obligatorio)
  - Solicitante ← caller (Requester) (Obligatorio)
  - Organización ← organization (Obligatorio)
- Requeridos en la plantilla (no obligatorios en iTop):
  - CIs impactados ← service (Requerido en template)
  - Origen - origin (Requerido en template)
  - Impacto - impact (Requerido en template)
  - Urgencia - urgency (Requerido en template)
- Opcionales:
  - Plan de vuelta atrás ← Fallback plan, backout (Opcional; puede ser obligatorio en estado Planned según flujo)
  - Fecha de inicio/fin/interrupción ← start_date / end_date / outage (Opcionales; presentes pero desactivados en la template)
  - Riesgo ← risk (Opcional; campo auxiliar)

### Flujo de sincronización
1. Creación/edición/cierre de Issue dispara el workflow `github-sync-itop`.
2. Se determina la clase iTop por etiqueta (`itop-incident`, `itop-change`, etc.).
3. Se construye el payload y se invoca la REST API de iTop.
4. Se generan evidencias en `audit/sync/` con resultado y posibles errores.
