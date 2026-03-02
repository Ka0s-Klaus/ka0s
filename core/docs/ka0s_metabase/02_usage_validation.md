# Guía de Uso y Validación: Metabase

## 1. Acceso a la Interfaz Web
Para acceder a Metabase:

1.  Asegúrate de tener conectividad con el clúster.
2.  Navega a: `https://metabase.ka0s.io`.
3.  **Primer Acceso**:
    *   Verás la pantalla de bienvenida.
    *   Haz clic en **"Let's get started"**.
    *   Completa el formulario para crear tu cuenta de administrador.
    *   En "Add your data", puedes omitirlo ("I'll add my data later") ya que Metabase ya está conectado a su base de datos interna.

## 2. Validación del Despliegue

### Verificar el estado de los Pods
Ejecuta el siguiente comando para asegurarte de que Metabase está corriendo correctamente:

```bash
kubectl get pods -n metabase
```

Deberías ver una salida similar a:

```
NAME                        READY   STATUS    RESTARTS   AGE
metabase-86f54686ff-wzc72   1/1     Running   0          3h8m
```

### Consultar Logs
Si encuentras problemas, consulta los logs del pod:

```bash
kubectl logs -n metabase -l app=metabase --tail=50
```

Busca mensajes de éxito como:
*   `Metabase Initialization COMPLETE`
*   `GET /api/health 200`

### Verificar el Ingress
Asegúrate de que el Ingress esté configurado correctamente:

```bash
kubectl get ingress -n metabase
```

Salida esperada:
```
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   5h16m
```

## 3. Resolución de Problemas Comunes

### Error: CrashLoopBackOff
Si el pod entra en `CrashLoopBackOff`, generalmente se debe a:
1.  **Problemas de Conexión a Base de Datos**: Verifica que el servicio de PostgreSQL esté accesible y las credenciales sean correctas.
2.  **Problemas de Memoria**: Verifica si el contenedor se quedó sin memoria (OOMKilled) revisando `kubectl describe pod <nombre> -n metabase`.

### Error: 503 Service Unavailable
Si al acceder a la URL recibes un error 503:
1.  Verifica que el pod esté en estado `Running` y `Ready` (1/1).
2.  Si está `Running` pero no `Ready` (0/1), espera unos minutos (la inicialización puede tomar tiempo).
3.  Revisa los eventos del Ingress: `kubectl describe ingress metabase-ingress -n metabase`.
