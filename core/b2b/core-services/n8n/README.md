# n8n - Workflow Automation

**Rol**: Automatización de Procesos y Flujos de Trabajo.

n8n es una herramienta de automatización de flujos de trabajo extensible que permite conectar aplicaciones, bases de datos y servicios mediante webhooks y APIs.

## 🚀 Casos de Uso en Ka0s
*   Orquestación de tareas entre servicios (iTop, Zabbix, Wazuh).
*   Webhooks para notificaciones.
*   Integración con APIs externas.

## 🛠️ Guía de Despliegue

### Requisitos Previos
*   **Secreto TLS**: `ka0s-wildcard-tls` debe existir en el namespace `n8n`.
    ```bash
    kubectl create secret tls ka0s-wildcard-tls --key ka0s-wildcard.key --cert ka0s-wildcard.crt -n n8n
    ```
*   **Almacenamiento**: Se requiere un directorio `/mnt/data/n8n` en el nodo (o donde apunte el PV local) para la persistencia de datos (SQLite y configuraciones).

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/n8n
```

## 📡 Accesibilidad
*   **URL Pública**: [https://n8n.ka0s.io](https://n8n.ka0s.io)
*   **URL Interna**: `http://n8n.n8n.svc.cluster.local:5678`
*   **Credenciales**: Configurar en el primer acceso a la interfaz web.

## ⚙️ Configuración Técnica
*   **Namespace**: `n8n`
*   **Persistencia**: PVC `n8n-data-pvc` (2Gi, Local Path).
*   **Ingress**: NGINX Ingress con terminación TLS (`ka0s-wildcard-tls`).
*   **Base de Datos**: SQLite (Interna, persistida en volumen).
