#!/bin/bash
LOG_FILE="/var/log/docker_lvm/detailed_$(date +%Y%m%d_%H%M%S).log"
SUMMARY_FILE="/var/log/docker_lvm/summary_$(date +%Y%m%d).log"

# Crear directorio de logs si no existe
sudo mkdir -p /var/log/docker_lvm

exec > >(sudo tee -a "$SUMMARY_FILE") 2>&1

echo "[$(date +%FT%T)] Iniciando proceso de vinculación LVM-Docker" | sudo tee -a "$LOG_FILE"

log_action() {
    echo "[$(date +%FT%T)] $1" | sudo tee -a "$LOG_FILE"
}

# Línea original con error
mapfile -t LV_LIST < <(sudo lvs --noheadings -o lv_name,vg_name,lv_path,dev_size kaos-vg)

# Nueva versión corregida
mapfile -t LV_LIST < <(sudo lvs --noheadings -o lv_name,vg_name,lv_path,lv_size kaos-vg)

for LV_INFO in "${LV_LIST[@]}"
do
    LV_NAME=$(echo "$LV_INFO" | awk '{print $1}')
    LV_PATH=$(echo "$LV_INFO" | awk '{print $3}')
    LV_SIZE=$(echo "$LV_INFO" | awk '{print $4}')
    
    log_action "Procesando LV: $LV_NAME ($LV_SIZE)"
    
    MOUNT_POINT=$(findmnt -n -o TARGET "$LV_PATH")
    
    if [ -z "$MOUNT_POINT" ]; then
        log_action "ERROR: $LV_NAME no está montado"
        continue
    fi
    
    if docker volume inspect "$LV_NAME" &>/dev/null; then
        log_action "Volumen $LV_NAME ya existe - Actualizando configuración"
        docker volume rm "$LV_NAME"
    fi
    
    log_action "Creando volumen Docker: $LV_NAME → $MOUNT_POINT"
    docker volume create \
        --driver local \
        --opt type=none \
        --opt device="$MOUNT_POINT" \
        --opt o=bind \
        "$LV_NAME"
    
    sudo chown -R kaos:kaos "$MOUNT_POINT"
    log_action "Configuración completada para $LV_NAME"
done

log_action "Proceso finalizado. Resumen:"
docker volume ls --format 'table {{.Name}}\t{{.Mountpoint}}' | sudo tee -a "$LOG_FILE"