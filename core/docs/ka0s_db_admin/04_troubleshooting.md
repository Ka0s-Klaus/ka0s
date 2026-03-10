# 4. Troubleshooting: CloudBeaver

## Problemas Comunes y Soluciones

### 1. Pod Stuck en "Pending" o "ContainerCreating"

#### Síntomas
*   El pod `cloudbeaver-0` o similar se queda en estado `Pending` o `ContainerCreating`.
*   En `kubectl describe pod`, se observan eventos relacionados con **"MountVolume.SetUp failed"** o **"Stale NFS file handle"**.
*   El pod no puede montar el volumen persistente (PVC).

#### Causa Raíz
Este error ("Stale NFS file handle") ocurre generalmente cuando el servidor NFS (o el provisionador subyacente) se reinicia o pierde la conexión, pero el nodo de Kubernetes (el cliente NFS) mantiene un "handle" de archivo antiguo que ya no es válido en el servidor. También puede ocurrir si el directorio del servidor fue eliminado o modificado manualmente.

#### Solución Recuperación (Destructiva si no hay backup)
Si el volumen está bloqueado y no se recupera, la solución más rápida para restaurar el servicio (asumiendo que los datos de configuración se pueden regenerar o no son críticos) es forzar la recreación del pod y, en casos extremos, del PVC.

!!! warning "Pérdida de Datos"
    Si la política de retención del StorageClass es `Delete`, eliminar el PVC borrará los datos en el servidor NFS. Asegúrate de tener backups o de que los datos sean prescindibles.

1.  **Forzar eliminación del Pod**:
    ```bash
    kubectl delete pod -n cloudbeaver <pod-name> --force --grace-period=0
    ```
    A menudo, esto obliga al nodo a desmontar y volver a montar el volumen limpio.

2.  **Recrear PVC (Si el paso 1 falla)**:
    Si el error persiste, puede ser necesario recrear el PVC.
    ```bash
    # 1. Eliminar StatefulSet (sin cascada para mantener pods si se quiere inspeccionar, o con cascada para reiniciar)
    kubectl delete statefulset cloudbeaver -n cloudbeaver

    # 2. Eliminar PVC
    kubectl delete pvc cloudbeaver-pvc -n cloudbeaver

    # 3. Volver a aplicar manifiestos
    kubectl apply -f core/b2b/core-services/cloudbeaver/
    ```

### 2. Prevención de Pérdida de Datos

Para evitar que la eliminación accidental de un PVC (o un error de este tipo que obligue a borrarlo) elimine los datos físicos en el servidor NFS, se debe cambiar la política de reclamación (`persistentVolumeReclaimPolicy`) a `Retain`.

#### Verificar Política Actual
```bash
kubectl get pv <pv-name> -o yaml | grep persistentVolumeReclaimPolicy
```

#### Cambiar Política a Retain (Patch)
```bash
kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
```
Esto asegura que si el PVC se borra, el PV pase a estado `Released` pero los datos permanezcan en el servidor NFS, permitiendo su recuperación manual.
