# Protocolo de Verificación de Incidencias (SOP)

Este documento define el procedimiento estándar para la revisión y validación de Issues de tipo **Incidente** o **Fallo de Workflow** en Ka0s.

## 🎯 Objetivo
Evitar intervenciones innecesarias o despliegues correctivos sobre servicios que ya están operativos, descartando falsos positivos o problemas transitorios.

## 📋 Pasos de Verificación

Ante una Issue que reporte un fallo (ej. "Fallo en workflow CD", "Servicio no disponible"), se deben ejecutar los siguientes pasos **antes** de proponer cualquier solución.

### 1. Análisis del Contexto
Obtener información sobre qué falló y qué cambios estaban involucrados.

*   **Revisar la Issue**: Identificar el Workflow, Run ID y Commit.
*   **Comando de Diagnóstico**:
    ```bash
    gh run view <RUN_ID> --json headSha,createdAt,conclusion,jobs
    ```
*   **Revisar Cambios**:
    ```bash
    git show --stat <COMMIT_SHA>
    ```

### 2. Verificación del Estado del Servicio (K8s)
Comprobar si el recurso afectado está corriendo en el clúster, independientemente del fallo del pipeline.

*   **Listar Pods**: Verificar estado (`Running`) y antigüedad (`AGE`). Si la antigüedad es mayor al fallo, el servicio no se reinició (posiblemente bien) o es una versión anterior estable.
    ```bash
    kubectl get pods -n <NAMESPACE>
    ```
*   **Revisar Logs**: Buscar errores recientes o confirmación de arranque exitoso.
    ```bash
    kubectl logs <POD_NAME> -n <NAMESPACE> --tail=50
    ```
*   **Verificar Objetos de Red**:
    ```bash
    kubectl get service -n <NAMESPACE>
    kubectl get ingress -n <NAMESPACE>
    ```

### 3. Validación Funcional (Prueba de Humo)
Confirmar que el servicio responde a peticiones reales.

*   **Petición HTTP/Curl**:
    ```bash
    curl -I https://<URL_DEL_SERVICIO>
    ```
    *   Esperado: `HTTP/1.1 200 OK` o `302 Found`.
    *   Si responde 200, el servicio está operativo.

### 4. Resolución y Cierre
Basado en las evidencias recolectadas:

*   **Escenario A: Servicio Operativo (Falso Positivo / Transitorio)**
    *   **Acción**: Cerrar la Issue.
    *   **Comentario Obligatorio**: Adjuntar evidencias (logs, output de curl, estado de pods).
    *   **Plantilla**:
        > "El servicio [NOMBRE] está operativo y respondiendo correctamente. El fallo en el pipeline parece haber sido transitorio. Se cierra la incidencia tras validar la disponibilidad."

*   **Escenario B: Servicio Caído o Degradado**
    *   **Acción**: Proceder con el diagnóstico profundo y remediación (logs detallados, rollback, hotfix).

## 🧠 Regla de Oro
> **"Nunca asumas que un pipeline rojo significa servicio caído. Verifica siempre la realidad del clúster."**
