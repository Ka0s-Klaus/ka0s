# OpenClaw: Agente SRE Personalizado

## 01. Concepto
OpenClaw es un asistente de IA diseñado para ejecutarse localmente o en Kubernetes, permitiendo la automatización de tareas de SRE mediante lenguaje natural. En Ka0s, lo utilizamos como un "Agente SRE Dedicado" con permisos sobre el clúster.

## 02. Arquitectura en Kubernetes
El despliegue se realiza como un `StatefulSet` para garantizar la persistencia de la memoria (SQLite Vector DB).

- **Namespace**: `openclaw`
- **RBAC**: ServiceAccount con `cluster-admin` (limitado a diagnóstico en base).
- **Almacenamiento**: PVC de 10Gi para memoria y sesiones.
- **Skills**: Inyectados vía ConfigMap en `/root/.openclaw/workspace/skills/`.

## 03. Integración Ka0s
El agente tiene acceso a las herramientas del sistema (`kubectl`, `helm`) y puede ser entrenado ingiriendo la documentación de `core/docs/` en su memoria semántica.

### Protocolos SRE
El agente sigue el protocolo `SDP-01` definido en su Skill de Kubernetes para diagnósticos rápidos de salud del clúster.
