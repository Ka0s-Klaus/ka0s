# Auditoría de Configuración de Clúster y Nodos

Este documento describe el script `audit-cluster-config.sh`, diseñado para extraer una radiografía completa de la configuración del clúster Kubernetes y sus nodos.

## Propósito
Obtener toda la información de configuración estática y dinámica del clúster para propósitos de inventario, auditoría, debugging o disaster recovery planning.

## Alcance
El script captura:
1.  **Versión del Clúster**: Cliente y Servidor (JSON).
2.  **Inventario de Nodos**:
    *   Listado `wide` (IPs, OS, Kernel, Runtime).
    *   Definición completa YAML (Labels, Taints, Annotations).
    *   Capacidad y Recursos Asignables (`Capacity` vs `Allocatable`).
3.  **Configuración del Control Plane**:
    *   Argumentos de arranque de componentes clave (`kube-apiserver`, `etcd`, `kube-scheduler`, `kube-controller-manager`) extrayendo sus definiciones de Pod.
    *   Configuraciones globales almacenadas en ConfigMaps de `kube-system` (ej. `kubeadm-config`, `coredns`, `kube-proxy`).

## Ubicación
*   **Script**: `devops/core/k8s/audit-cluster-config.sh`
*   **Salida**: Directorio definido por el workflow (por defecto `/tmp/results` en el remoto).

## Ejecución vía GitHub Actions

Este script está diseñado para ser invocado mediante el workflow `ssh-connect.yml`.

### Inputs del Workflow
Para ejecutar este script manualmente desde la pestaña "Actions" de GitHub:

*   **script-path**: `devops/core/k8s/audit-cluster-config.sh`
*   **script-args**: *(Dejar vacío)*
*   **results-path**: `audit/config/` (Opcional, ruta donde se guardarán los resultados en el repositorio tras la ejecución).

### Ejemplo de Configuración en Workflow (YAML)
```yaml
- name: Audit Cluster Configuration
  uses: ./.github/actions/ssh-exec
  with:
    host: ${{ secrets.KAOS_SSH_HOST_1 }}
    username: ${{ secrets.KAOS_SSH_USER }}
    key: ${{ secrets.KAOS_SSH_KEY_PRIV }}
    script-path: 'devops/core/k8s/audit-cluster-config.sh'
    local-results-path: 'audit/config/'
```

## Estructura de Resultados
Al finalizar, se descargarán los siguientes archivos:

*   `cluster_version.json`: Versión detallada de K8s.
*   `nodes_list_wide.txt`: Vista rápida de nodos.
*   `nodes_full_config.yaml`: "Single Source of Truth" de la configuración de nodos.
*   `nodes_describe.txt`: Formato legible para inspección humana.
*   `control-plane/`: Carpeta con configuraciones de componentes del sistema (Pods estáticos y ConfigMaps).
