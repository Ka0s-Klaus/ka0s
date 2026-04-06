# Regla 012: Filosofía de Ejecución

Principios rectores para el diseño de automatizaciones y operaciones en Ka0s.

## 1. GitOps Puro
El repositorio es la Única Fuente de Verdad.
- No crees nuevas carpetas raíz; reutiliza las existentes (`.github/`, `core/`, `devops/`, `audit/`, `compliance/`).
- Todo cambio en producción debe provenir de un Commit/PR.

## 2. Idempotencia
Todo script o automatización debe poder ejecutarse N veces sin efectos adversos.
- **Detectar**: Verificar estado actual.
- **Reconciliar**: Aplicar cambios solo si es necesario (Delta).
- **Registrar**: Dejar evidencia en `audit/`.

## 3. Autocuración (Self-Healing)
El objetivo final es la autonomía.
1.  **Detectar** anomalía (Monitorización).
2.  **Consultar** CMDB (iTop) para contexto.
3.  **Actuar** (Script de remediación).
4.  **Registrar** resultado (Evidencia).

## 4. Infraestructura de Ejecución
- Los workflows de GitHub Actions deben usar `runs-on: swarm-runners-scaleset-ka0s` para ejecución en infraestructura propia.
- Ciclo de vida estándar: `Setup -> Execute -> Verify (Inspector) -> Teardown`.
