# Ka0s Version Manager - Concepto

## Descripción
Automatización del Versionado Semántico (SemVer). Elimina la gestión manual de tags y releases, asegurando que cada cambio en producción tenga una versión única y trazable.

## Lógica de Versión (Nuevo Estándar)
El sistema calcula la siguiente versión basándose en el **nombre de la rama origen** del Pull Request fusionado (merged):

*   `release/*` o `major/*` -> **Major** (+1.0.0) - Cambios incompatibles o hitos mayores.
*   `feat/*` o `feature/*` -> **Minor** (+0.1.0) - Nuevas funcionalidades retrocompatibles.
*   `fix/*`, `hotfix/*` o `bugfix/*` -> **Patch** (+0.0.1) - Correcciones de errores.
*   *Otros* -> **Patch** (Default) - Cualquier otro cambio se asume como corrección menor.

> **Nota**: Anteriormente se usaba lógica basada en el título del PR `(H)/(F)/(RN)`. Este método ha sido depreciado en favor del estándar de ramas.

## Estándares de Automatización (Ka0s)

Este componente sigue los estándares de automatización y seguridad de Ka0s:

- **Trigger**: Se ejecuta exclusivamente al **cerrar** un PR que ha sido **fusionado** (`merged: true`) en `main`.
- **Identidad**: Define la variable `KAOS_MODULE` (`[Ka0S] VERSION`) para trazabilidad.
- **Bot**: Utiliza `KAOS_BOT_NAME` y `KAOS_BOT_EMAIL` para firmar los commits automáticos.
- **Artefactos Generados**:
    - Tag de Git (vX.Y.Z).
    - Release de GitHub.
    - Actualización de `version.txt`.
    - Entrada en `CHANGELOG.md`.
    - Entrada en `INDEX_VERSION.md`.
