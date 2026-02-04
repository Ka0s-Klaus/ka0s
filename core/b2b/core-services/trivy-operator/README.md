# Trivy Operator (Security)

Este operador escanea automáticamente el cluster en busca de vulnerabilidades y genera reportes CRD que pueden visualizarse directamente en el Dashboard de Kubernetes.

## ¿Qué aporta al ecosistema?
Convierte el Dashboard en un **Centro de Seguridad**.

1.  **Escaneo Continuo**: Monitoriza vulnerabilidades en imágenes, configs incorrectas (misconfig) y secretos expuestos.
2.  **Visualización Integrada**: Los reportes aparecen como Custom Resources (`VulnerabilityReport`, `ConfigAuditReport`) en el Dashboard.

## Despliegue

```bash
kubectl apply -k .
```

## Ver Resultados
En el Dashboard de Kubernetes, navega a la sección **Custom Resource Definitions** -> **aquasecurity.github.io**.
Allí verás:
- `vulnerabilityreports`: CVEs detectados.
- `configauditreports`: Fallos de configuración y seguridad.
