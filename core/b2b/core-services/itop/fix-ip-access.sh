#!/bin/bash
# Fix iTop access by updating app_root_url to the Service LoadBalancer IP

NAMESPACE="itop"
echo "Detecting iTop Pod..."
POD=$(kubectl get pod -n $NAMESPACE -l app=itop -o jsonpath="{.items[0].metadata.name}")
echo "Pod: $POD"

echo "Detecting Service IP..."
LB_IP=$(kubectl get svc -n $NAMESPACE itop -o jsonpath="{.status.loadBalancer.ingress[0].ip}")
echo "IP: $LB_IP"

if [ -z "$LB_IP" ]; then
    echo "Error: Could not get LoadBalancer IP. Is the service type LoadBalancer and IP assigned?"
    exit 1
fi

CONFIG_FILE="/var/www/html/conf/production/config-itop.php"

echo "Updating configuration in pod..."
# Check if config exists
kubectl exec -n $NAMESPACE $POD -- ls $CONFIG_FILE > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Error: Config file not found at $CONFIG_FILE"
    echo "iTop might not be fully installed yet. If this is a fresh install, open the URL in browser to start setup."
    exit 1
fi

# Backup
kubectl exec -n $NAMESPACE $POD -- cp $CONFIG_FILE ${CONFIG_FILE}.bak

# Update URL
# We use simple http://IP/ because LoadBalancer usually exposes port 80 mapped to 80
NEW_URL="http://$LB_IP/"
kubectl exec -n $NAMESPACE $POD -- sed -i "s|'app_root_url' => .*|'app_root_url' => '$NEW_URL',|" $CONFIG_FILE

echo "Configuration updated successfully!"
echo "Try accessing: $NEW_URL"
