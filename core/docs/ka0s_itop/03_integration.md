# Integración en el Ecosistema

## 1. API de iTop
La integración utiliza la REST API de iTop.
*   **Endpoint**: `https://itsm.ka0s.io/webservices/rest.php`
*   **Autenticación**: Usuario/Password o Token.

## 2. Seguridad
*   **Secretos**: Las credenciales de iTop se almacenan como secretos en GitHub (`ITOP_USER`, `ITOP_PASSWORD`).
*   **TLS**: La comunicación está cifrada (HTTPS).

## 3. Dependencias
*   Requiere conectividad de red entre GitHub Runners y la instancia de iTop (o uso de Self-Hosted Runners si iTop es interno).
