Deployment Report: core/b2b/core-services/ollama
Date: Wed Mar 25 09:52:48 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS        RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
ollama-7447d8475b-6lqcp   1/1     Running       0          3s    172.16.74.32   k8-manager   <none>           <none>
ollama-cd58d85b-pg499     1/1     Terminating   0          23h   172.16.74.30   k8-manager   <none>           <none>
pull-llama3-1-8b-5hxbz    0/1     Completed     0          12m   172.16.74.18   k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed     0          6d    <none>         k8-manager   <none>           <none>

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
ollama-cd58d85b-pg499 Terminating
--- Description for ollama-cd58d85b-pg499 ---
  PodScheduled                True 
Volumes:
  models:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  ollama-pvc
    ReadOnly:   false
  kube-api-access-xqm9v:
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
--- Logs for ollama-cd58d85b-pg499 (Current) ---
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - kv  24:                      tokenizer.ggml.merges arr[str,280147]  = ["Ġ Ġ", "Ġ ĠĠĠ", "ĠĠ ĠĠ", "...
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - kv  25:                tokenizer.ggml.bos_token_id u32              = 128000
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - kv  26:                tokenizer.ggml.eos_token_id u32              = 128009
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - kv  27:                    tokenizer.chat_template str              = {{- bos_token }}\n{%- if custom_tools ...
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - kv  28:               general.quantization_version u32              = 2
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - type  f32:   66 tensors
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - type q4_K:  193 tensors
[pod/ollama-cd58d85b-pg499/ollama] llama_model_loader: - type q6_K:   33 tensors
[pod/ollama-cd58d85b-pg499/ollama] print_info: file format = GGUF V3 (latest)
[pod/ollama-cd58d85b-pg499/ollama] print_info: file type   = Q4_K - Medium
[pod/ollama-cd58d85b-pg499/ollama] print_info: file size   = 4.58 GiB (4.89 BPW) 
[pod/ollama-cd58d85b-pg499/ollama] load: printing all EOG tokens:
[pod/ollama-cd58d85b-pg499/ollama] load:   - 128001 ('<|end_of_text|>')
[pod/ollama-cd58d85b-pg499/ollama] load:   - 128008 ('<|eom_id|>')
[pod/ollama-cd58d85b-pg499/ollama] load:   - 128009 ('<|eot_id|>')
[pod/ollama-cd58d85b-pg499/ollama] load: special tokens cache size = 256
[pod/ollama-cd58d85b-pg499/ollama] load: token to piece cache size = 0.7999 MB
[pod/ollama-cd58d85b-pg499/ollama] print_info: arch             = llama
[pod/ollama-cd58d85b-pg499/ollama] print_info: vocab_only       = 1
[pod/ollama-cd58d85b-pg499/ollama] print_info: no_alloc         = 0
[pod/ollama-cd58d85b-pg499/ollama] print_info: model type       = ?B
[pod/ollama-cd58d85b-pg499/ollama] print_info: model params     = 8.03 B
[pod/ollama-cd58d85b-pg499/ollama] print_info: general.name     = Meta Llama 3.1 8B Instruct
[pod/ollama-cd58d85b-pg499/ollama] print_info: vocab type       = BPE
[pod/ollama-cd58d85b-pg499/ollama] print_info: n_vocab          = 128256
[pod/ollama-cd58d85b-pg499/ollama] print_info: n_merges         = 280147
[pod/ollama-cd58d85b-pg499/ollama] print_info: BOS token        = 128000 '<|begin_of_text|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOS token        = 128009 '<|eot_id|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOT token        = 128009 '<|eot_id|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOM token        = 128008 '<|eom_id|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: LF token         = 198 'Ċ'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOG token        = 128001 '<|end_of_text|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOG token        = 128008 '<|eom_id|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: EOG token        = 128009 '<|eot_id|>'
[pod/ollama-cd58d85b-pg499/ollama] print_info: max token length = 256
[pod/ollama-cd58d85b-pg499/ollama] llama_model_load: vocab only - skipping tensors
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.701Z level=INFO source=server.go:430 msg="starting runner" cmd="/usr/bin/ollama runner --model /root/.ollama/models/blobs/sha256-667b0c1932bc6ffc593ed1d03f895bf2dc8dc6df21db3042284a6f4416b06a29 --port 42597"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.701Z level=INFO source=sched.go:484 msg="system memory" total="10.0 GiB" free="4.6 GiB" free_swap="0 B"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.701Z level=INFO source=server.go:497 msg="loading model" "model layers"=33 requested=-1
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.702Z level=INFO source=server.go:1034 msg="model requires more system memory than is currently available, evicting a model to make space" required=5691138048 free=4897046528
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.728Z level=INFO source=runner.go:965 msg="starting go runner"
[pod/ollama-cd58d85b-pg499/ollama] load_backend: loaded CPU backend from /usr/lib/ollama/libggml-cpu-haswell.so
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.739Z level=INFO source=ggml.go:104 msg=system CPU.0.SSE3=1 CPU.0.SSSE3=1 CPU.0.AVX=1 CPU.0.AVX2=1 CPU.0.F16C=1 CPU.0.FMA=1 CPU.0.BMI2=1 CPU.0.LLAMAFILE=1 CPU.1.LLAMAFILE=1 compiler=cgo(gcc)
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.740Z level=INFO source=runner.go:1001 msg="Server listening on 127.0.0.1:42597"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.754Z level=WARN source=cpu_linux.go:130 msg="failed to parse CPU allowed micro secs" error="strconv.ParseInt: parsing \"max\": invalid syntax"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.861Z level=INFO source=sched.go:484 msg="system memory" total="10.0 GiB" free="4.8 GiB" free_swap="0 B"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.861Z level=INFO source=server.go:497 msg="loading model" "model layers"=33 requested=-1
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.861Z level=WARN source=server.go:1044 msg="model request too large for system" requested="5.3 GiB" available="4.8 GiB" total="10.0 GiB" free="4.8 GiB" swap="0 B"
[pod/ollama-cd58d85b-pg499/ollama] time=2026-03-25T09:45:06.861Z level=INFO source=sched.go:511 msg="Load failed" model=/root/.ollama/models/blobs/sha256-667b0c1932bc6ffc593ed1d03f895bf2dc8dc6df21db3042284a6f4416b06a29 error="model requires more system memory (5.3 GiB) than is available (4.8 GiB)"
[pod/ollama-cd58d85b-pg499/ollama] [GIN] 2026/03/25 - 09:45:06 | 500 |  1.404291251s |    172.16.209.5 | POST     "/api/chat"
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.74.32
=== Verification Successful (with possible warnings) ===
