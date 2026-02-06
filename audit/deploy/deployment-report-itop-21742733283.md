Deployment Report: core/b2b/core-services/itop
Date: Fri Feb  6 07:41:33 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS                  RESTARTS          AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-zf48s   1/1     Running                 0                 16h   172.16.146.60   k8-node-30   <none>           <none>
itop-77d5995888-8jmm5         0/1     Init:CrashLoopBackOff   192 (2m16s ago)   16h   172.16.209.5    k8-node-20   <none>           <none>
mysql-6c885b98c4-6xn56        0/1     Pending                 0                 16h   <none>          <none>       <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.96.223.118   192.168.1.244   80:31704/TCP   16h
mysql   ClusterIP      10.103.88.132   <none>          3306/TCP       16h

>>> Ingress Status:
No resources found in itop namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-77d5995888-8jmm5 Init:CrashLoopBackOff
mysql-6c885b98c4-6xn56 Pending
--- Description for itop-77d5995888-8jmm5 ---
  itop-web-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  itop-web-pvc
    ReadOnly:   false
  kube-api-access-9nk8m:
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
  Type     Reason   Age                     From     Message
  ----     ------   ----                    ----     -------
  Normal   Created  22m (x189 over 16h)     kubelet  Created container: init-itop-files
  Warning  BackOff  2m47s (x4401 over 16h)  kubelet  Back-off restarting failed container init-itop-files in pod itop-77d5995888-8jmm5_itop(f20553da-229a-4c4e-9cfc-4b08b5cb3af8)
  Normal   Pulled   2m18s (x193 over 16h)   kubelet  Container image "vbkunin/itop:latest-base" already present on machine
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
  Type     Reason            Age                  From               Message
  ----     ------            ----                 ----               -------
  Warning  FailedScheduling  14m (x191 over 16h)  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
