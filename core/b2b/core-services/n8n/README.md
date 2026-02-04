# n8n - Workflow Automation

**Rol**: Automatización de Procesos y Flujos de Trabajo.

n8n es una herramienta de automatización de flujos de trabajo extensible que permite conectar aplicaciones, bases de datos y servicios mediante webhooks y APIs.

## 🚀 Casos de Uso en Ka0s
*   Orquestación de tareas entre servicios.
*   Webhooks para notificaciones.
*   Integración con APIs externas.

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/n8n
```

## 📡 Accesibilidad
Verificar el servicio o ingress configurado en los manifiestos locales.
