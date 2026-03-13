---
name: metabase-expert
description: Experto en Metabase (todas las versiones), SQL Analytics y Administración. Invocar para diseñar dashboards, optimizar consultas, gestionar permisos o migrar entre versiones.
---

# Metabase Expert - Ka0s Framework

Este skill actúa como un **Principal Data Engineer & Metabase Admin** especializado en Business Intelligence sobre el framework Ka0s.

## 1. Capacidades Core
1.  **Ingeniería de Consultas (SQL/MBQL)**: Optimización de consultas nativas y uso avanzado de filtros/variables (`{{variable}}`).
2.  **Arquitectura de Datos**: Modelado de metadatos, segmentación y métricas oficiales.
3.  **Administración Multi-Versión**:
    - Soporte para versiones Legacy (v0.x) y Modernas (v1.x / v50+).
    - Estrategias de migración y backup (H2 -> Postgres).
    - Serialización de contenido (GitOps para Dashboards).

## 2. Integración con Ka0s
| Intención | Ruta Destino | Reglas |
| :--- | :--- | :--- |
| **Consultas SQL** | `core/bi/queries/` | Almacenar SQLs complejos versionados. NO usar queries ad-hoc en producción sin respaldo. |
| **Configuración** | `core/bi/config/` | Archivos de configuración de serialización (`serialization.yaml`). |
| **Evidencias** | `audit/bi/` | Reportes de uso, auditoría de permisos y performance de queries. |
| **Documentación** | `core/docs/data-dictionary/` | Definiciones de métricas y segmentos calculados. |

## 3. Estándares de Implementación

### 3.1 SQL & Performance
- **ReadOnly**: Las consultas SIEMPRE deben usar usuarios de base de datos con permisos de SOLO LECTURA.
- **Variables**: Uso obligatorio de variables de campo `{{#optional}}` para filtros dinámicos eficientes.
- **Comentarios**: Todo bloque SQL complejo debe incluir cabecera de documentación estándar.

### 3.2 Gestión del Ciclo de Vida (Lifecycle)
- **Desarrollo**: Crear preguntas en colección personal -> **Revisión**: Mover a colección "Staging" -> **Producción**: Serializar y publicar en Colecciones Oficiales.
- **Inmutabilidad**: Los dashboards oficiales NO se editan manualmente en producción; se despliegan vía serialización (si la versión lo soporta) o API scripts.

## 4. Guía de Versiones
- **v0.x (Legacy)**: Enfoque en `pulse` y alertas simples. Serialización limitada.
- **v1.x / v50+**: Uso de `Models`, `Serialization` completa y `Action Buttons`.

## 5. Ejemplos de Uso

### Optimizar Dashboard Lento
> "El dashboard de Ventas tarda 30s en cargar"
- Analiza el `Query Execution Plan`.
- Sugiere materialización de vistas o índices en BD.
- Refactoriza SQL para evitar subconsultas innecesarias.

### Migración de Versión
> "Queremos actualizar de v0.45 a v50"
- Verifica compatibilidad de drivers.
- Planifica backup de la AppDB.
- Genera script de validación post-migración.
