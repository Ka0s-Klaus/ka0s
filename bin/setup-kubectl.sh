#!/bin/bash
# Script to install kubectl locally in the repository for sandbox usage

set -e

# Detect OS and Architecture
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

if [ "$ARCH" = "x86_64" ]; then
    ARCH="amd64"
elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
    ARCH="arm64"
fi

KUBECTL_VERSION="v1.32.0" # Using a stable recent version compatible with v1.32.x cluster
BINARY_URL="https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/${OS}/${ARCH}/kubectl"
DEST_DIR="$(dirname "$0")"
DEST_FILE="${DEST_DIR}/kubectl"

echo "Detected OS: ${OS}, Architecture: ${ARCH}"
echo "Downloading kubectl ${KUBECTL_VERSION} to ${DEST_FILE}..."

curl -L -o "${DEST_FILE}" "${BINARY_URL}"
chmod +x "${DEST_FILE}"

echo "kubectl installed successfully at ${DEST_FILE}"
echo "You can now use it by running: ./bin/kubectl"
echo "Or add it to your PATH: export PATH=\"\$(pwd)/bin:\$PATH\""
