# 🔌 Integraciones

## Conexión con Zabbix (Webhook)

iTop puede recibir alertas de Zabbix y convertirlas automáticamente en Incidentes.

### Requisitos
*   Tener el usuario `admin` configurado en iTop.
*   Conocer la URL pública o interna de iTop (ej. `http://itop.itop.svc.cluster.local`).

### Configuración en Zabbix
1.  Importe el **Media Type** de iTop en Zabbix (si dispone del archivo YAML).
2.  Configure las macros:
    *   `itop_url`
    *   `itop_user`
    *   `itop_password`
    *   `itop_organization_id`

### Funcionamiento
1.  Zabbix detecta un problema (ej. CPU alta).
2.  Zabbix llama a la API de iTop (`/webservices/rest.php`).
3.  Se crea un Ticket en iTop tipo `Incident`.
4.  Cuando el problema se resuelve en Zabbix, el ticket se actualiza/cierra (si está configurado).

## API REST

iTop expone una API completa en:
`http://<tu-itop>/webservices/rest.php`

Puede usarla para crear CIs (Elementos de Configuración) desde scripts externos.
