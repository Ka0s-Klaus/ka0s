# Kubernetes Dashboard

Despliegue oficial del Dashboard de Kubernetes (v2.7.0).

## Acceso

La IP se asignará automáticamente mediante MetalLB (rango libre disponible).

1.  **Obtener la IP asignada**:
    ```bash
    kubectl get svc -n kubernetes-dashboard kubernetes-dashboard
    ```
    Busca la columna `EXTERNAL-IP`.

2.  **Acceder al navegador**:
    *   URL: `https://<EXTERNAL-IP>`
    *   **Nota**: Acepta la advertencia de certificado SSL (es autofirmado).

## Obtener Token de Acceso

Para loguearte, necesitas un token de administrador. Ejecuta este comando en tu terminal:

```bash
kubectl -n kubernetes-dashboard create token admin-user
```

Copia el token resultante y pégalo en la pantalla de login.

---
*Última actualización del despliegue: Se ha forzado una actualización para validar el flujo de CD.*
