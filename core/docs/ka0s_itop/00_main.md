# Módulo Ka0s iTop Integration

Módulo para la orquestación bidireccional entre la gestión de servicios (ITSM) y la automatización (GitHub Actions).

## Índice de Documentación
1.  [**Concepto y Arquitectura**](./01_concept.md)
2.  [**Guía de Uso y Validación**](./02_usage_validation.md)
3.  [**Integración en el Ecosistema**](./03_integration.md)

## Referencias Técnicas
*   [**Nuevo Core SDK (v2)**](../ka0s_itop_core/00_main.md) - Arquitectura y Librería Unificada.
*   [Guía Maestra Legacy](./legacy_readme.md)
*   [Guía de API](./ITOP_API_GUIDE.md)
*   [Configuración de PAT](./02_PAT_creation.md)

## Arquitectura de Base de Datos

iTop utiliza el servicio centralizado de **MySQL 8.0** desplegado en el namespace `mysql` (Nodo 30).

- **Host**: `mysql.mysql.svc.cluster.local`
- **Base de Datos**: `itop`
- **Usuario**: `itop`
- **Persistencia**: Gestionada centralmente por el servicio MySQL (NFS).

> **Nota de Migración**: Anteriormente iTop usaba un contenedor MySQL dedicado (sidecar/deployment separado). Este fue desmantelado en favor de la consolidación de bases de datos.

## Acceso y Credenciales
