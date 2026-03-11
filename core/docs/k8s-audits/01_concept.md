# Concepto y Arquitectura: Ka0s Kubernetes Audits

Este módulo agrupa las herramientas de auditoría y observabilidad diseñadas para mantener un control exhaustivo sobre el estado de los clústeres de Kubernetes en Ka0s.

## Filosofía de Observabilidad

En Ka0s, la observabilidad no es solo monitoreo pasivo, sino la capacidad de generar evidencias tangibles y persistentes del estado de la infraestructura. Este módulo responde a tres necesidades críticas:

1.  **Visión Holística (Full Audit)**: Necesidad de una "foto" completa del clúster para auditorías de cumplimiento y revisión de capacidad.
2.  **Troubleshooting Quirúrgico (Service Audit)**: Capacidad de profundizar en un servicio específico cuando se detectan incidencias, capturando todo el contexto (configuración, red, logs) en un solo reporte.
3.  **Persistencia Forense (Log Collection)**: Almacenamiento histórico de logs para análisis post-mortem, independiente de la retención de los pods.

## Arquitectura de los Flujos

El sistema se basa en tres pilares automatizados mediante GitHub Actions:

### 1. Auditoría de Infraestructura (Weekly/On-Demand)
Genera un inventario completo de todos los recursos del clúster. Es útil para detectar "drift" en la configuración, recursos huérfanos o problemas de capacidad a nivel de nodo.

### 2. Inspección de Servicios (On-Demand)
Una herramienta para operadores. Permite invocar una auditoría profunda sobre un servicio específico. Cruza información de Servicios, Endpoints, Pods y Eventos para dar un diagnóstico rápido.

### 3. Recolección de Logs (Hourly)
Un proceso en segundo plano que asegura que los logs de aplicación no se pierdan con el reinicio de pods. Centraliza la salida estándar de todos los servicios en un repositorio de auditoría.
