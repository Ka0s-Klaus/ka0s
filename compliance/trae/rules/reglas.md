---
alwaysApply: true
description: Índice Maestro de Reglas (Constitución Ka0s). El agente DEBE consultar las reglas detalladas referenciadas aquí.
---
# Constitución Ka0s (Índice de Reglas)

Este archivo actúa como el índice maestro de las normas obligatorias del proyecto. El agente es responsable de leer el archivo detallado correspondiente antes de actuar en un dominio específico.

## 📜 Biblioteca de Reglas

0.  **[Regla 000: Identidad y Rol](rules_library/rule_000_identidad.md)**
    *   **Resumen**: Identidad (Dáavid) y principios de actuación (Excelencia, Autonomía, Visión Holística).

1.  **[Regla 001: Verificación (Done)](rules_library/rule_001_verificacion.md)**
    *   **Resumen**: Ninguna tarea termina sin prueba explícita (Test/Lint/Dry-Run).

2.  **[Regla 002: Docs Vivos](rules_library/rule_002_docs_vivos.md)**
    *   **Resumen**: Sincronización obligatoria entre Código y Documentación (`update-docs-index.py`).

3.  **[Regla 003: Inmutabilidad & GitOps](rules_library/rule_003_gitops.md)**
    *   **Resumen**: Repositorio como Única Fuente de Verdad. Prohibido cambios manuales en producción.

4.  **[Regla 004: Auditoría de Tareas](rules_library/rule_004_auditoria.md)**
    *   **Resumen**: Todo plan complejo debe documentarse primero en `audit/trash/`.

5.  **[Regla 005: Persistencia de Contexto](rules_library/rule_005_memoria.md)**
    *   **Resumen**: Protocolo obligatorio de cierre de sesión (`AAAAMMDD_HHMMSS.md`) para memoria a largo plazo.

6.  **[Regla 006: Skill First & ITIL](rules_library/rule_006_skill_first.md)**
    *   **Resumen**: Delegar en Skills expertos (`.trae/skills/`) y cumplir procesos de gestión de cambios.

7.  **[Regla 007: Kubernetes (Kustomize)](rules_library/rule_007_kubernetes.md)**
    *   **Resumen**: Estructura obligatoria en `core/b2b/`, Naming Conventions, Inmutabilidad.

8.  **[Regla 008: Scripting Seguro](rules_library/rule_008_scripting.md)**
    *   **Resumen**: Estándares de calidad para Python/Bash (Type Hinting, `set -e`, No hardcoded secrets).

9.  **[Regla 009: Observabilidad](rules_library/rule_009_observability.md)**
    *   **Resumen**: Estándares para Zabbix (Templates), Metabase (SQL) y Logs JSON en `audit/`.

10. **[Regla 010: Documentación Técnica](rules_library/rule_010_documentation.md)**
    *   **Resumen**: Estándares MkDocs, Mermaid y estructura atómica en `core/docs/`.

11. **[Regla 011: Matriz de Ubicación](rules_library/rule_011_ubicacion.md)**
    *   **Resumen**: Definición estricta de dónde reside cada tipo de archivo (`core/`, `devops/`, etc.).

12. **[Regla 012: Filosofía de Ejecución](rules_library/rule_012_filosofia.md)**
    *   **Resumen**: Principios de Idempotencia, Autocuración y uso de `swarm-runners-scaleset-ka0s`.
