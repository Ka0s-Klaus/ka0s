# Trivy Operator (Security Scanner)

**Rol**: Auditoría Continua de Seguridad y Vulnerabilidades.

Este operador escanea automáticamente el cluster en busca de vulnerabilidades (CVEs), secretos expuestos y configuraciones inseguras, integrándose directamente con el Kubernetes Dashboard.

## 🚀 Funcionalidades
*   **Escaneo de Imágenes**: Analiza contenedores en busca de vulnerabilidades conocidas.
*   **Auditoría de Configuración**: Revisa manifiestos contra best practices (CIS Benchmarks).
*   **Integración**: Genera Custom Resources (`VulnerabilityReport`) visibles en el Dashboard.

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/trivy-operator
```

## 📊 Visualización
Los reportes no tienen una UI propia separada; se consumen a través del **Kubernetes Dashboard** en la sección de CRDs (Custom Resource Definitions -> `aquasecurity.github.io`).
