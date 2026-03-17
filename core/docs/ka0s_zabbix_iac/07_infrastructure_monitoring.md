# Monitorización de Infraestructura Web (Ingress Nginx)

## Estrategia
El controlador Ingress Nginx es la puerta de entrada a todos los servicios web de Ka0s (Docs Portal, iTop, Metabase, etc.). Por tanto, su disponibilidad y rendimiento son críticos.
En lugar de monitorizar cada pod de Nginx con un sidecar de Zabbix, aprovechamos que el controlador Ingress Nginx expone nativamente un endpoint de métricas en formato Prometheus en el puerto `10254`.

### Integración con Zabbix
Hemos configurado un Host lógico en Zabbix llamado **"Ingress Nginx"** que se conecta directamente a este endpoint interno.

*   **DNS Interno**: `ingress-nginx-controller-metrics.ingress-nginx.svc.cluster.local`
*   **Puerto**: `10254`
*   **Template**: `Nginx by HTTP` (adaptado para consumir el endpoint `/healthz` o `/metrics`).

## Métricas Clave Recopiladas
1.  **Estado del Servicio**: Comprobación HTTP periódica para asegurar que el controlador responde.
2.  **Rendimiento Go/Nginx**: Uso de CPU, memoria, recolección de basura (GC) y goroutines, extraídos directamente del endpoint `/metrics` que el controlador expone internamente.
3.  **Tasa de Errores**: Identificación temprana de incrementos en errores 502/504 (Bad Gateway) que suelen indicar problemas en los backends (los pods de las aplicaciones).

---

# Monitorización de Cluster de Kubernetes (Metrics Server)

## Estrategia
Para tener una visión global del estado de los nodos y pods, Ka0s integra **Metrics Server** en el namespace `kube-system`. Esto permite a herramientas como `kubectl top` y Zabbix obtener datos agregados de uso de CPU y Memoria a nivel de clúster.

### Integración con Zabbix
Zabbix monitoriza el clúster comunicándose directamente con la API de Kubernetes. Para esto, utiliza un ServiceAccount dedicado llamado `zabbix-service-account`.

1.  **Autenticación**: El token de este ServiceAccount se extrae del secreto `zabbix-service-account-token`.
2.  **Inyección de Macros**: El token se inyecta como macro `{$KUBE.API.TOKEN}` en el host "Kubernetes Cluster" en Zabbix.
3.  **Endpoint API**: El host de Zabbix apunta a la IP de la API de Kubernetes (`10.96.0.1` o el DNS interno `kubernetes.default.svc.cluster.local`).

### Beneficios
*   **Descubrimiento Automático (LLD)**: Zabbix descubre automáticamente nuevos Nodos, Namespaces y Pods a través de la API.
*   **Métricas de Recursos**: Recopila CPU y Memoria de cada pod basándose en los datos proporcionados por el *Metrics Server*.
*   **Estado de Despliegues**: Alerta si un Deployment no alcanza el número de réplicas deseadas.
