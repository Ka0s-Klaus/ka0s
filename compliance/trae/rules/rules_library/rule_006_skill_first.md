# Regla 006: Skill First & ITIL Compliance

Estandarización de la ejecución técnica y el cumplimiento normativo.

## 1. Skill First (Delegación)
Antes de iniciar cualquier tarea compleja o automatización, verifica si existe un Skill experto en `.trae/skills/`.
- **Si existe**: Invócalo y sigue sus directrices.
- **Si no existe**: Evalúa si deberías crearlo (usando `skill-creator`).

## 2. ITIL Compliance (Gobernanza)
Toda automatización que modifique infraestructura, configuración crítica o datos de producción debe alinearse con los procesos definidos por el `itil-expert`.
- **Gestión de Cambios**: Requiere ticket/registro en iTop.
- **Gestión de Configuración**: Requiere actualización de CMDB.
