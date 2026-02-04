# GitHub Actions Self-Hosted Runners

**Rol**: Infraestructura de Ejecución de CI/CD.

Este directorio contiene scripts para el despliegue y mantenimiento de los Runners de GitHub Actions que se ejecutan dentro de nuestra propia infraestructura, permitiendo acceso directo al cluster para despliegues.

## 📂 Scripts

*   **deploy.sh**: Script para registrar y lanzar un nuevo runner.
*   **cleanup.sh**: Script para eliminar runners inactivos o des-registrarlos.

## 🚀 Flujo de Trabajo
Los runners permiten que los workflows de `.github/workflows/` (como `cd-core-services.yml`) tengan permisos y acceso de red para ejecutar `kubectl` contra el cluster local.

## ⚠️ Seguridad
Estos runners tienen acceso privilegiado al cluster. Asegurar que solo workflows confiables se ejecuten en ellos.
