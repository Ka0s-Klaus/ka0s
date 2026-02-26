# Ka0s Cluster System Update - Concepto

## Descripción General
Este módulo automatiza el mantenimiento y actualización del sistema operativo de los nodos del clúster Kubernetes.

## Arquitectura "Bastion Host"
Utiliza un enfoque de seguridad donde:
1.  El runner de GitHub conecta **solo** al nodo manager (`k8-manager`).
2.  Desde el manager, se utiliza un script (`system-update.sh`) para saltar a los nodos workers.
3.  Esto minimiza la superficie de ataque, ya que solo un puerto SSH necesita estar expuesto o accesible desde el runner.

## Flujo de Datos
`Runner` -> `SSH` -> `Manager` -> `SSH Interno` -> `Workers (Node 20, 30, 40)`

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
