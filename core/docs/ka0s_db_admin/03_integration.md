# 3. Integración Técnica

Este documento describe la arquitectura técnica y los componentes desplegados para **Ka0s DB Admin (CloudBeaver)**.

## Componentes Desplegados

### StatefulSet (cloudbeaver)
Desplegado en el namespace `cloudbeaver`, este Deployment gestiona la instancia de CloudBeaver.
*   **Nombre**: `cloudbeaver`
*   **Imagen**: `dbeaver/cloudbeaver:latest`
*   **Puerto**: 8978 (Web UI)
*   **Replicas**: 1 (Singleton)
*   **Almacenamiento**:
    *   `cloudbeaver-workspace`: Volumen persistente de 1GB en `storage-system` (nfs-client).

### Service (ClusterIP)
Expone el servicio internamente en el clúster.
*   **Nombre**: `cloudbeaver`
*   **Puerto**: 80 (TargetPort 8978)
*   **Tipo**: ClusterIP

### Ingress (HTTPS)
Gestiona el acceso externo seguro.
*   **Host**: `db-admin.ka0s.io`
*   **TLS**: Certificado `letsencrypt-prod`.
*   **Backend**: Servicio `cloudbeaver` en puerto 80.

### Configuración (ConfigMap)
Define la configuración inicial del servidor.
*   **Nombre**: `cloudbeaver-config`
*   **Claves**:
    *   `cloudbeaver.conf`: Configuración principal.
    *   `product.conf`: Configuración del producto.

## Integración con PostgreSQL

CloudBeaver se conecta a PostgreSQL utilizando la red interna del clúster (`cluster.local`). No requiere configuraciones especiales en PostgreSQL más allá de permitir conexiones desde la red interna (ya cubierto por `pg_hba.conf` con `0.0.0.0/0 md5`).

### Dependencias
*   **PostgreSQL**: Debe estar desplegado y accesible en `postgresql.postgresql.svc.cluster.local`.
*   **NFS Storage**: Debe estar disponible para persistencia de configuraciones de usuario.
