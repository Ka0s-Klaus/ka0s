#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Configuration
IMAGE_NAME="kaos-logstash"
IMAGE_TAG="latest"

# --- Helper Functions ---
echo_blue() {
    echo -e "\033[0;34m$1\033[0m"
}

# --- Main Function ---
build_image() {
    echo_blue "--- Building Logstash image with MongoDB plugin ---"
    docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .
    echo_blue "Image '${IMAGE_NAME}:${IMAGE_TAG}' built successfully."
}

# --- Execution ---
main() {
    # Get the directory of the script
    SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
    cd "$SCRIPT_DIR"

    build_image
}

main "$@"