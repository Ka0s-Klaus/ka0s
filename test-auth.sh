#!/bin/bash
USER="root"
PASS=$(kubectl get secret mongo-secret -n mongo -o jsonpath="{.data.mongo-root-password}" | base64 --decode)
echo "Testing with user: $USER"
kubectl exec mongo-0 -c mongo -n mongo -- mongosh --username $USER --password "$PASS" --authenticationDatabase admin --eval "db.adminCommand('ping')"
