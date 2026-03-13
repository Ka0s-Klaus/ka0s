# Regla 011: Matriz de Ubicación (Arquitectura)

Define estrictamente dónde debe residir cada tipo de archivo en el repositorio Ka0s.

## Matriz de Decisión

| Intención | Ruta Destino | Directivas Técnicas |
| :--- | :--- | :--- |
| **Automatizar** | `.github/workflows/` | CI/CD. Si la lógica >50 líneas o es reusable, mover a `.github/actions/`. Prefiere `workflow_dispatch`. |
| **Evidencias** | `audit/` | Data Lake inmutable. Logs estructurados (JSON/CSV) para ingestión. **PROHIBIDO** generar logs en raíz. |
| **Estándares** | `compliance/` | Normativa. Scripts de validación y linters centralizados aquí para reuso en pipelines. |
| **Infraestructura** | `core/b2b/` | IaC (Estado Deseado). Manifiestos K8s de servicios. **No** usar `kubectl edit`, solo YAML. |
| **Operaciones** | `devops/` | Lógica Imperativa. Scripts de mantenimiento. Deben ser **idempotentes** y aptos para ejecución remota (SSH/CI). |
| **Documentación** | `core/docs/` | Documentación técnica viva. Unica fuente de verdad para conocimiento estático. |
| **Configuración** | `core/config/` | Archivos de configuración global del sistema o herramientas transversales. |
