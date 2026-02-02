# Integración en el Ecosistema

## 1. Conexión Segura (Tunneling)
Este módulo depende críticamente de la acción compuesta `kubectl-tunnel` (`.github/actions/kubectl-tunnel`).
*   **Flujo**: Runner -> Túnel SSH (Puerto 6443) -> Nodo Manager (Localhost:6443).
*   **Secretos Requeridos**: `KAOS_SSH_HOST_1`, `KAOS_SSH_USER`, `KAOS_SSH_KEY_PRIV`, `KAOS_SSH_PORT_1`.

## 2. Almacenamiento de Resultados
Los reportes se generan como artefactos y se persisten en el repositorio para trazabilidad histórica.

*   **Ruta en Repositorio**: `audit/kube/`
*   **Formato**: Markdown (`report-YYYYMMDD-HHMM.md`)
*   **Artefacto**: Disponible también en la pestaña "Actions" como `k8s-security-report`.

## 3. Dependencias
*   `kubectl`: Instalado en el runner.
*   `jq`: Utilizado por los scripts de auditoría para parsear JSON.
