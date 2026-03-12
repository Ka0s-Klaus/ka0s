# Módulo Ka0s Security Audit

Módulo encargado de la auditoría continua de seguridad del clúster Kubernetes, cubriendo Workloads, RBAC y Networking.

## Índice de Documentación
1.  [**Concepto y Arquitectura**](./01_concept.md)
    *   *Seguridad ofensiva, estándares Pod Security y arquitectura de túnel.*
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
    *   *Ejecución manual/programada e interpretación de reportes.*
3.  [**Integración en el Ecosistema**](./03_integration.md)
    *   *Dependencias (Tunneling), secretos y gestión de artefactos.*

## Scripts de Auditoría
*   [`security-audit-workloads.sh`](../../devops/core/k8s/security-audit-workloads.sh): Auditoría de Pods y Contenedores.
*   [`security-audit-rbac-net.sh`](../../devops/core/k8s/security-audit-rbac-net.sh): Auditoría de Roles y Redes.

## Referencias
*   [Kubernetes Security Concepts](https://kubernetes.io/docs/concepts/security/)
*   [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)
