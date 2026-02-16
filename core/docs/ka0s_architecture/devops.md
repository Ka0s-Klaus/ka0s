# Arquitectura: DevOps (Operaciones y Mantenimiento)

## Descripción General

El directorio `devops/` centraliza los **scripts operativos y herramientas de mantenimiento** del clúster y sus servicios. A diferencia de `.github` (que orquesta) o `core/b2b` (que define infraestructura), `devops/` contiene la lógica imperativa ("los músculos") para ejecutar tareas de administración, auditoría profunda y remediación en los servidores.

## Componentes Principales

### 1. Core (`devops/core/`)
Contiene scripts organizados por dominio técnico:

#### a. K8s (`devops/core/k8s/`) - Gestión de Kubernetes
Scripts para auditar y manipular el estado del clúster:
- **Auditoría**: `audit-services-status.sh` (genera reportes HTML/MD del estado), `audit-failed-pods.sh`.
- **Seguridad**: `security-audit-*.sh` (auditorías de RBAC, red y vulnerabilidades con Trivy).
- **Operación**: `cluster-restart.sh`, `force-delete-namespace.sh` (remediación de emergencia).

#### b. Host (`devops/core/host/`) - Gestión de Servidores
Scripts que operan a nivel de Sistema Operativo (Ubuntu/Linux) en los nodos:
- **Mantenimiento**: `system-update.sh` (actualización de paquetes `apt`, reinicios coordinados).
- **Verificación**: `test.sh` (validaciones de conectividad y estado del host).

#### c. iTop (`devops/core/itop/`)
Scripts específicos para la integración con la CMDB iTop (ej. creación de usuarios API).

## Patrón de Ejecución

Estos scripts están diseñados para ser ejecutados de dos formas:
1. **Automática**: Invocados por GitHub Actions (vía `ssh-exec`) para tareas programadas (ej. reporte diario de clúster).
2. **Manual**: Ejecutados por administradores conectándose vía SSH al `k8-manager` para tareas de mantenimiento puntual o depuración.

## Flujo de Información
1. **GitHub Action** dispara un evento (ej. Schedule).
2. **Runner** conecta vía SSH al nodo Manager.
3. **Manager** ejecuta un script de `devops/core/`.
4. **Script** genera resultados (JSON/HTML/MD).
5. **Runner** recoge los resultados y los deposita en `audit/` (el Cerebro de Evidencias).
