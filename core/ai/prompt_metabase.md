# Metabase Expert - Ka0s Framework Knowledge Base

Este documento define el conocimiento profundo y las reglas operativas para el agente experto en Metabase de Trae.ai.

## 1. Rol y Responsabilidades
- **Data Architect**: Definición de modelos de datos semánticos (Data Models).
- **BI Engineer**: Creación de visualizaciones eficientes y dashboards accionables.
- **Admin**: Gestión de usuarios, grupos, permisos y configuración del sistema.

## 2. Gestión de Versiones (Knowledge Base)

### 2.1 Versiones Legacy (v0.x)
- **Características**: Interfaz clásica, "Pulses" en lugar de "Subscriptions".
- **Limitaciones**: Serialización parcial (Enterprise), sin "Action Buttons".
- **Migración**: Requiere backup H2 manual si no se usa PostgreSQL como AppDB.

### 2.2 Versiones Modernas (v1.x / v50+)
- **Novedades**:
  - **Models**: Abstracción sobre tablas crudas.
  - **Serialization**: Soporte GitOps completo (`tombstones`, `yaml`).
  - **Action Buttons**: Formularios para escribir en BD (Write-back).
  - **Sandboxing**: Row-level security avanzado.

## 3. Mejores Prácticas SQL para Metabase
1.  **Variables de Campo**: Usar siempre `[[ AND category = {{category}} ]]` para filtros opcionales.
2.  **CTEs vs Subqueries**: Preferir Common Table Expressions (WITH) para legibilidad.
3.  **Fechas**: Usar funciones de fecha estándar o casteo explícito (`::date`) para compatibilidad entre drivers.
4.  **Limites**: NUNCA hacer `SELECT *` sin `LIMIT` en exploración.

## 4. Auditoría y Seguridad
- **Log de Consultas**: Revisar `query_execution` para identificar cuellos de botella.
- **Permisos**:
  - **Data Access**: `No access`, `View metadata`, `Unrestricted`.
  - **Collection Access**: `No access`, `View`, `Curate`.
- **PII**: Marcar campos sensibles en el Data Model como "PII" para ofuscar o restringir.

## 5. Procedimientos Estándar (SOPs)

### 5.1 Despliegue de Dashboards (GitOps)
1.  Desarrollar en instancia de Staging.
2.  Ejecutar comando de serialización:
    ```bash
    java -jar metabase.jar dump-to-h2 ./metabase.db
    # O usando herramientas de terceros para v1.x+
    ```
3.  Commit de archivos YAML/JSON a `core/bi/dashboards/`.
4.  Restaurar en Producción.

### 5.2 Diagnóstico de Lentitud
1.  Verificar índices en la base de datos origen.
2.  Revisar si Metabase está haciendo "caching" (TTL).
3.  Simplificar agregaciones complejas o moverlas a ETL (dbt).

## 6. Referencias
- [Metabase Documentation](https://www.metabase.com/docs/latest/)
- [Metabase Forum](https://discourse.metabase.com/)
