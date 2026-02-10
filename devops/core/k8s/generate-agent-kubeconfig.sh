#!/bin/bash
# -----------------------------------------------------------------------------
# Script: generate-agent-kubeconfig.sh
# Descripción: Genera un archivo Kubeconfig independiente para acceso programático
#              usando un ServiceAccount con permisos de cluster-admin.
# Uso: ./generate-agent-kubeconfig.sh [nombre-sa] [namespace]
# -----------------------------------------------------------------------------

set -e

SERVICE_ACCOUNT_NAME=${1:-"ka0s-agent"}
NAMESPACE=${2:-"kube-system"}
KUBECONFIG_FILE="${SERVICE_ACCOUNT_NAME}.kubeconfig"

echo "🔹 Generando acceso para ServiceAccount: ${SERVICE_ACCOUNT_NAME} en ${NAMESPACE}..."

# 1. Crear Service Account si no existe
kubectl create serviceaccount "${SERVICE_ACCOUNT_NAME}" -n "${NAMESPACE}" --dry-run=client -o yaml | kubectl apply -f -

# 2. Asignar permisos (ClusterAdmin - ¡CUIDADO! Es acceso total)
#    Nota: Para producción, ajusta esto a un RoleBinding específico.
kubectl create clusterrolebinding "${SERVICE_ACCOUNT_NAME}-admin" \
  --clusterrole=cluster-admin \
  --serviceaccount="${NAMESPACE}:${SERVICE_ACCOUNT_NAME}" \
  --dry-run=client -o yaml | kubectl apply -f -

# 3. Generar Token (Compatible con K8s 1.24+)
echo "🔑 Generando token de larga duración..."
# Crear un Secret manual para el token (opcional, pero útil para persistencia en versiones antiguas)
# Aquí usamos 'kubectl create token' que genera un token firmado (default 1h, lo extendemos a 1 año)
TOKEN=$(kubectl -n "${NAMESPACE}" create token "${SERVICE_ACCOUNT_NAME}" --duration=8760h)

# 4. Obtener datos del Cluster
CLUSTER_NAME=$(kubectl config view --minify -o jsonpath='{.clusters[0].name}')
CLUSTER_SERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')

# Extraer CA del contexto actual (decodificando base64 si es necesario)
# Nota: --raw devuelve el certificado tal cual.
kubectl config view --minify --raw -o jsonpath='{.clusters[0].cluster.certificate-authority-data}' | base64 -d > ca.crt

echo "🌍 Cluster: ${CLUSTER_NAME} (${CLUSTER_SERVER})"

# 5. Construir el archivo Kubeconfig
echo "📝 Escribiendo archivo ${KUBECONFIG_FILE}..."

# Configurar Cluster
kubectl config set-cluster "${CLUSTER_NAME}" \
  --kubeconfig="${KUBECONFIG_FILE}" \
  --server="${CLUSTER_SERVER}" \
  --certificate-authority=ca.crt \
  --embed-certs=true

# Configurar Usuario (Token)
kubectl config set-credentials "${SERVICE_ACCOUNT_NAME}" \
  --kubeconfig="${KUBECONFIG_FILE}" \
  --token="${TOKEN}"

# Configurar Contexto
kubectl config set-context "${SERVICE_ACCOUNT_NAME}-${CLUSTER_NAME}" \
  --kubeconfig="${KUBECONFIG_FILE}" \
  --cluster="${CLUSTER_NAME}" \
  --user="${SERVICE_ACCOUNT_NAME}"

# Establecer contexto por defecto
kubectl config use-context "${SERVICE_ACCOUNT_NAME}-${CLUSTER_NAME}" \
  --kubeconfig="${KUBECONFIG_FILE}"

# Limpieza
rm ca.crt

echo ""
echo "✅ ¡Listo! El archivo '${KUBECONFIG_FILE}' ha sido generado."
echo "   Puedes usarlo con: export KUBECONFIG=$(pwd)/${KUBECONFIG_FILE}"
echo "   O pasarlo a tu agente/pipeline CI/CD."
