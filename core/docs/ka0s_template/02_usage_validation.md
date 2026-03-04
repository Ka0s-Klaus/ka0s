# Guía de Uso y Validación de Plantillas

Esta guía explica cómo utilizar la plantilla base para crear nuevos workflows en Ka0s.

## 1. Crear un Nuevo Workflow
Para crear una nueva automatización, no empieces desde un archivo en blanco.

1.  **Copiar la Plantilla**:
    Copia el archivo `core/templates/workflow/basic-template.yaml` a `.github/workflows/tu-nuevo-workflow.yml`.

2.  **Personalizar Metadatos**:
    Define la identidad estándar:
    ```yaml
    env:
      KAOS_MODULE: "[Ka0S] <Nombre Legible>"
      KAOS_CODE: ${{ github.run_id }}
      KAOS_ACTOR: ${{ github.actor }}
    ```

3.  **Implementar Lógica (`job-core`)**:
    Localiza el job `job-core` y reemplaza los pasos de ejemplo con tu lógica.
    *   Mantén los pasos de `Checkout` y configuración de entorno.
    *   Si tu lógica es compleja (>10 líneas de script), **extraela** a un script en `.github/scripts/` y llámalo desde el workflow.

4.  **Conectar Ciclo de Vida**:
    - `handle-success`: depende de `core-execution` y corre con éxito.
    - `handle-failure`: depende de `core-execution` y no de `handle-success`. Crea automáticamente una incidencia etiquetada `itop-incident, triage` con enlace al run.
    - `end-workflow`: depende de ambos y dispara `inspector.yml` para auditoría global.

## 2. Checklist de Calidad
Antes de subir tu workflow, verifica:

*   [ ] **Permisos**: Top-level `contents: read`. Eleva solo por job (`contents: write`, `issues: write`, `actions: write` cuando aplique).
*   [ ] **Runners**: Siempre `runs-on: swarm-runners-scaleset`. `ubuntu-latest` no está permitido en Ka0s.
*   [ ] **Secretos**: Usa `${{ secrets.NOMBRE }}`. Preferir `GITHUB_TOKEN` para GH CLI; OIDC para clouds; evitar PATs.
*   [ ] **Pinning**: Acciones fijadas a versión mayor confiable (`actions/checkout@v4`); SHA completo para terceros poco conocidos.
*   [ ] **Anti-Inyección**: No interpolar inputs de usuario directamente en `run:`. Usa variables de entorno intermedias.
*   [ ] **Idempotencia**: ¿Qué pasa si el workflow corre dos veces seguidas? (No debería romper nada).
*   [ ] **Limpieza**: ¿Has borrado los comentarios explicativos de la plantilla?

## 3. Validación
Para probar tu workflow sin afectar producción:
1.  Usa el trigger `workflow_dispatch` para lanzarlo manualmente en una rama de prueba.
2.  Verifica que se generen los logs en la pestaña "Actions" y que `KAOS_CODE` aparezca en evidencias.
3.  Comprueba que el ciclo de vida (`handle-success`/`failure`/`end-workflow`) se activa correctamente según el resultado.

## 4. Plantillas de Problemas (Problem)

Además de las plantillas de workflows, Ka0s define plantillas de Issues que se sincronizan con iTop. La plantilla de Problema se encuentra en `.github/ISSUE_TEMPLATE/problem.yml` y está alineada con las propiedades de la clase **Problem** del datamodel de iTop.

- **Ref**: generado automáticamente por iTop al crear el Problem, no se solicita en GitHub.
- **Title**: se toma del título del Issue (`[PROBLEM]: <Resumen corto>`).
- **Organization**: campo obligatorio en iTop. En GitHub se captura con el desplegable `Organizacion (mandatory en iTop)`.
- **Status**: inicializado a `new` desde la automatización; las transiciones (Assigned, Resolved, Closed) se gestionan en iTop.
- **Priority**: en iTop se calcula automáticamente a partir de **Impact** y **Urgency**, siguiendo la matriz del fabricante.
- **Impact**: obligatorio. Se captura como `Impacto (mandatory)` con los valores `Department / Service / Person`.
- **Urgency**: obligatoria. Se captura como `Urgencia (mandatory)` con los valores `critical / high / medium / low`.
- **Description**: obligatoria. Se rellena desde el campo `Descripción (mandatory)` del Issue, más un bloque de contexto con enlace al Issue y repo.

Campos adicionales referenciados en la plantilla de Problema:

- **Service** y **Service subcategory**: textos libres (`Servicio / CI`, `Subcategoría de Servicio`) que sirven de contexto para mapear posteriormente a los FKs de iTop.
- **Product**: texto libre para identificar el producto afectado.
- **Caller**: se modela como `Solicitante (Caller en iTop, opcional)` y se resuelve en iTop mediante búsqueda de Person/User.
- **Team** y **Agent**: textos libres para documentar equipo y persona responsable; la asignación real puede automatizarse en evolutivos posteriores.
- **Related Change**: referencia a un Change asociado.
- **Incidencias Relacionadas**, **Hipótesis** y **Plan de Investigación**: campos de contexto para análisis y troubleshooting, no obligatorios en el datamodel pero útiles para la operación diaria.

El objetivo de esta plantilla es que cualquier Problema creado desde GitHub nazca ya con todos los campos **mandatory** de iTop cubiertos (Title, Organization, Impact, Urgency, Description), respetando a la vez los campos que iTop gestiona automáticamente (Ref, fechas, Status) y dejando espacio para enriquecer la investigación.
