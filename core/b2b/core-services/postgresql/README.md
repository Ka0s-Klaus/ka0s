# PostgreSQL Service

Este servicio proporciona una instancia centralizada de PostgreSQL para el clúster Ka0s.
Está configurado para alta disponibilidad (StatefulSet) y persistencia de datos (NFS).

## Características

- **Persistencia**: Usa `nfs-client` StorageClass.
- **Seguridad**: Contraseñas en Secretos (`postgres-secret`).
- **Accesibilidad**: Servicio ClusterIP (`postgresql.postgresql.svc.cluster.local`) accesible desde cualquier namespace.
- **Aislamiento**: Se recomienda crear una base de datos y usuario dedicado para cada servicio nuevo.

## Cómo conectar desde otro servicio

Para conectar a PostgreSQL desde otro pod en el clúster:

- **Host**: `postgresql.postgresql` (o `postgresql.postgresql.svc.cluster.local`)
- **Port**: `5432`
- **User**: `ka0s_admin` (o usuario específico)
- **Password**: Ver secreto `postgres-secret` en namespace `postgresql`.
- **Database**: `ka0s_core` (o base de datos específica)

## Creación de nuevas bases de datos

Para crear una base de datos aislada para un nuevo servicio (ej. `itop`):

1. Conectar al pod de PostgreSQL:
   ```bash
   kubectl exec -it postgresql-0 -n postgresql -- psql -U ka0s_admin -d ka0s_core
   ```

2. Ejecutar comandos SQL:
   ```sql
   CREATE DATABASE itop;
   CREATE USER itop_user WITH ENCRYPTED PASSWORD 'password_segura';
   GRANT ALL PRIVILEGES ON DATABASE itop TO itop_user;
   ```

## Mantenimiento

- **Backup**: Se recomienda configurar backups periódicos del volumen persistente.
- **Logs**: `kubectl logs -f postgresql-0 -n postgresql`
