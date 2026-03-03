# Archivos de Prueba para Ingesta CMDB

Este directorio contiene archivos JSON de ejemplo generados a partir de las plantillas en `core/templates/cmdb`.
Estos archivos sirven para validar el flujo de ingesta automática hacia iTop CMDB.

## Contenido

*   **Organización y Ubicación**:
    *   `01_org_kaos_test.json`: Organización principal de prueba.
    *   `02_location_bcn.json`: Sede en Barcelona.
*   **Infraestructura**:
    *   `03_server_db_prod.json`: Servidor de base de datos.
    *   `04_server_web_front.json`: Servidor web frontend.
    *   `08_network_switch.json`: Switch Core.
    *   `09_farm_k8s.json`: Cluster de Kubernetes.
*   **Software y Aplicaciones**:
    *   `05_webserver_nginx.json`: Instancia de Nginx.
    *   `10_app_kaos_portal.json`: Aplicación "Ka0s Portal".
    *   `11_dbserver_mysql.json`: Instancia de MySQL.
*   **Personas y Equipos**:
    *   `06_person_klaus.json`: Usuario administrador.
    *   `07_team_devops.json`: Equipo de DevOps.

## Cómo Probar la Ingesta

Para probar la carga de estos datos en iTop, ejecuta el script de ingesta apuntando a este directorio:

```bash
# Exportar credenciales (si no están definidas)
export ITOP_URL="https://itsm.ka0s.io/webservices/rest.php"
export ITOP_USER="tu_usuario"
export ITOP_PASSWORD="tu_password"

# Ejecutar script
python3 ../../core/scripts/cmdb_ingest.py --dir .
```

Una vez validado, los archivos JSON reales deben ubicarse en `devops/core/cmdb/` para que el pipeline de GitHub Actions los procese automáticamente.
