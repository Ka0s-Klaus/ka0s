#!/bin/bash

# Configuración automatizada de LVM para servidores Ubuntu 24.04
# Autor: [Bil]

LOG_FILE="/var/log/lvm_setup_$(date +%Y%m%d_%H%M%S).log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "[$(date)] Iniciando configuración LVM"

# 1. Verificar entrada de disco
DISCO="${1:-/dev/sda}"
if [ ! -b "$DISCO" ]; then
    echo "Error: El disco $DISCO no existe"
    exit 1
fi

# 2. Crear volumen físico
echo "Creando volumen físico en $DISCO"
sudo pvcreate "$DISCO" || exit 1

# 3. Crear grupo de volúmenes
echo "Creando grupo de volúmenes kaos-vg"
sudo vgcreate kaos-vg "$DISCO" || exit 1

# 4. Crear volúmenes lógicos
declare -A VOLUMENES=(
    [kaos-mongo]="300G"
    [kaos-zabbix]="50G"
    [kaos-wazuh]="150G"
    [kaos-elk]="300G"
    [kaos-grafana]="150G"
)

for VOL in "${!VOLUMENES[@]}"; do
    echo "Creando volumen $VOL (${VOLUMENES[$VOL]})"
    sudo lvcreate -L "${VOLUMENES[$VOL]}" -n "$VOL" kaos-vg || exit 1
    sudo mkfs.ext4 "/dev/kaos-vg/$VOL"
done

# 5. Configurar montaje automático
echo "Configurando /etc/fstab"
for VOL in "${!VOLUMENES[@]}"; do
    UUID=$(sudo blkid -s UUID -o value "/dev/kaos-vg/$VOL")
    echo "UUID=${UUID} /mnt/${VOL} ext4 defaults 0 0" | sudo tee -a /etc/fstab
    sudo mkdir -p "/mnt/${VOL}"
done

# 6. Montar todos los volúmenes
echo "Montando volúmenes"
sudo mount -a

echo "[$(date)] Configuración completada"
echo "Resumen:"
sudo lvs kaos-vg
lsblk | grep kaos-vg
"