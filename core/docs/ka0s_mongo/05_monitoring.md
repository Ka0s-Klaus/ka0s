# Módulo Ka0s MongoDB - Monitorización

## Estrategia de Monitorización
Para MongoDB, utilizamos el template oficial **MongoDB node by Zabbix agent 2**. Este enfoque utiliza el plugin nativo de MongoDB integrado en el agente de Zabbix 2, lo que elimina la necesidad de scripts externos o `UserParameters` complejos.

### Configuración del Agente (Sidecar)
El agente se despliega como un contenedor *sidecar* en el pod de MongoDB. La configuración clave reside en las variables de entorno que permiten al agente autenticarse localmente contra la base de datos:

| Variable | Valor | Descripción |
| :--- | :--- | :--- |
| `ZBX_METADATA` | `mongo` | Etiqueta para que el Auto-registro de Zabbix identifique este host y le asigne el template correcto. |
| `ZBX_PLUGINS_MONGODB_SESSIONS_DEFAULT_URI` | `tcp://localhost:27017` | Dirección local del socket de MongoDB. |
| `ZBX_PLUGINS_MONGODB_SESSIONS_DEFAULT_USER` | `root` | Usuario con permisos de monitorización (clusterMonitor). |
| `ZBX_PLUGINS_MONGODB_SESSIONS_DEFAULT_PASSWORD` | *(Secreto)* | Contraseña inyectada desde `mongo-secret`. |

### Macros de Zabbix (Server-Side)
Para que el servidor Zabbix pueda ejecutar los ítems de monitorización correctamente, el Host en Zabbix debe tener definidas las siguientes macros. Estas se inyectan automáticamente durante el proceso de Auto-registro o creación del host:

*   `{$MONGODB.CONNSTRING}`: `tcp://localhost:27017` (o `tcp://127.0.0.1:27017`)
*   `{$MONGODB.USER}`: `root`
*   `{$MONGODB.PASSWORD}`: *(La contraseña real del clúster)*

> **Nota Importante**: Si estas macros no están presentes o son incorrectas, el agente devolverá errores de `(Unauthorized) command serverStatus requires authentication`.

## Validación
Para verificar que la monitorización está funcionando:
1.  Acceder a Zabbix Web > **Monitoring** > **Hosts**.
2.  Buscar el host `mongo-0` (o el nombre del pod).
3.  Verificar que el icono **ZBX** está en verde.
4.  Ir a **Latest Data** y comprobar que se reciben métricas como `MongoDB: Uptime`, `MongoDB: Connections`, etc.
