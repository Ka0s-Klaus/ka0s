#!/bin/bash

# Security Audit Script for Kubernetes RBAC & Networking
# Checks for: ClusterAdmin ServiceAccounts, Risky Roles, Missing NetworkPolicies.

OUTPUT_FILE="${1:-k8s-security-audit.md}"
METRICS_FILE="audit/kube/metrics.env"
VIOLATIONS_FILE="audit/kube/violations.md"

echo "" >> "$OUTPUT_FILE"
echo "# Parte 2: Auditoría RBAC y Redes" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 5. ServiceAccounts con 'cluster-admin'" >> "$OUTPUT_FILE"
echo "Cuentas de servicio con control total del clúster (Potencial riesgo alto):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Find ClusterRoleBindings that reference 'cluster-admin' role and have subjects of kind ServiceAccount
CLUSTER_ADMIN_SA=$(kubectl get clusterrolebindings -o json | jq -r '
  .items[] 
  | select(.roleRef.name == "cluster-admin") 
  | .subjects[]? 
  | select(.kind == "ServiceAccount") 
  | "\(.namespace)/\(.name)"' | sort | uniq)
echo "$CLUSTER_ADMIN_SA" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
COUNT_SA_ADMIN=$(echo "$CLUSTER_ADMIN_SA" | grep -v '^$' | wc -l | tr -d ' ')
echo "COUNT_SA_ADMIN=$COUNT_SA_ADMIN" >> "$METRICS_FILE"
echo "" >> "$OUTPUT_FILE"

# Append to Violations Log
if [ "$COUNT_SA_ADMIN" -gt 0 ]; then
  echo "### 5. ServiceAccounts with cluster-admin" >> "$VIOLATIONS_FILE"
  echo "$CLUSTER_ADMIN_SA" | sed 's/^/- /' >> "$VIOLATIONS_FILE"
  echo "" >> "$VIOLATIONS_FILE"
fi

echo "## 6. Roles con Permisos Wildcard (*)" >> "$OUTPUT_FILE"
echo "Roles/ClusterRoles que otorgan acceso a '*' recursos o verbos:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
WILDCARD_ROLES=$(kubectl get clusterroles -o json | jq -r '
  .items[] | select(.rules[]? | ((.resources[]? == "*") and (.verbs[]? == "*"))) 
  | "ClusterRole: \(.metadata.name)"')
echo "$WILDCARD_ROLES" >> "$OUTPUT_FILE"

WILDCARD_LOCAL_ROLES=$(kubectl get roles -A -o json | jq -r '
  .items[] | select(.rules[]? | ((.resources[]? == "*") and (.verbs[]? == "*"))) 
  | "Role: \(.metadata.namespace)/\(.metadata.name)"')
echo "$WILDCARD_LOCAL_ROLES" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Count lines in both variables
C1=$(echo "$WILDCARD_ROLES" | grep -v '^$' | wc -l | tr -d ' ')
C2=$(echo "$WILDCARD_LOCAL_ROLES" | grep -v '^$' | wc -l | tr -d ' ')
COUNT_WILDCARD=$((C1 + C2))
echo "COUNT_WILDCARD=$COUNT_WILDCARD" >> "$METRICS_FILE"
echo "" >> "$OUTPUT_FILE"

# Append to Violations Log
if [ "$COUNT_WILDCARD" -gt 0 ]; then
  echo "### 6. Roles with Wildcard Permissions" >> "$VIOLATIONS_FILE"
  echo "$WILDCARD_ROLES" | sed 's/^/- /' >> "$VIOLATIONS_FILE"
  echo "$WILDCARD_LOCAL_ROLES" | sed 's/^/- /' >> "$VIOLATIONS_FILE"
  echo "" >> "$VIOLATIONS_FILE"
fi

echo "## 7. Namespaces sin NetworkPolicies" >> "$OUTPUT_FILE"
echo "Namespaces donde el tráfico está abierto por defecto (Sin aislamiento):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Loop through all namespaces and count NetworkPolicies
COUNT_NS_TOTAL=0
COUNT_NS_NOPOL=0
NOPOL_LIST=""
for ns in $(kubectl get ns -o jsonpath='{.items[*].metadata.name}'); do
  COUNT_NS_TOTAL=$((COUNT_NS_TOTAL + 1))
  count=$(kubectl get netpol -n "$ns" --no-headers 2>/dev/null | wc -l)
  if [ "$count" -eq "0" ]; then
    echo "$ns (0 Policies)" >> "$OUTPUT_FILE"
    NOPOL_LIST+="$ns (0 Policies)"$'\n'
    COUNT_NS_NOPOL=$((COUNT_NS_NOPOL + 1))
  fi
done
echo '```' >> "$OUTPUT_FILE"
echo "COUNT_NS_TOTAL=$COUNT_NS_TOTAL" >> "$METRICS_FILE"
echo "COUNT_NS_NOPOL=$COUNT_NS_NOPOL" >> "$METRICS_FILE"

# Append to Violations Log
if [ "$COUNT_NS_NOPOL" -gt 0 ]; then
  echo "### 7. Namespaces without NetworkPolicies" >> "$VIOLATIONS_FILE"
  echo "$NOPOL_LIST" | sed 's/^/- /' >> "$VIOLATIONS_FILE"
  echo "" >> "$VIOLATIONS_FILE"
fi

echo "Audit RBAC/Net completed. Report updated in $OUTPUT_FILE"
