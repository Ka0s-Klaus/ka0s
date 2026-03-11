# Guía de Uso: OpenClaw SRE

## Instalación

1.  **Secretos**:
    Crear el secreto con la API Key del LLM:
    ```bash
    kubectl create secret generic openclaw-secrets \
      --from-literal=openai-api-key=sk-proj-... \
      -n openclaw
    ```

2.  **Despliegue**:
    Utilizar ArgoCD o aplicar manualmente (solo dev):
    ```bash
    kubectl apply -k core/b2b/openclaw/overlays/prod
    ```

## Interacción con el Agente

Una vez desplegado, acceder a la interfaz web (vía Ingress configurado).

### Comandos SRE
El agente está entrenado con el skill `kubernetes_sre`. Puedes pedirle:

*   *"Diagnostica el estado actual del clúster"* -> Ejecutará `kubectl get nodes` y revisará pods en error.
*   *"¿Por qué falló el pod de metabase?"* -> Buscará logs y eventos de ese pod específico.
*   *"Dame un resumen de los eventos de alerta en el namespace `monitoring`"*

### Entrenamiento (Memoria)
Para que el agente aprenda sobre la infraestructura específica de Ka0s:

1.  Subir archivos Markdown de documentación a `/root/.openclaw/memory/`.
2.  O pedirle al agente: *"Lee y memoriza el archivo de arquitectura que te acabo de pasar"*.
