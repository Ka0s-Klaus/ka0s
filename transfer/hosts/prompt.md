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