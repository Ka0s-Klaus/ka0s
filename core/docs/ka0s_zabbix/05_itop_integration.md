# 🎫 Integración con iTop

Esta integración permite dos cosas:
1.  **Crear tickets** en iTop automáticamente cuando Zabbix detecta un problema.
2.  **Monitorizar** que el servicio de iTop está online.

## A. Configuración de Alertas (Webhook)

Para que el sistema cree tickets de incidencia automáticamente:

1.  **Importar Media Type**:
    *   Vaya a **Alerts** (Alertas) > **Media types**.
    *   Clic en **Import**.
    *   Seleccione el archivo `core/b2b/core-services/zabbix/media_itop.yaml`.
    *   Clic en **Import**.

2.  **Configurar Credenciales**:
    *   Busque "iTop" en la lista y haga clic sobre el nombre.
    *   En la sección de **Parameters**, rellene sus datos:
        *   `itop_url`: La dirección web de su iTop (ej. `http://itop-service/web`).
        *   `itop_user`: Su usuario administrador de iTop.
        *   `itop_password`: Su contraseña de iTop.
        *   `itop_organization_id`: El ID de su organización (ej. `1`).
    *   Clic en **Update**.

3.  **Configurar Acción Automática** (Creación Manual):
    *   *Nota: Zabbix no permite importar Acciones directamente desde la interfaz web.*
    *   Vaya a **Alerts** > **Actions** > **Trigger actions**.
    *   Clic en **Create action**.
    *   **Pestaña Action**:
        *   **Name**: `Create iTop Ticket on High Severity`
        *   **Conditions**: Añadir `Severity is greater than or equals Average`.
    *   **Pestaña Operations**:
        *   **Operations**: Clic en **Add**.
            *   **Send to media types**: Seleccionar `iTop`.
            *   **Send to user groups**: Seleccionar `Zabbix administrators` (o el grupo responsable).
            *   Clic en **Add** (dentro del popup).
        *   **Recovery operations**: Clic en **Add**.
            *   **Send to media types**: Seleccionar `iTop`.
            *   **Send to user groups**: Seleccionar `Zabbix administrators`.
            *   Clic en **Add**.
        *   **Update operations**: Clic en **Add**.
            *   **Send to media types**: Seleccionar `iTop`.
            *   **Send to user groups**: Seleccionar `Zabbix administrators`.
            *   Clic en **Add**.
    *   Clic en **Add** (botón final para guardar la acción).

## B. Monitorización del Servicio iTop

Para ver si la web de iTop responde correctamente:

1.  Importe la plantilla `zabbix_itop_monitor_template.xml` (en **Data collection** > **Templates**).
2.  Cree un nuevo Host llamado `iTop Service`.
3.  Asigne la plantilla `Template App iTop Service`.
4.  Configure las Macros:
    *   `{$ITOP.HOST}`: El host de su servicio (ej. `itop-service`).
    *   `{$ITOP.PORT}`: El puerto de su servicio (ej. `80`).
