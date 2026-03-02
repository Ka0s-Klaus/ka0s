# Concepto: Enrutamiento de Proyectos (Nativo)

## Objetivo
Asignar automáticamente los nuevos **Issues** al Proyecto de Organización **Ka0sC0re** (Proyecto #4) utilizando las capacidades nativas de GitHub Issue Forms.

## Problema
Anteriormente se utilizaba un workflow complejo (`project-routing.yml`) para realizar esta asignación mediante scripts y llamadas a la API, lo cual introducía latencia, posibles fallos de ejecución y mantenimiento de código adicional.

## Solución: Configuración Nativa en Plantillas
GitHub permite definir el proyecto de destino directamente en el encabezado (frontmatter) de las plantillas de Issues (`.github/ISSUE_TEMPLATE/*.yml`).

### Implementación
Cada plantilla de issue incluye ahora la siguiente configuración:

```yaml
projects: ["Ka0s-Klaus/4"]
```

Esto garantiza que:
1.  **Inmediatez**: El issue se asocia al proyecto en el mismo momento de su creación.
2.  **Fiabilidad**: No depende de runners, tiempos de espera ni tokens de API en workflows.
3.  **Simplicidad**: Se elimina código de mantenimiento (Scripts y Workflows).

## Estado y Columnas
Los issues nuevos entrarán en el estado por defecto del proyecto (generalmente "Todo" o "No Status"). La clasificación posterior se realizará mediante:
1.  **Automatización del Proyecto**: Reglas configuradas dentro de la vista del Proyecto ("Workflows" del Proyecto V2).
2.  **Triage Manual**: Durante la revisión inicial del ticket.
