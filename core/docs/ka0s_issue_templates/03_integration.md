# Integración Técnica y Mantenimiento

## Ubicación de los Archivos
Las plantillas residen en el directorio especial de GitHub:
`.github/ISSUE_TEMPLATE/`

| Archivo YAML | Propósito |
| :--- | :--- |
| `onboarding_request.yml` | Formulario de instalación/adopción. |
| `bug_report.yml` | Formulario de reporte de errores. |
| `feature_request.yml` | Formulario de nuevas ideas. |
| `incident.yml` | Formulario de incidencias operacionales con sincronización a iTop. |
| `change.yml` | Formulario de cambios controlados con sincronización a iTop. |

## Estructura YAML (GitHub Forms)

A diferencia de las plantillas Markdown antiguas, estas usan sintaxis YAML para definir inputs.

### Ejemplo de Estructura
```yaml
name: Nombre de la Plantilla
description: Descripción corta
title: "[PREFIJO]: "
labels: ["etiqueta1", "etiqueta2"]
body:
  - type: input
    id: user_email
    attributes:
      label: Email de Contacto
    validations:
      required: true
```

### Tipos de Inputs Soportados
*   `markdown`: Texto estático para instrucciones.
*   `input`: Campo de texto de una línea.
*   `textarea`: Campo de texto multilínea (ideal para logs).
*   `dropdown`: Menú desplegable para opciones predefinidas.
*   `checkboxes`: Lista de verificación.

## Plantilla: Incidencia (incident.yml)

### Propósito
Registrar incidencias operacionales de forma estructurada y sincronizarlas con iTop.

### Campos y Mapeo a iTop
- Servicio / CI afectado (`service`) → iTop: service_name o ci_name
- Descripción (`description`) → iTop: description
- Impacto (`impact`: Bajo/Medio/Alto) → iTop: impact
- Urgencia (`urgency`: Baja/Media/Alta) → iTop: urgency
- Pasos / Evidencias (`reproduction`) → iTop: evidence/steps

### Notas de Implementación
- El “caller” puede derivarse del actor de GitHub (`github.actor`) si no se solicita explícitamente.
- Normaliza los valores de impacto/urgencia a los enumerados de iTop según la configuración de la instancia.
- Mantén adjuntos/evidencias fuera del texto cuando sea posible y referencia ubicaciones de evidencia.

## Plantilla: Cambio (change.yml)

### Propósito
Estandarizar la solicitud de cambios operativos y mapear sus campos a un Change en iTop.

### Campos y Mapeo a iTop
- Solicitante (`requester`) → iTop: caller
- Organización (`organization`) → iTop: organization_name
- Origen (`origin`) → iTop: origin
- Servicio / CI objetivo (`service`) → iTop: service_name o ci_name
- Descripción del Cambio (`description`) → iTop: description
- Impacto (`impact`) → iTop: impact (A person / A service / A department)
- Urgencia (`urgency`) → iTop: urgency (critical/high/medium/low)
- Evaluación de Riesgo (`risk`) → iTop: risk_analysis
- Plan de Retroceso (`backout`) → iTop: backout_plan
- Fecha de Inicio Planificada (`start_date`) → iTop: planned_start_date
- Fecha de Fin Planificada (`end_date`) → iTop: planned_end_date
- ¿Implica Corte? (`outage`) → iTop: planned_outage

### Notas de Implementación
- Campos marcados como requeridos en GitHub Forms deben validarse también en la integración con iTop.
- Normaliza formatos de fecha a `YYYY-MM-DD HH:MM:SS` antes de enviar a iTop.
- Evita contenido sensible en campos de texto; referencia evidencias cuando aplique.

## Mantenimiento

### Cómo editar una plantilla
1.  Edita el archivo YAML correspondiente en `.github/ISSUE_TEMPLATE/`.
2.  Haz commit y push a `main` (o vía PR).
3.  **Importante**: Los cambios en las plantillas se reflejan inmediatamente en la interfaz de "New Issue" de GitHub una vez mergeados en la rama por defecto.

### Validación de Cambios
No existe un "linter" oficial estricto en CI para estos archivos, pero si el YAML es inválido, GitHub no mostrará la plantilla.
*   **Recomendación**: Validar siempre la sintaxis YAML antes de subir cambios.
