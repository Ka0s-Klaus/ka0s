# Documentación Técnica - Auditoría de Discos

## Criterios de Detección
1. **No en LVM**: Sin PVs asociados
2. **No montado**: Sin puntos de montaje activos
3. **No en fstab**: Sin entradas de montaje permanente
4. **RAW Disk**: Sin tabla de particiones

## Ejecución Avanzada
```bash
# Escaneo con análisis forense básico
sudo ./disk_audit.sh

# Buscar solo discos > 1TB
awk '/[T|t]erabyte/' ${REPORT_FILE}