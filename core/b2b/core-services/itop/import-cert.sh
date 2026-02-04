#!/bin/bash
# Script para crear el secreto TLS para iTop
# Soporta:
# 1. Archivos separados (.crt y .key)
# 2. Archivos contenedores (.pfx)

if [ "$#" -lt 1 ]; then
    echo "Uso:"
    echo "  Opción A (Archivos separados): $0 <archivo1> <archivo2>"
    echo "  Opción B (Archivo PFX):        $0 <archivo.pfx>"
    exit 1
fi

FILE1=$1
FILE2=$2
CRT_FILE=""
KEY_FILE=""
IS_TEMP=false
TEMP_DIR=""

# --- LÓGICA PARA ARCHIVO PFX ---
if [[ "$FILE1" == *.pfx ]]; then
    if [ ! -f "$FILE1" ]; then
        echo "Error: El archivo $FILE1 no existe."
        exit 1
    fi
    
    echo "📦 Detectado archivo PFX: $FILE1"
    echo "⚠️  Se requerirá la contraseña del archivo PFX para extraer las claves."
    
    # Comprobar si openssl está instalado
    if ! command -v openssl &> /dev/null; then
        echo "❌ Error: openssl no está instalado y es necesario para procesar archivos .pfx"
        exit 1
    fi

    TEMP_DIR=$(mktemp -d)
    IS_TEMP=true
    
    # Extraer Clave Privada
    echo "🔓 Extrayendo Clave Privada..."
    openssl pkcs12 -in "$FILE1" -nocerts -out "$TEMP_DIR/tls.key" -nodes
    if [ $? -ne 0 ]; then
        echo "❌ Error extrayendo la clave privada. Verifica la contraseña."
        rm -rf "$TEMP_DIR"
        exit 1
    fi
    
    # Extraer Certificado
    echo "📜 Extrayendo Certificado..."
    openssl pkcs12 -in "$FILE1" -clcerts -nokeys -out "$TEMP_DIR/tls.crt"
    if [ $? -ne 0 ]; then
        echo "❌ Error extrayendo el certificado."
        rm -rf "$TEMP_DIR"
        exit 1
    fi
    
    CRT_FILE="$TEMP_DIR/tls.crt"
    KEY_FILE="$TEMP_DIR/tls.key"

# --- LÓGICA PARA ARCHIVOS SEPARADOS ---
else
    if [ -z "$FILE2" ]; then
        echo "Error: Para archivos separados debes proporcionar certificado y clave."
        exit 1
    fi

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
            # Fallback por extensión
            if [[ "$file" == *.crt ]] || [[ "$file" == *.cer ]] || [[ "$file" == *.pem ]]; then
                 echo "CERT"
            elif [[ "$file" == *.key ]]; then
                 echo "KEY"
            else
                 echo "UNKNOWN"
            fi
        fi
    }

    TYPE1=$(identify_file "$FILE1")
    TYPE2=$(identify_file "$FILE2")

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
fi

# --- VALIDACIONES COMUNES ---
if [ -z "$CRT_FILE" ]; then
    echo "❌ Error: No se encontró un certificado válido."
    [ "$IS_TEMP" = true ] && rm -rf "$TEMP_DIR"
    exit 1
fi

if [ -z "$KEY_FILE" ]; then
    echo "❌ Error: No se encontró una clave privada válida."
    [ "$IS_TEMP" = true ] && rm -rf "$TEMP_DIR"
    exit 1
fi

echo "✅ Archivos listos:"
echo "  - Certificado: $CRT_FILE"
echo "  - Clave Privada: $KEY_FILE"

echo "Creando secreto TLS 'itop-tls-secret' en el namespace 'itop'..."
kubectl create secret tls itop-tls-secret \
    --cert="$CRT_FILE" \
    --key="$KEY_FILE" \
    --namespace=itop \
    --dry-run=client -o yaml | kubectl apply -f -

EXIT_CODE=$?

# Limpieza
if [ "$IS_TEMP" = true ]; then
    echo "🧹 Limpiando archivos temporales..."
    rm -rf "$TEMP_DIR"
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ Secreto creado/actualizado correctamente."
    echo "Reiniciando Ingress (si es necesario) para aplicar cambios..."
    kubectl get ingress -n itop
else
    echo "❌ Error al crear el secreto en Kubernetes."
    exit 1
fi
