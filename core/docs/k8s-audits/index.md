# Ka0s Kubernetes Audits

Este módulo agrupa los flujos de trabajo diseñados para la auditoría exhaustiva, inspección de servicios y recolección de logs en los clústeres de Kubernetes gestionados por Ka0s.

## 1. Auditoría de Infraestructura Completa

Este flujo genera una "radiografía" completa del estado actual del clúster, incluyendo todos los recursos desplegados en todos los namespaces.

- **Workflow**: `.github/workflows/full-infrastructure-audit.yml`
- **Script**: `devops/core/k8s/full-infrastructure-audit.sh`
- **Frecuencia**: Semanal (Domingos 00:00 UTC) o Manual.
- **Salida**: `audit/k8sreport/YYYYMMDD_HHMMSS_WORKFLOWID_k8sinfra.md`

### Contenido del Reporte
- Nodos y estado del clúster.
- Storage Classes y PVs.
- Por cada Namespace:
    - Workloads (Deployments, StatefulSets, DaemonSets).
    - Pods (Estado y ubicación).
    - Networking (Services, Ingress).
    - Configuración (ConfigMaps, Secrets, PVCs).

## 2. Auditoría de Servicio Específico

Herramienta bajo demanda para inspeccionar en profundidad un servicio concreto, útil para troubleshooting y validación post-despliegue.

- **Workflow**: `.github/workflows/audit-service.yml`
- **Script**: `devops/core/k8s/audit-service.sh`
- **Trigger**: Manual (`workflow_dispatch`).
- **Inputs**:
    - `service_name`: Nombre del servicio (Requerido).
    - `namespace`: Namespace del servicio (Default: `default`).
- **Salida**: `audit/k8services/YYYYMMDD_HHMMSS_RUNID_nombre_del_servicio.md`

### Detalles Inspeccionados
- Definición YAML completa del servicio.
- `kubectl describe` detallado.
- Endpoints activos.
- Pods relacionados (basado en selectores).
- Logs recientes (últimas 50 líneas) de los pods asociados.
- Eventos de Kubernetes relacionados con el servicio.

## 3. Recolección de Logs de Servicios

Automatismo para la persistencia de logs, permitiendo auditoría forense y análisis de tendencias.

- **Workflow**: `.github/workflows/collect-service-logs.yml`
- **Script**: `devops/core/k8s/collect-logs.sh`
- **Frecuencia**: Horaria (`0 * * * *`).
- **Salida**: `audit/k8servicelog/YYYYMMDD_HHMMSS_WORKFLOWID_nombre_del_servicio.log`

### Funcionamiento
1. Itera sobre **todos** los servicios del clúster.
2. Identifica los pods asociados mediante el selector del servicio.
3. Extrae los logs de la última hora (`--since=1h`) de todos los contenedores.
4. Almacena los logs en archivos individuales por servicio.

## Estructura de Directorios de Auditoría

```
audit/
├── k8sreport/       # Reportes completos de infraestructura
├── k8services/      # Auditorías puntuales de servicios
└── k8servicelog/    # Logs horarios de servicios
```
