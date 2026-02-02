#!/bin/bash
# =================================================================================================
# [Ka0S] Audit Failed Pods
# =================================================================================================
# Propósito: Detectar pods que no están en estado 'Running' o 'Succeeded'.
# Salida: JSON estructurado en el directorio de resultados.
# =================================================================================================

set -e

# Configuración K8s
export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}

# Directorio de resultados
RESULTS_DIR=${1:-/tmp/results}
mkdir -p "$RESULTS_DIR"

echo "[INFO] Iniciando auditoría de pods fallidos..."
echo "[INFO] Directorio de salida: $RESULTS_DIR"

# Archivo de salida
OUTPUT_FILE="${RESULTS_DIR}/failed_pods.json"

# Extraer pods que NO están en estado Running ni Succeeded
# Usamos jsonpath para filtrar y luego jq (si está disponible) o construcción manual si es necesario.
# Nota: kubectl field-selector status.phase!=Running tiene limitaciones, mejor filtrar con jq post-obtención para más precisión.

if command -v jq &> /dev/null; then
    kubectl get pods --all-namespaces -o json | \
    jq '[.items[] | select(.status.phase != "Running" and .status.phase != "Succeeded")]' > "$OUTPUT_FILE"
else
    echo "[WARN] 'jq' no encontrado. Usando filtrado básico de kubectl (menos detallado)."
    # Fallback básico: solo lista nombres, no JSON completo estructurado idealmente
    kubectl get pods --all-namespaces --field-selector=status.phase!=Running,status.phase!=Succeeded -o json > "$OUTPUT_FILE"
fi

COUNT=$(grep -c "\"kind\": \"Pod\"" "$OUTPUT_FILE" || echo 0)
# Ajuste de conteo para array JSON si usamos jq
if command -v jq &> /dev/null; then
    COUNT=$(jq 'length' "$OUTPUT_FILE")
fi

echo "[SUCCESS] Auditoría finalizada. Se encontraron $COUNT pods con problemas."
echo "[INFO] Resultado guardado en: $OUTPUT_FILE"
