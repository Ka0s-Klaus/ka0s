#!/bin/bash

# Configuración segura de OpenSSH Server
# Autor: [Bil]
# Fecha: [2025-06]

# 1. Cambiar puerto SSH
echo "Cambiando puerto SSH a 1712..."
sudo sed -i 's/#Port 22/Port 1712/' /etc/ssh/sshd_config

# 2. Deshabilitar autenticación por contraseña
echo "Deshabilitando autenticación por contraseña..."
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config

# 3. Configurar permisos de archivos claves
echo "Aplicando permisos seguros..."
sudo chmod 700 /etc/ssh/sshd_config
sudo chmod 600 /etc/ssh/ssh_host_*_key

# 4. Configurar autenticación por clave pública
echo "Habilitando autenticación por clave..."
sudo sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config

# 5. Crear directorio .ssh si no existe
echo "Configurando directorio .ssh..."
sudo chmod 700 ~/.ssh
sudo chmod 600 ~/.ssh/authorized_keys

# 7. Reiniciar servicio SSH
echo "Reiniciando servicio SSH..."
sudo systemctl restart sshd

# Verificación final
echo "Verificando configuración:"
sshd -T | grep -E 'port|passwordauthentication'

/home/kaos/.ssh