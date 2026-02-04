# Ka0s Cluster Infrastructure (Kube)

**Rol**: Scripts de Inicialización y Configuración Base del Cluster.

Este directorio contiene los scripts y manifiestos fundacionales para el levantamiento y mantenimiento del cluster Kubernetes.

## 📂 Contenido

*   **Scripts de Setup**:
    *   `setup-manager.sh`: Inicialización del Control Plane.
    *   `setup-worker.sh`: Script para unir nodos workers al cluster.
*   **Red y Balanceo**:
    *   `metallb-config.yaml`: Configuración de MetalLB para asignación de IPs (Pool 192.168.1.240-250).
    *   `allow-all-egress.yaml`: Políticas de red base.
*   **Mantenimiento**:
    *   `cluster-health-check.sh`: Script para verificar el estado de salud de nodos y pods críticos.

## 🛠️ Uso
Estos scripts están diseñados para ejecutarse directamente en los nodos (vía SSH) durante la fase de aprovisionamiento o mantenimiento.

```bash
# Ejemplo de verificación de salud
./cluster-health-check.sh
```
