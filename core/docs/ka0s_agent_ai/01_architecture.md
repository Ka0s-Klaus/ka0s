# 🤖 Arquitectura RAG Multi-Persona

> Documentación técnica del sistema de agente conversacional con recuperación aumentada de información,
> roles especializados y pipeline integrado con GitHub Actions.
> 
> **Estado actual:** en transición de script monolítico a biblioteca modular publicable en PyPI.

-----

## Índice

1. [¿Qué es RAG?](#1-qué-es-rag)
1. [Componentes del sistema](#2-componentes-del-sistema)
1. [Flujo general](#3-flujo-general)
1. [Flujo detallado del pipeline](#4-flujo-detallado-del-pipeline)
1. [Sistema de roles (Multi-Persona)](#5-sistema-de-roles-multi-persona)
1. [Flujo de auto-detección de rol](#6-flujo-de-auto-detección-de-rol)
1. [Reglas globales y conocimiento compartido](#7-reglas-globales-y-conocimiento-compartido)
1. [Integración con GitHub Actions](#8-integración-con-github-actions)
1. [Estructura del script Python](#9-estructura-del-script-python)
1. [Cómo ampliar el sistema](#10-cómo-ampliar-el-sistema)
1. [Evolución: de script a biblioteca modular](#11-evolución-de-script-a-biblioteca-modular)
1. [Visión: publicación en PyPI](#12-visión-publicación-en-pypi)

-----

## 1. ¿Qué es RAG?

**RAG (Retrieval-Augmented Generation)** es una arquitectura que combina dos capacidades:

- **Recuperación**: buscar fragmentos relevantes en una base de datos de conocimiento
- **Generación**: usar un LLM para producir una respuesta basada en ese conocimiento

La clave es que **separa el conocimiento de la inteligencia**:

|Componente             |Aporta                                         |
|-----------------------|-----------------------------------------------|
|Base de datos vectorial|Conocimiento actualizado y verificable         |
|LLM                    |Capacidad de razonar y generar lenguaje natural|

Sin RAG, el LLM solo responde con lo que aprendió durante su entrenamiento.
Con RAG, consulta documentos reales antes de responder.

### Problema que resuelve

```
Sin RAG:  Pregunta → LLM → Respuesta (puede alucinar o estar desactualizada)
Con RAG:  Pregunta → Buscar contexto → LLM + contexto → Respuesta fundamentada
```

-----

## 2. Componentes del sistema

```mermaid
graph TD
    User["Usuario"] -->|"Crea Issue"| GH["GitHub Issue"]
    GH -->|"Webhook"| Action["GitHub Action: Issue Responder"]
    Action -->|"Consulta"| Script["Inference Script (rag_query.py)"]
    Script -->|"Busca Contexto"| DB[("Postgres Vector DB")]
    Script -->|"Genera Respuesta"| LLM["Ollama (llama3.1:8b)"]
    LLM --> Script
    Script -->|"Comenta"| GH
```

|Componente                 |Tecnología                   |Función                                 |
|---------------------------|-----------------------------|----------------------------------------|
|**LLM**                    |`llama3.1:8b` vía Ollama     |Genera las respuestas                   |
|**Embedding**              |`nomic-embed-text` vía Ollama|Vectoriza textos y preguntas            |
|**Base de datos vectorial**|PostgreSQL + pgvector        |Almacena y busca por similitud semántica|
|**Pipeline**               |Python 3.11                  |Orquesta todo el flujo RAG              |
|**Orquestador**            |GitHub Actions               |Dispara las consultas al agente         |

-----

## 3. Flujo general

```mermaid
flowchart LR
    A([Pregunta]) --> B[Detectar rol]
    B --> C[Vectorizar pregunta]
    C --> D[Buscar en PostgreSQL]
    D --> E[Construir prompt\ncon contexto + persona]
    E --> F[Generar respuesta]
    F --> G([Respuesta en español\ncon explicación])

    style A fill:#2d8a4e,color:#fff
    style G fill:#2d8a4e,color:#fff
```

-----

## 4. Flujo detallado del pipeline

```mermaid
flowchart TD
    A([🚀 GitHub Actions\nworkflow_dispatch]) --> B[Recibir pregunta\ny rol opcional]

    B --> C{¿Rol forzado\nmanualmente?}

    C -- Sí --> D[✅ Usar rol indicado]
    C -- No --> E[🔍 Llamar a llama3.1:8b\npara clasificar la pregunta]
    E --> F[Rol auto-detectado]

    D --> G
    F --> G[🧮 Vectorizar pregunta\ncon nomic-embed-text]

    G --> H[(🗄️ PostgreSQL + pgvector\nBúsqueda por cosine similarity\nUmbral: 0.7 · Top K: 5)]

    H --> I{¿Fragmentos\nrelevantes?}

    I -- No --> J[⚠️ Respuesta:\nSin información suficiente]
    I -- Sí --> K[📝 Construir prompt\nReglas globales +\nPersona del rol +\nContexto recuperado +\nPregunta]

    K --> L[🤖 llama3.1:8b\nGenera respuesta\ntemp: 0.2]

    L --> M[📤 Output\nConsola + GITHUB_OUTPUT\n+ GITHUB_STEP_SUMMARY]

    style A fill:#2d8a4e,color:#fff
    style J fill:#c0392b,color:#fff
    style M fill:#2d8a4e,color:#fff
    style H fill:#336791,color:#fff
    style I fill:#f39c12,color:#fff
    style C fill:#f39c12,color:#fff
```

-----

## 5. Sistema de roles (Multi-Persona)

El sistema soporta **6 roles especializados**. Cada rol tiene su propio enfoque,
tono y reglas específicas, pero todos comparten las reglas globales y el conocimiento
de herramientas.

```mermaid
flowchart LR
    BASE["🧱 Base común\n────────────────\nReglas globales\nHerramientas compartidas\n(iTop, Zabbix, K8s, etc.)"]

    BASE --> R1["⚙️ DevOps\nAutomatización\nKubernetes · CI/CD"]
    BASE --> R2["💰 FinOps\nCostos · Licencias\nOptimización económica"]
    BASE --> R3["🔐 SecOps\nSeguridad · Hardening\nVulnerabilidades"]
    BASE --> R4["🤖 IAOps\nLLMs · RAG\nEmbeddings · GPU"]
    BASE --> R5["📋 ITILOps\nIncidencias · Cambios\nSLA · CMDB · iTop"]
    BASE --> R6["📝 DocsOps\nRunbooks · MkDocs\nWikis · Manuales"]
```

### Descripción de roles

|Rol      |Emoji|Especialidad                                      |Formato de respuesta     |
|---------|-----|--------------------------------------------------|-------------------------|
|`devops` |⚙️    |Infraestructura, Kubernetes, CI/CD, automatización|Pasos + bloques de código|
|`finops` |💰    |Costos, presupuesto, ROI, licencias               |Tablas comparativas      |
|`secops` |🔐    |Seguridad, hardening, vulnerabilidades, accesos   |Advertencias + checklist |
|`iaops`  |🤖    |LLMs, RAG, embeddings, inferencia, GPU            |Técnico con parámetros   |
|`itilops`|📋    |ITIL v4, gestión de incidencias, cambios, SLA     |Proceso + prioridad      |
|`docsops`|📝    |Documentación, runbooks, MkDocs, wikis            |Markdown estructurado    |

-----

## 6. Flujo de auto-detección de rol

Cuando no se fuerza un rol, el LLM clasifica la pregunta antes de responderla.
Esto supone **dos llamadas a Ollama**: una para clasificar y otra para responder.

```mermaid
sequenceDiagram
    participant GHA as GitHub Actions
    participant PY  as Script Python
    participant OLL as Ollama (llama3.1:8b)
    participant PG  as PostgreSQL

    GHA->>PY: pregunta (sin rol)
    PY->>OLL: "Clasifica esta pregunta en: devops/finops/secops/iaops/itilops/docsops"
    OLL-->>PY: "devops"
    PY->>OLL: embed(pregunta) con nomic-embed-text
    OLL-->>PY: vector[768]
    PY->>PG: SELECT ... ORDER BY embedding <=> vector LIMIT 5
    PG-->>PY: fragmentos relevantes
    PY->>OLL: prompt = system_prompt(devops) + contexto + pregunta
    OLL-->>PY: respuesta en español con explicación
    PY-->>GHA: output: rag_response, rol_usado, fragments_found
```

-----

## 7. Reglas globales y conocimiento compartido

### Reglas globales

Se aplican a **todos los roles** sin excepción:

1. ✅ Responder siempre en **español**
1. ✅ Incluir sección `📌 Explicación de la solución` al final
1. ✅ Si no hay contexto suficiente: `⚠️ No tengo información suficiente...`
1. ✅ Nunca inventar datos, comandos ni configuraciones
1. ✅ Advertir con `⚠️ PRECAUCIÓN:` antes de acciones destructivas

### Herramientas que dominan todos los roles

|Herramienta   |Tipo                                        |
|--------------|--------------------------------------------|
|**iTop**      |CMDB y gestión de servicios IT              |
|**Metabase**  |Dashboards y analítica de datos             |
|**MongoDB**   |Base de datos documental NoSQL              |
|**MySQL**     |Base de datos relacional                    |
|**PostgreSQL**|Base de datos relacional avanzada + pgvector|
|**Zabbix**    |Monitorización de infraestructura           |
|**Kubernetes**|Orquestación de contenedores                |
|**MkDocs**    |Documentación técnica en Markdown           |

-----

## 8. Integración con GitHub Actions

```mermaid
flowchart TD
    A([workflow_dispatch\no workflow_call]) --> B{¿Viene\ncon --rol?}

    B -- Sí --> C[Pasar --rol al script]
    B -- No --> D[Script auto-detecta el rol]

    C --> E[python rag_query.py\n'pregunta' --rol devops]
    D --> F[python rag_query.py\n'pregunta']

    E --> G[📄 GITHUB_STEP_SUMMARY\nResumen visual en la UI]
    F --> G
    E --> H[📦 GITHUB_OUTPUT\nrag_response\nrol_usado\nfragments_found]
    F --> H
```

### Secrets requeridos en el repositorio

|Secret       |Valor                                                |
|-------------|-----------------------------------------------------|
|`OLLAMA_URL` |URL interna de Ollama (ej: `http://ollama-svc:11434`)|
|`PG_HOST`    |Host de PostgreSQL                                   |
|`PG_PORT`    |Puerto (por defecto `5432`)                          |
|`PG_DB`      |Nombre de la base de datos                           |
|`PG_USER`    |Usuario                                              |
|`PG_PASSWORD`|Contraseña                                           |


> ⚠️ El runner debe ser **self-hosted** para tener acceso a Ollama y PostgreSQL internos.

-----

## 9. Estructura del script Python

> ⚠️ **Nota:** Esta es la estructura actual monolítica. Está previsto migrarla a biblioteca modular.
> Ver sección [11. Evolución: de script a biblioteca modular](#11-evolución-de-script-a-biblioteca-modular).

```
rag_query.py
│
├── CONFIGURACIÓN              ← Variables de entorno (Ollama, PostgreSQL)
├── ROLES_VALIDOS              ← Lista de roles permitidos
│
├── CONOCIMIENTO_HERRAMIENTAS  ← Inyectado en TODOS los roles
├── REGLAS_GLOBALES            ← Inyectado en TODOS los roles
│
├── PERSONAS                   ← Diccionario con los 6 roles
│   ├── devops
│   ├── finops
│   ├── secops
│   ├── iaops
│   ├── itilops
│   └── docsops
│
├── detectar_rol()         ← Paso 1: clasifica la pregunta (si no hay rol forzado)
├── embed_query()          ← Paso 2: vectoriza la pregunta con nomic-embed-text
├── search_context()       ← Paso 3: busca fragmentos en PostgreSQL/pgvector
├── build_prompt()         ← Paso 4: construye el prompt con persona + contexto
├── generate_answer()      ← Paso 5: genera la respuesta con llama3.1:8b
│
└── main()                 ← Orquesta los 5 pasos + outputs para GitHub Actions
```

### Uso desde línea de comandos

```bash
# Auto-detección de rol
python rag_query.py "¿Por qué falla el pod en CrashLoopBackOff?"

# Rol forzado
python rag_query.py "¿Cuánto cuesta este clúster?" --rol finops
python rag_query.py "Documenta el proceso de despliegue" --rol docsops
python rag_query.py "¿Hay alguna vulnerabilidad en este endpoint?" --rol secops
```

-----

## 10. Cómo ampliar el sistema (versión script)

### Añadir un nuevo rol

```python
# En el diccionario PERSONAS, añadir una nueva entrada:
"nuevorol": {
    "nombre": "Nombre del Rol",
    "emoji": "🆕",
    "system_prompt": f"""{CONOCIMIENTO_HERRAMIENTAS}
{REGLAS_GLOBALES}

Eres un especialista en...

ENFOQUE DE ESTE ROL:
- Regla específica 1
- Regla específica 2"""
}
```

Y añadirlo a `ROLES_VALIDOS` y al prompt del clasificador en `detectar_rol()`.

### Añadir una nueva herramienta

```python
# En CONOCIMIENTO_HERRAMIENTAS, añadir una línea:
CONOCIMIENTO_HERRAMIENTAS = """
...
- NuevaHerramienta: descripción breve de para qué sirve
"""
```

### Añadir una nueva regla global

```python
# En REGLAS_GLOBALES, añadir una línea numerada:
REGLAS_GLOBALES = """
...
6. Nueva norma que aplica a todos los roles
"""
```

-----

## 11. Evolución: de script a biblioteca modular

### Por qué migrar

El script monolítico funciona pero tiene limitaciones claras a medida que crece:

|Problema del script único                    |Solución con biblioteca modular      |
|---------------------------------------------|-------------------------------------|
|Cambiar un rol requiere buscar en 300+ líneas|Editas solo `roles/devops.py`        |
|No se puede testear una función sola         |Cada módulo es testeable por separado|
|Añadir un LLM diferente es invasivo          |Cambias solo `core/llm.py`           |
|Reutilizar en otro proyecto = copiar todo    |`pip install rag-itops`              |
|Crecer en roles complica el archivo          |Un archivo `.py` por rol             |

### Estructura objetivo de la biblioteca

```
rag-itops/
│
├── rag_itops/                  ← Paquete principal
│   ├── __init__.py             ← Exporta la API pública
│   │
│   ├── core/                   ← Motor RAG, independiente de los roles
│   │   ├── __init__.py
│   │   ├── config.py           ← Variables de entorno y constantes
│   │   ├── embeddings.py       ← Vectorizar con nomic-embed-text
│   │   ├── search.py           ← Búsqueda en PostgreSQL/pgvector
│   │   ├── llm.py              ← Llamadas a Ollama (clasificar + generar)
│   │   ├── prompt.py           ← Construcción del prompt
│   │   └── output.py           ← GitHub Actions outputs y Step Summary
│   │
│   ├── roles/                  ← Un archivo por rol, fácil de ampliar
│   │   ├── __init__.py         ← Registro automático de roles
│   │   ├── base.py             ← Clase BaseRole con reglas globales
│   │   ├── devops.py
│   │   ├── finops.py
│   │   ├── secops.py
│   │   ├── iaops.py
│   │   ├── itilops.py
│   │   └── docsops.py
│   │
│   └── tools/                  ← Conocimiento de herramientas
│       ├── __init__.py
│       ├── kubernetes.py
│       ├── zabbix.py
│       ├── itop.py
│       ├── metabase.py
│       └── ...
│
├── main.py                     ← Punto de entrada CLI
├── tests/                      ← Tests por módulo
├── pyproject.toml              ← Configuración del paquete (PyPI)
└── README.md
```

### Cómo quedaría main.py con la biblioteca

```python
from rag_itops.core.llm        import detectar_rol, generate_answer
from rag_itops.core.embeddings import embed_query
from rag_itops.core.search     import search_context
from rag_itops.core.prompt     import build_prompt
from rag_itops.core.output     import write_github_output

def main(pregunta: str, rol_forzado: str = None):
    rol        = rol_forzado or detectar_rol(pregunta)
    embedding  = embed_query(pregunta)
    fragmentos = search_context(embedding)
    prompt     = build_prompt(pregunta, fragmentos, rol)
    respuesta  = generate_answer(prompt)
    write_github_output(respuesta, rol, fragmentos)
```

### Flujo de extensión con la biblioteca

```mermaid
flowchart LR
    A[Crear roles/netops.py\nheredando BaseRole] --> B[Registro automático\nen roles/__init__.py]
    B --> C[Disponible en\nauto-detección]
    B --> D[Disponible en\n--rol netops]

    style A fill:#3572A5,color:#fff
    style C fill:#2d8a4e,color:#fff
    style D fill:#2d8a4e,color:#fff
```

### Añadir un nuevo rol con la biblioteca

```python
# roles/netops.py
from rag_itops.roles.base import BaseRole

class NetOps(BaseRole):
    nombre  = "Network Operations"
    emoji   = "🌐"
    enfoque = [
        "Diagnóstico de red, BGP, OSPF, VLANs",
        "Firewall rules, ACLs, segmentación de red",
        "Troubleshooting de conectividad y latencia",
    ]
    # Las reglas globales y herramientas se heredan automáticamente de BaseRole
```

Eso es todo. Sin tocar ningún otro archivo.

-----

## 12. Visión: publicación en PyPI

El objetivo es que cualquier equipo de operaciones IT pueda instalar y usar
la biblioteca sin necesidad de clonar el repositorio ni configurar nada manualmente.

### Instalación objetivo

```bash
pip install rag-itops
```

### Uso objetivo

```python
from rag_itops import RagAgent

agent = RagAgent(
    ollama_url="http://ollama:11434",
    pg_dsn="postgresql://user:pass@host/db"
)

respuesta = agent.query("¿Por qué falla el pod en producción?")
# → Detecta rol: devops
# → Busca contexto en PostgreSQL
# → Responde en español con explicación
```

### Hoja de ruta

|Fase    |Estado       |Descripción                                                |
|--------|-------------|-----------------------------------------------------------|
|**v0.1**|🔄 En curso   |Script monolítico funcional                                |
|**v0.2**|📋 Planificado|Refactor a biblioteca modular                              |
|**v0.3**|📋 Planificado|Tests unitarios por módulo                                 |
|**v0.4**|📋 Planificado|Soporte para múltiples backends (Qdrant, pgvector, Elastic)|
|**v1.0**|📋 Planificado|Publicación en PyPI                                        |

-----

*Documento vivo · Actualizar tras cada cambio en el proyecto · Compatible con MkDocs*