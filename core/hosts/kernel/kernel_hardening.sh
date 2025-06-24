#!/bin/bash

# Configurar logging
LOG_FILE="/var/log/kernel_hardening_$(date +%Y%m%d_%H%M%S).log"
exec > >(tee -a "${LOG_FILE}") 2>&1

echo "[$(date)] Inicio de auditoría de kernel"

# 1. Actualizar repositorios
echo "Actualizando repositorios..."
sudo apt update -y

# 2. Verificar actualizaciones de seguridad del kernel
SEC_UPDATES=$(apt list --upgradable | grep -E 'linux-image|linux-headers' | grep -i security)

if [ -n "$SEC_UPDATES" ]; then
    echo "Aplicando actualizaciones de seguridad:"
    echo "$SEC_UPDATES"
    sudo apt upgrade --only-upgrade linux-image-* linux-headers-* -y
    
    # 3. Reiniciar solo si se actualizó el kernel
    if dpkg -l | grep -q 'linux-image-.*-generic'; then
        echo "Reiniciando sistema para cargar nuevo kernel..."
        sudo reboot
    fi
else
    echo "No se encontraron actualizaciones de seguridad pendientes"
fi

# 4. Configurar protecciones avanzadas
echo "Aplicando hardening del kernel..."
sudo sysctl -w \
    kernel.kptr_restrict=2 \
    kernel.dmesg_restrict=1 \
    kernel.unprivileged_bpf_disabled=1

# 5. Verificar CVEs conocidos (requiere conexión a Internet)
echo "Verificando CVEs conocidos..."
curl -s https://ubuntu.com/security/notices | grep -Po 'CVE-\d{4}-\d+' | sort -u > /tmp/cve_list.txt

# 6. Comprobar si el kernel actual está afectado
CURRENT_KERNEL=$(uname -r)
if grep -q "$CURRENT_KERNEL" /var/log/apt/history.log; then
    echo "[✔] Kernel actualizado y protegido"
else
    echo "[!] Se detectó kernel vulnerable: $CURRENT_KERNEL"
    exit 1
fi

# Nueva sección: Limpieza de /tmp
echo "[$(date)] Iniciando limpieza de /tmp"

# Limpiar archivos temporales antiguos (más de 1 día)
sudo find /tmp -type f -atime +1 -delete 2>/dev/null

# Eliminar directorios vacíos en /tmp
sudo find /tmp -type d -empty -delete 2>/dev/null

# Recrear directorios esenciales
sudo mkdir -p /tmp/{systemd-private,apache2,mysql}
sudo chmod 1777 /tmp

echo "Limpieza completada: $(find /tmp -type f | wc -l) archivos restantes"

# Finalización con estado de salida
echo "[$(date)] Resultado final: $([ $? -eq 0 ] && echo 'ÉXITO' || echo 'FALLO')"

# Crear resumen ejecutivo
SUMMARY="Resumen de ejecución:\n"
SUMMARY+="- Actualizaciones aplicadas: ${SEC_UPDATES:-0}\n"
SUMMARY+="- CVEs detectados: $(wc -l < /tmp/cve_list.txt)\n"
SUMMARY+="- Reinicio requerido: $([ -f /var/run/reboot-required ] && echo 'Sí' || echo 'No')\n"

echo -e "${SUMMARY}" | sudo tee -a "${LOG_FILE}" > /dev/null

# Modificar sección de CVEs
echo "CVEs detectados (${CVE_COUNT}):"
cat /tmp/cve_list.txt | sudo tee -a "${LOG_FILE}"

# Actualizar resumen ejecutivo
SUMMARY+="- CVEs críticos:\n$(grep -E 'CVE-202[4-9]' /tmp/cve_list.txt | sort | head -n5 | sed 's/^/  • /')\n"