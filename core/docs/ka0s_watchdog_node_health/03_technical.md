# Integración Técnica

## Dependencias

El Watchdog depende de varios componentes del ecosistema Ka0s:

*   **Access**: Requiere acceso SSH al cluster (gestioando por `kubectl-tunnel` action).
*   **Permissions**: Necesita `actions: write` para disparar otros workflows (`ops-node-management` y `audit-cluster-status`).
*   **Secrets**:
    *   `KAOS_SSH_HOST_1`, `USER`, `KEY_PRIV`: Para conectar al nodo Manager.
    *   `GH_TOKEN` (o `GITHUB_TOKEN`): Para autenticar las llamadas a la API de GitHub.

## Extensibilidad

### Añadir Nuevas Comprobaciones

Para vigilar otras condiciones (ej. `MemoryPressure` o `PIDPressure`), modifica el script `.github/scripts/watchdog-disk-pressure.py`:

```python
# Ejemplo: Añadir chequeo de memoria
if condition["type"] in ["DiskPressure", "MemoryPressure"] and condition["status"] == "True":
    affected_nodes.append(name)
```

### Modificar la Respuesta

Si deseas una acción diferente (ej. reiniciar el nodo en lugar de aislarlo), modifica el parámetro `action` en la llamada al workflow `ops-node-management` dentro de `watchdog-node-health.yml`.

```yaml
-f action="reboot" # (Si esta acción estuviera implementada en ops-node-management)
```
