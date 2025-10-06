#!/bin/sh

set -e

log() { echo "$(date -u +'%Y-%m-%dT%H:%M:%SZ') - $1"; }

# --- CONFIGURACIÓN ---
export DOCKER_HOST=unix:///var/run/docker.sock
RUNNER_SERVICE_NAME=${RUNNER_SERVICE_NAME:-"kaosrunner_github-actions-runner"}
MAX_RUNNERS=${MAX_RUNNERS}
LOOP_INTERVAL=${LOOP_INTERVAL}
CICLOS_MAX=${CICLOS}
CICLOS_LAPSED=0

# --- LEER SECRETOS (sin cambios) ---
APP_ID=$(cat /run/secrets/github_app_id)
INSTALLATION_ID=$(cat /run/secrets/github_installation_id)
PRIVATE_KEY_PATH="/run/secrets/github_app_private_key"
REPO_FULL_NAME=$(cat /run/secrets/github_scope)
ORG_FULL_NAME=$(cat /run/secrets/github_scope_org)

# --- LÓGICA DE AUTENTICACIÓN (sin cambios) ---
ACCESS_TOKEN=""
TOKEN_EXPIRES_AT=0
log "----------------------------------------"
log "Iniciamos el Manager..."
log "----------------------------------------"
# Modificamos la sección de actualización del token
get_access_token() {
  log "----------------------------------------"
  log "Generando token de acceso..."
  log "----------------------------------------"
  now=$(date +%s); iat=$((${now} - 60)); exp=$((${now} + 540))
  header_b64=$(echo -n '{"alg":"RS256","typ":"JWT"}' | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  payload_b64=$(printf '{"iat":%s,"exp":%s,"iss":"%s"}' "${iat}" "${exp}" "${APP_ID}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  signature=$(echo -n "${header_b64}.${payload_b64}" | openssl dgst -sha256 -sign "${PRIVATE_KEY_PATH}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  JWT="${header_b64}.${payload_b64}.${signature}"
  
  # Primero obtenemos el token de instalación
  token_response=$(curl -s -X POST -H "Authorization: Bearer ${JWT}" -H "Accept: application/vnd.github+json" "https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens")
  if ! echo "$token_response" | jq empty 2>/dev/null; then
    log "----------------------------------------"
    log "ERROR: Respuesta inválida al obtener token de instalación: $token_response"
    log "----------------------------------------"
    return 1
  fi
  temp_token=$(echo "$token_response" | jq -r .token)

  # Luego usamos ese token para obtener el token de registro del runner
  registration_response=$(curl -s -X POST \
    -H "Authorization: Bearer ${temp_token}" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/orgs/${ORG_FULL_NAME}/actions/runners/registration-token")
  if ! echo "$registration_response" | jq empty 2>/dev/null; then
    log "----------------------------------------"
    log "ERROR: Respuesta inválida al obtener token de registro: $registration_response"
    log "----------------------------------------"
    return 1
  fi
  ACCESS_TOKEN=$(echo "$registration_response" | jq -r .token)
  if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then 
    log "----------------------------------------"
    log "ERROR al obtener token de registro: ${registration_response}"
    log "----------------------------------------"
    return 1
  fi
  
  TOKEN_EXPIRES_AT=$((now + 3600)) # Los tokens de registro expiran en 1 hora
  log "----------------------------------------"
  log "Token de registro obtenido con éxito."
  log "-------------------------------------"
  update_runner_token
  log "----------------------------------------"
  log "Token de registro actualizado con éxito."
  log "----------------------------------------"
  return 0
}

# Eliminamos la sección de eliminación y creación del secreto
# y la reemplazamos por una actualización del servicio
update_runner_token() {
  docker service update --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}" || true
  log "----------------------------------------"
  log "Se ha actualizado el GITHUB_TOKEN, ${ACCESS_TOKEN} ..."
  log "----------------------------------------"
}

# --- BUCLE PRINCIPAL ---
log "Iniciando manager para el repositorio: ${REPO_FULL_NAME}..."
API_URL_RUNS="https://api.github.com/repos/${REPO_FULL_NAME}/actions/runs"

while true; do
  now=$(date +%s )
  if [ -z "$ACCESS_TOKEN" ] || [ "$now" -ge "$((TOKEN_EXPIRES_AT - 300))" ]; then
    if ! get_access_token; then
      log "----------------------------------------"
      log "Fallo al refrescar token, reintentando..."
      log "----------------------------------------"
      sleep 60
      continue
    fi
    update_runner_token
    CICLOS_LAPSED=0
  fi

  AUTH_HEADER="Authorization: Bearer ${temp_token}"
  # Extraemos los trabajo en cola
  response=$(curl -s -H "${AUTH_HEADER}" -H "Accept: application/vnd.github.v3+json" "${API_URL_RUNS}?status=queued")
  queued_jobs=$(echo "$response" | jq '.total_count // 0')
  #log "Trabajos en cola detectados: ${queued_jobs}"
  # Extraemos los trabajos en progreso
  response_in=$(curl -s -H "${AUTH_HEADER}" -H "Accept: application/vnd.github.v3+json" "${API_URL_RUNS}?status=in_progress")
  active_jobs=$(echo "$response_in" | jq '.total_count // 0')
  #log "Trabajos en activo: ${active_jobs}"
  # Extraemos los Runners activos en Swarm
  active_runners_raw=$(docker service ls --filter "name=${RUNNER_SERVICE_NAME}" --format "{{.Replicas}}" || echo "0/0")
  active_runners=$(echo "${active_runners_raw}" | cut -d'/' -f1); active_runners=${active_runners:-0}
  #log "Runners activos en Swarm: ${active_runners}"
  # Calculamos los runner necesarios
  needed_runners=$((queued_jobs + active_jobs - 1))
  if [ "$CICLOS_LAPSED" -eq "$CICLOS_MAX" ]; then
     # Escalado
     if [ "$queued_jobs" -gt 1 ] && [ "$active_jobs" -eq 0 ]; then
         log "------------------------------------------------------------"
         log "Escalando runners..."
         log "------------------------------------------------------------"
         docker service update --replicas "${needed_runners}" --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}"
         log "----------------------------------------"
         log "Escalados ${needed_runners} runners ..."
         log "------------------------------------------------------------"
     fi
     # Desescalado
     if [ "$queued_jobs" -eq 1 ] && [ "$active_jobs" -eq 0 ] &&  [ "$active_runners" -gt 0 ] ; then
         log "------------------------------------------------------------"
         log "Desescalando runners..."
         log "------------------------------------------------------------"
         docker service update --replicas 0 --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}"
         log "----------------------------------------"
         log "Desescalamos ${active_runners} runners ..."
         log "------------------------------------------------------------"
     fi
     CICLOS_LAPSED=0
     log "----------------------------------------"
     log "Reiniciamos los CICLOS_LAPSED..."
     log "----------------------------------------"
  fi
  
  log "------------------------------------------------------------"
  log "Runners Activos: ${active_runners}"
  log "En cola detectados: ${queued_jobs}"
  log "En Progreso: ${active_jobs}"
  log "Escalado + / - : ${needed_runners}"
  log "------------------------------------------------------------"
  log "Tiempo de espera siguiente comprobación: ${LOOP_INTERVAL}seg"
  log "------------------------------------------------------------"
  log "Ciclos Máximo ${CICLOS_MAX} ..."
  log "Ciclos Transcurridos ${CICLOS_LAPSED} ..."
  log "-------------------------------------------------------------"
  sleep "${LOOP_INTERVAL}"
  CICLOS_LAPSED=$((CICLOS_LAPSED + 1))
done