Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 11:18:10 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-hwfft   0/1     ContainerCreating   0          1s    <none>          k8-node-40   <none>           <none>
itop-7d4569cf76-df6nv         1/1     Running             0          94m   172.16.209.25   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8        1/1     Running             0          94m   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.102.203.241   192.168.1.244   80:32708/TCP   94m
mysql   ClusterIP      10.106.214.58    <none>          3306/TCP       94m

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   94m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-hwfft ContainerCreating
--- Description for fix-mysql-permissions-hwfft ---
  PodReadyToStartContainers   False 
  Initialized                 True 
  Ready                       False 
  ContainersReady             False 
  PodScheduled                True 
Volumes:
  kube-api-access-8dwps:
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
  Normal  Scheduled  0s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-hwfft to k8-node-40
