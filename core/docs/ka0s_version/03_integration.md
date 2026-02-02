# Ka0s Version Manager - Integración

## Fuente de Verdad
Este módulo establece la "versión oficial" del proyecto, que es consumida por:
*   **Docker builds**: Para etiquetar imágenes.
*   **Deployments**: Para saber qué versión desplegar.
*   **Badges**: Para mostrar la versión en el README.

## Seguridad
Utiliza firmas GPG (si configurado) para asegurar que los releases son auténticos.
