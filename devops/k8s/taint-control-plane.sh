#!/bin/bash
set -e

# Script: taint-control-plane.sh
# Descripción: Aplica Taint al nodo Control Plane para evitar workloads generales.
# Uso: ./taint-control-plane.sh [node_name]

NODE_NAME="${1:-k8-manager}"

echo "Applying Taint to node: $NODE_NAME"

# Check if node exists
if ! kubectl get node "$NODE_NAME" >/dev/null 2>&1; then
    echo "Error: Node $NODE_NAME not found."
    exit 1
fi

# Apply Taint (NoSchedule)
kubectl taint nodes "$NODE_NAME" node-role.kubernetes.io/control-plane:NoSchedule --overwrite

echo "✅ Taint applied successfully."
kubectl describe node "$NODE_NAME" | grep Taints
