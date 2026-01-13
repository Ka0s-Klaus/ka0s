#!/bin/bash

# Fail on any error
set -e
# export variables
export GITHUB_APP_ID="1972621"
export GITHUB_APP_INSTALLATION_ID="103064135"
export GITHUB_APP_PRIVATE_KEY_FILE="private-key.pem"
# Namespace where the runners will be deployed
NAMESPACE="actions-runner-system"

# Name for the controller Helm release
CONTROLLER_RELEASE_NAME="actions-runner-controller"

# Chart details
CHART_NAME="actions-runner-controller"
CHART_URL="oci://ghcr.io/actions/actions-runner-controller-charts/${CHART_NAME}"

# Name for the runner scale set Helm release
RUNNER_SCALESET_RELEASE_NAME="swarm-runners-scaleset"

# GitHub repository URL
GITHUB_REPO="Ka0s-Klaus/Ka0s"

# Runner group name
RUNNER_GROUP="swarm-runners"

# Custom runner image
RUNNER_IMAGE="ka0score/actions-runner:1.0.3"

# Check for GitHub App credentials
if [ -z "${GITHUB_APP_ID}" ] || [ -z "${GITHUB_APP_INSTALLATION_ID}" ] || [ -z "${GITHUB_APP_PRIVATE_KEY_FILE}" ]; then
  echo "Error: GITHUB_APP_ID, GITHUB_APP_INSTALLATION_ID, and GITHUB_APP_PRIVATE_KEY_FILE environment variables must be set." >&2
  exit 1
fi

if [ ! -f "${GITHUB_APP_PRIVATE_KEY_FILE}" ]; then
    echo "Error: Private key file not found at ${GITHUB_APP_PRIVATE_KEY_FILE}" >&2
    exit 1
fi

# Create namespace if it doesn't exist
kubectl create namespace "${NAMESPACE}" --dry-run=client -o yaml | kubectl apply -f -

# Create the GitHub secret for the controller using GitHub App credentials
kubectl create secret generic controller-manager \
    -n "${NAMESPACE}" \
    --from-literal=github_app_id="${GITHUB_APP_ID}" \
    --from-literal=github_app_installation_id="${GITHUB_APP_INSTALLATION_ID}" \
    --from-file=github_app_private_key="${GITHUB_APP_PRIVATE_KEY_FILE}" \
    --dry-run=client -o yaml | kubectl apply -f -

# --- Robust CRD Installation ---

# 0. Clean up previous downloads
echo "INFO: Limpiando descargas anteriores del chart..."
rm -rf ${CHART_NAME} ${CHART_NAME}-*.tgz

# 1. Download the controller chart to extract CRDs
echo "INFO: Descargando el chart del controlador para la instalación manual de CRDs..."
helm pull ${CHART_URL} --untar

# 2. Apply CRDs manually from the downloaded chart using Server-Side Apply
echo "INFO: Aplicando las CRDs del controlador con kubectl (server-side apply)..."
kubectl apply --server-side -f ${CHART_NAME}/crds/

# 3. Wait for the CRDs to be established in the cluster
echo "INFO: Esperando a que los CRDs se establezcan..."
kubectl wait --for=condition=established --timeout=120s crd/runners.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/runnerdeployments.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/runnerreplicasets.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/runnersets.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/horizontalrunnerautoscalers.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/runnerscalesets.actions.github.com

# 4. Install the actions-runner-controller Helm chart (skipping CRDs)
echo "INFO: Desplegando el ${CHART_NAME} con Helm (omitiendo CRDs)..."
helm upgrade --install "${CONTROLLER_RELEASE_NAME}" \
  --namespace "${NAMESPACE}" \
  --set=authSecret.name=controller-manager \
  --skip-crds \
  ${CHART_URL}

# 5. Apply the RunnerScaleSet manifest directly
echo "INFO: Desplegando el RunnerScaleSet desde el fichero runner-scale-set.yaml..."
kubectl apply -f runner-scale-set.yaml

# --- Cleanup ---
echo "INFO: Limpiando archivos del chart descargado..."
rm -rf ${CHART_NAME}
rm -f ${CHART_NAME}-*.tgz

echo "INFO: Despliegue completado. Verificando los pods del runner..."
sleep 15

kubectl get pods -n "${NAMESPACE}" -l "actions.github.com/runner-scale-set-name=${RUNNER_SCALESET_RELEASE_NAME}"