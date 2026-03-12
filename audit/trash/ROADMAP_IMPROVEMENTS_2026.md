# Roadmap de Mejoras y Evolución Ka0s 2026

**Fecha:** 2026-03-12
**Autor:** Ka0s Architect Agent (Dáavid)
**Objetivo:** Establecer una hoja de ruta técnica y funcional para la mejora continua del ecosistema Ka0s, alineando los 5 repositorios bajo una gobernanza unificada y estándares de excelencia.

---

## 1. Visión Estratégica Global

El ecosistema Ka0s debe evolucionar de un conjunto de scripts y manifiestos a una **Plataforma de Ingeniería de Plataforma (Platform Engineering)** robusta, gobernada por IA y principios GitOps estrictos.

### Pilares de Mejora
1.  **Gobernanza Unificada**: Reglas y Skills compartidos (Logrado parcialmente en Auditoría 2026-03-12).
2.  **Observabilidad Total**: Trazabilidad end-to-end desde el commit hasta el log de producción.
3.  **Automatización Inteligente**: Uso de IA (`kaos-ia-powered`) para auto-remediación y análisis predictivo.
4.  **Experiencia de Desarrollador (DX)**: Documentación clara y procesos de onboarding simplificados.

---

## 2. Análisis y Roadmap por Proyecto

### 2.1. `ka0s` (Core & Automation)
**Rol:** Núcleo de automatización, scripts de mantenimiento y orquestación K8s.

**Estado Actual:**
- ✅ Gran cantidad de workflows y scripts funcionales.
- ✅ Integración con herramientas clave (Zabbix, iTop, Metabase).
- ✅ CI/CD Hardening implementado (`lint-scripts.yml`).
- ⚠️ Complejidad creciente en `core/b2b/core-services`.

**Mejoras Propuestas:**

*   **Corto Plazo (Inmediato):**
    *   [x] **Refactorización de Workflows**: Convertir pasos repetitivos de GitHub Actions en `composite actions` locales para reducir deuda técnica en `.github/workflows/`. (Implementado: `setup-python-tools`)
    *   [x] **Hardening de Scripts**: Aplicar `mypy` y `pylint` estricto a todo `core/scripts/` (Regla 008). (Implementado: `lint-scripts.yml`)
    *   [ ] **Limpieza de K8s**: Estandarizar todos los manifiestos en `core/b2b` usando Kustomize overlays (`base`, `overlays/prod`) para separar configuración de estructura.

*   **Mediano Plazo:**
    *   [ ] **Testing de Infraestructura**: Implementar `terratest` o `kubeval` en el pipeline de CI para validar manifiestos antes del merge.
    *   [ ] **Modularización**: Separar servicios monolíticos en microservicios si la lógica de `scripts` crece demasiado.

*   **Solución Técnica:**
    *   Implementar `pre-commit` hooks para validación local.
    *   Crear una librería Python compartida `ka0s-lib` para reutilizar funciones de log y conexión a DB.

---

### 2.2. `ka0s-clouders` (Infrastructure as Code)
**Rol:** Definición de infraestructura Cloud (AWS, Azure, GCP) y origen de reglas de gobernanza.

**Estado Actual:**
- ✅ Estructura clara de módulos (`develop/{provider}/modules`).
- ✅ Fuente de verdad de las Reglas Ka0s.
- ✅ Seguridad IaC activa (`iac-security.yml`).
- ⚠️ Documentación de módulos podría automatizarse.

**Mejoras Propuestas:**

*   **Corto Plazo:**
    *   [x] **Seguridad IaC**: Integrar `trivy` o `checkov` en los workflows para escanear malas configuraciones en Terraform. (Implementado: `iac-security.yml`)
    *   [ ] **Auto-Docs**: Implementar `terraform-docs` para generar `README.md` de módulos automáticamente.

*   **Mediano Plazo:**
    *   [ ] **State Management**: Asegurar que el estado de Terraform (tfstate) esté en un backend remoto seguro (S3/Azure Blob) con bloqueo (DynamoDB).
    *   [ ] **Cost Estimation**: Integrar `infracost` en PRs para ver el impacto económico de los cambios.

---

### 2.3. `kaos-ia-powered` (AI Governance & Intelligence)
**Rol:** Cerebro de IA, gestión de Skills y modelos.

**Estado Actual:**
- ✅ Estructura base de Skills y Reglas.
- ✅ Registro de Skills inicializado (`registry/README.md`).
- ⚠️ Falta código de implementación de Agentes (actualmente disperso en `ka0s/core/b2b/ollama`).

**Mejoras Propuestas:**

*   **Corto Plazo:**
    *   [ ] **Centralización de Lógica IA**: Mover la lógica de negocio de los agentes (prompts, RAG pipelines) de `ka0s` a este repositorio.
    *   [x] **Skill Registry**: Convertir este repo en el registro oficial de Skills para Trae/Copilot. (Implementado: `registry/README.md`)

*   **Mediano Plazo:**
    *   [ ] **Model Finetuning**: Pipelines para re-entrenar modelos pequeños (Llama/Mistral) con logs de `ka0s`.
    *   [ ] **Agent Eval**: Implementar framework de evaluación para las respuestas de la IA.

---

### 2.4. `ka0s.github.io` (Knowledge Base & Blog)
**Rol:** Documentación pública, blog técnico y difusión.

**Estado Actual:**
- ✅ Contenido rico en Markdown.
- ✅ CI de Contenido implementado (`content-validation.yml`).
- ⚠️ SEO básico.

**Mejoras Propuestas:**

*   **Corto Plazo:**
    *   [x] **CI de Contenido**: Implementar `markdown-link-check` y `proselint` en GitHub Actions. (Implementado: `content-validation.yml`)
    *   [ ] **Sync Automático**: Workflow que sincronice documentación técnica de `ka0s/core/docs` hacia el blog (si aplica).

*   **Mediano Plazo:**
    *   [ ] **Búsqueda Avanzada**: Implementar Algolia o similar para búsqueda semántica en la documentación.
    *   [ ] **Multilenguaje**: Preparar estructura para i18n si se planea expansión.

---

### 2.5. `www.ka0s.io` (Landing & Identity)
**Rol:** Puerta de entrada, identidad de marca y marketing.

**Estado Actual:**
- ✅ Web estática funcional.
- ✅ Auditoría de Performance/Accesibilidad activa (`web-optimization.yml`).
- ⚠️ Accesibilidad y Performance mejorables.

**Mejoras Propuestas:**

*   **Corto Plazo:**
    *   [x] **Optimización de Assets**: Pipeline que comprima imágenes (`imagemin`) y minifique CSS/JS automáticamente al hacer push. (Implementado: `web-optimization.yml`)
    *   [x] **Auditoría Lighthouse**: CI que falle si el score de performance/accessibility baja de 90. (Implementado: `web-optimization.yml`)

*   **Mediano Plazo:**
    *   [ ] **Analytics Privado**: Integrar solución de analítica respetuosa (ej: Plausible o el mismo Zabbix/Matomo) para no depender de terceros.

---

## 3. Plan de Ejecución (Siguientes Pasos)

Para continuar este roadmap, sugiero priorizar:

1.  **Seguridad Global**: Añadir escaneo de secretos (Gitleaks) en todos los repositorios.
2.  **Core**: Limpieza de manifiestos Kubernetes usando Kustomize overlays.
3.  **IA**: Migrar la lógica de Ollama desde `ka0s` a `kaos-ia-powered`.

---
*Este documento reside en `audit/trash/` conforme a la Regla 004 y debe ser revisado trimestralmente.*
