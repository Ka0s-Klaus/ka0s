# 🛠️ Mantenimiento y Ciclo de Vida

Guía para mantener, actualizar y desinstalar el sistema de monitorización.

## Actualización de Configuración

Si realiza cambios en los archivos YAML (por ejemplo, para cambiar una contraseña o ajustar recursos), aplíquelos ejecutando de nuevo el comando de despliegue:

```bash
kubectl apply -k core/b2b/core-services/zabbix
```

Si los cambios no se reflejan inmediatamente, puede forzar el reinicio de los componentes para que recarguen la configuración:

```bash
# Reiniciar el servidor Zabbix
kubectl rollout restart deployment zabbix-server -n zabbix

# Reiniciar la interfaz web
kubectl rollout restart deployment zabbix-web -n zabbix
```

## Persistencia de Datos (Backups)

El sistema utiliza volúmenes persistentes (PVC) para guardar los datos críticos:
*   **Base de Datos**: Toda la historia y configuración se guarda en `database-pvc`.
*   **Avisos**: Si borra el despliegue (`delete`), los datos **NO se borran** automáticamente para evitar pérdidas accidentales.

Para hacer una copia de seguridad, debe respaldar el contenido del volumen asociado a `database-pvc`.

## Desinstalación

Si desea eliminar por completo el sistema de monitorización de su clúster:

### 1. Eliminar Componentes
Ejecute el siguiente comando para borrar todos los pods, servicios y configuraciones:

```bash
kubectl delete -k core/b2b/core-services/zabbix
```

### 2. Eliminar Datos (Opcional y Destructivo)
⚠️ **ADVERTENCIA**: Esto borrará todo el historial y configuración de Zabbix para siempre.

Si está seguro de querer limpiar también los datos almacenados en disco:

```bash
kubectl delete pvc database-pvc -n zabbix
kubectl delete pvc zabbix-server-pvc -n zabbix
```
