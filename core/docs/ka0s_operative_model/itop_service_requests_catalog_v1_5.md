## Catálogo de Solicitudes de Servicio

| Dominio | SR | Descripción | Prerequisitos | SLA entrega | Riesgos | Validación | Backout |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Host | Alta CMDB | Creación/actualización de CI host | CMDB; Accesos | 3 días hábiles | Baja calidad de datos | CI creado/actualizado y auditado | Rollback de cambios en CMDB |
| Host | Aplicación de parches | Patching según baseline | Ventana; Snapshot | 5 días hábiles | Impacto en servicio | Health-check OK | Deshacer parches |
| IaaS | VM estándar | Provisionar VM desde plantilla | Cuenta/red | 2 días hábiles | Capacidad insuficiente | Arranque y agentes OK | Eliminar VM |
| IaaS | Reglas de red | Alta de regla NSG/Firewall estándar | Justificación | 2 días hábiles | Bloqueo no deseado | Pruebas de conectividad OK | Revertir regla |
| CaaS | Alta namespace | Crear namespace con quotas y políticas | Cluster operativo | 1 día hábil | Cuotas/limits incorrectos | Deploy básico OK | Borrado de namespace |
| Backup | Alta política | Configurar job con retención | Workload definido | 2 días hábiles | Sobrecoste/ventanas | Reporte éxito 24h | Desactivar política |
| Monitorización | Alta de alertas | Configurar alertas por SLO | Métricas definidas | 2 días hábiles | Alert fatigue | Umbral verificado | Deshabilitar alerta |
