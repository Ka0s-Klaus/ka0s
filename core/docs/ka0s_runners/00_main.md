# Ka0s Runners (ARC)

Este módulo documenta la infraestructura de ejecución de CI/CD basada en **Actions Runner Controller (ARC)** en el clúster Kubernetes de Ka0s.

## Descripción General

Ka0s utiliza runners auto-hospedados y efímeros que escalan dinámicamente según la demanda de workflows de GitHub Actions. Esto permite:

1.  **Escalado Automático**: De 0 a N runners según la cola de trabajos.
2.  **Eficiencia de Costes**: Los recursos solo se consumen cuando hay trabajos activos.
3.  **Seguridad**: Cada job se ejecuta en un pod limpio y aislado que se destruye al finalizar.
4.  **Gestión Declarativa**: Toda la configuración se gestiona como código (GitOps) mediante Kustomize y Helm.

## Componentes Clave

*   **Namespace**: `actions-runner-system`
*   **Controlador**: `gha-runner-scale-set-controller` (gestiona los CRDs y la lógica de escalado).
*   **Scale Set**: `swarm-runners-scaleset` (define el grupo de runners y sus límites).
*   **Imagen**: `ka0score/actions-runner:1.0.3` (imagen customizada con herramientas preinstaladas).

## Enlaces Rápidos

*   [Concepto y Arquitectura](01_concept.md)
*   [Uso y Validación](02_usage_validation.md)
*   [Detalles Técnicos](03_technical.md)
