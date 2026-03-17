# 04. Monitorización de PostgreSQL Central

## Estrategia de Monitorización
Para el cluster de PostgreSQL central, utilizamos el template oficial **PostgreSQL by Zabbix agent 2**. Este enfoque utiliza el plugin nativo de PostgreSQL integrado en el agente de Zabbix 2.

### Configuración del Agente (Sidecar)
El agente se despliega como un contenedor *sidecar* en el pod de PostgreSQL (`postgresql-0`).

| Variable | Valor | Descripción |
| :--- | :--- | :--- |
| `ZBX_METADATA` | `postgresql` | Etiqueta para que el Auto-registro de Zabbix identifique este host. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_URI` | `tcp://localhost:5432` | Dirección local del socket de PostgreSQL. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_USER` | `ka0s_admin` | Usuario administrador. |
| `ZBX_PLUGINS_POSTGRESQL_SESSIONS_DEFAULT_DBNAME` | `ka0s_core` | Base de datos por defecto para la conexión inicial. |

### Requisitos de Base de Datos
El template oficial de Zabbix requiere explícitamente la existencia de un usuario de monitorización y una base de datos `postgres` para realizar el descubrimiento inicial.

**Script de Inicialización (ejecutado en el pod):**
```sql
CREATE USER zbx_monitor WITH PASSWORD 'zabbix';
GRANT pg_monitor TO zbx_monitor;
CREATE DATABASE postgres; -- Necesario para el hook inicial del plugin
```

### Macros de Zabbix (Server-Side)
El servidor Zabbix requiere las siguientes macros a nivel de Host. Estas se inyectan automáticamente mediante el script de auto-registro:

*   `{$PG.URI}`: `tcp://localhost:5432`
*   `{$PG.USER}`: `ka0s_admin`
*   `{$PG.PASSWORD}`: `ka0s-secure-password-2026`
*   `{$PG.DBNAME}`: `ka0s_core`

## Métricas Clave
*   **PostgreSQL: Service is running**: Estado del servicio.
*   **PostgreSQL: Connections**: Conexiones activas, idle y máximas.
*   **PostgreSQL: Transactions**: Transacciones por segundo (TPS).
*   **PostgreSQL: Checkpoints**: Frecuencia y duración de checkpoints.
*   **PostgreSQL: Cache hit ratio**: Eficiencia de la caché.
