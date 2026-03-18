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

info "Iniciando limpieza de runners autoescalados..."

# 1. Eliminar el RunnerScaleSet para detener la creación de nuevos runners
info "Eliminando RunnerScaleSet..."
# Se añade '|| true' para que el script no falle si el tipo de recurso no existe
kubectl delete runnerscaleset swarm-runners-scaleset -n actions-runner-system --ignore-not-found=true || true

# 2. Desinstalar el controlador de runners con Helm
info "Desinstalando actions-runner-controller..."
helm uninstall actions-runner-controller -n actions-runner-system &>/dev/null || true

# 3. Eliminar el namespace del controlador de runners
info "Eliminando el namespace 'actions-runner-system'..."
kubectl delete namespace actions-runner-system --ignore-not-found=true --wait=false

info "Desinstalando cert-manager y sus componentes..."

# 4. Desinstalar cert-manager con Helm
helm uninstall cert-manager -n cert-manager &>/dev/null || true

# 5. Eliminar el namespace de cert-manager
kubectl delete namespace cert-manager --ignore-not-found=true --wait=false

# 6. Eliminar los CRDs de cert-manager (¡con precaución!)
info "Eliminando CRDs de cert-manager..."
kubectl delete crd -l app.kubernetes.io/instance=cert-manager --ignore-not-found=true

success "Limpieza completada."