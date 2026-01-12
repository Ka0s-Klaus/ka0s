#!/bin/bash

# Script para verificar las credenciales de la GitHub App y los permisos.

# --- Configuración ---
# Reemplaza estos valores con los tuyos
APP_ID="1972621"
INSTALLATION_ID="103064135"
PRIVATE_KEY_FILE="private-key.pem"
ORG_NAME="Ka0s-Klaus"

# --- Script ---

# Comprobar si jq está instalado
if ! command -v jq &> /dev/null
then
    echo "Error: 'jq' no está instalado. Por favor, instálalo para continuar (ej. 'brew install jq' en macOS)."
    exit 1
fi

# Comprobar si el fichero de la clave privada existe
if [ ! -f "$PRIVATE_KEY_FILE" ]; then
    echo "Error: El fichero de la clave privada '$PRIVATE_KEY_FILE' no se ha encontrado."
    exit 1
fi

echo "Paso 1: Generando el JWT..."

HEADER=$(echo -n '{"alg":"RS256","typ":"JWT"}' | base64 | tr -d '\n' | sed 's/\+/-/g' | sed 's/\//_/g' | sed 's/=//g')

NOW=$(date +%s)
IAT=$(($NOW - 60))
EXP=$(($NOW + 600))

PAYLOAD=$(echo -n "{\"iat\":$IAT,\"exp\":$EXP,\"iss\":\"$APP_ID\"}" | base64 | tr -d '\n' | sed 's/\+/-/g' | sed 's/\//_/g' | sed 's/=//g')

SIGNATURE=$(openssl dgst -sha256 -sign "$PRIVATE_KEY_FILE" <(echo -n "$HEADER.$PAYLOAD") | base64 | tr -d '\n' | sed 's/\+/-/g' | sed 's/\//_/g' | sed 's/=//g')

JWT="$HEADER.$PAYLOAD.$SIGNATURE"

echo "JWT generado con éxito."

echo "\nPaso 2: Obteniendo el token de instalación..."

INSTALLATION_TOKEN_RESPONSE=$(curl -s -X POST \
  -H "Authorization: Bearer $JWT" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/app/installations/$INSTALLATION_ID/access_tokens")

INSTALLATION_TOKEN=$(echo "$INSTALLATION_TOKEN_RESPONSE" | jq -r .token)

if [ "$INSTALLATION_TOKEN" == "null" ] || [ -z "$INSTALLATION_TOKEN" ]; then
  echo "ERROR: No se pudo obtener el token de instalación."
  echo "Respuesta de la API:"
  echo "$INSTALLATION_TOKEN_RESPONSE"
  exit 1
fi

echo "Token de instalación obtenido con éxito."

echo "\nPaso 3: Solicitando un token de registro de runner..."

RUNNER_TOKEN_RESPONSE=$(curl -s -X POST \
  -H "Authorization: Bearer $INSTALLATION_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/orgs/$ORG_NAME/actions/runners/registration-token")

RUNNER_TOKEN=$(echo "$RUNNER_TOKEN_RESPONSE" | jq -r .token)

if [ "$RUNNER_TOKEN" == "null" ] || [ -z "$RUNNER_TOKEN" ]; then
  echo "ERROR: No se pudo obtener el token de registro del runner (HTTP 401 o similar)."
  echo "Respuesta de la API:"
  echo "$RUNNER_TOKEN_RESPONSE"
  echo "\nCausa probable: La GitHub App no tiene los permisos de 'Administration' (Read & Write) a nivel de organización o la instalación no ha aceptado los nuevos permisos."
  exit 1
fi

echo "\n¡ÉXITO! Se ha obtenido un token de registro de runner correctamente."
echo "Token: $RUNNER_TOKEN"
echo "\nEsto confirma que tus credenciales (APP_ID, INSTALLATION_ID, Clave Privada) y los permisos de la App son correctos."