# Ka0s GPU Enablement (Intel)

!!! note "Propósito"
    Habilitar el uso de la GPU Intel integrada (iGPU) del nodo `k8-manager` para workloads en Kubernetes.

## 📌 Índice de Contenidos

*   [Concepto](01_concept.md): Qué es el GPU Enablement y para qué sirve.
*   [Uso y Validación](02_usage_validation.md): Cómo solicitar la GPU en Pods y validar el estado.
*   [Integración](03_integration.md): Detalles de la implementación del Intel GPU Plugin.

## 🚀 Resumen de Implementación

1.  **Driver**: El nodo host debe tener los drivers de Intel i915 cargados (kernel >= 4.11, recomendado >= 5.15).
2.  **Plugin**: Se despliega el **Intel GPU Device Plugin** como DaemonSet.
3.  **Recurso**: Se expone `gpu.intel.com/i915` como recurso solicitable.

## 🔗 Referencias

*   [Intel Device Plugins for Kubernetes](https://intel.github.io/intel-device-plugins-for-kubernetes/cmd/gpu_plugin/README.html)
*   [Kustomize Configuration](https://github.com/Ka0s-Klaus/ka0s/tree/main/core/b2b/core-services/intel-gpu)
