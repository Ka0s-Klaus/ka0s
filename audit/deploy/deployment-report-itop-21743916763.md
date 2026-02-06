Deployment Report: core/b2b/core-services/itop
Date: Fri Feb  6 08:30:23 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS                  RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-b8lh7   0/1     Completed               0             61s   172.16.146.34   k8-node-30   <none>           <none>
itop-77d5995888-jgpvc         0/1     Init:CrashLoopBackOff   2 (25s ago)   61s   172.16.209.39   k8-node-20   <none>           <none>
mysql-6c885b98c4-lhd4q        1/1     Running                 0             61s   172.16.209.44   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.103.185.4    192.168.1.243   80:30455/TCP   61s
mysql   ClusterIP      10.110.39.171   <none>          3306/TCP       61s

>>> Ingress Status:
No resources found in itop namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-77d5995888-jgpvc Init:CrashLoopBackOff
--- Description for itop-77d5995888-jgpvc ---
  kube-api-access-nxjwz:
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
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  62s                default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  49s                default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Normal   Scheduled         47s                default-scheduler  Successfully assigned itop/itop-77d5995888-jgpvc to k8-node-20
  Normal   Pulled            29s (x3 over 47s)  kubelet            Container image "vbkunin/itop:latest-base" already present on machine
  Normal   Created           29s (x3 over 47s)  kubelet            Created container: init-itop-files
  Normal   Started           29s (x3 over 47s)  kubelet            Started container init-itop-files
  Warning  BackOff           12s (x4 over 43s)  kubelet            Back-off restarting failed container init-itop-files in pod itop-77d5995888-jgpvc_itop(7e5cd81b-4f70-4561-9a6a-bb56aa705a39)
