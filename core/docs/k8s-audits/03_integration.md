# Integración Técnica: Ka0s Kubernetes Audits

Este documento detalla la implementación de los workflows y scripts de auditoría en Ka0s.

## Estructura de Directorios

```
audit/
├── k8sreport/       # Reportes completos de infraestructura
├── k8services/      # Auditorías puntuales de servicios
└── k8servicelog/    # Logs horarios de servicios
```

## Componentes

### 1. Auditoría de Infraestructura Completa

- **Workflow**: `.github/workflows/full-infrastructure-audit.yml`
- **Script**: `devops/core/k8s/full-infrastructure-audit.sh`
- **Trigger**: Semanal (`0 0 * * 0`) o Manual.

El script itera sobre todos los namespaces y genera un archivo Markdown detallado.

### 2. Auditoría de Servicio Específico

- **Workflow**: `.github/workflows/audit-service.yml`
- **Script**: `devops/core/k8s/audit-service.sh`
- **Trigger**: Manual (`workflow_dispatch`).
- **Inputs**: `service_name`, `namespace`.

El script realiza un `kubectl describe` del servicio y de los pods seleccionados.

### 3. Recolección de Logs de Servicios

- **Workflow**: `.github/workflows/collect-service-logs.yml`
- **Script**: `devops/core/k8s/collect-logs.sh`
- **Trigger**: Horario (`0 * * * *`).

El script busca todos los servicios, extrae sus selectores y recolecta los logs de los pods correspondientes usando `kubectl logs --since=1h`.

## Dependencias

- **Kubectl**: Debe estar configurado en el runner.
- **GitHub CLI (gh)**: Utilizado para notificaciones de incidentes.
- **JQ**: Necesario para procesar JSON (extraer selectores de servicios).
