Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 15:33:29 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS                  RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-zf48s   1/1     Running                 0             2m    172.16.146.60   k8-node-30   <none>           <none>
itop-5cdd8dc7b9-9wgqm         0/1     Init:CrashLoopBackOff   4 (22s ago)   2m    172.16.209.61   k8-node-20   <none>           <none>
mysql-6c885b98c4-6xn56        0/1     Pending                 0             2m    <none>          <none>       <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.96.223.118   192.168.1.240   80:31704/TCP   2m1s
mysql   ClusterIP      10.103.88.132   <none>          3306/TCP       2m1s

>>> Ingress Status:
No resources found in itop namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-5cdd8dc7b9-9wgqm Init:CrashLoopBackOff
mysql-6c885b98c4-6xn56 Pending
--- Description for itop-5cdd8dc7b9-9wgqm ---
    ClaimName:  itop-web-pvc
    ReadOnly:   false
  kube-api-access-lc9g2:
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
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  2m                  default-scheduler  Successfully assigned itop/itop-5cdd8dc7b9-9wgqm to k8-node-20
  Normal   Pulled     24s (x5 over 2m1s)  kubelet            Container image "vbkunin/itop:latest-base" already present on machine
  Normal   Created    24s (x5 over 2m1s)  kubelet            Created container: init-itop-files
  Normal   Started    24s (x5 over 2m)    kubelet            Started container init-itop-files
  Warning  BackOff    8s (x9 over 116s)   kubelet            Back-off restarting failed container init-itop-files in pod itop-5cdd8dc7b9-9wgqm_itop(3364d2d3-f581-43bc-83fd-373c35478e1a)
--- Description for mysql-6c885b98c4-6xn56 ---
  PodScheduled   False 
Volumes:
  mysql-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  mysql-pvc
    ReadOnly:   false
  kube-api-access-bz6p6:
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
  Warning  FailedScheduling  2m1s  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
