Deployment Report: core/b2b/core-services/ollama
Date: Mon Mar 23 13:05:30 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS      RESTARTS   AGE     IP            NODE         NOMINATED NODE   READINESS GATES
ollama-6685898cfd-6t86g   1/1     Running     0          5m33s   172.16.74.3   k8-manager   <none>           <none>
pull-llama3-2-vn4mj       0/1     Completed   0          4d4h    <none>        k8-manager   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   11d

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      11d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.74.3
=== Verification Successful (with possible warnings) ===
