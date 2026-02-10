#!/bin/bash
set -e

NAMESPACE=$1
SERVICE_NAME=$2
EXPECTED_IP=$3

echo "=== Starting Kubernetes Deployment Verification for Namespace: $NAMESPACE ==="

# 1. Check Pods Status
echo "--> Checking Pods status..."
PODS_NOT_READY=$(kubectl get pods -n "$NAMESPACE" --no-headers | awk '$3 != "Running" && $3 != "Completed" {print $1, $3}')

if [ ! -z "$PODS_NOT_READY" ]; then
  echo "ERROR: The following pods are not ready:"
  echo "$PODS_NOT_READY"
  # Optional: Describe problematic pods
  for pod in $(echo "$PODS_NOT_READY" | awk '{print $1}'); do
      echo "--- Description for $pod ---"
      kubectl describe pod "$pod" -n "$NAMESPACE" | tail -n 20
      
      echo "--- Logs for $pod (Current) ---"
      kubectl logs "$pod" -n "$NAMESPACE" --all-containers --tail=50 --prefix=true || echo "Failed to fetch current logs"
      
      echo "--- Logs for $pod (Previous) ---"
      kubectl logs "$pod" -n "$NAMESPACE" --all-containers --tail=50 --prefix=true -p || echo "Failed to fetch previous logs"
  done
  exit 1
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
  # We might not want to fail hard here if it's just starting up, but usually rollout status covers that.
  # Let's fail if strictly required, but for now just warn unless we want strict mode.
  # In this context, user wants "listo y ok", so let's be strict.
  echo "ERROR: No endpoints found for service $SERVICE_NAME."
  exit 1
else
  echo "✅ Endpoints found: $ENDPOINTS"
fi

echo "=== Verification Successful ==="
exit 0
