# Flujo de Ingesta CMDB

Este documento describe el proceso automatizado para poblar la CMDB de iTop a partir de definiciones JSON en el repositorio.

## 1. Concepto
La "Infraestructura como Código" se aplica aquí a la CMDB. Los Elementos de Configuración (CIs) se definen en archivos JSON en la carpeta `devops/core/cmdb`. Un pipeline de CI detecta cambios y sincroniza estos objetos con iTop.

## 2. Estructura de Datos
Los archivos JSON deben seguir las plantillas definidas en `core/templates/cmdb`.

### Ejemplo (Servidor):
```json
{
  "description": "Servidor de Base de Datos",
  "class": "Server",
  "fields": {
    "name": "db-prod-01",
    "org_id": "Ka0s Corp",
    "status": "production",
    "managementip": "10.0.0.5"
  }
}
```

## 3. Resolución de Relaciones (Foreign Keys)
El script de ingesta (`core/scripts/cmdb_ingest.py`) tiene capacidad de "Smart Lookup". 
Para campos que terminan en `_id` (ej. `org_id`, `location_id`), si el valor es un texto (ej. "Ka0s Corp"), el script buscará automáticamente el objeto en iTop y usará su ID interno.

**Nota**: El objeto referenciado debe existir previamente en iTop o haber sido creado en una ejecución anterior (o alfabéticamente antes en el mismo lote).

## 4. Automatización
El workflow `.github/workflows/cmdb-ingest.yml` se ejecuta automáticamente al hacer push en `devops/core/cmdb/`.

### Variables Requeridas (GitHub Secrets/Vars):
*   `ITOP_URL`: URL base de la API REST (ej. `https://itsm.ka0s.io/webservices/rest.php`).
*   `ITOP_USER`: Usuario con permisos REST/Admin.
*   `ITOP_PASSWORD`: Contraseña del usuario.

## 5. Pruebas Locales
Puedes probar la ingesta usando los archivos de prueba en `audit/cmdb`:
```bash
export ITOP_URL="https://itsm.ka0s.io/webservices/rest.php"
export ITOP_USER="..."
export ITOP_PASSWORD="..."
python core/scripts/cmdb_ingest.py --dir audit/cmdb
```
