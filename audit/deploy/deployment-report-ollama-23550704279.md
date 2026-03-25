Deployment Report: core/b2b/core-services/ollama
Date: Wed Mar 25 16:01:00 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                     READY   STATUS      RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
ollama-b6fbb6876-lp9vf   1/1     Running     0          3m32s   172.16.209.60   k8-node-20   <none>           <none>
pull-llama3-1-8b-5hxbz   0/1     Completed   0          6h20m   172.16.74.18    k8-manager   <none>           <none>
pull-llama3-2-vn4mj      0/1     Completed   0          6d6h    <none>          k8-manager   <none>           <none>

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
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.60
=== Verification Successful (with possible warnings) ===
