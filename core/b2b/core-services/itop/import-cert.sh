#!/bin/bash
# Script para crear el secreto TLS para iTop
# Uso: ./import-cert.sh <ruta-al-certificado> <ruta-a-la-clave-privada>

if [ "$#" -ne 2 ]; then
    echo "Uso: $0 <ruta-al-crt> <ruta-al-key>"
    echo "Ejemplo: $0 certs/itsm.ka0s.io.crt certs/itsm.ka0s.io.key"
    exit 1
fi

CRT_FILE=$1
KEY_FILE=$2

if [ ! -f "$CRT_FILE" ]; then
    echo "Error: No se encuentra el archivo de certificado: $CRT_FILE"
    exit 1
fi

if [ ! -f "$KEY_FILE" ]; then
    echo "Error: No se encuentra el archivo de clave privada: $KEY_FILE"
    exit 1
fi

echo "Creando secreto TLS 'itop-tls-secret' en el namespace 'itop'..."
kubectl create secret tls itop-tls-secret \
    --cert="$CRT_FILE" \
    --key="$KEY_FILE" \
    --namespace=itop \
    --dry-run=client -o yaml | kubectl apply -f -

echo "✅ Secreto creado/actualizado correctamente."
echo "Reiniciando Ingress (si es necesario) para aplicar cambios..."
# A veces Nginx tarda en recargar, pero el secreto se monta automáticamente.
kubectl get ingress -n itop
