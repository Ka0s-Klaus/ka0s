Deployment Report: core/b2b/core-services/openclaw
Date: Tue Mar 17 13:25:54 UTC 2026
Trigger: push by asantacana1970
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED NODE   READINESS GATES
openclaw-0   0/1     Pending   0          0s    <none>   <none>   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)            AGE
openclaw   ClusterIP   10.101.236.82   <none>        80/TCP,18791/TCP   0s

>>> Ingress Status:
NAME               CLASS    HOSTS              ADDRESS   PORTS     AGE
openclaw-ingress   <none>   openclaw.ka0s.io             80, 443   0s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: openclaw ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
openclaw-0 Pending
--- Description for openclaw-0 ---
    ClaimName:  openclaw-pvc
    ReadOnly:   false
  openclaw-config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      openclaw-config
    Optional:  false
  kube-api-access-9vgv7:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  1s    default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for openclaw-0 (Current) ---
--> Checking Endpoints for Service openclaw...
WARNING: Service openclaw has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
