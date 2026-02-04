Deployment Report: core/b2b/core-services/itop
Date: Wed Feb  4 17:09:20 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-4g9q8   0/1     ContainerCreating   0             1s     <none>          k8-node-30   <none>           <none>
itop-564949d45d-gcd5p         1/1     Running             0             102m   172.16.209.62   k8-node-20   <none>           <none>
mysql-6c885b98c4-8h68b        1/1     Running             2 (99m ago)   102m   172.16.209.17   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.104.199.34   <none>        80/TCP     20d
mysql   ClusterIP   None            <none>        3306/TCP   44d

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   29h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-4g9q8 ContainerCreating
--- Description for fix-mysql-permissions-4g9q8 ---
  PodReadyToStartContainers   False 
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-7fvcv:
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
  Normal  Scheduled  0s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-4g9q8 to k8-node-30
