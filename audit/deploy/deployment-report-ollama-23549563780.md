Deployment Report: core/b2b/core-services/ollama
Date: Wed Mar 25 15:37:29 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS      RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
ollama-7447d8475b-6lqcp   1/1     Running     0          5h44m   172.16.74.32   k8-manager   <none>           <none>
ollama-84cb7965dd-vdk74   0/1     Pending     0          60s     <none>         <none>       <none>           <none>
pull-llama3-1-8b-5hxbz    0/1     Completed   0          5h56m   172.16.74.18   k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed   0          6d6h    <none>         k8-manager   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   13d

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      13d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
ollama-84cb7965dd-vdk74 Pending
--- Description for ollama-84cb7965dd-vdk74 ---
  PodScheduled   False 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-dczjw:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/ollama-node=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  60s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 Insufficient gpu.intel.com/i915, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for ollama-84cb7965dd-vdk74 (Current) ---
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.74.32
=== Verification Successful (with possible warnings) ===
