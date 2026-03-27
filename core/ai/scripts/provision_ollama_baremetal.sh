#!/bin/bash

# ==============================================================================
# Script de Provisionamiento: Ollama Bare Metal (Intel GPU)
# Regla 008: Scripting Seguro aplicado
# ==============================================================================
set -e
set -o pipefail

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}[*] Iniciando provisionamiento del servidor de IA (Ollama)...${NC}"

# 1. Verificación de permisos
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}[ERROR] Por favor, ejecuta este script como root (sudo).${NC}"
  exit 1
fi

# 2. Actualización del sistema e instalación de dependencias base
echo -e "${YELLOW}[*] Actualizando sistema e instalando dependencias (curl, pciutils)...${NC}"
apt-get update -y && apt-get upgrade -y
apt-get install -y curl pciutils clinfo

# 3. Configuración para Intel GPU (i915)
echo -e "${YELLOW}[*] Configurando soporte para Intel GPU...${NC}"
# Asegurar que el grupo render existe
if ! getent group render > /dev/null 2>&1; then
    groupadd render
fi

# Verificar si hay una GPU Intel presente
if lspci | grep -i vga | grep -i intel > /dev/null; then
    echo -e "${GREEN}[+] GPU Intel detectada.${NC}"
    # Instalar drivers de Intel de espacio de usuario (necesarios para aceleración)
    apt-get install -y intel-opencl-icd intel-level-zero-gpu
else
    echo -e "${RED}[WARNING] No se detectó una GPU Intel. Ollama usará CPU (muy lento).${NC}"
fi

# 4. Instalación de Ollama
echo -e "${YELLOW}[*] Descargando e instalando Ollama nativo...${NC}"
curl -fsSL https://ollama.com/install.sh | sh

# 5. Configuración del servicio Systemd de Ollama
echo -e "${YELLOW}[*] Configurando Ollama para escuchar en la red (0.0.0.0)...${NC}"

# Crear directorio override para systemd
mkdir -p /etc/systemd/system/ollama.service.d/

cat <<EOF > /etc/systemd/system/ollama.service.d/override.conf
[Service]
Environment="OLLAMA_HOST=0.0.0.0"
Environment="OLLAMA_KEEP_ALIVE=5m"
Environment="OLLAMA_NUM_PARALLEL=1"
EOF

# 6. Añadir el usuario de ollama a los grupos de video/render
echo -e "${YELLOW}[*] Añadiendo usuario ollama a grupos de hardware...${NC}"
usermod -a -G video ollama || true
usermod -a -G render ollama || true

# 7. Reiniciar el servicio para aplicar cambios
echo -e "${YELLOW}[*] Reiniciando servicio Ollama...${NC}"
systemctl daemon-reload
systemctl restart ollama
systemctl enable ollama

# Esperar a que el servicio levante
echo -e "${YELLOW}[*] Esperando a que el API de Ollama esté disponible...${NC}"
sleep 5
while ! curl -s http://localhost:11434/api/tags > /dev/null; do
    echo "Esperando..."
    sleep 2
done

# 8. Descarga del modelo
MODEL_NAME="llama3.2:7b"
echo -e "${YELLOW}[*] Descargando modelo: ${MODEL_NAME}... (Esto puede tardar unos minutos)${NC}"
# Usamos sudo -u ollama para asegurarnos de que se descarga en el home del usuario del servicio
ollama pull ${MODEL_NAME}

echo -e "${GREEN}[==================================================]${NC}"
echo -e "${GREEN}[✔] PROVISIONAMIENTO COMPLETADO CON ÉXITO${NC}"
echo -e "${GREEN}[==================================================]${NC}"
echo -e "El servidor de Ollama está corriendo y el modelo ${MODEL_NAME} está descargado."
echo -e "Puedes configurar AnythingLLM para que apunte a:"
echo -e "http://<IP_DE_ESTE_SERVIDOR>:11434"
