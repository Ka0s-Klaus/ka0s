#!/bin/bash
set -e

# Configuración
# export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}
SERVICE_NAME="${1:?Service name is required}"
NAMESPACE="${2:-default}"
WORKFLOW_ID="${3:-manual}"
REPORT_DIR="${4:-audit/k8services}"

DATE_STR=$(date +%Y%m%d_%H%M%S)
REPORT_FILE="${REPORT_DIR}/${DATE_STR}_${WORKFLOW_ID}_${SERVICE_NAME}.md"

mkdir -p "$REPORT_DIR"

# Verificar existencia del servicio
if ! kubectl get svc "$SERVICE_NAME" -n "$NAMESPACE" &> /dev/null; then
    echo "❌ Error: Service '$SERVICE_NAME' not found in namespace '$NAMESPACE'."
    exit 1
fi

# Función para escribir encabezados
write_header() {
    echo "" >> "$REPORT_FILE"
    echo "## $1" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
}

# Inicio del reporte
echo "# 🔍 Service Audit: $SERVICE_NAME" > "$REPORT_FILE"
echo "**Namespace:** $NAMESPACE" >> "$REPORT_FILE"
echo "**Fecha:** $(date)" >> "$REPORT_FILE"
echo "**Workflow ID:** $WORKFLOW_ID" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 1. Service Description
write_header "📋 Service Description"
echo "```yaml" >> "$REPORT_FILE"
kubectl get svc "$SERVICE_NAME" -n "$NAMESPACE" -o yaml >> "$REPORT_FILE"
echo "```" >> "$REPORT_FILE"

# 2. Detailed Describe
write_header "📝 Kubectl Describe"
echo "```text" >> "$REPORT_FILE"
kubectl describe svc "$SERVICE_NAME" -n "$NAMESPACE" >> "$REPORT_FILE"
echo "```" >> "$REPORT_FILE"

# 3. Endpoints & Pods
write_header "🔗 Endpoints & Pods"
echo "### Endpoints" >> "$REPORT_FILE"
echo "```text" >> "$REPORT_FILE"
kubectl get endpoints "$SERVICE_NAME" -n "$NAMESPACE" >> "$REPORT_FILE"
echo "```" >> "$REPORT_FILE"

echo "### Related Pods" >> "$REPORT_FILE"
# Intentar obtener selector para listar pods
SELECTOR=$(kubectl get svc "$SERVICE_NAME" -n "$NAMESPACE" -o jsonpath='{.spec.selector}' | jq -r 'to_entries | map("\(.key)=\(.value)") | join(",")' 2>/dev/null || echo "")

if [ -n "$SELECTOR" ] && [ "$SELECTOR" != "null" ]; then
    echo "Selector found: \`$SELECTOR\`" >> "$REPORT_FILE"
    echo "```text" >> "$REPORT_FILE"
    kubectl get pods -n "$NAMESPACE" -l "$SELECTOR" -o wide >> "$REPORT_FILE"
    echo "```" >> "$REPORT_FILE"
    
    # 4. Logs (Tail)
    write_header "📜 Recent Logs (Tail 50 lines from up to 3 pods)"
    PODS=$(kubectl get pods -n "$NAMESPACE" -l "$SELECTOR" -o jsonpath='{.items[*].metadata.name}' | tr ' ' '\n' | head -n 3)
    
    for pod in $PODS; do
        echo "#### Pod: $pod" >> "$REPORT_FILE"
        echo "```text" >> "$REPORT_FILE"
        kubectl logs -n "$NAMESPACE" "$pod" --tail=50 --all-containers=true >> "$REPORT_FILE" || echo "Error retrieving logs." >> "$REPORT_FILE"
        echo "```" >> "$REPORT_FILE"
    done
else
    echo "⚠️ No selector found (ExternalName or headless?). Listing endpoints only." >> "$REPORT_FILE"
fi

# 5. Events
write_header "📢 Related Events"
echo "```text" >> "$REPORT_FILE"
kubectl get events -n "$NAMESPACE" --field-selector involvedObject.name="$SERVICE_NAME" --sort-by='.lastTimestamp' >> "$REPORT_FILE"
echo "```" >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"
echo "✅ Service audit completed." >> "$REPORT_FILE"
echo "Report generated: $REPORT_FILE"
