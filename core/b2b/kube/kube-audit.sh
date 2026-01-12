#!/bin/bash

# Script para auditar un clúster de Kubernetes

# Colores para los mensajes
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Directorio de salida para los resultados
OUTPUT_DIR="/Users/santale/ka0s-klaus/ka0s/audit/kube"

# Crear el directorio de salida si no existe
mkdir -p "$OUTPUT_DIR"

# Función para ejecutar comandos, registrar la salida y mostrar el estado
execute_command() {
    local command_to_run="$1"
    local output_file="$2"
    
    echo -n "Ejecutando: $command_to_run... "
    
    # Ejecutar el comando y redirigir la salida estándar y de error al fichero
    if eval "$command_to_run" > "$output_file" 2>&1; then
        echo -e "[${GREEN}OK${NC}] - Resultados guardados en $output_file"
    else
        echo -e "[${RED}ERROR${NC}] - Revisa el fichero $output_file para más detalles."
    fi
}

# --- Información General del Clúster ---
echo -e "\n${BLUE}### Obteniendo Información General del Clúster... ###${NC}"
execute_command "kubectl cluster-info" "$OUTPUT_DIR/cluster-info.txt"
execute_command "kubectl get nodes -o wide" "$OUTPUT_DIR/nodes.txt"
execute_command "kubectl get namespaces" "$OUTPUT_DIR/namespaces.txt"
execute_command "kubectl api-resources" "$OUTPUT_DIR/api-resources.txt"
execute_command "kubectl get componentstatuses" "$OUTPUT_DIR/componentstatuses.txt"

# Obtener todos los namespaces para iterar sobre ellos
NAMESPACES=$(kubectl get namespaces -o jsonpath='{.items[*].metadata.name}')

# --- Cargas de Trabajo (Workloads) ---
echo -e "\n${BLUE}### Obteniendo Información de Workloads por Namespace... ###${NC}"
for ns in $NAMESPACES; do
    echo -e "\n${BLUE}--- Namespace: $ns ---${NC}"
    NS_DIR="$OUTPUT_DIR/$ns"
    mkdir -p "$NS_DIR"
    execute_command "kubectl get pods -n $ns -o wide" "$NS_DIR/pods.txt"
    execute_command "kubectl get deployments -n $ns -o wide" "$NS_DIR/deployments.txt"
    execute_command "kubectl get statefulsets -n $ns -o wide" "$NS_DIR/statefulsets.txt"
    execute_command "kubectl get daemonsets -n $ns -o wide" "$NS_DIR/daemonsets.txt"
    execute_command "kubectl get jobs -n $ns -o wide" "$NS_DIR/jobs.txt"
    execute_command "kubectl get cronjobs -n $ns -o wide" "$NS_DIR/cronjobs.txt"
done

# --- Redes y Servicios (Networking and Services) ---
echo -e "\n${BLUE}### Obteniendo Información de Redes y Servicios por Namespace... ###${NC}"
for ns in $NAMESPACES; do
    echo -e "\n${BLUE}--- Namespace: $ns ---${NC}"
    NS_DIR="$OUTPUT_DIR/$ns"
    execute_command "kubectl get services -n $ns -o wide" "$NS_DIR/services.txt"
    execute_command "kubectl get ingresses -n $ns" "$NS_DIR/ingresses.txt"
    execute_command "kubectl get networkpolicies -n $ns" "$NS_DIR/networkpolicies.txt"
done

# --- Configuración y Almacenamiento (Config & Storage) ---
echo -e "\n${BLUE}### Obteniendo Información de Configuración y Almacenamiento... ###${NC}"
execute_command "kubectl get persistentvolumes" "$OUTPUT_DIR/persistentvolumes.txt"
execute_command "kubectl get storageclasses" "$OUTPUT_DIR/storageclasses.txt"
for ns in $NAMESPACES; do
    echo -e "\n${BLUE}--- Namespace: $ns ---${NC}"
    NS_DIR="$OUTPUT_DIR/$ns"
    execute_command "kubectl get configmaps -n $ns" "$NS_DIR/configmaps.txt"
    execute_command "kubectl get secrets -n $ns" "$NS_DIR/secrets.txt"
    execute_command "kubectl get persistentvolumeclaims -n $ns" "$NS_DIR/persistentvolumeclaims.txt"
done

# --- RBAC (Role-Based Access Control) ---
echo -e "\n${BLUE}### Obteniendo Información de RBAC... ###${NC}"
execute_command "kubectl get roles --all-namespaces" "$OUTPUT_DIR/roles.txt"
execute_command "kubectl get clusterroles" "$OUTPUT_DIR/clusterroles.txt"
execute_command "kubectl get rolebindings --all-namespaces" "$OUTPUT_DIR/rolebindings.txt"
execute_command "kubectl get clusterrolebindings" "$OUTPUT_DIR/clusterrolebindings.txt"
execute_command "kubectl get serviceaccounts --all-namespaces" "$OUTPUT_DIR/serviceaccounts.txt"

# --- Validación de Manifiestos Locales ---
echo -e "\n${BLUE}### Validando manifiestos locales en /Users/santale/ka0s-klaus/ka0s/core/b2b/kube... ###${NC}"
MANIFEST_DIR="/Users/santale/ka0s-klaus/ka0s/core/b2b/kube"
if [ -d "$MANIFEST_DIR" ] && [ -n "$(ls -A $MANIFEST_DIR/*.{yaml,yml} 2>/dev/null)" ]; then
    for file in "$MANIFEST_DIR"/*.{yaml,yml}; do
        if [ -f "$file" ]; then
            execute_command "kubectl apply -f $file --dry-run=client" "$OUTPUT_DIR/validation-$(basename "$file").txt"
        fi
    done
else
    echo -e "${YELLOW}No se encontraron manifiestos (.yaml o .yml) en $MANIFEST_DIR.${NC}"
fi

echo -e "\n${BLUE}### Auditoría de Kubernetes Completada ###${NC}"


wget https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.14.1-1_amd64.deb && sudo WAZUH_MANAGER='192.168.1.40' dpkg -i ./wazuh-agent_4.14.1-1_amd64.deb && sudo systemctl daemon-reload && sudo systemctl enable wazuh-agent && sudo systemctl start wazuh-agent