Deployment Report: core/b2b/core-services/kubernetes-dashboard
Date: Tue Feb 10 08:21:15 UTC 2026
Trigger: push by santakloud
Namespace: kubernetes-dashboard
---------------------------------------------------
>>> Pods Status:
NAME                                         READY   STATUS    RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
dashboard-metrics-scraper-5bd45c9dd6-nks5r   1/1     Running   1 (47h ago)   5d21h   172.16.209.48   k8-node-20   <none>           <none>
kubernetes-dashboard-84fb97c47f-cvdxr        1/1     Running   0             19h     172.16.74.43    k8-manager   <none>           <none>

>>> Services Status:
NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)         AGE
dashboard-metrics-scraper   ClusterIP      10.99.221.154   <none>          8000/TCP        5d21h
kubernetes-dashboard        LoadBalancer   10.98.228.11    192.168.1.242   443:31225/TCP   5d21h

>>> Ingress Status:
NAME                           CLASS   HOSTS               ADDRESS         PORTS     AGE
kubernetes-dashboard-ingress   nginx   dashboard.ka0s.io   192.168.1.250   80, 443   5d20h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kubernetes-dashboard ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Service kubernetes-dashboard for External IP: 192.168.1.242...
✅ Service kubernetes-dashboard is assigned to IP 192.168.1.242.
--> Checking Endpoints for Service kubernetes-dashboard...
✅ Endpoints found: 172.16.74.43
=== Verification Successful ===
