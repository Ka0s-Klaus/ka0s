Deployment Report: core/b2b/core-services/ollama
Date: Wed Mar 25 16:59:19 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
ollama-6f446b574c-859wf   0/1     Pending     0          60s     <none>          <none>       <none>           <none>
ollama-b6fbb6876-lp9vf    1/1     Running     0          61m     172.16.209.60   k8-node-20   <none>           <none>
pull-llama3-1-8b-5hxbz    0/1     Completed   0          7h18m   172.16.74.18    k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed   0          6d7h    <none>          k8-manager   <none>           <none>

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
ollama-6f446b574c-859wf Pending
--- Description for ollama-6f446b574c-859wf ---
  PodScheduled   False 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-rkzbx:
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
  Warning  FailedScheduling  60s   default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 1 node(s) had untolerated taint {restricted: true}, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/4 nodes are available: 1 No preemption victims found for incoming pod, 3 Preemption is not helpful for scheduling.
--- Logs for ollama-6f446b574c-859wf (Current) ---
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.60
=== Verification Successful (with possible warnings) ===
