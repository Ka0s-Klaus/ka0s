#!/bin/sh
set -e
log() { echo "[$(date +'%d-%m-%Y %H:%M:%S')] - $1"; }
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
  url="$1"
  header="$2"
  max_retries=3
  attempt=1
  response=""
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
RUNNER_DEPLOYMENT_NAME=${RUNNER_DEPLOYMENT_NAME:-'github-actions-runner'}
MAX_RUNNERS=${MAX_RUNNERS}
LOOP_INTERVAL=${LOOP_INTERVAL}
CICLOS_MAX=${CICLOS}
CICLOS_LAPSED=0
# --- LEER SECRETOS ---
log "Paso 2: Lectura de secretos de GitHub App"
APP_ID=$(echo "${GITHUB_APP_ID}" | tr -d "'")
INSTALLATION_ID=$(echo "${GITHUB_INSTALLATION_ID}" | tr -d "'")
PRIVATE_KEY_PATH="/etc/github/private-key.pem"
REPO_FULL_NAME="${GITHUB_SCOPE_ORG}/${GITHUB_SCOPE}"
ORG_FULL_NAME="${GITHUB_SCOPE_ORG}"

# --- AUTENTICACIÓN ---
log "Paso 3: Preparación de autenticación y tokens"
ACCESS_TOKEN=""
INSTALLATION_TOKEN=""
TOKEN_EXPIRES_AT=0
log "----------------------------------------"
log "Iniciamos el Manager..."
log "----------------------------------------"
get_access_token() {
  log "Paso 4: Generando token de acceso"
  log "----------------------------------------"
  log "Generando token de acceso..."
  log "----------------------------------------"
  now=$(date +%s); iat=$(($now - 60)); exp=$(($now + 540))

  # Replicando la generación de JWT del script que funciona (varify-credentials.sh)
  header_b64=$(echo -n '{"alg":"RS256","typ":"JWT"}' | base64 | tr -d '\n' | sed 's!+!-!g' | sed 's!/!_!g' | sed 's!=!!g')
  payload_b64=$(echo -n "{\"iat\":$iat,\"exp\":$exp,\"iss\":$APP_ID}" | base64 | tr -d '\n' | sed 's!+!-!g' | sed 's!/!_!g' | sed 's!=!!g')
  unsigned_jwt="$header_b64.$payload_b64"
  signature=$(echo -n "$unsigned_jwt" | openssl dgst -sha256 -sign "$PRIVATE_KEY_PATH" | base64 | tr -d '\n' | sed 's!+!-!g' | sed 's!/!_!g' | sed 's!=!!g')
  JWT="$unsigned_jwt.$signature"

  log "DEBUG: JWT Generado: $JWT" # Añadido para depuración

  token_response=$(curl -s -w "HTTPSTATUS:%{http_code}" -X POST -H "Authorization: Bearer $JWT" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/app/installations/$INSTALLATION_ID/access_tokens")
  token_body=$(echo "$token_response" | sed -e 's/HTTPSTATUS:.*//g')
  token_status=$(echo "$token_response" | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')

  log "DEBUG: Respuesta de la API del token de instalación (status): $token_status" # Añadido para depuración
  log "DEBUG: Respuesta de la API del token de instalación (body): $token_body" # Añadido para depuración

  token_body_clean=$(echo "$token_body" | tr -d '\000-\037' | iconv -c -t UTF-8)
  if ! validate_json "$token_body_clean"; then
    alert "ERROR: Respuesta inválida al obtener token de instalación (HTTP $token_status)"
    log_error "Token install error ($token_status): $token_body_clean"
    if [ "$token_status" = "429" ]; then
      alert "GitHub API rate limit alcanzado, esperando 5 minutos..."
      log_error "Rate limit alcanzado, esperando 5 minutos."
      sleep 300
    fi
    return 1
  fi
  INSTALLATION_TOKEN=$(echo "$token_body_clean" | jq -r .token)
  registration_response=$(curl -s -w "HTTPSTATUS:%{http_code}" -X POST \
    -H "Authorization: Bearer $INSTALLATION_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/orgs/Ka0s-Klaus/actions/runners/registration-token")
  registration_body=$(echo "$registration_response" | sed -e 's/HTTPSTATUS:.*//g')
  registration_status=$(echo "$registration_response" | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')
  registration_body_clean=$(echo "$registration_body" | tr -d '\000-\037' | iconv -c -t UTF-8)
  if ! validate_json "$registration_body_clean"; then
    alert "ERROR: Respuesta inválida al obtener token de registro (HTTP $registration_status)"
    log_error "Token registration error ($registration_status): $registration_body_clean"
    if [ "$registration_status" = "429" ]; then
      alert "GitHub API rate limit alcanzado en registro, esperando 5 minutos..."
      log_error "Rate limit en registro, esperando 5 minutos."
      sleep 300
    fi
    return 1
  fi
  ACCESS_TOKEN=$(echo "$registration_body_clean" | jq -r .token)
  if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then 
    alert "ERROR al obtener token de registro (HTTP $registration_status)"
    log_error "Token registration missing ($registration_status): $registration_body_clean"
    return 1
  fi
  TOKEN_EXPIRES_AT=$(($now + 3600))
  log "Token de registro obtenido con éxito."
  update_runner_token
  log "Token de registro actualizado con éxito."
  return 0
}
update_runner_token() {
  log "Paso 5: Actualizando token en el deployment de Kubernetes"
  kubectl set env deployment/$RUNNER_DEPLOYMENT_NAME GITHUB_TOKEN=$ACCESS_TOKEN || true
  log "Se ha actualizado el GITHUB_TOKEN, $ACCESS_TOKEN ..."
}
log "Paso 6: Definiendo funciones de estado de runners"
get_active_runner_status() {
  kubectl get pods -l app=github-actions-runner -o json | jq '[.items[] | select(.status.phase=="Running")] | length'
}
get_idle_runners() {
  kubectl get pods -l app=github-actions-runner -o json | jq '[.items[] | select(.status.phase=="Running" and (.status.conditions[] | select(.type=="Ready" and .status=="True")))] | length'
}
log "Paso 7: Iniciando bucle principal del manager para el repositorio: $REPO_FULL_NAME"
API_URL_RUNS="https://api.github.com/repos/$REPO_FULL_NAME/actions/runs"
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
  AUTH_HEADER="Authorization: Bearer $INSTALLATION_TOKEN"
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
  needed_runners=$(($queued_jobs + $active_jobs))
  log "Paso 10: Escalando o desescalando runners si corresponde"
  if [ "$CICLOS_LAPSED" -eq "$CICLOS_MAX" ]; then
    if [ "$queued_jobs" -gt 0 ] && [ "$idle_runners" -eq 0 ]; then
      log "Escalando runners..."
      echo "$needed_runners" > /shared/replicas.txt
      log "Escalados $needed_runners runners ..."
    fi
    # --- Lógica de "drain" para runners ---
    # Antes de desescalar, espera a que no haya trabajos en progreso
    if [ "$queued_jobs" -eq 0 ] && [ "$idle_runners" -gt 0 ]; then
      while [ "$active_jobs" -gt 0 ]; do
        log "Esperando a que los jobs activos finalicen antes de desescalar runners..."
        sleep 30
        response_in=$(get_api_response "$API_URL_RUNS?status=in_progress" "$AUTH_HEADER")
        if [ $? -ne 0 ]; then
          alert "ERROR: No se pudo obtener trabajos en progreso."
          sleep 60
          continue
        fi
        active_jobs=$(echo "$response_in" | jq '.total_count // 0')
      done
      log "Desescalando runners..."
      echo "0" > /shared/replicas.txt
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
  sleep "$LOOP_INTERVAL"
  CICLOS_LAPSED=$(($CICLOS_LAPSED + 1))
done