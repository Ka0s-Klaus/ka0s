# Arquitectura Técnica: OpenClaw en Ka0s

## Diseño del Despliegue
El servicio se despliega en el clúster de Kubernetes utilizando un patrón **StatefulSet**.

### Componentes
1.  **StatefulSet (`openclaw`)**:
    *   **Imagen**: `ghcr.io/openclaw/openclaw:latest`
    *   **Replicas**: 1 (Arquitectura Single-Writer para SQLite).
    *   **Recursos**: 2CPU / 4Gi RAM (Recomendado para inferencia local ligera o RAG intenso).

2.  **Persistencia (`PVC`)**:
    *   Se monta en `/root/.openclaw`.
    *   Almacena:
        *   `memory/`: Base de datos vectorial (SQLite + sqlite-vec) y archivos Markdown.
        *   `workspace/`: Configuración de usuario y skills personalizados.
        *   `sessions/`: Historial de conversaciones.

3.  **Integración con Kubernetes**:
    *   Utiliza una **ServiceAccount** con `ClusterRoleBinding` a `cluster-admin`.
    *   Esto permite al agente ejecutar comandos `kubectl` directamente desde su contenedor (o vía herramienta `shell`).

### Flujo de Datos
1.  **Usuario** -> **Ingress** -> **Service** -> **Pod OpenClaw**.
2.  **OpenClaw** -> **LLM Backend** (Cerebro):
    *   *Opción A (SaaS)*: OpenAI / Anthropic (Requiere API Key).
    *   *Opción B (Local)*: Ollama Service (interno en cluster).
3.  **OpenClaw** -> **K8s API** (vía `kubectl` interno) para ejecución de tareas.
4.  **OpenClaw** -> **SQLite (PVC)** para lectura/escritura de memoria a largo plazo.

## Limitaciones Conocidas
*   **No Alta Disponibilidad (HA)**: Al depender de SQLite en un volumen RWO, no puede escalar horizontalmente. Si el nodo cae, habrá tiempo de inactividad hasta que el Pod se reprograme.
*   **Seguridad**: El agente tiene permisos de `cluster-admin`. Debe aislarse en un namespace dedicado con NetworkPolicies estrictas.
