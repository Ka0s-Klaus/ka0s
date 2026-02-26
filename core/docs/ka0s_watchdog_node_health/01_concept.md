# Concepto: Automatización de la Salud del Cluster

## Filosofía "Self-Healing"

En Ka0s, no esperamos a que un humano detecte un problema crítico de infraestructura. El sistema **Watchdog** implementa el patrón de diseño "Monitor-Actuator":

1.  **Monitor (Sensor)**: Verifica constantemente invariantes del sistema (ej. "Los nodos deben tener espacio en disco").
2.  **Actuator (Executor)**: Ejecuta una acción predefinida e idempotente cuando se viola un invariante.

## Por qué DiskPressure?

La presión de disco es una de las condiciones más peligrosas en Kubernetes. Si un nodo se queda sin espacio:
*   El Runtime de contenedores (containerd) puede fallar.
*   Los logs dejan de escribirse.
*   Kubelet puede dejar de reportar estado.

Aislar el nodo (`cordon`) previene que el Scheduler envíe nuevos Pods a un entorno hostil, conteniendo el "radio de explosión".

## Cadena de Reacción

```mermaid
graph TD
    A[Cron Schedule] -->|Every Hour| B(Watchdog Workflow)
    B --> C{Script Python Check}
    C -->|Healthy| D[Log Success]
    C -->|DiskPressure Detected| E[Trigger Ops Management]
    E --> F[Cordon Node]
    D --> G[Trigger Audit]
    F --> G[Trigger Audit Cluster Status]
```

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
