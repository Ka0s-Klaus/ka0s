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
  - Impacto ← impact (Requerido en template)
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

- Módulo estándar (itop-change-mgmt)
  - Obligatorios (iTop):
    - Título del issue ← title (Obligatorio)
    - Descripción ← description (Obligatorio)
    - Organización ← organization (Obligatorio)
    - Solicitante ← caller (Obligatorio)
    - Ref (Obligatorio en iTop, generado automáticamente; no se captura en GitHub)
  - Requeridos en la plantilla (no obligatorios en iTop):
    - CIs impactados ← service (Requerido en template)
    - Origen ← origin (Requerido en template)
    - Impacto ← impact (Requerido en template)
    - Urgencia ← urgency (Requerido en template)
  - Opcionales (iTop):
    - Plan de vuelta atrás ← backout (Opcional; pasa a obligatorio en estado Planned)
    - Outage (Opcional)
    - Start date / End date (Opcionales)
    - Category, Team, Agent, Change manager, Status, Parent change, fechas de sistema (Opcionales/solo lectura según ciclo de vida)
  - Presentes pero desactivados en la template:
    - start_date / end_date / outage (descomentar si se planifica ejecución)

- Módulo ITIL (itop-change-mgmt-itil)
  - Obligatorios (iTop):
    - Título del issue ← title (Obligatorio)
    - Descripción ← description (Obligatorio)
    - Outage (Obligatorio)
    - Ref (Obligatorio en iTop, generado automáticamente; no se captura en GitHub)
    - Organización (habitualmente requerida por el datamodel/instancia; fijada vía `ITOP_ORIGIN`)
  - No obligatorios (iTop) pero disponibles:
    - Impact (Existe en ITIL; No obligatorio)
    - Caller (No obligatorio en ITIL)
    - Equipos/roles adicionales: Supervisor/Manager (No obligatorios)
    - Start date / End date (pueden ser obligatorios en determinados estados del ciclo ITIL)
    - Plan de vuelta atrás ← backout (puede ser obligatorio según estado)
  - Requeridos en la plantilla (para priorización/operación):
    - Origen, Impacto, Urgencia (metadatos auxiliares; Urgencia no es campo nativo en ITIL Change)
    - CIs impactados ← service (relación de CIs)
  - Recomendación ITIL:
    - Activar el campo `outage` en la template o establecer un valor por defecto en el flujo de sincronización, ya que es obligatorio en ITIL.

### Flujo de sincronización
1. Creación/edición/cierre de Issue dispara el workflow `github-sync-itop`.
2. Se determina la clase iTop por etiqueta (`itop-incident`, `itop-change`, etc.).
3. Se construye el payload y se invoca la REST API de iTop.
4. Se generan evidencias en `audit/sync/` con resultado y posibles errores.
