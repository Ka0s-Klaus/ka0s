# Concepto y Estrategia: Comunicación Estructurada

## Filosofía
En Ka0s, creemos que la calidad de la respuesta depende directamente de la calidad de la pregunta. Para escalar el soporte y el desarrollo, hemos reemplazado los issues de texto libre por **Formularios Estructurados (GitHub Issue Forms)**.

Esto nos permite:
1.  **Estandarizar la Entrada**: Asegurar que siempre recibimos la información crítica (versiones, logs, contexto) desde el primer momento.
2.  **Automatizar el Triaje**: Usar etiquetas (`labels`) automáticas basadas en el tipo de plantilla.
3.  **Reducir la Fricción**: Guiar al usuario paso a paso sobre qué información es necesaria.

## Tipos de Solicitudes Soportadas

### 1. Onboarding Request (Solicitud de Instalación)
No es solo una petición de acceso. Es el disparador del proceso de aprovisionamiento.
*   **Objetivo**: Recopilar datos de la organización y el entorno técnico del usuario.
*   **Resultado**: Un ticket que (idealmente) dispara automatizaciones de setup inicial.

### 2. Bug Report (Reporte de Error)
Enfocado en la reproducibilidad.
*   **Campos Clave**: Pasos para reproducir, comportamiento esperado vs real, logs.
*   **Objetivo**: Permitir a los desarrolladores diagnosticar sin necesidad de un largo intercambio de mensajes pidiendo más info.

### 3. Feature Request (Solicitud de Funcionalidad)
Enfocado en el valor de negocio/técnico.
*   **Enfoque**: "¿Qué problema resuelves?" en lugar de "¿Qué código quieres escribir?".
*   **Objetivo**: Priorizar el roadmap basado en necesidades reales.
