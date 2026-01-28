# Guía de Integración API REST iTop 3.2 para UserRequest

Este documento detalla cómo interactuar con los diferentes tipos de campos de la clase `UserRequest` (Requerimientos de Usuario) utilizando la API REST de iTop 3.2.

## Estructura Base

Todas las peticiones a la API REST de iTop deben seguir una estructura JSON estándar. El punto de entrada suele ser `/webservices/rest.php` y se recomienda especificar la versión `1.3` para máxima compatibilidad.

```bash
curl -X POST "https://tu-itop/webservices/rest.php?version=1.3" \
    -u "user:password" \
    --data-urlencode "json_data={ ... }"
```

## Operaciones Principales

*   **`core/create`**: Crear un nuevo ticket.
*   **`core/update`**: Modificar campos de un ticket existente.
*   **`core/apply_stimulus`**: Cambiar el estado del ticket (ej. asignar, resolver).

---

## Manipulación de Campos por Tipo

A continuación se explica cómo formatear el JSON para cada tipo de dato en iTop.

### 1. Campos Simples (String, Integer, Decimal, Enum)
Estos campos se asignan directamente como pares clave-valor en el objeto `fields`.

*   **Ejemplos**: `title`, `impact`, `urgency`.

```json
"fields": {
    "title": "Problema con la impresora",
    "impact": 2, 
    "urgency": 3,
    "status": "new"
}
```

### 2. Fechas y Horas (Date, DateTime)
Deben enviarse como cadenas de texto en formato SQL estándar.

*   **Formato**: `"YYYY-MM-DD HH:MM:SS"`

```json
"fields": {
    "start_date": "2023-10-25 09:00:00",
    "end_date": "2023-10-25 18:00:00"
}
```

### 3. Campos HTML (AttributeHTML)
Se tratan como cadenas de texto. Es importante escapar correctamente las comillas dobles si se incluye código HTML dentro del JSON.

*   **Ejemplos**: `description`, `solution`.

```json
"fields": {
    "description": "<p>El usuario reporta un error <b>500</b> al acceder.</p>",
    "solution": "Se reinició el servicio Apache."
}
```

### 4. Claves Externas (ExternalKey) - Relaciones 1:N
Representan enlaces a otros objetos (ej. Organización, Solicitante, Servicio). Se pueden asignar de dos formas:

**Opción A: Por ID (Recomendado si se conoce)**
```json
"fields": {
    "org_id": 5,
    "caller_id": 123
}
```

**Opción B: Por Reconciliación (Búsqueda OQL)**
Útil si solo tienes el nombre o correo del usuario, no su ID interno.
```json
"fields": {
    "org_id": { "name": "Demo Corporation" },
    "caller_id": { "email": "juan.perez@empresa.com" }
}
```
*Nota: iTop buscará un objeto que coincida con esos criterios.*

### 5. Logs (AttributeCaseLog) - `public_log`, `private_log`
**Importante:** No se puede sobrescribir el log entero. Se debe usar la estructura `add_item` para añadir una nueva entrada.

```json
"fields": {
    "public_log": {
        "add_item": {
            "message": "Actualización automática desde GitHub Actions.",
            "format": "text" 
        }
    }
}
```
*   `format`: Puede ser `"text"` o `"html"`.

### 6. Listas de Enlaces (LinkSet) - Relaciones N:N
Para campos que contienen listas de objetos relacionados (ej. Contactos interesados, CIs afectados). Se usa `add_item` para añadir relaciones sin borrar las existentes.

*   **Ejemplo**: Añadir un contacto a la lista de interesados (`contacts_list`).

```json
"fields": {
    "contacts_list": {
        "add_item": {
            "contact_id": { "email": "supervisor@empresa.com" },
            "reason": "Supervisor del solicitante"
        }
    }
}
```
*   Los atributos adicionales de la relación (como `reason` en `lnkContactToTicket`) se definen al mismo nivel que el ID.

---

## Ejemplo Completo: Resolver un Ticket

Este ejemplo muestra cómo aplicar un estímulo (`ev_resolve`) para resolver un ticket, asignando simultáneamente la solución, actualizando el log público y definiendo el equipo resolutor.

```json
{
  "operation": "core/apply_stimulus",
  "class": "UserRequest",
  "key": "R-000456",
  "stimulus": "ev_resolve",
  "comment": "Resolución automática",
  "fields": {
    "team_id": { "name": "Soporte Nivel 2" },
    "agent_id": { "email": "tecnico@empresa.com" },
    "solution": "Se aplicó el parche de seguridad v3.5.",
    "public_log": {
      "add_item": {
        "message": "Incidencia resuelta tras aplicar parche.",
        "format": "text"
      }
    }
  }
}
```
