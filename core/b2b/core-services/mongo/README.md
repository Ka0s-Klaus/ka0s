# MongoDB (Database Service)

**Rol**: Base de Datos NoSQL Persistente.

Servicio de base de datos transversal utilizado por múltiples aplicaciones del ecosistema Ka0s (ej. Planka, n8n, etc.).

## 🚀 Arquitectura
*   **Topología**: StatefulSet (Garantiza identidad de red y almacenamiento estable).
*   **Almacenamiento**: PersistentVolumeClaim con StorageClass `nfs-client` (8Gi).
*   **Red**: Servicio `ClusterIP` (Acceso interno estable en `mongo.mongo.svc.cluster.local`).
*   **Recursos**: Límites configurados para estabilidad (Max 2Gi RAM / 1 CPU).

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/mongo
```

## 🔐 Gestión de Secretos
La contraseña de `root` se gestiona en `mongo-secret.yaml` (Base64).

## ⚙️ Comandos Útiles
```bash
# Verificar estado
kubectl get pods -n mongo

# Acceder a la shell
kubectl exec -it mongo-0 -n mongo -- mongosh

# Verificar logs
kubectl logs -f mongo-0 -n mongo
```
