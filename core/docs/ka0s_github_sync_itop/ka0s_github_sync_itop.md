# Módulo Ka0s GitHub → iTop Sync

Sincronización automática de eventos de GitHub Issues hacia iTop, con auditoría inmutable en el repositorio.

## Índice de Documentación

1.  [Concepto y Arquitectura](./01_concept.md)
2.  [Guía de Uso y Validación](./02_usage_validation.md)
3.  [Integración en el Ecosistema](./03_integration.md)
4.  [Incidencias Zabbix HIGH → GitHub Issue](./04_zabbix_high_incident.md)

## Componentes Clave

| Componente | Tipo | Ubicación |
| :--- | :--- | :--- |
| Workflow | GitHub Actions | [.github/workflows/github-sync-itop.yml](file:///Users/santale/ka0s-klaus/ka0s/.github/workflows/github-sync-itop.yml) |
| Script Sync | Python | .github/scripts/github-sync-itop.py |
| Evidencias | JSON | audit/sync/<timestamp>_<itop_ref>_<issue>.json |
