Deployment Report: core/b2b/core-services/ollama
Date: Thu Mar 26 16:56:54 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                                 READY   STATUS      RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
ollama-6f446b574c-xggxt              1/1     Running     0          8h     172.16.209.33   k8-node-20   <none>           <none>
ollama-embed-fleet-cd5f4598d-m9z6j   1/1     Running     0          11m    172.16.74.10    k8-manager   <none>           <none>
ollama-embed-fleet-cd5f4598d-pf7dd   1/1     Running     0          11m    172.16.74.25    k8-manager   <none>           <none>
ollama-embed-fleet-cd5f4598d-wrh5z   1/1     Running     0          11m    172.16.74.6     k8-manager   <none>           <none>
pull-llama3-1-8b-5hxbz               0/1     Completed   0          31h    172.16.74.18    k8-manager   <none>           <none>
pull-llama3-2-vn4mj                  0/1     Completed   0          7d7h   <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama         ClusterIP   10.103.245.188   <none>        11434/TCP   14d
ollama-embed   ClusterIP   10.100.80.108    <none>        11434/TCP   11m

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      14d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.33
=== Verification Successful (with possible warnings) ===
