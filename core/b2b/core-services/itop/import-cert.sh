#!/bin/bash
# Script para crear el secreto TLS para iTop
# Soporta:
# 1. Archivos separados (.crt y .key) - Normaliza a PEM
# 2. Archivos contenedores (.pfx)

if [ "$#" -lt 1 ]; then
    echo "Uso:"
    echo "  Opción A (Archivos separados): $0 <archivo1> <archivo2>"
    echo "  Opción B (Archivo PFX):        $0 <archivo.pfx>"
    exit 1
fi

# Comprobar si openssl está instalado (necesario para todo)
if ! command -v openssl &> /dev/null; then
    echo "❌ Error: openssl no está instalado y es necesario para procesar certificados."
    exit 1
fi

FILE1=$1
FILE2=$2
CRT_FILE=""
KEY_FILE=""

# Crear directorio temporal siempre para asegurar formato PEM limpio
TEMP_DIR=$(mktemp -d)
IS_TEMP=true
FINAL_CRT="$TEMP_DIR/tls.crt"
FINAL_KEY="$TEMP_DIR/tls.key"

# Función para convertir/validar a PEM
normalize_to_pem() {
    local in_file=$1
    local out_file=$2
    local type=$3 # "cert" or "key"

    if [ ! -f "$in_file" ]; then
        echo "❌ Error: Archivo no encontrado: $in_file"
        return 1
    fi

    if [ "$type" == "cert" ]; then
        # Intenta leer como PEM (si ya es PEM, esto funciona)
        if openssl x509 -in "$in_file" -noout 2>/dev/null; then
            cat "$in_file" > "$out_file"
        # Si falla, intenta como DER
        elif openssl x509 -in "$in_file" -inform DER -out "$out_file" 2>/dev/null; then
            echo "ℹ️  Convertido certificado DER a PEM."
        # Si falla, intenta pkcs7
        elif openssl pkcs7 -print_certs -in "$in_file" -out "$out_file" 2>/dev/null; then
             echo "ℹ️  Convertido certificado PKCS7 a PEM."
        else
            echo "❌ Error: No se pudo leer el certificado $in_file. Formato desconocido."
            return 1
        fi
    elif [ "$type" == "key" ]; then
        # Intenta leer como PEM
        if openssl rsa -in "$in_file" -check -noout 2>/dev/null || openssl pkey -in "$in_file" -check -noout 2>/dev/null; then
             cat "$in_file" > "$out_file"
        # Si falla, intenta DER
        elif openssl rsa -in "$in_file" -inform DER -out "$out_file" 2>/dev/null; then
             echo "ℹ️  Convertida clave privada DER a PEM."
        else
             echo "❌ Error: No se pudo leer la clave privada $in_file."
             return 1
        fi
    fi
}


# --- LÓGICA PARA ARCHIVO PFX ---
if [[ "$FILE1" == *.pfx ]]; then
    if [ ! -f "$FILE1" ]; then
        echo "Error: El archivo $FILE1 no existe."
        rm -rf "$TEMP_DIR"
        exit 1
    fi
    
    echo "📦 Detectado archivo PFX: $FILE1"
    echo "⚠️  Se requerirá la contraseña del archivo PFX para extraer las claves."
    
    # Extraer Clave Privada
    echo "🔓 Extrayendo Clave Privada..."
    openssl pkcs12 -in "$FILE1" -nocerts -out "$FINAL_KEY" -nodes
    if [ $? -ne 0 ]; then
        echo "❌ Error extrayendo la clave privada. Verifica la contraseña."
        rm -rf "$TEMP_DIR"
        exit 1
    fi
    
    # Extraer Certificado
    echo "📜 Extrayendo Certificado..."
    openssl pkcs12 -in "$FILE1" -clcerts -nokeys -out "$FINAL_CRT"
    if [ $? -ne 0 ]; then
        echo "❌ Error extrayendo el certificado."
        rm -rf "$TEMP_DIR"
        exit 1
    fi

# --- LÓGICA PARA ARCHIVOS SEPARADOS ---
else
    if [ -z "$FILE2" ]; then
        echo "Error: Para archivos separados debes proporcionar certificado y clave."
        rm -rf "$TEMP_DIR"
        exit 1
    fi

    # Identificación básica por extensión para decidir orden
    INPUT_CRT=""
    INPUT_KEY=""

    # Función auxiliar para adivinar tipo
    guess_type() {
        local file=$1
        if grep -q "BEGIN CERTIFICATE" "$file" 2>/dev/null; then echo "CERT"; return; fi
        if grep -q "PRIVATE KEY" "$file" 2>/dev/null; then echo "KEY"; return; fi
        if [[ "$file" == *.crt ]] || [[ "$file" == *.cer ]] || [[ "$file" == *.pem ]]; then echo "CERT"; return; fi
        if [[ "$file" == *.key ]]; then echo "KEY"; return; fi
        echo "UNKNOWN"
    }

    TYPE1=$(guess_type "$FILE1")
    TYPE2=$(guess_type "$FILE2")

    if [ "$TYPE1" == "CERT" ]; then INPUT_CRT="$FILE1"; elif [ "$TYPE1" == "KEY" ]; then INPUT_KEY="$FILE1"; fi
    if [ "$TYPE2" == "CERT" ]; then INPUT_CRT="$FILE2"; elif [ "$TYPE2" == "KEY" ]; then INPUT_KEY="$FILE2"; fi

    # Si no se detectó, asumir orden CRT KEY por convención o argumentos
    if [ -z "$INPUT_CRT" ] && [ -z "$INPUT_KEY" ]; then
         INPUT_CRT=$1
         INPUT_KEY=$2
    elif [ -z "$INPUT_CRT" ]; then
         # Si tenemos KEY pero no CRT, el otro debe ser CRT
         if [ "$INPUT_KEY" == "$FILE1" ]; then INPUT_CRT="$FILE2"; else INPUT_CRT="$FILE1"; fi
    elif [ -z "$INPUT_KEY" ]; then
         # Si tenemos CRT pero no KEY, el otro debe ser KEY
         if [ "$INPUT_CRT" == "$FILE1" ]; then INPUT_KEY="$FILE2"; else INPUT_KEY="$FILE1"; fi
    fi

    echo "🔍 Identificado:"
    echo "  - Input Certificado: $INPUT_CRT"
    echo "  - Input Clave:       $INPUT_KEY"

    # Normalizar Certificado
    normalize_to_pem "$INPUT_CRT" "$FINAL_CRT" "cert"
    if [ $? -ne 0 ]; then rm -rf "$TEMP_DIR"; exit 1; fi

    # Normalizar Clave
    normalize_to_pem "$INPUT_KEY" "$FINAL_KEY" "key"
    if [ $? -ne 0 ]; then rm -rf "$TEMP_DIR"; exit 1; fi
fi

# --- VALIDACIONES FINALES ---
if [ ! -s "$FINAL_CRT" ] || [ ! -s "$FINAL_KEY" ]; then
    echo "❌ Error: Archivos PEM generados vacíos o inválidos."
    rm -rf "$TEMP_DIR"
    exit 1
fi

echo "✅ Archivos PEM preparados en $TEMP_DIR"

echo "Creando secreto TLS 'itop-tls-secret' en el namespace 'itop'..."
kubectl create secret tls itop-tls-secret \
    --cert="$FINAL_CRT" \
    --key="$FINAL_KEY" \
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
