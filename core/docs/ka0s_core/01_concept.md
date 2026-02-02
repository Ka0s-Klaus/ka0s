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
