# Ka0s Daily Cluster Report

Este módulo define la automatización encargada de generar, diariamente a las 00:00 UTC, una "foto fija" del estado de salud, seguridad y recursos del cluster Kubernetes.

## 🎯 Objetivo
Proporcionar un historial inmutable y auditable del estado de la infraestructura, permitiendo detectar tendencias, regresiones y problemas de seguridad a lo largo del tiempo sin necesidad de herramientas de monitoreo en tiempo real complejas para consultas históricas simples.

## 📂 Estructura
*   **Workflow**: `.github/workflows/daily-cluster-report.yml`
*   **Lógica**: `.github/scripts/generate-cluster-report.sh`
*   **Salida**: `audit/daily-reports/report-YYYY-MM-DD.md`

## 📚 Documentación Detallada
1.  [Concepto y Filosofía](./01_concept.md)
2.  [Uso y Validación](./02_usage_validation.md)
3.  [Integración Técnica](./03_integration.md)
