Deployment Report: core/b2b/core-services/ollama
Date: Thu Mar 12 07:22:54 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
ollama-6d9bdb7598-b9tkn   0/1     Pending   0          10m   <none>          <none>       <none>           <none>
pull-llama3-2-5fdjv       1/1     Running   0          10m   172.16.209.26   k8-node-20   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   10m

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      10m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
ollama-6d9bdb7598-b9tkn Pending
--- Description for ollama-6d9bdb7598-b9tkn ---
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-lfn48:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              nvidia.com/gpu=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age                  From               Message
  ----     ------            ----                 ----               -------
  Warning  FailedScheduling  10m                  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  20s (x2 over 5m20s)  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for ollama-6d9bdb7598-b9tkn (Current) ---
--> Checking Endpoints for Service ollama...
WARNING: Service ollama has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
