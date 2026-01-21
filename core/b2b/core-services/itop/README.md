# Módulo iTop ITSM

Este módulo contiene la configuración para desplegar iTop (IT Service Management) en Kubernetes.

## 📚 Documentación

La documentación completa de este módulo se ha movido a una ubicación centralizada para facilitar su mantenimiento y lectura.

👉 **[Ver Documentación Completa](../../../../docs/ka0s_itop/README.md)**

## Contenido Rápido

*   **Despliegue**: `kubectl apply -k .`
*   **Servicios**:
    *   `itop`: Frontend web (LoadBalancer).
    *   `mysql`: Base de datos (ClusterIP).
