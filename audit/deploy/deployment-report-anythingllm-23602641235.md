Deployment Report: core/b2b/core-services/anythingllm
Date: Thu Mar 26 15:26:54 UTC 2026
Trigger: push by asantacana1970
Namespace: anythingllm
---------------------------------------------------
>>> Pods Status:
NAME                           READY   STATUS        RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
anythingllm-7df597bd66-f8nph   1/1     Running       0          6s      172.16.74.20    k8-manager   <none>           <none>
anythingllm-85cfbbb9bb-6k29w   1/1     Terminating   0          4h39m   172.16.74.0     k8-manager   <none>           <none>
pull-nomic-embed-text-tmcvn    0/1     Completed     0          6s      172.16.209.22   k8-node-20   <none>           <none>

>>> Services Status:
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
anythingllm   ClusterIP   10.107.160.163   <none>        3001/TCP   5d3h

>>> Ingress Status:
NAME                  CLASS    HOSTS                 ADDRESS         PORTS   AGE
anythingllm-ingress   <none>   anythingllm.ka0s.io   192.168.1.250   80      5d3h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: anythingllm ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
anythingllm-85cfbbb9bb-6k29w Terminating
--- Description for anythingllm-85cfbbb9bb-6k29w ---
  PodScheduled                True 
Volumes:
  data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  anythingllm-pvc
    ReadOnly:   false
  kube-api-access-v9zld:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-manager
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container anythingllm
--- Logs for anythingllm-85cfbbb9bb-6k29w (Current) ---
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] Invalid `prisma.workspace_chats.update()` invocation:
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] 
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] 
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] Error occurred during query execution:
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] ConnectorError(ConnectorError { user_facing_error: None, kind: ConnectionError(Timed out during query execution.), transient: false })
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Event Logged][0m - thread_forked
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[TELEMETRY SENT][0m {"event":"workspace_thread_created","distinctId":"6af2b458-f4b1-4969-9bad-94819262e9ef::1","properties":{"multiUserMode":true,"LLMSelection":"ollama","Embedder":"ollama","VectorDbSelection":"pgvector","TTSSelection":"native","LLMModel":"llama3.1:8b","runtime":"docker"}}
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Event Logged][0m - workspace_thread_created
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m initialized with model nomic-embed-text:latest at http://ollama.ollama.svc.cluster.local:11434. Batch size: 1, num_ctx: 1000
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m initialized with model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[DocumentManager][0m Found 1 pinned sources - prepending to content with ~850 tokens of content.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Embedding 1 chunks of text with nomic-embed-text:latest in batches of 1.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m Context windows cached for all models!
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Batch 1/1: Embedded 1 chunks. Total: 1/1
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m model llama3.1:8b is using a max context window of 16384/131072 tokens.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [35m[TokenManager][0m Returning existing instance for model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [31merror[39m: Error: Your Ollama instance could not be reached or is not responding. Please make sure it is running the API server and your connection information is correct in AnythingLLM.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at #errorHandler (/app/server/utils/AiProviders/ollama/index.js:236:15)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at /app/server/utils/AiProviders/ollama/index.js:340:31
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async OllamaAILLM.streamGetChatCompletion (/app/server/utils/AiProviders/ollama/index.js:324:35)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async streamChatWithWorkspace (/app/server/utils/chats/stream.js:267:20)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async /app/server/endpoints/chat.js:150:9
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m initialized with model nomic-embed-text:latest at http://ollama.ollama.svc.cluster.local:11434. Batch size: 1, num_ctx: 1000
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m initialized with model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[DocumentManager][0m Found 1 pinned sources - prepending to content with ~850 tokens of content.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m Context windows cached for all models!
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Embedding 1 chunks of text with nomic-embed-text:latest in batches of 1.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Batch 1/1: Embedded 1 chunks. Total: 1/1
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m model llama3.1:8b is using a max context window of 16384/131072 tokens.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [35m[TokenManager][0m Returning existing instance for model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [31merror[39m: Error: Your Ollama instance could not be reached or is not responding. Please make sure it is running the API server and your connection information is correct in AnythingLLM.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at #errorHandler (/app/server/utils/AiProviders/ollama/index.js:236:15)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at /app/server/utils/AiProviders/ollama/index.js:340:31
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async OllamaAILLM.streamGetChatCompletion (/app/server/utils/AiProviders/ollama/index.js:324:35)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async streamChatWithWorkspace (/app/server/utils/chats/stream.js:267:20)
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm]     at async /app/server/endpoints/chat.js:150:9
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[TELEMETRY SENT][0m {"event":"login_event","distinctId":"6af2b458-f4b1-4969-9bad-94819262e9ef::1","properties":{"multiUserMode":false,"runtime":"docker"}}
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Event Logged][0m - login_event
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[TELEMETRY SENT][0m {"event":"workspace_thread_created","distinctId":"6af2b458-f4b1-4969-9bad-94819262e9ef::1","properties":{"multiUserMode":true,"LLMSelection":"ollama","Embedder":"ollama","VectorDbSelection":"pgvector","TTSSelection":"native","LLMModel":"llama3.1:8b","runtime":"docker"}}
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Event Logged][0m - workspace_thread_created
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m initialized with model nomic-embed-text:latest at http://ollama.ollama.svc.cluster.local:11434. Batch size: 1, num_ctx: 1000
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m initialized with model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[DocumentManager][0m Found 1 pinned sources - prepending to content with ~850 tokens of content.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m Context windows cached for all models!
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Embedding 1 chunks of text with nomic-embed-text:latest in batches of 1.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [36m[OllamaEmbedder][0m Batch 1/1: Embedded 1 chunks. Total: 1/1
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Ollama][0m model llama3.1:8b is using a max context window of 16384/131072 tokens.
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [35m[TokenManager][0m Returning existing instance for model: llama3.1:8b
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[TELEMETRY SENT][0m {"event":"sent_chat","distinctId":"6af2b458-f4b1-4969-9bad-94819262e9ef","properties":{"multiUserMode":true,"LLMSelection":"ollama","Embedder":"ollama","VectorDbSelection":"pgvector","multiModal":false,"TTSSelection":"native","LLMModel":"llama3.1:8b","runtime":"docker"}}
[pod/anythingllm-85cfbbb9bb-6k29w/anythingllm] [36m[backend][0m [32minfo[39m: [32m[Event Logged][0m - sent_chat
--> Checking Endpoints for Service anythingllm...
✅ Endpoints found: 172.16.74.20
=== Verification Successful (with possible warnings) ===
