#!/bin/bash
# =================================================================================================
# [Ka0S] Force Delete Namespace & Resources
# =================================================================================================
# Elimina un namespace y todos sus recursos de manera recursiva y forzosa.
# Genera un informe detallado de todo lo eliminado.
# =================================================================================================

set -e

NAMESPACE=$1
RESULTS_DIR=${2:-/tmp/results}
mkdir -p "$RESULTS_DIR"

if [ -z "$NAMESPACE" ]; then
    echo "Error: Namespace is required."
    exit 1
fi

TS=$(date +'%Y%m%d-%H%M%S')
REPORT_FILE="$RESULTS_DIR/delete-report-$NAMESPACE-$TS.md"

echo "[INFO] Iniciando eliminación del namespace: $NAMESPACE"
echo "[INFO] Reporte: $REPORT_FILE"

# Start Report
{
    echo "# Ka0s Deletion Report: $NAMESPACE"
    echo ""
    echo "**Fecha:** $(date)"
    echo "**Namespace:** $NAMESPACE"
    echo "**Ejecutor:** Automated Workflow"
    echo ""
    echo "## 1. Inventario Previo a Eliminación"
    echo "Recursos detectados antes de proceder:"
    echo '```'
    kubectl api-resources --verbs=list --namespaced -o name | xargs -n 1 kubectl get --show-kind --ignore-not-found -n "$NAMESPACE" || echo "No resources found or namespace already gone"
    echo '```'
    echo ""
} > "$REPORT_FILE"

# Check if namespace exists
if ! kubectl get ns "$NAMESPACE" > /dev/null 2>&1; then
    echo "Namespace $NAMESPACE not found." | tee -a "$REPORT_FILE"
    exit 0
fi

# Step 1: Delete all resources in namespace
echo "## 2. Proceso de Eliminación de Recursos" >> "$REPORT_FILE"
echo "Eliminando todos los recursos en $NAMESPACE..." | tee -a "$REPORT_FILE"

kubectl delete all --all -n "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true
kubectl delete ingress --all -n "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true
kubectl delete configmap --all -n "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true
kubectl delete secret --all -n "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true
kubectl delete pvc --all -n "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true

# Step 2: Delete Namespace
echo "" >> "$REPORT_FILE"
echo "## 3. Eliminación del Namespace" >> "$REPORT_FILE"
echo "Solicitando eliminación del namespace..." | tee -a "$REPORT_FILE"

kubectl delete ns "$NAMESPACE" --timeout=60s --wait=false >> "$REPORT_FILE" 2>&1 || true

# Step 3: Handle Stuck Namespace (Finalizers)
echo "Esperando a que el namespace desaparezca..."
# Wait loop
TIMEOUT=60
COUNTER=0
STUCK=false

while kubectl get ns "$NAMESPACE" > /dev/null 2>&1; do
    sleep 2
    COUNTER=$((COUNTER+2))
    if [ "$COUNTER" -ge "$TIMEOUT" ]; then
        STUCK=true
        break
    fi
    echo -n "."
done

if [ "$STUCK" = true ]; then
    echo "" >> "$REPORT_FILE"
    echo "## 4. ⚠️ Namespace Atascado - Forzando Eliminación" >> "$REPORT_FILE"
    echo "El namespace no se ha eliminado tras $TIMEOUT segundos. Posible bloqueo por finalizers." | tee -a "$REPORT_FILE"
    
    echo "Eliminando finalizers..." | tee -a "$REPORT_FILE"
    kubectl get namespace "$NAMESPACE" -o json | tr -d "\n" | sed "s/\"finalizers\": \[[^]]*\]/\"finalizers\": []/" | kubectl replace --raw "/api/v1/namespaces/$NAMESPACE/finalize" -f - >> "$REPORT_FILE" 2>&1
    
    echo "Verificando eliminación final..."
    sleep 5
    if ! kubectl get ns "$NAMESPACE" > /dev/null 2>&1; then
         echo "✅ Namespace eliminado forzosamente con éxito." | tee -a "$REPORT_FILE"
    else
         echo "❌ Error crítico: El namespace persiste incluso tras purgar finalizers." | tee -a "$REPORT_FILE"
         exit 1
    fi
else
    echo "" >> "$REPORT_FILE"
    echo "✅ Namespace eliminado correctamente de forma estándar." | tee -a "$REPORT_FILE"
fi

echo "[SUCCESS] Proceso completado."
