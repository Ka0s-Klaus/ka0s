#!/bin/bash
# Script para crear el secreto TLS para iTop
# Uso: ./import-cert.sh <archivo1> <archivo2>
# El script detectará automáticamente cuál es el certificado y cuál la clave privada.

if [ "$#" -ne 2 ]; then
    echo "Uso: $0 <archivo-certificado> <archivo-clave>"
    echo "Nota: Acepta archivos .crt, .pem, .key. El orden no importa, el script verificará el contenido."
    exit 1
fi

FILE1=$1
FILE2=$2

if [ ! -f "$FILE1" ] || [ ! -f "$FILE2" ]; then
    echo "Error: Uno o ambos archivos no existen."
    exit 1
fi

# Función para identificar el tipo de archivo
identify_file() {
    local file=$1
    if grep -q "BEGIN CERTIFICATE" "$file"; then
        echo "CERT"
    elif grep -q "PRIVATE KEY" "$file"; then
        echo "KEY"
    else
        echo "UNKNOWN"
    fi
}

TYPE1=$(identify_file "$FILE1")
TYPE2=$(identify_file "$FILE2")

# Asignar variables según el tipo detectado
CRT_FILE=""
KEY_FILE=""

if [ "$TYPE1" == "CERT" ]; then
    CRT_FILE="$FILE1"
elif [ "$TYPE1" == "KEY" ]; then
    KEY_FILE="$FILE1"
fi

if [ "$TYPE2" == "CERT" ]; then
    CRT_FILE="$FILE2"
elif [ "$TYPE2" == "KEY" ]; then
    KEY_FILE="$FILE2"
fi

# Validaciones
if [ -z "$CRT_FILE" ]; then
    echo "❌ Error: No se encontró un certificado válido (debe contener 'BEGIN CERTIFICATE')."
    echo "Revisa tus archivos .pem o .crt."
    exit 1
fi

if [ -z "$KEY_FILE" ]; then
    echo "❌ Error: No se encontró una clave privada válida (debe contener 'PRIVATE KEY')."
    echo "Revisa tus archivos .pem o .key."
    exit 1
fi

echo "✅ Archivos identificados:"
echo "  - Certificado: $CRT_FILE"
echo "  - Clave Privada: $KEY_FILE"

echo "Creando secreto TLS 'itop-tls-secret' en el namespace 'itop'..."
kubectl create secret tls itop-tls-secret \
    --cert="$CRT_FILE" \
    --key="$KEY_FILE" \
    --namespace=itop \
    --dry-run=client -o yaml | kubectl apply -f -

if [ $? -eq 0 ]; then
    echo "✅ Secreto creado/actualizado correctamente."
    echo "Reiniciando Ingress (si es necesario) para aplicar cambios..."
    kubectl get ingress -n itop
else
    echo "❌ Error al crear el secreto en Kubernetes."
    exit 1
fi
