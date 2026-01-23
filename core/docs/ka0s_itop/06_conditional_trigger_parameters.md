# Integración Avanzada: Disparador Condicional y Parámetros Dinámicos

Esta guía explica cómo configurar iTop para que dispare un workflow de GitHub **solo** cuando se cumpla una condición específica (el título comienza por `[A]`) y cómo **analizar la descripción** del ticket para extraer parámetros dinámicos en formato `clave:valor`.

## Parte 1: Configuración en iTop

### 1. Crear el Disparador Condicional (OQL)

Para que el workflow solo se ejecute cuando el título empiece por `[A]`, debemos configurar un **Disparador (Trigger)** utilizando un filtro OQL.

1.  Ve a **Herramientas de Administración > Notificaciones > Disparadores**.
2.  Crea un nuevo disparador:
    *   **Descripción**: `Disparo GitHub si Título empieza por [A]`
    *   **Clase de Destino**: `UserRequest` (Requerimiento de Usuario)
    *   **Tipo de Disparador**: `on entering a state` (al entrar en un estado) o `on creation` (al crear).
    *   **Estado (si aplica)**: `new` (o el estado inicial que desees).
    *   **Filtro OQL del Disparador**:
        ```sql
        SELECT UserRequest WHERE title LIKE '[A]%'
        ```
    *   *Explicación*: Este filtro asegura que la acción asociada solo se ejecutará si el campo `title` comienza con los caracteres `[A]`.

### 2. Configurar la Acción Webhook con Descripción

Debemos modificar (o crear) la **Acción Webhook** para enviar la descripción completa del ticket a GitHub.

1.  Ve a **Herramientas de Administración > Notificaciones > Acciones webhook**.
2.  Edita tu acción de GitHub existente o crea una nueva.
3.  En el **Cuerpo (JSON)**, asegúrate de enviar el campo `description`. Dado que iTop envía HTML, enviaremos el contenido "crudo" para procesarlo en GitHub.

    ```json
    {
      "ref": "main",
      "inputs": {
        "itop_ticket_id": "$this->ref$",
        "requester_name": "$this->caller_id->friendlyname$",
        "raw_description": "$this->description$" 
      }
    }
    ```
    *   `raw_description`: Este nombre debe coincidir con el `input` que definiremos en el workflow de GitHub.

---

## Parte 2: Configuración del Workflow en GitHub

GitHub recibirá un bloque de texto (posiblemente con etiquetas HTML como `<p>`) que contiene tus parámetros. Necesitamos un paso en el workflow para limpiar y extraer esas variables.

### 1. Definir la Entrada `raw_description`

Edita tu archivo `.yml` (`.github/workflows/itop-triggered-workflow.yml`) para aceptar el nuevo parámetro.

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
      raw_description:
        description: 'Descripción completa del ticket para parsing'
        required: false
        default: ''
```

### 2. Crear el Paso de Parsing (Análisis)

Añade este paso al inicio de tu `job-core`. Este script:
1.  Limpia las etiquetas HTML (`<p>`, `<br>`, etc.).
2.  Lee línea por línea.
3.  Busca el patrón `clave:valor`.
4.  Exporta las variables encontradas como **Variables de Entorno** (`$GITHUB_ENV`) para que estén disponibles en pasos posteriores.

```yaml
jobs:
  job-core:
    runs-on: swarm-runners-scaleset
    steps:
      - name: Parse Description Parameters
        id: parser
        run: |
          echo "::group::Analizando Parámetros de iTop"
          
          # 1. Obtener la descripción cruda
          RAW_INPUT="${{ github.event.inputs.raw_description }}"
          
          # 2. Limpiar HTML básico (sed elimina tags <...>) y líneas vacías
          CLEAN_TEXT=$(echo "$RAW_INPUT" | sed 's/<[^>]*>//g' | sed '/^[[:space:]]*$/d')
          
          echo "Texto limpio encontrado:"
          echo "$CLEAN_TEXT"
          echo "--------------------------------"
          
          # 3. Iterar y extraer clave:valor
          # Se usa un delimitador especial para evitar problemas con saltos de línea
          while IFS= read -r line; do
            # Verificar si la línea tiene formato "clave:valor"
            if [[ "$line" == *":"* ]]; then
              # Extraer clave y valor
              KEY=$(echo "$line" | cut -d':' -f1 | xargs) # xargs hace trim de espacios
              VALUE=$(echo "$line" | cut -d':' -f2- | xargs)
              
              # Validar que la clave no esté vacía
              if [ ! -z "$KEY" ]; then
                echo "Parámetro detectado -> $KEY = $VALUE"
                
                # Exportar a GITHUB_ENV para uso global en el job
                echo "$KEY=$VALUE" >> $GITHUB_ENV
                
                # Opcional: Exportar como output del paso
                echo "$KEY=$VALUE" >> $GITHUB_OUTPUT
              fi
            fi
          done <<< "$CLEAN_TEXT"
          
          echo "::endgroup::"
```

### 3. Usar los Parámetros Extraídos

Ahora, en cualquier paso posterior del mismo job, puedes usar las variables directamente como variables de entorno.

*   **Ejemplo en iTop (Descripción del Ticket)**:
    ```text
    [A] Despliegue de Servidor
    target_env: produccion
    cpu_cores: 4
    memory_gb: 16
    ```

*   **Uso en el Workflow**:
    ```yaml
      - name: Deploy Server
        run: |
          echo "Desplegando en entorno: $target_env"
          echo "Configuración: $cpu_cores CPU / $memory_gb GB RAM"
    ```

---

## Ejemplo Completo del Workflow Actualizado

```yaml
name: Ka0s iTop Conditional Workflow

on:
  workflow_dispatch:
    inputs:
      itop_ticket_id:
        required: true
      raw_description:
        required: false

jobs:
  job-core:
    runs-on: ubuntu-latest
    steps:
      - name: Parse Params
        run: |
          RAW="${{ github.event.inputs.raw_description }}"
          # Lógica de parsing (ver arriba)
          # ... exporta variables ...

      - name: Execute Logic
        run: |
          if [ "$target_env" == "produccion" ]; then
             echo "CUIDADO: Ejecutando en PROD"
          fi
```

## Resumen de la Lógica

1.  **Filtro**: El disparador de iTop solo se activa si `title LIKE '[A]%'`.
2.  **Transporte**: iTop envía todo el contenido del campo HTML `description` en la variable `raw_description`.
3.  **Procesamiento**: GitHub limpia el HTML y convierte las líneas `clave:valor` en variables de entorno utilizables.
