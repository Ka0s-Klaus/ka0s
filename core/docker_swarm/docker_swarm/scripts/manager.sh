#!/bin/sh
set -e
log() { echo "$(date +'%Y-%m-%dT%H:%M:%SZ') - $1"; }

alert() {
  printf "%s - \033[0;31m%s\033[0m\n" "$(date +'%Y-%m-%dT%H:%M:%S%z')" "$1"
}
log_error() {
  echo "$(date +'%Y-%m-%dT%H:%M:%S%z') - $1" >> /tmp/manager_error.log
}
validate_json() {
  echo "$1" | jq empty 2>/dev/null
}
get_api_response() {
  local url="$1"
  local header="$2"
  local max_retries=3
  local attempt=1
  local response
  while [ $attempt -le $max_retries ]; do
    response=$(curl -s -H "$header" -H "Accept: application/vnd.github.v3+json" "$url")
    response_clean=$(echo "$response" | tr -d '\000-\037' | iconv -c -t UTF-8)
    if validate_json "$response_clean"; then
      echo "$response_clean"
      return 0
    else
      log_error "API response invalid JSON (attempt $attempt): $response_clean"
      if echo "$response_clean" | grep -q '<html'; then
        alert "ERROR: API returned HTML (possible rate limit or auth issue)"
        log_error "API returned HTML: $response_clean"
        sleep 60
      else
        alert "ERROR: Invalid JSON from API (attempt $attempt)"
        sleep 10
      fi
    fi
    attempt=$((attempt + 1))
  done
  alert "ERROR: Persistent API response error after $max_retries attempts."
  log_error "Persistent API response error: $response_clean"
  return 1
}
# --- CONFIGURACIÓN ---
log "Paso 1: Configuración inicial"
export DOCKER_HOST=unix:///var/run/docker.sock
RUNNER_SERVICE_NAME=${RUNNER_SERVICE_NAME:-"kaosrunner_github-actions-runner"}
MAX_RUNNERS=${MAX_RUNNERS}
LOOP_INTERVAL=${LOOP_INTERVAL}
CICLOS_MAX=${CICLOS}
CICLOS_LAPSED=0
# --- LEER SECRETOS ---
log "Paso 2: Lectura de secretos de GitHub App"
APP_ID=$(cat /run/secrets/github_app_id)
INSTALLATION_ID=$(cat /run/secrets/github_installation_id)
PRIVATE_KEY_PATH="/run/secrets/github_app_private_key"
REPO_FULL_NAME=$(cat /run/secrets/github_scope)
ORG_FULL_NAME=$(cat /run/secrets/github_scope_org)
# --- AUTENTICACIÓN ---
log "Paso 3: Preparación de autenticación y tokens"
ACCESS_TOKEN=""
TOKEN_EXPIRES_AT=0
log "----------------------------------------"
log "Iniciamos el Manager..."
log "----------------------------------------"
get_access_token() {
  log "Paso 4: Generando token de acceso"
  log "----------------------------------------"
  log "Generando token de acceso..."
  log "----------------------------------------"
  now=$(date +%s); iat=$((${now} - 60)); exp=$((${now} + 540))
  header_b64=$(echo -n '{"alg":"RS256","typ":"JWT"}' | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  payload_b64=$(printf '{"iat":%s,"exp":%s,"iss":"%s"}' "${iat}" "${exp}" "${APP_ID}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  signature=$(echo -n "${header_b64}.${payload_b64}" | openssl dgst -sha256 -sign "${PRIVATE_KEY_PATH}" | openssl base64 -e -A | tr '+/' '-_' | tr -d '=')
  JWT="${header_b64}.${payload_b64}.${signature}"
  token_response=$(curl -s -X POST -H "Authorization: Bearer ${JWT}" -H "Accept: application/vnd.github+json" "https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens")
  token_response_clean=$(echo "$token_response" | tr -d '\000-\037' | iconv -c -t UTF-8)
  if ! validate_json "$token_response_clean"; then
    alert "ERROR: Respuesta inválida al obtener token de instalación"
    log_error "Token install error: $token_response_clean"
    return 1
  fi
  temp_token=$(echo "$token_response_clean" | jq -r .token)
  registration_response=$(curl -s -X POST \
    -H "Authorization: Bearer ${temp_token}" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/orgs/${ORG_FULL_NAME}/actions/runners/registration-token")
  registration_response_clean=$(echo "$registration_response" | tr -d '\000-\037' | iconv -c -t UTF-8)
  if ! validate_json "$registration_response_clean"; then
    alert "ERROR: Respuesta inválida al obtener token de registro"
    log_error "Token registration error: $registration_response_clean"
    return 1
  fi
  ACCESS_TOKEN=$(echo "$registration_response_clean" | jq -r .token)
  if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then 
    alert "ERROR al obtener token de registro"
    log_error "Token registration missing: $registration_response_clean"
    return 1
  fi
  TOKEN_EXPIRES_AT=$((now + 3600))
  log "Token de registro obtenido con éxito."
  update_runner_token
  log "Token de registro actualizado con éxito."
  return 0
}
update_runner_token() {
  log "Paso 5: Actualizando token en el servicio Docker"
  docker service update --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "${RUNNER_SERVICE_NAME}" || true
  log "Se ha actualizado el GITHUB_TOKEN, ${ACCESS_TOKEN} ..."
}
log "Paso 6: Definiendo funciones de estado de runners"
get_active_runner_status() {
  docker service ps "$RUNNER_SERVICE_NAME" --filter "desired-state=running" --format "{{.ID}} {{.CurrentState}}" | grep -E "Running|Ready" | wc -l
}
get_idle_runners() {
  docker service ps "$RUNNER_SERVICE_NAME" --filter "desired-state=running" --format "{{.ID}} {{.CurrentState}}" | grep "Ready" | wc -l
}
log "Paso 7: Iniciando bucle principal del manager para el repositorio: ${REPO_FULL_NAME}"
API_URL_RUNS="https://api.github.com/repos/${REPO_FULL_NAME}/actions/runs"
while true; do
  log "Paso 8: Comprobando y renovando tokens si es necesario"
  now=$(date +%s)
  if [ -z "$ACCESS_TOKEN" ] || [ "$now" -ge "$((TOKEN_EXPIRES_AT - 300))" ]; then
    if ! get_access_token; then
      alert "Fallo al refrescar token, reintentando..."
      sleep 60
      continue
    fi
    update_runner_token
    CICLOS_LAPSED=0
  fi
  AUTH_HEADER="Authorization: Bearer ${temp_token}"
  log "Paso 9: Consultando trabajos en cola y en progreso"
  response=$(get_api_response "$API_URL_RUNS?status=queued" "$AUTH_HEADER")
  if [ $? -ne 0 ]; then
    alert "ERROR: No se pudo obtener trabajos en cola."
    sleep 60
    continue
  fi
  queued_jobs=$(echo "$response" | jq '.total_count // 0')
  response_in=$(get_api_response "$API_URL_RUNS?status=in_progress" "$AUTH_HEADER")
  if [ $? -ne 0 ]; then
    alert "ERROR: No se pudo obtener trabajos en progreso."
    sleep 60
    continue
  fi
  active_jobs=$(echo "$response_in" | jq '.total_count // 0')
  active_runners=$(get_active_runner_status)
  idle_runners=$(get_idle_runners)
  needed_runners=$((queued_jobs + active_jobs))
  log "Paso 10: Escalando o desescalando runners si corresponde"
  if [ "$CICLOS_LAPSED" -eq "$CICLOS_MAX" ]; then
    if [ "$queued_jobs" -gt 0 ] && [ "$idle_runners" -eq 0 ]; then
      log "Escalando runners..."
      docker service update --replicas "$needed_runners" --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "$RUNNER_SERVICE_NAME"
      log "Escalados $needed_runners runners ..."
    fi
    if [ "$queued_jobs" -eq 0 ] && [ "$active_jobs" -eq 0 ] && [ "$idle_runners" -gt 0 ]; then
      log "Desescalando runners..."
      docker service update --replicas 0 --env-add "GITHUB_TOKEN=${ACCESS_TOKEN}" "$RUNNER_SERVICE_NAME"
      log "Desescalamos $idle_runners runners ..."
    fi
    CICLOS_LAPSED=0
    log "Reiniciamos los CICLOS_LAPSED..."
  fi
  log "Paso 11: Estado actual de runners y trabajos"
  log "Runners Activos: $active_runners"
  log "Runners Libres: $idle_runners"
  log "En cola detectados: $queued_jobs"
  log "En Progreso: $active_jobs"
  log "Escalado + / - : $needed_runners"
  log "Tiempo de espera siguiente comprobación: ${LOOP_INTERVAL}seg"
  log "Ciclos Máximo ${CICLOS_MAX} ..."
  log "Ciclos Transcurridos ${CICLOS_LAPSED} ..."
  sleep "${LOOP_INTERVAL}"
  CICLOS_LAPSED=$((CICLOS_LAPSED + 1))
done