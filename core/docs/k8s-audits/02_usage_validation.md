# Guía de Uso y Validación: Ka0s Kubernetes Audits

Este documento explica cómo utilizar las herramientas de auditoría y cómo verificar que los reportes se están generando correctamente.

## 1. Auditoría de Infraestructura Completa

Este proceso genera un informe detallado de todo el clúster.

### Ejecución Manual
1.  Navega a la pestaña **Actions** en GitHub.
2.  Selecciona el workflow **"Ka0s Full Infrastructure Audit"**.
3.  Haz clic en **Run workflow**.

### Validación de Resultados
El workflow genera un archivo Markdown en:
- `audit/k8sreport/YYYYMMDD_HHMMSS_WORKFLOWID_k8sinfra.md`

El reporte incluye:
- Estado de nodos y recursos globales.
- Inventario por namespace (Workloads, Networking, Configuración).

## 2. Auditoría de Servicio Específico

Utiliza esta herramienta cuando necesites investigar un servicio concreto.

### Ejecución Manual
1.  Navega a la pestaña **Actions**.
2.  Selecciona el workflow **"Ka0s Audit Service"**.
3.  Haz clic en **Run workflow**.
4.  Rellena los inputs:
    - **Service Name**: El nombre exacto del servicio (ej. `my-app`).
    - **Namespace**: El namespace donde reside (default: `default`).

### Validación de Resultados
El workflow genera un archivo Markdown en:
- `audit/k8services/YYYYMMDD_HHMMSS_RUNID_nombre_del_servicio.md`

El reporte incluye:
- Definición YAML completa.
- `kubectl describe` detallado.
- Endpoints activos y Pods relacionados.
- Últimas 50 líneas de logs de los pods.
- Eventos de Kubernetes relacionados.

## 3. Recolección de Logs de Servicios

Este es un proceso automatizado que no requiere intervención manual, pero se puede validar su funcionamiento.

### Frecuencia
- Se ejecuta automáticamente cada hora (`0 * * * *`).
- También se puede lanzar manualmente desde Actions ("Ka0s Collect Service Logs").

### Validación de Resultados
Verifica la carpeta `audit/k8servicelog/`. Deberías ver archivos nuevos cada hora con el formato:
- `YYYYMMDD_HHMMSS_WORKFLOWID_nombre_del_servicio.log`

Cada archivo contiene los logs de la última hora (`--since=1h`) de todos los contenedores de los pods asociados al servicio.
