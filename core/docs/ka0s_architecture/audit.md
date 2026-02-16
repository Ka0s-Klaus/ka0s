# Arquitectura: Audit (Cerebro de Evidencias)

## Descripción General

El directorio `audit/` actúa como el **"Cerebro de Evidencias"** o **Data Lake** local del proyecto Ka0s. Su función trasciende el simple almacenamiento de archivos, posicionándose como un sistema de persistencia temporal y punto de intercambio crítico entre las automatizaciones (GitHub Actions) y los sistemas de visualización y análisis (MongoDB, ELK, Metabase).

## Funciones Principales

### 1. Persistencia de Logs y Evidencias (System of Record)
A diferencia de los logs de GitHub Actions, que tienen una retención limitada, `audit/` garantiza la trazabilidad a largo plazo. Los workflows guardan activamente resultados y evidencias en este directorio, asegurando que la historia de ejecuciones y auditorías perdure.

### 2. Puente de Datos (Data Pipeline)
Los archivos almacenados (principalmente JSON y logs) son "temporales" en el contexto del repositorio, pero fundamentales como fuente de verdad para la ingesta de datos. Están diseñados para ser consumidos por bases de datos externas (como MongoDB), alimentando posteriormente dashboards de observabilidad en herramientas como Kibana o Metabase.

### 3. Depuración Offline
Facilita la revisión granular de ejecuciones pasadas (ej. `inspector/21978900433.log`) directamente desde el repositorio, sin dependencia de la interfaz web de GitHub Actions ni de sus tiempos de expiración de logs.

## Flujos de Datos (Orígenes)

El análisis de los workflows del sistema revela los siguientes flujos de escritura hacia `audit/`:

| Workflow | Destino en `audit/` | Propósito |
| :--- | :--- | :--- |
| **`inspector.yml`** | `audit/inspector/` | Almacena logs completos (`.log`) y metadatos (`.json`) de workflows inspeccionados para depuración profunda. |
| **`kaos.yml`** | `audit/kaos/` | Registra resúmenes de ejecución de los eventos principales del repositorio. |
| **`execution.yml`** | `audit/execution/`, `audit/eresults/` | Guarda la salida y resultados de automatizaciones disparadas mediante Issues (enfoque GitOps). |
| **`audit-cluster-status.yml`** | `audit/kube/` | Genera y almacena reportes de salud del clúster Kubernetes (`cluster-report-*.md`). |

## Estructura de Directorios

La estructura interna de `audit/` refleja los diferentes módulos y tipos de evidencias recolectadas:

- **inspector/**: Logs detallados de inspección.
- **kaos/**: Eventos generales del sistema Ka0s.
- **execution/** & **eresults/**: Resultados de ejecuciones GitOps.
- **kube/**: Reportes de estado de Kubernetes.
- *(Otros directorios según módulos activos)*
