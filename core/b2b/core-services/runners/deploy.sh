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
rm -rf gha-runner-scale-set-controller gha-runner-scale-set-controller-*.tgz

# 1. Download the controller chart to extract CRDs
echo "INFO: Descargando el chart del controlador para la instalación manual de CRDs..."
helm pull oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller --untar

# DEBUG: List contents to verify CRD file paths
echo "DEBUG: Contenido del directorio del chart extraído:"
ls -l gha-runner-scale-set-controller/
echo "DEBUG: Contenido del directorio crds:"
ls -l gha-runner-scale-set-controller/crds/

# 2. Apply CRDs manually from the downloaded chart using Server-Side Apply
echo "INFO: Aplicando las CRDs del controlador con kubectl (server-side apply)..."
kubectl apply --server-side -f gha-runner-scale-set-controller/crds/

# 3. Wait for the CRDs to be established in the cluster
echo "INFO: Esperando a que los CRDs se establezcan..."
kubectl wait --for=condition=established --timeout=120s crd/autoscalinglisteners.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/autoscalingrunnersets.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/ephemeralrunners.actions.github.com
kubectl wait --for=condition=established --timeout=120s crd/ephemeralrunnersets.actions.github.com

# 4. Install the gha-runner-scale-set-controller Helm chart (skipping CRDs) and add the required label
echo "INFO: Desplegando el gha-runner-scale-set-controller con Helm (omitiendo CRDs)..."
helm upgrade --install "${CONTROLLER_RELEASE_NAME}" \
  --namespace "${NAMESPACE}" \
  --set=authSecret.name=controller-manager \
  --set fullnameOverride="gha-rs-controller" \
  --skip-crds \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller

# 5. Clean up previous RunnerScaleSet resources and deploy the new one
echo "INFO: Cleaning up previous RunnerScaleSet resources to avoid conflicts..."

# Forcefully remove finalizers from the RunnerScaleSet if it's stuck in termination
echo "INFO: Attempting to remove finalizers from RunnerScaleSet to prevent hanging..."
kubectl patch autoscalingrunnerset.actions.github.com "${RUNNER_SCALESET_RELEASE_NAME}" \
  -n "${NAMESPACE}" \
  -p '{"metadata":{"finalizers":[]}}' \
  --type=merge || echo "INFO: Patch failed, likely because the resource doesn't exist. Continuing..."

sleep 2

echo "INFO: Forcefully deleting previous RunnerScaleSet resource to break any locks..."
kubectl delete --ignore-not-found=true --force --grace-period=0 -n "${NAMESPACE}" \
  autoscalingrunnerset.actions.github.com/${RUNNER_SCALESET_RELEASE_NAME}

# Allow some time for termination of all resources
sleep 5

# 6. Generate RunnerScaleSet manifest from Helm and apply with kubectl
echo "INFO: Desplegando el RunnerScaleSet '${RUNNER_SCALESET_RELEASE_NAME}' con kubectl..."
helm template "${RUNNER_SCALESET_RELEASE_NAME}" \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set \
  --namespace "${NAMESPACE}" \
  --set controllerServiceAccount.name="gha-rs-controller" \
  --set controllerServiceAccount.namespace="${NAMESPACE}" \
  --set-string githubConfigUrl="https://github.com/${GITHUB_REPO}" \
  --set githubConfigSecret=controller-manager \
  --set runnerScaleSet.minRunners=1 \
  --set runnerScaleSet.maxRunners=50 \
  --set runnerScaleSet.runnerGroup="${RUNNER_GROUP}" \
  --set template.spec.containers[0].name="runner" \
  --set template.spec.containers[0].image="${RUNNER_IMAGE}" \
  --set 'template.spec.containers[0].command[0]=/bin/bash' \
  --set 'template.spec.containers[0].args[0]=-c' \
  --set 'template.spec.containers[0].args[1]=echo "Runner container started. Sleeping for 1 hour for debugging..."; sleep 3600' | kubectl apply -f -

# --- Cleanup ---
echo "INFO: Limpiando archivos del chart descargado..."
rm -rf gha-runner-scale-set-controller
rm -f gha-runner-scale-set-controller-*.tgz

echo "INFO: Despliegue completado. Verificando los pods del runner..."
sleep 15

kubectl get pods -n "${NAMESPACE}" -l "actions.github.com/runner-scale-set-name=${RUNNER_SCALESET_RELEASE_NAME}"