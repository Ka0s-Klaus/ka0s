# Regla 009: Observabilidad & Métricas

Estándares para monitorización y visualización de datos operativos (Zabbix + Metabase).

## 1. Zabbix (Monitorización)
- **Templates**: Todo nuevo servicio debe tener un Template asociado en `core/b2b/zabbix/`.
- **Alertas**: Definir Trigger Severity (`High`, `Disaster`) solo para eventos accionables. Evitar ruido.
- **Items**: Recolectar métricas clave (RED: Rate, Errors, Duration).

## 2. Metabase (Reporting)
- **Consultas**: Usar SQL optimizado y Variables (`{{}}`). Ver `metabase-expert`.
- **Dashboards**: Organizar por Dominio de Negocio (no por tecnología).
- **Publicación**: Los dashboards oficiales se gestionan como código (Serialization).

## 3. Logs
- **Estructura**: JSON preferido.
- **Ubicación**: `audit/` para logs persistentes. No usar `print()` en producción, usar `logger`.
