#!/bin/sh

set -e

log() { echo "$(date -u +'%Y-%m-%dT%H:%M:%SZ') - $1"; }

# --- CONFIGURACIÓN ---
export DOCKER_HOST=unix:///var/run/docker.sock
RUNNER_SERVICE_NAME=${RUNNER_SERVICE_NAME:-"kaosrunner_github-actions-runner"}
MAX_RUNNERS=${MAX_RUNNERS:-30}
LOOP_INTERVAL=${LOOP_INTERVAL:-15}

# --- LEER SECRETOS (sin cambios) ---
APP_ID=$(cat /run/secrets/github_app_id)
INSTALLATION_ID=$(cat /run/secrets/github_installation_id)
PRIVATE_KEY_PATH="/run/secrets/github_app_private_key"
REPO_FULL_NAME=$(cat /run/secrets/github_scope)

# --- LÓGICA DE AUTENTICACIÓN (sin cambios) ---
ACCESS_TOKEN=""
TOKEN_EXPIRES_AT=0
get_access_token() {
  log "Generando token de acceso..."
  now=$(date +%s); iat=$((${now} - 60)); exp=$((${now} + 540))
  header_b64=$(echo -n '{"alg":"RS256","typ":"JWT"}' | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  payload_b64=$(printf '{"iat":%s,"exp":%s,"iss":"%s"}' "${iat}" "${exp}" "${APP_ID}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  signature=$(echo -n "${header_b64}.${payload_b64}" | openssl dgst -sha256 -sign "${PRIVATE_KEY_PATH}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  JWT="${header_b64}.${payload_b64}.${signature}"
  token_response=$(curl -s -X POST -H "Authorization: Bearer ${JWT}" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens" )
  ACCESS_TOKEN=$(echo "${token_response}" | jq -r .token)
  expires_at_str=$(echo "${token_response}" | jq -r .expires_at)
  if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then log "ERROR al obtener token: ${token_response}"; return 1; fi
  TOKEN_EXPIRES_AT=$(date -d "${expires_at_str}" +%s)
  log "Token obtenido con éxito."
  return 0
}

# --- BUCLE PRINCIPAL ---
log "Iniciando manager para el repositorio: ${REPO_FULL_NAME}..."
API_URL_RUNS="https://api.github.com/repos/${REPO_FULL_NAME}/actions/runs"

while true; do
  now=$(date +%s )
  if [ -z "$ACCESS_TOKEN" ] || [ "$now" -ge "$((TOKEN_EXPIRES_AT - 300))" ]; then
    if ! get_access_token; then log "Fallo al refrescar token, reintentando..."; sleep 60; continue; fi
  fi

  AUTH_HEADER="Authorization: Bearer ${ACCESS_TOKEN}"
  
  response=$(curl -s -H "${AUTH_HEADER}" -H "Accept: application/vnd.github.v3+json" "${API_URL_RUNS}?status=queued")
  queued_jobs=$(echo "$response" | jq '.total_count // 0')
  log "Trabajos en cola detectados: ${queued_jobs}"

  active_runners_raw=$(docker service ls --filter "name=${RUNNER_SERVICE_NAME}" --format "{{.Replicas}}" || echo "0/0")
  active_runners=$(echo "${active_runners_raw}" | cut -d'/' -f1); active_runners=${active_runners:-0}
  log "Runners activos en Swarm: ${active_runners}"

  needed_runners=$((queued_jobs))
  if [ "$needed_runners" -gt "$MAX_RUNNERS" ]; then needed_runners=$MAX_RUNNERS; fi

  if [ "$needed_runners" -gt "$active_runners" ]; then
    log "Escalando hacia arriba: ${active_runners} -> ${needed_runners} réplicas..."
    # --- ¡CAMBIO CLAVE! ---
    # Usamos un solo comando 'update' para escalar y añadir la variable de entorno
    docker service update --replicas "${needed_runners}" --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}"
  elif [ "$needed_runners" -lt "$active_runners" ]; then
    log "Escalando hacia abajo: ${active_runners} -> ${needed_runners} réplicas..."
    docker service update --replicas "${needed_runners}" --env-rm "GITHUB_TOKEN" "${RUNNER_SERVICE_NAME}"
  else
    log "No se necesita ajuste de escala."
  fi

  sleep "${LOOP_INTERVAL}"
done
