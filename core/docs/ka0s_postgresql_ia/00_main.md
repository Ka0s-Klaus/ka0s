# PostgreSQL IA - Servicio de Memoria Vectorial

Este servicio proporciona una base de datos PostgreSQL dedicada para el almacenamiento de vectores (embeddings) del Agente Ka0s.
Está aislada de la base de datos principal (`postgresql`) para evitar impacto en servicios críticos como iTop o Zabbix.

## Características
- **Motor**: PostgreSQL 16 (Alpine)
- **Extensión**: pgvector (Instalada manualmente o vía imagen dedicada)
- **Almacenamiento**: Persistente sobre NFS (`nfs-client`)
- **Ubicación**: Nodo `k8-node-20` (Afinidad estricta)
