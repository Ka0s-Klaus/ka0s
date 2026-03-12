Deployment Report: core/b2b/core-services/ollama
Date: Thu Mar 12 09:59:33 UTC 2026
Trigger: push by asantacana1970
Namespace: ollama
---------------------------------------------------
>>> Pods Status:
NAME                      READY   STATUS      RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
ollama-86c654c85c-k4gmf   1/1     Running     0          111m   172.16.209.28   k8-node-20   <none>           <none>
pull-llama3-2-5fdjv       0/1     Completed   0          167m   172.16.209.26   k8-node-20   <none>           <none>

>>> Services Status:
NAME     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
ollama   ClusterIP   10.103.245.188   <none>        11434/TCP   167m

>>> Ingress Status:
NAME             CLASS    HOSTS               ADDRESS         PORTS   AGE
ollama-ingress   <none>   ollama.kaos.local   192.168.1.250   80      167m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: ollama ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service ollama...
✅ Endpoints found: 172.16.209.28
=== Verification Successful (with possible warnings) ===
