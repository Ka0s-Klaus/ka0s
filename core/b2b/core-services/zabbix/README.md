# Zabbix - Monitoring Solution

**Rol**: Monitorización de Infraestructura y Redes.

Zabbix es la solución principal para monitorizar el estado del hardware, red y servicios base del cluster.

## 🚀 Componentes
*   **Zabbix Server**: Núcleo de procesamiento.
*   **Zabbix Web**: Interfaz de administración.
*   **Zabbix Agent**: DaemonSet en cada nodo para métricas de sistema operativo.

## 📡 Accesibilidad
*   **Web Interface**: Expuesta vía Servicio.
    *   Comando: `kubectl get svc -n zabbix`

## 🛠️ Despliegue

```bash
kubectl apply -k core/b2b/core-services/zabbix
```

## ⚙️ Integraciones
*   Plantillas personalizadas para Kubernetes (`zabbix_k8s_*.xml`).
*   Integración con iTop (`zabbix_itop_action.yaml`).
