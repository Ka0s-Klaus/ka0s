#!/bin/bash

# Despliegue seguro de Docker para usuario kaos
# Autor: [Bil]

echo "[$(date)] Iniciando configuración de Docker"

# 1. Instalar dependencias
sudo apt-get update
echo "Instalando paquetes base..."
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 2. Agregar repositorio oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 3. Instalar Docker CE
sudo apt-get update
echo "Instalando Docker Engine..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# 4. Configurar usuario kaos
echo "Habilitando permisos para usuario kaos..."
sudo usermod -aG docker kaos
sudo chmod 660 /var/run/docker.sock

# 5. Configurar demonio Docker
echo "Creando configuración del demonio..."
sudo tee /etc/docker/daemon.json <<EOF
{
  "live-restore": true,
  "group": "docker",
  "storage-driver": "overlay2"
}
EOF

# 6. Habilitar servicio
echo "Iniciando servicios..."
sudo systemctl enable docker
sudo systemctl restart docker

# 7. Verificación final
echo "Verificando instalación:"
sudo docker run --rm hello-world

echo "[$(date)] Configuración completada. Usuario kaos puede ejecutar comandos docker"