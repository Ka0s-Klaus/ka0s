#!/bin/bash
set -euo pipefail

REPORT_DIR="audit/kube"
WORKFLOW_ID="${1:-manual}"
DATE_STR="$(date -u +%Y%m%d_%H%M%S)"
REPORT_FILE="${REPORT_DIR}/${DATE_STR}_${WORKFLOW_ID}_cluster-audit.md"

mkdir -p "${REPORT_DIR}"

section() {
  echo "" >> "${REPORT_FILE}"
  echo "## $1" >> "${REPORT_FILE}"
  echo "" >> "${REPORT_FILE}"
}

codeblock() {
  echo "\`\`\`" >> "${REPORT_FILE}"
  cat >> "${REPORT_FILE}"
  echo "\`\`\`" >> "${REPORT_FILE}"
}

run() {
  local title="$1"
  shift
  section "${title}"
  {
    echo "Command: $*"
    echo "Timestamp (UTC): $(date -u)"
    echo ""
    "$@"
  } | codeblock
}

echo "# 🧾 Ka0s Cluster Audit Report - ${DATE_STR}" > "${REPORT_FILE}"
echo "**Generado (UTC):** $(date -u)" >> "${REPORT_FILE}"
echo "**Origen:** ${WORKFLOW_ID}" >> "${REPORT_FILE}"
echo "" >> "${REPORT_FILE}"
echo "Este reporte evita deliberadamente volcar \`Secret\` o \`describe\` de workloads para no exponer variables sensibles." >> "${REPORT_FILE}"

run "🔎 Contexto del clúster" kubectl cluster-info
run "🔎 Versión" kubectl version -o yaml

run "🖥️ Nodos (resumen)" kubectl get nodes -o wide
run "🖥️ Nodos (taints)" kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.taints}{"\n"}{end}'
run "🖥️ Nodos (cordon/unschedulable)" kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\tunschedulable="}{.spec.unschedulable}{"\n"}{end}'
run "🖥️ Nodos (condiciones clave)" kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .status.conditions[*]}{.type}{"="}{.status}{";"}{end}{"\n"}{end}'

run "📈 Uso de recursos (top nodes)" kubectl top nodes

run "📦 Namespaces" kubectl get ns

run "📦 Workloads (deploy/statefulset/daemonset)" kubectl get deploy,sts,ds -A
run "📦 Jobs/CronJobs" kubectl get jobs,cronjobs -A
run "📦 PodDisruptionBudgets" kubectl get pdb -A

run "🧩 Pods (wide)" kubectl get pods -A -o wide
run "🧩 Pods no saludables (no Running/Completed)" bash -lc "kubectl get pods -A --no-headers | egrep -v 'Running|Completed' || true"

run "🌐 Services" kubectl get svc -A
run "🌐 Endpoints" kubectl get endpoints -A
run "🌐 Ingress" kubectl get ingress -A
run "🌐 NetworkPolicies" kubectl get netpol -A

run "🧩 APIService (agregado)" kubectl get apiservices

run "💾 StorageClasses" kubectl get storageclass
run "💾 PersistentVolumes" kubectl get pv
run "💾 PersistentVolumeClaims" kubectl get pvc -A

run "🛡️ Trivy Operator (CRDs)" bash -lc "kubectl get crd | egrep 'aquasecurity|trivy' || true"
run "🛡️ Trivy Reports (conteo)" bash -lc "kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers 2>/dev/null | wc -l || true"
run "🛡️ Trivy Reports (muestra)" bash -lc "kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers 2>/dev/null | head -n 20 || true"

run "📢 Eventos Warning (últimos 50)" bash -lc "kubectl get events -A --field-selector type=Warning --sort-by='.lastTimestamp' | tail -n 50"

section "🧭 Servicios críticos (estado rápido)"
{
  echo "- metrics-server: $(kubectl get deploy -n kube-system metrics-server -o jsonpath='{.status.availableReplicas}' 2>/dev/null || echo 'n/a') available replicas"
  echo "- ingress-nginx-controller: $(kubectl get deploy -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.availableReplicas}' 2>/dev/null || echo 'n/a') available replicas"
  echo "- trivy-operator: $(kubectl get deploy -n trivy-system trivy-operator -o jsonpath='{.status.availableReplicas}' 2>/dev/null || echo 'n/a') available replicas"
  echo "- zabbix-server: $(kubectl get deploy -n zabbix zabbix-server -o jsonpath='{.status.availableReplicas}' 2>/dev/null || echo 'n/a') available replicas"
  echo "- zabbix-web: $(kubectl get deploy -n zabbix zabbix-web -o jsonpath='{.status.availableReplicas}' 2>/dev/null || echo 'n/a') available replicas"
} >> "${REPORT_FILE}"

section "🗃️ MongoDB (estado y ubicación)"
{
  kubectl get pods -n mongo -o wide
  echo ""
  kubectl get sts,svc,pvc -n mongo
} | codeblock

echo "" >> "${REPORT_FILE}"
echo "---" >> "${REPORT_FILE}"
echo "✅ Reporte generado en: ${REPORT_FILE}" >> "${REPORT_FILE}"
echo "${REPORT_FILE}"
