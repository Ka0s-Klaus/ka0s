# Arquitectura: Core (Núcleo del Sistema)

## Descripción General

El directorio `core/` es el **corazón funcional** de Ka0s. A diferencia de `.github` (que orquesta) o `audit` (que registra), `core/` contiene la definición sustantiva de la infraestructura, la inteligencia y la configuración del negocio. Es donde "viven" los servicios y la lógica de la plataforma.

## Estructura de Componentes

### 1. AI (`core/ai/`) - El Cerebro
Contiene los "pensamientos" y contextos del sistema:
- **Prompts**: Archivos (`.txt`, `.md`) que definen la personalidad y conocimientos de los agentes de IA (ej. `chat_prompt.txt`, `prompt_devops.md`).
- **Herramientas**: Definiciones JSON de las capacidades que la IA puede invocar.
- **Memoria Vectorial**: Scripts de ingesta (`ingest_local.py`) optimizados para cargar conocimiento en `kaos_memory` (PostgreSQL + pgvector). El sistema utiliza el estándar de ejecución `swarm-runners-scaleset` para garantizar acceso a recursos internos.

### 2. B2B / Infraestructura (`core/b2b/`) - El Cuerpo
Almacena la Infraestructura como Código (IaC) para los servicios desplegados en Kubernetes:
- **Servicios Core**: Definiciones para ELK Stack, iTop, MongoDB, Ingress Nginx, Zabbix, etc.
- **Manifiestos**: Archivos YAML de Kubernetes (`deployment`, `service`, `kustomization`) que materializan la arquitectura en el clúster.
- **Consolidación de Datos**:
    - **PostgreSQL Central**: (`k8-node-20`) Aloja bases de datos para Keycloak, Metabase, Zabbix, etc.
    - **MySQL Central**: (`k8-node-30`) Aloja bases de datos para iTop y servicios legacy.
    - **NFS Storage**: Todos los volúmenes persistentes residen en el sistema de almacenamiento centralizado.
- **Optimización**: Se aplican límites de recursos (`resources: limits/requests`) en los Deployments.

### 3. Config (`core/config/`) - El Sistema Nervioso
Centraliza la configuración transversal:
- **Dashboards**: Configuraciones JSON para paneles de visualización.
- **Control**: Archivos como `control-file.yaml` que dictan comportamientos de aplicaciones internas.
- **FinOps**: Configuraciones específicas para módulos financieros y de reporte.

### 4. Docs (`core/docs/`) - La Memoria
La base de conocimiento del proyecto, conteniendo documentación técnica, guías de arquitectura (como este archivo) y explicaciones de metodologías.

## Patrón de Uso
Las automatizaciones de `.github` leen `core/b2b` para desplegar infraestructura y `core/config` para configurar el entorno, mientras que los agentes de IA consumen `core/ai` para entender su misión.
