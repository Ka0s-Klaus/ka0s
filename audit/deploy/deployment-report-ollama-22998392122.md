Deployment Report: core/b2b/core-services/ollama
Date: Thu Mar 12 10:53:50 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
ollama-665c5dfc75-p5h2k   0/1     Pending     0          7m1s    <none>          <none>       <none>           <none>
ollama-86c654c85c-k4gmf   1/1     Running     0          165m    172.16.209.28   k8-node-20   <none>           <none>
pull-llama3-2-5fdjv       0/1     Completed   0          3h41m   172.16.209.26   k8-node-20   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   3h41m

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      3h41m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
ollama-665c5dfc75-p5h2k Pending
--- Description for ollama-665c5dfc75-p5h2k ---
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-ktjg4:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              kubernetes.io/hostname=k8-manager
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  7m1s                   default-scheduler  0/4 nodes are available: 1 node(s) didn't match Pod's node affinity/selector, 1 node(s) had untolerated taint {restricted: true}, 1 node(s) had volume node affinity conflict, 1 node(s) were unschedulable. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  6m57s (x2 over 6m59s)  default-scheduler  0/4 nodes are available: 1 node(s) didn't match Pod's node affinity/selector, 1 node(s) had untolerated taint {restricted: true}, 1 node(s) had volume node affinity conflict, 1 node(s) were unschedulable. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for ollama-665c5dfc75-p5h2k (Current) ---
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.28
=== Verification Successful (with possible warnings) ===
