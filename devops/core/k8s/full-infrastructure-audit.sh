#!/bin/bash
set -e

# Configuración
export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}
REPORT_DIR="audit/k8sreport"
DATE_STR=$(date +%Y%m%d_%H%M%S)
WORKFLOW_ID="${1:-manual}"
REPORT_FILE="${REPORT_DIR}/${DATE_STR}_${WORKFLOW_ID}_k8sinfra.md"

mkdir -p "$REPORT_DIR"

# Función para escribir encabezados
write_header() {
    echo "" >> "$REPORT_FILE"
    echo "## $1" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
}

write_subheader() {
    echo "" >> "$REPORT_FILE"
    echo "### $1" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
}

# Inicio del reporte
echo "# 🏗️ Full Infrastructure Audit Report" > "$REPORT_FILE"
echo "**Fecha:** $(date)" >> "$REPORT_FILE"
echo "**Cluster Info:**" >> "$REPORT_FILE"
kubectl cluster-info | head -n 3 | sed 's/^/- /' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 1. Cluster Level Resources
write_header "🖥️ Cluster Nodes"
kubectl get nodes -o wide | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE"

write_header "💾 Storage Classes"
kubectl get sc -o name 2>/dev/null | sed 's/storageclass.storage.k8s.io\///' | sed 's/^/- /' >> "$REPORT_FILE" || echo "No StorageClasses found." >> "$REPORT_FILE"

write_header "📦 Namespaces"
NAMESPACES=$(kubectl get ns -o jsonpath='{.items[*].metadata.name}')
echo "Namespaces found: $NAMESPACES" >> "$REPORT_FILE"

# 2. Iterate over Namespaces
for ns in $NAMESPACES; do
    echo "" >> "$REPORT_FILE"
    echo "---" >> "$REPORT_FILE"
    echo "# Namespace: **$ns**" >> "$REPORT_FILE"
    
    # Workloads
    write_subheader "Workloads (Deployments, StatefulSets, DaemonSets)"
    echo "#### Deployments" >> "$REPORT_FILE"
    kubectl get deploy -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No deployments." >> "$REPORT_FILE"
    
    echo "#### StatefulSets" >> "$REPORT_FILE"
    kubectl get sts -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No StatefulSets." >> "$REPORT_FILE"
    
    echo "#### DaemonSets" >> "$REPORT_FILE"
    kubectl get ds -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No DaemonSets." >> "$REPORT_FILE"

    # Pods
    write_subheader "Pods Status"
    kubectl get pods -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No pods." >> "$REPORT_FILE"

    # Networking
    write_subheader "Networking (Services & Ingress)"
    echo "#### Services" >> "$REPORT_FILE"
    kubectl get svc -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No services." >> "$REPORT_FILE"
    
    echo "#### Ingress" >> "$REPORT_FILE"
    kubectl get ing -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No ingress." >> "$REPORT_FILE"

    # Config & Storage
    write_subheader "Configuration & Storage"
    echo "#### ConfigMaps" >> "$REPORT_FILE"
    kubectl get cm -n "$ns" --no-headers 2>/dev/null | awk '{print "- " $1}' >> "$REPORT_FILE" || echo "No ConfigMaps." >> "$REPORT_FILE"
    
    echo "#### Secrets" >> "$REPORT_FILE"
    kubectl get secrets -n "$ns" --no-headers 2>/dev/null | awk '{print "- " $1 " (" $2 ")"}' >> "$REPORT_FILE" || echo "No Secrets." >> "$REPORT_FILE"
    
    echo "#### PVCs" >> "$REPORT_FILE"
    kubectl get pvc -n "$ns" -o wide 2>/dev/null | sed '1!s/^/    /' | sed '1s/^/```text\n/' | sed '$a```' >> "$REPORT_FILE" || echo "No PVCs." >> "$REPORT_FILE"

done

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "✅ Audit completed successfully." >> "$REPORT_FILE"

echo "Report generated: $REPORT_FILE"
