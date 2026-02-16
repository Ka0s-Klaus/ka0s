# Flujo de Contribución (Contribution Workflow)

En Ka0s, seguimos un proceso estricto de **GitOps** y **Calidad**. Nada entra a `main` sin pasar por este flujo.

## 1. Ciclo de Vida de una Tarea

### Paso 1: El Issue (Origen)
Todo trabajo comienza con un Issue.
*   Si es un bug -> `Bug Report`.
*   Si es una mejora -> `Feature Request`.
*   Si te asignas la tarea, muévela a "In Progress" (si usas Project Boards).

### Paso 2: La Rama (Branching Strategy)
Nunca trabajes en `main`. Crea una rama descriptiva desde `main`:

*   **Formato**: `<tipo>/<id-issue>-<descripcion-corta>`
*   **Tipos permitidos**:
    *   `feat/`: Nuevas funcionalidades.
    *   `fix/`: Corrección de errores.
    *   `docs/`: Solo documentación.
    *   `chore/`: Mantenimiento, dependencias, refactor sin cambio funcional.
    *   `refactor/`: Cambios de código que no alteran comportamiento.

*   **Ejemplo**:
    ```bash
    git checkout -b feat/42-add-onboarding-docs
    ```

### Paso 3: El Desarrollo y Commits
Realiza cambios atómicos.
*   **Conventional Commits**: Tus mensajes de commit deben seguir el estándar.
    *   `feat: add onboarding documentation module`
    *   `fix(ci): resolve python script permission error`
*   **Frecuencia**: Haz commit a menudo localmente, pero intenta hacer "Squash" o limpiar tu historia antes de abrir el PR si es muy caótica.

### Paso 4: Verificación Local
Antes de subir:
1.  Corre los tests/linters relevantes.
2.  Si tocaste docs, corre `update-docs-index.py`.
3.  Si tocaste código, verifica que compila/ejecuta.

### Paso 5: Pull Request (PR)
1.  Haz push de tu rama.
2.  Abre el PR en GitHub contra `main`.
3.  Completa la plantilla del PR. **No la dejes vacía**. Explica el "Qué", el "Por qué" y el "Cómo se probó".
4.  Espera a que pasen los Checks de CI (GitHub Actions).

### Paso 6: Review y Merge
*   Un maintainer revisará tu código.
*   Aplica las correcciones solicitadas.
*   Una vez aprobado, se hará Merge (generalmente "Squash and Merge") a `main`.

## 2. Reglas de Oro (Normas Ka0s)

Recuerda siempre consultar y respetar las **[Normas del Proyecto](../../../.trae/rules/normas.md)**:

1.  **Verificación (Done)**: Si no está probado, no está terminado.
2.  **Docs Vivos**: Código y Docs evolucionan juntos en el mismo PR.
3.  **Inmutabilidad**: `main` es sagrada y desplegable.
4.  **Auditoría**: Los planes complejos se documentan antes de ejecutarse (en `audit/trash/`).
