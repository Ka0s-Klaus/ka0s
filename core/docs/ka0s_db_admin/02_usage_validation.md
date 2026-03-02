# 2. Uso y Validación

Este documento detalla cómo acceder a **Ka0s DB Admin (CloudBeaver)** y configurar la conexión a las bases de datos del clúster.

## Acceso Inicial

1.  Abre tu navegador y navega a `https://db-admin.ka0s.io`.
2.  Inicia sesión con las credenciales de administrador de CloudBeaver que configuraste durante la instalación inicial.
    *   **Usuario**: `cbadmin` (o el que hayas definido).
    *   **Contraseña**: (la que hayas definido).

## Conexión a PostgreSQL Centralizado

Para conectar CloudBeaver al servicio de base de datos PostgreSQL del clúster, utiliza los siguientes parámetros en la pantalla de **New Connection**:

| Campo | Valor | Descripción |
| :--- | :--- | :--- |
| **Driver** | PostgreSQL | Selecciona el driver estándar. |
| **Host** | `postgresql.postgresql.svc.cluster.local` | Nombre DNS interno del servicio PostgreSQL. |
| **Port** | `5432` | Puerto estándar de PostgreSQL. |
| **Database** | `ka0s_core` | Base de datos principal de servicios core (o `postgres` para administración global). |
| **User name** | `ka0s_admin` | Usuario administrador del clúster de base de datos. |
| **User password** | `ka0s-secure-password-2026` | Contraseña segura del administrador. |

> **Nota**: Estas credenciales se encuentran almacenadas en el secreto de Kubernetes `postgres-secret` en el namespace `postgresql`.

### Pasos Detallados
1.  En el panel principal, haz clic en el botón **Connect** (icono de enchufe).
2.  Selecciona **PostgreSQL**.
3.  Introduce los valores de la tabla anterior.
4.  Haz clic en **Test Connection** para verificar que CloudBeaver puede alcanzar la base de datos.
    *   Si el test es exitoso, verás un mensaje verde "Connected".
5.  Haz clic en **Finish** o **Create** para guardar la conexión.

## Validación del Despliegue

### Verificar Pods
Ejecuta el siguiente comando para asegurarte de que CloudBeaver está corriendo:
```bash
kubectl get pods -n cloudbeaver
```
Deberías ver un pod con estado `Running` (ej. `cloudbeaver-xyz`).

### Verificar Logs
Si no puedes conectar, revisa los logs del pod para errores de inicio o conexión:
```bash
kubectl logs -n cloudbeaver -l app=cloudbeaver --tail=50
```

### Problemas Comunes
*   **Connection Refused**: Verifica que el Host (`postgresql.postgresql.svc.cluster.local`) es correcto y que el servicio PostgreSQL está corriendo en el namespace `postgresql`.
*   **Authentication Failed**: Verifica que el usuario y la contraseña coinciden con los del secreto `postgres-secret`.
