# Integración Técnica y Detalles de Implementación

Este documento detalla los componentes técnicos que hacen posible la automatización.

## Requisitos Previos
*   **GitHub Actions Runner**: Un runner self-hosted con acceso al cluster Kubernetes (`swarm-runners-scaleset`).
*   **Acceso SSH**: El runner utiliza un túnel SSH (`kubectl-tunnel` action) para comunicarse con el API server si no está en la misma red directa, o usa credenciales configuradas.
*   **Herramientas en el Runner**:
    *   `kubectl`
    *   `trivy` (instalado dinámicamente si falta)
    *   `git`

## Detalles de los Workflows

### 1. CI Validate (`ci-k8s-validate.yml`)
*   **Lógica de Detección**: Usa `git diff` contra la rama base (`HEAD~1` o `main`) para identificar carpetas modificadas en `core/b2b/core-services/`.
*   **Sanitización**: Convierte nombres de rama con `/` (ej. `feat/nueva`) a `-` (ej. `feat-nueva`) para evitar errores al crear archivos de reporte.

### 2. CD Deploy (`cd-core-services.yml`)
*   **Detección de Namespace**: Implementa una lógica heurística para saber dónde desplegar:
    1.  Busca `namespace:` en `kustomization.yaml`.
    2.  Busca recursos `kind: Namespace` en archivos YAML.
    3.  Usa el nombre del directorio como fallback.
*   **Verificación**: Invoca el script `.github/scripts/k8s-verify-deployment.sh`.

## Script de Verificación (`k8s-verify-deployment.sh`)

Este script es el corazón de la validación de calidad (QA) automática.

### Parámetros
```bash
./k8s-verify-deployment.sh <NAMESPACE> <SERVICE_NAME> [EXPECTED_IP]
```

### Lógica de Verificación
1.  **Check de Pods**:
    *   Obtiene todos los pods del namespace.
    *   Falla si encuentra alguno que NO esté en estado `Running` o `Completed`.
2.  **Check de IP (Opcional)**:
    *   Si se pasa el argumento `EXPECTED_IP`, verifica que el Servicio tenga esa IP en `externalIPs` o `status.loadBalancer.ingress[0].ip`.
    *   Crítico para servicios como iTop que dependen de MetalLB.
3.  **Check de Endpoints**:
    *   Verifica que el servicio tenga endpoints backend asignados.
    *   Esto confirma que los selectores del Servicio coinciden con los Labels de los Pods.

## Mantenimiento

### Añadir un Nuevo Servicio
Simplemente crea una carpeta en `core/b2b/core-services/<nuevo-servicio>` con un `kustomization.yaml`. El sistema lo detectará automáticamente.

### Modificar Reglas de Validación
Editar `.github/workflows/ci-k8s-validate.yml` para cambiar la severidad de Trivy o añadir linters adicionales (como `kubeval` o `datree`).
