# Validación de Uso

Este módulo es completamente automático, pero permite ejecución manual para verificaciones puntuales o simulacros.

## Ejecución Manual

Puedes forzar una ronda de vigilancia desde GitHub CLI:

```bash
gh workflow run watchdog-node-health.yml --ref main
```

## Verificación de Resultados

### Caso 1: Cluster Sano
El workflow terminará en verde y los logs mostrarán:
```text
✅ All nodes are healthy (No DiskPressure).
```

### Caso 2: Nodo Enfermo Detectado
1.  El paso `Detect Unhealthy Nodes` mostrará:
    ```text
    ⚠️ Found nodes with DiskPressure:
    k8-node-40
    ```
2.  Se disparará el sub-workflow `ops-node-management` para ese nodo.
3.  Podrás verificar que el nodo está en `SchedulingDisabled`:
    ```bash
    kubectl get nodes
    # NAME         STATUS                     ROLES
    # k8-node-40   Ready,SchedulingDisabled   <none>
    ```

## Logs de Auditoría

Toda acción del Watchdog desencadena finalmente una auditoría del cluster. Revisa los artefactos generados por `audit-cluster-status.yml` en la carpeta `audit/kube/` para ver el estado del cluster inmediatamente después de la vigilancia.
