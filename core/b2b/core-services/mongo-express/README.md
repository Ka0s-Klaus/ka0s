# Mongo Express (Web UI)

**Rol**: Interfaz Web Ligera para MongoDB.

Desplegado como alternativa para la gestión visual de MongoDB, ya que CloudBeaver Community Edition tiene soporte limitado para NoSQL.

## 🚀 Acceso
- **URL Pública**: `https://mongo-admin.ka0s.io`
- **Credenciales Web**:
  - **Usuario**: `ka0s`
  - **Password**: (Misma que el root de Mongo)

## 🛠️ Despliegue
```bash
kubectl apply -k core/b2b/core-services/mongo-express
```

## ⚙️ Configuración
- Conecta internamente a `mongo.mongo.svc.cluster.local`.
- Utiliza las credenciales root de MongoDB (`mongo-secret`).
