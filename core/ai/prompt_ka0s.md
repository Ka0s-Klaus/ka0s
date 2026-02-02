# Archivo de Contexto Maestro: Proyecto Ka0s

Este documento es la **Constitución Técnica** del proyecto Ka0s. Define la arquitectura, las reglas de operación y la filosofía que cualquier agente de IA debe seguir para trabajar de forma autónoma y coherente dentro del ecosistema.

## 1. Visión del Proyecto
**Ka0s** no es solo un repositorio, es una **Plataforma de Ingeniería Interna (IDP) y AIOps**.
*   **Objetivo**: Orquestar infraestructura, seguridad y operaciones de TI de forma automatizada, auditable y resiliente.
*   **Filosofía**: "Managed Chaos" -> **"Automated Order"**. Control total sobre entornos complejos mediante automatización estricta y autocuración.
*   **Actores**:
    *   **GitHub Actions** (Cerebro/Orquestador).
    *   **Kubernetes** (Músculo/Motor).
    *   **iTop** (Memoria/Gobernanza Activa).
    *   **Wazuh/ELK** (Sentidos/Observabilidad).

## 2. Estructura del Workspace (Mapa Sagrado)
Respetar estrictamente esta estructura de directorios. No crear carpetas raíz nuevas sin autorización expresa.

### 2.1. Núcleo y Definiciones
*   `core/ai/`: Prompts de contexto para agentes (la "inteligencia" del sistema).
*   `core/b2b/`: Definiciones de servicios de negocio e infraestructura (Docker, K8s manifests).
*   `core/docs/`: Documentación funcional y técnica del proyecto.

### 2.2. Operaciones y Ejecución
*   `.github/workflows/`: Pipelines de CI/CD y orquestación de tareas.
*   `.github/actions/`: Acciones compuestas reutilizables (lógica compleja).
*   `devops/`: Scripts de mantenimiento, despliegue y operación (Bash/Python).
    *   `devops/core/k8s/`: Scripts específicos de Kubernetes.

### 2.3. Auditoría y Datos (La Verdad del Sistema)
*   `audit/`: Almacén central de evidencias y resultados.
    *   `audit/kube/`: Resultados de auditorías de Kubernetes (JSON).
    *   `audit/inspector/`: Logs de inspección general.
    *   `audit/issues/`: Reportes de problemas detectados.
*   **Regla de Oro**: Todo proceso debe dejar un rastro en `audit/`.

## 3. Reglas de Operación (Modus Operandi)

### 3.1. Ejecución Remota (SSH First)
La mayoría de las operaciones no ocurren en el runner de GitHub, sino en la infraestructura real.
*   **Mecanismo**: Uso obligatorio del workflow `.github/workflows/ssh-connect.yml` o la action `.github/actions/ssh-exec`.
*   **Scripts**: Deben ser "self-contained", no interactivos y diseñados para correr en un host remoto (Linux/K8s Control Plane).

### 3.2. Formato de Salida (Data Driven)
*   **JSON por defecto**: Todo script de auditoría o extracción de datos debe intentar generar salida JSON (`-o json`).
*   **Logs Estructurados**: Si no es JSON, usar formato clave-valor parseable.
*   **Ubicación**: Los scripts deben permitir configurar el directorio de salida, pero por defecto el workflow los moverá a la carpeta `audit/` correspondiente en el repo.

### 3.3. Desarrollo de Código
*   **Lenguajes**: Bash (Scripting de sistema), Python (Lógica compleja/Data/API), YAML (Configuración).
*   **Manejo de Errores**:
    *   **Bash**: `set -e` obligatorio.
    *   **Python**: Bloques `try/except` robustos, especialmente para llamadas de red (HTTP 502/503). Logs claros con prefijos `[INFO]`, `[WARN]`, `[FATAL]`.
*   **Documentación**: Todo script nuevo debe ir acompañado de un `.md` (mismo nombre base) explicando:
    1.  Propósito.
    2.  Inputs requeridos.
    3.  Ejemplo de integración en workflow.

### 3.4. Filosofía de Autocuración (Self-Healing)
No basta con detectar errores; debemos gestionarlos.
1.  **Detección**: El script identifica una anomalía (ej. Pod Failed).
2.  **Reconciliación**: Consultar la "Fuente de Verdad" (iTop) antes de actuar.
    *   *¿Ya existe un ticket?* -> Ignorar (evitar ruido).
    *   *¿Es nuevo?* -> Crear ticket/alerta.
    *   *¿Desapareció el error?* -> Cerrar ticket automáticamente.
3.  **Resiliencia**: Si la herramienta de gestión (iTop) falla, el proceso debe degradarse elegantemente (loguear error y continuar o abortar limpiamente), nunca colgarse.

## 4. Integraciones Clave

### 4.1. Kubernetes (Motor)
*   Ver `core/ai/prompt_kubernetes.md` para detalles específicos.
*   Siempre usar `kubectl` de forma declarativa o para extracción de datos (JSON).

### 4.2. GitHub (Orquestador)
*   Ver `core/ai/prompt_github.md` para detalles específicos.
*   Seguridad ante todo: Secrets, OIDC, y permisos mínimos.
*   **Estandarización de Workflows (MANDATORIO)**:
    1.  **Runners**: SIEMPRE utilizar `runs-on: swarm-runners-scaleset`. Está prohibido usar `ubuntu-latest`.
    2.  **Ciclo de Vida**: Todo workflow debe incluir los jobs de cierre estándar para trazabilidad:
        *   `handle-success`: Log de éxito.
        *   `handle_failure`: Creación de issues en caso de error.
        *   `end-workflow`: Disparador final del `inspector.yml`.
    3.  **Variables de Entorno**: Definir `KAOS_MODULE` (Nombre legible) y `KAOS_CODE` (Run ID) al inicio.

### 4.3. iTop (Gobernanza Activa)
*   **Rol**: No es solo un inventario, es el registro de estado de las operaciones.
*   **Interacción**:
    *   **Lectura**: Verificar estado antes de crear duplicados.
    *   **Escritura**: Registrar incidentes (UserRequest) y cambios (Change).
    *   **Cierre**: Autocompletar tickets si la condición de fallo desaparece.

## 5. Instrucciones para el Agente
Al recibir una tarea:
1.  **Clasificar**: ¿Es infraestructura (K8s), automatización (GitHub) o auditoría?
2.  **Consultar**: Leer el prompt especializado correspondiente (`prompt_kubernetes.md`, etc.) si es necesario.
3.  **Planificar**: Definir dónde irá el script (`devops/`), dónde irá el workflow (`.github/workflows/`) y dónde caerá el resultado (`audit/`).
4.  **Ejecutar**: Generar código siguiendo los estándares de este archivo, priorizando siempre la **Autocuración**.
