# Workflow de GitHub: Cierre Automático de Tickets en iTop

Este documento detalla el funcionamiento, la configuración y la estructura del workflow avanzado de integración con iTop. Este workflow no solo ejecuta una tarea, sino que gestiona el ciclo de vida completo del ticket en iTop (Resolución -> Cierre), manejando tanto escenarios de éxito como de fallo.

## Resumen del Flujo

1.  **Disparo**: iTop invoca el workflow mediante `workflow_dispatch` al crear un ticket.
2.  **Ejecución**: GitHub Actions realiza la tarea técnica (script, despliegue, tests, etc.).
3.  **Actualización de iTop**:
    *   **Si es Exitoso**:
        1.  Resuelve el ticket (`ev_resolve`) con la solución.
        2.  Asigna el ticket al usuario de la API.
        3.  Cierra el ticket (`ev_close`) con satisfacción "Muy Satisfecho" (4).
    *   **Si Falla**:
        1.  Resuelve el ticket (`ev_resolve`) indicando el error y enlazando los logs en el `public_log`.
        2.  Asigna el ticket al usuario de la API.
        3.  Cierra el ticket (`ev_close`) con satisfacción "Muy Insatisfecho" (1).

---

## Requisitos Previos

### Secretos y Variables en GitHub
El workflow requiere la configuración de las siguientes variables en el repositorio (**Settings > Secrets and variables > Actions**):

| Nombre | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `ITOP_URL` | Secret / Variable | URL base de tu instancia de iTop. | `https://itop.miempresa.com` |
| `ITOP_API_USER` | Secret | Usuario de iTop con permisos REST. | `github_api_user` |
| `ITOP_API_PASSWORD` | Secret | Contraseña del usuario REST. | `S3cretP@ssword!` |

> **Nota**: `ITOP_URL` se busca automáticamente tanto en Secrets como en Variables para mayor flexibilidad.

---

## Estructura del Workflow (`.github/workflows/itop-triggered-workflow.yml`)

### 1. Disparador (`on: workflow_dispatch`)
Define los parámetros de entrada que iTop debe enviar.

```yaml
on:
  workflow_dispatch:
    inputs:
      itop_ticket_id:
        description: 'ID del ticket de iTop'
        required: true
      requester_name:
        description: 'Nombre del solicitante'
        required: true
```

### 2. Job Principal (`job-core`)
Aquí es donde ocurre la "magia" técnica. Es el trabajo que realmente queremos automatizar.

```yaml
jobs:
  job-core:
    runs-on: swarm-runners-scaleset
    steps:
      - name: Run automation script
        run: |
          # Tu lógica de automatización aquí
          echo "Ejecutando tarea..."
```

### 3. Job de Actualización (`update-itop`)
Este job se ejecuta **siempre** (`if: always()`) al finalizar `job-core`, pero tiene pasos condicionales para éxito o fracaso.

#### Bloque de Éxito (`if: needs.job-core.result == 'success'`)
Realiza dos llamadas secuenciales a la API de iTop:

1.  **Resolver**:
    *   **Estímulo**: `ev_resolve`
    *   **Campos**:
        *   `solution`: "La automatización se ejecutó correctamente."
        *   `agent_id`: Busca el ID de la persona asociada al usuario de la API usando OQL:
            `SELECT Person JOIN User ON User.contactid = Person.id WHERE User.login = 'github_api_user'`
2.  **Cerrar**:
    *   **Estímulo**: `ev_close`
    *   **Campos**:
        *   `user_satisfaction`: `4` (Muy Satisfecho)

#### Bloque de Fallo (`if: needs.job-core.result == 'failure'`)
Similar al éxito, pero con datos de error:

1.  **Resolver**:
    *   **Campos**:
        *   `solution`: Mensaje de error con enlace a los logs de GitHub.
        *   `public_log`: Añade una entrada (`add_item`) con el enlace al error.
2.  **Cerrar**:
    *   **Campos**:
        *   `user_satisfaction`: `1` (Muy Insatisfecho)
        *   `user_comment`: "El proceso automático falló."

---

## Ejemplo Completo de Código

Puedes copiar y pegar este contenido en tu archivo `.github/workflows/itop-triggered-workflow.yml`.

```yaml
name: Ka0s iTop Triggered Workflow

on:
  workflow_dispatch:
    inputs:
      itop_ticket_id:
        description: 'ID del ticket de iTop'
        required: true
        default: 'N/A'
      requester_name:
        description: 'Nombre del solicitante'
        required: true
        default: 'Ka0sC0re'

jobs:
  job-core:
    runs-on: swarm-runners-scaleset
    outputs:
      status: ${{ job.status }}
    steps:
      - name: Print iTop Data
        run: |
          echo "Workflow iniciado desde iTop."
          echo "ID del Ticket: ${{ github.event.inputs.itop_ticket_id }}"

      - name: Run automation script
        id: automation
        run: |
          echo "Ejecutando la tarea automatizada..."
          # Descomentar para probar el fallo:
          # exit 1

  update-itop:
    runs-on: swarm-runners-scaleset
    needs: job-core
    if: always()
    steps:
      - name: Update iTop on Success
        if: needs.job-core.result == 'success'
        env:
          ITOP_URL: ${{ secrets.ITOP_URL || vars.ITOP_URL }}
          ITOP_USER: ${{ secrets.ITOP_API_USER }}
          ITOP_PASSWORD: ${{ secrets.ITOP_API_PASSWORD }}
        run: |
          if [ -z "$ITOP_URL" ]; then
            echo "::error::La variable ITOP_URL no se encuentra en Secrets ni en Variables."
            exit 1
          fi
          
          # 1. Resolver Ticket
          JSON_PAYLOAD=$(cat <<EOF
          {
            "operation": "core/apply_stimulus",
            "class": "UserRequest",
            "key": "${{ github.event.inputs.itop_ticket_id }}",
            "stimulus": "ev_resolve",
            "comment": "Ticket resuelto automáticamente.",
            "fields": {
              "solution": "La automatización se ejecutó correctamente.",
              "agent_id": "SELECT Person JOIN User ON User.contactid = Person.id WHERE User.login = '${ITOP_USER}'"
            }
          }
          EOF
          )
          curl -k -X POST "${ITOP_URL}/webservices/rest.php?version=1.3" \
          -u "${ITOP_USER}:${ITOP_PASSWORD}" \
          --data-urlencode "json_data=$JSON_PAYLOAD"

          # 2. Cerrar Ticket
          JSON_PAYLOAD_CLOSE=$(cat <<EOF
          {
            "operation": "core/apply_stimulus",
            "class": "UserRequest",
            "key": "${{ github.event.inputs.itop_ticket_id }}",
            "stimulus": "ev_close",
            "comment": "Cierre automático.",
            "fields": {
              "user_satisfaction": 4,
              "user_comment": "Cerrado automáticamente por GitHub Actions."
            }
          }
          EOF
          )
          curl -k -X POST "${ITOP_URL}/webservices/rest.php?version=1.3" \
          -u "${ITOP_USER}:${ITOP_PASSWORD}" \
          --data-urlencode "json_data=$JSON_PAYLOAD_CLOSE"

      - name: Update iTop on Failure
        if: needs.job-core.result == 'failure'
        env:
          ITOP_URL: ${{ secrets.ITOP_URL || vars.ITOP_URL }}
          ITOP_USER: ${{ secrets.ITOP_API_USER }}
          ITOP_PASSWORD: ${{ secrets.ITOP_API_PASSWORD }}
        run: |
          if [ -z "$ITOP_URL" ]; then
            echo "::error::La variable ITOP_URL no se encuentra en Secrets ni en Variables."
            exit 1
          fi

          ERROR_URL="${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
          
          # 1. Resolver con Error
          JSON_PAYLOAD=$(cat <<EOF
          {
            "operation": "core/apply_stimulus",
            "class": "UserRequest",
            "key": "${{ github.event.inputs.itop_ticket_id }}",
            "stimulus": "ev_resolve",
            "comment": "Fallo en workflow.",
            "fields": {
              "solution": "Error en automatización: ${ERROR_URL}",
              "agent_id": "SELECT Person JOIN User ON User.contactid = Person.id WHERE User.login = '${ITOP_USER}'",
              "public_log": {
                "add_item": {
                  "message": "Fallo detectado. Ver logs: ${ERROR_URL}",
                  "format": "text"
                }
              }
            }
          }
          EOF
          )
          curl -k -X POST "${ITOP_URL}/webservices/rest.php?version=1.3" \
          -u "${ITOP_USER}:${ITOP_PASSWORD}" \
          --data-urlencode "json_data=$JSON_PAYLOAD"

          # 2. Cerrar con Insatisfacción
          JSON_PAYLOAD_CLOSE=$(cat <<EOF
          {
            "operation": "core/apply_stimulus",
            "class": "UserRequest",
            "key": "${{ github.event.inputs.itop_ticket_id }}",
            "stimulus": "ev_close",
            "comment": "Cierre por fallo.",
            "fields": {
              "user_satisfaction": 1,
              "user_comment": "Proceso fallido."
            }
          }
          EOF
          )
          curl -k -X POST "${ITOP_URL}/webservices/rest.php?version=1.3" \
          -u "${ITOP_USER}:${ITOP_PASSWORD}" \
          --data-urlencode "json_data=$JSON_PAYLOAD_CLOSE"
```
