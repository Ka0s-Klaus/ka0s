# Guía del Workflow: Ka0s Cluster System Update

## 1. Propósito

El workflow `update-hosts.yml` automatiza la tarea crítica de mantener actualizados todos los nodos del clúster de Kubernetes (sistema operativo Ubuntu). Permite ejecutar `apt update && apt upgrade` de forma centralizada y controlada desde GitHub Actions.

## 2. Descripción General

Este proceso utiliza un enfoque de "salto" (bastion host) donde el runner de GitHub se conecta al nodo principal (`k8-manager`) y, desde allí, el script `system-update.sh` propaga las actualizaciones al resto de nodos de la red interna.

### Flujo de Ejecución:
1.  **Inicio**: Se dispara manualmente desde GitHub Actions (`workflow_dispatch`).
2.  **Conexión**: El runner conecta por SSH al `k8-manager`.
3.  **Ejecución**: Lanza el script `system-update.sh` inyectando las credenciales necesarias (sudo y sshpass) vía secretos.
4.  **Auditoría**:
    *   Genera un log consolidado de la actualización de todos los nodos.
    *   Sube este log automáticamente a la carpeta `audit/hosts/` del repositorio.
5.  **Notificación**: (Deshabilitada actualmente) Capacidad de notificar el resultado.

## 3. Requisitos y Secretos

Para su correcto funcionamiento, el repositorio debe tener configurados los siguientes secretos:

*   `KAOS_SSH_HOST_1`: IP/Host público del `k8-manager`.
*   `KAOS_SSH_USER`: Usuario para la conexión SSH (ej. `kaos`).
*   `KAOS_SSH_KEY_PRIV`: Clave privada SSH para acceder al `k8-manager`.
*   `KAOS_SSH_PORT_1`: Puerto SSH del `k8-manager` (ej. `6666`).
*   `KAOS_SSH_PASS`: Contraseña de `sudo` para el usuario en los nodos.
*   `KAOS_WORKER_SSH_PASS`: Contraseña SSH para conectar a los workers (`node-30`, `node-40`) que no usan clave RSA.
*   `KAOS_BOT_NAME` / `KAOS_BOT_EMAIL`: Credenciales para el commit automático de logs.

## 4. Cómo Ejecutarlo

1.  Ve a la pestaña **Actions** en tu repositorio GitHub.
2.  Selecciona el workflow **"Ka0s Cluster System Update"**.
3.  Pulsa **"Run workflow"**.
4.  (Opcional) Puedes modificar el `results-path` si deseas guardar los logs en otra ruta (por defecto `audit/hosts/`).

## 5. Resultados

Tras la ejecución, se generará un nuevo archivo en `audit/hosts/` con el nombre `system_update_YYYYMMDD_HHMMSS.log`. Este archivo contiene la salida detallada de los comandos `apt` de cada nodo, permitiendo auditar qué paquetes se actualizaron o si hubo errores en algún host específico.
