# Plan de Migración de Zabbix a k8-node-40 con NFS Storage (Safe Mode)

Este plan detalla los pasos para migrar Zabbix al nodo `k8-node-40` y cambiar su almacenamiento a NFS (`storage-system`) usando un **Nuevo PVC** para no tocar los datos antiguos.

## 🎯 Objetivo
1.  Mover Zabbix Server y Web al nodo `k8-node-40`.
2.  Cambiar el almacenamiento de `hostPath` a `nfs-client` usando un nuevo PVC (`zabbix-server-nfs-pvc`).
3.  Migrar los datos existentes al nuevo volumen NFS sin borrar los viejos.

## 🚀 Procedimiento de Migración

### 1. Desplegar Nuevo PVC (NFS)
Creamos el nuevo PVC que aprovisionará automáticamente el volumen NFS.

```bash
# Aplicar solo el PVC primero para que se cree el volumen
kubectl apply -f zabbix-server-nfs-pvc.yaml
```

Verificar que se ha creado y está `Bound`:
```bash
kubectl get pvc -n zabbix zabbix-server-nfs-pvc
```

### 2. Migración de Datos al NFS

El provisionador NFS habrá creado una carpeta vacía en el servidor NFS (en `k8-manager`).

1.  **Detener Zabbix** (Para asegurar consistencia):
    ```bash
    kubectl scale deployment zabbix-server --replicas=0 -n zabbix
    kubectl scale deployment zabbix-web --replicas=0 -n zabbix
    ```

2.  **Identificar la Ruta Física del Nuevo Volumen**:
    ```bash
    # Buscar el nombre del PV creado
    PV_NAME=$(kubectl get pvc zabbix-server-nfs-pvc -n zabbix -o jsonpath='{.spec.volumeName}')
    
    # Buscar la ruta en el servidor NFS (k8-manager)
    # Normalmente es /mnt/k8s-storage/<namespace>-<pvc_name>-<pv_name>
    ls -l /mnt/k8s-storage/ | grep $PV_NAME
    ```

3.  **Copiar Datos al Nuevo Volumen**:
    Copia los datos desde la ubicación antigua (`/mnt/data/zabbix-server` en `k8-manager`) a la nueva carpeta NFS.

    ```bash
    # Ejemplo: /mnt/k8s-storage/zabbix-zabbix-server-nfs-pvc-pvc-xxx
    cp -r /mnt/data/zabbix-server/* /mnt/k8s-storage/<carpeta_nueva_nfs>/
    
    # Ajustar permisos (Zabbix suele usar UID 101 o 1000)
    chown -R 101:101 /mnt/k8s-storage/<carpeta_nueva_nfs>/
    ```

### 3. Desplegar Aplicación en k8-node-40

Ahora aplicamos el Deployment modificado que usa el nuevo PVC y el nuevo nodo.

```bash
kubectl apply -k .
```

Zabbix arrancará en `k8-node-40` usando los datos del NFS. Los datos antiguos en `/mnt/data/zabbix-server` quedan intactos como backup.
