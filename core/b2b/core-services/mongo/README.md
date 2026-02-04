# MongoDB (Database Service)

**Rol**: Base de Datos NoSQL Persistente.

Servicio de base de datos transversal utilizado por múltiples aplicaciones del ecosistema Ka0s (ej. Planka, n8n, etc.).

## 🚀 Arquitectura
*   **Topología**: StatefulSet (Garantiza identidad de red y almacenamiento estable).
*   **Almacenamiento**: PersistentVolumeClaim con StorageClass `local-path`.

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
```
