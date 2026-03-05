# Arquitectura del Proyecto Ka0s

Este documento define la estructura organizativa, los principios arquitectónicos y el ecosistema de Skills del repositorio Ka0s.

## Principios de Diseño
1.  **GitOps**: El repositorio es la fuente de verdad.
2.  **Inmutabilidad**: Logs y auditorías solo se agregan, nunca se sobrescriben.
3.  **Skill First**: Las tareas complejas se delegan a Agentes Expertos (`.trae/skills/`).
4.  **ITIL Compliance**: Toda automatización respeta los procesos de Gestión de Cambios.

---

## Ecosistema de Skills (Roles y Responsabilidades)

La arquitectura de Ka0s se apoya en una red de agentes expertos que colaboran entre sí.

### 🌐 Nivel Global (Core & Transversales)
| Skill | Rol | Responsabilidad Principal | Fuente de Verdad |
| :--- | :--- | :--- | :--- |
| **`itil-expert`** | **Process Manager** | Garante normativo. Define QUÉ se puede hacer (Gestión de Cambios). | Normas ISO/ITIL |
| **`kubernetes-expert`** | **Cluster Architect** | Ejecuta cambios en infraestructura (`core/b2b/`). | `core/docs/ka0s_ci_cd_k8s/` |
| **`python-expert`** | **Automation Lead** | Mantiene scripts de automatización (`.github/scripts/`). | `prompt_python.md` |
| **`security-expert`** | **SecOps** | Auditoría continua y gestión de secretos. | `ka0s_security` |
| **`observability-expert`** | **SRE** | Monitorización (Zabbix) y Reporting Operativo (Metabase). | `ka0s_lz`, `ka0s_metabase` |

### 🏢 Nivel Proyecto (Negocio)
| Skill | Rol | Responsabilidad Principal | Fuente de Verdad |
| :--- | :--- | :--- | :--- |
| **`itop-expert`** | **ITSM Admin** | Gestión de CMDB y sincronización de activos. | `ka0s_itop` |
| **`github-expert`** | **DevOps Eng** | CI/CD, Workflows y Actions. | `.github/` |
| **`metabase-expert`** | **Data Analyst** | Ingeniería de Dashboards y SQL. | `ka0s_metabase` |
| **`db-admin`** | **Data Platform** | Admin de Bases de Datos (Postgres, Mongo). | `ka0s_db_admin` |
| **`mkdocs-expert`** | **Tech Writer** | Gestión de documentación viva. | `core/docs` |

---

## Mapa de Componentes

### 🤖 1. Automatización (`.github/`)
> **Dueño**: `github-expert` + `python-expert`
*   **`workflows/`**: Pipelines CI/CD.
*   **`actions/`**: Composite Actions reutilizables.
*   **`scripts/`**: Helpers en Python/Bash.

### 💾 2. Data Lake (`audit/`)
> **Dueño**: `observability-expert`
*   **Evidencias Estructuradas**: Logs JSON para ingestión.
*   **Memoria de Sesiones**: `audit/trash/conversations/` (Historial de decisiones).

### ⚖️ 3. Normativa (`compliance/`)
> **Dueño**: `itil-expert` + `security-expert`
*   Reglas de validación (linters) y políticas de seguridad.

### 🧠 4. Núcleo Funcional (`core/`)
> **Dueño**: `kubernetes-expert` (Infra) + `mkdocs-expert` (Docs)
*   **`b2b/`**: IaC (Kubernetes Manifests).
*   **`ai/`**: Prompts base y configuración de agentes.
*   **`docs/`**: Documentación técnica viva.

### 🛠️ 5. Operaciones (`devops/`)
> **Dueño**: `python-expert` (Ejecución)
*   Scripts imperativos para mantenimiento y remediación.

---

## Flujo de Trabajo Recomendado
1.  **Solicitud**: Usuario pide un cambio.
2.  **Validación**: `itil-expert` verifica si requiere proceso de cambio.
3.  **Ejecución**: Se invoca al skill técnico correspondiente (`kubernetes-expert`, etc.).
4.  **Verificación**: Se ejecutan tests/linters (`compliance/`).
5.  **Registro**: Se guarda evidencia en `audit/` y memoria en `audit/trash/conversations/`.
