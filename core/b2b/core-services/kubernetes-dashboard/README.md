# Kubernetes Dashboard - Ka0s Ecosystem Hub

**Versión**: v2.7.0
**Rol**: Centro de Operaciones Unificado del Cluster.

Este módulo despliega la interfaz gráfica oficial de Kubernetes, vitaminada para servir como punto central de observabilidad y seguridad para el proyecto Ka0s.

## 🚀 Funcionalidades Integradas

Este dashboard está diseñado para ser el cerebro del cluster. Para la experiencia completa de "Centro de Ecosistema", trabaja en conjunto con:

1.  **Métricas de Rendimiento**: Visualización de gráficas de consumo (CPU/RAM) de Pods y Nodos.
    *   *Dependencia*: Requiere el módulo `../metrics-server` desplegado.
2.  **Auditoría de Seguridad (SecOps)**: Visualización de vulnerabilidades (CVEs) y malas configuraciones.
    *   *Dependencia*: Requiere el módulo `../trivy-operator` desplegado.
    *   *Visualización*: Navegar a **Custom Resource Definitions** -> **aquasecurity.github.io** dentro del dashboard.

## 📡 Accesibilidad

El servicio se expone mediante doble vía para garantizar el acceso:

1.  **Dominio (Ingress)**: `https://dashboard.ka0s.io`
    *   Requiere resolución DNS local o en `/etc/hosts` apuntando a la IP del Ingress Controller.
2.  **IP Directa (LoadBalancer)**: `https://<EXTERNAL-IP>`
    *   Asignada dinámicamente por MetalLB.
    *   Descubrir IP: `kubectl get svc -n kubernetes-dashboard kubernetes-dashboard`

## 🛠️ Guía de Despliegue

### Opción A: Automático (CI/CD) - **Recomendado**
Este proyecto sigue la filosofía **GitOps**.
1.  Modifica cualquier fichero en `core/b2b/core-services/kubernetes-dashboard/`.
2.  Haz **Commit** y **Push** a la rama `main`.
3.  El workflow **CD Core Services Deploy** (`cd-core-services.yml`) se disparará automáticamente.
4.  Verifica el resultado en la carpeta `audit/deploy/` del repositorio.

### Opción B: Manual (Emergencia)
Para desplegar directamente desde la terminal local:

```bash
# Desde la raíz del repositorio
kubectl apply -k core/b2b/core-services/kubernetes-dashboard
```

## 🔐 Autenticación

El acceso está securizado mediante Token Bearer. Existe un usuario administrador preconfigurado: `admin-user`.

**Comando para obtener el Token:**
```bash
kubectl -n kubernetes-dashboard create token admin-user
```
*(Copia el token resultante y pégalo en la pantalla de login)*.

---
> **Nota**: El certificado SSL es autofirmado. Debes aceptar la advertencia de seguridad del navegador para acceder.
