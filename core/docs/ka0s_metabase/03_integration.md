# Integración Técnica: Metabase

## Detalles de Infraestructura
Detalles técnicos sobre la integración de Metabase con la infraestructura de Ka0s.

## 1. Configuración de Deployment
La configuración del despliegue de Metabase se encuentra en `core/b2b/core-services/metabase/deployment.yaml`.

*   **Imagen**: `metabase/metabase:v0.58.8` (Imagen oficial).
*   **Contenedor**: `metabase` (Puerto 3000).
*   **Volúmenes**: No se utilizan volúmenes persistentes en el contenedor; la persistencia se gestiona a través de PostgreSQL.

### Variables de Entorno Clave (`env`)
*   `MB_DB_TYPE`: `postgres`.
*   `MB_DB_DBNAME`: `metabase`.
*   `MB_DB_HOST`: `postgresql.postgresql.svc.cluster.local`.
*   `MB_DB_USER`: `metabase_user` (Desde Secret `metabase-db-secret`).
*   `MB_DB_PASS`: (Desde Secret `metabase-db-secret`).
*   `MB_SITE_URL`: `https://metabase.ka0s.io`.

### Gestión de Secretos
El despliegue de Metabase utiliza un secreto de Kubernetes para almacenar las credenciales de la base de datos: `metabase-db-secret` (Namespace: `metabase`).

*   **DB_USER**: Usuario de conexión (por defecto `metabase_user`).
*   **DB_PASSWORD**: Contraseña generada automáticamente.

## 2. Ingress y Seguridad
La exposición externa se realiza mediante el Ingress Controller de Nginx.

*   **Ingress Class**: `nginx`.
*   **Hosts**: `metabase.ka0s.io`.
*   **TLS**: Certificado `letsencrypt-prod`.
*   **Anotaciones Clave**:
    *   `nginx.ingress.kubernetes.io/ssl-redirect: "true"`: Forzar HTTPS.
    *   `nginx.ingress.kubernetes.io/proxy-body-size: "64m"`: Permitir subida de archivos grandes.

## 3. Integración con PostgreSQL
Metabase se conecta a una base de datos PostgreSQL centralizada en el clúster.

*   **Servicio**: `postgresql`.
*   **Base de Datos**: `metabase`.
*   **Usuario**: `metabase_user`.
*   **Seguridad**:
    *   **Acceso Interno**: La conexión es interna al clúster (ClusterIP).
    *   **PgHBA**: Configuración de acceso en `pg_hba.conf` para permitir conexiones desde el rango de IPs del clúster (`0.0.0.0/0 md5` con autenticación MD5).
