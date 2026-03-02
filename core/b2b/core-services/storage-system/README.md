# Configuración de Almacenamiento NFS en Kubernetes (Ka0s)

Este documento detalla los pasos manuales para configurar un sistema de almacenamiento compartido utilizando un disco físico (USB/SATA) conectado al nodo `k8-node-30` y compartiéndolo vía NFS para todo el cluster.

## 1. Preparación del Nodo de Almacenamiento (`k8-node-30`)

Accede al nodo donde está conectado el disco físico:
```bash
ssh usuario@192.168.1.30
sudo -i
```

### 1.1 Identificar el Disco
Lista los discos disponibles para identificar el dispositivo nuevo (ej. `/dev/sdb`):
```bash
lsblk -d -o NAME,MODEL,SIZE,TYPE,FSTYPE
```
*Atención: Asegúrate de elegir el disco correcto. Los siguientes pasos borrarán todos los datos del disco seleccionado.*

### 1.2 Particionar el Disco
Usaremos `parted` para crear una tabla de particiones GPT y una partición primaria que ocupe todo el disco:
```bash
# Reemplaza /dev/sdb con tu disco
DISCO="/dev/sdb"

parted -s "$DISCO" mklabel gpt
parted -s "$DISCO" mkpart primary ext4 0% 100%
```

### 1.3 Formatear la Partición
Formatea la nueva partición (ej. `/dev/sdb1`) con el sistema de archivos ext4:
```bash
mkfs.ext4 -F "${DISCO}1"
```

### 1.4 Montar el Disco
Crea el punto de montaje y monta el disco:
```bash
mkdir -p /mnt/k8s-storage
mount "${DISCO}1" /mnt/k8s-storage
```

Para que el montaje sea persistente tras reinicios, añade la entrada a `/etc/fstab`:
```bash
UUID=$(blkid -s UUID -o value /dev/sdc1)
echo "UUID=$UUID /mnt/k8s-storage ext4 defaults 0 0" >> /etc/fstab
```

## 2. Configuración del Servidor NFS (`k8-node-30`)

Instala el servidor NFS y exporta el directorio montado:

```bash
apt-get update
apt-get install -y nfs-kernel-server

# Configurar exportación para la red del cluster (ej. 192.168.1.0/24)
echo "/mnt/k8s-storage 192.168.1.0/24(rw,sync,no_subtree_check,no_root_squash)" >> /etc/exports

# Aplicar cambios
exportfs -a
systemctl restart nfs-kernel-server
```

## 3. Preparación de los Clientes (Todos los Nodos)

**IMPORTANTE**: Para que Kubernetes pueda montar volúmenes NFS, **TODOS** los nodos del cluster (manager y workers) deben tener instalado el cliente NFS.

Ejecuta esto en `k8-manager`, `k8-node-20`, `k8-node-30` (ya instalado) y `k8-node-40`:
```bash
sudo apt-get update
sudo apt-get install -y nfs-common
```

## 4. Verificación
Desde otro nodo, intenta montar el NFS manualmente para verificar conectividad:
```bash
# Prueba temporal
mkdir -p /tmp/test-nfs
mount -t nfs 192.168.1.30:/mnt/k8s-storage /tmp/test-nfs
touch /tmp/test-nfs/test-file
ls -l /tmp/test-nfs/test-file
umount /tmp/test-nfs
```
