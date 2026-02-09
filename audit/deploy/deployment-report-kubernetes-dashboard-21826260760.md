Deployment Report: core/b2b/core-services/kubernetes-dashboard
Date: Mon Feb  9 13:07:11 UTC 2026
Trigger: push by santakloud
Namespace: kubernetes-dashboard
---------------------------------------------------
>>> Pods Status:
NAME                                         READY   STATUS        RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
dashboard-metrics-scraper-5bd45c9dd6-nks5r   1/1     Running       1 (27h ago)   5d2h   172.16.209.48   k8-node-20   <none>           <none>
kubernetes-dashboard-79cbcf9fb6-bm75t        1/1     Terminating   1 (27h ago)   5d2h   172.16.209.32   k8-node-20   <none>           <none>
kubernetes-dashboard-84fb97c47f-cvdxr        1/1     Running       0             8s     172.16.74.43    k8-manager   <none>           <none>

>>> Services Status:
NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)         AGE
dashboard-metrics-scraper   ClusterIP      10.99.221.154   <none>          8000/TCP        5d2h
kubernetes-dashboard        LoadBalancer   10.98.228.11    192.168.1.242   443:31225/TCP   5d2h

>>> Ingress Status:
NAME                           CLASS   HOSTS               ADDRESS         PORTS   AGE
kubernetes-dashboard-ingress   nginx   dashboard.ka0s.io   192.168.1.250   80      5d1h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: kubernetes-dashboard ===
--> Checking Pods status...
ERROR: The following pods are not ready:
kubernetes-dashboard-79cbcf9fb6-bm75t Terminating
--- Description for kubernetes-dashboard-79cbcf9fb6-bm75t ---
    Optional:    false
  tmp-volume:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:     
    SizeLimit:  <unset>
  kube-api-access-7m9st:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              kubernetes.io/os=linux
Tolerations:                 node-role.kubernetes.io/master:NoSchedule
                             node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  1s    kubelet  Stopping container kubernetes-dashboard
