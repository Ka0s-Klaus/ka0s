#!/bin/bash
# Propósito: Registrar toda actividad del sistema con máximo detalle
# Ubicación: /usr/local/bin/audit.sh
# Permisos: chmod +x /usr/local/bin/audit.sh

LOG_DIR="/var/log/audit_ssh"
mkdir -p "$LOG_DIR"
SESSION_LOG="$LOG_DIR/session_$(date +%Y%m%d_%H%M%S)_$(whoami).log"

{
    echo "===== INICIO DE SESIÓN [$(date)] ====="
    echo "Usuario: $(whoami)"
    echo "Origen: $SSH_CLIENT"
    echo "Comandos ejecutados:"
    
    # Registrar todos los comandos usando script + trap
    exec > >(tee -a "$SESSION_LOG") 2>&1
    set -x
} >> "$SESSION_LOG"

# Capturar señal de logout
trap '{
    set +x
    echo "===== FIN DE SESIÓN [$(date)] ====="
    exit 0
}' EXIT

# Mantener sesión activa
$SHELL