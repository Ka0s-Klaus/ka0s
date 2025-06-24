# Documentación Técnica - Configuración SSH Segura

## Objetivo
Implementar configuración segura para OpenSSH Server con:
- Puerto no estándar (1712)
- Autenticación exclusiva por clave pública
- Hardening de permisos

## Flujo de Ejecución
1. Modificación de parámetros en `sshd_config`
2. Deshabilitación de autenticación por contraseña
3. Aseguramiento de permisos en archivos críticos
4. Reinicio controlado del servicio

## Requisitos Previos
- Acceso de superusuario (sudo)
- Claves SSH generadas previamente
- Firewall permitiendo tráfico en puerto 1712

## Hardening de Kernel

1. Actualización automática de paquetes de seguridad
2. Configuración de parámetros sysctl para protección avanzada
3. Verificación contra CVEs conocidos
4. Reinicio controlado tras actualizaciones

Ejecución programada:
```bash
# Añadir al crontab
0 3 * * * /path/to/kernel_hardening.sh >> /var/log/kernel_audit.log
```

## Política de Limpieza de /tmp

- Ejecución automática con cada run del script
- Elimina:
  - Archivos no accedidos en más de 24h
  - Directorios temporales vacíos
- Excepciones:

## Política de Logs

- Rotación automática: 
```bash
# Añadir a /etc/logrotate.d/kernel_hardening
/var/log/kernel_hardening_*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
}
```

## Análisis de CVEs

- Listado completo en archivo .log
- Resumen muestra:
  - 5 CVEs más recientes
  - CVEs con puntaje CVSS > 7.0
  - Relación con el kernel actual

Ejemplo de entrada: