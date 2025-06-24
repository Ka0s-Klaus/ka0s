#!/bin/bash

# Auditoría avanzada de volúmenes LVM
# Autor: [Bil]

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT_FILE="/var/log/lvm_report_${TIMESTAMP}.log"

echo "[$(date)] Iniciando auditoría LVM" | sudo tee -a "${REPORT_FILE}"

# 1. Estado general de LVM
echo -e "\n=== ESTADO GENERAL ===" | sudo tee -a "${REPORT_FILE}"
sudo pvs -v --units g --noheadings -o pv_name,pv_size,pv_free,vg_name | awk '{printf "PV: %-15s Size: %-8s Free: %-8s VG: %s\n", $1, $2, $3, $4}' | tee -a "${REPORT_FILE}"

# 2. Detalle de grupos de volúmenes
echo -e "\n=== GRUPOS DE VOLÚMENES ===" | tee -a "${REPORT_FILE}"
sudo vgs -v --units g --noheadings -o vg_name,vg_size,vg_free,vg_extent_size,vg_uuid |\
awk '{printf "VG: %-10s Size: %-8s Free: %-8s Extent: %-6s UUID: %s\n", $1, $2, $3, $4, $5}' | sudo tee -a "${REPORT_FILE}"

# 3. Detalle de volúmenes lógicos
echo -e "\n=== VOLÚMENES LÓGICOS ===" | sudo tee -a "${REPORT_FILE}"
sudo lvs -v --units g --noheadings -o lv_name,vg_name,lv_size,lv_attr,segtype,devices |\
awk '{printf "LV: %-15s VG: %-10s Size: %-8s Attr: %-5s Type: %-10s Devices: %s\n", $1, $2, $3, $4, $5, $6}' | sudo tee -a "${REPORT_FILE}"

# 4. Análisis de espacio
echo -e "\n=== RESUMEN DE CAPACIDAD ===" | sudo tee -a "${REPORT_FILE}"
{
    echo "Sistema de Archivos | Tamaño | Usado | Libre | % Usado | Punto de Montaje"
    df -h --output=source,fstype,size,used,avail,pcent,target | grep -E '(lvm|LVM)' |\
    awk '{printf "%-20s | %-6s | %-5s | %-5s | %-6s | %s\n", $1, $3, $4, $5, $6, $7}'
} | sudo tee -a "${REPORT_FILE}"

# 5. Verificación de integridad
echo -e "\n=== VERIFICACIÓN DE INTEGRIDAD ===" | sudo tee -a "${REPORT_FILE}"
sudo lvscan -v 2>&1 | sudo tee -a "${REPORT_FILE}"
sudo vgck -v 2>&1 | sudo tee -a "${REPORT_FILE}"

# 6. Rendimiento básico
echo -e "\n=== MÉTRICAS DE RENDIMIENTO ===" | sudo tee -a "${REPORT_FILE}"
{
    echo "Dispositivo | Lecturas/s | Escrituras/s | Utilización"
    iostat -d -p /dev/mapper/* 1 2 | awk '/mapper/{printf "%-10s | %-9s | %-10s | %s\n", $1, $2, $3, $NF}'
} | sudo tee -a "${REPORT_FILE}"

echo "[$(date)] Auditoría completada. Reporte: ${REPORT_FILE}"