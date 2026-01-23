# Monitoreo de Servicios y Pods de Kubernetes en Zabbix

Esta guía explica cómo configurar el monitoreo automático de Servicios y Pods de Kubernetes en Zabbix utilizando scripts externos y la API de Kubernetes.

## Características

- **Descubrimiento de Servicios**: Detecta automáticamente los servicios en todos los namespaces.
- **Monitoreo de Endpoints**: Alerta si un servicio no tiene endpoints activos (pods detrás).
- **Descubrimiento de Pods**: Detecta automáticamente todos los pods en estado `Running`.
- **Métricas de Recursos**: Gráficas de consumo de CPU (millicores) y Memoria (Bytes) por Pod.

## Requisitos Previos

1. **Zabbix Server** desplegado en el clúster (namespace `zabbix`).
2. **ServiceAccount** con permisos de lectura (Role/ClusterRole) sobre `nodes`, `services`, `endpoints` y `pods`.
3. **Metrics Server** instalado y funcionando en el clúster (para las métricas de CPU/RAM).

## Instalación

### 1. Aplicar Scripts de Monitoreo

Los scripts se cargan mediante un ConfigMap montado en el contenedor del Zabbix Server.

```bash
kubectl apply -f zabbix-scripts.yaml
# Reiniciar el deployment para asegurar que los scripts se monten correctamente
kubectl rollout restart deployment zabbix-server -n zabbix
```

### 2. Importar Template en Zabbix

1. Accede a la interfaz web de Zabbix.
2. Ve a **Data collection** > **Templates**.
3. Haz clic en **Import** (arriba a la derecha).
4. Selecciona el archivo `zabbix_k8s_services_template.xml`.
5. Marca la opción **Update existing** para actualizar si ya lo tenías.
6. Haz clic en **Import**.

### 3. Vincular al Host

1. Ve a **Data collection** > **Hosts**.
2. Selecciona tu host "Zabbix Server" (o el que representa al clúster).
3. En la pestaña **Templates**, añade `Template Kubernetes Services Discovery`.
4. Espera unos minutos (el intervalo de descubrimiento es de 5 minutos por defecto).

## Solución de Problemas

- **Gráficas sin datos**: Verifica que el pod de Zabbix pueda resolver `kubernetes.default.svc` y tenga token válido en `/var/run/secrets/kubernetes.io/serviceaccount/token`.
- **Error de UUID**: Asegúrate de usar la versión del template donde se han eliminado los guiones de los UUIDs (formato 32 caracteres).
- **Metrics API**: Si las gráficas de recursos están vacías, verifica que `kubectl top pods` funcione en el clúster.
