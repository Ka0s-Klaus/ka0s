# Ka0s Version Manager - Concepto

## Descripción
Automatización del Versionado Semántico (SemVer). Elimina la gestión manual de tags y releases.

## Lógica de Versión
Calcula la siguiente versión basándose en el tipo de rama o etiquetas del Pull Request:
*   `fix/` -> Patch (+0.0.1)
*   `feat/` -> Minor (+0.1.0)
*   `release/` -> Major (+1.0.0)
