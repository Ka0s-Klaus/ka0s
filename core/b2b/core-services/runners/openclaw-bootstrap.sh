#!/bin/bash

set -euo pipefail

KAOS_REPO_DEFAULT="Ka0s-Klaus/ka0s"
KAOS_WORKFLOW_DEFAULT="cd-core-services.yml"

usage() {
  cat <<'USAGE'
Uso:
  openclaw-bootstrap.sh create-basic-auth-secret
  openclaw-bootstrap.sh upload-gguf /ruta/al/modelo.gguf
  openclaw-bootstrap.sh trigger-deploy <llama-server|openclaw> [--ref <branch>] [--repo <owner/repo>] [--workflow <workflow.yml>]
  openclaw-bootstrap.sh watch-latest [--ref <branch>] [--repo <owner/repo>] [--workflow <workflow.yml>]
  openclaw-bootstrap.sh prepare /ruta/al/modelo.gguf

Notas:
  - Requiere kubectl configurado contra el clúster.
  - Para trigger/watch requiere gh auth (GitHub CLI).
USAGE
}

require_bin() {
  local b="$1"
  command -v "$b" >/dev/null 2>&1 || { echo "Falta binario requerido: $b" >&2; exit 1; }
}

create_basic_auth_secret() {
  require_bin kubectl

  local ns="openclaw"
  local secret="openclaw-basic-auth"
  local user="admin"

  if command -v docker >/dev/null 2>&1; then
    :
  elif command -v htpasswd >/dev/null 2>&1; then
    :
  else
    echo "Necesitas 'docker' (recomendado) o 'htpasswd' para generar el fichero auth." >&2
    exit 1
  fi

  local pass1 pass2
  read -r -s -p "Password para Basic Auth (${user}): " pass1
  echo
  read -r -s -p "Repite password: " pass2
  echo
  if [ "$pass1" != "$pass2" ]; then
    echo "Passwords no coinciden." >&2
    exit 1
  fi

  local tmp
  tmp="$(mktemp)"
  chmod 600 "$tmp"

  if command -v docker >/dev/null 2>&1; then
    docker run --rm httpd:2.4-alpine htpasswd -nbB "$user" "$pass1" > "$tmp"
  else
    htpasswd -nbB "$user" "$pass1" > "$tmp"
  fi

  kubectl create namespace "$ns" --dry-run=client -o yaml | kubectl apply -f -
  kubectl -n "$ns" create secret generic "$secret" --from-file=auth="$tmp" --dry-run=client -o yaml | kubectl apply -f -
  kubectl -n "$ns" label secret "$secret" app=openclaw managed-by=ka0s-core-cd --overwrite

  rm -f "$tmp"
  echo "OK: secret $ns/$secret creado/actualizado."
}

upload_gguf() {
  require_bin kubectl

  local gguf_path="${1:-}"
  if [ -z "$gguf_path" ]; then
    echo "Falta path del GGUF." >&2
    exit 1
  fi
  if [ ! -f "$gguf_path" ]; then
    echo "No existe el fichero: $gguf_path" >&2
    exit 1
  fi

  local ns="llama-server"
  local pvc="llama-models-pvc"
  local pod="model-uploader-$(date +%s)"

  kubectl create namespace "$ns" --dry-run=client -o yaml | kubectl apply -f -

  cat <<EOF | kubectl -n "$ns" apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: ${pod}
  labels:
    app: model-uploader
    managed-by: ka0s-core-cd
spec:
  restartPolicy: Never
  containers:
    - name: uploader
      image: alpine:3.20
      command: ["sh", "-lc", "sleep 36000"]
      volumeMounts:
        - name: models
          mountPath: /models
  volumes:
    - name: models
      persistentVolumeClaim:
        claimName: ${pvc}
EOF

  kubectl -n "$ns" wait --for=condition=Ready pod/"$pod" --timeout=180s

  kubectl -n "$ns" cp "$gguf_path" "$pod":/models/ka0s-local.gguf

  kubectl -n "$ns" delete pod "$pod" --ignore-not-found
  echo "OK: GGUF copiado a $ns/$pvc como /models/ka0s-local.gguf"
}

trigger_deploy() {
  require_bin gh

  local service="${1:-}"
  shift || true
  if [ -z "$service" ]; then
    echo "Falta service (llama-server|openclaw)." >&2
    exit 1
  fi

  local repo="$KAOS_REPO_DEFAULT"
  local workflow="$KAOS_WORKFLOW_DEFAULT"
  local ref=""

  while [ $# -gt 0 ]; do
    case "$1" in
      --repo)
        repo="$2"; shift 2 ;;
      --workflow)
        workflow="$2"; shift 2 ;;
      --ref)
        ref="$2"; shift 2 ;;
      *)
        echo "Arg no reconocido: $1" >&2
        exit 1 ;;
    esac
  done

  local args=("workflow" "run" "$workflow" "-R" "$repo" "-f" "force_service=$service")
  if [ -n "$ref" ]; then
    args+=("--ref" "$ref")
  fi

  gh "${args[@]}"
  echo "OK: workflow lanzado para $service"
}

watch_latest() {
  require_bin gh

  local repo="$KAOS_REPO_DEFAULT"
  local workflow="$KAOS_WORKFLOW_DEFAULT"
  local ref=""

  while [ $# -gt 0 ]; do
    case "$1" in
      --repo)
        repo="$2"; shift 2 ;;
      --workflow)
        workflow="$2"; shift 2 ;;
      --ref)
        ref="$2"; shift 2 ;;
      *)
        echo "Arg no reconocido: $1" >&2
        exit 1 ;;
    esac
  done

  local selector=("run" "list" "-R" "$repo" "--workflow" "$workflow" "-L" "1" "--json" "databaseId")
  if [ -n "$ref" ]; then
    selector+=("--branch" "$ref")
  fi
  local run_id
  run_id="$(gh "${selector[@]}" --jq '.[0].databaseId')"
  if [ -z "$run_id" ] || [ "$run_id" = "null" ]; then
    echo "No se encontró run reciente para $workflow" >&2
    exit 1
  fi
  gh run watch "$run_id" -R "$repo" --exit-status
}

prepare_all() {
  local gguf_path="${1:-}"
  if [ -z "$gguf_path" ]; then
    echo "Falta path del GGUF." >&2
    exit 1
  fi
  create_basic_auth_secret
  upload_gguf "$gguf_path"
  echo "OK: prerequisitos listos (secret + GGUF)."
}

cmd="${1:-}"
shift || true

case "$cmd" in
  create-basic-auth-secret)
    create_basic_auth_secret "$@" ;;
  upload-gguf)
    upload_gguf "$@" ;;
  trigger-deploy)
    trigger_deploy "$@" ;;
  watch-latest)
    watch_latest "$@" ;;
  prepare)
    prepare_all "$@" ;;
  -h|--help|help|"")
    usage ;;
  *)
    echo "Comando no reconocido: $cmd" >&2
    usage
    exit 1 ;;
esac

