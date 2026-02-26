# Ka0s SSH Connect - Concepto

## Descripción
`ssh-connect` es un **meta-workflow** y una **composite action** diseñada para abstraer la complejidad de conectarse de forma segura a servidores remotos.

## Problema que Resuelve
Evita duplicar la lógica de `install sshpass -> add host key -> ssh command` en cada workflow. Centraliza la seguridad y el manejo de errores de conexión.

## Arquitectura
Funciona inyectando scripts locales en el servidor remoto, ejecutándolos y recuperando los resultados (archivos/logs) de vuelta al runner de GitHub.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
