# Ka0s ITIL Sync - Integración

## Workflow de GitHub Actions
*   **Archivo**: `.github/workflows/itil-config-sync.yml`
*   **Trigger**: Push a `compliance/itil/**` en `main`.
*   **Script**: `.github/scripts/sync-itil-config.py`

## Lógica de Sincronización
*   El script itera sobre los archivos YAML.
*   Utiliza la API REST de iTop (`core/create` o `core/update`) para cada objeto.
*   **Idempotencia**: Primero busca si el objeto existe (usando OQL). Si existe, lo actualiza; si no, lo crea.

## Configuración Técnica
*   **Autenticación**: Usa los secretos `ITOP_API_USER` y `ITOP_API_PASSWORD`.
*   **SSL Verify**: Desactivado (`False`) para soportar entornos con certificados autofirmados.
*   **Dependencias**: Python (`requests`, `pyyaml`).

## Mapeo de Objetos
*   `teams` -> `Team`
*   `members` -> `Person`, `lnkPersonToTeam`
*   `services` -> `Service`
*   `subcategories` -> `ServiceSubcategory`
