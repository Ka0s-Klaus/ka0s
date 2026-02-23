# Incidencias Zabbix HIGH → GitHub Issue

## Objetivo
Cuando Zabbix detecta un incidente con severidad **HIGH**, se crea un Issue en GitHub usando la plantilla [.github/ISSUE_TEMPLATE/incident.yml](file:///c:/Users/JhonathanChaves/Desktop/ka0s/.github/ISSUE_TEMPLATE/incident.yml).

Este Issue sirve como:
- Evidencia técnica del incidente (host/trigger/evento).
- Punto de colaboración y trazabilidad.
- Fuente de datos para la sincronización GitHub → iTop mediante `.github/scripts/github-sync-itop.py`.

## Campos iTop (obligatorios en la plantilla)
Los siguientes campos se usan para enriquecer el ticket en iTop. Se recomienda que el flujo automático los rellene siempre.

| Campo (label en Issue) | ID en plantilla | Ejemplo | Uso en iTop sync |
|---|---|---|---|
| Solicitante | `requester` | `zabbix` / `@usuario` | Se intenta resolver como `Person` y se asigna a `caller_id`. |
| Origen | `origin` | `Monitoring` | Se mapea a `origin` (si el valor coincide con los soportados en el script). |
| Organización | `organization` | `KA0S` | Si está presente, se incluye en el resumen y puede usarse como referencia. |
| Impacto | `impact` | `Alto` | Se envía a iTop si el valor puede mapearse al datamodel. |
| Urgencia | `urgency` | `Alta` | Se envía a iTop mapeando a un valor numérico. |

Nota: el script extrae estos valores buscando secciones `### <label>` dentro del cuerpo del Issue (no usa el `id` del formulario). Por eso, al crear Issues automáticamente es importante mantener exactamente estos encabezados.

## Campos técnicos Zabbix (recomendados)
La plantilla expone campos para capturar contexto clave del problema. Aunque el sincronizador no los mapea a campos estructurados de iTop, se copian íntegros a la descripción del ticket (porque el script inserta el body completo del Issue en `description`).

### Host
- `Host Name` (`{{HOST.NAME}}`)
- `Host Visible Name` (`{{HOST.HOST}}`)
- `Host IP` (`{{HOST.IP}}`)
- `Host DNS` (`{{HOST.DNS}}`)
- `Host Groups` (`{{HOSTGROUP.NAME}}`)

### Trigger
- `Trigger Name` (`{{TRIGGER.NAME}}`)
- `Trigger ID` (`{{TRIGGER.ID}}`)
- `Trigger Severity` (`{{TRIGGER.SEVERITY}}`)
- `Trigger Status` (`{{TRIGGER.STATUS}}`)
- `Trigger Value` (`{{TRIGGER.VALUE}}`)
- `Trigger Description` (`{{TRIGGER.DESCRIPTION}}`)
- `Trigger Operational Data` (`{{TRIGGER.OPDATA}}`)
- `Trigger Problem Expression` (`{{TRIGGER.EXPRESSION}}`)
- `Trigger URL` (`{{TRIGGER.URL}}`)

### Evento
- `Event ID` (`{{EVENT.ID}}`)
- `Event Name` (`{{EVENT.NAME}}`)
- `Event Date & Time` (`{{EVENT.DATE}} {{EVENT.TIME}}`)
- `Event Status` (`{{EVENT.STATUS}}`)
- `Event Age` (`{{EVENT.AGE}}`)
- `Event Duration` (`{{EVENT.DURATION}}`)
- `Recovery Date & Time` (`{{EVENT.RECOVERY.DATE}} {{EVENT.RECOVERY.TIME}}`)
- `Recovery Event ID` (`{{EVENT.RECOVERY.ID}}`)
- `Event Tags` (`{{EVENT.TAGS}}`)
- `Event Acknowledged Status` (`{{EVENT.ACK.STATUS}}`)
- `Event Update Message` (`{{EVENT.UPDATE.MESSAGE}}`)

### Item
- `Item Name` (`{{ITEM.NAME}}`)
- `Item Key` (`{{ITEM.KEY}}`)
- `Item ID` (`{{ITEM.ID}}`)
- `Item Last Value` (`{{ITEM.LASTVALUE}}`)

## Requisitos de consistencia para automatización
Si el Issue se crea automáticamente (sin usar el UI de “New issue”), el cuerpo debe generarse con los encabezados exactos para los campos de iTop:
- `### Solicitante`
- `### Origen`
- `### Organización`
- `### Impacto`
- `### Urgencia`

El resto de campos técnicos pueden ir también como `### <label>` o como bloque “key: value”; en ambos casos quedarán en la descripción del ticket iTop.

## Integración (Zabbix → GitHub)
El workflow [.github/workflows/zabbix-high-incident.yml](file:///c:/Users/JhonathanChaves/Desktop/ka0s/.github/workflows/zabbix-high-incident.yml) escucha un evento `repository_dispatch` con `event_type: zabbix_high_incident`.

### Payload esperado
El webhook debería enviar un JSON en `client_payload` con claves como estas (todas opcionales salvo las mínimas para título/dedupe):
- `trigger_name`, `host_name`, `trigger_severity`, `event_id`, `event_datetime`
- Opcionales: `trigger_id`, `host_ip`, `host_groups`, `item_name`, `item_lastvalue`, `event_tags`, etc.

### Ejemplo (curl)
```bash
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <GITHUB_TOKEN>" \
  https://api.github.com/repos/<owner>/<repo>/dispatches \
  -d '{
    "event_type": "zabbix_high_incident",
    "client_payload": {
      "trigger_name": "{{TRIGGER.NAME}}",
      "host_name": "{{HOST.NAME}}",
      "trigger_severity": "{{TRIGGER.SEVERITY}}",
      "event_id": "{{EVENT.ID}}",
      "event_datetime": "{{EVENT.DATE}} {{EVENT.TIME}}",
      "item_name": "{{ITEM.NAME}}",
      "item_lastvalue": "{{ITEM.LASTVALUE}}",
      "event_tags": "{{EVENT.TAGS}}"
    }
  }'
```

El workflow crea un Issue con etiquetas `itop-incident`, `triage` y `zabbix`. Si ya existe un Issue abierto con el mismo `Event ID` en el cuerpo, añade un comentario en lugar de crear uno nuevo.
