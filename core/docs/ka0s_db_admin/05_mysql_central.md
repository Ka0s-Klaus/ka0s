# 05. Servicio de Base de Datos Central (MySQL)

Ka0s implementa un servicio centralizado de MySQL para consolidar las bases de datos de aplicaciones como iTop, reduciendo la fragmentación y facilitando los backups.

## Especificaciones Técnicas

| Componente | Detalle |
| :--- | :--- |
| **Versión** | MySQL 8.0 |
| **Ubicación** | `k8-node-40` (Nodo Dedicado a Datos/Monitorización) |
| **Almacenamiento** | NFS (`storage-system`) |
| **Persistencia** | PVC `mysql-pvc` (10Gi) |
| **Namespace** | `mysql` |

## Configuración de Recursos

Dado que `k8-node-40` tiene recursos limitados (4GB RAM), se ha aplicado una configuración conservadora:

*   **InnoDB Buffer Pool**: 256MB
*   **Max Connections**: 100
*   **Kubernetes Limits**: 1Gi RAM / 1 CPU

## Acceso y Uso

El servicio es accesible internamente en el clúster a través del DNS:

```
mysql.mysql.svc.cluster.local:3306
```

### Gestión de Usuarios

Se recomienda crear un usuario y base de datos específica por cada aplicación que consuma el servicio, evitando usar `root` para las conexiones de aplicaciones.

## Mantenimiento

### Backups
Al estar los datos en el sistema NFS central (`storage-system`), los backups se pueden realizar a nivel de sistema de archivos en el servidor NFS o mediante `mysqldump` programados (CronJobs).

### Escalado
Actualmente configurado como instancia única (Standalone). Para alta disponibilidad, se requeriría migrar a una arquitectura Galera o InnoDB Cluster, lo cual excede los recursos actuales del nodo 40.
