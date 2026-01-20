#!/bin/bash

# Directorio donde se guardarán los resultados en el host remoto
RESULTS_DIR="/tmp/results"

# Limpiamos el directorio por si existían ejecuciones anteriores
rm -rf "$RESULTS_DIR"
mkdir -p "$RESULTS_DIR"

echo "Executing test script on $(hostname)"

# Creamos un fichero de log de ejemplo
echo "Log file generated on $(date)" > "$RESULTS_DIR/test_log_$(date +%s).log"

# Creamos un fichero JSON de ejemplo
echo '{
  "status": "success",
  "hostname": "'"$(hostname)"'",
  "timestamp": "'"$(date)"'"
}' > "$RESULTS_DIR/test_results_$(date +%s).json"

echo "Test script finished. Results are in $RESULTS_DIR"

ls -l "$RESULTS_DIR"