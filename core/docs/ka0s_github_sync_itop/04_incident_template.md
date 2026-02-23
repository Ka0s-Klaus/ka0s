# Plantilla de Incidencia (Issue Form)

## Propósito
Estandarizar la creación de incidencias operacionales en GitHub y sincronizarlas con iTop mediante el módulo Ka0s GitHub → iTop Sync. La plantilla guía al usuario, mejora la calidad de los datos y facilita su mapeo hacia iTop.

## Ubicación
- Plantilla: [.github/ISSUE_TEMPLATE/incident.yml](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/.github/ISSUE_TEMPLATE/incident.yml)
- Orquestador: [.github/workflows/github-sync-itop.yml](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/.github/workflows/github-sync-itop.yml)
- Script de sincronización: [.github/scripts/github-sync-itop.py](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/.github/scripts/github-sync-itop.py)

## Etiquetas y Clasificación
- Etiqueta requerida: `itop-incident`. Determina la clase de iTop (`Incident`).
- Etiquetas alternativas soportadas por el módulo: `itop-request` (`UserRequest` por defecto), `itop-problem` (`Problem`), `itop-change` (`Change`).

## Campos de la Plantilla
La plantilla define campos agrupados de la siguiente forma:

- Identidad
  - Solicitante (obligatorio): GitHub user o nombre completo.
  - Origen (obligatorio): Portal, Monitoring (u otros valores si la plantilla se amplía).

- Datos de Evento Zabbix (opcionales)
  - Trigger Name, Host Name, Trigger Severity, Event Date & Time, Event ID.
  - Item Name, Item Last Value, Trigger Description, Trigger URL.
  - Trigger Problem Expression, Event Tags, Event Acknowledged Status.

- Clasificación iTop
  - Impacto (obligatorio): Bajo, Medio, Alto.
  - Urgencia (obligatorio): Baja, Media, Alta.

Estos valores se serializan como Markdown en el cuerpo del Issue. El script de sincronización los extrae y mapea cuando aplica.

## Mapeo a iTop
- Clase objetivo: derivada por etiquetas (ver arriba).
- caller_id (Persona): se resuelve automáticamente a partir de “Solicitante”:
  - Primero intenta coincidir con `User.login` en iTop (si se indica `@usuario` de GitHub).
  - Si falla, busca por `Person.friendlyname`.
- origin: mapeo de texto a valores estándar (`portal`, `phone`, `mail`) cuando es reconocible.
- impact y urgency: convertidos a códigos numéricos según:
  - Mapeo por variables opcionales `ITOP_IMPACT_*` y `ITOP_URGENCY_*` cuando están definidas.
  - Fallback razonable para textos en ES/EN (ej. “baja/media/alta” → 1/2/3).
- org_id: se toma de la variable `ITOP_ORIGIN` configurada en el repositorio.
- Campos Zabbix: no se mapean a atributos específicos de iTop; permanecen en la descripción para contexto y auditoría.

## Comportamiento del Flujo
- Creación: al abrir el Issue, si no existe ticket con marcador en el título, crea un ticket en iTop (`core/create`). El título añade un marcador `[GH:#<n> <owner>/<repo>]` para idempotencia.
- Edición: actualiza descripción y registra evento en `public_log` (`core/update`).
- Comentarios: cualquier comentario añade entrada en `public_log` (`core/update` con `add_item`).
- Cierre: al cerrar el Issue, aplica `ev_assign` → `ev_resolve` → `ev_close`. En errores, deja trazabilidad en `public_log`.
- Auditoría: cada sincronización genera un JSON en `audit/sync/<timestamp>_<itop_ref>_<issue>.json` y, si hay error, un segundo fichero `*_ERROR.json`.

## Requisitos y Seguridad
- Secretos/variables:
  - `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD` (obligatorios).
  - `ITOP_ORIGIN` (obligatoria por datamodel), `ITOP_IMPACT_*`, `ITOP_URGENCY_*` (opcionales para mapeos finos).
- Permisos mínimos del workflow declarados en `permissions`.
- Runners: `swarm-runners-scaleset`.

## Validación Rápida
1. Crear una incidencia usando la plantilla y añadir la etiqueta `itop-incident`.
2. Verificar la ejecución del job “Ka0s GitHub → iTop Sync” y ausencia de errores.
3. Comprobar en `audit/sync` la aparición del fichero JSON con referencia iTop.
4. Validar en iTop la creación/actualización del ticket y el `public_log` al añadir comentarios.
5. Cerrar el Issue y confirmar la secuencia de cierre en iTop.

## Relación con la Documentación del Módulo
- Concepto/Arquitectura: [01_concept.md](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/core/docs/ka0s_github_sync_itop/01_concept.md)
- Guía de uso y validación: [02_usage_validation.md](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/core/docs/ka0s_github_sync_itop/02_usage_validation.md)
- Integración en el ecosistema: [03_integration.md](file:///c:/Users/AdriánLozano/OneDrive%20-%20kyndryl/Desktop/B2B%20MasOrange/Proyecto/ka0s/core/docs/ka0s_github_sync_itop/03_integration.md)

