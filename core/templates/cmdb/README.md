# Templates CMDB Ka0s

Este directorio contiene las plantillas JSON estándar para definir Elementos de Configuración (CIs) en la CMDB de iTop.

## Uso

1.  Copia el archivo `.json` correspondiente al tipo de CI que deseas crear.
2.  Pégalo en la ruta de ingestión: `devops/core/cmdb/`.
3.  Renombra el archivo con un nombre descriptivo (ej. `srv-prod-01.json`).
4.  Rellena los campos dentro del objeto `fields`.
    *   **Nota**: Los campos que referencian a otros objetos (como `org_id`, `location_id`) deben contener el **Nombre** exacto del objeto relacionado tal como existe en iTop (Reconciliación por nombre).

## Estructura del JSON

```json
{
  "description": "Descripción opcional del template",
  "class": "NombreDeLaClaseITop",
  "fields": {
    "atributo1": "valor1",
    "atributo2": "valor2"
  }
}
```

## Clases Disponibles

*   **Infraestructura**: `Organization`, `Location`, `Server`, `NetworkDevice`, `Farm`
*   **Contactos**: `Person`, `Team`
*   **Aplicaciones**: `ApplicationSolution`, `WebServer`, `DBServer`
