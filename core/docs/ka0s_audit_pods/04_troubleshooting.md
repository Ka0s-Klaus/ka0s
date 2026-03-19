# Troubleshooting y Resolución de Problemas

Esta sección detalla los fallos comunes y cómo abordarlos para el módulo de Auditoría de Pods.

## Fallos Comunes y Remedios

### Error: "Cannot connect to Kubernetes cluster"
- **Síntoma**: El script de auditoría termina prematuramente con este mensaje.
- **Causa**: El API Server de Kubernetes no está respondiendo o el archivo `KUBECONFIG` es incorrecto.
- **Acción**:
    1. Verifica la conectividad con el nodo control-plane.
    2. Comprueba el estado de `kubelet` y `apiserver` en el nodo.
    3. Asegúrate de que el runner tiene permisos de red hacia el clúster.

### Fallo en la Acción SSH
- **Síntoma**: Error de conexión o autenticación al intentar ejecutar el script remoto.
- **Causa**: Secretos (`KAOS_SSH_KEY_PRIV`, `KAOS_SSH_HOST_1`, etc.) desactualizados o firewall bloqueando el puerto.
- **Acción**: Revisa los secretos en el repositorio y la conectividad SSH manual desde un entorno autorizado.

### Salida JSON Vacía o Inválida
- **Síntoma**: El job de commit falla o el procesamiento posterior da errores de parsing.
- **Causa**: Problemas intermedios en el pipeline de shell (`kubectl | jq`) que no fueron capturados (pre-parche de robustez).
- **Acción**: Tras las mejoras de robustez, este error debería manifestarse como un fallo explícito en el script auditor. Revisa los logs de la acción para identificar el comando exacto que falló.

### Error: "cannot pull with rebase: You have unstaged changes"
- **Síntoma**: El step de commit falla con exit code `128` al ejecutar `git pull --rebase`.
- **Causa**: El workflow genera/modifica ficheros (por ejemplo `audit/kube/failed_pods.json` y `audit/itop/`) antes de hacer `pull --rebase`, dejando cambios locales sin commitear.
- **Acción**:
    1. Aplica autostash antes del pull (`git stash -u` / `--autostash`).
    2. Realiza `git pull --rebase` y restaura el stash.
    3. Continúa con `git add` + `git commit` + `git push`.

## Escalado
Si el problema persiste tras verificar la conectividad y las credenciales, abre un issue con la etiqueta `triage` adjuntando los logs completos del Run ID fallido.
