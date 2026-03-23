#!/bin/bash
# k8s_health_check.sh
# Script para comprobar automáticamente la salud del clúster de Kubernetes y sus servicios.
# Basado en las comprobaciones realizadas en la incidencia de Ollama/GPU.

set -e

echo "========================================"
echo "Iniciando Comprobación de Salud de K8s"
echo "========================================"

# 1. Comprobar estado de los Nodos
echo "[1] Comprobando el estado de los nodos..."
NODES_NOT_READY=$(kubectl get nodes --no-headers | awk '{print $2}' | grep -v 'Ready' || true)

if [ -n "$NODES_NOT_READY" ]; then
    echo "⚠️ ALERTA: Hay nodos que no están en estado Ready:"
    kubectl get nodes | grep -v 'Ready'
else
    echo "✅ Todos los nodos están en estado Ready."
fi

echo "----------------------------------------"

# 2. Comprobar pods que no están en Running o Completed
echo "[2] Comprobando pods en estado anómalo (ni Running ni Completed)..."
PODS_ANOMALOS=$(kubectl get pods -A --no-headers | awk '{print $4}' | grep -E -v 'Running|Completed' || true)

if [ -n "$PODS_ANOMALOS" ]; then
    echo "⚠️ ALERTA: Se han encontrado pods con estado anómalo:"
    kubectl get pods -A | head -n 1
    kubectl get pods -A | grep -E -v 'Running|Completed'
    
    # Extraer lista de pods y namespaces para detallar
    echo ""
    echo "🔍 Detalles de los pods fallidos:"
    kubectl get pods -A --no-headers | awk '{if ($4 !~ /Running|Completed/) print $1, $2}' | while read ns pod; do
        echo "   -> Describiendo eventos del pod $pod en namespace $ns:"
        kubectl describe pod $pod -n $ns | grep -A 5 -E "^Events:|^Status:|^Reason:|^Message:" || true
    done
else
    echo "✅ Todos los pods están funcionando correctamente (Running o Completed)."
fi

echo "----------------------------------------"

# 3. Comprobar disponibilidad de recursos (Ej: GPUs que fallaban en Ollama)
echo "[3] Comprobando plugins de dispositivos y recursos (ej. intel-device-plugin)..."
INTEL_PLUGINS_FAILING=$(kubectl get pods -n kube-system | grep intel | grep -v 'Running' || true)

if [ -n "$INTEL_PLUGINS_FAILING" ]; then
    echo "⚠️ ALERTA: Hay problemas con los device plugins de Intel:"
    kubectl get pods -n kube-system | grep intel | grep -v 'Running'
else
    echo "✅ Los plugins de dispositivos parecen estar Running."
fi

echo "========================================"
echo "Comprobación finalizada."
echo "========================================"

# Salir con código de error si hay anomalías críticas (opcional, útil para CI/CD)
if [ -n "$NODES_NOT_READY" ] || [ -n "$PODS_ANOMALOS" ]; then
    exit 1
fi

exit 0
