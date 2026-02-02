#!/bin/bash

# Security Audit Script for Kubernetes RBAC & Networking
# Checks for: ClusterAdmin ServiceAccounts, Risky Roles, Missing NetworkPolicies.

OUTPUT_FILE="${1:-k8s-security-audit.md}"

echo "" >> "$OUTPUT_FILE"
echo "# Parte 2: Auditoría RBAC y Redes" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 5. ServiceAccounts con 'cluster-admin'" >> "$OUTPUT_FILE"
echo "Cuentas de servicio con control total del clúster (Potencial riesgo alto):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Find ClusterRoleBindings that reference 'cluster-admin' role and have subjects of kind ServiceAccount
kubectl get clusterrolebindings -o json | jq -r '
  .items[] 
  | select(.roleRef.name == "cluster-admin") 
  | .subjects[]? 
  | select(.kind == "ServiceAccount") 
  | "\(.namespace) / \(.name)"' | sort | uniq >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 6. Roles con Permisos Wildcard (*)" >> "$OUTPUT_FILE"
echo "Roles/ClusterRoles que otorgan acceso a '*' recursos o verbos:" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
kubectl get clusterroles -o json | jq -r '
  .items[] | select(.rules[]? | ((.resources[]? == "*") and (.verbs[]? == "*"))) 
  | "ClusterRole: \(.metadata.name)"' >> "$OUTPUT_FILE"

kubectl get roles -A -o json | jq -r '
  .items[] | select(.rules[]? | ((.resources[]? == "*") and (.verbs[]? == "*"))) 
  | "Role: \(.metadata.namespace) / \(.metadata.name)"' >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## 7. Namespaces sin NetworkPolicies" >> "$OUTPUT_FILE"
echo "Namespaces donde el tráfico está abierto por defecto (Sin aislamiento):" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
# Loop through all namespaces and count NetworkPolicies
for ns in $(kubectl get ns -o jsonpath='{.items[*].metadata.name}'); do
  count=$(kubectl get netpol -n "$ns" --no-headers 2>/dev/null | wc -l)
  if [ "$count" -eq "0" ]; then
    echo "$ns (0 Policies)" >> "$OUTPUT_FILE"
  fi
done
echo '```' >> "$OUTPUT_FILE"

echo "Audit RBAC/Net completed. Report updated in $OUTPUT_FILE"
