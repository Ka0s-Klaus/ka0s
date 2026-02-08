Deployment Report: core/b2b/core-services/kubernetes-dashboard
Date: Sun Feb  8 11:31:21 UTC 2026
Trigger: push by santakloud
Namespace: kubernetes-dashboard
---------------------------------------------------
>>> Pods Status:
NAME                                         READY   STATUS    RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
dashboard-metrics-scraper-5bd45c9dd6-nks5r   1/1     Running   1 (141m ago)   4d    172.16.209.48   k8-node-20   <none>           <none>
kubernetes-dashboard-79cbcf9fb6-bm75t        1/1     Running   1 (141m ago)   4d    172.16.209.32   k8-node-20   <none>           <none>

>>> Services Status:
NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)         AGE
dashboard-metrics-scraper   ClusterIP      10.99.221.154   <none>          8000/TCP        4d
kubernetes-dashboard        LoadBalancer   10.98.228.11    192.168.1.242   443:31225/TCP   4d

>>> Ingress Status:
NAME                           CLASS    HOSTS               ADDRESS        PORTS     AGE
kubernetes-dashboard-ingress   <none>   dashboard.ka0s.io   192.168.1.10   80, 443   4d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kubernetes-dashboard ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service kubernetes-dashboard for External IP: 192.168.1.242...
✅ Service kubernetes-dashboard is assigned to IP 192.168.1.242.
--> Checking Endpoints for Service kubernetes-dashboard...
✅ Endpoints found: 172.16.209.32
=== Verification Successful ===
