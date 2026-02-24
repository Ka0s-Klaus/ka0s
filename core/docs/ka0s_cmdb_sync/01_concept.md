# Ka0s CMDB Sync: Concepto y Estrategia

## 1. Introducción
La sincronización de la CMDB (Configuration Management Database) en iTop es un proceso crítico para mantener la integridad de los datos de los servicios desplegados en el clúster de Kubernetes de Ka0s. Este módulo automatiza el ciclo de vida de los CIs (Configuration Items) asegurando que la realidad del despliegue coincida con la documentación en la CMDB.

## 2. Objetivos
- **Automatización**: Eliminar la intervención manual para dar de alta/baja servicios.
- **Integridad**: Asegurar que cada despliegue exitoso se refleje en la CMDB.
- **Auditoría**: Mantener un registro detallado de todas las operaciones de sincronización.
- **Estandarización**: Usar el modelo de datos de iTop (`ApplicationSolution`) de forma consistente.

## 3. Estrategia de Sincronización
El proceso sigue un enfoque **Upsert (Update/Insert)** desencadenado por eventos de despliegue (CD).

### 3.1. Flujo de Datos
1.  **Fuente de Verdad**: El repositorio Git y los pipelines de despliegue definen qué servicios están activos.
2.  **Trigger**: Un despliegue exitoso en `cd-core-services.yml`.
3.  **Procesamiento**: El script `itop-cmdb-sync.py` determina si el servicio es nuevo o existente.
4.  **Destino**: La API REST de iTop actualiza la CMDB.

### 3.2. Modelo de Datos
Se utiliza la clase `ApplicationSolution` de iTop para representar los microservicios.
- **Name**: Nombre del servicio (ej. `elk`, `mongo`).
- **Organization**: Definida por `ITOP_ORIGIN` (ej. `Ka0s Corp`).
- **Status**: `production` (activo) o `obsolete` (dado de baja).
- **Description**: Metadatos automáticos incluyendo fecha de última sincronización.

## 4. Auditoría
Cada ejecución genera un fichero JSON en `audit/cmdb/` con el detalle de las operaciones realizadas (creación, actualización, errores), garantizando trazabilidad completa.
