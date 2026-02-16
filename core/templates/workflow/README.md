# Plantilla Base para Workflows de GitHub Actions (Ka0s)

Esta plantilla (`basic-template.yaml`) define el estándar mínimo y recomendado para todos los workflows del ecosistema Ka0s. Su objetivo es garantizar consistencia, trazabilidad y mantenibilidad.

## Estándares Clave

### 1. Nomenclatura e Identidad
- **Name**: Debe comenzar con `[Ka0s] ` seguido de un nombre descriptivo.
- **Variables de Entorno (`env`)**:
  - `KAOS_MODULE`: Obligatorio. Identifica el módulo para logs y auditoría (ej. `[Ka0S] Audit Host`).
  - `KAOS_CORRELATION_ID`: Se usa `${{ github.run_id }}` para trazar ejecuciones.
  - `KAOS_ACTOR`: Identifica quién disparó el evento.

### 2. Infraestructura (Runners)
- **Runs-on**: Se debe usar `swarm-runners-scaleset` por defecto para aprovechar el pool de runners escalables del proyecto.
  - *Evitar `ubuntu-latest` salvo justificación explícita.*

### 3. Permisos
Se debe seguir el principio de menor privilegio, pero reconociendo las necesidades comunes de los bots de Ka0s:
```yaml
permissions:
  contents: write # Para commits automáticos (logs, reportes)
  issues: write   # Para comentar estados en issues
  actions: read   # Para invocar workflows compuestos
```

### 4. Estructura de Jobs
Se recomienda una estructura de 4 fases para facilitar la observabilidad y el ciclo de vida completo:
1.  **Core Execution**: Donde ocurre la lógica principal.
2.  **Handle Success**: (Opcional) Notificaciones o limpieza tras éxito.
3.  **Handle Failure**: (Opcional) Alertas críticas tras fallo.
4.  **End Workflow**: (Estándar) Cierre del ciclo. Se ejecuta siempre (`always()`). Responsable de notificar el fin del proceso en las issues asociadas y disparar auditorías externas (ej. `inspector.yml`).

### 5. Manejo de Artefactos y Commits
Para workflows que generan evidencia (auditoría, reportes):
- Configurar identidad de Git usando `secrets.KAOS_BOT_NAME` y `secrets.KAOS_BOT_EMAIL`.
- Implementar lógica de **reintento (retry)** en el `git push` para manejar condiciones de carrera en entornos concurrentes.

## Ejemplo de Uso

Copia el archivo `basic-template.yaml` a `.github/workflows/tu-nuevo-workflow.yml` y ajusta:
1.  El valor de `KAOS_MODULE`.
2.  Los triggers en `on:` (push paths, schedule, etc.).
3.  El paso `Main Logic` con tu script o acciones.
4.  Si generas archivos, descomenta y ajusta el bloque `Commit & Push Results`.

---
*Referencia mantenida por el equipo de DevOps de Ka0s.*
