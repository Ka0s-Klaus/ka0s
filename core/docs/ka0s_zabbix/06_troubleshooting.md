# ❓ Solución de Problemas (Troubleshooting)

## Problemas de Despliegue

### Los Pods no arrancan (Status: Pending)
*   **Síntoma**: Al hacer `kubectl get pods`, el estado se queda en `Pending`.
*   **Causa**: Falta de recursos (CPU/RAM) o almacenamiento (PVC) no disponible.
*   **Solución**:
    1.  Compruebe eventos: `kubectl describe pod <nombre-pod> -n zabbix`.
    2.  Verifique almacenamiento: `kubectl get pvc -n zabbix`.

### Error "CrashLoopBackOff" en Zabbix Server
*   **Causa**: Generalmente es porque no puede conectar a la base de datos.
*   **Solución**: Espere a que el pod `postgres` esté en estado `Running` y `Ready`. El servidor reintentará automáticamente.

## Problemas de Monitorización

### Alerta "Load average is too high"
*   **Mensaje**: `Load average is too high (per CPU load over 1.5 for 5m)`
*   **Significado**: El sistema está procesando muchas tareas simultáneamente.
*   **Causa**:
    *   **Durante el arranque**: Es normal. Zabbix, la base de datos y los agentes consumen mucha CPU al iniciar.
    *   **Continuo**: El nodo de Kubernetes tiene pocos recursos asignados.
*   **Solución**:
    *   Si acaba de desplegar, **ignórelo**. Desaparecerá en 15 minutos.
    *   Si persiste, considere aumentar la CPU del nodo o limitar los recursos en los archivos YAML.

### Gráficas "Sin Datos" (No data)
*   **Causa**:
    *   Acaba de instalarlo (espere 10-15 min).
    *   Bloqueo de red (Firewall) en puertos 10050/10051.
*   **Solución**: Verifique logs del agente: `kubectl logs -l app=zabbix-agent -n zabbix`.

### Error "Connection refused" en MongoDB
*   **Causa**: La IP configurada en Zabbix apunta a `127.0.0.1` en lugar de la IP del servicio.
*   **Solución**: En la configuración del Host en Zabbix, asegúrese de usar el nombre DNS del servicio (`mongodb-service`) y conectar "vía DNS", no IP.

### Error "No route to host"
*   **Significado**: El sistema de vigilancia no puede llegar al destino.
*   **Solución**: Revise las Network Policies o Firewalls de su clúster. Asegúrese de que el tráfico entre el namespace `zabbix` y los otros namespaces está permitido.
