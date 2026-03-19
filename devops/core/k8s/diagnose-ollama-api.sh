#!/bin/bash
set -euo pipefail

export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}

NAMESPACE=${1:-ollama}
SERVICE_NAME=${2:-ollama}
RESULTS_DIR=${3:-/tmp/results}

TS=$(date +%Y%m%d_%H%M%S)
OUT_DIR="$RESULTS_DIR/ollama_api_diag_${TS}_${NAMESPACE}_${SERVICE_NAME}"
mkdir -p "$OUT_DIR"

log() {
  printf '[%s] %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*" | tee -a "$OUT_DIR/run.log" >/dev/null
}

write_file() {
  local path="$1"
  shift
  "$@" >"$path" 2>&1 || true
}

require_bin() {
  local b="$1"
  if ! command -v "$b" >/dev/null 2>&1; then
    log "WARN: binario no disponible: $b"
    return 1
  fi
  return 0
}

http_post() {
  local url="$1"
  local json_payload="$2"
  local name="$3"

  local headers="$OUT_DIR/${name}.headers.txt"
  local body="$OUT_DIR/${name}.body.txt"
  local meta="$OUT_DIR/${name}.meta.txt"

  if require_bin curl; then
    local code
    code=$(curl -sS -D "$headers" -o "$body" -w "%{http_code}" -X POST "$url" -H "Content-Type: application/json" -d "$json_payload" || true)
    {
      echo "url=$url"
      echo "http_code=$code"
      echo "payload=$json_payload"
    } >"$meta"
    return 0
  fi

  if command -v python3 >/dev/null 2>&1; then
    python3 - <<PY >"$meta" 2>&1 || true
import json, sys
import urllib.request
url = ${url!r}
data = ${json_payload!r}.encode('utf-8')
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'}, method='POST')
try:
    with urllib.request.urlopen(req, timeout=20) as r:
        sys.stdout.write(f"url={url}\n")
        sys.stdout.write(f"http_code={r.status}\n")
        sys.stdout.write(f"headers={dict(r.headers)}\n")
        body = r.read().decode('utf-8', errors='ignore')
        open(${body!r}, 'w', encoding='utf-8').write(body)
except Exception as e:
    sys.stdout.write(f"url={url}\n")
    sys.stdout.write(f"error={e}\n")
PY
    return 0
  fi

  log "ERROR: no hay curl ni python3 para probar HTTP"
  return 1
}

http_get() {
  local url="$1"
  local name="$2"

  local headers="$OUT_DIR/${name}.headers.txt"
  local body="$OUT_DIR/${name}.body.txt"
  local meta="$OUT_DIR/${name}.meta.txt"

  if require_bin curl; then
    local code
    code=$(curl -sS -D "$headers" -o "$body" -w "%{http_code}" "$url" || true)
    {
      echo "url=$url"
      echo "http_code=$code"
    } >"$meta"
    return 0
  fi
  log "WARN: sin curl, omitido GET $url"
  return 0
}

log "Iniciando diagnóstico Ollama API"
log "namespace=$NAMESPACE service=$SERVICE_NAME results=$OUT_DIR"

write_file "$OUT_DIR/kubectl_version.txt" kubectl version --client --output=yaml

write_file "$OUT_DIR/svc.yaml" kubectl -n "$NAMESPACE" get svc "$SERVICE_NAME" -o yaml
write_file "$OUT_DIR/endpoints.yaml" kubectl -n "$NAMESPACE" get endpoints "$SERVICE_NAME" -o yaml
write_file "$OUT_DIR/pods_wide.txt" kubectl -n "$NAMESPACE" get pods -l app="$SERVICE_NAME" -o wide
write_file "$OUT_DIR/pods_images.txt" kubectl -n "$NAMESPACE" get pods -l app="$SERVICE_NAME" -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[*].image}{"\n"}{end}'

POD=$(kubectl -n "$NAMESPACE" get pods -l app="$SERVICE_NAME" -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || true)
if [ -n "$POD" ]; then
  log "Pod detectado: $POD"
  write_file "$OUT_DIR/pod_describe.txt" kubectl -n "$NAMESPACE" describe pod "$POD"
  write_file "$OUT_DIR/pod_logs_tail.txt" kubectl -n "$NAMESPACE" logs "$POD" --tail=300 --all-containers=true
  write_file "$OUT_DIR/pod_ps.txt" kubectl -n "$NAMESPACE" exec "$POD" -- sh -lc 'ps aux || ps -ef || true'
  write_file "$OUT_DIR/pod_env.txt" kubectl -n "$NAMESPACE" exec "$POD" -- sh -lc 'env | sort'
else
  log "WARN: no se encontró pod con label app=$SERVICE_NAME en $NAMESPACE"
fi

PORT_LOCAL=11435
PF_LOG="$OUT_DIR/port_forward.log"

cleanup() {
  if [ -n "${PF_PID:-}" ] && kill -0 "$PF_PID" >/dev/null 2>&1; then
    kill "$PF_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

log "Iniciando port-forward a svc/$SERVICE_NAME:$PORT_LOCAL -> 11434"
kubectl -n "$NAMESPACE" port-forward "svc/$SERVICE_NAME" "${PORT_LOCAL}:11434" >"$PF_LOG" 2>&1 &
PF_PID=$!

sleep 3

BASE="http://127.0.0.1:${PORT_LOCAL}"

http_get "$BASE/" "get_root"

http_post "$BASE/api/generate" '{"model":"qwen2:1.5b","prompt":"ping","stream":false}' "api_generate"
http_post "$BASE/api/embeddings" '{"model":"nomic-embed-text","prompt":"hola"}' "api_embeddings"

http_get "$BASE/v1/models" "v1_models"
http_post "$BASE/v1/chat/completions" '{"model":"qwen2:1.5b","messages":[{"role":"user","content":"ping"}],"stream":false}' "v1_chat_completions"
http_post "$BASE/v1/embeddings" '{"model":"nomic-embed-text","input":"hola"}' "v1_embeddings"

{
  echo "namespace=$NAMESPACE"
  echo "service=$SERVICE_NAME"
  echo "pod=$POD"
  echo "port_forward_pid=$PF_PID"
  echo "tested_base=$BASE"
  echo "api_generate_http_code=$(cat "$OUT_DIR/api_generate.meta.txt" 2>/dev/null | sed -n 's/^http_code=//p' | head -n 1)"
  echo "api_embeddings_http_code=$(cat "$OUT_DIR/api_embeddings.meta.txt" 2>/dev/null | sed -n 's/^http_code=//p' | head -n 1)"
  echo "v1_models_http_code=$(cat "$OUT_DIR/v1_models.meta.txt" 2>/dev/null | sed -n 's/^http_code=//p' | head -n 1)"
  echo "v1_chat_completions_http_code=$(cat "$OUT_DIR/v1_chat_completions.meta.txt" 2>/dev/null | sed -n 's/^http_code=//p' | head -n 1)"
  echo "v1_embeddings_http_code=$(cat "$OUT_DIR/v1_embeddings.meta.txt" 2>/dev/null | sed -n 's/^http_code=//p' | head -n 1)"
} >"$OUT_DIR/summary.txt"

log "Diagnóstico completado. Carpeta: $OUT_DIR"
ls -la "$OUT_DIR" >"$OUT_DIR/ls.txt" 2>&1 || true

