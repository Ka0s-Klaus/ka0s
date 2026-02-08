Deployment Report: core/b2b/core-services/itop
Date: Sun Feb  8 11:31:16 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS       AGE    IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-q8vfw   0/1     ContainerCreating   0              0s     <none>          k8-manager   <none>           <none>
itop-64676894dc-f7fr9         1/1     Running             1 (141m ago)   2d2h   172.16.209.29   k8-node-20   <none>           <none>
mysql-6c885b98c4-lhd4q        1/1     Running             1 (141m ago)   2d3h   172.16.209.46   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.103.185.4    192.168.1.243   80:30455/TCP   2d3h
mysql   ClusterIP      10.110.39.171   <none>          3306/TCP       2d3h

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS   PORTS   AGE
itop-ingress   nginx   itsm.ka0s.io             80      1s
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-q8vfw ContainerCreating
--- Description for fix-mysql-permissions-q8vfw ---
  ContainersReady             True 
  PodScheduled                True 
Volumes:
  kube-api-access-slrbx:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-q8vfw to k8-manager
  Normal  Pulled     0s    kubelet            Container image "mysql:5.7" already present on machine
  Normal  Created    0s    kubelet            Created container: fix-permissions
  Normal  Started    0s    kubelet            Started container fix-permissions
