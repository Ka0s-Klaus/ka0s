#!/bin/bash
set -e

# Directory for certs
CERT_DIR="/tmp/backstage-certs"
mkdir -p "$CERT_DIR"

KEY_FILE="$CERT_DIR/tls.key"
CERT_FILE="$CERT_DIR/tls.crt"
SECRET_NAME="backstage-tls"
NAMESPACE="backstage"

echo "Generating self-signed certificate..."
# Check if openssl is available
if ! command -v openssl &> /dev/null; then
    echo "Error: openssl could not be found. Please install openssl or run this script in an environment with openssl."
    exit 1
fi

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout "$KEY_FILE" \
  -out "$CERT_FILE" \
  -subj "/CN=backstage.kaos.local/O=Ka0s/C=ES"

echo "Creating Kubernetes secret '$SECRET_NAME' in namespace '$NAMESPACE'..."

# Create namespace if not exists (it should exist, but just in case)
kubectl create namespace "$NAMESPACE" --dry-run=client -o yaml | kubectl apply -f -

# Create secret
kubectl create secret tls "$SECRET_NAME" \
  --key "$KEY_FILE" \
  --cert "$CERT_FILE" \
  -n "$NAMESPACE" \
  --dry-run=client -o yaml | kubectl apply -f -

echo "Cleaning up..."
rm -rf "$CERT_DIR"

echo "Done. Secret '$SECRET_NAME' created."
