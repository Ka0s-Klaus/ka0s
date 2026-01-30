#!/bin/bash

# Configuration
RESULTS_DIR="${1:-/tmp/results}"
SUDO_PASS="${2}"       # Password for sudo
WORKER_SSH_PASS="${3}" # Password for SSH connection to workers (node-30/40)

# Create results directory
mkdir -p "$RESULTS_DIR"
LOG_FILE="${RESULTS_DIR}/system_update_$(date +%Y%m%d_%H%M%S).log"
touch "$LOG_FILE"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to run remote command with error handling
run_remote_update() {
    local node=$1
    local cmd=$2
    local type=$3 # key or password
    
    log "------------------------------------------------"
    log "Starting update on $node..."
    
    if [ "$type" == "key" ]; then
        # Node 20 uses specific key and port 6666
        if ssh -i .ssh/k8-node-20 -p 6666 -o StrictHostKeyChecking=no -o ConnectTimeout=10 kaos@"$node" "$cmd" 2>&1 | tee -a "$LOG_FILE"; then
            log "SUCCESS: $node updated."
        else
            log "ERROR: Failed to update $node."
        fi
    elif [ "$type" == "password" ]; then
        # Nodes 30/40 use sshpass and default port (22)
        if sshpass -p "$WORKER_SSH_PASS" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 kaos@"$node" "$cmd" 2>&1 | tee -a "$LOG_FILE"; then
            log "SUCCESS: $node updated."
        else
            log "ERROR: Failed to update $node."
        fi
    fi
}

log "=== STARTING CLUSTER SYSTEM UPDATE ==="

# 0. Prerequisites
# Install sshpass if not present (needed for nodes 30/40)
if ! command -v sshpass &> /dev/null; then
    log "Installing sshpass..."
    echo "$SUDO_PASS" | sudo -S apt-get install -y sshpass 2>> "$LOG_FILE"
fi

# Command to execute on all nodes
UPDATE_CMD="echo '$SUDO_PASS' | sudo -S sh -c 'apt update && apt upgrade -y'"

# 1. Update Localhost (k8-manager)
log "--- Updating k8-manager (Local) ---"
if echo "$SUDO_PASS" | sudo -S sh -c 'apt update && apt upgrade -y' 2>&1 | tee -a "$LOG_FILE"; then
    log "SUCCESS: k8-manager updated."
else
    log "ERROR: Failed to update k8-manager."
fi

# 2. Update k8-node-20 (Key based, Port 6666)
# Assumes ~/.ssh/k8-node-20 exists on the manager as per user description
run_remote_update "192.168.1.20" "$UPDATE_CMD" "key"

# 3. Update k8-node-30 (Password based)
run_remote_update "192.168.1.30" "$UPDATE_CMD" "password"

# 4. Update k8-node-40 (Password based)
run_remote_update "192.168.1.40" "$UPDATE_CMD" "password"

log "=== CLUSTER SYSTEM UPDATE COMPLETED ==="
log "Log saved to: $LOG_FILE"
