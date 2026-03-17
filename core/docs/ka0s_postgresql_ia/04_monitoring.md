# 04. Monitorización de PostgreSQL Vectorial (IA)

## Estrategia de Monitorización
Para el cluster de PostgreSQL Vectorial (`postgresql-ia`), utilizamos el mismo enfoque que para el cluster central, utilizando el template oficial **PostgreSQL by Zabbix agent 2**.

### Configuración del Agente (Sidecar)
El agente se despliega como un contenedor *sidecar* en el pod de PostgreSQL (`postgresql-ia-0`).

| Variable | Valor | Descripción |
| :--- | :--- | :--- |
| `ZBX_METADATA` | `postgresql-ia` | Etiqueta para que el Auto-registro de Zabbix identifique este host y le asigne el template correcto. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_URI` | `tcp://localhost:5432` | Dirección local del socket de PostgreSQL. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_USER` | `ka0s_ai` | Usuario de la base de datos de memoria vectorial. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_DBNAME` | `ka0s_memory` | Base de datos vectorial por defecto. |

### Requisitos de Base de Datos
Al igual que con el cluster central, el template oficial de Zabbix requiere explícitamente la existencia de un usuario de monitorización y una base de datos `postgres`.

**Script de Inicialización (ejecutado en el pod):**
```sql
CREATE USER zbx_monitor WITH PASSWORD 'zabbix';
GRANT pg_monitor TO zbx_monitor;
CREATE DATABASE postgres; -- Necesario para el hook inicial del plugin
```

### Macros de Zabbix (Server-Side)
El servidor Zabbix requiere las siguientes macros a nivel de Host. Estas se inyectan automáticamente mediante el script de auto-registro:

*   `{$PG.URI}`: `tcp://localhost:5432`
*   `{$PG.USER}`: `ka0s_ai`
*   `{$PG.PASSWORD}`: `change_me_in_production_vector_db_123!`
*   `{$PG.DBNAME}`: `ka0s_memory`

## Métricas Clave (Adicionales)
Además de las métricas estándar de PostgreSQL, para la base de datos vectorial es crucial monitorizar:
*   **Buffer Hit Ratio**: Si este valor es bajo, las búsquedas vectoriales serán lentas al tener que leer de disco (NFS).
*   **Vacuuming**: La inserción masiva de vectores genera muchas tuplas muertas; verificar la frecuencia de autovacuum.
