# CloudBeaver (Database Manager)

**Rol**: Interfaz Web Unificada para Gestión de Bases de Datos.

Permite administrar PostgreSQL y otras bases de datos SQL.

## 🚀 Acceso
- **URL Pública**: `https://db-admin.ka0s.io`
- **Credenciales de Admin**: Configuradas en el primer inicio (usuario `cbadmin`).

## 🔌 Conexión a Servicios Internos

### PostgreSQL (Core)
1.  **Tipo de Conexión**: PostgreSQL
2.  **Host/Server**: `postgresql.postgresql.svc.cluster.local`
3.  **Port**: `5432`
4.  **Database**: `postgres`
5.  **Authentication**:
    - **Username**: `postgres`
    - **Password**: (Ver `postgres-secret` en namespace `postgresql`)

## 🛠️ Despliegue
```bash
kubectl apply -k core/b2b/core-services/cloudbeaver
```

## 📦 Persistencia
El espacio de trabajo y las configuraciones de conexión se guardan en el PVC `cloudbeaver-pvc` (10Gi).
