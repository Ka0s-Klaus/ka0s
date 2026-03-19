# Ka0s Agent: Visión y Roadmap

## North Star (12–24 meses)
Convertir Ka0s Agent en el **operador técnico autónomo** del ecosistema Ka0s: entiende el repo, observa el runtime, recomienda cambios con evidencias, y ejecuta automatizaciones seguras con trazabilidad (audit + ITIL).

## Principios
- Evidencia primero: cada afirmación crítica debe enlazar a fuente (repo, audit, logs, KB).
- Degradación controlada: si falla LLM/DB/cluster, responde con repo/rules y plan verificable.
- Seguridad por defecto: secretos fuera del contexto, mínimo privilegio, y auditoría obligatoria.
- Determinismo donde importa: preguntas operativas repetidas deben tener respuestas consistentes.

## Roadmap por fases

### Fase 1: Agente robusto (0–4 semanas)
- Respuestas deterministas para preguntas operativas frecuentes (workflows, docs, audit, k8s).
- Preflight automático de dependencias runtime (modelos Ollama, conectividad DB).
- Evaluación offline (golden cases) en CI para evitar regresiones.

### Fase 2: Memoria “de verdad” (1–3 meses)
- RAG con citación: salida con referencias a rutas/IDs de audit y chunks de KB.
- Mejoras de ingesta: dedupe, chunking por semántica, y enriquecimiento de metadatos.
- Health del knowledge-pipeline: métricas de cobertura, frescura, y drift de embeddings.

### Fase 3: Agente operativo (3–9 meses)
- “Runbooks ejecutables”: el agente propone y dispara workflows parametrizados con control de cambios.
- Integración con ITIL/CMDB: genera RFC y valida precondiciones antes de ejecutar.
- Observabilidad de calidad: tasa de acierto, fallos por causa (modelo, contexto, permisos), y SLO del agente.

### Fase 4: Autonomía supervisada (9–24 meses)
- Planificación multi-objetivo: coste/latencia/seguridad como restricciones.
- Autoremediación con guardrails: cambios pequeños, reversibles, y con rollback.
- “Digital Twin” de la plataforma: simula cambios (policy-as-code + despliegue en staging) antes de aplicar.

## Apuestas de arquitectura

### 1) Router de modelos
Modelo rápido para clasificación/enrutado y modelo fuerte para síntesis, con fallback automático. Objetivo: latencia baja sin perder calidad.

### 2) Capabilities Registry
Inventario versionado de lo que el agente puede hacer (consultar, diagnosticar, ejecutar), con permisos y evidencias requeridas.

### 3) Evaluación continua
Casos tipo “preguntas reales del equipo” + chequeos de formato (citas, pasos verificables, no secretos). Objetivo: mejorar sin romper.

## Métricas objetivo
- Cobertura KB: % de módulos del repo con embeddings frescos.
- Frescura: edad mediana del contexto recuperado.
- Calidad: PASS-rate de eval offline + evaluaciones humanas por muestreo.
- Fiabilidad: % de respuestas en modo degradado que siguen siendo accionables.

## Riesgos y mitigaciones
- Respuestas inventadas: forzar citación y bloquear afirmaciones sin fuente.
- Overreach operacional: gates (ITIL), dry-run, aprobación explícita y rollback.
- Coste/latencia: caching, router y batch de embeddings.

