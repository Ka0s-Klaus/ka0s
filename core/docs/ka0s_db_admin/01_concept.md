# 1. Concepto y Arquitectura

## Visión General
**Ka0s DB Admin** utiliza **CloudBeaver**, una herramienta de administración de bases de datos web, para proporcionar una interfaz centralizada y segura para gestionar los sistemas de almacenamiento de datos del clúster Ka0s.

## Arquitectura de Despliegue

### 1. Aplicación (CloudBeaver)
*   **Imagen**: `dbeaver/cloudbeaver:latest`.
*   **Despliegue**: StatefulSet (`db-admin`) para mantener la configuración del servidor y las conexiones persistentes.
*   **Almacenamiento**: Volumen persistente (PVC) de 1GB utilizando `nfs-client` para almacenar configuraciones de usuario y conexiones guardadas.

### 2. Integración con PostgreSQL
*   CloudBeaver se despliega dentro del mismo clúster Kubernetes que el servicio **PostgreSQL Centralizado**.
*   Utiliza la red interna del clúster (`cluster.local`) para conectarse a las bases de datos, eliminando la necesidad de exponer los puertos de base de datos públicamente.

### 3. Exposición y Seguridad
*   **Ingress**: Accesible a través de `https://db-admin.ka0s.io`.
*   **TLS**: Certificado gestionado por `cert-manager` (`letsencrypt-prod`).
*   **Autenticación**: CloudBeaver gestiona su propia autenticación de usuarios administradores. La conexión a las bases de datos requiere las credenciales específicas de cada servicio (almacenadas en Kubernetes Secrets).

## Flujo de Datos
1.  El usuario accede a `https://db-admin.ka0s.io`.
2.  La solicitud pasa por el Ingress Controller y llega al pod `db-admin`.
3.  CloudBeaver establece conexiones JDBC/ODBC directas a los servicios de base de datos internos (ej. `postgresql.postgresql.svc.cluster.local:5432`).
