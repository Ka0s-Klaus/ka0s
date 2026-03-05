#!/bin/bash
set -e

# ==============================================================================
# Script: check-high-load.sh
# Descripción: Diagnóstico Táctico de Carga Alta (CPU/Load/IO) en Nodos Linux.
# Uso: ./check-high-load.sh [output_dir] [log_filename]
# Salida: Reporte en consola y fichero de log.
# ==============================================================================

# Argumentos
OUTPUT_DIR="${1:-/tmp/ka0s-audit}"
LOG_FILENAME="${2:-high-load-$(date '+%Y%m%d_%H%M%S').log}"

mkdir -p "$OUTPUT_DIR"
LOG_FILE="$OUTPUT_DIR/$LOG_FILENAME"

# Redirigir stdout y stderr al archivo de log y a consola
exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== DIAGNÓSTICO DE CARGA ALTA ==="
date
echo "Hostname: $(hostname)"
uptime
echo "Log File: $LOG_FILE"

echo ""
echo "--- 1. Top 5 Procesos (CPU) ---"
ps -eo pcpu,pid,user,args --sort=-pcpu | head -n 6

echo ""
echo "--- 2. Top 5 Procesos (Memoria) ---"
ps -eo pmem,pid,user,args --sort=-pmem | head -n 6

echo ""
echo "--- 3. Estadísticas de I/O (vmstat) ---"
# Muestra 5 muestras de vmstat cada 1 segundo
vmstat 1 5

echo ""
echo "--- 4. Análisis de Contenedores (Docker/CRI) ---"
if command -v docker &> /dev/null; then
    echo "Docker detectado. Top contenedores por CPU:"
    docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" | sort -k 2 -r | head -n 6
elif command -v crictl &> /dev/null; then
    echo "CRI-O/Containerd detectado. Listando stats:"
    crictl stats | sort -k 2 -r | head -n 6
else
    echo "No se detectó Docker ni CRI-CTL."
fi

echo ""
echo "--- 5. Recomendaciones ---"
LOAD=$(uptime | awk -F'load average:' '{ print $2 }' | awk -F, '{ print $1 }' | tr -d ' ')
CORES=$(nproc)

if (( $(echo "$LOAD > $CORES" | bc -l) )); then
    echo "⚠️  ALERTA: Load Average ($LOAD) > Cores ($CORES). Saturación confirmada."
    echo "   - Si es I/O Wait (wa en vmstat > 10): Revisa discos (iostat) o Etcd fsync."
    echo "   - Si es User CPU (us en vmstat > 80): Revisa procesos Java/Python o bucles infinitos."
    echo "   - Si es System CPU (sy en vmstat > 50): Revisa drivers o contención de Kernel."
else
    echo "✅ Load Average ($LOAD) dentro de límites aceptables (Cores: $CORES)."
fi

echo ""
echo "Reporte guardado en: $LOG_FILE"
