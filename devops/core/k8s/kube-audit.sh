#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# The first argument is the directory where results will be stored. Default to /tmp/results.
RESULTS_DIR=${1:-/tmp/results}

echo "[INFO] Using results directory: $RESULTS_DIR"

# Clean and create the results directory on the remote host
echo "[INFO] Cleaning up and creating results directory..."
rm -rf "$RESULTS_DIR"
mkdir -p "$RESULTS_DIR"

# --- Cluster-wide resources ---
# These resources are not namespaced.
CLUSTER_RESOURCES=("nodes" "namespaces" "persistentvolumes" "storageclasses" "clusterroles" "clusterrolebindings")

echo "[INFO] Auditing cluster-wide resources..."
for resource in "${CLUSTER_RESOURCES[@]}"; do
  echo "[INFO] Getting ${resource}..."
  kubectl get "${resource}" -o json > "${RESULTS_DIR}/cluster_${resource}.json"
done

# --- Namespaced resources ---
echo "[INFO] Discovering namespaces..."
# Get all namespace names
NAMESPACES=$(kubectl get namespaces -o jsonpath='{.items[*].metadata.name}')

if [ -z "$NAMESPACES" ]; then
  echo "[WARN] No namespaces found."
  exit 0
fi

echo "[INFO] Found namespaces: $NAMESPACES"

# Resources to check within each namespace
NAMESPACED_RESOURCES=("pods" "services" "deployments" "statefulsets" "daemonsets" "ingresses" "configmaps" "secrets" "networkpolicies" "roles" "rolebindings" "serviceaccounts")

for ns in $NAMESPACES; do
  echo "--- Auditing namespace: ${ns} ---"
  NS_DIR="${RESULTS_DIR}/${ns}"
  mkdir -p "$NS_DIR"
  
  for resource in "${NAMESPACED_RESOURCES[@]}"; do
    echo "[INFO] Getting ${resource} in namespace ${ns}..."
    # Use --ignore-not-found to avoid errors if a resource type doesn't exist in a namespace.
    # The output is redirected to a file. If a resource is not found, the file will be empty.
    kubectl get "${resource}" -n "${ns}" -o json --ignore-not-found > "${NS_DIR}/${resource}.json"
  done
done

echo "[SUCCESS] Kubernetes audit script finished."
echo "[INFO] Results are in $RESULTS_DIR. Content:"
ls -lR "$RESULTS_DIR"