#!/bin/bash
set -e

echo "=== Host Info ==="
hostname
ip a | grep inet
uname -r
if [ -f /etc/os-release ]; then
    cat /etc/os-release
fi

echo "=== PCI Devices (NVIDIA) ==="
if command -v lspci &> /dev/null; then
    lspci | grep -i nvidia || echo "No NVIDIA devices found via lspci"
else
    echo "lspci not found"
fi

echo "=== NVIDIA SMI ==="
if command -v nvidia-smi &> /dev/null; then
    nvidia-smi
else
    echo "nvidia-smi not found"
fi

echo "=== NVIDIA Container Toolkit ==="
if dpkg -l | grep nvidia-container-toolkit; then
    echo "Toolkit installed"
else
    echo "Toolkit not installed"
fi

echo "=== Containerd Config ==="
if [ -f /etc/containerd/config.toml ]; then
    grep "nvidia" /etc/containerd/config.toml || echo "nvidia not explicitly found in containerd config"
else
    echo "/etc/containerd/config.toml not found"
fi

echo "=== Kernel Modules ==="
lsmod | grep nvidia || echo "No nvidia kernel modules loaded"
