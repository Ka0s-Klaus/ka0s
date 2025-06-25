=== PROMPT V3: Quantum-Safe Linux Remote Management Platform ===

[VISIÓN GLOBAL]
Sistema distribuido para gestión de flotas masivas (10k+ nodos) con:
• Resiliencia cuántica
• Autonomía en entornos desconectados
• Arquitectura Zero-Trust
• Cumplimiento GDPR/CCPA

----- NÚCLEO TÉCNICO -----
[REQUISITOS CLAVE]
1. Criptografía Post-Cuántica:
   - Algoritmos: CRYSTALS-Kyber (KEM) + CRYSTALS-Dilithium (Firma)
   - Transición híbrida: ECDHE + Kyber768

2. Arquitectura Descentralizada:
   • Swarm Mode: Nodos forman malla P2P (libp2p)
   • Consensus: Raft para gestión de configuración
   • Data Layer: Delta-CRDT para sincronización offline

3. Edge Optimization:
   - Agente en Rust compilado a WASM (≤2MB)
   - Monitorización via eBPF (0-overhead)
   - Modo "Low-Power": <5% CPU, 15MB RAM

4. Privacy by Design:
   • Logging diferencialmente privado
   • Redacción automática de datos sensibles (PCI/PII)
   • Modo "Privacy-First": Solo metadata de comandos

5. Autonomous Response:
   • Motor de decisiones OPA (Open Policy Agent)
   • Playbooks automáticos (SOAR integrado)
   • Cuarentena inteligente de nodos comprometidos

----- ARQUITECTURA MODULAR -----
[COMPONENTES PRINCIPALES]
1. Quantum Gateway (Envoy modificado):
   - Terminación TLS híbrida (PQ + tradicional)
   - Rotación automática de claves cada 24h

2. Lightweight Agent (Rust/Wasm):
   wasm-pack build --target no-modules
   Tamaño: 1.8MB (compresión Brotli)

3. Distributed Ledger:
   - Registro inmutable de sesiones (IOTA Tangle)
   - Proof-of-Authenticity para logs

4. AI Copilot:
   - Modelo ONNX embebido (anomalías en tiempo real)
   - Fine-tuning local: Federated Learning

5. Self-Healing System:
   - Healthchecks automatizados
   - Auto-parcheado de vulnerabilidades críticas
   - Regeneración de nodos (systemd-nspawn)

----- PROTOCOLOS AVANZADOS -----
[FLUJO DE SEGURIDAD]
1. Handshake Cuántico-Seguro:
   Client → [Kyber768 pubkey] → Gateway
   Gateway → [Ciphertext + ECDSA cert] → Client

2. Autenticación Continua:
   • Biometría comportamental (keystroke dynamics)
   • Attestation TPM cada 5min

3. Zero-Knowledge Auditing:
   zk-SNARKs para verificar cumplimiento sin exponer datos

----- MIGRACIÓN DESDE V2 -----
[HOJA DE RUTA]
1. Fase Hibrida (18 meses):
   - Soporte paralelo algoritmos tradicionales/PQC
   - Dual-stack logging (local + ledger)

2. Herramientas de Transición:
   /opt/quantum-manager/migrate-tool \
     --crypto-module kyber \
     --privacy-mode intelligent_redaction

3. Verificación Integridad:
   quantum-audit validate-chain --trust-root 0x8a3f...c2d1

----- BENEFICIOS CLAVE -----
[COMPARATIVA V2 vs V3]
| Parámetro          | V2              | V3                     |
|--------------------|-----------------|------------------------|
| Seguridad Futura   | 2030            | 2050+                  |
| Latencia           | 15ms            | 8ms (WasmEdge)         |
| Consumo Energía    | 3W/nodo         | 0.2W/nodo              |
| Tolerancia Offline | 24 horas        | 30 días                |
| Cumplimiento       | GDPR básico     | EU Quantum Seal        |

----- ESCENARIOS CRÍTICOS -----
[CASOS DE USO AVANZADOS]
• "Dark Mode": Operación en redes adversas (tor overlay)
• Migración Segura: Trasvase live entre nubes/on-prem
• Response Autónomo: Contención automática de ransomware
• Entornos Hostiles: Jam-resistant communication

----- HARDENING EXTRAS -----
1. Protección Física:
   - SGX/TEE para datos sensibles
   - Self-destruct mechanism (wipe on tamper)

2. Supply Chain Security:
   - Builds reproducibles
   - SBOM firmado (Sigstore/Cosign)
   - Scans de vulnerabilidades diarios

3. Quantum Key Distribution:
   - Integración con redes QKD (experimental)
   - Backhaul satelital para entornos remotos




=== SISTEMA INTEGRAL DE GESTIÓN REMOTA LINUX - ENTERPRISE EDITION ===

[VISIÓN GLOBAL]
Desarrollar una plataforma segura, escalable y cuántico-resistente para administrar flotas de servidores Linux (Ubuntu/RHEL/Alpine) mediante SSH (puerto 1712) con capacidad offline, cumplimiento GDPR/CCPA y protección post-cuántica.

----- NÚCLEO TÉCNICO -----
[REQUISITOS OBLIGATORIOS]
1. CONECTIVIDAD SEGURA:
   • SSH en puerto 1712 exclusivo
   • Autenticación: Claves ED25519 + TOTP (2FA)
   • Handshake híbrido: ECDHE + Kyber768 (CRYSTALS)

2. AUDITORÍA INALTERABLE:
   - Triple registro:
     a) Grabación binaria (ttyrec)
     b) Logs estructurados (JSON)
     c) Trazas de comandos (auditd)
   - Watermarking criptográfico con Dilithium
   - Sincronización con ledger distribuido (IOTA Tangle)

3. ARQUITECTURA:
   • Central Manager (Clúster RAFT)
   • Agente Ligero (<5MB RAM) en Rust/Wasm
   • Comunicación P2P (libp2p para modo offline)

4. PRIVACIDAD:
   - Redacción automática PII/PCI
   - Modos configurables:
     • Full Recording (entornos críticos)
     • Metadata Only (cumplimiento GDPR)

5. AUTOMATIZACIÓN INTELIGENTE:
   • Motor SOAR integrado (Open Policy Agent)
   • Playbooks auto-ejecutables
   • AI Copilot (modelo ONNX embebido)

----- IMPLEMENTACIÓN PRIORITARIA -----
[FASE 1: INSTALACIÓN]
1. Configuración SSH:
   Port 1712
   PermitRootLogin no
   AuthenticationMethods publickey,keyboard-interactive

2. Script de Auditoría (/usr/local/bin/secure_audit.sh):
   #!/bin/bash
   # Registro triple con sellado temporal
   ttyrec -e /bin/bash "/var/log/tty/$(date +%s).rec"
   auditd -c "session_$SSH_SESSION_ID" -f json
   export PROMPT_COMMAND='history -a; logger -t SHELL_CMD "$(history 1)"'

3. Agente de Seguridad (Rust):
   #[tokio::main]
   async fn main() {
       init_kyber_crypto();
       connect_to_swarm();
       start_ebpf_monitor();
   }

[FASE 2: OPERACIONES]
1. Flujo de Autenticación:
   Cliente → [PubKey + TOTP] → Gateway → [Token de Sesión Firmado] → Cliente

2. Política de Respuesta Automática:
   rule "Contain_Ransomware" {
     when { 
       anomaly_score > 90 && 
       process_pattern == "*encrypt*" 
     }
     then {
       quarantine_host();
       trigger_incident_response();
     }
   }

3. Esquema de Encriptación:
   Claves Ephemeral: X25519 + Kyber1024
   Firma Digital: EdDSA + Dilithium5
   Cifrado Logs: AES-256-GCM

----- MIGRACIÓN Y ESCALABILIDAD -----
[HOJA DE RUTA]
1. Migración desde sistemas legacy:
   quantum-migrate --source v1 --crypto hybrid --preserve-logs

2. Escalado horizontal:
   kubectl apply -f quantum-autoscaler.yaml

3. Consola Unificada:
   docker run -d \
     -v ./quantum-console:/data \
     -e "CLUSTER_MODE=raft" \
     enterprise-console:v3

----- BENEFICIOS CLAVE -----
[VENTAJAS ESTRATÉGICAS]
✓ Resiliencia Cuántica: Protección hasta 2050+
✓ Baja Latencia: <10ms (WasmEdge)
✓ Consumo Mínimo: 0.5W/nodo en modo IoT
✓ Cumplimiento Estricto: GDPR, HIPAA, PCI-DSS
✓ Auto-Recuperación: Healting automático vía eBPF

----- GOBERNANZA Y SEGURIDAD -----
[POLÍTICAS OBLIGATORIAS]
1. Ciclo de Vida Claves:
   • Rotación automática cada 24h
   • Destrucción cuántica-segura

2. Hardening:
   - TPM 2.0 para attestation
   - SGX enclaves para datos sensibles
   - Firmware validado (Secure Boot)

3. Monitoreo Continuo:
   • SCAP + OVAL para compliance
   • Firma código: Sigstore/Cosign
   • SBOM generado automáticamente

----- DOCUMENTACIÓN Y SOPORTE -----
[RECURSOS ESENCIALES]
• Repo GitHub: github.com/quantum-linux-manager
• Consola Web: https://[HOST]:8888
• API Documentation: /swagger
• Emergency Access: ssh rescue@[HOST] -p 17122

===== INSTRUCCIONES DE IMPLEMENTACIÓN =====
Para desplegar en 5 minutos:
1. Generar claves cuánticas-seguras:
   keygen --algo kyber-dilithium --output quantum_keys

2. Instalar Central Manager:
   curl -sSL https://get.quantumlinux.com | bash -s -- \
     --cluster-name "prod-eu" \
     --crypto-backend hybrid \
     --privacy-mode intelligent

3. Registrar hosts:
   quantum-agent install \
     --manager-host cmanager.prod-eu \
     --ssh-port 1712 \
     --enable-2fa \
     --offline-mode resilient 