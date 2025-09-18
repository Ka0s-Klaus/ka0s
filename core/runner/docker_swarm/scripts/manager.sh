#!/bin/sh

set -e

# Función para loguear con timestamp
log() {
  echo "$(date -u +'%Y-%m-%dT%H:%M:%SZ') - $1"
}

# Verificación de variables de entorno
if [ -z "$GITHUB_PAT" ] || [ -z "$GITHUB_SCOPE" ] || [ -z "$RUNNER_SERVICE_NAME" ]; then
  log "Error: Las variables GITHUB_PAT, GITHUB_SCOPE y RUNNER_SERVICE_NAME son obligatorias."
  exit 1
fi

# API de GitHub
API_URL="https://api.github.com/repos/${GITHUB_SCOPE}/actions/runners"
AUTH_HEADER="Authorization: Bearer ${GITHUB_PAT}"
ACCEPT_HEADER="Accept: application/vnd.github.v3+json"

log "Iniciando el manager de runners para el repositorio: ${GITHUB_SCOPE}"
log "Servicio de runners a gestionar: ${RUNNER_SERVICE_NAME}"
log "Máximo de runners permitido: ${MAX_RUNNERS}"

while true; do
  # 1. Obtener el número de trabajos en cola
  # Usamos un truco: contamos los runners "offline" que tienen la etiqueta "ephemeral".
  # GitHub crea estos runners placeholder cuando un trabajo para un runner efímero es encolado.
  queued_jobs=$(curl -s -H "$AUTH_HEADER" -H "$ACCEPT_HEADER" "${API_URL}?ephemeral=true" | jq '.runners[] | select(.status == "offline" and .busy == false )' | jq -s 'length')
  log "Trabajos en cola detectados: ${queued_jobs}"

  # 2. Obtener el número de runners activos en Swarm
  active_runners=$(docker service ls --filter "name=${RUNNER_SERVICE_NAME}" --format "{{.Replicas}}" | cut -d'/' -f1)
  log "Runners activos en Swarm: ${active_runners}"

  # 3. Calcular el número de runners necesarios
  needed_runners=$((queued_jobs))
  
  # 4. Limitar al máximo configurado
  if [ "$needed_runners" -gt "$MAX_RUNNERS" ]; then
    log "El número de runners necesarios (${needed_runners}) supera el máximo (${MAX_RUNNERS}). Limitando a ${MAX_RUNNERS}."
    needed_runners=$MAX_RUNners
  fi

  # 5. Escalar el servicio si es necesario
  if [ "$active_runners" -ne "$needed_runners" ]; then
    log "Ajustando escala. Activos: ${active_runners}, Necesarios: ${needed_runners}. Escalando a ${needed_runners}..."
    docker service scale "${RUNNER_SERVICE_NAME}=${needed_runners}"
  else
    log "No se necesita ajuste de escala."
  fi

  sleep "${LOOP_INTERVAL:-10}"
done
