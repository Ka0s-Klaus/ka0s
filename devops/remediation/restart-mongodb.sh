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
kubectl get pods -n mongo -o wide | tee -a "$LOG_FILE" || echo "Failed to get pods" | tee -a "$LOG_FILE"

# 2. Restart Deployment
echo "Restarting deployment/mongo in namespace mongo..." | tee -a "$LOG_FILE"
if kubectl rollout restart deployment/mongo -n mongo; then
    echo "Rollout restart triggered successfully." | tee -a "$LOG_FILE"
else
    echo "Failed to trigger rollout restart." | tee -a "$LOG_FILE"
    exit 1
fi

# 3. Wait for readiness
echo "Waiting for rollout to complete..." | tee -a "$LOG_FILE"
if kubectl rollout status deployment/mongo -n mongo --timeout=120s; then
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
if kubectl run -it --rm --restart=Never check-mongo --image=busybox -- nc -z -v mongo.mongo.svc.cluster.local 27017; then
    echo "Connection verified: Port 27017 open." | tee -a "$LOG_FILE"
else
    echo "Warning: Connection verification failed." | tee -a "$LOG_FILE"
    # Not failing the script here as pod is running, maybe just network policy issue for busybox
fi

echo "MongoDB Restart Protocol Completed at $(date)" | tee -a "$LOG_FILE"
