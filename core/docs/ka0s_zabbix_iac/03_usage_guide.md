# Guía de Uso: Scripts de Automatización Zabbix

Esta guía describe cómo utilizar las herramientas de automatización desarrolladas para la gestión de Zabbix mediante código.

## Prerrequisitos
*   Python 3.10+
*   Paquetes: `requests`, `pyyaml`
*   Acceso a la API de Zabbix (Usuario Admin).

## 1. Exportación de Configuración (`export_zabbix_config.py`)

Este script permite extraer la configuración actual del servidor Zabbix para guardarla como código.

### Uso
```bash
# Configurar variables de entorno (opcional, defaults disponibles)
export ZABBIX_URL="http://zabbix-web:8080/api_jsonrpc.php"
export ZABBIX_USER="Admin"
export ZABBIX_PASS="zabbix"
export OUTPUT_DIR="./configs"

# Ejecutar
python3 core/monitoring/zabbix/scripts/export_zabbix_config.py
```

### Salida
El script generará en el directorio de salida:
*   `hosts.yaml`: Lista de todos los hosts monitoreados con sus IPs y Templates asociados.
*   `templates_list.yaml`: Resumen de templates disponibles.
*   `full_backup_YYYYMMDD.xml`: Exportación completa XML nativa de Zabbix (Hosts, Templates, Triggers, Graphs).

## 2. Generación de Inventario (`generate_inventory.py`)

Este script genera reportes de estado actual de la plataforma de monitorización. Útil para auditorías y control de capacidad.

### Uso
```bash
export ZABBIX_URL="http://zabbix-web:8080/api_jsonrpc.php"
export OUTPUT_DIR="/Users/santale/ka0s-klaus/ka0s/core/monitoring/zabbix/inventary"

python3 core/monitoring/zabbix/scripts/generate_inventory.py
```

### Salida
El script genera dos archivos en el directorio de inventario:
1.  `inventory_summary_YYYYMMDD_HHMMSS.json`: Métricas agregadas (Total hosts, Total templates, % Monitoreados).
2.  `hosts_inventory_YYYYMMDD_HHMMSS.csv`: Listado detallado para Excel/Metabase.
    *   Columnas: `Host ID`, `Visible Name`, `Status`, `IP`, `Templates`, `Groups`, `Tags`.

## 3. Importación de Configuración (Roadmap)

*(Script en desarrollo)* `import_zabbix_config.py` permitirá tomar los archivos YAML/XML y aplicarlos al servidor.

### Flujo de Importación
1.  Leer archivo de configuración.
2.  Comparar con el estado actual (Diff).
3.  Aplicar cambios (Create/Update/Delete).

## 3. Automatización de Dashboards (Roadmap)

*(Script en desarrollo)* `create_dashboard.py` permitirá crear dashboards a partir de definiciones JSON.

### Ejemplo de Definición JSON
```json
{
  "name": "Cluster Overview",
  "widgets": [
    {
      "type": "graph",
      "name": "CPU Load",
      "x": 0, "y": 0, "width": 12, "height": 5,
      "fields": { ... }
    }
  ]
}
```
