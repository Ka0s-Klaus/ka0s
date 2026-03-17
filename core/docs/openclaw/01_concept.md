# OpenClaw: Agente SRE Personalizado

## 01. Concepto
OpenClaw es un asistente de IA diseñado para ejecutarse localmente o en Kubernetes, permitiendo la automatización de tareas de SRE mediante lenguaje natural. En Ka0s, lo utilizamos como un "Agente SRE Dedicado" con permisos sobre el clúster.

## 02. Arquitectura en Kubernetes
El despliegue se realiza como un `StatefulSet` para garantizar persistencia de estado (workspace + sesiones + memoria).

- **Namespace**: `openclaw`
- **RBAC**: por defecto, el gateway se despliega sin permisos elevados sobre el API de Kubernetes.
- **Almacenamiento**: PVC para estado, sesiones y memoria.
- **Skills**: Inyectados vía ConfigMap en `/root/.openclaw/workspace/skills/`.

## 03. Integración Ka0s
El agente está orientado a operar con los estándares Ka0s (GitOps, auditoría y documentación viva). La inferencia se realiza con **modelos locales vía Ollama**.

### Protocolos SRE
El agente sigue el protocolo `SDP-01` definido en su Skill de Kubernetes para diagnósticos rápidos de salud del clúster.
