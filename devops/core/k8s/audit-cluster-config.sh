#!/bin/bash
# =================================================================================================
# [Ka0S] Audit Cluster & Node Configuration
# =================================================================================================
# Este script extrae la configuración detallada del clúster Kubernetes y de cada uno de sus nodos.
# Diseñado para ejecutarse en el Control Plane a través del workflow ssh-connect.yml.
# =================================================================================================

# Detener ejecución ante cualquier error
set -e

# Configuración de entorno para K8s (Asumiendo clúster kubeadm/standard en host remoto)
export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}

# Directorio de resultados (pasado como argumento por el workflow o default)
RESULTS_DIR=${1:-/tmp/results}
mkdir -p "$RESULTS_DIR"

echo "[INFO] Iniciando Auditoría de Configuración de Clúster y Nodos..."
echo "[INFO] Directorio de salida: $RESULTS_DIR"

# -------------------------------------------------------------------------------------------------
# 1. Información General del Clúster
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo versión y estado del clúster..."
kubectl version --output=json > "${RESULTS_DIR}/cluster_version.json"
kubectl cluster-info > "${RESULTS_DIR}/cluster_info.txt"

# -------------------------------------------------------------------------------------------------
# 2. Configuración de Nodos (Profundo)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo configuración de nodos..."

# Listado general con wide para ver IPs y OS
kubectl get nodes -o wide > "${RESULTS_DIR}/nodes_list_wide.txt"

# Definición completa en YAML (incluye status, capacity, allocatable, labels, taints)
kubectl get nodes -o yaml > "${RESULTS_DIR}/nodes_full_config.yaml"

# Descripción detallada (formato legible para humanos)
kubectl describe nodes > "${RESULTS_DIR}/nodes_describe.txt"

# -------------------------------------------------------------------------------------------------
# 3. Componentes del Plano de Control (Configuración)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo configuración de componentes del Control Plane (vía Pods y ConfigMaps)..."
mkdir -p "${RESULTS_DIR}/control-plane"

# Extraer configuración de pods estáticos (apiserver, etcd, controller-manager, scheduler)
# Esto permite ver los flags de arranque y argumentos.
kubectl get pods -n kube-system -l tier=control-plane -o yaml > "${RESULTS_DIR}/control-plane/static_pods_config.yaml"
# Alternativa por si no usan label tier=control-plane (común en kubeadm)
kubectl get pods -n kube-system -o yaml > "${RESULTS_DIR}/control-plane/kube_system_pods_full.yaml"

# -------------------------------------------------------------------------------------------------
# 4. Configuraciones Clave (ConfigMaps en kube-system)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo ConfigMaps críticos (kubeadm-config, coredns, kube-proxy)..."
# kubeadm-config suele tener la configuración de inicialización del cluster
kubectl get cm -n kube-system -o yaml > "${RESULTS_DIR}/control-plane/kube_system_configmaps.yaml"

# -------------------------------------------------------------------------------------------------
# 5. Finalización
# -------------------------------------------------------------------------------------------------
echo "[SUCCESS] Auditoría completada."
echo "[INFO] Archivos generados:"
ls -lh "$RESULTS_DIR"
