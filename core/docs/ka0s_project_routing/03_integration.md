# Integración Técnica: Project Routing

## Componentes del Sistema

### 1. Configuración de Plantillas (.github/ISSUE_TEMPLATE)
El sistema se basa en la propiedad `projects` dentro del frontmatter de las plantillas de Issue Forms.

**Ejemplo de Implementación (`incident.yml`):**
```yaml
name: 🚨 Incidencia (Incident)
description: Reporta una incidencia operacional para crear/actualizar un ticket en iTop.
title: "[INCIDENT]: "
labels: ["itop-incident", "triage"]
projects: ["Ka0s-Klaus/4"] # ID del Proyecto de Organización
body:
  # ... (resto de la plantilla)
```

### 2. Archivos Modificados
Todas las plantillas activas han sido actualizadas:
*   `bug_report.yml`
*   `change.yml`
*   `feature_request.yml`
*   `incident.yml`
*   `onboarding_request.yml`
*   `problem.yml`
*   `service_request.yml`

### 3. Eliminación de Componentes Antiguos
Se han eliminado los siguientes componentes que gestionaban el enrutamiento anteriormente:
*   `.github/workflows/project-routing.yml`: Workflow obsoleto.
*   `.github/scripts/project-routing.sh`: Script de soporte (si existía).

### 4. Requisitos Previos
Para que esta integración funcione correctamente:
1.  **Proyecto Existente**: El proyecto `Ka0s-Klaus/4` debe existir y ser accesible para la organización.
2.  **Permisos**: El repositorio debe tener permisos para asociar issues al proyecto de organización.
