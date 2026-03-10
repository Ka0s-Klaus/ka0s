# Servicio MySQL Centralizado (Core Service)

Este servicio proporciona una instancia centralizada de MySQL 8.0 para las aplicaciones del clúster (ej: iTop).

## Arquitectura
*   **Nodo**: `k8-node-40` (Exclusivo/Cordoned).
*   **Almacenamiento**: NFS (`storage-system`) persistente.
*   **Recursos**: Optimizado para bajo consumo de RAM (`innodb_buffer_pool_size=256M`).

## Credenciales (Por defecto)
*   **Root**: `rootpassword`
*   **User**: `admin`
*   **Pass**: `adminpassword`

> **Nota**: Cambiar las contraseñas en `secret.yaml` antes de producción.

## Conexión
Desde dentro del clúster:
*   Host: `mysql.mysql.svc.cluster.local`
*   Port: `3306`
