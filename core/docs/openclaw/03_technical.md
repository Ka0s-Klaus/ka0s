# Arquitectura Técnica: OpenClaw en Ka0s

## Diseño del Despliegue
El servicio se despliega en el clúster de Kubernetes utilizando un patrón **StatefulSet** para mantener estado persistente con un único writer.

### Componentes
1.  **StatefulSet (`openclaw`)**:
    *   **Imagen**: `ghcr.io/openclaw/openclaw:latest`
    *   **Replicas**: 1
    *   **Recursos**: ajustables según carga.

2.  **Persistencia (`PVC`)**:
    *   Se monta en `/home/node/.openclaw`.
    *   Almacena: workspace, sesiones y memoria.

3.  **Política de red (NetworkPolicy)**:
    *   Egress permitido solo hacia Ollama (namespace `ollama`) y DNS (`kube-system`).
    *   Previene salidas no intencionadas a Internet.

### Flujo de Datos
1.  **Usuario** -> **Ingress** -> **Service** -> **Pod OpenClaw**.
2.  **OpenClaw** -> **LLM Backend** (Cerebro):
    *   *Local*: runtime OpenAI-compatible (ej. `llama.cpp` server) interno en el clúster.
3.  **OpenClaw** -> **PVC** para lectura/escritura de estado y memoria a largo plazo.

## Limitaciones Conocidas
*   **No Alta Disponibilidad (HA)**: el estado se mantiene en un volumen RWO y el gateway opera como single replica.
*   **Operación SRE avanzada**: para ejecutar acciones sobre el clúster se recomienda implementar skills específicas con RBAC de mínimo privilegio.
