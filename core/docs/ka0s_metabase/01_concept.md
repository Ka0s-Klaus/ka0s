# Concepto y Arquitectura: Metabase

## Visión General
Metabase es la solución de **Business Intelligence (BI)** y análisis de datos de código abierto utilizada en Ka0s. Proporciona una interfaz intuitiva para que los equipos técnicos y no técnicos exploren, visualicen y compartan datos almacenados en nuestras bases de datos.

## Arquitectura de Despliegue

### 1. Aplicación (Metabase)
*   **Versión**: `v0.58.8` (Container Image: `metabase/metabase:v0.58.8`).
*   **Estado**: Desplegado como `Deployment` en el namespace `metabase`.
*   **Escalabilidad**: Actualmente configurado con 1 réplica.
*   **Recursos**:
    *   **Límites**: 1 CPU, 2Gi RAM.
    *   **Solicitudes**: 500m CPU, 1Gi RAM.

### 2. Base de Datos de Aplicación (Backend)
Metabase almacena su configuración interna (usuarios, dashboards, preguntas guardadas, permisos) en una base de datos **PostgreSQL**.

*   **Servicio**: Utiliza el servicio de **PostgreSQL Centralizado** del clúster (`postgresql.postgresql.svc.cluster.local`).
*   **Base de Datos**: `metabase` (creada y gestionada automáticamente).
*   **Usuario**: `metabase_user` (con permisos exclusivos sobre su DB).
*   **Seguridad**: La conexión se realiza mediante **ClusterIP** interno, sin exposición externa directa de la base de datos.

### 3. Exposición y Acceso (Ingress)
El acceso a la interfaz web se gestiona a través del Ingress Controller del clúster.

*   **Dominio**: `https://metabase.ka0s.io`.
*   **Seguridad**:
    *   **TLS**: Certificado gestionado por `cert-manager` (`letsencrypt-prod`).
    *   **Redirección SSL**: Forzada (`ssl-redirect: "true"`).
    *   **Protocolo Backend**: HTTP (puerto 3000 del contenedor).

## Flujo de Datos
1.  **Usuario** -> `https://metabase.ka0s.io` (Ingress).
2.  **Ingress** -> Servicio `metabase` (Puerto 80 -> 3000).
3.  **Pod Metabase** -> Procesa la solicitud.
4.  **Pod Metabase** -> Consulta `postgresql` (Puerto 5432) para metadatos o consultas SQL.
