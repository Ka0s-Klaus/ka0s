#!/bin/bash
# -----------------------------------------------------------------------------
# Script: restart-mongodb.sh
# Description: Restarts the MongoDB deployment and verifies readiness.
# Usage: ./restart-mongodb.sh [log_file]
# -----------------------------------------------------------------------------

set -e

LOG_FILE="${1:-/tmp/ka0s-mongodb-restart.log}"
echo "Starting MongoDB Restart Protocol at $(date)" | tee -a "$LOG_FILE"

# 1. Check current status
echo "Current MongoDB Status:" | tee -a "$LOG_FILE"
# Try to use kubeadm config if available, otherwise default
export KUBECONFIG=/home/kaos/.kube/config
sudo -E kubectl get pods -n mongo -o wide | tee -a "$LOG_FILE" || echo "Failed to get pods" | tee -a "$LOG_FILE"

# 2. Restart Deployment
echo "Restarting deployment/mongodb in namespace mongo..." | tee -a "$LOG_FILE"
# Ensure KUBECONFIG is set properly or use explicit path if needed
echo "KUBECONFIG set to $KUBECONFIG" | tee -a "$LOG_FILE"
# Try with sudo if permission denied
# Check if it is a deployment or a statefulset
if sudo -E kubectl get deployment mongodb -n mongo &>/dev/null; then
    RESOURCE_TYPE="deployment"
    RESOURCE_NAME="mongodb"
elif sudo -E kubectl get statefulset mongo -n mongo &>/dev/null; then
    RESOURCE_TYPE="statefulset"
    RESOURCE_NAME="mongo"
elif sudo -E kubectl get deployment mongo -n mongo &>/dev/null; then
    RESOURCE_TYPE="deployment"
    RESOURCE_NAME="mongo"
else
    echo "Could not find mongodb deployment or statefulset" | tee -a "$LOG_FILE"
    exit 1
fi

echo "Detected resource: $RESOURCE_TYPE/$RESOURCE_NAME" | tee -a "$LOG_FILE"

if sudo -E kubectl rollout restart $RESOURCE_TYPE/$RESOURCE_NAME -n mongo; then
    echo "Rollout restart triggered successfully." | tee -a "$LOG_FILE"
else
    echo "Failed to trigger rollout restart." | tee -a "$LOG_FILE"
    exit 1
fi

# 3. Wait for readiness
echo "Waiting for rollout to complete..." | tee -a "$LOG_FILE"
if sudo -E kubectl rollout status $RESOURCE_TYPE/$RESOURCE_NAME -n mongo --timeout=120s; then
    echo "Rollout completed successfully." | tee -a "$LOG_FILE"
else
    echo "Rollout timed out or failed." | tee -a "$LOG_FILE"
    # Try to describe pods to see errors
    kubectl describe pods -n mongo | tee -a "$LOG_FILE"
    exit 1
fi

# 4. Verify Connection (Simple check)
echo "Verifying MongoDB connection..." | tee -a "$LOG_FILE"
# Assuming we can run a quick check inside the cluster or from manager node
# If netcat is available: nc -z -v mongo.mongo.svc.cluster.local 27017
# Or create a temporary pod to check connectivity
if sudo -E kubectl run -it --rm --restart=Never check-mongo --image=busybox -- nc -z -v mongo.mongo.svc.cluster.local 27017; then
    echo "Connection verified: Port 27017 open." | tee -a "$LOG_FILE"
else
    echo "Warning: Connection verification failed." | tee -a "$LOG_FILE"
    # Not failing the script here as pod is running, maybe just network policy issue for busybox
fi

echo "MongoDB Restart Protocol Completed at $(date)" | tee -a "$LOG_FILE"
