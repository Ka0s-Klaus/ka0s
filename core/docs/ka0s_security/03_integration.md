# Integración en el Ecosistema

## 1. Conexión Segura (Tunneling)
Este módulo depende críticamente de la acción compuesta `kubectl-tunnel` (`.github/actions/kubectl-tunnel`).
*   **Flujo**: Runner -> Túnel SSH (Puerto 6443) -> Nodo Manager (Localhost:6443).
*   **Secretos Requeridos**: `KAOS_SSH_HOST_1`, `KAOS_SSH_USER`, `KAOS_SSH_KEY_PRIV`, `KAOS_SSH_PORT_1`.

## 2. Almacenamiento de Resultados
Actualmente, los reportes se generan como **Artefactos de GitHub** para revisión humana inmediata.
*   **Ruta Local**: `audit-report.md` (en la raíz del workspace durante la ejecución).
*   **Persistencia**: Los artefactos se retienen según la política de retención de GitHub (por defecto 90 días).

*> **Nota de Arquitectura**: Para integración histórica, se recomienda mover estos reportes a `core/outputs/audit/` y commitearlos al repositorio, similar a otros módulos de Ka0s.*

## 3. Dependencias
*   `kubectl`: Instalado en el runner.
*   `jq`: Utilizado por los scripts de auditoría para parsear JSON.
