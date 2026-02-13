# Integración Técnica y Mantenimiento

## Ubicación de los Archivos
Las plantillas residen en el directorio especial de GitHub:
`.github/ISSUE_TEMPLATE/`

| Archivo YAML | Propósito |
| :--- | :--- |
| `onboarding_request.yml` | Formulario de instalación/adopción. |
| `bug_report.yml` | Formulario de reporte de errores. |
| `feature_request.yml` | Formulario de nuevas ideas. |

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

## Mantenimiento

### Cómo editar una plantilla
1.  Edita el archivo YAML correspondiente en `.github/ISSUE_TEMPLATE/`.
2.  Haz commit y push a `main` (o vía PR).
3.  **Importante**: Los cambios en las plantillas se reflejan inmediatamente en la interfaz de "New Issue" de GitHub una vez mergeados en la rama por defecto.

### Validación de Cambios
No existe un "linter" oficial estricto en CI para estos archivos, pero si el YAML es inválido, GitHub no mostrará la plantilla.
*   **Recomendación**: Validar siempre la sintaxis YAML antes de subir cambios.
