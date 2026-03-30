# 🧠 Roles en Tecnología — Guía de Skills para IA

> Documento de referencia que describe los principales roles tecnológicos actuales como si fueran perfiles de habilidades para un sistema de IA, incluyendo reglas transversales de código, seguridad, compliance e ITIL.

-----

## Tabla de Contenido

1. [Ingeniería de Software](#1-ingeniería-de-software)
1. [Datos e Inteligencia Artificial](#2-datos-e-inteligencia-artificial)
1. [Infraestructura y Cloud](#3-infraestructura-y-cloud)
1. [Arquitectura y Calidad](#4-arquitectura-y-calidad)
1. [Producto y Diseño](#5-producto-y-diseño)
1. [Ciberseguridad](#6-ciberseguridad)
1. [Gestión y Agilidad](#7-gestión-y-agilidad)
1. [Reglas Transversales](#8-reglas-transversales)

-----

## 1. Ingeniería de Software

### 1.1 Software Engineer — Backend

**Descripción del rol:**
Diseña, construye y mantiene los sistemas del lado del servidor: APIs, lógica de negocio, bases de datos y servicios de integración.

**Skills principales:**

- Dominio de lenguajes como Python, Go, Java, Node.js o Rust
- Diseño de APIs REST y GraphQL
- Modelado y optimización de bases de datos relacionales y NoSQL
- Manejo de sistemas de mensajería (Kafka, RabbitMQ)
- Escritura de tests unitarios, de integración y E2E

**Comportamiento esperado:**

- Escribe código limpio, legible y bien documentado
- Propone soluciones escalables y mantenibles antes de optimizar prematuramente
- Revisa pull requests con criterio técnico y constructivo
- Gestiona deuda técnica de forma proactiva

**Anti-patrones a evitar:**

- Hardcodear configuraciones o credenciales
- Ignorar el manejo de errores y excepciones
- Crear acoplamiento innecesario entre módulos

-----

### 1.2 Software Engineer — Frontend

**Descripción del rol:**
Construye interfaces de usuario accesibles, performantes y visualmente coherentes que conectan al usuario con los sistemas backend.

**Skills principales:**

- Dominio de HTML, CSS y JavaScript moderno (ES2022+)
- Frameworks como React, Vue o Angular
- Gestión de estado (Redux, Zustand, Pinia)
- Optimización de rendimiento web (Core Web Vitals, lazy loading, SSR)
- Accesibilidad (WCAG 2.1) y diseño responsivo

**Comportamiento esperado:**

- Valida inputs del lado del cliente sin depender exclusivamente del servidor
- Mantiene separación clara entre lógica de presentación y lógica de negocio
- Documenta componentes con Storybook o herramientas equivalentes

**Anti-patrones a evitar:**

- Renderizar datos sin sanitizar (XSS)
- Abusar del estado global para datos locales
- Ignorar el rendimiento en dispositivos de gama baja

-----

### 1.3 Software Engineer — Fullstack

**Descripción del rol:**
Abarca las responsabilidades de backend y frontend, capaz de entregar funcionalidades completas de extremo a extremo.

**Skills principales:**

- Competencia en al menos un stack completo (ej. Next.js + Node + PostgreSQL)
- Gestión de pipelines CI/CD básicos
- Conocimiento de autenticación y autorización (OAuth2, JWT)
- Capacidad de diseñar esquemas de base de datos y queries eficientes

**Comportamiento esperado:**

- Toma decisiones de arquitectura considerando el impacto en ambas capas
- Colabora con equipos de diseño, producto e infraestructura
- Prioriza la experiencia del usuario sin sacrificar la estabilidad del sistema

-----

### 1.4 DevOps / Platform Engineer

**Descripción del rol:**
Construye y mantiene la plataforma interna que permite a los equipos de desarrollo desplegar, escalar y operar software con confianza.

**Skills principales:**

- Infraestructura como código (Terraform, Pulumi, Ansible)
- Orquestación de contenedores con Kubernetes y Docker
- Pipelines CI/CD (GitHub Actions, GitLab CI, ArgoCD)
- Observabilidad: métricas, logs y trazas (Prometheus, Grafana, OpenTelemetry)
- Gestión de secretos (Vault, Sealed Secrets)

**Comportamiento esperado:**

- Automatiza todo proceso repetitivo que pueda causar error humano
- Diseña sistemas con alta disponibilidad y recuperación ante fallos
- Documenta runbooks y playbooks operacionales
- Habilita a los desarrolladores sin crear dependencias innecesarias

**Anti-patrones a evitar:**

- Configurar infraestructura manualmente sin versionarla
- No tener alertas sobre umbrales críticos
- Exponer puertos o servicios innecesariamente a Internet

-----

### 1.5 Site Reliability Engineer (SRE)

**Descripción del rol:**
Garantiza la confiabilidad, disponibilidad y rendimiento de los sistemas en producción aplicando principios de ingeniería al problema de operaciones.

**Skills principales:**

- Definición y seguimiento de SLOs, SLAs y SLIs
- Análisis de post-mortems sin culpa (blameless)
- Gestión de incidentes y on-call
- Capacity planning y optimización de costos de infraestructura
- Automatización de tareas operacionales con Python o Go

**Comportamiento esperado:**

- Reduce el trabajo manual (toil) de forma sistemática
- Participa activamente en el diseño de sistemas para mejorar su observabilidad
- Documenta todas las decisiones de fiabilidad con ADRs (Architecture Decision Records)

-----

### 1.6 Software Engineer — Mobile (iOS / Android)

**Descripción del rol:**
Desarrolla aplicaciones nativas o multiplataforma para dispositivos móviles, asegurando rendimiento, usabilidad y seguridad en entornos con recursos limitados.

**Skills principales:**

- Desarrollo nativo: Swift/SwiftUI (iOS), Kotlin/Jetpack Compose (Android)
- Desarrollo multiplataforma: Flutter o React Native
- Gestión del ciclo de vida de la app y estado de la aplicación
- Integración con APIs REST/GraphQL y sincronización offline
- Publicación en App Store y Google Play (firma, certificados, políticas)

**Comportamiento esperado:**

- Diseña con un modelo offline-first cuando la conectividad no está garantizada
- Gestiona permisos del dispositivo con transparencia hacia el usuario
- Optimiza el consumo de batería, memoria y datos de red

**Anti-patrones a evitar:**

- Almacenar datos sensibles en texto plano en el dispositivo
- Bloquear el hilo principal de UI con operaciones costosas
- Ignorar las guías de diseño de la plataforma (HIG de Apple, Material Design de Google)

-----

### 1.7 QA Engineer / SDET (Software Development Engineer in Test)

**Descripción del rol:**
Garantiza la calidad del software a través de estrategias de pruebas manuales y automatizadas, integradas en el ciclo de desarrollo.

**Skills principales:**

- Diseño de planes de prueba y casos de test basados en requisitos
- Automatización de pruebas: Selenium, Playwright, Cypress, Appium
- Testing de APIs con Postman, REST Assured o similares
- Performance testing: JMeter, k6, Locust
- Integración de tests en pipelines CI/CD

**Comportamiento esperado:**

- Define criterios de aceptación claros junto al equipo de producto antes del desarrollo
- Prioriza la automatización de tests repetitivos y de regresión
- Reporta bugs con reproducibilidad clara, contexto y evidencia

**Anti-patrones a evitar:**

- Testear solo el “happy path” ignorando casos límite y errores
- Mantener suites de tests frágiles que fallan por razones no relacionadas con el código
- Tratar el QA como una fase final en lugar de una práctica continua

-----

## 2. Datos e Inteligencia Artificial

### 2.1 Data Engineer

**Descripción del rol:**
Construye y mantiene los pipelines que mueven, transforman y almacenan datos de forma confiable para su análisis y uso en modelos de IA.

**Skills principales:**

- Diseño de arquitecturas de datos (lakehouse, data warehouse, streaming)
- Herramientas de orquestación: Airflow, Dagster, Prefect
- SQL avanzado y motores como Spark o dbt
- Streaming con Kafka o Flink
- Gestión de calidad de datos y linaje

**Comportamiento esperado:**

- Diseña pipelines idempotentes y reproducibles
- Implementa validaciones de datos en cada etapa del pipeline
- Versiona esquemas de datos y gestiona migraciones de forma controlada

**Anti-patrones a evitar:**

- Procesar datos sin validar su calidad primero
- Crear pipelines frágiles sin manejo de errores o reintentos
- Ignorar el costo computacional de las transformaciones

-----

### 2.2 Data Scientist / ML Engineer

**Descripción del rol:**
Desarrolla y lleva a producción modelos de machine learning que generan valor de negocio a partir de datos.

**Skills principales:**

- Python científico: NumPy, Pandas, scikit-learn, PyTorch o TensorFlow
- Diseño de experimentos y evaluación estadística de modelos
- Feature engineering y selección de variables
- Versionado de modelos y datasets (MLflow, DVC)
- Comprensión de métricas de negocio y su traducción a métricas técnicas

**Comportamiento esperado:**

- Documenta hipótesis, experimentos y resultados de forma reproducible
- Evalúa modelos con datos reales y representativos (evita data leakage)
- Considera el sesgo, equidad e interpretabilidad del modelo antes del despliegue

-----

### 2.3 AI / LLM Engineer

**Descripción del rol:**
Rol emergente que diseña sistemas inteligentes basados en modelos de lenguaje grande, integrando LLMs en productos y flujos de trabajo reales.

**Skills principales:**

- Diseño de sistemas RAG (Retrieval-Augmented Generation)
- Prompt engineering y evaluación de respuestas
- Integración con APIs de LLMs (OpenAI, Anthropic, modelos open-source via Ollama)
- Gestión de bases de datos vectoriales (Qdrant, Weaviate, Pinecone)
- Evaluación y monitorización de calidad de respuestas (LLM evals)

**Comportamiento esperado:**

- Diseña pipelines de ingesta y chunking de documentos con metadatos estructurados
- Evalúa alucinaciones y calidad de recuperación de forma sistemática
- Documenta decisiones de arquitectura de prompts y embedding

**Anti-patrones a evitar:**

- Confiar ciegamente en respuestas del LLM sin validación
- Ignorar el costo por token en producción
- No versionar los prompts del sistema

-----

### 2.4 MLOps Engineer

**Descripción del rol:**
Aplica prácticas DevOps al ciclo de vida de modelos de machine learning, desde el entrenamiento hasta el monitoreo en producción.

**Skills principales:**

- Plataformas MLOps: MLflow, Kubeflow, Vertex AI, SageMaker
- Automatización de pipelines de entrenamiento y reentrenamiento
- Monitorización de drift de datos y degradación de modelos
- Gestión de infraestructura GPU (Kubernetes con GPU nodes)
- CI/CD para modelos de ML

**Comportamiento esperado:**

- Implementa gates de calidad antes de promover modelos a producción
- Diseña estrategias de rollback para modelos en producción
- Monitoriza métricas de negocio correlacionadas con el rendimiento del modelo

-----

### 2.5 AI Product Manager

**Descripción del rol:**
Define la visión y estrategia de productos basados en IA, bridgeando el gap entre las capacidades técnicas de los modelos y las necesidades reales del negocio y el usuario.

**Skills principales:**

- Comprensión profunda de capacidades y limitaciones de LLMs, modelos generativos y sistemas ML
- Definición de métricas de éxito específicas para productos de IA (precisión, recall, satisfacción del usuario, tasa de alucinación)
- Gestión de expectativas de stakeholders sobre lo que la IA puede y no puede hacer
- Diseño de flujos de evaluación humana (RLHF, human-in-the-loop)
- Conocimiento de marcos de IA responsable y riesgos regulatorios (EU AI Act)

**Comportamiento esperado:**

- Evalúa casos de uso de IA con criterio de viabilidad técnica y ética antes de comprometerse
- Define políticas de uso aceptable del producto de IA
- Monitoriza la calidad de las respuestas del sistema en producción de forma continua
- Comunica con transparencia las limitaciones del sistema a los usuarios finales

**Anti-patrones a evitar:**

- Prometer capacidades de IA que el sistema no puede garantizar de forma consistente
- Desplegar modelos sin considerar sesgos, alucinaciones o riesgos de mal uso
- Ignorar el feedback negativo de usuarios como señal de degradación del modelo

-----

### 2.6 AI Safety / Responsible AI Engineer

**Descripción del rol:**
Rol emergente y crítico que se encarga de que los sistemas de IA sean seguros, justos, transparentes y alineados con los valores de la organización y la sociedad.

**Skills principales:**

- Evaluación de sesgos en modelos y datasets (fairness metrics, disparate impact)
- Técnicas de interpretabilidad y explicabilidad (SHAP, LIME, attention visualization)
- Red teaming de modelos de lenguaje: jailbreaks, prompt injection, data poisoning
- Marcos regulatorios de IA: EU AI Act, NIST AI RMF, ISO/IEC 42001
- Diseño de sistemas con human-in-the-loop para decisiones de alto impacto

**Comportamiento esperado:**

- Realiza evaluaciones de riesgo antes de cualquier despliegue de modelo en producción
- Define y mantiene un model card y data sheet para cada modelo en producción
- Establece procesos de monitorización de drift de sesgo y equidad en el tiempo
- Colabora con equipos legales, de producto y de ingeniería para integrar la seguridad desde el diseño

**Anti-patrones a evitar:**

- Tratar la seguridad de la IA como un checkbox al final del proceso
- Confiar exclusivamente en benchmarks de laboratorio sin evaluación en datos reales de producción
- Ignorar el contexto cultural y geográfico en la evaluación de sesgos

-----

### 2.7 Analytics Engineer

**Descripción del rol:**
Transforma datos crudos en conjuntos de datos limpios, confiables y bien documentados que los equipos de negocio pueden consumir directamente para sus análisis.

**Skills principales:**

- dbt (data build tool) para transformaciones y modelado de datos
- SQL avanzado y optimización de queries en warehouses (BigQuery, Snowflake, Redshift)
- Diseño de modelos dimensionales y métricas de negocio (semantic layer)
- Documentación de datos y catálogos (DataHub, Atlan, dbt docs)
- Testing de datos: expectativas de calidad, anomaly detection

**Comportamiento esperado:**

- Define métricas de negocio de forma unívoca y documentada para evitar discrepancias
- Construye modelos de datos reutilizables y versionados
- Colabora con analistas de negocio para entender el contexto detrás de los datos

**Anti-patrones a evitar:**

- Crear métricas con diferentes definiciones en distintos dashboards
- Ignorar la linaje de datos al modificar transformaciones upstream
- Construir modelos de datos sin tests de calidad automatizados

-----

## 3. Infraestructura y Cloud

### 3.1 Cloud Architect

**Descripción del rol:**
Define la estrategia de infraestructura cloud de la organización, diseñando arquitecturas seguras, escalables y optimizadas en costo.

**Skills principales:**

- Certificaciones y dominio profundo de AWS, GCP o Azure
- Diseño de arquitecturas multi-región y multi-cloud
- Estrategias de FinOps y optimización de costos cloud
- Networking avanzado (VPC, peering, PrivateLink, CDN)
- Seguridad cloud: IAM, políticas de acceso mínimo, cifrado

**Comportamiento esperado:**

- Documenta arquitecturas con diagramas C4 o similares
- Realiza revisiones de Well-Architected Framework de forma periódica
- Evalúa el impacto de cada decisión en costo, rendimiento y seguridad

-----

### 3.2 Kubernetes / Infrastructure Engineer

**Descripción del rol:**
Gestiona y evoluciona plataformas de orquestación de contenedores para alojar cargas de trabajo críticas de forma confiable.

**Skills principales:**

- Administración avanzada de Kubernetes (scheduling, networking, storage)
- Gestión de operadores y CRDs
- Helm, Kustomize y GitOps (FluxCD, ArgoCD)
- Configuración de RBAC, Network Policies y Pod Security Standards
- Troubleshooting de nodos, pods y servicios

**Comportamiento esperado:**

- Aplica el principio de mínimo privilegio en todos los recursos del cluster
- Configura límites de recursos (requests/limits) en todos los workloads
- Mantiene el cluster actualizado y con parches de seguridad aplicados

-----

### 3.3 Security Engineer / DevSecOps

**Descripción del rol:**
Integra la seguridad en cada etapa del ciclo de desarrollo, desde el diseño hasta la operación, y responde a incidentes de seguridad.

**Skills principales:**

- SAST, DAST y análisis de dependencias (Snyk, Trivy, SonarQube)
- Gestión de vulnerabilidades y CVEs
- Threat modeling y revisión de arquitectura de seguridad
- Seguridad de contenedores e imágenes Docker
- Respuesta a incidentes y análisis forense básico

**Comportamiento esperado:**

- Integra escaneos de seguridad en los pipelines CI/CD de forma no bloqueante al inicio
- Prioriza vulnerabilidades por riesgo real, no solo por severidad teórica
- Forma y sensibiliza a los equipos de desarrollo en prácticas seguras

-----

### 3.4 FinOps Engineer

**Descripción del rol:**
Optimiza el gasto en infraestructura cloud garantizando que cada euro invertido genere el máximo valor, alineando las decisiones técnicas con los objetivos financieros del negocio.

**Skills principales:**

- Análisis de costos cloud con herramientas nativas (AWS Cost Explorer, GCP Billing, Azure Cost Management)
- Plataformas FinOps: CloudHealth, Apptio Cloudability, Infracost
- Estrategias de ahorro: Reserved Instances, Savings Plans, Spot/Preemptible instances
- Rightsizing de recursos: CPU, memoria, almacenamiento
- Showback y chargeback por equipos o proyectos

**Comportamiento esperado:**

- Establece presupuestos por equipo y proyecto con alertas proactivas
- Identifica recursos no utilizados o sobredimensionados de forma sistemática
- Traduce el gasto técnico a impacto de negocio comprensible para stakeholders no técnicos
- Crea cultura de ownership del costo en los equipos de ingeniería

**Anti-patrones a evitar:**

- Optimizar costos sin considerar el impacto en rendimiento o disponibilidad
- Gestionar el gasto cloud de forma reactiva en lugar de proactiva
- Ignorar el costo de egress de datos entre regiones o proveedores

-----

## 4. Arquitectura y Calidad

### 4.1 Solutions Architect / Enterprise Architect

**Descripción del rol:**
Define la visión técnica de alto nivel de los sistemas de la organización, asegurando que las decisiones de arquitectura sean coherentes, escalables y alineadas con los objetivos de negocio.

**Skills principales:**

- Diseño de arquitecturas distribuidas: microservicios, event-driven, serverless
- Documentación con ADRs (Architecture Decision Records) y diagramas C4
- Evaluación de tradeoffs técnicos: CAP theorem, consistency models, latency vs throughput
- Conocimiento amplio de patrones de integración (EIP, saga, CQRS, event sourcing)
- Comunicación efectiva con stakeholders técnicos y no técnicos

**Comportamiento esperado:**

- Documenta todas las decisiones de arquitectura relevantes con su contexto y alternativas evaluadas
- Realiza Architecture Reviews de forma periódica y colaborativa
- Equilibra la deuda técnica con la velocidad de entrega en sus recomendaciones
- Mentoriza a ingenieros en pensamiento arquitectónico

**Anti-patrones a evitar:**

- Diseñar arquitecturas en aislamiento sin involucrar a los equipos que las implementarán
- Priorizar la elegancia técnica sobre la practicidad y mantenibilidad
- Cambiar decisiones arquitectónicas fundamentales sin proceso de revisión formal

-----

### 4.2 Database Administrator (DBA) / Data Platform Engineer

**Descripción del rol:**
Gestiona, optimiza y protege las bases de datos de la organización, garantizando su disponibilidad, rendimiento e integridad.

**Skills principales:**

- Administración de bases de datos relacionales (PostgreSQL, MySQL, Oracle) y NoSQL (MongoDB, Cassandra, Redis)
- Optimización de queries y diseño de índices
- Estrategias de backup, recuperación y alta disponibilidad (replicación, failover)
- Gestión de migraciones de esquema en producción con zero downtime
- Monitorización de rendimiento y análisis de query plans

**Comportamiento esperado:**

- Revisa y aprueba migraciones de base de datos antes de su ejecución en producción
- Documenta los esquemas de datos y sus relaciones
- Implementa políticas de backup y las verifica con restauraciones periódicas
- Evalúa el impacto de cada cambio de esquema en el rendimiento del sistema

**Anti-patrones a evitar:**

- Ejecutar migraciones destructivas sin backup verificado previo
- Ignorar el crecimiento del tamaño de tablas hasta que cause degradación
- Conceder permisos de base de datos más amplios de lo necesario

-----

## 5. Producto y Diseño

### 5.1 Product Manager (Técnico)

**Descripción del rol:**
Define qué construir y por qué, alineando las necesidades del negocio con las capacidades técnicas del equipo.

**Skills principales:**

- Gestión de backlogs y roadmaps con herramientas como Jira, Linear o Notion
- Análisis de métricas de producto (DAU, retention, conversion)
- Escritura de PRDs (Product Requirements Documents) claros y accionables
- Facilitación de discovery y definición de OKRs
- Comprensión técnica suficiente para evaluar factibilidad y tradeoffs

**Comportamiento esperado:**

- Prioriza con base en impacto en el usuario y valor de negocio
- Comunica el “por qué” detrás de cada decisión de producto
- Trabaja en estrecha colaboración con ingeniería y diseño desde el inicio

-----

### 5.2 UX/UI Designer

**Descripción del rol:**
Diseña experiencias de usuario intuitivas, accesibles y estéticamente coherentes que resuelven problemas reales.

**Skills principales:**

- Diseño de interfaces en Figma, Sketch o equivalentes
- Investigación de usuarios: entrevistas, tests de usabilidad, mapas de empatía
- Sistemas de diseño y bibliotecas de componentes
- Prototipado de baja y alta fidelidad
- Conocimientos básicos de HTML/CSS para colaborar con frontend

**Comportamiento esperado:**

- Toma decisiones de diseño basadas en datos y feedback de usuarios reales
- Mantiene consistencia visual a través del sistema de diseño
- Documenta patrones de interacción y flujos de usuario

-----

### 5.3 Technical Program Manager (TPM)

**Descripción del rol:**
Coordina programas técnicos complejos que involucran múltiples equipos, asegurando la entrega con calidad y en tiempo.

**Skills principales:**

- Gestión de dependencias entre equipos y proyectos
- Identificación y mitigación de riesgos técnicos
- Comunicación ejecutiva de estado de proyectos
- Conocimiento de metodologías ágiles y su adaptación a contextos técnicos

**Comportamiento esperado:**

- Crea visibilidad sin generar burocracia innecesaria
- Elimina bloqueantes de los equipos técnicos de forma proactiva
- Mantiene alineación entre los objetivos del programa y la estrategia de negocio

-----

## 6. Ciberseguridad

### 6.1 Security Analyst

**Descripción del rol:**
Monitoriza, detecta e investiga amenazas de seguridad en los sistemas de la organización.

**Skills principales:**

- Análisis de logs y eventos de seguridad (SIEM: Splunk, Elastic SIEM)
- Conocimiento de tácticas y técnicas adversarias (MITRE ATT&CK)
- Investigación de alertas y clasificación de incidentes
- Gestión de vulnerabilidades y seguimiento de remediaciones
- Threat intelligence básico

**Comportamiento esperado:**

- Documenta cada investigación con evidencia y línea temporal
- Escala incidentes según severidad con criterio y rapidez
- Contribuye a la mejora continua de las reglas de detección

-----

### 6.2 Penetration Tester (Pentester)

**Descripción del rol:**
Simula ataques controlados sobre sistemas de la organización para identificar vulnerabilidades antes que los actores maliciosos.

**Skills principales:**

- Metodologías de pentesting: PTES, OWASP Testing Guide
- Herramientas: Burp Suite, Metasploit, Nmap, Nessus
- Explotación de vulnerabilidades web (OWASP Top 10), redes y sistemas
- Escritura de informes de pentest claros y accionables
- Conocimiento de técnicas de post-explotación y lateral movement

**Comportamiento esperado:**

- Opera siempre dentro del alcance definido y con autorización escrita
- Reporta vulnerabilidades críticas de forma inmediata durante un engagement
- Proporciona recomendaciones de remediación concretas y priorizadas

-----

### 6.3 Cloud Security Engineer

**Descripción del rol:**
Especialista en seguridad de entornos cloud, asegurando que la infraestructura y las cargas de trabajo cumplan con los estándares de seguridad.

**Skills principales:**

- CSPM (Cloud Security Posture Management): Wiz, Prisma Cloud
- Gestión de identidades y accesos en la nube (IAM, RBAC, ABAC)
- Seguridad de Kubernetes y contenedores en producción
- Cifrado de datos en tránsito y en reposo
- Cumplimiento de marcos como CIS Benchmarks y NIST

**Comportamiento esperado:**

- Implementa controles preventivos, detectivos y correctivos en la nube
- Revisa configuraciones de infraestructura como código antes del despliegue
- Mantiene inventario actualizado de activos cloud y su postura de seguridad

-----

### 6.4 CISO / Head of Information Security

**Descripción del rol:**
Lidera la estrategia de seguridad de la información de la organización, alineando los controles técnicos con los objetivos de negocio y los requisitos regulatorios.

**Skills principales:**

- Marcos de seguridad: ISO 27001, NIST CSF, SOC 2, CIS Controls
- Gestión de riesgos de seguridad y comunicación ejecutiva
- Diseño de programas de seguridad: awareness, vulnerability management, incident response
- Conocimiento regulatorio: GDPR, NIS2, DORA, sector financiero/sanitario según aplique
- Gestión de proveedores y evaluación de riesgos de terceros (TPRM)

**Comportamiento esperado:**

- Reporta el estado de seguridad al board con métricas comprensibles y orientadas a riesgo de negocio
- Impulsa una cultura de seguridad en toda la organización, no solo en el equipo técnico
- Mantiene un programa de gestión de vulnerabilidades activo y medible
- Asegura que los planes de respuesta a incidentes se practiquen regularmente

**Anti-patrones a evitar:**

- Gestionar la seguridad como un departamento de bloqueo en lugar de un habilitador
- Priorizar el cumplimiento normativo sobre la seguridad real (compliance ≠ security)
- No comunicar los riesgos de seguridad en términos de impacto de negocio

-----

## 7. Gestión y Agilidad

### 7.1 Scrum Master / Agile Coach

**Descripción del rol:**
Facilita la adopción de metodologías ágiles, elimina impedimentos del equipo y fomenta una cultura de mejora continua y autoorganización.

**Skills principales:**

- Marcos ágiles: Scrum, Kanban, SAFe, LeSS
- Facilitación de ceremonias: Sprint Planning, Daily, Review, Retrospectiva
- Identificación y resolución de impedimentos organizacionales
- Métricas de agilidad: velocity, cycle time, lead time, throughput
- Coaching de equipos y gestión de dinámicas de grupo

**Comportamiento esperado:**

- Protege al equipo de interrupciones externas durante el sprint
- Facilita retrospectivas que generan acciones concretas y medibles
- Trabaja para hacer su propio rol innecesario a largo plazo (equipo autoorganizado)
- Colabora con otros Scrum Masters y el management para eliminar impedimentos sistémicos

**Anti-patrones a evitar:**

- Convertirse en el project manager del equipo tomando decisiones que le corresponden al equipo
- Ignorar los impedimentos que se repiten sprint tras sprint sin escalarlos
- Aplicar Scrum de forma dogmática sin adaptarlo al contexto del equipo

-----

### 7.2 Engineering Manager

**Descripción del rol:**
Lidera equipos de ingeniería desde una perspectiva de personas y procesos, asegurando que el equipo entregue con calidad, crezca profesionalmente y esté motivado.

**Skills principales:**

- Gestión de personas: 1:1s, feedback, planes de carrera, gestión del rendimiento
- Planificación técnica y gestión de roadmaps con el equipo de producto
- Hiring técnico: definición de perfiles, entrevistas, onboarding
- Gestión de conflictos y dinámicas de equipo
- Suficiente conocimiento técnico para entender tradeoffs y apoyar decisiones de arquitectura

**Comportamiento esperado:**

- Tiene 1:1s regulares y significativos con cada miembro del equipo
- Crea un entorno psicológicamente seguro donde el equipo puede hablar de errores y riesgos
- Actúa como multiplier del equipo, no como contributor individual principal
- Comunica con claridad las expectativas de rendimiento y da feedback frecuente

**Anti-patrones a evitar:**

- Hacer micromanagement técnico de las decisiones del equipo
- Ignorar señales de burnout o desmotivación hasta que escalen
- Priorizar la entrega de features a corto plazo a expensas del bienestar del equipo

-----

### 7.3 CTO / VP of Engineering

**Descripción del rol:**
Define la visión técnica de la organización, alinea la estrategia de ingeniería con los objetivos del negocio y construye la cultura y capacidades del área tecnológica.

**Skills principales:**

- Estrategia tecnológica a largo plazo y gestión de deuda técnica organizacional
- Gestión de presupuestos de ingeniería y planificación de headcount
- Comunicación ejecutiva y representación técnica ante el board
- Build vs buy vs partner: evaluación de decisiones de plataforma estratégica
- Atracción, retención y desarrollo de talento técnico

**Comportamiento esperado:**

- Traduce los objetivos de negocio en estrategia técnica accionable para los equipos
- Toma decisiones de plataforma o arquitectura con visión de 3-5 años
- Fomenta una cultura de ingeniería de excelencia, aprendizaje y responsabilidad
- Gestiona las relaciones con proveedores tecnológicos estratégicos

**Anti-patrones a evitar:**

- Mantenerse demasiado en el código perdiendo perspectiva estratégica (o viceversa, perder el contacto técnico completamente)
- Tomar decisiones tecnológicas impulsadas por hype sin evaluar la madurez operacional
- Crear silos entre los equipos de ingeniería, producto y negocio

-----

## 8. Reglas Transversales

> Estas reglas aplican a **todos los roles** descritos en este documento, independientemente de la especialización. Representan los estándares mínimos de calidad, seguridad, cumplimiento y operación que cualquier profesional tecnológico debe respetar.

-----

### 8.1 Reglas de Código

**Calidad y mantenibilidad:**

- Todo código debe seguir los principios SOLID, DRY y KISS según el contexto
- Las funciones deben hacer una sola cosa y hacerla bien (Single Responsibility)
- El código debe ser autoexplicativo; los comentarios deben explicar el “por qué”, no el “qué”
- Toda funcionalidad debe contar con tests automatizados antes de pasar a producción
- La cobertura de tests no debe bajar del umbral definido por el equipo (recomendado: 80%)

**Versionado y colaboración:**

- Todo cambio de código debe realizarse en una rama separada y revisarse mediante Pull Request
- Los mensajes de commit deben seguir el estándar Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
- No se permite hacer push directo a ramas protegidas (`main`, `master`, `release/*`)
- Las revisiones de código deben completarse en un máximo de 2 días hábiles

**Deuda técnica:**

- Toda deuda técnica debe registrarse como ticket con severidad y propietario asignado
- No se puede acumular deuda técnica crítica sin plan de resolución en el sprint siguiente
- Las refactorizaciones mayores deben planificarse, no realizarse sin contexto o comunicación

-----

### 8.2 Reglas de Seguridad

**Gestión de secretos y credenciales:**

- Ninguna credencial, token, clave API o contraseña puede existir en el código fuente o en repositorios de control de versiones
- Todos los secretos deben gestionarse mediante un sistema centralizado (HashiCorp Vault, AWS Secrets Manager, Kubernetes Sealed Secrets)
- Las credenciales deben rotarse de forma periódica y automática cuando sea posible

**Principio de mínimo privilegio:**

- Cada servicio, usuario o proceso debe tener únicamente los permisos necesarios para su función
- Los accesos administrativos deben estar controlados por MFA y auditados
- Los accesos privilegiados deben revisarse y recertificarse trimestralmente

**Seguridad en el ciclo de desarrollo (DevSecOps):**

- El análisis estático de código (SAST) debe ejecutarse en cada PR
- El escaneo de dependencias (SCA) debe ejecutarse en cada build
- Las imágenes de contenedores deben escanearse antes de su publicación en el registro
- Las vulnerabilidades con CVSS ≥ 9.0 deben remediarse en un máximo de 72 horas
- Las vulnerabilidades con CVSS ≥ 7.0 deben remediarse en un máximo de 7 días

**Gestión de incidentes de seguridad:**

- Todo incidente de seguridad debe notificarse al equipo de seguridad en un máximo de 1 hora tras su detección
- Los incidentes deben clasificarse según severidad: Crítico, Alto, Medio, Bajo
- Toda brecha de datos debe notificarse según los plazos legales aplicables (ej. GDPR: 72 horas)

-----

### 8.3 Reglas de Compliance

**Protección de datos y privacidad:**

- Todos los datos personales deben tratarse de acuerdo con la normativa aplicable (GDPR, CCPA, LOPD u otras según jurisdicción)
- Los datos personales deben clasificarse según su sensibilidad y protegerse en consecuencia
- El acceso a datos de producción con información personal requiere justificación y registro de auditoría
- El principio de privacidad por diseño (Privacy by Design) debe aplicarse desde la fase de arquitectura

**Auditoría y trazabilidad:**

- Toda acción sensible sobre sistemas y datos debe quedar registrada en logs de auditoría inmutables
- Los logs de auditoría deben conservarse según los requisitos legales y de negocio (mínimo 12 meses recomendado)
- Los logs no deben contener información sensible en texto plano (PII, contraseñas, tokens)

**Gestión de riesgos:**

- Cada proyecto debe realizar una evaluación de impacto (DPIA/PIA) si implica el tratamiento de datos personales a escala
- Los proveedores externos con acceso a datos deben firmar un DPA (Data Processing Agreement)
- Los cambios que afecten a sistemas regulados deben pasar por un proceso de aprobación formal

**Retención y eliminación de datos:**

- Los datos deben eliminarse cuando ya no sean necesarios para el propósito original
- Los procesos de borrado deben ser verificables y documentados
- Deben existir políticas de retención de datos formalmente aprobadas y revisadas anualmente

-----

### 8.4 Reglas Basadas en ITIL

**Gestión de cambios (Change Management):**

- Todo cambio en sistemas productivos debe seguir el proceso de Change Management definido
- Los cambios se clasifican en: Normal (requiere aprobación del Change Advisory Board), Estándar (pre-aprobado y documentado) y Emergencia (aprobación expedita con revisión posterior)
- Ningún cambio de emergencia puede implementarse sin al menos la aprobación verbal de un responsable técnico y posterior registro
- Todo cambio debe incluir un plan de rollback verificado antes de su aprobación

**Gestión de incidentes (Incident Management):**

- Los incidentes deben clasificarse por impacto y urgencia para determinar su prioridad
- Los incidentes P1 (críticos) deben tener un puente de guerra (war room) activo en menos de 15 minutos
- Toda resolución de incidente debe ir acompañada de un registro detallado de acciones tomadas
- Los incidentes recurrentes deben escalarse automáticamente a gestión de problemas

**Gestión de problemas (Problem Management):**

- Todo incidente con causa raíz no identificada debe abrirse como problema
- Los post-mortems deben completarse en un máximo de 5 días hábiles tras la resolución del incidente
- Los post-mortems son blameless: el foco es la causa sistémica, no la responsabilidad individual
- Las acciones correctivas derivadas de post-mortems deben tener propietario, prioridad y fecha de entrega

**Gestión de la configuración (Configuration Management):**

- Todo activo de infraestructura relevante debe estar registrado en el CMDB (Configuration Management Database)
- Los cambios de configuración deben reflejarse en el CMDB dentro de las 24 horas siguientes
- La infraestructura debe gestionarse como código (IaC) para garantizar reproducibilidad y auditoría

**Gestión de niveles de servicio (Service Level Management):**

- Cada servicio crítico debe tener SLOs (Service Level Objectives) definidos, publicados y monitorizados
- Los SLOs deben revisarse y ajustarse trimestralmente con base en datos reales
- Las alertas deben configurarse sobre los SLIs (Service Level Indicators) que sustentan los SLOs
- El presupuesto de errores (error budget) debe ser visible para los equipos responsables del servicio

**Gestión de la continuidad del servicio:**

- Los sistemas críticos deben contar con planes de recuperación ante desastres (DRP) probados al menos una vez al año
- Los RTO (Recovery Time Objective) y RPO (Recovery Point Objective) deben estar definidos y ser técnicamente alcanzables
- Las simulaciones de fallo (chaos engineering, game days) deben realizarse de forma planificada y controlada

-----

### 8.5 Reglas Específicas para Sistemas de IA

> Esta sección aplica a cualquier rol que diseñe, despliegue, opere o consuma sistemas basados en modelos de IA o LLMs.

**Gobernanza de modelos:**

- Todo modelo desplegado en producción debe contar con un Model Card documentado (propósito, datos de entrenamiento, limitaciones conocidas, métricas de evaluación)
- Cada modelo debe tener un propietario técnico responsable de su mantenimiento y monitorización
- Los modelos deben versionarse y el historial de versiones debe conservarse para auditoría

**Evaluación y calidad:**

- Ningún modelo puede desplegarse en producción sin un conjunto de evaluaciones (evals) aprobado que cubra casos normales, edge cases y casos de abuso
- La tasa de alucinación debe medirse y estar por debajo del umbral aceptado por el negocio para cada caso de uso
- Los sistemas RAG deben evaluar tanto la calidad de la recuperación (retrieval) como la calidad de la generación (generation) de forma independiente

**Seguridad específica de IA:**

- Los sistemas que aceptan input de usuarios deben tener protecciones contra prompt injection y jailbreak
- Los LLMs no deben tener acceso directo a sistemas críticos sin una capa de validación humana o de reglas deterministas intermedia
- Los datos usados para fine-tuning deben ser auditados para evitar data poisoning

**Monitorización en producción:**

- Los sistemas de IA deben monitorizarse por drift de distribución de inputs y outputs, no solo por disponibilidad técnica
- Deben existir alertas sobre degradación de calidad de respuestas detectada mediante métricas proxy o feedback de usuarios
- Los modelos deben tener un proceso de reentrenamiento o actualización documentado y probado

**Transparencia y uso ético:**

- Los usuarios deben saber cuándo están interactuando con un sistema de IA
- Los sistemas de IA que toman decisiones de alto impacto (crédito, salud, empleo) deben ser explicables y auditables
- Debe existir siempre un mecanismo de escalado a un humano para decisiones críticas o casos no resueltos

-----

*Documento generado como referencia de roles y estándares para equipos de tecnología. Versión 2.0 — 29 roles, 8 secciones.*