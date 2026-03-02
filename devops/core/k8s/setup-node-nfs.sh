#!/bin/bash
set -e

# Configuración
MOUNT_POINT="/mnt/k8s-storage"
NFS_EXPORT_SUBNET="192.168.1.0/24" # Ajustar a tu red de Kubernetes
NODE_IP="192.168.1.30"

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Configuración de Almacenamiento NFS en k8-node-30 ===${NC}"

# Verificar si somos root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}Este script debe ejecutarse como root${NC}" 
   exit 1
fi

# 1. Identificar Disco
echo -e "\n${GREEN}1. Discos disponibles:${NC}"
lsblk -d -o NAME,MODEL,SIZE,TYPE,FSTYPE
echo ""
read -p "Introduce el nombre del dispositivo USB (ej. sdb): " DISK_NAME

DEVICE="/dev/$DISK_NAME"

if [ ! -b "$DEVICE" ]; then
    echo -e "${RED}El dispositivo $DEVICE no existe.${NC}"
    exit 1
fi

echo -e "Has seleccionado: ${GREEN}$DEVICE${NC}"
read -p "¿Estás SEGURO de que quieres formatear este disco? SE BORRARÁN TODOS LOS DATOS (s/n): " CONFIRM
if [[ "$CONFIRM" != "s" ]]; then
    echo "Cancelando..."
    exit 0
fi

# 2. Formatear y Montar
echo -e "\n${GREEN}2. Formateando y Montando...${NC}"
# Crear partición si no existe (opcional, simplificado a usar el dispositivo entero o partición 1)
# Asumimos que formateamos el dispositivo entero o la primera partición si se prefiere.
# Para simplicidad y robustez con discos USB nuevos: mkfs directo o particionamiento.
# Vamos a crear una partición GPT y formatearla.

parted -s "$DEVICE" mklabel gpt
parted -s "$DEVICE" mkpart primary ext4 0% 100%
PARTITION="${DEVICE}1"
sleep 2 # Esperar a que el kernel detecte la partición

mkfs.ext4 -F "$PARTITION"

mkdir -p "$MOUNT_POINT"

# Añadir a fstab si no existe
UUID=$(blkid -s UUID -o value "$PARTITION")
if ! grep -q "$UUID" /etc/fstab; then
    echo "UUID=$UUID $MOUNT_POINT ext4 defaults 0 0" >> /etc/fstab
    echo "Añadido a /etc/fstab"
fi

mount -a

# 3. Instalar y Configurar NFS
echo -e "\n${GREEN}3. Configurando Servidor NFS...${NC}"
apt-get update
apt-get install -y nfs-kernel-server

# Configurar Exports
# Exportamos con no_root_squash para permitir que el provisionador de K8s cree directorios como root
if ! grep -q "$MOUNT_POINT" /etc/exports; then
    echo "$MOUNT_POINT $NFS_EXPORT_SUBNET(rw,sync,no_subtree_check,no_root_squash)" >> /etc/exports
    echo "Añadido a /etc/exports"
fi

exportfs -a
systemctl restart nfs-kernel-server

echo -e "\n${GREEN}=== Instalación Completada ===${NC}"
echo -e "El disco USB está montado en: $MOUNT_POINT"
echo -e "Exportado vía NFS para la red: $NFS_EXPORT_SUBNET"
echo -e "IP del Servidor NFS: $NODE_IP"
echo -e "\n${GREEN}IMPORTANTE:${NC} Recuerda instalar 'nfs-common' en el resto de nodos del cluster:"
echo -e "sudo apt-get install -y nfs-common"
