Deployment Report: core/b2b/core-services/ollama
Date: Wed Mar 25 15:39:25 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS        RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
ollama-6fc4d6b99b-n54n7   1/1     Running       0          2s      172.16.74.46   k8-manager   <none>           <none>
ollama-7447d8475b-6lqcp   1/1     Terminating   0          5h46m   172.16.74.32   k8-manager   <none>           <none>
pull-llama3-1-8b-5hxbz    0/1     Completed     0          5h58m   172.16.74.18   k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed     0          6d6h    <none>         k8-manager   <none>           <none>

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
ollama-7447d8475b-6lqcp Terminating
--- Description for ollama-7447d8475b-6lqcp ---
  PodScheduled                True 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-ksvxw:
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
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container ollama
--- Logs for ollama-7447d8475b-6lqcp (Current) ---
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.200Z level=INFO source=server.go:1350 msg="waiting for llama runner to start responding"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.200Z level=INFO source=runner.go:1284 msg=load request="{Operation:commit LoraPath:[] Parallel:1 BatchSize:512 FlashAttention:Disabled KvSize:2048 KvCacheType: NumThreads:2 GPULayers:[] MultiUserCache:false ProjectorPath: MainGPU:0 UseMmap:false}"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.200Z level=INFO source=ggml.go:482 msg="offloading 0 repeating layers to GPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.200Z level=INFO source=ggml.go:486 msg="offloading output layer to CPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.200Z level=INFO source=ggml.go:494 msg="offloaded 0/13 layers to GPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.202Z level=INFO source=server.go:1384 msg="waiting for server to become available" status="llm server loading model"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:23:23 | 200 |  743.037304ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:23:23 | 200 |  880.123073ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:23:23 | 200 |  929.026881ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:23:23.719Z level=INFO source=server.go:1388 msg="llama runner started in 0.72 seconds"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:23:24 | 200 |  1.335424875s |    172.16.209.5 | POST     "/api/embed"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:28:24.757Z level=INFO source=server.go:1568 msg="aborting completion request due to client closing the connection"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:28:24 | 500 |          5m0s |    172.16.209.5 | POST     "/api/chat"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:15 | 200 |     1.32905ms |    172.16.209.5 | GET      "/api/tags"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:15 | 200 |       11.53µs |    172.16.209.5 | GET      "/"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:15 | 200 |  178.107522ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.633Z level=WARN source=cpu_linux.go:130 msg="failed to parse CPU allowed micro secs" error="strconv.ParseInt: parsing \"max\": invalid syntax"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.701Z level=WARN source=server.go:168 msg="requested context size too large for model" num_ctx=8192 n_ctx_train=2048
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.701Z level=WARN source=server.go:208 msg="flash attention enabled but not supported by model"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.701Z level=WARN source=server.go:257 msg="quantized kv cache requested but flash attention disabled" type=q8_0
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.702Z level=INFO source=server.go:430 msg="starting runner" cmd="/usr/bin/ollama runner --ollama-engine --model /root/.ollama/models/blobs/sha256-970aa74c0a90ef7482477cf803618e776e173c007bf957f635f1015bfcfef0e6 --port 42719"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.703Z level=INFO source=sched.go:484 msg="system memory" total="10.0 GiB" free="2.3 GiB" free_swap="0 B"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.703Z level=INFO source=server.go:757 msg="loading model" "model layers"=13 requested=-1
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.775Z level=INFO source=runner.go:1411 msg="starting ollama engine"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.775Z level=INFO source=runner.go:1446 msg="Server listening on 127.0.0.1:42719"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.808Z level=INFO source=runner.go:1284 msg=load request="{Operation:fit LoraPath:[] Parallel:1 BatchSize:512 FlashAttention:Disabled KvSize:2048 KvCacheType: NumThreads:2 GPULayers:[] MultiUserCache:false ProjectorPath: MainGPU:0 UseMmap:false}"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.835Z level=INFO source=ggml.go:136 msg="" architecture=nomic-bert file_type=F16 name=nomic-embed-text-v1.5 description="" num_tensors=112 num_key_values=25
[pod/ollama-7447d8475b-6lqcp/ollama] load_backend: loaded CPU backend from /usr/lib/ollama/libggml-cpu-haswell.so
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.874Z level=INFO source=ggml.go:104 msg=system CPU.0.SSE3=1 CPU.0.SSSE3=1 CPU.0.AVX=1 CPU.0.AVX2=1 CPU.0.F16C=1 CPU.0.FMA=1 CPU.0.BMI2=1 CPU.0.LLAMAFILE=1 CPU.1.LLAMAFILE=1 compiler=cgo(gcc)
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.886Z level=WARN source=runner.go:1219 msg="model does not support caching, setting batch size to context length" batch_size=2048
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.894Z level=INFO source=runner.go:1284 msg=load request="{Operation:alloc LoraPath:[] Parallel:1 BatchSize:512 FlashAttention:Disabled KvSize:2048 KvCacheType: NumThreads:2 GPULayers:[] MultiUserCache:false ProjectorPath: MainGPU:0 UseMmap:false}"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.913Z level=WARN source=runner.go:1219 msg="model does not support caching, setting batch size to context length" batch_size=2048
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.925Z level=INFO source=runner.go:1284 msg=load request="{Operation:commit LoraPath:[] Parallel:1 BatchSize:512 FlashAttention:Disabled KvSize:2048 KvCacheType: NumThreads:2 GPULayers:[] MultiUserCache:false ProjectorPath: MainGPU:0 UseMmap:false}"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.925Z level=INFO source=ggml.go:482 msg="offloading 0 repeating layers to GPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.925Z level=INFO source=ggml.go:486 msg="offloading output layer to CPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.925Z level=INFO source=ggml.go:494 msg="offloaded 0/13 layers to GPU"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.948Z level=INFO source=device.go:245 msg="model weights" device=CPU size="305.6 MiB"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.949Z level=INFO source=device.go:267 msg="compute graph" device=CPU size="234.0 MiB"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.949Z level=INFO source=device.go:272 msg="total memory" size="539.6 MiB"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.950Z level=INFO source=sched.go:561 msg="loaded runners" count=2
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.951Z level=INFO source=server.go:1350 msg="waiting for llama runner to start responding"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:15.959Z level=INFO source=server.go:1384 msg="waiting for server to become available" status="llm server loading model"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:16 | 200 |  744.310922ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:16 | 200 |  904.569461ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:16 | 200 |  955.040212ms |    172.16.209.5 | POST     "/api/show"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:30:16.469Z level=INFO source=server.go:1388 msg="llama runner started in 0.77 seconds"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:30:16 | 200 |  1.327905618s |    172.16.209.5 | POST     "/api/embed"
[pod/ollama-7447d8475b-6lqcp/ollama] time=2026-03-25T15:35:18.031Z level=INFO source=server.go:1568 msg="aborting completion request due to client closing the connection"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:35:18 | 500 |          5m1s |    172.16.209.5 | POST     "/api/chat"
[pod/ollama-7447d8475b-6lqcp/ollama] [GIN] 2026/03/25 - 15:39:25 | 200 |        33m58s |    172.16.209.5 | POST     "/api/chat"
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.74.46
=== Verification Successful (with possible warnings) ===
