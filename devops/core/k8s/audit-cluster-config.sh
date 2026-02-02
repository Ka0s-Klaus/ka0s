#!/bin/bash
# =================================================================================================
# [Ka0S] Audit Cluster & Node Configuration
# =================================================================================================
# Este script extrae la configuración detallada del clúster Kubernetes y de cada uno de sus nodos.
# Diseñado para ejecutarse en el Control Plane a través del workflow ssh-connect.yml.
# Salida en formato JSON para facilitar su procesamiento.
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
# cluster-info no soporta -o json nativamente de forma util, usamos dump si es posible o texto plano
kubectl cluster-info dump --output-directory="${RESULTS_DIR}/cluster-dump" --namespaces kube-system > /dev/null 2>&1 || true
# Fallback a texto para info basica
kubectl cluster-info > "${RESULTS_DIR}/cluster_info.txt"

# -------------------------------------------------------------------------------------------------
# 2. Configuración de Nodos (Profundo)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo configuración de nodos..."

# Listado general en JSON (incluye status, addresses, info del sistema)
kubectl get nodes -o json > "${RESULTS_DIR}/nodes_list.json"

# Para mantener la legibilidad humana, conservamos el describe en texto
kubectl describe nodes > "${RESULTS_DIR}/nodes_describe.txt"

# -------------------------------------------------------------------------------------------------
# 3. Componentes del Plano de Control (Configuración)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo configuración de componentes del Control Plane (vía Pods y ConfigMaps)..."
mkdir -p "${RESULTS_DIR}/control-plane"

# Extraer configuración de pods estáticos (apiserver, etcd, controller-manager, scheduler) en JSON
kubectl get pods -n kube-system -l tier=control-plane -o json > "${RESULTS_DIR}/control-plane/static_pods_config.json"
# Alternativa por si no usan label tier=control-plane (común en kubeadm)
kubectl get pods -n kube-system -o json > "${RESULTS_DIR}/control-plane/kube_system_pods_full.json"

# -------------------------------------------------------------------------------------------------
# 4. Configuraciones Clave (ConfigMaps en kube-system)
# -------------------------------------------------------------------------------------------------
echo "[INFO] Extrayendo ConfigMaps críticos (kubeadm-config, coredns, kube-proxy) en JSON..."
# kubeadm-config suele tener la configuración de inicialización del cluster
kubectl get cm -n kube-system -o json > "${RESULTS_DIR}/control-plane/kube_system_configmaps.json"

# -------------------------------------------------------------------------------------------------
# 5. Finalización
# -------------------------------------------------------------------------------------------------
echo "[SUCCESS] Auditoría completada."
echo "[INFO] Archivos generados:"
ls -lh "$RESULTS_DIR"
