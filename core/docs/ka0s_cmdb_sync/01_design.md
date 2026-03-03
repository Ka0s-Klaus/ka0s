# Diseño: Sincronización CMDB JSON-iTop

Este documento define el diseño técnico del flujo de automatización que sincroniza archivos JSON de definición de CIs (Elementos de Configuración) con la CMDB de iTop.

## 1. Objetivo
Permitir la gestión de la CMDB de iTop utilizando una metodología **GitOps** y **Infrastructure as Code (IaC)**. Los cambios en la infraestructura se definen en archivos JSON en el repositorio, y un proceso automatizado se encarga de reflejar esos cambios en iTop.

## 2. Flujo de Trabajo

1.  **Definición**: El usuario crea o modifica un archivo `.json` en `devops/core/cmdb/` basado en los templates de `core/templates/cmdb/`.
2.  **Pull Request**: Se abre una PR con los cambios.
3.  **Validación (CI)**: Un workflow de GitHub Actions valida que el JSON cumple con el esquema esperado.
4.  **Merge & Deploy (CD)**: Al fusionar a `main`, se dispara el proceso de sincronización.
5.  **Ejecución**:
    *   Un script Python (`.github/scripts/sync-cmdb.py`) lee los archivos JSON.
    *   Se conecta a la API REST de iTop.
    *   Realiza una operación `core/create` o `core/update` según corresponda.

## 3. Especificación Técnica

### 3.1. Estructura de Datos JSON
El formato estándar para la ingestión es:

```json
{
  "description": "Descripción humana del CI",
  "class": "ClaseITop (ej. Server, Organization)",
  "fields": {
    "name": "NombreDelCI",
    "org_id": "NombreOrganización",
    "status": "production",
    "...": "..."
  }
}
```

### 3.2. Lógica de Reconciliación (Script Python)
El script debe manejar la **idempotencia**:
*   Buscar si el objeto ya existe (usando OQL: `SELECT Class WHERE name='X'`).
*   Si existe -> `core/update`.
*   Si no existe -> `core/create`.
*   **Resolución de Relaciones**: Los campos como `org_id` o `location_id` en el JSON son *nombres* (strings). La API de iTop acepta reconciliación por nombre automáticamente en muchos casos, o se debe hacer una búsqueda previa del ID si es necesario.

### 3.3. GitHub Workflow
*   **Trigger**: `push` en `devops/core/cmdb/**.json`.
*   **Action**: Ejecuta el script de sincronización.
*   **Secretos Requeridos**:
    *   `ITOP_URL`: URL base de iTop.
    *   `ITOP_USER`: Usuario con permisos REST.
    *   `ITOP_PASSWORD`: Contraseña.

## 4. Pruebas (Audit)
Se han generado archivos de prueba en `audit/cmdb/` para validar el flujo manualmente antes de la implementación productiva.

Archivos generados:
1.  `01_org_kaos_test.json` (Organización)
2.  `02_location_bcn.json` (Ubicación)
3.  `03_server_db_prod.json` (Servidor DB)
4.  `04_server_web_front.json` (Servidor Web)
5.  `05_webserver_nginx.json` (Software)
6.  `06_person_klaus.json` (Contacto)
