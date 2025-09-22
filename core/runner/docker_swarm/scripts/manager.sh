#!/bin/sh

set -e

log() { echo "$(date -u +'%Y-%m-%dT%H:%M:%SZ') - $1"; }

# --- CONFIGURACIÓN ---
export DOCKER_HOST=unix:///var/run/docker.sock
RUNNER_SERVICE_NAME=${RUNNER_SERVICE_NAME:-"kaosrunner_github-actions-runner"}
MAX_RUNNERS=${MAX_RUNNERS}
LOOP_INTERVAL=${LOOP_INTERVAL}

# --- LEER SECRETOS (sin cambios) ---
APP_ID=$(cat /run/secrets/github_app_id)
INSTALLATION_ID=$(cat /run/secrets/github_installation_id)
PRIVATE_KEY_PATH="/run/secrets/github_app_private_key"
REPO_FULL_NAME=$(cat /run/secrets/github_scope)

# --- LÓGICA DE AUTENTICACIÓN (sin cambios) ---
ACCESS_TOKEN=""
TOKEN_EXPIRES_AT=0
# Modificamos la sección de actualización del token
get_access_token() {
  log "Generando token de acceso..."
  now=$(date +%s); iat=$((${now} - 60)); exp=$((${now} + 540))
  header_b64=$(echo -n '{"alg":"RS256","typ":"JWT"}' | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  payload_b64=$(printf '{"iat":%s,"exp":%s,"iss":"%s"}' "${iat}" "${exp}" "${APP_ID}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  signature=$(echo -n "${header_b64}.${payload_b64}" | openssl dgst -sha256 -sign "${PRIVATE_KEY_PATH}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  JWT="${header_b64}.${payload_b64}.${signature}"
  
  # Primero obtenemos el token de instalación
  token_response=$(curl -s -X POST -H "Authorization: Bearer ${JWT}" -H "Accept: application/vnd.github+json" "https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens")
  temp_token=$(echo "${token_response}" | jq -r .token)
  
  # Añadir después de leer REPO_FULL_NAME
  ORG_NAME=$(echo "${REPO_FULL_NAME}" | cut -d'/' -f1)
  
  # Luego usamos ese token para obtener el token de registro del runner
  registration_response=$(curl -s -X POST \
    -H "Authorization: Bearer ${temp_token}" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/orgs/${ORG_NAME}/actions/runners/registration-token")
  
  ACCESS_TOKEN=$(echo "${registration_response}" | jq -r .token)
  if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then 
    log "ERROR al obtener token de registro: ${registration_response}"
    return 1
  fi
  
  TOKEN_EXPIRES_AT=$((now + 3600)) # Los tokens de registro expiran en 1 hora
  log "Token de registro obtenido con éxito."
  log "-------------------------------------"
  docker service update --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}" || true
  log "Token de runners actualizado con éxito. "
  return 0
}

# Eliminamos la sección de eliminación y creación del secreto
# y la reemplazamos por una actualización del servicio
update_runner_token() {
  docker service update --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}" || true
  log "Se ha actualizado el GITHUB_TOKEN, ${ACCESS_TOKEN} ..."
}

# --- BUCLE PRINCIPAL ---
log "Iniciando manager para el repositorio: ${REPO_FULL_NAME}..."
API_URL_RUNS="https://api.github.com/repos/${REPO_FULL_NAME}/actions/runs"

while true; do
  now=$(date +%s )
  if [ -z "$ACCESS_TOKEN" ] || [ "$now" -ge "$((TOKEN_EXPIRES_AT - 300))" ]; then
    if ! get_access_token; then
      log "Fallo al refrescar token, reintentando..."
      sleep 60
      continue
    fi
    update_runner_token
  fi

  AUTH_HEADER="Authorization: Bearer ${JWT}"
  
  response=$(curl -s -H "${AUTH_HEADER}" -H "Accept: application/vnd.github.v3+json" "${API_URL_RUNS}?status=queued")
  queued_jobs=$(echo "$response" | jq '.total_count // 0')
  log "Trabajos en cola detectados: ${queued_jobs}"

  active_runners_raw=$(docker service ls --filter "name=${RUNNER_SERVICE_NAME}" --format "{{.Replicas}}" || echo "0/0")
  active_runners=$(echo "${active_runners_raw}" | cut -d'/' -f1); active_runners=${active_runners:-0}
  log "Runners activos en Swarm: ${active_runners}"

  needed_runners=$((queued_jobs + active_runners - 1))
  if [ "$queued_jobs" -gt 1 ] && [ "$needed_runners" -gt "$active_runners" ]; then
    docker service update --replicas "${needed_runners}" --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}"
  fi
  log "Siguiente escalado/desescalado en: ${LOOP_INTERVAL}"
  sleep "${LOOP_INTERVAL}"
done