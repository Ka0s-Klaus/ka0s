# Ka0s Self Service Portal - Integración

## 1. Integración con el Ecosistema Ka0s

El portal no vive aislado; actúa como un pegamento entre las capacidades existentes de Ka0s.

### 1.1 GitHub Actions (Ejecutor Principal)
La mayoría de las acciones de autoservicio (despliegues, reinicios, actualizaciones) se delegan a GitHub Actions.
*   **Mecanismo**: El Backend utiliza la API de GitHub para disparar `repository_dispatch` events.
*   **Seguridad**: El Backend custodia el `GITHUB_TOKEN` o App Private Key, nunca el cliente.

### 1.2 Kubernetes
Para acciones en tiempo real (lectura de logs, estado de pods), el Backend puede interactuar directamente con la API de K8s.
*   **ServiceAccount**: El Pod del Backend tiene una ServiceAccount con permisos restringidos (Role/RoleBinding) en el clúster.

### 1.3 iTop (CMDB & ITSM)
*   **Sincronización**: Los servicios disponibles pueden estar vinculados a CIs (Configuration Items) en iTop.
*   **Tickets**: Cada acción realizada en el portal puede abrir (y cerrar) automáticamente un ticket en iTop para mantener la trazabilidad ITIL.

## 2. Flujo de Datos

1.  **Frontend** solicita catálogo -> **Backend** consulta MongoDB + Filtra por Roles -> **Frontend** renderiza.
2.  **Usuario** llena formulario -> **Backend** valida Schema -> **Backend** dispara Acción.
3.  **Acción** (GitHub/K8s) ejecuta tarea -> **Acción** notifica resultado (Webhook/Status).

## 3. Dependencias
*   **MongoDB**: Almacenamiento de definiciones y usuarios.
*   **Redis** (Opcional): Caché de sesiones o rate limiting.
*   **GitHub API**: Para orquestación de workflows.
