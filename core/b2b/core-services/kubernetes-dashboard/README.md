# Kubernetes Dashboard

Despliegue oficial del Dashboard de Kubernetes (v2.7.0).

## Acceso

- **URL**: `https://192.168.1.241`
- **Nota**: Acepta la advertencia de certificado SSL (es autofirmado).

## Obtener Token de Acceso

Para loguearte, necesitas un token de administrador. Ejecuta este comando en tu terminal:

```bash
kubectl -n kubernetes-dashboard create token admin-user
```

Copia el token resultante y pégalo en la pantalla de login.
