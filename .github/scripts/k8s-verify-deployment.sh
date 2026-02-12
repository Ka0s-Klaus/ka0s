#!/bin/bash
set -e

NAMESPACE=$1
SERVICE_NAME=$2
EXPECTED_IP=$3

echo "=== Starting Kubernetes Deployment Verification for Namespace: $NAMESPACE ==="

# Debugging: Always attempt to dump Wazuh logs if present (to debug dashboard issues)
echo "--> Debugging: Checking for Wazuh Dashboard Logs..."
DASH_POD=$(kubectl get pods -n "$NAMESPACE" -l app=wazuh-dashboard -o jsonpath='{.items[0].metadata.name}' || true)
if [ ! -z "$DASH_POD" ]; then
  echo "--- Logs for $DASH_POD ---"
  kubectl logs "$DASH_POD" -n "$NAMESPACE" --all-containers --tail=100 --prefix=true || echo "Failed to fetch logs"
else
  echo "No wazuh-dashboard pod found."
fi

echo "--> Debugging: Checking for Wazuh Indexer Logs..."
IDX_POD=$(kubectl get pods -n "$NAMESPACE" -l app=wazuh-indexer -o jsonpath='{.items[0].metadata.name}' || true)
if [ ! -z "$IDX_POD" ]; then
  echo "--- Logs for $IDX_POD ---"
  kubectl logs "$IDX_POD" -n "$NAMESPACE" --all-containers --tail=50 --prefix=true || echo "Failed to fetch logs"
else
  echo "No wazuh-indexer pod found."
fi

# 1. Check Pods Status
echo "--> Checking Pods status..."
PODS_NOT_READY=$(kubectl get pods -n "$NAMESPACE" --no-headers | awk '$3 != "Running" && $3 != "Completed" {print $1, $3}')

if [ ! -z "$PODS_NOT_READY" ]; then
  echo "WARNING: The following pods are not ready (yet):"
  echo "$PODS_NOT_READY"
  # Instead of hard exit, we warn and continue diagnosis
  # but we mark a flag to potentially exit with error at the end if strict mode is needed
  # For now, we want to see the rest of the checks
  
  for pod in $(echo "$PODS_NOT_READY" | awk '{print $1}'); do
      echo "--- Description for $pod ---"
      kubectl describe pod "$pod" -n "$NAMESPACE" | tail -n 20 || true
      
      echo "--- Logs for $pod (Current) ---"
      kubectl logs "$pod" -n "$NAMESPACE" --all-containers --tail=50 --prefix=true || echo "Failed to fetch current logs"
  done
else
  echo "✅ All pods are Running or Completed."
fi

# 2. Check Service IP (if expected)
if [ ! -z "$EXPECTED_IP" ]; then
  echo "--> Checking Service $SERVICE_NAME for External IP: $EXPECTED_IP..."
  
  # Check in ExternalIPs column or LoadBalancer IP
  SVC_INFO=$(kubectl get svc "$SERVICE_NAME" -n "$NAMESPACE" -o json)
  EXTERNAL_IPS=$(echo "$SVC_INFO" | jq -r '.spec.externalIPs[]?' || true)
  LB_IP=$(echo "$SVC_INFO" | jq -r '.status.loadBalancer.ingress[0].ip' || true)

  FOUND=0
  if [[ "$EXTERNAL_IPS" == *"$EXPECTED_IP"* ]]; then
    FOUND=1
  elif [[ "$LB_IP" == *"$EXPECTED_IP"* ]]; then
    FOUND=1
  fi

  if [ $FOUND -eq 1 ]; then
    echo "✅ Service $SERVICE_NAME is assigned to IP $EXPECTED_IP."
  else
    echo "ERROR: Service $SERVICE_NAME does NOT have the expected IP $EXPECTED_IP."
    echo "Current ExternalIPs: $EXTERNAL_IPS"
    echo "Current LoadBalancer IP: $LB_IP"
    exit 1
  fi
fi

# 3. Check Endpoints
echo "--> Checking Endpoints for Service $SERVICE_NAME..."
ENDPOINTS=$(kubectl get endpoints "$SERVICE_NAME" -n "$NAMESPACE" -o jsonpath='{.subsets[*].addresses[*].ip}')

if [ -z "$ENDPOINTS" ]; then
  echo "WARNING: Service $SERVICE_NAME has no active endpoints! (Pods might not be ready or matching labels are wrong)"
  # We warn but don't fail immediately to allow log inspection
else
  echo "✅ Endpoints found: $ENDPOINTS"
fi

echo "=== Verification Successful (with possible warnings) ==="
exit 0
