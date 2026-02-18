# Guía de Uso y Validación

## Ejecución
Este workflow se dispara automáticamente ante eventos de Issues:
- Crear un Issue (opened)
- Editar un Issue (edited)
- Cerrar un Issue (closed)
- Añadir un comentario (issue_comment: created)

## Resultados y Evidencias
- El paso de sincronización genera `result.json`.
- Si existe y tiene contenido, se mueve a `audit/sync/<timestamp>_issue_<ID>.json`.
- Se realiza `git add` y commit condicional usando la identidad del bot.

## Validación Funcional
1. Crea un Issue de prueba y espera a que corra el workflow.
2. Revisa el job `sync-to-itop` y confirma que no hay errores.
3. Verifica la aparición de un nuevo archivo en `audit/sync/`.
4. Si tienes acceso a iTop, comprueba que el ticket/clase correspondiente se ha creado/actualizado.

## Troubleshooting
- `result.json` vacío o inexistente: revisar logs del script Python.
- `jq` no disponible: el workflow instala `jq` antes de operar.
- Fallo de credenciales iTop: confirmar `ITOP_URL`, `ITOP_API_USER`, `ITOP_API_PASSWORD`.
- Permisos de push: el bot debe poder hacer commit a la rama objetivo.

