#!/bin/bash
#
# Script para eliminar el stack ELK del clúster de Kubernetes
# ¡ADVERTENCIA! Este script eliminará todos los recursos y datos del namespace 'elk'
#

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_header() {
    echo ""
    echo -e "${RED}═══════════════════════════════════════════════════════${NC}"
    echo -e "${RED}  $1${NC}"
    echo -e "${RED}═══════════════════════════════════════════════════════${NC}"
    echo ""
}

# Verificar que kubectl está instalado
if ! command -v kubectl &> /dev/null; then
    print_error "kubectl no está instalado o no está en el PATH"
    exit 1
fi

# Verificar conexión al clúster
if ! kubectl cluster-info &> /dev/null; then
    print_error "No se puede conectar al clúster de Kubernetes"
    exit 1
fi

# Verificar si el namespace existe
if ! kubectl get namespace elk &> /dev/null; then
    print_warning "El namespace 'elk' no existe"
    exit 0
fi

print_header "ADVERTENCIA: Eliminación del Stack ELK"
print_warning "Este script eliminará TODOS los recursos del namespace 'elk'"
print_warning "Esto incluye:"
echo "  - Elasticsearch y todos sus datos"
echo "  - Kibana y su configuración"
echo "  - El CronJob de sincronización"
echo "  - Todos los PersistentVolumeClaims (y posiblemente los datos)"
echo ""

# Mostrar recursos actuales
print_info "Recursos actuales en el namespace 'elk':"
kubectl get all,pvc -n elk

echo ""
print_warning "¿Estás SEGURO de que deseas eliminar todos estos recursos?"
read -p "Escribe 'ELIMINAR' para confirmar: " -r
echo ""

if [[ $REPLY != "ELIMINAR" ]]; then
    print_info "Operación cancelada"
    exit 0
fi

# Eliminar el namespace
print_header "Eliminando el namespace 'elk'"
print_info "Eliminando namespace (esto puede tardar unos minutos)..."
kubectl delete namespace elk

# Esperar a que el namespace se elimine completamente
print_info "Esperando a que el namespace se elimine completamente..."
while kubectl get namespace elk &> /dev/null; do
    echo -n "."
    sleep 2
done
echo ""

print_success "Namespace 'elk' eliminado exitosamente"

# Verificar PersistentVolumes huérfanos
print_header "Verificando PersistentVolumes"
ORPHAN_PVS=$(kubectl get pv -o json | jq -r '.items[] | select(.spec.claimRef.namespace=="elk") | .metadata.name' 2>/dev/null || echo "")

if [ -n "$ORPHAN_PVS" ]; then
    print_warning "Se encontraron PersistentVolumes que estaban asociados al namespace 'elk':"
    echo "$ORPHAN_PVS"
    echo ""
    print_info "Estos volúmenes pueden estar en estado 'Released' y pueden contener datos"
    read -p "¿Deseas eliminar también estos PersistentVolumes? (s/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[SsYy]$ ]]; then
        for pv in $ORPHAN_PVS; do
            print_info "Eliminando PV: $pv"
            kubectl delete pv $pv
        done
        print_success "PersistentVolumes eliminados"
    else
        print_info "Los PersistentVolumes no fueron eliminados"
        print_info "Puedes eliminarlos manualmente más tarde con:"
        echo "  kubectl delete pv <nombre-del-pv>"
    fi
else
    print_info "No se encontraron PersistentVolumes huérfanos"
fi

print_header "Limpieza Completada"
print_success "El stack ELK ha sido eliminado completamente del clúster"