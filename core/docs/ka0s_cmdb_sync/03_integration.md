# Ka0s CMDB Sync: Integración Técnica

## 1. Arquitectura del Componente

### 1.1. Script `itop-cmdb-sync.py`
Ubicación: `.github/scripts/itop-cmdb-sync.py`
Script en Python que interactúa con la API REST de iTop.

**Lógica Principal:**
- **Autenticación**: Basic Auth usando `ITOP_API_USER` y `ITOP_API_PASSWORD`.
- **Resolución de Org**: Convierte `ITOP_ORIGIN` (nombre) a ID interno de iTop mediante OQL.
- **Upsert**:
    - Busca `ApplicationSolution` por Nombre + Org ID.
    - Si no existe -> `core/create`.
    - Si existe -> `core/update`.

### 1.2. Workflow Reutilizable `itop-cmdb-sync.yml`
Ubicación: `.github/workflows/itop-cmdb-sync.yml`
Define la interfaz de ejecución para GitHub Actions.

**Secrets Requeridos:**
- `ITOP_URL`: URL base de iTop.
- `ITOP_API_USER`: Usuario API.
- `ITOP_API_PASSWORD`: Password API.
- `ITOP_ORIGIN`: Nombre de la Organización (Variable o Secreto).

### 1.3. Integración en CD (`cd-core-services.yml`)
El pipeline de despliegue invoca al workflow de sincronización al final del proceso.

```yaml
  sync-cmdb:
    needs: [deploy-services]
    if: ${{ success() && needs.deploy-services.outputs.services != '' }}
    uses: ./.github/workflows/itop-cmdb-sync.yml
    with:
      services: ${{ needs.deploy-services.outputs.services }}
      status: "production"
    secrets: inherit
```

## 2. Requisitos de iTop
- **Versión API**: 1.3 (Hardcoded en script, compatible con iTop 2.7+).
- **Clase CI**: `ApplicationSolution`. Si se personaliza el modelo de datos de iTop, se debe ajustar la variable `ci_class` en el script Python.
- **Permisos**: El usuario API debe tener perfil `REST Services User` y permisos de escritura sobre la clase `ApplicationSolution` y lectura sobre `Organization`.
