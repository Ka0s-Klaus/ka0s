# Módulo Ka0s Core - Concepto y Funcionamiento

## Descripción General
El **Módulo Ka0s Core** es el corazón de la infraestructura del proyecto. Define los componentes base necesarios para levantar una instancia operativa de Ka0s, gestionando desde la capa de contenedores hasta la seguridad y observabilidad.

## Componentes Principales

1.  **Gestión de Contenedores (Docker)**:
    *   Instalación personalizada y securizada de Docker Engine.
    *   Gestión visual mediante Portainer (última versión estable).
    *   Soporte para Registries privados para imágenes personalizadas.

2.  **Runners de GitHub (Self-Hosted)**:
    *   Implementación de runners personalizados a nivel de organización.
    *   Permite la ejecución de workflows de CI/CD dentro de la infraestructura propia, reduciendo costes y latencia.

3.  **Observabilidad (Stack ELK + Wazuh)**:
    *   **Wazuh**: Despliegue por defecto para detección de intrusiones y análisis de seguridad (SIEM). Requiere personalización post-despliegue.
    *   **ELK Stack**: Elastic, Logstash y Kibana para la gestión centralizada de logs.
    *   **NewRelic**: Recomendado para monitorización de rendimiento de aplicaciones (APM).

4.  **Seguridad Base**:
    *   Integración recomendada con Codacy para análisis de calidad de código.
    *   Soporte para `ubuntu.com/pro/attach` para parches de seguridad extendidos.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s definidos en `core/templates/workflow/basic-template.yaml`:

- **Identidad**: Define la variable `KAOS_MODULE` en su workflow para trazabilidad unificada en logs y notificaciones.
- **Gestión de Errores**: Implementa un job `handle-failure` que, en caso de fallo, genera automáticamente un **Incidente** en GitHub (y sincronizado con iTop) con etiquetas `itop-incident`, `triage`, `automated`.
- **Auditoría**: Implementa un job `end-workflow` que dispara el workflow `inspector.yml` al finalizar, asegurando que todos los logs y metadatos de ejecución sean auditados y persistidos.
- **Seguridad**: El workflow se ejecuta con permisos mínimos (Least Privilege) y utiliza secretos gestionados de forma segura.
