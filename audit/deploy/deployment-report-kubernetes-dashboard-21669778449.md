Deployment Report: core/b2b/core-services/kubernetes-dashboard
Date: Wed Feb  4 11:32:12 UTC 2026
Trigger: push by santakloud
Namespace: kubernetes-dashboard
---------------------------------------------------
>>> Pods Status:
NAME                                         READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
dashboard-metrics-scraper-5bd45c9dd6-nks5r   1/1     Running   0          54m   172.16.209.45   k8-node-20   <none>           <none>
kubernetes-dashboard-79cbcf9fb6-bm75t        1/1     Running   0          54m   172.16.209.14   k8-node-20   <none>           <none>

>>> Services Status:
NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)         AGE
dashboard-metrics-scraper   ClusterIP      10.99.221.154   <none>          8000/TCP        54m
kubernetes-dashboard        LoadBalancer   10.98.228.11    192.168.1.242   443:31225/TCP   54m

>>> Ingress Status:
NAME                           CLASS    HOSTS               ADDRESS   PORTS     AGE
kubernetes-dashboard-ingress   <none>   dashboard.ka0s.io             80, 443   2m54s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kubernetes-dashboard ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service kubernetes-dashboard...
✅ Endpoints found: 172.16.209.14
=== Verification Successful ===
