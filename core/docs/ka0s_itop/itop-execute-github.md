# Guía Completa: Ejecutar Workflows de GitHub Actions desde iTop

Esta guía detalla el proceso completo para configurar iTop (versión 3.0+) y GitHub Actions, permitiendo que un evento en iTop (como la creación de un ticket) dispare automáticamente un workflow en GitHub.

## Arquitectura de la Integración

1.  **Evento en iTop**: Se crea un objeto (ej. un `Requerimiento de Usuario`).
2.  **Disparador (Trigger)**: Un disparador en iTop detecta la creación del objeto.
3.  **Acción (Action)**: El disparador invoca una acción de tipo `Webhook`.
4.  **Llamada a la API**: La acción realiza una llamada `POST` a la API de GitHub.
5.  **Ejecución del Workflow**: GitHub recibe la llamada, se autentica usando un Personal Access Token (PAT), y ejecuta el workflow, pasándole los parámetros del ticket.

---

## Paso 1: Configurar el Workflow en GitHub

El workflow debe estar configurado para ser invocado por un evento externo mediante `workflow_dispatch`.

1.  **Crea o edita tu archivo de workflow** en `.github/workflows/`.

2.  **Añade el siguiente contenido**:

    ```yaml
    name: iTop Triggered Workflow

    on:
      workflow_dispatch:
        inputs:
          itop_ticket_id:
            description: 'ID del ticket de iTop'
            required: true
            default: 'N/A'
          requester_name:
            description: 'Nombre del solicitante en iTop'
            required: false
            default: 'N/A'

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Muestra la información del ticket
            run: |
              echo "Workflow disparado desde iTop."
              echo "ID del Ticket: ${{ github.event.inputs.itop_ticket_id }}"
              echo "Nombre del Solicitante: ${{ github.event.inputs.requester_name }}"
    ```
    -   `on: workflow_dispatch`: Permite que el workflow sea disparado vía API.
    -   `inputs`: Define los parámetros que el workflow espera recibir.

---

## Paso 2: Crear un Personal Access Token (PAT) en GitHub

Se necesita un PAT para que iTop se autentique con la API de GitHub.

1.  **Navega a la configuración de desarrollador**:
    -   Ve a **GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)**.

2.  **Genera un nuevo token**:
    -   Haz clic en **Generate new token (classic)**.

3.  **Configura el token**:
    -   **Note**: Dale un nombre descriptivo (ej. `itop-webhook-integration`).
    -   **Expiration**: Selecciona una fecha de expiración.
    -   **Select scopes**: Marca la casilla `repo`.

4.  **Guarda el token**:
    -   Haz clic en **Generate token**.
    -   Copia el token inmediatamente y guárdalo en un lugar seguro. **No podrás volver a verlo**.

---

## Paso 3: Configurar la Conexión de Salida en iTop

Define la conexión a la API de GitHub.

1.  **Navega a las Conexiones de Salida**:
    -   Ve a **Herramientas de Administración > Integraciones > Conexiones de Salida**.

2.  **Crea una nueva conexión**:
    -   Haz clic en **Nueva...** y selecciona **Conexión de aplicación remota**.

3.  **Rellena las propiedades**:
    -   **Nombre**: `GitHub API`
    -   **URL**: `https://api.github.com`

4.  **Guarda la conexión** haciendo clic en **Crear**.

---

## Paso 4: Crear la Acción de Webhook en iTop

Define la llamada específica a la API para disparar el workflow.

1.  **Navega a las Acciones Webhook**:
    -   Ve a **Herramientas de Administración > Notificaciones > Acciones webhook (integraciones salientes)**.

2.  **Crea una nueva acción**:
    -   Haz clic en **Nueva...**.

3.  **Configura la acción**:
    -   **Descripción**: `Disparar Workflow de GitHub`
    -   **Conexión**: Selecciona `GitHub API`.
    -   **Método**: `POST`.
    -   **Ruta**: `/repos/TU_ORGANIZACION/TU_REPOSITORIO/actions/workflows/NOMBRE_DEL_ARCHIVO.yml/dispatches`
    -   **Cabeceras HTTP**:
        ```http
        Accept: application/vnd.github.v3+json
        Authorization: token TU_PAT_DE_GITHUB
        User-Agent: iTop Webhook
        ```
        *Recuerda reemplazar `TU_PAT_DE_GITHUB` con tu token.*
    -   **Cuerpo (Body)**:
        ```json
        {
          "ref": "main",
          "inputs": {
            "itop_ticket_id": "$this->id$",
            "requester_name": "$this->caller_id->friendlyname$"
          }
        }
        ```

4.  **Guarda la acción** haciendo clic en **Crear**.

---

## Paso 5: Crear el Disparador (Trigger) en iTop

Define el evento que iniciará todo el proceso.

1.  **Navega a los Disparadores**:
    -   Ve a **Herramientas de Administración > Notificaciones > Disparadores**.

2.  **Crea un nuevo disparador**:
    -   Haz clic en **Nuevo...**.

3.  **Configura las propiedades**:
    -   **Descripción**: `Al crear un requerimiento de usuario`.
    -   **Clase de Destino**: `Requerimiento de Usuario`.
    -   Selecciona el tipo de disparador: **(Cuando se crea un objeto)**.

4.  **Añade la acción al disparador**:
    -   Haz clic en **Aplicar** para guardar el disparador.
    -   En la pestaña **Acciones**, haz clic en **Añadir Acción...**.
    -   Busca y selecciona la acción `Disparar Workflow de GitHub`.
    -   Haz clic en **Añadir**.

---

## Paso 6: Verificación y Troubleshooting

1.  **Prueba de Extremo a Extremo**:
    -   Crea un **Requerimiento de Usuario** en iTop.
    -   Ve a tu repositorio de **GitHub > Pestaña "Actions"**.
    -   Verifica que el workflow se ha ejecutado y revisa sus logs para confirmar que los datos llegaron correctamente.

2.  **Solución de Problemas (Troubleshooting)**:
    -   Si no funciona, revisa los logs de iTop (`log/error.log`).
    -   Verifica que el PAT no ha expirado y tiene el scope `repo`.
    -   Asegúrate de que la URL, la organización, el repositorio y el nombre del archivo del workflow en la **Ruta** de la acción son correctos.