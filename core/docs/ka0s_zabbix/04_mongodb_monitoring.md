# 🍃 Monitorización de MongoDB

Para vigilar el estado de su base de datos MongoDB (conexiones, memoria, estado).

## 1. Importar la Plantilla
Si la plantilla no viene preinstalada:
1.  Vaya a **Data collection** > **Templates**.
2.  Clic en **Import** (arriba a la derecha).
3.  Seleccione el archivo `core/b2b/core-services/zabbix/zabbix_mongodb_template.xml`.
4.  Clic en **Import**.

## 2. Crear el Host de MongoDB
1.  Vaya a **Data collection** > **Hosts**.
2.  Clic en **Create host**.
3.  **Host name**: `MongoDB Cluster` (o el nombre que prefiera).
4.  **Templates**: Seleccione `Template DB MongoDB Node by Zabbix Agent 2`.
5.  **Interfaces**:
    *   Clic en **Add** > **Agent**.
    *   **DNS name**: `mongodb-service` (Nombre del servicio Kubernetes de su Mongo).
    *   **Port**: `10050` (Puerto donde escucha el agente Zabbix, no el puerto de Mongo).
    *   **Connect to**: Seleccione `DNS`.

## 3. Configurar Macros
Vaya a la pestaña **Macros** y defina:

| Macro | Valor | Descripción |
| :--- | :--- | :--- |
| `{$MONGODB.CONNSTRING}` | `tcp://mongodb-service:27017` | Cadena de conexión (sin usuario/pass). |
| `{$MONGODB.USER}` | `root` | Usuario de MongoDB (si aplica). |
| `{$MONGODB.PASSWORD}` | `password` | Contraseña de MongoDB (si aplica). |

Clic en **Add**.
