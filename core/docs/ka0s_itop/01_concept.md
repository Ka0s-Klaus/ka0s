# Concepto y Arquitectura: Integración iTop

## 1. Visión General
Este módulo integra la herramienta ITSM **iTop** con **GitHub Actions**, permitiendo que los eventos en la gestión de servicios disparen automatizaciones en el repositorio.

## 2. Flujo de Trabajo
1.  **Evento en iTop**: Un ticket cambia de estado o se crea una solicitud.
2.  **Trigger Webhook/API**: iTop invoca a GitHub Actions.
3.  **Ejecución Ka0s**: Se ejecutan workflows específicos (ej. aprovisionamiento, remediación).
4.  **Retroalimentación**: GitHub Actions actualiza el ticket en iTop con el resultado.
