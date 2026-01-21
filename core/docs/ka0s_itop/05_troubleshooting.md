# ❓ Solución de Problemas (iTop)

## Base de Datos no conecta

### Síntoma
En el asistente de instalación, sale error al conectar con MariaDB.

### Solución
1.  Verifique que el pod de MySQL está `Running`.
2.  Asegúrese de usar el nombre del servicio: `mysql` (no localhost).
3.  Verifique usuario y contraseña en las variables de entorno del deployment.

## Error 500 o Pantalla Blanca

### Causa
Generalmente permisos de archivos o falta de memoria PHP.

### Solución
1.  Revise los logs del pod:
    ```bash
    kubectl logs -l app=itop -n itop
    ```
2.  Si es por permisos, asegúrese de que la carpeta `conf` y `data` sean escribibles por el usuario `www-data`.

## La API devuelve "Access Denied"

### Causa
El usuario no tiene perfil de "REST Services User" o "Administrator".

### Solución
1.  Entre como Admin en la web.
2.  Vaya a **Admin Tools** > **User Accounts**.
3.  Edite el usuario de la API y añada el perfil **REST Services User**.
