# Metrics Server (v0.7.0)

**Rol**: Proveedor de Métricas de Recursos (CPU/RAM).

Componente esencial que recolecta métricas de uso de recursos de los contenedores y nodos, habilitando:
1.  Gráficas en el **Kubernetes Dashboard**.
2.  Auto-escalado horizontal de Pods (HPA).
3.  Comando `kubectl top`.

## ⚙️ Configuración Especial
Se ha aplicado el parche `--kubelet-insecure-tls` para permitir el funcionamiento en entornos con certificados autofirmados (típico en clusters on-premise/locales).

## 🛠️ Guía de Despliegue

### Opción A: Automático (GitOps)
Commit y Push a `main`.

### Opción B: Manual
```bash
kubectl apply -k core/b2b/core-services/metrics-server
```

## ✅ Verificación
Tras unos minutos del despliegue:
```bash
kubectl top nodes
```
Debe devolver valores de CPU y Memoria.
