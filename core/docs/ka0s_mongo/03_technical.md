# Módulo Ka0s MongoDB - Integración

## Conexión Segura
Utiliza `MONGO_SUPERUSER_CONNECTION` inyectado como secreto. La cadena de conexión nunca se expone en logs.

## Integración con GitHub
*   Usa el sistema de **Issues** para reportar incidentes.
*   Usa el sistema de **Git** (commits) para persistir logs de auditoría, creando un historial inmutable de cambios en la DB.
