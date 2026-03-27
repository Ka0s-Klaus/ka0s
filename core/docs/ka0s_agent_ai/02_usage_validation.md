# Ka0s Agent AI - Validation Suite (Pruebas de Aceptación)

Este documento define la batería de pruebas estándar para validar el correcto funcionamiento del módulo **Ka0s Agent AI**. Estas pruebas deben ejecutarse después de cualquier cambio significativo en el código de inferencia, ingestión o workflows.

## 1. Pruebas de Ingestión de Conocimiento

### Test 1.1: Ingestión Completa (Smoke Test)
**Objetivo**: Verificar que el script de ingestión procesa archivos y carga vectores en Postgres sin errores.

*   **Comando**:
    ```bash
    python core/ai/memory/ingest_local.py
    ```
*   **Criterio de Éxito**:
    *   Log final muestra `Ingestion complete. Total files processed: N` (donde N > 50).
    *   No hay errores `ERROR` o `CRITICAL` en la salida.
    *   Consulta SQL `SELECT count(*) FROM kaos_memory;` devuelve > 0.

### Test 1.2: Reconocimiento de Nuevos Archivos
**Objetivo**: Verificar que nuevos archivos YAML o MD son detectados.

*   **Pasos**:
    1.  Crear archivo temporal `core/test_knowledge.yaml` con contenido único.
    2.  Ejecutar `ingest_local.py`.
    3.  Consultar SQL: `SELECT content FROM kaos_memory WHERE source LIKE '%test_knowledge.yaml%';`
*   **Criterio de Éxito**: La consulta devuelve el contenido del archivo.

---

## 2. Pruebas de Inferencia (RAG)

### Test 2.1: Respuesta Básica (Hello World)
**Objetivo**: Verificar conectividad con Ollama y Postgres.

*   **Comando**:
    ```bash
    python core/ai/inference/query.py "¿Qué es Ka0s?"
    ```
*   **Criterio de Éxito**:
    *   Respuesta coherente en español.
    *   Menciona "framework", "operaciones" o conceptos clave del proyecto.

### Test 2.2: Respuesta Técnica (Code Aware)
**Objetivo**: Verificar que el agente usa el contexto del código (YAMLs/Scripts).

*   **Comando**:
    ```bash
    python core/ai/inference/query.py "¿Qué imagen Docker usa el servicio de MongoDB?"
    ```
*   **Criterio de Éxito**:
    *   Respuesta contiene la imagen exacta definida en `core/b2b/core-services/mongo/mongo-statefulset.yaml` (ej. `mongo:5.0` o la que corresponda).

### Test 2.3: Formato Markdown
**Objetivo**: Verificar que la salida cumple el formato estricto.

*   **Comando**:
    ```bash
    python core/ai/inference/query.py "Lista los pasos para instalar dependencias"
    ```
*   **Criterio de Éxito**:
    *   Uso de listas numeradas (`1.`, `2.`).
    *   Bloques de código para comandos (` ```bash `).

---

## 3. Pruebas de Integración (GitHub Actions)

### Test 3.1: Workflow de Respuesta a Issues
**Objetivo**: Validar el flujo completo end-to-end en GitHub.

*   **Pasos**:
    1.  Crear una Issue con título `[TEST] Ka0s Agent Check`.
    2.  Añadir etiqueta `kaos-agent` (o `ka0s-agent`).
    3.  Cuerpo: "¿Cómo reinicio el cluster?".
*   **Criterio de Éxito**:
    1.  Workflow `Ka0s Agent Issue Responder` se dispara.
    2.  Bot comenta "Procesando tu pregunta..." con enlace al log.
    3.  Bot comenta la respuesta final en < 5 minutos.
    4.  El enlace al log funciona.

### Test 3.2: Manejo de Errores (Resiliencia)
**Objetivo**: Verificar comportamiento cuando Ollama falla.

*   **Pasos**:
    1.  (Simulado) Apagar pod de Ollama o cambiar URL en secrets a una inválida.
    2.  Lanzar workflow manual `kaos-agent-query.yaml`.
*   **Criterio de Éxito**:
    *   Workflow falla (rojo).
    *   Se genera una Issue de Incidente automática (si está configurado `handle-failure`).
    *   Mensaje de error claro en los logs.

---

## 4. Matriz de Validación de Modelos

| Modelo | Uso Recomendado | Velocidad (CPU) | Calidad RAG | Estado |
| :--- | :--- | :--- | :--- | :--- |
| `qwen2:0.5b` | Tests rápidos | ⚡️ Muy Alta (<30s) | Baja (Alucinaciones) | Deprecado |
| `qwen2:1.5b` | **Producción** | 🚀 Alta (<2m) | Media-Alta | **Activo** |
| `llama3.1:8b` | Análisis complejo | 🐢 Baja (>5m) | Muy Alta | Timeout Risk |
| `phi3:mini` | Alternativa | 🚀 Alta (<2m) | Media-Alta | Backup |

---

## 5. Procedimiento de Mantenimiento

1.  **Semanal**: Ejecutar `ingest_local.py` para refrescar vectores.
2.  **Mensual**: Revisar logs de `audit/response/` para evaluar calidad de respuestas.
3.  **Trimestral**: Evaluar actualización de modelo LLM (ej. `qwen2.5` o `llama4`).
