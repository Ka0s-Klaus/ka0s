# Integración y Despliegue

Detalles técnicos sobre la instalación del plugin de GPU Intel.

## Componentes

*   **Plugin**: `intel/intel-gpu-plugin`
*   **Version**: `0.35.0`
*   **Despliegue**: `DaemonSet`
*   **Namespace**: `kube-system`
*   **Nodo Objetivo**: `k8-manager` (Control Plane, donde reside la iGPU).

## Configuración Kustomize

La definición reside en `core/b2b/core-services/intel-gpu/`.

### DaemonSet

El DaemonSet despliega el plugin en nodos con etiquetas de Control Plane (`node-role.kubernetes.io/control-plane`) y monta los dispositivos `/dev/dri` del host.

Se configura con `-shared-dev-num 5` para permitir compartir la GPU física hasta en 5 contenedores.

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: intel-gpu-plugin
  namespace: kube-system
...
      containers:
      - name: intel-gpu-plugin
        image: intel/intel-gpu-plugin:0.35.0
        args:
        - "-shared-dev-num"
        - "5"
...
```

### Aplicación

Para aplicar cambios o reinstalar:

```bash
kubectl apply -k core/b2b/core-services/intel-gpu
```
