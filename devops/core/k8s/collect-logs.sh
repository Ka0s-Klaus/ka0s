#!/bin/bash
set -e

# Configuración
# export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}
WORKFLOW_ID="${1:-cron}"
LOG_DIR="${2:-audit/k8servicelog}"
DATE_STR=$(date +%Y%m%d_%H%M%S)

mkdir -p "$LOG_DIR"

echo "Iniciando recolección de logs de servicios (última hora)..."

# Obtener todos los servicios en formato "namespace nombre"
# Excluyendo kubernetes default service a veces, pero mejor incluir todo.
kubectl get svc --all-namespaces --no-headers | while read -r ns svc_name type cluster_ip external_ip ports age; do
    
    # Ignorar header si se coló (aunque no-headers lo evita)
    [ "$ns" == "NAMESPACE" ] && continue

    echo "Procesando servicio: $svc_name en namespace: $ns"
    
    # Archivo de destino
    LOG_FILE="${LOG_DIR}/${DATE_STR}_${WORKFLOW_ID}_${svc_name}.log"
    
    # Intentar obtener selector
    SELECTOR=$(kubectl get svc "$svc_name" -n "$ns" -o jsonpath='{.spec.selector}' | jq -r 'to_entries | map("\(.key)=\(.value)") | join(",")' 2>/dev/null || echo "")

    if [ -n "$SELECTOR" ] && [ "$SELECTOR" != "null" ]; then
        # Obtener logs de todos los pods que coincidan con el selector
        # --since=1h
        # --all-containers=true
        # --prefix=true (para distinguir pods)
        
        # Verificar si hay pods primero para evitar crear archivos vacíos o errores
        POD_COUNT=$(kubectl get pods -n "$ns" -l "$SELECTOR" --no-headers 2>/dev/null | wc -l)
        
        if [ "$POD_COUNT" -gt 0 ]; then
            echo "Recopilando logs de $POD_COUNT pods para $svc_name..."
            {
                echo "=== Logs for Service: $svc_name (Namespace: $ns) ==="
                echo "=== Date: $(date) ==="
                echo "=== Selector: $SELECTOR ==="
                echo ""
                kubectl logs -n "$ns" -l "$SELECTOR" --since=1h --all-containers=true --prefix=true --max-log-requests=10 2>&1
            } > "$LOG_FILE"
        else
            echo "No pods found for service $svc_name (Selector: $SELECTOR)"
        fi
    else
        # Servicio sin selector (ExternalName, etc.)
        # Intentar endpoints?
        echo "Service $svc_name has no selector. Skipping logs."
    fi

done

echo "✅ Recolección de logs completada en $LOG_DIR"
