# Infraestructura de MongoDB

## Descripción General
El despliegue de MongoDB en Ka0s está diseñado para ser resiliente, persistente y seguro, utilizando las capacidades nativas de Kubernetes y el almacenamiento centralizado.

## Componentes Clave

### 1. StatefulSet (`mongo`)
- **Rol**: Garantiza la identidad de red estable (`mongo-0`) y el orden de despliegue.
- **Imagen**: `mongo:5.0` (Versión LTS estable).
- **Recursos**:
  - **Requests**: 200m CPU, 512Mi RAM.
  - **Limits**: 1000m CPU, 2Gi RAM.
- **Probes**:
  - `startupProbe`: Verifica que el proceso inicie correctamente (TCP 27017).
  - `livenessProbe`: Reinicia el pod si se bloquea.
  - `readinessProbe`: Asegura que no reciba tráfico hasta estar listo.

### 2. Almacenamiento Persistente
- **StorageClass**: `nfs-client`.
- **Capacidad**: 8Gi.
- **Punto de Montaje**: `/data/db`.
- **Ventaja**: Permite que el pod se mueva entre nodos (k8-manager, k8-node-20, etc.) sin perder datos, ya que estos residen en el servidor NFS central (`storage-system`).

### 3. Red y Servicio
- **Tipo**: `ClusterIP`.
- **DNS Interno**: `mongo.mongo.svc.cluster.local`.
- **Puerto**: 27017.
- **Acceso**: Restringido al interior del clúster. Para acceso externo, se debe usar `kubectl port-forward`.

## Gestión de Configuración
Todo el despliegue se gestiona mediante **Kustomize** en `core/b2b/core-services/mongo/`, permitiendo:
- Gestión de Secretos (`mongo-secret.yaml`).
- Definición de Namespace (`namespace.yaml`).
- Orquestación de recursos.

## Operaciones de Mantenimiento

### Backup y Restore
Aunque el almacenamiento es persistente, se recomienda realizar backups periódicos usando `mongodump` y `mongorestore` desde un pod efímero o mediante `kubectl exec`.

### Logs
Los logs se pueden consultar directamente en el pod:
```bash
kubectl logs -f statefulset/mongo -n mongo
```
