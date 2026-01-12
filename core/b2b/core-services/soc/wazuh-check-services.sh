#!/bin/bash

# Script to check the status of Wazuh services in Kubernetes

NAMESPACE="wazuh"

echo "### Checking Wazuh Pods ###"
kubectl get pods -n $NAMESPACE -o wide

echo -e "\n### Checking Wazuh Services ###"
kubectl get services -n $NAMESPACE

echo -e "\n### Checking Wazuh StatefulSets ###"
kubectl get statefulsets -n $NAMESPACE

echo -e "\n### Checking Wazuh Deployments ###"
kubectl get deployments -n $NAMESPACE

echo -e "\n### Checking Wazuh DaemonSets ###"
kubectl get daemonsets -n $NAMESPACE

echo -e "\n### Checking for errors in wazuh-indexer logs ###"
INDEXER_POD=$(kubectl get pods -n $NAMESPACE -l app=wazuh-indexer -o jsonpath='{.items[0].metadata.name}')
if [ -n "$INDEXER_POD" ]; then
    echo "Checking logs for pod: $INDEXER_POD"
    kubectl logs $INDEXER_POD -n $NAMESPACE | grep -i "error"
else
    echo "Wazuh Indexer pod not found."
fi

echo -e "\n### Checking for errors in wazuh-dashboard logs ###"
DASHBOARD_POD=$(kubectl get pods -n $NAMESPACE -l app=wazuh-dashboard -o jsonpath='{.items[0].metadata.name}')
if [ -n "$DASHBOARD_POD" ]; then
    echo "Checking logs for pod: $DASHBOARD_POD"
    kubectl logs $DASHBOARD_POD -n $NAMESPACE | grep -i "error"
else
    echo "Wazuh Dashboard pod not found."
fi

echo -e "\n### Check complete ###"