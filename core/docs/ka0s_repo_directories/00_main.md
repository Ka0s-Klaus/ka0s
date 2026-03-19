# Ka0s: guía de directorios del repo

Este módulo explica el propósito y patrones de los directorios principales del repositorio Ka0s (excluyendo `audit/`, que se usa como carpeta de evidencia).

## Directorios
- [`.github/`](01_github.md): workflows, actions reutilizables, templates e integración.
- [`core/`](02_core.md): núcleo funcional (IA, automatización, configuración, despliegues).
- [`compliance/`](03_compliance.md): reglas, formatos y guardrails.
- [`bin/`](04_bin.md): utilidades locales y bootstrap.

## Regla operativa
- Código/automatización: `.github/`, `core/`, `devops/`.
- Normas/guardrails: `compliance/`.
- Evidencia: `audit/`.

