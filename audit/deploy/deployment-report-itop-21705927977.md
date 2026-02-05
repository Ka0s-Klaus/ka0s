Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 09:26:22 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS    RESTARTS   AGE    IP             NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-4wvmv   1/1     Running   0          2m1s   172.16.146.2   k8-node-30   <none>           <none>
itop-7d4569cf76-ffqkf         0/1     Pending   0          2m1s   <none>         <none>       <none>           <none>
mysql-6c885b98c4-fn7d5        0/1     Pending   0          2m1s   <none>         <none>       <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.111.133.16    <none>        80/TCP     2m1s
mysql   ClusterIP   10.111.176.147   <none>        3306/TCP   2m1s

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   2m1s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-7d4569cf76-ffqkf Pending
mysql-6c885b98c4-fn7d5 Pending
--- Description for itop-7d4569cf76-ffqkf ---
  PodScheduled   False 
Volumes:
  itop-web-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  itop-web-pvc
    ReadOnly:   false
  kube-api-access-757vz:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  2m    default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Description for mysql-6c885b98c4-fn7d5 ---
  PodScheduled   False 
Volumes:
  mysql-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  mysql-pvc
    ReadOnly:   false
  kube-api-access-zlpbv:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  2m    default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
