# Documentación Técnica - Auditoría LVM

## Objetivo
Generar reportes detallados de:
- Estado físico de los volúmenes
- Distribución de espacio
- Integridad del sistema LVM
- Métricas de rendimiento

## Parámetros de Ejecución
```bash
# Ejecución estándar
sudo ./lvm_audit.sh

# Monitoreo continuo (cada 5 minutos)
watch -n 300 --color './lvm_audit.sh'