# Documentación Técnica - Configuración LVM

## Objetivo
Automatizar la creación de:
- Volúmenes físicos
- Grupos de volúmenes
- Volúmenes lógicos especificados
- Montaje automático en /etc/fstab

## Requisitos Previos
- Disco no particionado (ej: /dev/sda)
- Paquete `lvm2` instalado
- Permisos de sudo

## Uso
```bash
sudo ./create_lvm.sh [disco]