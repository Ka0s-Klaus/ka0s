Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Mon Mar 30 13:55:35 UTC 2026
Trigger: push by asantacana1970
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                       READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29581300-s4j7d        0/1     Completed   0          15m     172.16.209.47   k8-node-20   <none>           <none>
mongo-vectorize-json-29581310-9mnqd        0/1     Completed   0          5m33s   172.16.209.34   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29581290-tf55q    0/1     Completed   0          25m     172.16.209.61   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29581305-g72kw    0/1     Completed   0          10m     172.16.209.5    k8-node-20   <none>           <none>
mongo-vectorize-log-29581290-zx2kw         0/1     Completed   0          25m     172.16.209.32   k8-node-20   <none>           <none>
mongo-vectorize-log-29581305-6z5cx         0/1     Completed   0          10m     172.16.209.28   k8-node-20   <none>           <none>
mongo-vectorize-server-29581280-vtqfq      0/1     Completed   0          35m     172.16.209.63   k8-node-20   <none>           <none>
mongo-vectorize-server-29581300-nl99z      0/1     Completed   0          15m     172.16.209.37   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581290-5whfv   0/1     Error       0          25m     172.16.209.16   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581290-9zwwn   0/1     Error       0          23m     172.16.209.24   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581290-c5ph6   0/1     Error       0          25m     172.16.209.33   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581300-fcs4x   0/1     Error       0          15m     172.16.209.59   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581300-kdzbn   0/1     Error       0          14m     172.16.209.21   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581300-z26z9   0/1     Error       0          14m     172.16.209.17   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581310-2hm6j   0/1     Error       0          4m18s   172.16.209.1    k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581310-f8x6t   0/1     Error       0          5m33s   172.16.209.50   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581310-fzkfx   0/1     Error       0          5m2s    172.16.209.27   k8-node-20   <none>           <none>
rag-ingest-compliance-29581260-fgv2w       0/1     Error       0          54m     172.16.209.31   k8-node-20   <none>           <none>
rag-ingest-compliance-29581260-mllk7       0/1     Error       0          55m     172.16.209.19   k8-node-20   <none>           <none>
rag-ingest-compliance-29581260-q6ccv       0/1     Error       0          54m     172.16.209.28   k8-node-20   <none>           <none>
rag-ingest-compliance-29581280-7r2xh       0/1     Error       0          34m     172.16.209.51   k8-node-20   <none>           <none>
rag-ingest-compliance-29581280-d6zm5       0/1     Error       0          35m     172.16.209.36   k8-node-20   <none>           <none>
rag-ingest-compliance-29581280-lcmdp       0/1     Error       0          35m     172.16.209.53   k8-node-20   <none>           <none>
rag-ingest-compliance-29581300-56z7p       0/1     Error       0          15m     172.16.209.42   k8-node-20   <none>           <none>
rag-ingest-compliance-29581300-hdqlk       0/1     Error       0          14m     172.16.209.19   k8-node-20   <none>           <none>
rag-ingest-compliance-29581300-x65wj       0/1     Error       0          14m     172.16.209.45   k8-node-20   <none>           <none>
rag-ingest-k8state-29581290-rtrh8          0/1     Completed   0          25m     172.16.209.12   k8-node-20   <none>           <none>
rag-ingest-k8state-29581305-fzpm2          0/1     Completed   0          10m     172.16.209.49   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581275-7bhmz    0/1     Error       0          40m     172.16.209.4    k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581275-cf6zv    0/1     Error       0          39m     172.16.209.54   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581275-vpsbk    0/1     Error       0          40m     172.16.209.58   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581290-7x8nm    0/1     Error       0          24m     172.16.209.46   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581290-lmqtw    0/1     Error       0          25m     172.16.209.8    k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581290-mvtwq    0/1     Error       0          25m     172.16.209.43   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581305-5jrjk    0/1     Error       0          8m59s   172.16.209.31   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581305-r8d9r    0/1     Error       0          10m     172.16.209.52   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581305-zz5v9    0/1     Error       0          9m51s   172.16.209.11   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in ka0s-knowledge namespace.

>>> Ingress Status:
No resources found in ka0s-knowledge namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ka0s-knowledge ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
rag-ingest-code-devsecops-29581290-5whfv Error
rag-ingest-code-devsecops-29581290-9zwwn Error
rag-ingest-code-devsecops-29581290-c5ph6 Error
rag-ingest-code-devsecops-29581300-fcs4x Error
rag-ingest-code-devsecops-29581300-kdzbn Error
rag-ingest-code-devsecops-29581300-z26z9 Error
rag-ingest-code-devsecops-29581310-2hm6j Error
rag-ingest-code-devsecops-29581310-f8x6t Error
rag-ingest-code-devsecops-29581310-fzkfx Error
rag-ingest-compliance-29581260-fgv2w Error
rag-ingest-compliance-29581260-mllk7 Error
rag-ingest-compliance-29581260-q6ccv Error
rag-ingest-compliance-29581280-7r2xh Error
rag-ingest-compliance-29581280-d6zm5 Error
rag-ingest-compliance-29581280-lcmdp Error
rag-ingest-compliance-29581300-56z7p Error
rag-ingest-compliance-29581300-hdqlk Error
rag-ingest-compliance-29581300-x65wj Error
rag-ingest-telemetry-ops-29581275-7bhmz Error
rag-ingest-telemetry-ops-29581275-cf6zv Error
rag-ingest-telemetry-ops-29581275-vpsbk Error
rag-ingest-telemetry-ops-29581290-7x8nm Error
rag-ingest-telemetry-ops-29581290-lmqtw Error
rag-ingest-telemetry-ops-29581290-mvtwq Error
rag-ingest-telemetry-ops-29581305-5jrjk Error
rag-ingest-telemetry-ops-29581305-r8d9r Error
rag-ingest-telemetry-ops-29581305-zz5v9 Error
--- Description for rag-ingest-code-devsecops-29581290-5whfv ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-vjg4r:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  25m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581290-5whfv to k8-node-20
  Normal  Pulled     25m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    25m   kubelet            Created container: mongo-vectorize
  Normal  Started    25m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581290-5whfv (Current) ---
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 15.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 12.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 152.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 27.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 159.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 139.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 135.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 21.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 144.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 14.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 10.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 134.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 144.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 10.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 17.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 119.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 91.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 149.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581290-5whfv/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581290-9zwwn ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-48jnh:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  23m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581290-9zwwn to k8-node-20
  Normal  Pulled     23m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    23m   kubelet            Created container: mongo-vectorize
  Normal  Started    23m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581290-9zwwn (Current) ---
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 120.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 117.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 160.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 161.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 175.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 170.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 151.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 118.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 155.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 38.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 39.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 34.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 35.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 34.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 37.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 18.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 30.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 4.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581290-9zwwn/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581290-c5ph6 ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-wzd7p:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  25m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581290-c5ph6 to k8-node-20
  Normal  Pulled     25m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    25m   kubelet            Created container: mongo-vectorize
  Normal  Started    25m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581290-c5ph6 (Current) ---
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 80.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 93.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 198.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 174.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 190.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 134.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 202.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 25.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 193.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 222.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 210.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 193.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 200.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 5.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 205.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 19.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 86.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 206.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581290-c5ph6/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581300-fcs4x ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-jsclt:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  15m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581300-fcs4x to k8-node-20
  Normal  Pulled     15m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    15m   kubelet            Created container: mongo-vectorize
  Normal  Started    15m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581300-fcs4x (Current) ---
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 111.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 41.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 207.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 194.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 198.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 84.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 178.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 90.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 166.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 105.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 205.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 205.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 208.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 169.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 72.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 194.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 55.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 222.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581300-fcs4x/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581300-kdzbn ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-qhwcr:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  14m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581300-kdzbn to k8-node-20
  Normal  Pulled     14m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    14m   kubelet            Created container: mongo-vectorize
  Normal  Started    14m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581300-kdzbn (Current) ---
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 118.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 127.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 181.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 174.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 200.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 20.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 15.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 17.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 174.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 180.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 211.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 213.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 192.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 194.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 204.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 179.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 117.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 214.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581300-kdzbn/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581300-z26z9 ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-z2wcr:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  14m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581300-z26z9 to k8-node-20
  Normal  Pulled     14m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    14m   kubelet            Created container: mongo-vectorize
  Normal  Started    14m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581300-z26z9 (Current) ---
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 99.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 124.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 166.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 157.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 172.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 164.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 89.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 144.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 157.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 20.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 13.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 164.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 13.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 66.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 177.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 165.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 109.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 111.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581300-z26z9/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581310-2hm6j ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-wkjvr:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  4m19s  default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581310-2hm6j to k8-node-20
  Normal  Pulled     4m19s  kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    4m19s  kubelet            Created container: mongo-vectorize
  Normal  Started    4m19s  kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581310-2hm6j (Current) ---
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 136.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 80.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 143.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 105.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 170.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 146.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 163.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 118.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 138.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 162.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 171.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 132.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 156.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 158.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 157.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 140.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 90.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 176.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581310-2hm6j/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581310-f8x6t ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-nxxjq:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  5m35s  default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581310-f8x6t to k8-node-20
  Normal  Pulled     5m34s  kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    5m34s  kubelet            Created container: mongo-vectorize
  Normal  Started    5m34s  kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581310-f8x6t (Current) ---
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 182.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 61.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 178.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 145.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 159.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 147.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 172.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 134.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 169.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 125.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 178.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 156.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 185.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 181.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 170.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 168.8 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 84.3 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 147.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581310-f8x6t/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-code-devsecops-29581310-fzkfx ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-ctjmp:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  5m4s  default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-code-devsecops-29581310-fzkfx to k8-node-20
  Normal  Pulled     5m3s  kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    5m3s  kubelet            Created container: mongo-vectorize
  Normal  Started    5m3s  kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-code-devsecops-29581310-fzkfx (Current) ---
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 155.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 101.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 166.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 159.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 174.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 156.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 159.5 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 24.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 145.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 155.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 172.1 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 149.2 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 169.4 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 170.9 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 156.7 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 159.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 55.0 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 188.6 MB/s eta 0:00:00
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]   File "/config/ingest_devsecops_code.py", line 17, in <module>
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter, Language
[pod/rag-ingest-code-devsecops-29581310-fzkfx/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581260-fgv2w ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-q8w4m:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  54m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581260-fgv2w to k8-node-20
  Normal  Pulled     54m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    54m   kubelet            Created container: mongo-vectorize
  Normal  Started    54m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581260-fgv2w (Current) ---
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 114.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 100.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 147.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 52.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 143.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 116.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 107.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 118.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 140.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 54.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 85.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 145.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 151.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 65.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 60.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 139.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 33.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 70.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581260-fgv2w/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581260-mllk7 ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-x96hl:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  55m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581260-mllk7 to k8-node-20
  Normal  Pulled     55m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    55m   kubelet            Created container: mongo-vectorize
  Normal  Started    55m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581260-mllk7 (Current) ---
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 60.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 16.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 155.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 136.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 20.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 38.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 53.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 27.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 138.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 32.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 81.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 144.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 151.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 60.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 59.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 138.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 42.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 163.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581260-mllk7/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581260-q6ccv ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-mj2qg:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  55m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581260-q6ccv to k8-node-20
  Normal  Pulled     54m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    54m   kubelet            Created container: mongo-vectorize
  Normal  Started    54m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581260-q6ccv (Current) ---
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 30.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 17.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 24.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 131.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 149.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 89.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 131.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 116.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 122.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 131.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 142.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 59.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 103.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 134.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 143.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 46.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 51.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 154.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581260-q6ccv/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581280-7r2xh ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-v5t29:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  34m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581280-7r2xh to k8-node-20
  Normal  Pulled     34m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    34m   kubelet            Created container: mongo-vectorize
  Normal  Started    34m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581280-7r2xh (Current) ---
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 153.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 144.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 14.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 101.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 149.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 150.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 154.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 123.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 144.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 148.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 169.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 180.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 162.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 158.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 169.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 146.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 76.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 161.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581280-7r2xh/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581280-d6zm5 ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-2q4jt:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  35m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581280-d6zm5 to k8-node-20
  Normal  Pulled     35m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    35m   kubelet            Created container: mongo-vectorize
  Normal  Started    35m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581280-d6zm5 (Current) ---
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 96.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 103.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 72.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 143.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 157.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 109.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 168.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 77.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 159.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 37.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 174.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 145.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 154.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 158.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 50.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 157.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 78.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 176.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581280-d6zm5/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581280-lcmdp ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-fclqg:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  35m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581280-lcmdp to k8-node-20
  Normal  Pulled     35m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    35m   kubelet            Created container: mongo-vectorize
  Normal  Started    35m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581280-lcmdp (Current) ---
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 140.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 102.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 162.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 162.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 182.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 144.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 37.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 46.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 161.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 151.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 165.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 160.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 173.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 163.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 165.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 173.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 93.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 168.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581280-lcmdp/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581300-56z7p ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-f997c:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  15m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581300-56z7p to k8-node-20
  Normal  Pulled     15m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    15m   kubelet            Created container: mongo-vectorize
  Normal  Started    15m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581300-56z7p (Current) ---
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 21.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 29.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 164.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 160.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 206.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 64.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 174.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 107.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 193.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 163.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 211.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 94.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 188.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 206.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 212.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 195.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 57.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 213.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581300-56z7p/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581300-hdqlk ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-gf75j:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  14m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581300-hdqlk to k8-node-20
  Normal  Pulled     14m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    14m   kubelet            Created container: mongo-vectorize
  Normal  Started    14m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581300-hdqlk (Current) ---
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 159.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 115.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 217.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 160.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 215.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 168.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 188.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 84.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 177.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 167.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 191.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 185.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 196.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 202.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 194.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 177.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 99.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 212.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581300-hdqlk/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-compliance-29581300-x65wj ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-28x5d:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  14m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-compliance-29581300-x65wj to k8-node-20
  Normal  Pulled     14m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    14m   kubelet            Created container: mongo-vectorize
  Normal  Started    14m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-compliance-29581300-x65wj (Current) ---
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 83.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 142.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 171.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 150.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 184.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 166.8 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 151.9 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 45.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 139.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 182.7 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 176.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 157.6 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 165.3 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 176.4 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 165.0 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 175.1 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 38.5 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 176.2 MB/s eta 0:00:00
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]   File "/config/ingest_compliance.py", line 17, in <module>
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize]     from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter
[pod/rag-ingest-compliance-29581300-x65wj/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581275-7bhmz ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-k29cs:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  40m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581275-7bhmz to k8-node-20
  Normal  Pulled     40m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    40m   kubelet            Created container: mongo-vectorize
  Normal  Started    40m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581275-7bhmz (Current) ---
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 39.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 32.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 17.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 130.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 158.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 17.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 143.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 102.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 129.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 138.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 148.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 158.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 149.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 149.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 13.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 21.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 28.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 164.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581275-7bhmz/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581275-cf6zv ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-r544t:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  39m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581275-cf6zv to k8-node-20
  Normal  Pulled     39m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    39m   kubelet            Created container: mongo-vectorize
  Normal  Started    39m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581275-cf6zv (Current) ---
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 8.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 25.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 47.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 71.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 82.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 81.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 78.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 78.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 114.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 60.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 63.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 36.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 55.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 52.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 16.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 134.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 63.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 23.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581275-cf6zv/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581275-vpsbk ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-4jnp2:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  40m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581275-vpsbk to k8-node-20
  Normal  Pulled     40m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    40m   kubelet            Created container: mongo-vectorize
  Normal  Started    40m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581275-vpsbk (Current) ---
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 42.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 37.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 172.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 159.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 174.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 173.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 169.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 80.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 151.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 110.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 141.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 151.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 165.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 154.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 162.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 159.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 84.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 170.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581275-vpsbk/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581290-7x8nm ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-f6qbv:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  24m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581290-7x8nm to k8-node-20
  Normal  Pulled     24m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    24m   kubelet            Created container: mongo-vectorize
  Normal  Started    24m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581290-7x8nm (Current) ---
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 76.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 52.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 163.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 138.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 144.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 25.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 149.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 40.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 134.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 20.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 48.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 156.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 154.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 25.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 24.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 129.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 84.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 156.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581290-7x8nm/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581290-lmqtw ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-9bmh4:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  25m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581290-lmqtw to k8-node-20
  Normal  Pulled     25m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    25m   kubelet            Created container: mongo-vectorize
  Normal  Started    25m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581290-lmqtw (Current) ---
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 25.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 25.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 20.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 129.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 144.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 133.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 127.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 104.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 132.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 25.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 24.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 148.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 35.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 11.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 156.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 141.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 21.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 142.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581290-lmqtw/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581290-mvtwq ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-ctcx4:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  25m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581290-mvtwq to k8-node-20
  Normal  Pulled     25m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    25m   kubelet            Created container: mongo-vectorize
  Normal  Started    25m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581290-mvtwq (Current) ---
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 92.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 45.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 181.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 146.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 20.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 167.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 146.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 78.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 197.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 182.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 201.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 163.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 180.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 158.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 104.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 193.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 33.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 203.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581290-mvtwq/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581305-5jrjk ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-5f7lx:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  9m4s  default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581305-5jrjk to k8-node-20
  Normal  Pulled     9m3s  kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    9m3s  kubelet            Created container: mongo-vectorize
  Normal  Started    9m3s  kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581305-5jrjk (Current) ---
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 142.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 115.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 163.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 144.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 177.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 195.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 184.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 137.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 177.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 158.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 154.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 153.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 182.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 4.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 173.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 152.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 68.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 181.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581305-5jrjk/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581305-r8d9r ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-lfrh8:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  10m   default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581305-r8d9r to k8-node-20
  Normal  Pulled     10m   kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    10m   kubelet            Created container: mongo-vectorize
  Normal  Started    10m   kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581305-r8d9r (Current) ---
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 20.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 19.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 33.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 142.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 106.6 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 47.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 16.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 23.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 147.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 131.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 75.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 156.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 151.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 165.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 169.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 136.7 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 26.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 157.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581305-r8d9r/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--- Description for rag-ingest-telemetry-ops-29581305-zz5v9 ---
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      mongo-vectorize-scripts
    Optional:  false
  kube-api-access-wbvsl:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              ka0s.io/default-worker=true
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  9m56s  default-scheduler  Successfully assigned ka0s-knowledge/rag-ingest-telemetry-ops-29581305-zz5v9 to k8-node-20
  Normal  Pulled     9m55s  kubelet            Container image "python:3.11-slim" already present on machine
  Normal  Created    9m55s  kubelet            Created container: mongo-vectorize
  Normal  Started    9m55s  kubelet            Started container mongo-vectorize
--- Logs for rag-ingest-telemetry-ops-29581305-zz5v9 (Current) ---
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 463.6/463.6 kB 22.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading pydantic_core-2.41.5-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 23.5 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading urllib3-2.6.3-py3-none-any.whl (131 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 131.6/131.6 kB 25.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading langgraph_checkpoint-4.0.1-py3-none-any.whl (50 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.5/50.5 kB 149.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading langgraph_prebuilt-1.0.8-py3-none-any.whl (35 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading langgraph_sdk-0.3.12-py3-none-any.whl (95 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 95.8/95.8 kB 180.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading langsmith-0.7.22-py3-none-any.whl (359 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 359.9/359.9 kB 188.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading packaging-26.0-py3-none-any.whl (74 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 74.4/74.4 kB 172.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading pyyaml-6.0.3-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (806 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 806.6/806.6 kB 174.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading tenacity-9.1.4-py3-none-any.whl (28 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 44.6/44.6 kB 168.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading uuid_utils-0.14.1-cp39-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (345 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 345.7/345.7 kB 162.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading xxhash-3.6.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (193 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 193.9/193.9 kB 87.4 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 73.5/73.5 kB 166.9 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 78.8/78.8 kB 173.1 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading jsonpointer-3.1.1-py3-none-any.whl (7.7 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading orjson-3.11.7-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (133 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.4/133.4 kB 177.0 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading ormsgpack-1.12.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (212 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 212.4/212.4 kB 24.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading requests_toolbelt-1.0.0-py2.py3-none-any.whl (54 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 54.5/54.5 kB 164.2 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading zstandard-0.25.0-cp311-cp311-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.6 MB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 34.8 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading anyio-4.13.0-py3-none-any.whl (114 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 114.4/114.4 kB 182.3 MB/s eta 0:00:00
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Downloading h11-0.16.0-py3-none-any.whl (37 kB)
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Installing collected packages: zstandard, xxhash, uuid-utils, urllib3, typing-extensions, tenacity, pyyaml, psycopg2-binary, packaging, ormsgpack, orjson, jsonpointer, idna, h11, dnspython, charset_normalizer, certifi, annotated-types, typing-inspection, requests, pymongo, pydantic-core, jsonpatch, httpcore, anyio, requests-toolbelt, pydantic, httpx, langsmith, langgraph-sdk, langchain-core, langgraph-checkpoint, langchain-text-splitters, langgraph-prebuilt, langgraph, langchain
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Successfully installed annotated-types-0.7.0 anyio-4.13.0 certifi-2026.2.25 charset_normalizer-3.4.6 dnspython-2.8.0 h11-0.16.0 httpcore-1.0.9 httpx-0.28.1 idna-3.11 jsonpatch-1.33 jsonpointer-3.1.1 langchain-1.2.13 langchain-core-1.2.23 langchain-text-splitters-1.1.1 langgraph-1.1.3 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.22 orjson-3.11.7 ormsgpack-1.12.2 packaging-26.0 psycopg2-binary-2.9.11 pydantic-2.12.5 pydantic-core-2.41.5 pymongo-4.16.0 pyyaml-6.0.3 requests-2.33.0 requests-toolbelt-1.0.0 tenacity-9.1.4 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.3 uuid-utils-0.14.1 xxhash-3.6.0 zstandard-0.25.0
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] Traceback (most recent call last):
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]   File "/config/ingest_ops_telemetry.py", line 17, in <module>
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize]     from langchain.text_splitter import RecursiveCharacterTextSplitter
[pod/rag-ingest-telemetry-ops-29581305-zz5v9/mongo-vectorize] ModuleNotFoundError: No module named 'langchain.text_splitter'
--> Checking Endpoints for Service ka0s-knowledge...
ℹ️  Service 'ka0s-knowledge' not found in namespace 'ka0s-knowledge'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
