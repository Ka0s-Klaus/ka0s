# Guía de Uso y Validación

## Ejecución
Este workflow se dispara automáticamente ante eventos de Issues:
- Crear un Issue (opened)
- Editar un Issue (edited)
- Cerrar un Issue (closed)
- Añadir un comentario (issue_comment: created)

## Resultados y Evidencias
- El paso de sincronización genera `result.json`.
- Si existe y tiene contenido, se mueve a `audit/sync/<timestamp>_<itop_ref>_<issue>.json`.
- Se realiza `git add` y commit condicional usando la identidad del bot.

## Validación Funcional
1. Crea un Issue de prueba y espera a que corra el workflow.
2. Revisa el job `sync-to-itop` y confirma que no hay errores.
3. Verifica la aparición de un nuevo archivo en `audit/sync/` con la referencia iTop en el nombre (ej. `R-000130`).
4. Si tienes acceso a iTop, comprueba que el ticket/clase correspondiente se ha creado/actualizado.
5. Añade un comentario en la Issue y valida que el `public_log` del ticket se actualiza (no se crean tickets nuevos).
6. Cierra la Issue y valida que el ticket pasa por asignación/resolución/cierre.

## Troubleshooting
- `result.json` vacío o inexistente: revisar logs del script Python.
- `jq` no disponible: el workflow instala `jq` antes de operar.
- Fallo de credenciales iTop: confirmar `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`.
- Permisos de push: el bot debe poder hacer commit a la rama objetivo.
- El ticket no cambia de estado al cerrar la Issue:
  - Verificar que `ITOP_API_USER` existe como `User` en iTop y está vinculado a un `Person`.
  - Confirmar que `ITOP_ORIGIN` está definido y correcto.
  - Revisar que los estímulos `ev_assign`, `ev_resolve`, `ev_close` están disponibles para la clase/estado actual.

## Ejemplos Reales de Auditoría

### Creación de Ticket (issues.opened)
Archivo: [20260218_193424_issue_4161.json](file:///Users/santale/ka0s-klaus/ka0s/audit/sync/20260218_193424_issue_4161.json)

```json
{
  "github_event": "issues",
  "github_action": "opened",
  "operation": "create",
  "itop_class": "UserRequest",
  "create": {
    "status": "ok",
    "response": {
      "code": 0,
      "objects": {
        "UserRequest::121": {
          "fields": {
            "ref": "R-000130",
            "title": "[GH:#4161 Ka0s-Klaus/ka0s] [REQUEST]: ...",
            "status": "new"
          }
        }
      }
    }
  }
}
```

### Comentario en Issue (issue_comment.created → add_comment)
Archivo: [20260218_200530_R-000133_4162.json](file:///Users/santale/ka0s-klaus/ka0s/audit/sync/20260218_200530_R-000133_4162.json)

```json
{
  "github_event": "issue_comment",
  "github_action": "created",
  "operation": "add_comment",
  "itop_class": "UserRequest",
  "itop_key": "124",
  "update": {
    "status": "ok",
    "response": { "code": 0 },
    "payload": {
      "fields": {
        "public_log": {
          "add_item": { "message": "Comentario de GitHub por ..." }
        }
      }
    }
  }
}
```

### Edición de Issue (issues.edited → update)
Ejemplo genérico de edición donde se actualiza el cuerpo de la Issue. El flujo detecta el ticket existente por el marcador en el título y ejecuta `core/update` sobre iTop.

```json
{
  "github_event": "issues",
  "github_action": "edited",
  "operation": "update",
  "itop_class": "UserRequest",
  "itop_key": "<ID_ITOP>",
  "update": {
    "status": "ok",
    "response": { "code": 0 }
  }
}
```

### Cierre de Issue (issues.closed → close)
Archivo: [20260218_201511_R-000133_4162.json](file:///Users/santale/ka0s-klaus/ka0s/audit/sync/20260218_201511_R-000133_4162.json)

```json
{
  "github_event": "issues",
  "github_action": "closed",
  "operation": "close",
  "itop_class": "UserRequest",
  "itop_key": "124",
  "close": {
    "status": "ok",
    "response": { "code": 0 }
  }
}
```

Tras este evento, el ticket debe transicionar a resuelto/cerrado en iTop, con entradas en `public_log` que reflejan la acción de cierre.

### Notas históricas (antes de la corrección de create_from_comment)
En las primeras ejecuciones, los eventos `issue_comment.created` buscaban el marcador únicamente en la descripción. Como el marcador se añadía al título, el flujo no encontraba el ticket existente y ejecutaba `core/create` de nuevo.

Ejemplo histórico: `create_from_comment` creando un segundo ticket para la misma Issue (antes de la corrección de búsqueda por título).

```json
{
  "github_event": "issue_comment",
  "github_action": "created",
  "operation": "create_from_comment",
  "itop_class": "UserRequest",
  "create": {
    "status": "ok",
    "response": { "code": 0 }
  }
}
```

Este comportamiento se corrigió cambiando la búsqueda OQL a `title LIKE "%[GH:#<n> <owner>/<repo>]"%"`, garantizando que los comentarios se agregan al `public_log` del ticket original mediante la operación `add_comment`/`update`.
