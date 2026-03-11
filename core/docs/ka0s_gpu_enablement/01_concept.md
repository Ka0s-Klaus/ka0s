# Ka0s GPU Enablement (Intel)

Este módulo describe la habilitación y uso de GPUs Intel en el clúster de Kubernetes Ka0s.

## Concepto

El objetivo es permitir que los workloads (Pods) en el clúster accedan a los recursos de aceleración gráfica (iGPU) del nodo `k8-manager` (Intel HD Graphics 520).

Esto es útil para tareas como:
- Transcodificación de video (FFmpeg, Jellyfin, Plex).
- Inferencia de modelos ligeros (OpenVINO).
- Aceleración de renderizado.

## Arquitectura

Se utiliza el **Intel GPU Device Plugin** para Kubernetes. Este plugin:
1.  Detecta las GPUs Intel disponibles en el nodo.
2.  Las registra como un recurso extendido (`gpu.intel.com/i915`).
3.  Permite compartir una única GPU física entre múltiples contenedores mediante time-slicing (configurado para compartir hasta 5 veces).
