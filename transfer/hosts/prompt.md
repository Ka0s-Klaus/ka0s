=== PROMPT MEJORADO: Sistema de Gestión Remota Linux Enterprise ===

Objetivo: Implementar solución escalable para administrar flotas de servidores Linux via SSH (puerto 1712) con:
1. Gestión centralizada mediante API REST
2. Auditoría inalterable de sesiones
3. Seguridad reforzada con 2FA
4. Soporte multi-shell y multi-distro

----- SECCIÓN CRÍTICA -----
[REQUERIMIENTOS TÉCNICOS]
• Conexión SSH exclusiva mediante claves ED25519 (puerto 1712)
• Registro de sesiones con reconstrucción exacta (ttyrec + auditd)
• Integración con FreeIPA/LDAP para autenticación central
• Compatibilidad con: Ubuntu, RHEL, Alpine (containers)
• Agente ligero (<5MB RAM) para sistemas embebidos

[COMPONENTES CLAVE]
1. Central Manager (Python):
   - API Flask con JWT auth
   - SQLite/PostgreSQL para inventario
   - WebSockets para streaming de logs

2. Host Agent (Go):
   - Auto-instalación via script único
   - Recopilación segura de:
     • Métricas del sistema
     • Logs de auditoría
     • Compliance checks

3. Security Layer:
   - 2FA via TOTP (Google Authenticator)
   - Rotación quincenal automática de claves SSH
   - Firma digital de logs con claves asimétricas

4. Session Recording:
   - Grabación binaria de sesiones (ttyrec)
   - Índice de comandos ejecutados (Elasticsearch)
   - Watermarking criptográfico

----- IMPLEMENTACIÓN -----
[PASOS DE CONFIGURACIÓN]
1. Instalar Central Manager:
   docker run -d -p 8080:8080 -v ./data:/app/data central-manager:v2

2. Implementar Agente en Hosts:
   curl -sSL https://domain.tld/install-agent.sh | bash -s -- \
    --api-key "XXX" \
    --central-host "manager.domain.tld" \
    --ssh-port 1712 \
    --enable-2fa

3. Configurar Auditoría:
   # /etc/audit/rules.d/session-recording.rules
   -a exit,always -F arch=b64 -S execve -k session_cmds
   -w /var/log/ttyrec -p wa -k tty_sessions

[SECURITY PROTOCOLS]
• Handshake SSH modificado:
  Client -> [PublicKey + TOTP] -> Server
  Server -> [SessionToken] -> Client

• Esquema de encriptación:
  Logs = AES-256(GCM) + Firma(ECDSA P-384)

----- MEJORAS CLAVE -----
[RESUELVE LIMITACIONES V1]
✓ Logs centralizados inalterables
✓ Alertas en tiempo real (Telegram/Slack)
✓ Auto-despliegue en flotas (Ansible/Terraform)
✓ Soporte Windows Subsystem for Linux

[ESCENARIOS AVANZADOS]
• "Kill switch" remoto para sesiones comprometidas
• Reconstrucción forense de sesiones via ttyplay
• Integración con SIEM (Splunk, Wazuh)
• Compliance automático (CIS Benchmarks)

----- MIGRACIÓN -----
[ACTUALIZACIÓN DESDE V1]
1. Ejecutar script de migración:
   /opt/linux-automator/migrate-v2.sh --preserve-logs

2. Verificar estado:
   systemctl status linux-automator-agent
   automator-cli healthcheck

[PRUEBAS RECOMENDADAS]
• Test de carga: 100+ conexiones simultáneas
• Simulación ataques: brute-force, log tampering
• Validación FIPS 140-2

----- DOCUMENTACIÓN -----
https://github.com/linux-automator/enterprise/docs