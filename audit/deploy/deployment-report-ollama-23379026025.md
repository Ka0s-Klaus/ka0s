Deployment Report: core/b2b/core-services/ollama
Date: Sat Mar 21 11:50:53 UTC 2026
Trigger: push by ka0score
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS        RESTARTS   AGE    IP             NODE         NOMINATED NODE   READINESS GATES
ollama-5bb8fddf7c-8zgzm   1/1     Terminating   0          28h    172.16.74.50   k8-manager   <none>           <none>
ollama-686fdf96c-kf25j    1/1     Running       0          3s     172.16.74.19   k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed     0          2d2h   <none>         k8-manager   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   9d

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      9d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
ollama-5bb8fddf7c-8zgzm Terminating
--- Description for ollama-5bb8fddf7c-8zgzm ---
  PodScheduled                True 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-r2htf:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  0s    kubelet  Stopping container ollama
--- Logs for ollama-5bb8fddf7c-8zgzm (Current) ---
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:30:40 | 200 |  1.597443699s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:30:42 | 200 |  1.026089417s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:30:44 | 200 |  1.021864929s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:30:56 | 200 |  1.015172411s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:30:58 | 200 |   1.00326783s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:31:00 | 200 |  1.170705183s |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:31:02 | 200 |  997.431482ms |   172.16.209.12 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:10 | 200 |  1.001151416s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:12 | 200 |    1.0096613s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:15 | 200 |  1.656310518s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:17 | 200 |  1.575389116s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:19 | 200 |  963.730588ms |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:22 | 200 |  1.671252717s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:24 | 200 |  1.066651016s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:26 | 200 |  1.013113239s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:28 | 200 |  1.030069979s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:31 | 200 |  1.703799171s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:33 | 200 |  1.036426601s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:35 | 200 |  1.821251921s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:37 | 200 |  1.047259697s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:39 | 200 |  1.078884657s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 02:40:42 | 200 |  1.668199899s |   172.16.209.28 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:10 | 200 |  960.302396ms |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:12 | 200 |  1.037150596s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:15 | 200 |  1.706323368s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:17 | 200 |  1.164182768s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:19 | 200 |  988.308892ms |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:21 | 200 |  1.016660035s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:23 | 200 |  1.117934475s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:25 | 200 |  1.025905877s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:27 | 200 |  987.943376ms |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:30 | 200 |  1.629664658s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:32 | 200 |  1.003401315s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:35 | 200 |  1.706551868s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:36 | 200 |  967.327289ms |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:38 | 200 |  1.062055077s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:40 | 200 |  1.041930163s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:43 | 200 |  1.691780921s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:45 | 200 |  1.221425695s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:47 | 200 |  1.319964492s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:49 | 200 |  995.750474ms |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:00:51 | 200 |  1.022752545s |   172.16.209.41 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:12 | 200 |  1.518340147s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:15 | 200 |  1.674004227s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:18 | 200 |  1.826722204s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:20 | 200 |  1.063704515s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:21 | 200 |   1.02529565s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 07:10:23 | 200 |  1.044192733s |   172.16.209.47 | POST     "/api/embeddings"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 11:49:56 | 200 |    2.169126ms |   172.16.209.20 | GET      "/api/tags"
[pod/ollama-5bb8fddf7c-8zgzm/ollama] [GIN] 2026/03/21 - 11:49:57 | 200 |  600.269167ms |   172.16.209.20 | POST     "/api/pull"
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.74.19
=== Verification Successful (with possible warnings) ===
