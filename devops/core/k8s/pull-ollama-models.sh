#!/bin/bash
set -euo pipefail

export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}

NAMESPACE=${1:-ollama}
APP_LABEL=${2:-ollama}
RESULTS_DIR=${3:-/tmp/results}

TS=$(date +%Y%m%d_%H%M%S)
OUT_DIR="$RESULTS_DIR/ollama_models_pull_${TS}_${NAMESPACE}_${APP_LABEL}"
mkdir -p "$OUT_DIR"

log() {
  printf '[%s] %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*" | tee -a "$OUT_DIR/run.log" >/dev/null
}

write_file() {
  local path="$1"
  shift
  "$@" >"$path" 2>&1 || true
}

POD=$(kubectl -n "$NAMESPACE" get pods -l app="$APP_LABEL" -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || true)
if [ -z "$POD" ]; then
  log "ERROR: no se encontró pod con label app=$APP_LABEL en namespace $NAMESPACE"
  exit 1
fi

log "Pod objetivo: $POD"
write_file "$OUT_DIR/pod.txt" kubectl -n "$NAMESPACE" get pod "$POD" -o wide

log "Modelos antes:"
write_file "$OUT_DIR/models_before.txt" kubectl -n "$NAMESPACE" exec "$POD" -- /bin/ollama list

MODELS=(
  "qwen2:1.5b"
  "nomic-embed-text"
)

for m in "${MODELS[@]}"; do
  log "Pull: $m"
  kubectl -n "$NAMESPACE" exec "$POD" -- /bin/ollama pull "$m" 2>&1 | tee -a "$OUT_DIR/pull_${m//[:\/]/_}.log" >/dev/null
done

log "Modelos después:"
write_file "$OUT_DIR/models_after.txt" kubectl -n "$NAMESPACE" exec "$POD" -- /bin/ollama list

log "OK"
ls -la "$OUT_DIR" >"$OUT_DIR/ls.txt" 2>&1 || true

