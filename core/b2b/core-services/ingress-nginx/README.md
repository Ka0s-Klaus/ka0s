# Ingress NGINX Controller

Este directorio contiene la configuración para desplegar el **NGINX Ingress Controller**.
Este componente actuará como el **único punto de entrada** (Reverse Proxy) para el clúster, permitiendo enrutar tráfico basado en dominios (FQDN) usando una sola IP pública/interna.

## 🚀 Arquitectura
1.  **Router**: Redirige puertos 80/443 a la IP del Ingress Controller (`192.168.1.250`).
2.  **Ingress Controller**: Recibe el tráfico y lee la cabecera `Host` (ej. `planka.ka0s.io`).
3.  **Service**: Enruta al pod correspondiente dentro del clúster.

## 🛠️ Despliegue
```bash
kubectl apply -k .
```

## 📋 Configuración
*   **IP Asignada**: `192.168.1.250` (Configurada en `service-loadbalancer-patch.yaml`).
*   **Versión**: v1.12.0 (Baremetal).

## 🔒 Próximos Pasos
Una vez desplegado, debes crear recursos `Ingress` para cada servicio (Planka, iTop, etc.) en lugar de usar `LoadBalancer` directo.
