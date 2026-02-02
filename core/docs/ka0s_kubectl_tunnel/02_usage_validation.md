# Guía de Uso y Validación: Kubectl Tunnel

## 1. Uso en Workflows
Para utilizar esta acción en cualquier workflow, invócala como un paso (`step`) antes de intentar ejecutar comandos `kubectl`.

```yaml
- name: Setup Kubectl Tunnel
  uses: ./.github/actions/kubectl-tunnel
  with:
    host: ${{ secrets.KAOS_SSH_HOST_1 }}
    username: ${{ secrets.KAOS_SSH_USER }}
    key: ${{ secrets.KAOS_SSH_KEY_PRIV }}
    port: ${{ secrets.KAOS_SSH_PORT_1 }}
    # Opcional: k8s-api-port (default: 6443), kubectl-version (default: v1.30.0)
```

## 2. Inputs Requeridos
| Input | Descripción | Ejemplo |
|-------|-------------|---------|
| `host` | Dirección IP o Hostname del servidor SSH de salto | `192.168.1.10` |
| `username` | Usuario SSH | `ka0s-user` |
| `key` | Llave privada SSH (formato PEM/OpenSSH) | `${{ secrets.SSH_KEY }}` |
| `port` | Puerto SSH | `22` |

## 3. Validación
La acción incluye un paso de verificación final (`Verify Connection`) que ejecuta `kubectl get nodes`.

### Cómo verificar el éxito:
1.  Revisar los logs del paso "Setup Kubectl Tunnel".
2.  Buscar la línea: `Tunnel established on 127.0.0.1:6443`.
3.  Confirmar que `kubectl get nodes` muestra la lista de nodos del clúster.

### Solución de Problemas Comunes
*   **Connection Refused**: El túnel no se estableció. Verifica que el puerto 6443 no esté ocupado en el runner.
*   **Timeout**: El runner no puede llegar al Host SSH (Revisar Firewalls o usar `swarm-runners-scaleset`).
*   **Auth Failure**: Llave SSH incorrecta o usuario no autorizado.
