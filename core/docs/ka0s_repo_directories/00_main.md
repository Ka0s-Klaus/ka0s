# Ka0s: guía de directorios del repo

Este módulo explica el propósito y patrones de los directorios principales del repositorio Ka0s (excluyendo `audit/`, que se usa como carpeta de evidencia).

## Directorios
- [`.github/`](01_github.md): workflows, actions reutilizables, templates e integración.
- [`core/`](02_core.md): núcleo funcional (IA, automatización, configuración, despliegues).
- [`compliance/`](03_compliance.md): reglas, formatos y guardrails.
- [`bin/`](04_bin.md): utilidades locales y bootstrap.

## Subdirectorios de `core/`
- [`core/ai/`](06_core_ai.md): agente (inferencia), evaluación y memoria/ingest.
- [`core/b2b/`](07_core_b2b.md): despliegues Kubernetes de servicios core.
- [`core/config/`](08_core_config.md): ficheros de control y configuración de validadores.
- [`core/automation/`](09_core_automation.md): automatizaciones por dominio.

## Regla operativa
- Código/automatización: `.github/`, `core/`, `devops/`.
- Normas/guardrails: `compliance/`.
- Evidencia: `audit/`.
