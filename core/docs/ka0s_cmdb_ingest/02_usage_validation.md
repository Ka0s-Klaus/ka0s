# Ka0s CMDB Ingestion: Uso y Validación

## 1. Flujo de Trabajo
1.  **Crear JSON**: Basarse en las plantillas de `core/templates/cmdb`.
2.  **Commit & Push**: Subir el archivo a `devops/core/cmdb/`.
3.  **Validación Automática**: El workflow se ejecuta y actualiza iTop.

## 2. Pruebas Locales (Dry Run)
Antes de subir cambios, puedes probar la ingesta localmente usando los archivos de prueba generados en `audit/cmdb` o tus propios JSONs.

### Requisitos Previos
*   Acceso a la API REST de iTop (si no usas `--dry-run`).
*   Python 3.10+ con `requests` instalado.

### Ejecución de Prueba (Dry Run)
El modo `dry-run` simula la conexión a iTop, retornando IDs ficticios (999) y validando la lógica de búsqueda y mapeo sin realizar cambios reales.

```bash
# Ejecutar script en modo simulación
python core/scripts/cmdb_ingest.py --dir devops/core/cmdb --dry-run
```

### Ejecución Real (Local)
Para impactar cambios en iTop desde tu máquina local:

```bash
# Exportar credenciales
export ITOP_URL="https://itsm.ka0s.io/webservices/rest.php"
export ITOP_USER="tu_usuario"
export ITOP_PASSWORD="tu_password"
# Opcional: Desactivar verificación SSL si es entorno dev
export ITOP_SSL_VERIFY="false"

# Ejecutar script apuntando al directorio de prueba
python core/scripts/cmdb_ingest.py --dir audit/cmdb
```

### Ejecución Manual desde GitHub Actions
Puedes disparar el workflow manualmente con la opción `dry_run` activada:

1.  Ve a la pestaña **Actions** -> **[Ka0s] CMDB Ingestion**.
2.  Haz clic en **Run workflow**.
3.  Marca la casilla **Dry Run (no changes)**.
4.  Haz clic en **Run workflow**.

## 3. Verificación
1.  Acceder a iTop.
2.  Buscar los CIs creados (ej. Organización "Ka0s Corp Test").
3.  Verificar que los campos y relaciones son correctos.
