# 06. Monitorización con Zabbix (MySQL)

## Estrategia de Observabilidad
Para garantizar el rendimiento y la disponibilidad de la base de datos central MySQL, se utiliza el **Zabbix Agent 2** con su plugin nativo de MySQL, desplegado como un contenedor *sidecar* en el mismo pod de la base de datos.

### Configuración del Agente (Sidecar)
El agente se comunica con el servidor MySQL a través de `localhost` (127.0.0.1). Las variables de entorno clave en el despliegue son:

| Variable | Valor | Descripción |
| :--- | :--- | :--- |
| `ZBX_METADATA` | `mysql` | Etiqueta para que el Auto-registro de Zabbix identifique este host y le asigne el template correcto. |
| `ZBX_PLUGINS_MYSQL_SESSIONS_DEFAULT_URI` | `tcp://127.0.0.1:3306` | Dirección local del socket de MySQL. Se usa IP explícita para evitar problemas de resolución IPv6 (`::1`). |
| `ZBX_PLUGINS_MYSQL_SESSIONS_DEFAULT_USER` | `root` | Usuario con permisos de monitorización global. |
| `ZBX_PLUGINS_MYSQL_SESSIONS_DEFAULT_PASSWORD` | `rootpassword` | Contraseña de administración (definida en `mysql-secret`). |

### Macros de Zabbix (Server-Side)
El servidor Zabbix requiere las siguientes macros a nivel de Host para ejecutar los ítems de monitorización. Estas se inyectan automáticamente mediante el script de auto-registro:

*   `{$MYSQL.DSN}`: `tcp://127.0.0.1:3306`
*   `{$MYSQL.USER}`: `root`
*   `{$MYSQL.PASSWORD}`: `rootpassword`

> **Nota Crítica**: Es fundamental usar `127.0.0.1` en lugar de `localhost` en la macro `{$MYSQL.DSN}`. Si se usa `localhost`, el cliente de MySQL podría intentar conectarse por el socket Unix (que no existe en el contenedor del agente) o por IPv6, resultando en errores de `Access denied for user 'root'@'::1'`.

## Métricas Clave
El template **MySQL by Zabbix agent 2** recolecta automáticamente:
*   Estado del servicio (Ping).
*   Operaciones por segundo (Com_select, Com_insert, Com_update, Com_delete).
*   Uso de Buffer Pool de InnoDB.
*   Conexiones activas y máximas permitidas.
*   Tráfico de red (Bytes recibidos/enviados).

## Alertas (Triggers)
*   **MySQL Service is down**: Se dispara si el ping falla consecutivamente.
*   **Buffer pool utilization is too low**: Alerta informativa si la memoria asignada está sobredimensionada.
*   **Refused connections**: Indica intentos de conexión fallidos (posible ataque o mala configuración).
