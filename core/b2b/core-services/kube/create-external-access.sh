#!/bin/bash
# Script para generar un Kubeconfig para acceso externo (ServiceAccount)
# Uso: ./create-external-access.sh <nombre-usuario> [namespace]

set -e

USER_NAME=${1:-external-agent}
NAMESPACE=${2:-default}
OUTPUT_FILE="${USER_NAME}.kubeconfig"

echo "=== Generando acceso para usuario: $USER_NAME en namespace: $NAMESPACE ==="

# 1. Crear ServiceAccount
kubectl create serviceaccount $USER_NAME -n $NAMESPACE --dry-run=client -o yaml | kubectl apply -f -

# 2. Crear Secret para el Token (necesario explícitamente desde K8s 1.24+)
SECRET_NAME="${USER_NAME}-token-secret"
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: $SECRET_NAME
  namespace: $NAMESPACE
  annotations:
    kubernetes.io/service-account.name: $USER_NAME
type: kubernetes.io/service-account-token
EOF

echo "Esperando a que el token se genere..."
sleep 2

# 3. Asignar permisos (ClusterAdmin por defecto para simplificar troubleshooting, RESTRINGIR en producción)
echo "Asignando permisos de cluster-admin (¡Úsese con precaución!)..."
kubectl create clusterrolebinding ${USER_NAME}-binding --clusterrole=cluster-admin --serviceaccount=${NAMESPACE}:${USER_NAME} --dry-run=client -o yaml | kubectl apply -f -

# 4. Obtener datos del cluster
# Intentamos obtener la IP externa o usamos la configurada en el kubeconfig actual
SERVER_URL=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')
CLUSTER_NAME=$(kubectl config view --minify -o jsonpath='{.clusters[0].name}')

# Obtener CA y Token del secret
CA_CRT=$(kubectl get secret $SECRET_NAME -n $NAMESPACE -o jsonpath='{.data.ca\.crt}')
TOKEN=$(kubectl get secret $SECRET_NAME -n $NAMESPACE -o jsonpath='{.data.token}' | base64 --decode)

if [ -z "$TOKEN" ]; then
  echo "Error: No se pudo obtener el token. Verifica que el Secret $SECRET_NAME se haya creado correctamente."
  exit 1
fi

# 5. Generar archivo Kubeconfig
cat <<EOF > $OUTPUT_FILE
apiVersion: v1
kind: Config
clusters:
- cluster:
    certificate-authority-data: $CA_CRT
    server: $SERVER_URL
  name: $CLUSTER_NAME
contexts:
- context:
    cluster: $CLUSTER_NAME
    user: $USER_NAME
  name: $USER_NAME-context
current-context: $USER_NAME-context
users:
- name: $USER_NAME
  user:
    token: $TOKEN
EOF

echo "=== ¡Éxito! ==="
echo "Archivo generado: $OUTPUT_FILE"
echo "Entrégale este archivo al agente externo y dile que ejecute:"
echo "export KUBECONFIG=$(pwd)/$OUTPUT_FILE"
echo "kubectl get nodes"
