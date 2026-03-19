# `compliance/`: guardrails y estándares

## Propósito
Este directorio mantiene reglas y estándares que el proyecto aplica como quality gate:
- Formateadores/linters por tipo de fichero.
- Políticas ITIL / Service Management.
- Reglas y skills de Trae para operar con estándares Ka0s.

## Subdirectorios clave
- `compliance/trae/rules/`: reglas que gobiernan comportamiento y verificación.
- `compliance/trae/skills/`: skills operativos (SecOps, Kubernetes, DB, etc.).
- `compliance/{yaml,json,markdown,html}/`: configuración de estilo por formato.
- `compliance/itil/`: datasets y plantillas para ITIL/CMDB.

## Patrón Ka0s
- Cambios que afecten procesos deben reflejarse aquí (reglas) y en docs.
- “Verificación obligatoria” y “Docs vivos” se materializan con reglas en `compliance/trae/rules/`.

