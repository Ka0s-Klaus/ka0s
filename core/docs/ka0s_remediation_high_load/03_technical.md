# Estrategia de Mitigación de Carga Alta (High Load) en Control Plane

## 1. Contexto del Problema
El nodo `k8-manager` está sufriendo incidentes recurrentes de "High Load" (Load Average > Cores).
- **Diagnóstico**: Workloads de aplicación (ej: Metabase, Java Apps) están siendo programados en el nodo Control Plane, compitiendo por recursos con `kube-apiserver` y `etcd`.
- **Causa Raíz**: Falta de aislamiento del Control Plane (Taints) o falta de reglas de afinidad en los Deployments.

## 2. Solución Estratégica
El objetivo es aislar el plano de control para garantizar la estabilidad del clúster.

### A. Aislamiento del Nodo (Infrastructure Level)
Aplicar "Taints" al nodo `k8-manager` para repeler cargas de trabajo generales.
```bash
kubectl taint nodes k8-manager node-role.kubernetes.io/control-plane:NoSchedule --overwrite
```
*Nota: Si el clúster es de un solo nodo, esta medida no es aplicable (se debe optar por Límites de Recursos estrictos).*

### B. Reglas de Afinidad (Application Level)
Modificar los manifiestos de las aplicaciones críticas (Metabase, etc.) para que prefieran ejecutarse en nodos "Worker".

**Cambio en `deployment.yaml`:**
```yaml
spec:
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: node-role.kubernetes.io/worker
                operator: Exists
```

### C. Ajuste de Monitorización (Observability Level)
La alerta de Zabbix "Load average is too high" puede ser demasiado sensible para picos transitorios.
- **Acción**: Aumentar el umbral de disparo o el tiempo de persistencia (hysteresis).
- **Propuesta**: Load Avg > (Cores * 1.5) durante 5 minutos.

### D. Límites de Recursos (Resource Quotas)
Asegurar que ningún Pod pueda consumir más CPU/RAM de la asignada, evitando el "ruidoso vecino".
- **Metabase**: Ya tiene límites (2Gi/1CPU), pero se recomienda ajustar `requests` para garantizar QoS "Burstable" o "Guaranteed".

## 3. Plan de Implementación
1.  **Aplicar Affinity** a Metabase Deployment.
2.  **Validar** que Metabase se reprograme en otro nodo (si existe).
3.  **Taint** al nodo `k8-manager` (Manual/Script).
4.  **Verificar** estabilidad.
