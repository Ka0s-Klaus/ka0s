# Guía de Uso: Workflow de Auditoría Remota (ssh-connect.yml)

## 1. Introducción

El workflow `Ka0s C0re SSH Host Connect` (`ssh-connect.yml`) está diseñado para automatizar la ejecución de scripts en hosts remotos a través de SSH. Su principal funcionalidad es conectarse a un servidor, ejecutar un script específico, recolectar los resultados generados y subirlos de vuelta al repositorio de GitHub en una ruta especificada.

Este documento sirve como una guía completa para entender, configurar y utilizar este workflow.

---

## 2. Prerrequisitos

### Secrets del Repositorio

El workflow depende de varios `secrets` para funcionar. Deben ser creados en `Settings > Secrets and variables > Actions` del repositorio:

-   `KAOS_SSH_HOST_1`: La dirección IP o el nombre de dominio del host remoto.
-   `KAOS_SSH_USER`: El nombre de usuario para la conexión SSH.
-   `KAOS_SSH_KEY_PRIV`: La clave privada SSH para la autenticación.
-   `KAOS_SSH_PORT_1`: El puerto SSH del host remoto (generalmente 22).
-   `KAOS_SSH_PASS`: La contraseña del usuario para ejecutar comandos con `sudo`.
-   `KAOS_BOT_NAME`: El nombre de usuario del bot que hará commit de los resultados (e.g., `github-actions[bot]`).
-   `KAOS_BOT_EMAIL`: El email del bot para los commits (e.g., `github-actions[bot]@users.noreply.github.com`).

### Runners de GitHub Actions

Los jobs de este workflow están configurados para usar el grupo de runners `swarm-runners-scaleset`. Asegúrate de que estén disponibles y correctamente configurados.

---

## 3. Componentes Principales

### Workflow: `ssh-connect.yml`

Este es el orquestador principal del proceso.

#### Disparadores (`on`)

El workflow se puede iniciar de dos maneras:

1.  **Manualmente (`workflow_dispatch`):** Permite ejecutar el workflow desde la pestaña "Actions" de GitHub. Acepta tres parámetros:
    *   `script-path`: (Obligatorio) La ruta dentro del repositorio al script que se desea ejecutar en el host remoto.
    *   `script-args`: (Opcional) Argumentos que se pasarán al script.
    *   `results-path`: (Opcional) La ruta dentro del repositorio donde se guardarán los resultados. Por defecto es `audit/eresults/`.
2.  **Programado (`schedule`):** Se ejecuta automáticamente a través de una tarea cron. Por defecto, está configurado para ejecutarse diariamente a medianoche (`0 0 * * *`).

#### Jobs (`jobs`)

El workflow se divide en varios jobs:

-   **`job-core`**: Es el corazón del workflow. Realiza las siguientes tareas:
    1.  Hace checkout del código del repositorio.
    2.  Utiliza la acción local `.github/actions/ssh-exec` para conectarse al host remoto, copiar y ejecutar el script especificado.
    3.  Copia los resultados desde el host remoto (`/tmp/results/` por defecto) a la ruta local especificada en `local-results-path` (`KAOS_PATH_RESUME`).
    4.  Sube los resultados como un artefacto (`audit-results`) para que estén disponibles para el siguiente job.
-   **`commit-results`**: Se ejecuta después de `job-core`. Descarga el artefacto con los resultados y los sube al repositorio haciendo commit y push con las credenciales del bot.
-   **`handle-success` / `handle_failure`**: Jobs que se ejecutan condicionalmente para reportar el éxito o fallo del proceso.
-   **`end-workflow`**: Se ejecuta siempre al final para realizar tareas de limpieza o para encadenar otros workflows, como `inspector.yml`.

### Acción Personalizada: `.github/actions/ssh-exec`

Esta acción abstrae la lógica de la conexión SSH, ejecución de scripts y recolección de resultados.

---

## 4. Flujo de Ejecución

1.  El workflow se inicia manual o automáticamente.
2.  `job-core` se ejecuta, hace checkout y llama a la acción `ssh-exec`.
3.  La acción `ssh-exec` se conecta al host remoto, copia el script, lo ejecuta (con `sudo` si está especificado) y gestiona los permisos de los ficheros de resultados.
4.  La acción copia los resultados de vuelta al runner, a la ruta definida por la variable `KAOS_PATH_RESUME`.
5.  Los resultados se empaquetan como un artefacto.
6.  `commit-results` descarga el artefacto, y si hay cambios, los sube al repositorio.
7.  El workflow finaliza, ejecutando los jobs de éxito/fallo y el job final.

---

## 5. Cómo Usarlo

1.  Ve a la pestaña **Actions** de tu repositorio.
2.  En el menú de la izquierda, busca y selecciona **"Ka0s C0re SSH Host Connect"**.
3.  Haz clic en el botón **"Run workflow"**.
4.  Personaliza los parámetros según sea necesario:
    *   **`script-path`**: La ruta al script a ejecutar (e.g., `devops/core/k8s/kube-audit.sh`).
    *   **`script-args`**: Argumentos para el script (si los necesita).
    *   **`results-path`**: La carpeta de destino para los resultados (e.g., `audit/kube/`).
5.  Haz clic en **"Run workflow"** para iniciar la ejecución.

Para ver ejemplos concretos, consulta la documentación de los scripts `test.sh` y `kube-audit.sh`.