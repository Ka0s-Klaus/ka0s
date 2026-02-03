# Ka0s Kubernetes CI/CD Automation

Este módulo define la estrategia de automatización para la Integración Continua (CI) y Despliegue Continuo (CD) de los servicios core de Ka0s (`core/b2b/core-services`) en el cluster Kubernetes.

## Resumen

El sistema proporciona un flujo de trabajo robusto y auditado que garantiza:
1.  **Validación Temprana (CI)**: Análisis de seguridad y buenas prácticas en ramas de desarrollo.
2.  **Despliegue Automatizado (CD)**: Aplicación de cambios al hacer merge a `main`.
3.  **Verificación Post-Despliegue**: Pruebas automáticas de salud de los servicios.
4.  **Auditoría**: Generación y almacenamiento de informes de validación y despliegue en el repositorio.

## Componentes Clave

| Componente | Tipo | Descripción | Ubicación |
| :--- | :--- | :--- | :--- |
| **CI K8s Validate** | Workflow | Valida manifiestos con Trivy en ramas feature. | `.github/workflows/ci-k8s-validate.yml` |
| **CD Core Services** | Workflow | Despliega servicios y verifica estado en `main`. | `.github/workflows/cd-core-services.yml` |
| **Verify Script** | Script | Script bash para validación profunda de pods y servicios. | `.github/scripts/k8s-verify-deployment.sh` |
| **Informes** | Data | Registro inmutable de validaciones y despliegues. | `audit/kube/` y `audit/deploy/` |

## Enlaces Rápidos
- [Concepto y Arquitectura](./01_concept.md)
- [Uso y Validación](./02_usage_validation.md)
- [Integración Técnica](./03_integration.md)
