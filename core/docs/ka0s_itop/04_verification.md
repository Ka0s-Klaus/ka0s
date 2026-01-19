# Paso 4: Verificación de la Integración

Una vez que hayas configurado tanto GitHub como iTop, es crucial verificar que la integración funciona de extremo a extremo.

## Plan de Verificación

### 1. Prueba de Extremo a Extremo

La forma más directa de probar la integración es realizar la acción en iTop que debería disparar el workflow.

1.  **Crea un objeto en iTop**: Ve a tu instancia de iTop y crea un nuevo objeto del tipo que hayas configurado en el trigger (por ejemplo, un nuevo `User Request`).
2.  **Revisa la pestaña de Acciones en GitHub**:
    -   Ve a tu repositorio en GitHub y haz clic en la pestaña **Actions**.
    -   Deberías ver que el workflow (`iTop Triggered Workflow` en nuestro ejemplo) ha comenzado a ejecutarse.
    -   Haz clic en la ejecución del workflow para ver los detalles.
3.  **Verifica los logs**: Dentro de la ejecución del workflow, revisa los logs del job. Deberías ver los mensajes que imprimen el ID y el título del ticket de iTop, confirmando que los datos se pasaron correctamente.

### 2. Solución de Problemas (Troubleshooting)

Si el workflow no se ejecuta, aquí tienes algunos puntos a revisar:

-   **Logs de iTop**: Revisa los logs de la acción en iTop para ver si la llamada al webhook se realizó y si hubo algún error (ej. un error 401 de autenticación o 404 de no encontrado).
-   **PAT de GitHub**: Asegúrate de que el PAT no ha expirado y tiene los permisos correctos (`repo`).
-   **URL de la API**: Verifica que la URL en la acción de iTop es correcta y apunta al `OWNER`, `REPO` y fichero de workflow correctos.
-   **Prueba con `curl`**: Puedes simular la llamada de iTop usando `curl` desde tu terminal para aislar el problema. Esto te ayuda a determinar si el problema está en la configuración de iTop o en la de GitHub.

    ```bash
    curl -X POST \
      -H "Accept: application/vnd.github.v3+json" \
      -H "Authorization: token TU_PAT_DE_GITHUB" \
      https://api.github.com/repos/OWNER/REPO/actions/workflows/WORKFLOW_FILE.yml/dispatches \
      -d '{"ref":"main","inputs":{"itop_ticket_id":"TEST-123","itop_ticket_title":"Prueba desde curl"}}'
    ```

Si la llamada con `curl` funciona, el problema probablemente reside en la configuración de iTop. Si no, el problema está en el lado de GitHub (workflow, PAT, etc.).