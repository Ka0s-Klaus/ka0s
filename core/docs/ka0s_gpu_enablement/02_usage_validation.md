# Uso y Validación

Cómo solicitar y utilizar la GPU Intel en tus despliegues.

## Solicitar GPU en Pods

Para utilizar la GPU, debes solicitar el recurso `gpu.intel.com/i915` en la sección `resources` de tu manifiesto.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: gpu-test
spec:
  containers:
  - name: gpu-container
    image: intel/intel-opencl-icd:latest
    resources:
      limits:
        gpu.intel.com/i915: 1 # Solicita 1 unidad de GPU
    command: ["/bin/bash", "-c", "clinfo"]
```

## Validación

Para verificar que el plugin está funcionando y detectando la GPU en el nodo:

```bash
kubectl describe node k8-manager | grep gpu.intel.com/i915
```

Deberías ver una capacidad de **5** (debido a la configuración de time-slicing).

```
Capacity:
  gpu.intel.com/i915:  5
Allocatable:
  gpu.intel.com/i915:  5
```
