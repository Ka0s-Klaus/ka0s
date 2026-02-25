Ka0s – Auditoría de Workflows GitHub
====================================

Ámbito
------
- Carpeta analizada: `.github/workflows/`
- Ficheros auditados (35):
  - `add-doc-to-db.yml`
  - `audit-cluster-status.yml`
  - `audit-pods.yml`
  - `cd-core-services.yml`
  - `ci-core-validate.yml`
  - `ci-k8s-validate.yml`
  - `daily-cluster-report.yml`
  - `debug-itop.yml`
  - `docs-index-auto-update.yml`
  - `execution.yml`
  - `github-sync-itop.yml`
  - `htmllint.yml`
  - `inspector.yml`
  - `itop-audit-export.yml`
  - `itop-triggered-workflow.yml`
  - `jsonlint.yml`
  - `ka0s-secrets-audit.yml`
  - `kaos-cluster-restart.yml`
  - `kaos-compliance-test.yml`
  - `kaos-delete-namespace.yml`
  - `kaos-security-audit.yml`
  - `kaos.yml`
  - `mdlint.yml`
  - `ops-node-management.yml`
  - `ssh-connect.yml`
  - `status-db.yml`
  - `test-gh-cli.yml`
  - `test-kubectl-tunnel.yml`
  - `test-runners.yml`
  - `update-hosts.yml`
  - `version.yml`
  - `watchdog-node-health.yml`
  - `workflow-stats.yml`
  - `yamllint.yml`
  - `jsonlint.yml`

Resumen Global
--------------
- `runs-on: swarm-runners-scaleset` se cumple en todos los workflows que usan runners GitHub.
- Ciclo estándar Ka0s (core + handle-success + handle-failure + end-workflow → inspector) está plenamente implementado en:
  - `yamllint.yml`, `mdlint.yml`, `htmllint.yml`, `jsonlint.yml`
  - `kaos.yml`
  - `add-doc-to-db.yml`
  - `status-db.yml`
  - `ssh-connect.yml`
  - `audit-pods.yml`
  - `github-sync-itop.yml`
- Auditoría estructurada en `audit/` bien establecida:
  - K8s: `audit/kube/` (`audit-pods.yml`, `audit-cluster-status.yml`, `ci-*-validate.yml`, `kaos-security-audit.yml`)
  - Mongo: `audit/mongodb/`, `audit/` (consolidación via `add-doc-to-db.yml`, `status-db.yml`)
  - iTop: `audit/itop/` (`itop-audit-export.yml`, `github-sync-itop.yml`)
  - GitHub workflows/issues: `audit/workflows/`, `audit/issues/`, `audit/inspector/`, `audit/sync/`
- Orquestación con iTop:
  - Sincronización bidireccional bien resuelta:
    - GitHub → iTop: `github-sync-itop.yml`
    - iTop → GitHub: `itop-triggered-workflow.yml`
  - Reconciliación de pods fallidos con iTop: `audit-pods.yml` + `devops/core/k8s/process-failed-pods.py`

Principales Hallazgos Globales
------------------------------
- Cohesión alta en workflows de “compliance lint” y en el core Ka0s (`kaos.yml`).
- Patrón de lifecycle inconsistente:
  - Algunos workflows de infraestructura/ops no tienen `handle-success`/`handle-failure`/`end-workflow`.
  - Algunos `handle-failure` solo hacen `echo` sin crear issue ni enlazar a logs.
- Formato de salida:
  - Muchos scripts generan `.md` o `.txt`; solo parte de la información llega como JSON (`audit/sync`, `audit/inspector`, `audit/mongodb`, `audit/kube/failed_pods.json`).
  - Para explotación AIOps, falta homogeneizar JSON como formato canónico.
- Autocuración:
  - Lints (`yamllint`, `mdlint`, `htmllint`, `jsonlint`) implementan self-healing (prettier + commit).
  - K8s / infra: autocuración parcial (p.ej. `watchdog-node-health` → `ops-node-management`), pero sin rastro sólido en `audit/` ni integración sistemática con iTop.

Recomendaciones Globales
------------------------
- **RG1 – Estandarizar lifecycle Ka0s en todos los workflows críticos**
  - Objetivo: que cualquier workflow deje siempre:
    - Resultados en `audit/…`
    - Estado en GitHub Issues (éxito/fallo)
    - Trazabilidad central en `audit/inspector/` vía `inspector.yml`
  - Recomendación:
    - Para workflows sin lifecycle completo:
      - Añadir `handle-success` y `handle-failure` mínimos con:
        - `echo` estructurado (clave-valor).
        - Creación de issue en fallo punto a logs / artefactos.
      - Añadir `end-workflow` que lance `inspector.yml` con:
        - `kaos-workflow-id=${{ github.run_id }}`
        - `kaos-user-start=${{ github.triggering_actor }}` o actor equivalente.

- **RG2 – Homogeneizar formato JSON en auditorías**
  - Para cada workflow que hoy solo genera `.md`/`.txt`, añadir, cuando sea razonable:
    - Un fichero JSON paralelo (misma semántica) en la misma carpeta `audit/`.
    - Ejemplo patrón:
      - `report-xxxx.md` + `report-xxxx.json`.
  - Prioridad alta en:
    - `kaos-security-audit.yml` (security posture)
    - `ci-*-validate.yml` (Trivy config)
    - `cd-core-services.yml` (deployment reports)
    - `daily-cluster-report.yml` (estado diario K8s)
    - `audit-cluster-status.yml` (estado horario servicios)

- **RG3 – Unificar comportamiento de errores**
  - En `handle-failure` y pasos de fallo:
    - Crear issue con plantilla estándar:
      - Título: `"${{ env.KAOS_MODULE }} Error detected in ${{ env.KAOS_CODE }}"`
      - Label: `bug` o `incident`
      - Body: link directo a `actions/runs/${{ github.run_id }}` y, si existe, a fichero en `audit/...`.
    - Comentar en la issue origen (si aplica) con el resultado.

- **RG4 – Integración iTop como política, no como excepción**
  - Hoy está aplicado en:
    - `github-sync-itop.yml`, `itop-triggered-workflow.yml`
    - `audit-pods.yml` + `process-failed-pods.py`
  - Recomendación:
    - Para workflows que afectan a estado de servicios (deploy, restart, delete namespace, cluster update):
      - Añadir pasos opcionales (feature flag via secret/var) que:
        - Creen/actualicen `UserRequest` en iTop cuando hay error persistente.
        - Cierre automático cuando se verifique recuperación (p.ej., siguiente ejecución success).

- **RG5 – Minimizar `run` complejos en workflows**
  - Varias secciones de `bash` extensas podrían:
    - Moverse a scripts en `devops/` o `.github/scripts/`.
    - O a composite actions en `.github/actions/`.
  - Beneficios:
    - Testeabilidad.
    - Reutilización entre workflows.
    - Alineamiento con filosofía Ka0s (scripts “self-contained” y orquestación desde workflows).

Revisión por Workflow
---------------------

add-doc-to-db.yml
-----------------
- Propósito:
  - Ingesta programada de contenido `audit/` hacia MongoDB (`devops/core/mongo/scripts/add-doc-to-db.py`).
- Fortalezas:
  - Usa `runs-on: swarm-runners-scaleset`.
  - Control de reintentos de `git push` (hasta 3 intentos con rebase).
  - Persistencia en `audit/mongodb/` y `audit/` en general.
  - Lifecycle completo: `job-core`, `handle-success`, `handle-failure`, `end-workflow` → `inspector.yml`.
- Oportunidades:
  - Formato JSON: se generan ficheros JSON, pero se podría:
    - Documentar estructura de objetos para explotación AIOps (p.ej. `type`, `source`, `timestamp`).
  - `handle-failure`:
    - Actualmente crea issue, pero el body podría enlazar explícitamente a reportes en `audit/mongodb/`.

audit-cluster-status.yml
------------------------
- Propósito:
  - Ejecuta `devops/core/k8s/audit-services-status.sh` y genera reportes de estado de servicios K8s.
- Fortalezas:
  - Evidencias en `audit/kube/cluster-report-*.md` y `cluster-dashboard-*.html`.
  - Manejo básico de race conditions con `git pull --rebase` y reintento de push.
- Oportunidades:
  - Añadir JSON paralelo con resumen de estado (por servicio/namespace).
  - No tiene lifecycle Ka0s:
    - Recomendado añadir:
      - `handle-success`, `handle-failure`, `end-workflow` (con `inspector.yml`).
      - En `handle-failure`, crear issue con link a reporte `.md/.html`.

audit-pods.yml
--------------
- Propósito:
  - Auditar pods fallidos y reconciliarlos con tickets iTop (`process-failed-pods.py`).
- Fortalezas:
  - Trace de auditoría: `audit/kube/failed_pods.json` versionado en Git.
  - Conectividad iTop controlada con `curl` antes de ejecutar Python.
  - Lifecycle completo con `end-workflow` → `inspector.yml`.
  - `process-failed-pods.py` implementa reconciliación:
    - Crea ticket si hay pod fallido nuevo.
    - Cierra ticket si el pod ya no aparece como fallido.
- Oportunidades:
  - En `handle-failure` solo hay `echo`:
    - Añadir creación de issue GitHub si falla cualquiera de:
      - SSH/audit script.
      - Conectividad iTop.
      - Ejecución de `process-failed-pods.py`.
  - Persistir salida de `process-failed-pods.py` en JSON bajo `audit/itop/` para cerrar el círculo de evidencia.

cd-core-services.yml
--------------------
- Propósito:
  - CD de servicios en `core/b2b/core-services/**` hacia K8s con kustomize.
- Fortalezas:
  - Detección de servicios cambiados (diff entre `before` / `after`).
  - Deploy declarativo via `kubectl apply -k`.
  - Post-deploy report en `audit/deploy/deployment-report-*.md` con:
    - Pods, servicios, ingress.
    - Verificación avanzada con script `k8s-verify-deployment.sh`.
- Oportunidades:
  - JSON paralelo con estado de rollout y check IP/health.
  - Integración con iTop (RG4):
    - Tickets cuando falla deploy/verificación.
  - `handle-failure` solo hace `echo`:
    - Añadir issue GitHub con detalle del servicio/namespace.

ci-core-validate.yml y ci-k8s-validate.yml
------------------------------------------
- Propósito:
  - Validación de manifests K8s mediante Trivy Config para servicios `core/b2b/core-services`.
- Fortalezas:
  - Reportes de validación en `audit/kube/validation-report-*.md`.
  - Uso correcto de `swarm-runners-scaleset`.
- Oportunidades:
  - Falta `end-workflow` → no se invoca `inspector.yml`.
  - `handle-failure` sin issue / trazabilidad en GitHub:
    - Añadir creación de issue con link a reporte `.md`.
  - Añadir JSON con resultado agregable por servicio/chequeos (para correlación).

daily-cluster-report.yml
------------------------
- Propósito:
  - Genera informe diario de estado del cluster a través de `generate-cluster-report.sh`.
- Fortalezas:
  - Persistencia en `audit/daily-reports/`.
  - Commits idempotentes (solo si hay cambios).
- Oportunidades:
  - No incluye lifecycle Ka0s:
    - Añadir `handle-success` y `handle-failure` + `end-workflow`.
  - Formato adicional:
    - JSON con KPIs clave (nodos, pods por estado, pods pendientes, etc.).
  - Integrar con iTop para incidentes repetitivos detectados (opcional).

debug-itop.yml
--------------
- Propósito:
  - Debug puntual de despliegue iTop en K8s (`kubectl describe`, `logs`, etc.).
- Fortalezas:
  - Minimalista y centrado en diagnosis manual.
- Oportunidades:
  - No genera evidencias en `audit/`:
    - Añadir paso opcional que capture salidas en fichero (`audit/itop/debug-*.log`).
  - Podría integrarse con `inspector.yml` si se quiere trazabilidad completa, aunque es menos crítico.

docs-index-auto-update.yml
--------------------------
- Propósito:
  - Auto-actualizar índices de documentación (`core/docs/README.md`, `index.md`).
- Fortalezas:
  - Uso de action dedicada `git-auto-commit-action`.
  - Trigger acotado a cambios de docs / script.
- Oportunidades:
  - No está conectado a lifecycle Ka0s ni a `audit/`.
  - Si se requiere trazabilidad estricta:
    - Guardar un pequeño JSON en `audit/kaos/` con:
      - `doc_paths`, `actor`, `timestamp`.

execution.yml
-------------
- Propósito:
  - Motor de ejecución basado en issues (`[E]`) que orquesta otros workflows y módulos.
- Fortalezas:
  - Uso intensivo de GH CLI para comentar y etiquetar issues.
  - Derivación de workflow a ejecutar según configuración en `KAOS_AUTOMATION_COMPLIANCE`.
  - Coherente con filosofía Ka0s (Execution como core module).
- Oportunidades:
  - No conecta con `inspector.yml` ni deja evidencia en `audit/execution/` (aunque existe la carpeta).
  - Falta de JSON de ejecución:
    - Guardar descripción estructurada de cada ejecución (issue, módulo, run_id lanzado).
  - `handle-failure` crea issue, pero:
    - No enlaza a ningún artefacto en `audit/`.

github-sync-itop.yml
--------------------
- Propósito:
  - Sincronizar issues/comentarios de GitHub con tickets en iTop.
- Fortalezas:
  - Evidencias en `audit/sync/*.json` con un esquema cuidadoso:
    - `github_ref`, `itop_key/ref`, etc.
  - Manejo defensivo cuando `result.json` no existe.
  - Lifecycle completo con `end-workflow` → `inspector.yml`.
- Oportunidades:
  - Documentar esquema de `result.json` para facilitar explotación.
  - `handle-failure` solo hace `echo`:
    - Agregar issue cuando sincronización falla (p.ej., problema de credenciales o API).

htmllint.yml, mdlint.yml, yamllint.yml, jsonlint.yml
----------------------------------------------------
- Propósito:
  - Lint de HTML, Markdown, YAML, JSON con self-healing.
- Fortalezas:
  - Patrón de compliance muy bien definido:
    - Workflow llamado desde `kaos.yml`.
    - Auto-fix via action + prettier.
    - Commits automáticos con mensaje estándar.
    - Logs y resultados en:
      - `audit/htmllint/`
      - `audit/mdlint/`
      - `audit/yamllint/`
      - `audit/jsonlint/`
  - Lifecycle completo con issues en fallo y `end-workflow` → `inspector.yml`.
- Oportunidades:
  - Refactorizar partes repetidas:
    - Bloques de self-healing (prettier + commit) se podrían mover a acción reutilizable.
  - Estandarizar nombre de ficheros de resumen (p.ej. `summary-<run>.json`) además de `.txt`.

inspector.yml
-------------
- Propósito:
  - Punto central de auditoría de ejecución de workflows.
- Fortalezas:
  - Reintentos para leer `gh run view` con espera incremental.
  - Evidencias en `audit/inspector/<workflow-id>.log` y `.json`.
  - Integración como paso final en múltiples workflows.
- Oportunidades:
  - `handle-failure` crea issue pero:
    - Usa `KAOS_CODE` que no está definido en `env` del workflow (potencial bug).
  - No escribe JSON resumen de la inspección (aunque el `.json` de `gh run view` ya es estructurado).

itop-audit-export.yml
---------------------
- Propósito:
  - Export diario de datos iTop a `audit/itop/*.json`.
- Fortalezas:
  - Uso correcto de composite action `itop-export`.
  - Persistencia condicional solo si hay cambios.
- Oportunidades:
  - No hay lifecycle Ka0s:
    - Podría añadirse un `end-workflow` que haga pasar los exports también por inspección.
  - Falta de issues en fallo (p.ej., fallo de login, URL no accesible).

itop-triggered-workflow.yml
---------------------------
- Propósito:
  - Flujo disparado desde iTop (UserRequest → GitHub) con feedback de estado de ejecución.
- Fortalezas:
  - En éxito, resuelve y cierra el ticket automáticamente (`ev_resolve` + `ev_close`).
  - En fallo, actualiza `public_log` con URL a logs de GitHub sin cerrar el ticket.
  - Integra bien login de iTop con `agent_id` lookup.
- Oportunidades:
  - No se persisten logs en `audit/itop/`:
    - Se podría volcar la petición/respuesta de iTop en JSON (manteniendo seguridad).
  - No lifecycle Ka0s clásico (sin `handle-success/end-workflow`):
    - No es crítico, pero coherente añadir al menos `handle-success`/`handle-failure` con mensajes estructurados.

ka0s-secrets-audit.yml
----------------------
- Propósito:
  - Comparar secrets definidos en el repositorio vs secrets usados por workflows.
- Fortalezas:
  - Usa `rg` + API GH para obtener lista de secrets y usos.
  - Diseño idempotente y no destructivo (solo lectura).
- Oportunidades:
  - Actualmente solo imprime en logs:
    - Recomendable guardar resultado en JSON en `audit/scan/` o `audit/kaos/`:
      - Listas de `defined`, `used`, `unused`.
  - Lifecycle Ka0s ausente:
    - Añadir posibilidad de crear issue si detecta secrets huérfanos críticos.

kaos-cluster-restart.yml
------------------------
- Propósito:
  - Rolling restart del cluster K8s, con logs en `audit/restart/`.
- Fortalezas:
  - Protección con confirmación `"RESTART"`.
  - Evidencias de restart en `audit/restart/`.
  - Gestión de git con rebase y reintentos de push.
- Oportunidades:
  - No lifecycle Ka0s:
    - Añadir `handle-success`/`handle-failure` y `end-workflow`.
  - Integrar con iTop:
    - Crear ticket de cambio o mantenimiento basado en cada restart.

kaos-compliance-test.yml
------------------------
- Propósito:
  - Test suite para actions de compliance (JSON/YAML/MD/HTML).
- Fortalezas:
  - Estructura de tests clara, con casos “deben pasar” y “deben fallar”.
  - Usa `continue-on-error` + aserciones explícitas.
  - Lifecycle parcial: `handle-success` / `handle_failure` con `echo`.
- Oportunidades:
  - Añadir almacenamiento de resultados de los tests en `audit/` (p.ej. `audit/kaos/compliance-tests-<run>.json`).
  - `handle_failure` podría crear issue etiquetado como `test-failure`.

kaos-delete-namespace.yml
-------------------------
- Propósito:
  - Borrado controlado de namespaces + auditoría en `audit/trash/`.
- Fortalezas:
  - Doble control:
    - Input `namespace`.
    - Confirmación literal `"DELETE"`.
  - Evidencias de borrado en `audit/trash/` con commit dedicado.
  - Trigger posterior de `audit-cluster-status.yml`.
- Oportunidades:
  - Extraer script de borrado en `devops/core/k8s/force-delete-namespace.sh` ya está; falta:
    - Estándar JSON de resultado (namespace, recursos borrados, errores).
  - Añadir lifecycle Ka0s:
    - `handle-success`, `handle-failure`, `end-workflow` con inspector.

kaos-security-audit.yml
-----------------------
- Propósito:
  - Auditoría de seguridad K8s (workloads, RBAC, network, Trivy, scoring).
- Fortalezas:
  - Encadenamiento de scripts:
    - `security-audit-workloads.sh`
    - `security-audit-rbac-net.sh`
    - `security-audit-trivy.sh`
    - `security-audit-score.sh`
  - Evidencias en `audit/kube/report-*.md`.
- Oportunidades:
  - No lifecycle Ka0s:
    - Añadir `handle-success` / `handle_failure` + `end-workflow`.
  - Formato:
    - Añadir JSON con resultados y score global.
  - Git:
    - Antes de commit se hace `git add` y luego `git pull --rebase`; orden correcto, pero puede ser más robusto si se hace primero `pull --rebase` y luego `add/commit/push`.

kaos.yml
--------
- Propósito:
  - Core “Ka0s”: valida extensiones, lanza módulos de lint y registra evento.
- Fortalezas:
  - Muy alineado con filosofía Ka0s:
    - JSON del evento completo en `audit/kaos/<run>.json`.
    - Ficheros implicados en commit en `audit/kaos/<run>-files-in-commit.txt`.
    - Activación dinámica de módulos (`yaml/md/html/json` lint) según extensión y configuración.
  - Lifecycle completo con issues en fallo y `end-workflow` → `inspector.yml`.
- Oportunidades:
  - Logging estructurado: parte del bash podría migrarse a script dedicado.
  - Añadir JSON con resultado de cada módulo lanzado, no solo evento bruto.

mdlint.yml, yamllint.yml, htmllint.yml, jsonlint.yml
----------------------------------------------------
- Comentados arriba en bloque “compliance lint”.

ops-node-management.yml
-----------------------
- Propósito:
  - Operaciones sobre nodos: `taint-restricted`, `untaint-restricted`, `cordon`, `uncordon`.
- Fortalezas:
  - Uso de `kubectl-tunnel` para actuar contra cluster real.
  - Lógica clara y acotada.
- Oportunidades:
  - No genera rastro en `audit/`:
    - Añadir log de operaciones por nodo en `audit/kube/nodes-ops-<run>.json`.
  - No lifecycle Ka0s:
    - Añadir `handle-success`/`handle-failure` + `end-workflow`.
  - Integración con iTop:
    - Opcionalmente, abrir/cerrar `UserRequest` para operaciones de aislamiento prolongadas.

ssh-connect.yml
---------------
- Propósito:
  - Workflow genérico para ejecutar scripts remotos via SSH (`ssh-exec`) y traer resultados a `audit/`.
- Fortalezas:
  - Bien alineado con filosofía “SSH First”.
  - Usa artifacts para mover resultados y luego los commitea.
  - Lifecycle completo con `handle-success`, `handle-failure`, `end-workflow` → `inspector.yml`.
- Oportunidades:
  - Definir convención de nombres para resultados (`*.json` preferente).

status-db.yml
-------------
- Propósito:
  - Reporte periódico de estado de MongoDB en `audit/mongodb/`.
- Fortalezas:
  - Implementa patrón:
    - Script Python (pymongo).
    - Commit y push de reportes.
    - Artefacto con reporte.
  - Lifecycle con `handle-success`, `handle-failure`, `end-workflow`.
- Oportunidades:
  - Reforzar formato JSON (schema documentado) para correlaciones multi-sistema.

test-gh-cli.yml, test-kubectl-tunnel.yml, test-runners.yml
----------------------------------------------------------
- Propósito:
  - Validación de infraestructura de ejecución (GH CLI, túnel kubectl, runners Swarm).
- Fortalezas:
  - Cubren paths críticos:
    - GH CLI para issues/runs.
    - Conectividad K8s.
    - Disponibilidad de runners swarm.
- Oportunidades:
  - No escriben en `audit/`:
    - Para entornos productivos, recomendable volcar resultados en `audit/scan/` o `audit/kaos/`.
  - `test-kubectl-tunnel.yml` tiene:
    - `handle-success` y `handle_failure` pero sin `end-workflow` ni inspector.

update-hosts.yml
----------------
- Propósito:
  - Actualización del sistema/herramientas en hosts del cluster via `system-update.sh`.
- Fortalezas:
  - Evidencias en `audit/hosts/`.
  - Lógica de push con reintentos y `force-with-lease`.
- Oportunidades:
  - No lifecycle Ka0s ni integración iTop:
    - Podría considerarse mantenimiento planificado (Change en iTop).
  - Formato: asegurar JSON dentro de los logs generados por script.

version.yml
-----------
- Propósito:
  - Gestión de versionado semántico basada en convención de ramas (`H`, `F`, `RN`).
- Fortalezas:
  - Calcula versión nueva usando último tag.
  - Actualiza `CHANGELOG.md` e `INDEX_VERSION.md`.
  - Lifecycle completo con `handle-success`, `handle-failure`, `end-workflow`.
- Oportunidades:
  - No genera evidencias en `audit/`:
    - Añadir JSON descriptivo en `audit/kaos/versions-<run>.json` (branch, versión vieja/nueva, commit).

watchdog-node-health.yml
------------------------
- Propósito:
  - Watchdog sobre nodos con DiskPressure, disparando aislamiento (`ops-node-management.yml`).
- Fortalezas:
  - Integra detección automática de nodos afectados.
  - En caso de éxito:
    - Lanza `audit-cluster-status.yml`.
  - Lifecycle completo con `handle-success`, `handle-failure`, `end-workflow` → `inspector.yml`.
- Oportunidades:
  - No hay persistencia directa de nodos afectados en `audit/`:
    - Aunque el audit posterior cubre estado, se podría guardar un snapshot específico: `audit/kube/nodes-diskpressure-<run>.json`.
  - Integración con iTop:
    - Autocreación de tickets para nodos con DiskPressure persistente.

workflow-stats.yml
------------------
- Propósito:
  - Recopilar estadísticas de workflows, issues y PRs en `audit/workflows/` y `audit/issues/`.
- Fortalezas:
  - Uso avanzado de `gh api` + `jq` para:
    - Listar workflows y runs (`actually-workflows*.json/csv`).
    - Exportar issues e información asociada.
    - Exportar PRs.
  - Persistencia en `audit/workflows/` y `audit/issues/`.
- Oportunidades:
  - No lifecycle Ka0s:
    - Añadir `handle-success`/`handle-failure` + `end-workflow`.
  - Documentar contratos de JSON generados para poder alimentarlos a motores AIOps.

yamllint.yml, mdlint.yml, htmllint.yml, jsonlint.yml
----------------------------------------------------
- Ya analizados; forman el “Policy Gate” operativo de Ka0s.

Conclusión
----------
- El ecosistema de workflows de Ka0s está bien alineado con la filosofía:
  - GitOps estricto.
  - Evidencias en `audit/` para la mayoría de operaciones críticas.
  - Inspector centralizado como agregador de ejecución.
  - iTop integrado en puntos clave (sync, pods fallidos, workflows disparados desde iTop).
- El siguiente paso para endurecer la plataforma es:
  - Llevar lifecycle Ka0s + `inspector.yml` a todos los workflows que impactan en estado de infraestructura o gobernanza.
  - Homogeneizar JSON como formato estándar de auditoría en paralelo a Markdown/HTML.
  - Extender la autocuración más allá de compliance de código hacia:
    - Pods, nodos, namespaces, cluster restarts, estado de MongoDB e iTop.

