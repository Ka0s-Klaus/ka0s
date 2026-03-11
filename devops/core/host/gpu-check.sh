#!/bin/bash
set -e

echo "=== Host Info ==="
hostname
uname -r

echo "=== All PCI VGA/3D Devices ==="
if command -v lspci &> /dev/null; then
    lspci -nn | grep -E -i "VGA|3D|Display" || echo "No VGA/3D/Display devices found"
else
    echo "lspci not found"
fi

echo "=== Kernel Headers Check ==="
if dpkg -l | grep "linux-headers-$(uname -r)"; then
    echo "Headers for $(uname -r) are installed"
else
    echo "Headers for $(uname -r) are NOT installed. This is required for driver installation."
    echo "Attempting to find available headers..."
    apt-cache search linux-headers | grep $(uname -r) || echo "No headers found in cache"
fi

echo "=== Ubuntu Drivers Recommendation ==="
if command -v ubuntu-drivers &> /dev/null; then
    ubuntu-drivers devices || echo "ubuntu-drivers failed"
else
    echo "ubuntu-drivers not found. Installing..."
    export DEBIAN_FRONTEND=noninteractive
    sudo apt-get update && sudo apt-get install -y ubuntu-drivers-common pciutils
    ubuntu-drivers devices
fi
