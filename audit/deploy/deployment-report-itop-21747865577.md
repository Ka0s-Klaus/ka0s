Deployment Report: core/b2b/core-services/itop
Date: Fri Feb  6 10:50:14 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-qfsks   0/1     ContainerCreating   0          0s     <none>          k8-node-40   <none>           <none>
itop-64676894dc-f7fr9         1/1     Running             0          124m   172.16.209.56   k8-node-20   <none>           <none>
mysql-6c885b98c4-lhd4q        1/1     Running             0          140m   172.16.209.44   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.103.185.4    192.168.1.243   80:30455/TCP   140m
mysql   ClusterIP      10.110.39.171   <none>          3306/TCP       140m

>>> Ingress Status:
No resources found in itop namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-qfsks ContainerCreating
--- Description for fix-mysql-permissions-qfsks ---
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-6w6xp:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  1s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-qfsks to k8-node-40
  Normal  Pulled     0s    kubelet            Container image "mysql:5.7" already present on machine
