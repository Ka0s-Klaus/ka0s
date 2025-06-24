#!/bin/bash

# Gestión de expansión de volúmenes LVM
# Autor: [Bil]

LOG_FILE="/var/log/lvm_extend_$(date +%Y%m%d_%H%M%S).log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "[$(date)] Iniciando proceso de expansión"

# 1. Listar grupos de volúmenes
echo "Grupos de volúmenes disponibles:"
sudo vgs --units g -o vg_name,vg_size,vg_free

read -p "Introduce el nombre del grupo de volúmenes: " VG_NAME

# 2. Mostrar volúmenes lógicos y espacio libre
echo -e "\nVolúmenes en $VG_NAME:"
sudo lvs --units g -o lv_name,lv_size,vg_name $VG_NAME

FREE_SPACE=$(sudo vgs --units g -o vg_free $VG_NAME | tail -1 | tr -d ' ' | sed 's/g//')
echo -e "\nEspacio disponible: ${FREE_SPACE}G"

# 3. Selección de volumen a expandir
read -p "Introduce el nombre del volumen lógico: " LV_NAME

# 4. Validar espacio disponible
read -p "Cantidad a añadir (ej: 50G o 100%FREE): " SIZE

# 5. Expansión del volumen
echo "Expandiendo $LV_NAME con $SIZE..."
sudo lvextend -L +$SIZE /dev/$VG_NAME/$LV_NAME && \
    sudo resize2fs /dev/$VG_NAME/$LV_NAME

# 6. Verificación final
echo -e "\nEstado actualizado:"
sudo lvs /dev/$VG_NAME/$LV_NAME
lsblk | grep $LV_NAME

echo "[$(date)] Proceso completado. Log: $LOG_FILE"