# SOC - Wazuh (Security Operations Center)

**Rol**: Monitorización de Seguridad y SIEM.

Wazuh proporciona detección de intrusiones, análisis de logs de seguridad, y monitorización de integridad de ficheros.

## 🚀 Componentes
*   **Wazuh Manager**: El cerebro que analiza los datos.
*   **Wazuh Indexer**: Almacenamiento de alertas (basado en OpenSearch).
*   **Wazuh Dashboard**: Interfaz gráfica para analistas de seguridad.
*   **Wazuh Agent**: Agente desplegado en los nodos (DaemonSet) para recolectar datos.

## 📡 Accesibilidad

*   **Dashboard**: `https://192.168.1.241` (IP Estática configurada en LoadBalancer).
    *   *Nota*: Verificar IP en `wazuh-dashboard.yaml`.

## 🔐 Credenciales (Por Defecto)
*   **Usuario**: `admin`
*   **Password**: `admin`
    *   *⚠️ IMPORTANTE*: Cambiar estas credenciales inmediatamente tras el primer login.

## 🛠️ Despliegue

```bash
kubectl apply -k core/b2b/core-services/soc
```
