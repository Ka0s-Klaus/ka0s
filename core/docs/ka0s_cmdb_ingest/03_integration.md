# Ka0s CMDB Ingestion: Integración

## 1. Script de Ingesta
El núcleo de la integración es el script `core/scripts/cmdb_ingest.py`.

### Características Principales
*   **Smart Lookup**: Para campos que terminan en `_id` (ej. `org_id`, `location_id`), si el valor es un texto, el script busca automáticamente el objeto en iTop y usa su ID interno.
*   **Idempotencia**: Si el CI ya existe (buscado por nombre), se actualiza (`core/update`); si no, se crea (`core/create`).
*   **Orden de Ejecución**: Procesa los archivos alfabéticamente. Es importante nombrar los archivos de manera que las dependencias (ej. Organizaciones) se creen antes que los dependientes (ej. Servidores).

## 2. Automatización con GitHub Actions
El workflow `.github/workflows/cmdb-ingest.yml` orquesta la ejecución.

### Trigger
*   **Push**: En la ruta `devops/core/cmdb/**`.
*   **Workflow Dispatch**: Ejecución manual.

### Variables de Entorno (Secrets)
*   `ITOP_URL`: URL base de la API REST.
*   `ITOP_USER`: Usuario técnico con permisos REST/Admin.
*   `ITOP_PASSWORD`: Contraseña del usuario.

### Dependencias
*   Requiere conectividad desde los runners hacia la instancia de iTop (`https://itsm.ka0s.io`).
