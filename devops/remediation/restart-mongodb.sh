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

# 1.1 Force Clean Reprovisioning (Option A)
echo "EXECUTING OPTION A: Clean Reprovisioning due to missing NFS storage." | tee -a "$LOG_FILE"
echo "Deleting PVC mongo-persistent-storage-mongo-0..." | tee -a "$LOG_FILE"
sudo -E kubectl delete pvc mongo-persistent-storage-mongo-0 -n mongo --wait=false --ignore-not-found=true

echo "Deleting Pod mongo-0 to trigger recreation..." | tee -a "$LOG_FILE"
sudo -E kubectl delete pod mongo-0 -n mongo --force --grace-period=0 --ignore-not-found=true

echo "Waiting for StatefulSet to recreate resources..." | tee -a "$LOG_FILE"
# Wait for PVC to be bound (might take a moment for pod to start and request it)
sleep 10

# 2. Monitor Rollout
echo "Waiting for rollout to complete..." | tee -a "$LOG_FILE"
if sudo -E kubectl rollout status statefulset/mongo -n mongo --timeout=300s; then
    echo "Rollout completed successfully." | tee -a "$LOG_FILE"
else
    echo "Rollout timed out." | tee -a "$LOG_FILE"
    # Proceed to audit anyway to see why
fi

# 3. Detailed Audit (As requested)
echo "========================================================" | tee -a "$LOG_FILE"
echo "             DETAILED MONGODB SERVICE AUDIT             " | tee -a "$LOG_FILE"
echo "========================================================" | tee -a "$LOG_FILE"

echo "1. Resource Status:" | tee -a "$LOG_FILE"
sudo -E kubectl get all -n mongo -o wide | tee -a "$LOG_FILE"

echo -e "\n2. PVC Status:" | tee -a "$LOG_FILE"
sudo -E kubectl get pvc -n mongo -o wide | tee -a "$LOG_FILE"
sudo -E kubectl describe pvc mongo-persistent-storage-mongo-0 -n mongo | tee -a "$LOG_FILE"

echo -e "\n3. Pod Description (mongo-0):" | tee -a "$LOG_FILE"
sudo -E kubectl describe pod mongo-0 -n mongo | tee -a "$LOG_FILE"

echo -e "\n4. Recent Events:" | tee -a "$LOG_FILE"
sudo -E kubectl get events -n mongo --sort-by='.lastTimestamp' | tail -n 20 | tee -a "$LOG_FILE"

echo -e "\n5. Pod Logs (Tail 50):" | tee -a "$LOG_FILE"
sudo -E kubectl logs mongo-0 -n mongo --tail=50 | tee -a "$LOG_FILE"

echo -e "\n6. Connectivity Verification:" | tee -a "$LOG_FILE"
if sudo -E kubectl run -it --rm --restart=Never check-mongo-audit --image=busybox -- nc -z -v mongo.mongo.svc.cluster.local 27017; then
    echo "SUCCESS: MongoDB is reachable on port 27017." | tee -a "$LOG_FILE"
else
    echo "FAILURE: MongoDB is NOT reachable." | tee -a "$LOG_FILE"
fi

echo "========================================================" | tee -a "$LOG_FILE"
echo "Audit Completed." | tee -a "$LOG_FILE"

exit 0 # Always exit 0 to allow logs to be uploaded even if audit finds issues

# Legacy code commented out
# if sudo -E kubectl get deployment mongodb -n mongo &>/dev/null; then ...
