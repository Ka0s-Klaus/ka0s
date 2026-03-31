Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Tue Mar 31 15:52:34 UTC 2026
Trigger: push by ka0score
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                       READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29582860-jpmdj        0/1     Completed   0          12m     172.16.209.17   k8-node-20   <none>           <none>
mongo-vectorize-json-29582870-79n89        0/1     Completed   0          2m34s   172.16.209.61   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29582850-pshf8    0/1     Completed   0          22m     172.16.209.21   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29582865-htppf    0/1     Completed   0          7m32s   172.16.209.51   k8-node-20   <none>           <none>
mongo-vectorize-log-29582850-s5slh         0/1     Completed   0          22m     172.16.209.20   k8-node-20   <none>           <none>
mongo-vectorize-log-29582865-2mgsd         1/1     Running     0          7m32s   172.16.209.53   k8-node-20   <none>           <none>
mongo-vectorize-log-manual-rx8hq           0/1     Completed   0          30m     172.16.209.34   k8-node-20   <none>           <none>
mongo-vectorize-server-29582840-7crkg      0/1     Completed   0          32m     172.16.209.16   k8-node-20   <none>           <none>
mongo-vectorize-server-29582860-zdbpc      0/1     Completed   0          12m     172.16.209.62   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29582860-qk88d   0/1     Completed   0          12m     172.16.209.33   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29582870-4d5h5   0/1     Completed   0          2m34s   172.16.209.54   k8-node-20   <none>           <none>
rag-ingest-compliance-29582840-6gmgp       0/1     Completed   0          32m     172.16.209.24   k8-node-20   <none>           <none>
rag-ingest-compliance-29582860-frbb2       0/1     Completed   0          12m     172.16.209.22   k8-node-20   <none>           <none>
rag-ingest-k8state-29582850-shllq          0/1     Completed   0          22m     172.16.209.36   k8-node-20   <none>           <none>
rag-ingest-k8state-29582865-bkm4r          0/1     Completed   0          7m32s   172.16.209.3    k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29582835-cswvz    0/1     Completed   0          37m     172.16.209.40   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29582850-cdtp7    0/1     Completed   0          22m     172.16.209.63   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29582865-ddlzh    1/1     Running     0          7m32s   172.16.209.48   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in ka0s-knowledge namespace.

>>> Ingress Status:
No resources found in ka0s-knowledge namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ka0s-knowledge ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ka0s-knowledge...
ℹ️  Service 'ka0s-knowledge' not found in namespace 'ka0s-knowledge'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
