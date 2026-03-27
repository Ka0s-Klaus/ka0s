Deployment Report: core/b2b/core-services/ollama
Date: Fri Mar 27 20:18:35 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                                  READY   STATUS              RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
ollama-6f446b574c-nvm4h               1/1     Running             0          7h56m   172.16.209.23   k8-node-20   <none>           <none>
ollama-embed-fleet-7bb698c49d-2h6sq   1/1     Running             0          8h      172.16.74.54    k8-manager   <none>           <none>
ollama-embed-fleet-7bb698c49d-p8fg2   1/1     Running             0          8h      172.16.74.29    k8-manager   <none>           <none>
ollama-embed-fleet-7bb698c49d-pknk9   1/1     Running             0          8h      172.16.74.39    k8-manager   <none>           <none>
pull-llama3-1-8b-5hxbz                0/1     Completed           0          2d10h   172.16.74.18    k8-manager   <none>           <none>
pull-llama3-2-7b-hjdwx                0/1     ContainerCreating   0          0s      <none>          k8-node-20   <none>           <none>
pull-llama3-2-vn4mj                   0/1     Completed           0          8d      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama         ClusterIP   10.103.245.188   <none>        11434/TCP   15d
ollama-embed   ClusterIP   10.100.80.108    <none>        11434/TCP   27h

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      15d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
pull-llama3-2-7b-hjdwx ContainerCreating
--- Description for pull-llama3-2-7b-hjdwx ---
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-qss8t:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              ka0s.io/ollama-node=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  0s    default-scheduler  Successfully assigned ollama/pull-llama3-2-7b-hjdwx to k8-node-20
  Normal  Pulling    0s    kubelet            Pulling image "curlimages/curl:latest"
--- Logs for pull-llama3-2-7b-hjdwx (Current) ---
Error from server (BadRequest): container "pull-model" in pod "pull-llama3-2-7b-hjdwx" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.23
=== Verification Successful (with possible warnings) ===
