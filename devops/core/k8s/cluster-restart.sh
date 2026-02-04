#!/bin/bash
# =================================================================================================
# [Ka0S] Cluster Safe Rolling Restart
# =================================================================================================
# Realiza un reinicio secuencial y controlado de todos los nodos del cluster Kubernetes.
# Estrategia: Drain -> Reboot -> Wait for Ready -> Uncordon -> Next Node.
# =================================================================================================

RESULTS_DIR="${1:-/tmp/results}"
SUDO_PASS="${2}"
WORKER_SSH_PASS="${3}"

mkdir -p "$RESULTS_DIR"
LOG_FILE="${RESULTS_DIR}/cluster_restart_$(date +%Y%m%d_%H%M%S).log"
touch "$LOG_FILE"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# -------------------------------------------------------------------------------------------------
# Helper Functions
# -------------------------------------------------------------------------------------------------

drain_node() {
    local node=$1
    log "🧹 Draining node: $node..."
    if kubectl drain "$node" --ignore-daemonsets --delete-emptydir-data --force --timeout=300s >> "$LOG_FILE" 2>&1; then
        log "✅ Node $node drained successfully."
    else
        log "⚠️ Warning: Drain on $node had issues. Proceeding with caution."
    fi
}

uncordon_node() {
    local node=$1
    log "🔓 Uncordoning node: $node..."
    kubectl uncordon "$node" >> "$LOG_FILE" 2>&1
}

wait_for_node_ready() {
    local node=$1
    log "⏳ Waiting for node $node to be Ready..."
    local max_retries=60 # 60 * 5s = 5 minutes
    local count=0
    
    while [ $count -lt $max_retries ]; do
        status=$(kubectl get node "$node" -o jsonpath='{.status.conditions[?(@.type=="Ready")].status}' 2>/dev/null)
        if [ "$status" == "True" ]; then
            log "✅ Node $node is Ready."
            return 0
        fi
        echo -n "." >> "$LOG_FILE"
        sleep 5
        count=$((count+1))
    done
    
    log "❌ Timeout waiting for node $node to become Ready."
    return 1
}

reboot_remote_worker() {
    local ip=$1
    local node_name=$2
    local type=$3 # key or password
    
    log "🔄 Rebooting worker $node_name ($ip)..."
    
    local cmd="echo '$SUDO_PASS' | sudo -S reboot"
    
    if [ "$type" == "key" ]; then
        # Node 20: Key, Port 6666
        ssh -i .ssh/k8-node-20 -p 6666 -o StrictHostKeyChecking=no -o ConnectTimeout=10 kaos@"$ip" "$cmd" >> "$LOG_FILE" 2>&1 || true
    elif [ "$type" == "password" ]; then
        # Node 30/40: Pass, Port 22
        sshpass -p "$WORKER_SSH_PASS" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 kaos@"$ip" "$cmd" >> "$LOG_FILE" 2>&1 || true
    fi
    
    # Wait a bit for the reboot to actually start and connection to drop
    sleep 10
}

# -------------------------------------------------------------------------------------------------
# Main Execution Flow
# -------------------------------------------------------------------------------------------------

log "=== STARTING CLUSTER ROLLING RESTART ==="

# Check kubectl access
if ! kubectl get nodes > /dev/null 2>&1; then
    log "❌ Error: kubectl not accessible. Are you running this on the Control Plane?"
    exit 1
fi

# --- Worker Nodes ---

# Node 20
NODE="k8-node-20"
IP="192.168.1.20"
log "--- Processing $NODE ---"
drain_node "$NODE"
reboot_remote_worker "$IP" "$NODE" "key"
wait_for_node_ready "$NODE"
uncordon_node "$NODE"

# Node 30
NODE="k8-node-30"
IP="192.168.1.30"
log "--- Processing $NODE ---"
drain_node "$NODE"
reboot_remote_worker "$IP" "$NODE" "password"
wait_for_node_ready "$NODE"
uncordon_node "$NODE"

# Node 40
NODE="k8-node-40"
IP="192.168.1.40"
log "--- Processing $NODE ---"
drain_node "$NODE"
reboot_remote_worker "$IP" "$NODE" "password"
wait_for_node_ready "$NODE"
uncordon_node "$NODE"

# --- Control Plane (Manager) ---

NODE="k8-manager"
log "--- Processing $NODE (Control Plane) ---"
# We do NOT drain the control plane completely if it's the only one, 
# but we should try to evict workloads if possible. 
# However, draining the node where we are running the script is risky.
# For safety in this environment, we will schedule a reboot.

log "Scheduling reboot for $NODE in 1 minute..."
echo "$SUDO_PASS" | sudo -S shutdown -r +1 >> "$LOG_FILE" 2>&1

log "✅ Rolling restart sequence completed. Manager will reboot in 1 minute."
log "⚠️ Connection will be lost soon."
