# Incident Report: Issue #5097

## Resumen del Incidente
El workflow `[Ka0s] Zabbix Service Auto-Discovery` fallaba consistentemente al intentar sincronizar los servicios de Kubernetes hacia Zabbix.

## Análisis de Causa Raíz (RCA)
- **Error en Logs:** `Error connecting to Zabbix API: HTTPConnectionPool(host='zabbix-web.zabbix.svc.cluster.local', port=80): Read timed out. (read timeout=10)` seguido de un error de API `Invalid parameter "/": unexpected parameter "user"`.
- **Causa:** El request inicial de login a la API de Zabbix utilizando el parámetro `username` (correcto para Zabbix >= 7.0) excedía el tiempo de espera configurado (`timeout=10`). 
- **Efecto Secundario (Fallback Fallido):** Al fallar por timeout, el script interpretaba erróneamente que se trataba de una versión antigua de Zabbix y reintentaba el login con el parámetro `user`. Este segundo request sí llegaba a procesarse, pero Zabbix 7.0 lo rechazaba con un error de parámetros inválidos.

## Solución (Auto-remediation)
1. Se incrementó el `timeout` de `10` a `30` segundos en todas las llamadas `requests.post()` hacia la API de Zabbix dentro del script `monitor_k8s_services.py` y el resto de scripts del módulo Zabbix en `core/monitoring/zabbix/scripts/*.py`.
2. Se añadió un comentario aclaratorio en el bloque de fallback para futuras referencias.

## Próximos Pasos
- Hacer commit y push de la rama `fix/issue-5097`.
- Crear PR y mergear a `main` para que el workflow vuelva a ejecutarse de forma exitosa.
