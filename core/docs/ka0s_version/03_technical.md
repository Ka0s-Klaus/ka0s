# Ka0s Version Manager - Integración Técnica

## Fuente de Verdad
Este módulo establece la "versión oficial" del proyecto, almacenada en `version.txt` y reflejada en Git Tags. Es consumida por:
*   **Docker builds**: Para etiquetar imágenes de contenedor.
*   **Deployments**: Para determinar la versión desplegada en el clúster.
*   **Observabilidad**: Para correlacionar logs y métricas con versiones específicas.

## Flujo de Trabajo (`version.yml`)

1.  **Checkout**: Obtiene el código completo.
2.  **Cálculo**:
    - Lee `version.txt`.
    - Analiza `github.event.pull_request.head.ref` (rama origen).
    - Aplica la lógica SemVer (Major/Minor/Patch).
3.  **Persistencia**:
    - Escribe `version.txt`.
    - Añade entrada a `CHANGELOG.md` con fecha, autor y título del PR.
    - Actualiza `INDEX_VERSION.md` (índice histórico).
4.  **Git Ops**:
    - Configura usuario bot (`KAOS_BOT`).
    - Commit de los archivos modificados.
    - Crea Tag.
    - Push atómico a `main` y al Tag.
5.  **Release**: Genera una Release en GitHub con las notas del PR.
6.  **Notificación**: Comenta en el PR original con el resultado (éxito o fallo).

## Permisos del Workflow
El workflow requiere permisos elevados (Principle of Least Privilege aplicado):
*   `contents: write`: Crear commits, tags y releases.
*   `issues: write`: Comentar en PRs.
*   `actions: write`: Gestión interna de acciones.

## Variables de Entorno y Secretos
*   `GH_TOKEN`: `secrets.GITHUB_TOKEN` (Automático).
*   `KAOS_BOT_NAME`: Nombre del usuario bot para commits (Secreto).
*   `KAOS_BOT_EMAIL`: Email del usuario bot para commits (Secreto).
