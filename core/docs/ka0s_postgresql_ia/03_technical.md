# Detalles Técnicos

## Configuración de Recursos
- **CPU**: 100m (Request) / 500m (Limit)
- **RAM**: 256Mi (Request) / 1Gi (Limit)
- **Storage**: 10Gi (NFS)

## Inicialización
El contenedor utiliza la imagen `postgres:16-alpine`.
**Nota Importante**: Para soporte vectorial, se requiere la extensión `vector`.
Si se usa la imagen estándar, se debe compilar/instalar `pgvector` o usar una imagen pre-construida compatible (como `ankane/pgvector` o `pgvector/pgvector`).
*Actualmente se usa `postgres:16-alpine` por estabilidad en NFS, pendiente de instalar pgvector.*

## Networking
- **Service**: `postgresql-ia` (ClusterIP)
- **Port**: 5432
- **DNS**: `postgresql-ia.postgresql-ia.svc.cluster.local`
