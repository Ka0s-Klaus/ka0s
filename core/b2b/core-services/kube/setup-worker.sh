#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Configuration
K8S_VERSION="1.32"

# --- Helper Functions ---
echo_blue() {
    echo -e "\033[0;34m$1\033[0m"
}

# --- Main Functions ---

uninstall_cluster() {
    echo_blue "--- Uninstalling existing Kubernetes components ---"
    # Stop services and remove packages
    sudo kubeadm reset -f || true
    sudo systemctl stop kubelet || true
    sudo systemctl stop docker || true
    sudo apt-get purge -y kubeadm kubectl kubelet kubernetes-cni kube* || true
    sudo apt-get autoremove -y || true

    # Remove configuration files
    sudo rm -rf ~/.kube /etc/kubernetes /var/lib/etcd /var/lib/kubelet /var/lib/cni /etc/cni
    echo_blue "Uninstallation complete."
}

install_dependencies() {
    echo_blue "--- Installing dependencies (Docker & Kubernetes) ---"
    sudo apt-get update

    echo_blue "--- Configuring firewall for Calico (VXLAN) ---"
    if command -v ufw &> /dev/null; then
        echo_blue "ufw detected. Allowing BGP (TCP 179) and VXLAN (UDP 4789) traffic."
        sudo ufw allow 179/tcp
        sudo ufw allow 4789/udp
        # Remove old IPIP rule if it exists
        if sudo ufw status | grep -q '4/tcp'; then
            sudo ufw delete allow 4/tcp
        fi
    else
        echo_blue "ufw not found. Skipping firewall configuration. Please ensure BGP (TCP 179) and VXLAN (UDP 4789) traffic is allowed between nodes."
    fi

    sudo apt-get install -y apt-transport-https ca-certificates curl

    # Install Docker
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io
    sudo systemctl enable docker
    sudo systemctl start docker

    echo_blue "Configuring containerd to use systemd cgroup driver..."
    sudo mkdir -p /etc/containerd
    containerd config default | sudo tee /etc/containerd/config.toml
    sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml

    echo_blue "Restarting containerd to apply changes..."
    sudo systemctl restart containerd

    # Install Kubernetes
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://pkgs.k8s.io/core:/stable:/v${K8S_VERSION}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
    echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${K8S_VERSION}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
    
    sudo apt-get update
    sudo apt-get install -y kubelet kubeadm kubectl kubernetes-cni
    sudo apt-mark hold kubelet kubeadm kubectl

    # Kubelet will be configured by 'kubeadm join'. No manual configuration is needed here.
    # The kubelet service will enter a crashloop until 'kubeadm join' is executed, which is expected.
    echo_blue "Kubelet installed. It will be configured upon joining the cluster."

    echo_blue "Dependency installation complete."
}

# --- Execution ---
main() {
    uninstall_cluster
    install_dependencies
    echo_blue "Worker node is ready. Please use the join command from the manager node to add this node to the cluster."
}

main