# Arquitectura del Proyecto Ka0s

Este documento define la estructura organizativa y los principios arquitectónicos del repositorio Ka0s. Está diseñado para facilitar la navegación, el mantenimiento y la automatización mediante agentes de IA y operadores humanos.

## Principios de Diseño
1.  **GitOps**: El repositorio es la fuente de verdad.
2.  **Separación de Responsabilidades**: Cada directorio tiene un propósito único y exclusivo (Automatización, Evidencia, Normativa, Definición, Operación).
3.  **Inmutabilidad**: Los logs y auditorías no se sobrescriben, se agregan.

---

## Mapa de Componentes

### 🤖 1. Automatización (`.github/`)
> **Propósito**: Orquestación de tareas y CI/CD.

*   **`workflows/`**: Definiciones de pipelines.
*   **`actions/`**: Lógica compleja encapsulada (Composite Actions) para mantener los workflows limpios.
*   **`scripts/`**: Helpers auxiliares para las acciones.

### 💾 2. Data Lake (`audit/`)
> **Propósito**: Memoria persistente y trazabilidad.

*   Directorio designado para depositar **evidencias estructuradas** (JSON/Logs) generadas por automatizaciones.
*   Diseñado para ser ingerido por sistemas de observabilidad (ELK/MongoDB).
*   **Regla**: Nunca generar logs en la raíz; todo debe ir aquí.

### ⚖️ 3. Normativa (`compliance/`)
> **Propósito**: Estándares de calidad y reglas ("La Ley").

*   Fuente de verdad inmutable para **reglas de validación** (linters de Markdown, YAML, JSON).
*   Define los estándares que deben cumplir todos los componentes del sistema.

### 🧠 4. Núcleo Funcional (`core/`)
> **Propósito**: Lógica de negocio y Estado Deseado.

*   **`b2b/`**: Infraestructura como Código (IaC). Aquí viven los manifiestos Kubernetes de los servicios (Redis, Mongo, Apps).
*   **`config/`**: Configuraciones globales del sistema.
*   **`docs/`**: Documentación técnica y funcional detallada.
*   **`ai/`**: Prompts y configuraciones para agentes inteligentes.

### 🛠️ 5. Operaciones (`devops/`)
> **Propósito**: Ejecución táctica y Mantenimiento.

*   Contiene **lógica imperativa** (scripts `.sh`, `.py`).
*   Utilizado para operaciones de mantenimiento, remediación y auditoría directa sobre nodos/clúster.
*   Diseñado para ser invocado tanto manualmente (SSH) como automáticamente (GitHub Actions).

---

## Estructura de Directorios (Vista Simplificada)

```text
.
├── .github/              # Motor de Automatización
│   ├── actions/          # Acciones locales reutilizables
│   └── workflows/        # Pipelines CI/CD
├── audit/                # Data Lake de Evidencias
│   ├── execution/        # Logs de ejecuciones
│   ├── inspector/        # Reportes de inspección
│   └── ...
├── compliance/           # Reglas y Estándares
│   ├── core/             # Definiciones base
│   └── [html|json|yaml]/ # Reglas por lenguaje
├── core/                 # Corazón del Sistema
│   ├── b2b/              # IaC (Kubernetes Manifests)
│   ├── config/           # Configuración Global
│   └── docs/             # Documentación
├── devops/               # Scripts Operativos
│   ├── core/             # Scripts Core (Host, K8s, iTop)
│   └── k8s/              # Utilidades Kubernetes
└── templates/            # Plantillas de Archivos
```
