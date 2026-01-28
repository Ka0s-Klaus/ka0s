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
# --- Main Functions ---
create_dockerfile() {
    echo_blue "--- Creating Dockerfile dynamically ---"
    cat <<EOF > Dockerfile
# Use the official Logstash image as a base
FROM docker.elastic.co/logstash/logstash:8.5.0

# Install the logstash-input-mongodb plugin
RUN /usr/share/logstash/bin/logstash-plugin install logstash-input-mongodb
EOF
    echo_blue "Dockerfile created."
}

build_image() {
    echo_blue "--- Building Logstash image with MongoDB plugin ---"
    # Ensure the Dockerfile is created before building
    create_dockerfile
    docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .
    echo_blue "Image '${IMAGE_NAME}:${IMAGE_TAG}' built successfully."
}

# --- Execution ---
main() {
    # Get the directory of the script and change to it
    # This ensures that the 'docker build' context is correct
    SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
    cd "$SCRIPT_DIR"

    build_image
}

main "$@"