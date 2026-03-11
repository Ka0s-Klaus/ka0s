# Roadmap de Automatización Zabbix (Zabbix as Code)

Este documento define la estrategia para transformar la gestión de Zabbix de un modelo manual ("ClickOps") a un modelo totalmente automatizado y gobernado por código ("Monitoring as Code").

## 1. Evaluación de Zabbix 7.4.7 para Automatización

Zabbix 7.x ha alcanzado un nivel de madurez que permite una gestión 100% programática, superando las limitaciones históricas de herramientas basadas en ficheros estáticos (como Nagios) y herramientas puramente visuales.

### Puntos Fuertes para IaC
*   **API RESTful Completa**: Cobertura casi total de la configuración (Hosts, Items, Triggers, Dashboards, Users).
*   **Formatos Estándar**: Exportación/Importación nativa en YAML/JSON/XML.
*   **Token-Based Auth**: Facilita la integración con CI/CD sin exponer credenciales de usuario.
*   **Tagging System**: Etiquetado granular (Host tags, Item tags) que permite automatizar la correlación y el filtrado en Dashboards.

---

## 2. Catálogo de Automatización: Qué y Cómo

A continuación se detallan las secciones de Zabbix que deben ser migradas a gestión por código.

### A. Infraestructura y Recolección (Core)

| Componente | Estrategia de Automatización | Herramienta / Método | Prioridad |
| :--- | :--- | :--- | :--- |
| **Hosts (Servidores/Pods)** | Auto-registro al arrancar el agente. El agente envía metadatos (`HostMetadata`) que el servidor usa para asignar Templates y Grupos. | Zabbix Agent 2 + Actions | **Alta** |
| **Host Groups** | Definición en archivo YAML (`groups.yaml`). Script de sincronización que crea grupos faltantes. | Script Python (`group.create`) | **Media** |
| **Templates** | Versionado en Git (`core/monitoring/zabbix/templates/*.yaml`). Pipeline CI/CD que importa cambios al hacer merge. | Zabbix API (`configuration.import`) | **Crítica** |
| **Proxies** | Despliegue de proxies como contenedores (Helm Chart) y registro automático en el Server. | Helm + Script Init | **Baja** (Actual: 0 proxies) |

### B. Configuración y Lógica

| Componente | Estrategia de Automatización | Herramienta / Método | Prioridad |
| :--- | :--- | :--- | :--- |
| **Macros (Secretos/Vars)** | Gestión de secretos (DB passwords, API keys) mediante Vault o GitHub Secrets, inyectados como Macros Globales o de Host. | Script Python (`usermacro.create`) | **Alta** |
| **UserParameters** | Definición de métricas custom en repositorio Git. Despliegue mediante ConfigMap en K8s o Ansible en VMs. | K8s ConfigMap / Ansible | **Media** |
| **Maintenance Periods** | Programación automática de ventanas de mantenimiento antes de desplegar una Release. | CI/CD Pipeline (`maintenance.create`) | **Alta** |

### C. Visualización y Experiencia

| Componente | Estrategia de Automatización | Herramienta / Método | Prioridad |
| :--- | :--- | :--- | :--- |
| **Dashboards** | Definición JSON de paneles (Layout, Widgets). Script que crea/actualiza dashboards por entorno o servicio. | Script Python (`dashboard.create`) | **Alta** |
| **Network Maps** | Generación dinámica de mapas basada en la topología real (consulta a K8s API o CMDB). | Script Python (`map.create`) | **Baja** |
| **Graphs (Legacy)** | *Deprecado en favor de Dashboards*. Se gestionan dentro de los Templates. | Template Import | **N/A** |

### D. Alertas y Notificaciones

| Componente | Estrategia de Automatización | Herramienta / Método | Prioridad |
| :--- | :--- | :--- | :--- |
| **Actions (Reglas)** | Definición de reglas de lógica de negocio ("Si es Prod y Severidad > High, llama a PagerDuty"). | Script Python (`action.create`) | **Crítica** |
| **Media Types** | Configuración de integraciones (Slack, Email, iTop) como código, inyectando tokens de API. | Script Python (`mediatype.create`) | **Alta** |

### E. Seguridad y Acceso (RBAC)

| Componente | Estrategia de Automatización | Herramienta / Método | Prioridad |
| :--- | :--- | :--- | :--- |
| **Users & Groups** | Sincronización con LDAP/AD o definición en archivo YAML (`users.yaml`). Asignación de Roles automática. | Script Python (`user.create`) | **Media** |
| **Roles** | Definición de perfiles de acceso (Solo lectura, Admin, API Access) en código. | Script Python (`role.create`) | **Media** |

---

## 3. Arquitectura de la Solución Propuesta

### Estructura del Repositorio
```
core/monitoring/zabbix/
├── templates/          # Archivos YAML exportados de Zabbix
├── dashboards/         # Definiciones JSON de Dashboards
├── config/
│   ├── hosts.yaml      # Inventario estático (si aplica)
│   ├── groups.yaml     # Estructura de grupos
│   ├── macros.yaml     # Variables globales (no secretos)
│   └── rbac.yaml       # Usuarios y Permisos
├── scripts/            # Herramientas Python (API wrappers)
└── .github/workflows/  # Pipelines de sincronización
```

### Flujo de Trabajo (GitOps)
1.  **Ingeniero**: Edita un Template o Dashboard en su IDE local o exporta uno existente.
2.  **Pull Request**: Sube los cambios a Git.
3.  **Validación**: GitHub Actions valida sintaxis YAML/JSON.
4.  **Merge**: Al aprobar, se dispara el pipeline de despliegue.
5.  **Sincronización**: El script Python conecta a la API de Zabbix y aplica los cambios (Idempotencia: Create if not exists, Update if changed).

## 4. Próximos Pasos (Implementación)

1.  **Fase 1: Cimientos** (Completado: Scripts de Exportación e Inventario).
2.  **Fase 2: Templates & Dashboards** (Q2 2026). Implementar script de importación para Templates y Dashboards.
3.  **Fase 3: Alertas & Acciones** (Q3 2026). Codificar las reglas de escalado e integración con iTop.
4.  **Fase 4: RBAC & Self-Service** (Q4 2026). Automatizar la creación de usuarios y permisos.
