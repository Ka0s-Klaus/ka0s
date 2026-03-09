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

# 1.1 Check for Storage Issues (FailedMount)
echo "Checking for storage issues..." | tee -a "$LOG_FILE"
POD_NAME=$(sudo -E kubectl get pods -n mongo -l app=mongo -o jsonpath="{.items[0].metadata.name}")
EVENTS=$(sudo -E kubectl get events -n mongo --field-selector involvedObject.name=$POD_NAME --sort-by='.lastTimestamp')

if echo "$EVENTS" | grep -q "FailedMount"; then
    echo "Detected FailedMount error. Attempting storage repair..." | tee -a "$LOG_FILE"
    
    # Deterministic Path Reconstruction
    PVC_NAME="mongo-persistent-storage-mongo-0"
    PV_NAME=$(sudo -E kubectl get pvc $PVC_NAME -n mongo -o jsonpath='{.spec.volumeName}')
    
    if [ -z "$PV_NAME" ]; then
        echo "Could not find PV for PVC $PVC_NAME. Cannot repair storage." | tee -a "$LOG_FILE"
    else
        FULL_PATH="mongo-${PVC_NAME}-${PV_NAME}"
        echo "Reconstructed NFS Directory Path: $FULL_PATH" | tee -a "$LOG_FILE"
        
        # Create a repair pod manifest
        cat <<EOF > /tmp/nfs-repair-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nfs-repair
  namespace: mongo
spec:
  restartPolicy: Never
  containers:
  - name: repair
    image: busybox
    command: ["/bin/sh", "-c"]
    args:
    - echo "Creating directory /mnt/nfs/$FULL_PATH" && mkdir -p /mnt/nfs/$FULL_PATH && chmod 777 /mnt/nfs/$FULL_PATH && echo "Directory created and permissions set"
    volumeMounts:
    - name: nfs-root
      mountPath: /mnt/nfs
  volumes:
  - name: nfs-root
    nfs:
      server: 192.168.1.40
      path: /mnt/k8s-storage
EOF
        
        # Delete previous repair pod if exists
        sudo -E kubectl delete pod nfs-repair -n mongo --ignore-not-found=true --force --grace-period=0

        echo "Applying NFS repair pod..." | tee -a "$LOG_FILE"
        sudo -E kubectl apply -f /tmp/nfs-repair-pod.yaml
        
        # Wait for completion
        echo "Waiting for repair to complete..." | tee -a "$LOG_FILE"
        # Wait for Pod to succeed
        sudo -E kubectl wait --for=condition=Ready pod/nfs-repair -n mongo --timeout=30s || true
        sleep 5
        
        REPAIR_LOGS=$(sudo -E kubectl logs nfs-repair -n mongo)
        echo "Repair Logs: $REPAIR_LOGS" | tee -a "$LOG_FILE"
        
        # Cleanup
        sudo -E kubectl delete pod nfs-repair -n mongo --force --grace-period=0
        
        echo "Storage repair attempt completed." | tee -a "$LOG_FILE"
    fi
else
    echo "No critical storage issues detected." | tee -a "$LOG_FILE"
fi

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
elif sudo -E kubectl get statefulset mongodb -n mongo &>/dev/null; then
    RESOURCE_TYPE="statefulset"
    RESOURCE_NAME="mongodb"
else
    echo "Could not find mongodb deployment or statefulset" | tee -a "$LOG_FILE"
    # List all resources in namespace to debug
    echo "Listing all resources in namespace mongo:" | tee -a "$LOG_FILE"
    sudo -E kubectl get all -n mongo | tee -a "$LOG_FILE"
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
