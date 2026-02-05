Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 11:50:53 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS   AGE    IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-4jmxq   0/1     ContainerCreating   0          0s     <none>          k8-node-30   <none>           <none>
itop-7d4569cf76-df6nv         1/1     Running             0          127m   172.16.209.25   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8        1/1     Running             0          127m   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.102.203.241   192.168.1.244   80:32708/TCP   127m
mysql   ClusterIP      10.106.214.58    <none>          3306/TCP       127m

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   127m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-4jmxq ContainerCreating
--- Description for fix-mysql-permissions-4jmxq ---
  PodReadyToStartContainers   False 
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-jddn2:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-4jmxq to k8-node-30
