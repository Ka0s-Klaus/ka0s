# Guía de Uso: OpenClaw SRE

## Instalación

### 1) Runtime de modelo local (llama.cpp server)

Despliega el runtime local (OpenAI-compatible) dentro del clúster:

```bash
kubectl apply -k core/b2b/core-services/llama-server
```

En Ka0s, este despliegue normalmente se ejecuta vía el workflow `Ka0s CD Core Services Deploy -> K8s` cuando los cambios llegan a `main`, o bajo demanda con `workflow_dispatch` usando `force_service=llama-server`.

#### Carga del modelo (GGUF) en el PVC

El `llama-server` está configurado para arrancar con `/models/ka0s-local.gguf`.

Ruta recomendada (offline, sin Internet):

```bash
kubectl -n llama-server run model-uploader --rm -it \
  --image=alpine:3.20 \
  --overrides='{"spec":{"containers":[{"name":"model-uploader","image":"alpine:3.20","command":["sh"],"args":["-lc","sleep 36000"],"volumeMounts":[{"name":"models","mountPath":"/models"}]}],"volumes":[{"name":"models","persistentVolumeClaim":{"claimName":"llama-models-pvc"}}]}}'
```

En otra terminal, copia tu modelo GGUF:

```bash
kubectl -n llama-server cp ./ka0s-local.gguf model-uploader:/models/ka0s-local.gguf
```

Luego elimina el pod temporal (si no se eliminó solo).

### 2) OpenClaw (Gateway)

Antes de exponer el UI, crea el secret de Basic Auth para el Ingress:

```bash
kubectl -n openclaw create secret generic openclaw-basic-auth \
  --from-file=auth=./auth
```

Este secret no se versiona en Git. Debe existir en el clúster antes de que el workflow despliegue el Ingress.

Despliega OpenClaw:

```bash
kubectl apply -k core/b2b/core-services/openclaw
```

En Ka0s, este despliegue normalmente se ejecuta vía el workflow `Ka0s CD Core Services Deploy -> K8s` cuando los cambios llegan a `main`, o bajo demanda con `workflow_dispatch` usando `force_service=openclaw`.

## Validación

```bash
kubectl get pods -n llama-server
kubectl logs -n llama-server -l app=llama-server --tail=100
kubectl get pods -n openclaw
kubectl logs -n openclaw -l app=openclaw --tail=100
```

## Interacción con el Agente

Una vez desplegado, acceder a la interfaz web (vía Ingress configurado).

### Comandos SRE
El agente puede operar como asistente SRE siempre que tenga herramientas/skills adecuadas. En el despliegue base, priorizamos un gateway seguro y con modelos locales.

*   *"Diagnostica el estado actual del clúster"* -> Ejecutará `kubectl get nodes` y revisará pods en error.
*   *"¿Por qué falló el pod de metabase?"* -> Buscará logs y eventos de ese pod específico.
*   *"Dame un resumen de los eventos de alerta en el namespace `monitoring`"*

### Entrenamiento (Memoria)
Para que el agente aprenda sobre la infraestructura específica de Ka0s, debe tener acceso a documentación (Markdown) dentro de su workspace y utilizar `memory_search` para recuperación semántica.
