# Concepto y Arquitectura: CI/CD para Kubernetes

## Filosofía
El sistema de CI/CD de Ka0s para Kubernetes se basa en el principio de **"GitOps Simplificado"** y **"Auditoría Continua"**.
No utilizamos un operador GitOps complejo (como ArgoCD) en esta fase, sino que aprovechamos GitHub Actions como orquestador central para mantener la simplicidad y el control total sobre el proceso de validación y notificación.

## Flujo de Trabajo (Pipeline)

El pipeline se divide estrictamente en dos fases según la rama de trabajo:

### 1. Fase de Validación (CI) - Ramas de Desarrollo
*   **Trigger**: Push a cualquier rama excepto `main` que afecte a `core/b2b/core-services/**`.
*   **Objetivo**: Garantizar que el código es seguro y sintácticamente correcto antes de fusionarse.
*   **Herramienta**: [Trivy](https://trivy.dev/) (Scanner de seguridad y configuración).
*   **Resultado**:
    *   Bloqueo del proceso si hay vulnerabilidades críticas.
    *   Generación de informe en `audit/kube/validation-report-<branch>-<id>.md`.

### 2. Fase de Despliegue (CD) - Rama Main
*   **Trigger**: Push a `main` (usualmente vía Pull Request merge).
*   **Objetivo**: Aplicar cambios al cluster y verificar su funcionamiento real.
*   **Herramienta**: `kubectl` + `kustomize`.
*   **Lógica Inteligente**:
    *   Detecta qué servicios han cambiado (diff entre commits).
    *   Identifica automáticamente el Namespace del servicio.
    *   Aplica cambios (`kubectl apply -k`).
    *   Espera al rollout (`kubectl rollout status`).
*   **Resultado**:
    *   Servicio actualizado en el cluster.
    *   Generación de informe en `audit/deploy/deployment-report-<service>-<id>.md`.

## Arquitectura de Verificación

Para evitar "falsos positivos" (despliegues que Kubernetes marca como "OK" pero que no funcionan a nivel de aplicación), hemos implementado una capa de **Verificación Avanzada**.

Este proceso se ejecuta post-despliegue y valida:
1.  **Pods**: Estado `Running` o `Completed`.
2.  **Red**: Existencia de Endpoints activos (pods recibiendo tráfico).
3.  **Acceso Externo** (Opcional): Si el servicio espera una IP externa específica (ej. `itop` -> `192.168.1.240`), valida que el balanceador la haya asignado correctamente.

## Estructura de Directorios Afectada

```
ka0s/
├── .github/
│   ├── workflows/
│   │   ├── ci-k8s-validate.yml    # CI Logic
│   │   └── cd-core-services.yml   # CD Logic
│   └── scripts/
│       └── k8s-verify-deployment.sh # Script de verificación
├── core/b2b/core-services/        # Origen de los despliegues
└── audit/                         # Destino de los informes
    ├── kube/                      # Informes de CI
    └── deploy/                    # Informes de CD
```

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
