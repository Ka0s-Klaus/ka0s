#!/bin/bash

# Salir inmediatamente si un comando falla
set -e

# --- Definición de Colores ---
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# --- Funciones de Logging ---
info() {
    echo -e "${BLUE}INFO: $1${NC}"
}

success() {
    echo -e "${GREEN}SUCCESS: $1${NC}"
}

info "Desinstalando actions-runner-controller y sus componentes..."

# Desinstalar el RunnerDeployment
kubectl delete -f runner-deployment.yaml --ignore-not-found=true

# Desinstalar el controlador
helm uninstall actions-runner-controller -n actions-runner-system &>/dev/null || true

# Eliminar el secreto y el namespace
kubectl delete secret controller-manager -n actions-runner-system --ignore-not-found=true
kubectl delete namespace actions-runner-system --ignore-not-found=true

info "Desinstalando cert-manager y sus componentes..."

# Desinstalar cert-manager
helm uninstall cert-manager -n cert-manager &>/dev/null || true

# Eliminar el namespace de cert-manager
kubectl delete namespace cert-manager --ignore-not-found=true

# Eliminar los CRDs de cert-manager
kubectl delete -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.2/cert-manager.crds.yaml --ignore-not-found=true

success "Limpieza completada."