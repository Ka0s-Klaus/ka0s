# MongoMan (MongoDB Admin UI)

**Rol**: Interfaz Web Moderna para Gestión de MongoDB.

Desplegado como alternativa robusta y moderna a Mongo Express (deprecado) y CloudBeaver (sin soporte NoSQL en CE).

## 🚀 Acceso
- **URL Pública**: `https://mongo-admin.ka0s.io`
- **Conexión**: Automática al cluster MongoDB local.

## 🛠️ Despliegue
```bash
kubectl apply -k core/b2b/core-services/mongoman
```

## ⚙️ Configuración
- **Imagen**: `ghcr.io/aientech/mongoman:latest`
- **Puerto**: 3000 (interno container).
- **Conexión**: Inyectada vía variable `MONGODB_URI` desde `mongo-secret` (clave `mongoman-uri`).
