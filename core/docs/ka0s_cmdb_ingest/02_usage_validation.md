# Ka0s CMDB Ingestion: Uso y Validación

## 1. Flujo de Trabajo
1.  **Crear JSON**: Basarse en las plantillas de `core/templates/cmdb`.
2.  **Commit & Push**: Subir el archivo a `devops/core/cmdb/`.
3.  **Validación Automática**: El workflow se ejecuta y actualiza iTop.

## 2. Pruebas Locales
Antes de subir cambios, puedes probar la ingesta localmente usando los archivos de prueba generados en `audit/cmdb`.

### Requisitos Previos
*   Acceso a la API REST de iTop.
*   Python 3.10+ con `requests` instalado.

### Ejecución de Prueba
```bash
# Exportar credenciales
export ITOP_URL="https://itsm.ka0s.io/webservices/rest.php"
export ITOP_USER="tu_usuario"
export ITOP_PASSWORD="tu_password"

# Ejecutar script apuntando al directorio de prueba
python core/scripts/cmdb_ingest.py --dir audit/cmdb
```

### Verificación
1.  Acceder a iTop.
2.  Buscar los CIs creados (ej. Organización "Ka0s Corp Test").
3.  Verificar que los campos y relaciones son correctos.
