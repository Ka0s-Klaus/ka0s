# Paso 3: Configuración del Trigger y la Acción en iTop

Dentro de iTop, necesitas configurar un **Trigger** que reaccione a un evento (ej. la creación de un ticket) y una **Action** que realice la llamada a la API de GitHub.

## 1. Crear la Acción (Action)

La acción será una llamada a un webhook que apunta a la API de GitHub.

-   **Tipo**: `Webhook call`.
-   **URL**: La URL de la API de GitHub para disparar un workflow. Tiene el siguiente formato:
    ```
    https://api.github.com/repos/OWNER/REPO/actions/workflows/WORKFLOW_FILE.yml/dispatches
    ```
    Reemplaza `OWNER`, `REPO` y `WORKFLOW_FILE.yml` con los valores de tu repositorio (ej. `itop-triggered-workflow.yml`).

-   **Headers**: Debes configurar los siguientes encabezados HTTP:
    -   `Accept: application/vnd.github.v3+json`
    -   `Authorization: token TU_PAT_DE_GITHUB` (reemplaza `TU_PAT_DE_GITHUB` con el token que creaste).

-   **Body (JSON)**: El cuerpo de la petición `POST` debe contener la referencia a la rama (`ref`) y los `inputs` que espera el workflow.
    ```json
    {
      "ref": "main",
      "inputs": {
        "itop_ticket_id": "$this->id()$",
        "itop_ticket_title": "$this->title()$"
      }
    }
    ```
    -   `$this->id()$` y `$this->title()$` son placeholders de iTop que se reemplazarán con los valores del ticket que disparó el trigger.

## 2. Crear el Trigger

El trigger define cuándo se debe ejecutar la acción.

-   **Target Class**: La clase de objeto que activará el trigger (ej. `UserRequest` o `Incident`).
-   **State**: El estado en el que debe estar el objeto (ej. `new`).
-   **Action**: Selecciona la acción de webhook que creaste en el paso anterior.

Una vez configurado, cada vez que se cree un nuevo `UserRequest` (o la clase que hayas definido), iTop enviará la petición a GitHub Actions, ejecutando el workflow.