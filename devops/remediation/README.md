# Ka0s Remediation Scripts

Este directorio contiene scripts de **auto-remediación** diseñados para ejecutarse automáticamente en respuesta a incidentes detectados.

## Principios de Diseño
1.  **Idempotencia**: Los scripts pueden ejecutarse múltiples veces sin causar efectos secundarios negativos si el problema ya está resuelto.
2.  **Diagnóstico Primero**: Antes de actuar, verifican el estado actual.
3.  **Fallo Seguro**: Si la condición es desconocida o crítica, abortan y escalan el incidente.
4.  **Auditoría**: Generan logs detallados en `/tmp` (o ruta especificada) para su posterior análisis.

## Scripts Disponibles

### `restart-mongodb.sh`
Diagnostica y recupera el clúster de MongoDB.
- **Detección**: Verifica si los Pods están corriendo y si hay errores de almacenamiento (`FailedMount`).
- **Acción**:
    - Si detecta `FailedMount` (pérdida de directorio NFS): Ejecuta una **reaprovisionamiento limpio** (borra PVC y Pod para forzar recreación).
    - Si detecta bloqueo de proceso: Reinicia el Deployment/StatefulSet.
- **Uso**: `./restart-mongodb.sh [LOG_FILE]`

### `check-high-load.sh`
Analiza la carga del sistema cuando se detecta un pico de CPU/Memoria.
- **Acción**: Lista los procesos top consumidores y genera un reporte.
- **Uso**: `./check-high-load.sh`
