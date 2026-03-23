#!/bin/bash
set -e

MODEL_NAME=$1

if [ -z "$MODEL_NAME" ]; then
  echo "Error: Se requiere el nombre del modelo."
  exit 1
fi

JOB_NAME="pull-model-$(echo $MODEL_NAME | tr -cd 'a-z0-9-')"

echo "Generando Job para descargar el modelo: $MODEL_NAME"

cat <<EOF > pull-job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: $JOB_NAME
  namespace: ollama
spec:
  backoffLimit: 3
  template:
    spec:
      nodeSelector:
        ka0s.io/ollama-node: "true"
      containers:
      - name: pull-model
        image: curlimages/curl:latest
        command: ["/bin/sh", "-c"]
        args:
        - |
          echo "Waiting for Ollama service..."
          until curl -s http://ollama:11434/api/tags > /dev/null; do
            echo "Waiting..."
            sleep 5
          done
          echo "Pulling $MODEL_NAME..."
          curl -X POST http://ollama:11434/api/pull -d '{"name": "$MODEL_NAME"}'
      restartPolicy: OnFailure
EOF

kubectl apply -f pull-job.yaml

echo "Esperando a que el Job $JOB_NAME se complete..."
kubectl wait --for=condition=complete --timeout=1200s job/$JOB_NAME -n ollama

echo "Limpiando el Job $JOB_NAME..."
kubectl delete job/$JOB_NAME -n ollama

echo "¡Modelo $MODEL_NAME descargado correctamente!"
