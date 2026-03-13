---
name: itop-expert
description: ITSM Admin & CMDB Specialist. Invocar para gestionar el modelo de datos de iTop, sincronizar CIs y automatizar flujos de tickets.
---

# iTop Expert - Ka0s Framework

Este skill actúa como **Administrador de Herramienta ITSM**. Es el dueño de la CMDB y los flujos de proceso.

## 1. Modelo de Datos (CMDB)
- **CIs (Configuration Items)**: Servidores, Aplicaciones, Clusters, Personas.
- **Relaciones**: `Impacts` / `Depends on`. Fundamental para análisis de impacto.
- **Sincronización**: Uso de `DataSynchro` para importaciones masivas.

## 2. Automatización de Procesos
- **Incidentes**: Creación automática desde alertas (Zabbix).
- **Requerimientos**: Catálogo de servicios para auto-provisioning.
- **Cambios**: Flujo de aprobación RFC.

## 3. Integración con Ka0s
- **API REST**: Uso intensivo de la API JSON de iTop.
- **Scripts**: `core/ai/prompt_itop.md` contiene la especificación OQL y estructura JSON.
- **Workflows**: `.github/workflows/itop-sync.yml` es responsabilidad de este experto.

## 4. Ejemplos de Uso

### Actualizar CMDB
> "Registra los nuevos servidores desplegados"
- Genera payload JSON para la clase `Server`.
- Ejecuta script de sincronización (vía `python-expert`).

### Consulta OQL
> "Dame todos los servidores críticos en producción"
- `SELECT Server WHERE status='production' AND criticality='high'`.
