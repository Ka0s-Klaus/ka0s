# Concepto y Arquitectura: ARC en Ka0s

## Arquitectura

La implementación se basa en la versión moderna de **Actions Runner Controller (ARC)**, que utiliza el patrón "Runner Scale Set".

```mermaid
graph TD
    GH[GitHub Actions Service] -->|Webhooks/Long Polling| ARC[ARC Controller]
    ARC -->|Crea| EPH[Ephemeral Runners (Pods)]
    EPH -->|Ejecuta| JOB[CI/CD Job]
    
    subgraph "Kubernetes Cluster (Ka0s)"
        subgraph "Namespace: actions-runner-system"
            ARC
            SS[RunnerScaleSet]
            EPH
        end
    end
```

### Flujo de Trabajo

1.  **Trigger**: Un evento en GitHub (push, PR, workflow_dispatch) encola un trabajo.
2.  **Detección**: El `gha-runner-scale-set-controller` detecta el trabajo pendiente asignado al Scale Set `swarm-runners-scaleset`.
3.  **Escalado**: El controlador crea un recurso `EphemeralRunner`.
4.  **Ejecución**: Se levanta un Pod que se registra contra GitHub, ejecuta el trabajo y luego termina.
5.  **Limpieza**: El controlador elimina el Pod y el recurso `EphemeralRunner`.

## Decisiones de Diseño

### 1. Enfoque Declarativo (GitOps)
A diferencia de la instalación manual con Helm, utilizamos **Kustomize** (`core/b2b/core-services/runners/`) para orquestar los charts de Helm. Esto permite:
*   Versionar la configuración completa.
*   Aplicar parches específicos por entorno si fuera necesario.
*   Integrarse nativamente con el pipeline de CD de Ka0s.

### 2. Gestión de Secretos Transparente
La autenticación con GitHub (App ID, Private Key) es crítica.
*   **Antes**: Scripts manuales (`bootstrap-secrets.sh`) que requerían intervención humana.
*   **Ahora**: El pipeline de CD (`cd-core-services.yml`) inyecta automáticamente las credenciales desde los Secretos de GitHub (`PRIVATE_KEY_PEM`) en tiempo de despliegue, eliminando pasos manuales y riesgos de seguridad.

### 3. Límites de Escalado
Se configuran límites estrictos (`minRunners`, `maxRunners`) en el `RunnerScaleSet` para proteger el clúster de saturación, garantizando que procesos críticos del sistema no se vean afectados por picos de carga en CI/CD.
