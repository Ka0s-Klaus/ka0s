# Ka0s Version Manager - Integración

## Fuente de Verdad
Este módulo establece la "versión oficial" del proyecto, que es consumida por:
*   **Docker builds**: Para etiquetar imágenes.
*   **Deployments**: Para saber qué versión desplegar.
*   **Badges**: Para mostrar la versión en el README.

## Seguridad
Utiliza firmas GPG (si configurado) para asegurar que los releases son auténticos.

## Permisos del Workflow
El workflow de versionado requiere permisos elevados para interactuar con el repositorio y los issues:
*   `contents: write`: Para crear etiquetas (tags) y subir cambios al `CHANGELOG.md`.
*   `issues: write`: Para comentar en el Pull Request y notificar el estado.
*   `actions: write`: Para gestionar ejecuciones de workflows relacionados.

Es crítico asegurar que el `GITHUB_TOKEN` tenga estos permisos configurados en el archivo `.github/workflows/version.yml`.
