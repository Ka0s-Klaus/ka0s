# 03. Integración Técnica

Este módulo orquesta varios componentes del ecosistema Ka0s para funcionar.

## Flujo de Datos

1.  **Trigger**: GitHub Actions Scheduler dispara el evento.
2.  **Runner**: Se asigna un runner `self-hosted` (`swarm-runners-scaleset`) que vive dentro de nuestra infraestructura.
3.  **Conectividad**:
    *   Utiliza la acción `.github/actions/kubectl-tunnel` para establecer un túnel SSH seguro hacia el `k8-manager` si el runner no tiene acceso directo a la API, o para configurar el contexto de `kubectl`.
4.  **Recolección (Script Bash)**:
    *   Ejecuta `.github/scripts/generate-cluster-report.sh`.
    *   Este script invoca `kubectl` contra el cluster local.
    *   Consulta APIs de métricas y CRDs de Trivy.
5.  **Persistencia**:
    *   El fichero Markdown generado se añade al índice de git.
    *   Se realiza un commit con el usuario `Ka0s CI Bot`.
    *   Se hace push directo a la rama `main`.

## Dependencias
*   **Metrics Server**: Debe estar funcionando para que la sección de "Uso de Recursos" tenga datos.
*   **Trivy Operator**: Debe estar instalado y haber generado CRDs para la sección de seguridad.
*   **Permisos de Repo**: El token del workflow necesita permisos `contents: write` para poder hacer push del reporte.
