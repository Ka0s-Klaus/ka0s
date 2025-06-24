#!/bin/bash

# Auditoría de discos no configurados
# Autor: [Bil]

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT_FILE="/var/log/disk_audit_${TIMESTAMP}.log"

echo "[$(date)] Iniciando escaneo de discos" | sudo tee -a "${REPORT_FILE}"

# 1. Detectar todos los discos disponibles
echo -e "\n=== DISCOS DETECTADOS ===" | sudo tee -a "${REPORT_FILE}"
DISK_LIST=$(lsblk -d -n -o NAME,SIZE,MODEL,TRAN,SUBSYSTEMS | grep -E '^(sd|nvme|vd)')
echo "${DISK_LIST}" | sudo tee -a "${REPORT_FILE}"

# 2. Filtrar discos no configurados
echo -e "\n=== DISCOS NO CONFIGURADOS ===" | sudo tee -a "${REPORT_FILE}"
while IFS= read -r line; do
    disk=$(echo "$line" | awk '{print $1}')
    
    # Verificar si está en LVM
    in_lvm=$(sudo pvs --noheadings -o pv_name | grep -c "/dev/${disk}")
    
    # Verificar montaje
    mounted=$(findmnt -n -o SOURCE "/dev/${disk}" | wc -l)
    
    # Verificar en fstab
    in_fstab=$(grep -c "^/dev/${disk}" /etc/fstab)
    
    if [[ $in_lvm -eq 0 && $mounted -eq 0 && $in_fstab -eq 0 ]]; then
        echo "Disco no configurado detectado: /dev/${disk}" | sudo tee -a "${REPORT_FILE}"
        
        # Obtener detalles adicionales
        sudo smartctl -i /dev/${disk} 2>&1 | \
        awk '/Model|Capacity|Serial|Rotation/{printf "  %-15s: %s\n", $1, $0}' | sudo tee -a "${REPORT_FILE}"
    fi
done <<< "${DISK_LIST}"

# 3. Análisis de seguridad
echo -e "\n=== ANÁLISIS DE SEGURIDAD ===" | sudo tee -a "${REPORT_FILE}"
{
    echo "Discos con permisos peligrosos:"
    find /dev -type b -name 'sd*' -perm /o=rwx -ls 2>/dev/null | awk '{print "  " $11 " - " $3}' 
} | sudo tee -a "${REPORT_FILE}"

echo "[$(date)] Escaneo completado. Reporte: ${REPORT_FILE}"