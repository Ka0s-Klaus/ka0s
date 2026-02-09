#!/bin/bash
#
# Script de despliegue automatizado para el stack ELK en Kubernetes
# Este script despliega Elasticsearch, Kibana y el CronJob de sincronización con MongoDB
#

set -e  # Salir si algún comando falla

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes con formato
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
    echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
    echo ""
}

# Verificar que kubectl está instalado
if ! command -v kubectl &> /dev/null; then
    print_error "kubectl no está instalado o no está en el PATH"
    exit 1
fi

# Verificar conexión al clúster
print_header "Verificando conexión al clúster de Kubernetes"
if ! kubectl cluster-info &> /dev/null; then
    print_error "No se puede conectar al clúster de Kubernetes"
    print_info "Asegúrate de estar conectado al clúster correcto"
    exit 1
fi
print_success "Conectado al clúster de Kubernetes"

# Mostrar información del clúster
CLUSTER_VERSION=$(kubectl version --short 2>/dev/null | grep Server || kubectl version | grep Server)
print_info "Versión del servidor: $CLUSTER_VERSION"

# Verificar que los manifiestos existen
print_header "Verificando manifiestos"
MANIFESTS=(
    "00-namespace.yaml"
    "01-mongo-secret.yaml"
    "02-elasticsearch-statefulset.yaml"
    "03-kibana-deployment.yaml"
    "08-mongodb-sync-cronjob.yaml"
)

for manifest in "${MANIFESTS[@]}"; do
    if [ ! -f "$manifest" ]; then
        print_error "No se encuentra el manifiesto: $manifest"
        exit 1
    fi
    print_success "Encontrado: $manifest"
done

# Preguntar al usuario si desea continuar
echo ""
read -p "¿Deseas continuar con el despliegue? (s/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[SsYy]$ ]]; then
    print_warning "Despliegue cancelado por el usuario"
    exit 0
fi

# Aplicar manifiestos
print_header "Desplegando el stack ELK"

print_info "Creando namespace 'elk'..."
kubectl apply -f 00-namespace.yaml
print_success "Namespace creado"

sleep 2

print_info "Creando Secret con credenciales de MongoDB..."
kubectl apply -f 01-mongo-secret.yaml
print_success "Secret creado"

sleep 2

print_info "Desplegando Elasticsearch (esto puede tardar unos minutos)..."
kubectl apply -f 02-elasticsearch-statefulset.yaml
print_success "Manifiestos de Elasticsearch aplicados"

sleep 2

print_info "Desplegando Kibana..."
kubectl apply -f 03-kibana-deployment.yaml
print_success "Manifiestos de Kibana aplicados"

sleep 2

print_info "Desplegando CronJob de sincronización con MongoDB..."
kubectl apply -f 08-mongodb-sync-cronjob.yaml
print_success "CronJob de sincronización aplicado"

# Esperar a que los pods estén listos
print_header "Esperando a que los pods estén listos"

print_info "Esperando a que Elasticsearch esté listo..."
kubectl wait --for=condition=ready pod -l app=elasticsearch -n elk --timeout=300s
print_success "Elasticsearch está listo"

print_info "Esperando a que Kibana esté listo..."
kubectl wait --for=condition=ready pod -l app=kibana -n elk --timeout=300s
print_success "Kibana está listo"

# Mostrar estado del despliegue
print_header "Estado del Despliegue"
kubectl get all -n elk

# Obtener información de acceso a Kibana
print_header "Información de Acceso"

KIBANA_NODEPORT=$(kubectl get svc -n elk kibana -o jsonpath='{.spec.ports[0].nodePort}')
NODE_IP=$(kubectl get nodes -o jsonpath='{.items[0].status.addresses[?(@.type=="InternalIP")].address}')

print_success "Despliegue completado exitosamente"
echo ""
print_info "Para acceder a Kibana, abre tu navegador en:"
echo -e "  ${GREEN}http://${NODE_IP}:${KIBANA_NODEPORT}${NC}"
echo ""
print_info "Puedes usar cualquiera de las IPs de los nodos del clúster:"
kubectl get nodes -o custom-columns=NAME:.metadata.name,IP:.status.addresses[0].address --no-headers | while read name ip; do
    echo -e "  ${GREEN}http://${ip}:${KIBANA_NODEPORT}${NC} (nodo: $name)"
done

echo ""
print_info "El CronJob de sincronización se ejecutará cada 5 minutos"
print_info "Para ejecutar una sincronización manual, usa:"
echo "  kubectl create job -n elk manual-sync-\$(date +%s) --from=cronjob/mongodb-sync"

echo ""
print_info "Para ver los logs de los componentes:"
echo "  Elasticsearch: kubectl logs -n elk elasticsearch-0 -f"
echo "  Kibana:        kubectl logs -n elk \$(kubectl get pod -n elk -l app=kibana -o jsonpath='{.items[0].metadata.name}') -f"
echo "  Sincronización: kubectl logs -n elk \$(kubectl get pod -n elk -l app=mongodb-sync --sort-by=.metadata.creationTimestamp -o jsonpath='{.items[-1].metadata.name}')"

echo ""
print_success "¡Despliegue completado!"