# 4. Troubleshooting: Metabase

## Problemas Comunes y Soluciones

### 1. CrashLoopBackOff: "Liquibase" o "Startup Probe Failed"

#### Síntomas
*   El pod `metabase` se reinicia constantemente (`CrashLoopBackOff`).
*   Los logs muestran:
    *   `Liquibase Exception: DatabaseException: ERROR: permission denied for schema public`
    *   `Startup probe failed: Get "http://.../api/health": dial tcp ... connection refused`

#### Causa Raíz
1.  **Migraciones Lentas**: La base de datos de Metabase es compleja y sus migraciones (Liquibase) pueden tardar más de 5 minutos en ejecutarse la primera vez o tras una actualización mayor. Si el `startupProbe` tiene un tiempo límite bajo, Kubernetes matará el pod antes de que termine.
2.  **Permisos Insuficientes**: Si el usuario de base de datos (`metabase_user`) se recreó manualmente sin otorgar permisos sobre el esquema `public`, Liquibase no podrá crear las tablas de control (`databasechangelog`).

#### Solución 1: Ajustar Tiempos de Arranque (Startup Probe)
Aumentar el umbral de fallo (`failureThreshold`) en el `deployment.yaml` para dar más tiempo a la inicialización.

```yaml
startupProbe:
  httpGet:
    path: /api/health
    port: 3000
  periodSeconds: 10
  failureThreshold: 120  # Aumentado de 30 a 120 (Total: 20 minutos)
  timeoutSeconds: 5
```

#### Solución 2: Otorgar Permisos de Schema (PostgreSQL)
Si el error es de permisos, conectarse al pod de PostgreSQL y ejecutar:

```bash
# 1. Acceder al shell de Postgres
kubectl exec -it postgresql-0 -n postgresql -- psql -U ka0s_admin -d metabase

# 2. Ejecutar comando SQL
GRANT ALL ON SCHEMA public TO metabase_user;
```

### 2. Base de Datos Corrupta / Perdida

#### Síntomas
*   Metabase arranca como una instalación limpia (pide configurar admin).
*   Logs indican que no encuentra tablas existentes.

#### Causa Raíz
Si el PVC de PostgreSQL (`data-postgresql-0`) se eliminó o corrompió (ej. por error de NFS Stale Handle), los datos se perdieron.

#### Recuperación
Si no hay backups externos:
1.  Recrear la base de datos `metabase` y el usuario `metabase_user` en PostgreSQL.
2.  Reiniciar el pod de Metabase para que ejecute las migraciones iniciales.
3.  Volver a configurar Metabase desde cero.

!!! warning "Prevención"
    Para evitar esto, asegura que el `PersistentVolume` (PV) tenga `persistentVolumeReclaimPolicy: Retain` y configura backups periódicos de la base de datos PostgreSQL.
