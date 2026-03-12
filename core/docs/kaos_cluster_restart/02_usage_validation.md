# Guía de Uso

## Ejecutar el Reinicio

1.  Ve a la pestaña **Actions** en GitHub.
2.  Selecciona el workflow **"Ka0s Cluster Safe Restart"**.
3.  En el campo de confirmación, escribe: `RESTART`.
4.  Haz clic en **Run workflow**.

## Verificación

### Durante la ejecución
Puedes seguir los logs del workflow en tiempo real. Verás mensajes como:
- `🧹 Draining node: k8-node-20...`
- `🔄 Rebooting worker k8-node-20...`
- `⏳ Waiting for node k8-node-20 to be Ready...`
- `✅ Node k8-node-20 is Ready.`

### Después de la ejecución
1.  Revisa la carpeta `audit/restart/` en el repositorio para ver el log completo.
2.  Verifica el estado del cluster manualmente o espera al reporte horario automático:
    ```bash
    kubectl get nodes
    ```
    Todos los nodos deben estar en estado `Ready`.

## Solución de Problemas

- **Timeout waiting for node**: Si un nodo tarda más de 5 minutos en volver, el script fallará. Verifica físicamente el nodo o intenta conectarte por SSH manualmente.
- **Pods en estado Pending**: Si el cluster no tiene suficientes recursos para mover los pods durante el drain, algunos quedarán en Pending hasta que el nodo vuelva. Esto es normal en clusters saturados.
