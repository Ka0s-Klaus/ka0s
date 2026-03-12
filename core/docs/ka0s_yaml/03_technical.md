# Ka0s Lint YAML - Integración en el Ecosistema Ka0s

## Rol Crítico en Infraestructura
En Ka0s, la infraestructura se define como código (IaC) mayoritariamente en YAML (Kubernetes, GitHub Actions). Por tanto, **Ka0s Lint YAML** es el componente de seguridad y calidad más crítico de la suite de linters.

### Prevención de Errores en Pipelines
Un error de sintaxis en un archivo `.github/workflows/*.yml` puede romper todo el pipeline de CI/CD. Esta acción previene esto al validar los cambios antes de que se apliquen.
*   **Workflows**: Valida la sintaxis de las definiciones de acciones.
*   **Configuración**: Valida archivos de configuración de herramientas (ej. linter configs).

## Integración con Yamllint
La acción se integra profundamente con `yamllint` usando una configuración centralizada (`core/config/kaos-yamllint-config.yaml`). Esto permite definir reglas corporativas como:
*   Longitud máxima de línea.
*   Prohibición de valores `truthy` ambiguos (ej. `on`, `off`, `yes`, `no` deben ser strings explícitos).
*   Consistencia en comentarios.

## Ciclo de Vida
1.  **Commit**: Usuario sube un cambio a un workflow.
2.  **Ka0s YAML Lint**: Workflow automático que invoca esta acción.
3.  **Gatekeeper**:
    *   Si el YAML es inválido, el PR se bloquea (Status Check fallido).
    *   Si es válido pero con mal estilo, se puede corregir automáticamente si `fix: true` está habilitado.
    *   Esto asegura que la rama `main` siempre tenga definiciones YAML válidas y operativas.
