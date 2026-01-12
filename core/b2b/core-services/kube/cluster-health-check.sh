#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
TIMESTAMP=$(date '+%Y%m%d_%H%M%S')
OUTPUT_DIR="/tmp/cluster-health-check-${TIMESTAMP}"
START_TIME=$(date +%s)

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# --- Helper Functions ---
echo_green() {
    echo -e "${GREEN}$1${NC}"
}

echo_red() {
    echo -e "${RED}$1${NC}"
}

echo_yellow() {
    echo -e "${YELLOW}$1${NC}"
}

echo_blue() {
    echo -e "${BLUE}$1${NC}"
}

mkdir -p "$OUTPUT_DIR"

echo "Starting cluster health check at $(date)"
echo "Output directory: $OUTPUT_DIR"

# Function to execute kubectl command and save output to a file
execute_and_save() {
    local description="$1"
    local command="$2"
    local filename="$3"
    
    echo "Executing: $description"
    if eval "$command" > "$OUTPUT_DIR/$filename" 2> "$OUTPUT_DIR/$filename.err"; then
        echo_green "  ✓ Saved to $filename"
        if [[ -s "$OUTPUT_DIR/$filename.err" ]]; then
            echo_yellow "  ! Command produced warnings:"
            cat "$OUTPUT_DIR/$filename.err"
        fi
    else
        echo_red "  ✗ Error executing command. See $filename.err"
    fi
}

# Function to execute kubectl command and save structured JSON output
execute_structured_and_save() {
    local description="$1"
    local command="$2"
    local filename="$3"
    
    echo "Executing: $description"
    if output=$(eval "$command" 2> "$OUTPUT_DIR/$filename.err"); then
        echo "$output" | jq '.' > "$OUTPUT_DIR/$filename" 2>/dev/null
        if [[ $? -eq 0 ]]; then
            echo_green "  ✓ Saved to $filename"
        else
            echo "$output" > "$OUTPUT_DIR/$filename"
            echo_yellow "  ! Output is not valid JSON, saved as text."
        fi
        if [[ -s "$OUTPUT_DIR/$filename.err" ]]; then
            echo_yellow "  ! Command produced warnings:"
            cat "$OUTPUT_DIR/$filename.err"
        fi
    else
        echo_red "  ✗ Error executing command. See $filename.err"
    fi
}

# 1. Cluster Information
echo ""
echo_blue "=== CLUSTER INFORMATION ==="
execute_structured_and_save "Cluster Version" "kubectl version -o json" "cluster-version.json"

# 2. Node Status
echo ""
echo_blue "=== NODE STATUS ==="
execute_structured_and_save "Node List" "kubectl get nodes -o json" "nodes-list.json"
execute_and_save "Node Status Overview" "kubectl get nodes -o wide" "nodes-status.txt"

# 3. Detailed Node Information
echo ""
echo_blue "=== DETAILED NODE INFORMATION ==="
for node in $(kubectl get nodes -o jsonpath='{.items[*].metadata.name}'); do
    execute_structured_and_save "Node Details: $node" "kubectl get node $node -o json" "node-${node}-details.json"
    execute_and_save "Node Description: $node" "kubectl describe node $node" "node-${node}-description.txt"
done

# 4. Health Status of All Cluster Services
echo ""
echo_blue "=== CLUSTER SERVICES HEALTH ==="
execute_structured_and_save "All Pods Status" "kubectl get pods --all-namespaces -o json" "all-pods.json"
execute_and_save "Pods Status Overview" "kubectl get pods --all-namespaces -o wide" "pods-overview.txt"
execute_structured_and_save "Services Status" "kubectl get services --all-namespaces -o json" "services.json"
execute_structured_and_save "Deployments Status" "kubectl get deployments --all-namespaces -o json" "deployments.json"
execute_structured_and_save "DaemonSets Status" "kubectl get daemonsets --all-namespaces -o json" "daemonsets.json"
execute_structured_and_save "StatefulSets Status" "kubectl get statefulsets --all-namespaces -o json" "statefulsets.json"

# 5. System Events Audit (Last 24 hours)
echo ""
echo_blue "=== SYSTEM EVENTS AUDIT (Last 24 hours) ==="
execute_structured_and_save "All Events (24h)" "kubectl get events --all-namespaces --sort-by='.lastTimestamp' -o json" "events-24h.json"
execute_and_save "Warning Events (24h)" "kubectl get events --all-namespaces --field-selector type=Warning --sort-by='.lastTimestamp'" "warning-events-24h.txt"

# 6. Additional Health Checks
echo ""
echo_blue "=== ADDITIONAL HEALTH CHECKS ==="
execute_structured_and_save "Kube System Pods" "kubectl get pods -n kube-system -o json" "kube-system-pods.json"
execute_structured_and_save "Namespaces" "kubectl get namespaces -o json" "namespaces.json"
execute_structured_and_save "Persistent Volumes" "kubectl get pv -o json" "persistent-volumes.json"
execute_structured_and_save "Persistent Volume Claims" "kubectl get pvc --all-namespaces -o json" "persistent-volume-claims.json"

# 7. Network and Security
echo ""
echo_blue "=== NETWORK AND SECURITY ==="
execute_structured_and_save "Network Policies" "kubectl get networkpolicies --all-namespaces -o json" "network-policies.json"
execute_structured_and_save "Service Accounts" "kubectl get serviceaccounts --all-namespaces -o json" "service-accounts.json"
execute_structured_and_save "Roles" "kubectl get roles --all-namespaces -o json" "roles.json"
execute_structured_and_save "Cluster Roles" "kubectl get clusterroles -o json" "cluster-roles.json"

# Create summary report
echo ""
echo_blue "=== CREATING SUMMARY REPORT ==="
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

# Calculate summary from existing files for efficiency
TOTAL_NODES=$(jq '.items | length' "$OUTPUT_DIR/nodes-list.json")
READY_NODES=$(jq '[.items[] | .status.conditions[] | select(.type=="Ready" and .status=="True")] | length' "$OUTPUT_DIR/nodes-list.json")
TOTAL_PODS=$(jq '.items | length' "$OUTPUT_DIR/all-pods.json")
RUNNING_PODS=$(jq '[.items[] | select(.status.phase=="Running")] | length' "$OUTPUT_DIR/all-pods.json")
TOTAL_NAMESPACES=$(jq '.items | length' "$OUTPUT_DIR/namespaces.json")

cat > "$OUTPUT_DIR/summary-report.json" <<EOF
{
  "timestamp": "$(date -Iseconds)",
  "check_duration_seconds": $DURATION,
  "output_directory": "$OUTPUT_DIR",
  "files_generated": [
    $(ls -1 "$OUTPUT_DIR"/*.json "$OUTPUT_DIR"/*.txt 2>/dev/null | jq -R -s -c 'split("\n") | map(select(length > 0))')
  ],
  "cluster_overview": {
    "total_nodes": $TOTAL_NODES,
    "ready_nodes": $READY_NODES,
    "total_namespaces": $TOTAL_NAMESPACES,
    "total_pods": $TOTAL_PODS,
    "running_pods": $RUNNING_PODS
  }
}
EOF

echo_green "  ✓ Summary report created"

# Create a compressed archive
echo ""
echo_blue "=== CREATING ARCHIVE ==="
cd /tmp
tar -czf "cluster-health-check-${TIMESTAMP}.tar.gz" "cluster-health-check-${TIMESTAMP}"
echo "Archive created: /tmp/cluster-health-check-${TIMESTAMP}.tar.gz"
echo "Original directory: $OUTPUT_DIR"

echo ""
echo_blue "=== CLUSTER HEALTH CHECK COMPLETED ==="
echo "All results have been saved to:"
echo "  - Directory: $OUTPUT_DIR"
echo "  - Archive: /tmp/cluster-health-check-${TIMESTAMP}.tar.gz"
echo ""
echo "Summary:"
echo "  - Total nodes: $TOTAL_NODES"
echo "  - Ready nodes: $READY_NODES"
echo "  - Total pods: $TOTAL_PODS"
echo "  - Running pods: $RUNNING_PODS"

if [[ $READY_NODES -lt $TOTAL_NODES ]]; then
    echo_yellow "  ! Warning: Not all nodes are ready."
fi

if [[ $RUNNING_PODS -lt $TOTAL_PODS ]]; then
    echo_yellow "  ! Warning: Not all pods are running."
fi

echo ""
echo_green "Check completed at $(date)"