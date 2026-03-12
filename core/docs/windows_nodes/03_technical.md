# Windows Node Join Script (Template)

This PowerShell script simplifies the process of joining a Windows Server to the Ka0s Kubernetes Cluster.

```powershell
<#
.SYNOPSIS
    Installs Kubernetes components (kubelet, kube-proxy) and joins the cluster.
.DESCRIPTION
    Automates the download of binaries, service creation, and CNI setup.
.PARAMETER K8sVersion
    Kubernetes version (e.g., v1.32.0).
.PARAMETER MasterIP
    IP address of k8-manager (e.g., 192.168.1.10).
#>

param(
    [string]$K8sVersion = "v1.32.0",
    [string]$MasterIP = "192.168.1.10",
    [string]$PodCIDR = "172.16.0.0/16",
    [string]$ServiceCIDR = "10.96.0.0/12"
)

# 1. Check Prerequisites
Write-Host "Checking Windows Features..." -ForegroundColor Green
$features = Get-WindowsFeature Containers, Hyper-V
if ($features.Installed -contains $false) {
    Install-WindowsFeature -Name Containers, Hyper-V -IncludeManagementTools -Restart
    Write-Warning "Restart required. Run this script again after reboot."
    exit
}

# 2. Create Directory Structure
$K8sDir = "C:\k"
New-Item -ItemType Directory -Force -Path $K8sDir | Out-Null
Set-Location $K8sDir

# 3. Download Binaries
Write-Host "Downloading Kubernetes Binaries ($K8sVersion)..." -ForegroundColor Green
Invoke-WebRequest "https://dl.k8s.io/release/$K8sVersion/bin/windows/amd64/kubelet.exe" -OutFile "$K8sDir\kubelet.exe"
Invoke-WebRequest "https://dl.k8s.io/release/$K8sVersion/bin/windows/amd64/kube-proxy.exe" -OutFile "$K8sDir\kube-proxy.exe"
Invoke-WebRequest "https://dl.k8s.io/release/$K8sVersion/bin/windows/amd64/kubectl.exe" -OutFile "$K8sDir\kubectl.exe"

# 4. Configure Kubelet Service
Write-Host "Configuring Kubelet Service..." -ForegroundColor Green
# Use nssm or New-Service (requires manual config file creation)
# Note: Requires kubeconfig from master (scp from master:/etc/kubernetes/admin.conf to C:\k\config)

Write-Host "Please copy admin.conf from master to C:\k\config before proceeding."
Read-Host "Press Enter when done..."

# 5. Start Services (Example using direct execution for testing)
Write-Host "Starting Kubelet..."
Start-Process -FilePath "$K8sDir\kubelet.exe" -ArgumentList "--kubeconfig=$K8sDir\config --config=$K8sDir\kubelet-config.yaml --hostname-override=$env:COMPUTERNAME --pod-infra-container-image=mcr.microsoft.com/oss/kubernetes/pause:3.6" -NoNewWindow

Write-Host "Windows Node Setup Complete (Pending CNI installation)."
```
