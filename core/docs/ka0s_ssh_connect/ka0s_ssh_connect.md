# Guía de Uso: Workflow de Auditoría Remota (ssh-connect.yml)

## 1. Introducción

El workflow `Ka0s C0re Host Audit logs` (`ssh-connect.yml`) está diseñado para automatizar la ejecución de scripts de auditoría en hosts remotos a través de SSH. Su principal funcionalidad es conectarse a un servidor, ejecutar un script específico, y subir los resultados generados de vuelta al repositorio de GitHub.

Este documento sirve como una guía completa para entender, configurar y utilizar este workflow.

---

## 2. Prerrequisitos

Antes de ejecutar este workflow, es crucial asegurarse de que los siguientes prerrequisitos están configurados correctamente en el repositorio de GitHub.

### Secrets del Repositorio

El workflow depende de varios `secrets` para funcionar. Deben ser creados en `Settings > Secrets and variables > Actions` del repositorio:

- `KAOS_SSH_HOST_1`: La dirección IP o el nombre de dominio del host remoto al que se conectará.
- `KAOS_SSH_USER`: El nombre de usuario para la conexión SSH.
- `KAOS_SSH_KEY_PRIV`: La clave privada SSH para la autenticación sin contraseña.
- `KAOS_SSH_PORT_1`: El puerto SSH del host remoto (generalmente 22).
- `KAOS_SSH_PASS`: La contraseña del usuario para ejecutar comandos con `sudo`. Es necesaria si `use-sudo` se establece en `true`.
- `KAOS_BOT_NAME`: El nombre de usuario del bot que se usará para hacer commit de los resultados (e.g., `github-actions[bot]`).
- `KAOS_BOT_EMAIL`: El email del bot que se usará para los commits (e.g., `github-actions[bot]@users.noreply.github.com`).

### Runners de GitHub Actions

Los jobs de este workflow están configurados para usar grupos de runners específicos:
- `group: test`
- `swarm-runners-scaleset`

Asegúrate de que estos runners estén disponibles y correctamente configurados para el repositorio.

### Script de Auditoría

El workflow requiere que el script que se va a ejecutar exista dentro del repositorio. Por defecto, intenta ejecutar `devops/core/host/test.sh`, pero la ruta puede ser personalizada al lanzar el workflow manualmente.

---

## 3. Componentes Principales

El sistema se compone de un workflow principal y una acción personalizada que trabajan en conjunto.

### Workflow: `ssh-connect.yml`

Este es el orquestador principal del proceso.

#### Disparadores (`on`)

El workflow se puede iniciar de dos maneras:

1.  **Manualmente (`workflow_dispatch`):** Permite ejecutar el workflow desde la pestaña "Actions" de GitHub. Acepta dos parámetros:
    *   `script-path`: La ruta al script que se desea ejecutar en el host remoto.
    *   `script-args`: Argumentos opcionales para pasar al script.
2.  **Programado (`schedule`):** Se ejecuta automáticamente a través de una tarea cron. Por defecto, está configurado para ejecutarse diariamente a medianoche (`0 0 * * *`).

#### Jobs (`jobs`)

El workflow se divide en varios jobs secuenciales y condicionales:

- **`job-core`**: El primer paso. Clona el repositorio para que los siguientes jobs tengan acceso a los ficheros, como la acción personalizada y los scripts.
- **`job-audit`**: El corazón del workflow. Utiliza la acción `ssh-exec` para conectarse al host remoto y ejecutar el script de auditoría. Está diseñado para recibir una ruta de salida con los resultados (`outputs.results_path`).
- **`commit-results`**: Se ejecuta si `job-audit` tiene éxito y ha devuelto una ruta de resultados. Clona el repositorio, configura `git` con las credenciales del bot, y sube los ficheros encontrados en la ruta de resultados al repositorio.
- **`handle-success`**: Se ejecuta si todos los jobs anteriores (`job-audit`, `commit-results`) finalizan con éxito. Actualmente, solo imprime un mensaje de éxito.
- **`handle_failure`**: Se ejecuta si `job-audit` falla. Imprime un mensaje de error, indicando que se podría crear una issue.
- **`end-workflow`**: Se ejecuta siempre (`always()`) al final del workflow, sin importar si los jobs anteriores tuvieron éxito o fallaron. Su propósito es limpiar y/o lanzar otros workflows, como `inspector.yml`.

### Acción Personalizada: `.github/actions/ssh-exec`

Esta es una acción compuesta reutilizable que abstrae la lógica de la conexión y ejecución SSH.

#### Entradas (`inputs`)

- `host`, `username`, `key`, `port`: Credenciales de conexión SSH.
- `pass`, `use-sudo`: Para ejecutar comandos con privilegios de superusuario.
- `command`: Un comando específico para ejecutar en el host remoto.
- `script-path`: La ruta local (en el runner) del script que se copiará y ejecutará en el host remoto.
- `script-args`: Argumentos para el script.
- `remote-tmp-dir`: Un directorio temporal en el host remoto para almacenar el script durante su ejecución.

---

## 4. Flujo de Ejecución y **Advertencia Importante**

1.  El workflow se inicia manual o automáticamente.
2.  `job-core` clona el código del repositorio.
3.  `job-audit` llama a la acción `ssh-exec`.
4.  La acción `ssh-exec` se conecta al host remoto, copia el script especificado en `script-path` al directorio temporal, le da permisos de ejecución, lo ejecuta y finalmente lo elimina.

> **⚠️ ¡ADVERTENCIA! Existe una discrepancia crítica.**
> El workflow `ssh-connect.yml` está diseñado para que la acción `ssh-exec` copie los resultados desde el host remoto de vuelta al runner. Para ello, le pasa los parámetros `remote-results-path` y `local-results-path`.
> Sin embargo, la versión actual de la acción `ssh-exec/action.yml` **NO implementa esta funcionalidad**. No reconoce estos parámetros y no realiza la copia de vuelta. 
> Como consecuencia, el `output` `results_path` del `job-audit` estará siempre vacío, y el job `commit-results` nunca encontrará nada que subir al repositorio, mostrando el mensaje "No changes to commit.".

5.  Suponiendo que la acción se corrigiera, `commit-results` añadiría los ficheros al repositorio y los subiría.
6.  Finalmente, se ejecutarían los jobs `handle-success` o `handle_failure`, y el workflow concluiría con `end-workflow`.

---

## 5. Cómo Usarlo

1.  Ve a la pestaña **Actions** de tu repositorio.
2.  En el menú de la izquierda, busca y selecciona **"Ka0s C0re Host Audit logs"**.
3.  Haz clic en el botón **"Run workflow"** a la derecha.
4.  Se desplegará un menú donde puedes personalizar:
    *   **`script-path`**: Cambia la ruta si quieres ejecutar un script diferente al de por defecto.
    *   **`script-args`**: Proporciona los argumentos necesarios para tu script.
5.  Haz clic en **"Run workflow"** para iniciar la ejecución.

Para que la funcionalidad de subida de resultados funcione, **es imprescindible modificar la acción `.github/actions/ssh-exec/action.yml`** para que acepte los `inputs` `remote-results-path` y `local-results-path` y realice la copia de los ficheros desde el host remoto al runner usando `scp`, tal como se diseñó previamente.