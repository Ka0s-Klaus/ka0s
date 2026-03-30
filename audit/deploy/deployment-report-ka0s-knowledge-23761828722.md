Deployment Report: core/b2b/core-services/ka0s-knowledge
Date: Mon Mar 30 18:48:59 UTC 2026
Trigger: push by ka0score
Namespace: ka0s-knowledge
---------------------------------------------------
>>> Pods Status:
NAME                                       READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-vectorize-json-29581600-9plrd        0/1     Completed   0          8m57s   172.16.209.49   k8-node-20   <none>           <none>
mongo-vectorize-k8config-29581605-jq96t    0/1     Completed   0          3m59s   172.16.209.38   k8-node-20   <none>           <none>
mongo-vectorize-log-29581590-tjz85         0/1     Completed   0          18m     172.16.209.21   k8-node-20   <none>           <none>
mongo-vectorize-log-29581605-j5gqc         1/1     Running     0          3m59s   172.16.209.45   k8-node-20   <none>           <none>
mongo-vectorize-server-29581600-4c67n      0/1     Completed   0          8m57s   172.16.209.17   k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581590-v25fd   0/1     Completed   0          18m     172.16.209.3    k8-node-20   <none>           <none>
rag-ingest-code-devsecops-29581600-gc9x4   0/1     Completed   0          8m57s   172.16.209.52   k8-node-20   <none>           <none>
rag-ingest-compliance-29581600-5kplg       0/1     Completed   0          8m57s   172.16.209.37   k8-node-20   <none>           <none>
rag-ingest-k8state-29581605-fpbqz          0/1     Completed   0          3m59s   172.16.209.61   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581590-r4wcd    0/1     Completed   0          18m     172.16.209.59   k8-node-20   <none>           <none>
rag-ingest-telemetry-ops-29581605-6dnq9    1/1     Running     0          3m59s   172.16.209.62   k8-node-20   <none>           <none>

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
