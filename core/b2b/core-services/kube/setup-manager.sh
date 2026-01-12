#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Configuration
K8S_VERSION="1.32"

# --- Helper Functions ---
echo_blue() {
    echo -e "\033[0;34m$1\033[0m"
}

usage() {
    echo "Usage: $0 --manager-ip <IP> --pod-cidr <CIDR>"
    echo "  --manager-ip  The IP address of the manager node."
    echo "  --pod-cidr      The CIDR for the pod network."
    exit 1
}

# --- Main Functions ---

uninstall_cluster() {
    echo_blue "--- Uninstalling existing Kubernetes cluster ---"
    # Stop services and remove packages
    sudo kubeadm reset -f || true
    sudo systemctl stop kubelet || true
    sudo systemctl stop docker || true
    sudo systemctl stop docker.socket || true
    sudo apt-get purge -y kubeadm kubectl kubelet kubernetes-cni kube* || true
    sudo apt-get autoremove -y || true

    # Remove configuration files
    sudo rm -rf ~/.kube /etc/kubernetes /var/lib/etcd /var/lib/kubelet /var/lib/cni /etc/cni
    echo_blue "Uninstallation complete."
}

install_dependencies() {
    echo_blue "--- Installing dependencies (Docker & Kubernetes) ---"
    sudo apt-get update

    echo_blue "--- Configuring firewall for Calico (BGP/VXLAN) ---"
    if command -v ufw &> /dev/null; then
        echo_blue "ufw detected. Allowing BGP (TCP 179) and VXLAN (UDP 4789) traffic."
        sudo ufw allow 179/tcp
        sudo ufw allow 4789/udp
        # Remove old IPIP rule if it exists to avoid clutter
        sudo sed -i -e '/-A ufw-before-input -p 4 -j ACCEPT/d' /etc/ufw/before.rules
        sudo ufw reload
    else
        echo_blue "ufw not found. Skipping firewall configuration. Please ensure BGP (TCP 179) and VXLAN (UDP 4789) traffic is allowed between nodes."
    fi

    sudo apt-get install -y apt-transport-https ca-certificates curl

    # Install Docker
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg || true
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io
    sudo systemctl enable docker || true

    sudo systemctl start docker

    # Install Kubernetes
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://pkgs.k8s.io/core:/stable:/v${K8S_VERSION}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg || true
    echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${K8S_VERSION}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
    
    sudo apt-get update
    sudo apt-get install -y kubelet kubeadm kubectl
    sudo apt-mark hold kubelet kubeadm kubectl
    echo_blue "Dependency installation complete."
}

initialize_manager_node() {
    SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
    echo_blue "--- Initializing Kubernetes Manager Node ---"
    sudo kubeadm init --apiserver-advertise-address=${MANAGER_IP} --pod-network-cidr=${POD_CIDR} --cri-socket=unix:///run/containerd/containerd.sock

    echo_blue "--- Configuring kubectl for the current user ---"
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config

    echo_blue "--- Untainting control-plane node to allow pod scheduling ---"
    kubectl taint nodes --all node-role.kubernetes.io/control-plane-

    echo_blue "--- Installing Calico operator ---"
    kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.0/manifests/tigera-operator.yaml

    echo_blue "--- Configuring and installing Calico via custom resource ---"
    curl -L https://raw.githubusercontent.com/projectcalico/calico/v3.28.0/manifests/custom-resources.yaml -o /tmp/custom-resources.yaml
    
    echo_blue "--- Customizing Calico manifest with provided POD_CIDR (${POD_CIDR}) and VXLAN encapsulation ---"
    sed -i.bak "s|cidr: 192.168.0.0/16|cidr: ${POD_CIDR}|g" /tmp/custom-resources.yaml
    sed -i.bak2 "s|encapsulation: VXLANCrossSubnet|encapsulation: VXLAN|g" /tmp/custom-resources.yaml

    echo_blue "--- Setting Calico IP autodetection method ---"
    awk '
    /ipPools:/ {
      print "    nodeAddressAutodetectionV4:"
      print "      canReach: 8.8.8.8"
    }
    { print }
    ' /tmp/custom-resources.yaml > /tmp/custom-resources.yaml.new && mv /tmp/custom-resources.yaml.new /tmp/custom-resources.yaml

    kubectl apply -f /tmp/custom-resources.yaml

    echo_blue "--- Waiting for Calico to create the 'calico-system' namespace ---"
    until kubectl get namespace calico-system >/dev/null 2>&1; do
        echo "Waiting for 'calico-system' namespace to be created..."
        sleep 5
    done

    echo_blue "--- Waiting for Calico components to be ready ---"
    # The operator creates components in the 'calico-system' namespace
    kubectl rollout status daemonset/calico-node -n calico-system --timeout=300s
    kubectl rollout status deployment/calico-kube-controllers -n calico-system --timeout=300s
    echo "Calico is ready."

    echo_blue "--- Installing MetalLB ---"
    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml

    echo_blue "--- Waiting for MetalLB to be ready ---"
    kubectl wait --namespace metallb-system \
                --for=condition=ready pod \
                --selector=app=metallb \
                --timeout=300s

    echo_blue "--- Applying MetalLB configuration ---"
    kubectl apply -f "$SCRIPT_DIR/metallb-config.yaml"

    echo_blue "--- Installing Local Path Provisioner for dynamic storage ---"
    kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/master/deploy/local-path-storage.yaml

    echo_blue "--- Waiting for Local Path Provisioner to be ready ---"
    kubectl wait --namespace local-path-storage \
                --for=condition=ready pod \
                --selector=app=local-path-provisioner \
                --timeout=300s

    echo_blue "--- Restarting kubelet to apply CNI changes ---"
    sudo systemctl restart kubelet
    sleep 10

    echo_blue "--- Applying custom network policies ---"
    # A short extra sleep just in case, to ensure webhook is fully operational.
    sleep 10
    kubectl apply -f "$SCRIPT_DIR/allow-all-egress.yaml"

    echo_blue "--- Testing pod outbound connectivity ---"
    kubectl apply -f "$SCRIPT_DIR/test-pod.yaml"

    echo_blue "--- Waiting for test-pod to be ready ---"
    if ! kubectl wait --for=condition=Ready pod/test-pod --timeout=120s; then
        echo "Error: test-pod did not become Ready. Collecting debug info..."
        kubectl describe pod test-pod
        kubectl get events --sort-by='.lastTimestamp'
        kubectl get nodes -o wide
        exit 1
    fi

    echo "Pinging google.com from inside the pod..."
    if ! kubectl exec test-pod -- ping -c 4 google.com; then
        echo "Error: Ping test failed. Collecting debug info..."
        kubectl logs test-pod
        exit 1
    fi

    echo_green "Connectivity test complete."
    kubectl delete pod test-pod

    echo_blue "Cluster initialization complete."
    echo_blue "To join a worker node to this cluster, run the following command on the worker node:"
    kubeadm token create --print-join-command
}

# --- Execution ---
main() {
    if [ "$(id -u)" -eq 0 ]; then
        echo_blue "This script should not be run as root. Use sudo for commands that need it."
        exit 1
    fi

    while [[ "$#" -gt 0 ]]; do
        case $1 in
            --manager-ip)
                MANAGER_IP="$2"
                shift
                shift
                ;;
            --pod-cidr)
                POD_CIDR="$2"
                shift
                shift
                ;;
            *)
                usage
                ;;
        esac
    done

    if [ -z "${MANAGER_IP}" ] || [ -z "${POD_CIDR}" ]; then
        usage
    fi

    uninstall_cluster
    install_dependencies
    initialize_manager_node
}

main "$@"