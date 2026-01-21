# ⚙️ Acceso y Configuración Inicial

Una vez instalado Zabbix, toda la gestión se realiza a través de su interfaz web.

## Acceso al Panel de Control

Abra su navegador web e introduzca la dirección de acceso.

*   **URL**: `http://localhost:80` (o la IP/Dominio que haya configurado en su Ingress/Service).
    *   *Nota: Si usa port-forwarding: `kubectl port-forward svc/zabbix-web -n zabbix 8080:80` y acceda a `http://localhost:8080`.*
*   **Usuario por defecto**: `Admin` (con "A" mayúscula).
*   **Contraseña por defecto**: `zabbix`

## Cambio de Contraseña (Recomendado)

Por seguridad, lo primero que debe hacer es cambiar la clave por defecto:

1.  Vaya a **Users** > **Users** en el menú lateral.
2.  Haga clic en el usuario `Admin`.
3.  Haga clic en el botón **Change password**.
4.  Escriba su nueva contraseña y confírmela.
5.  Haga clic en **Update**.
