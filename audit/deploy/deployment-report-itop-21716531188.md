Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 15:04:19 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS       RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-bzqn9   0/1     Completed    0             61s     172.16.146.16   k8-node-30   <none>           <none>
itop-55f7b4bcb5-5t82x         0/1     Init:Error   3 (38s ago)   58s     172.16.209.26   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8        1/1     Running      0             5h21m   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.102.203.241   192.168.1.244   80:32708/TCP   5h21m
mysql   ClusterIP      10.106.214.58    <none>          3306/TCP       5h21m

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   5h21m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-55f7b4bcb5-5t82x Init:Error
--- Description for itop-55f7b4bcb5-5t82x ---
    ClaimName:  itop-web-pvc
    ReadOnly:   false
  kube-api-access-5dtlp:
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  57s                default-scheduler  Successfully assigned itop/itop-55f7b4bcb5-5t82x to k8-node-20
  Normal   Pulled     12s (x4 over 57s)  kubelet            Container image "vbkunin/itop:latest-base" already present on machine
  Normal   Created    12s (x4 over 57s)  kubelet            Created container: init-itop-files
  Normal   Started    12s (x4 over 57s)  kubelet            Started container init-itop-files
  Warning  BackOff    9s (x4 over 53s)   kubelet            Back-off restarting failed container init-itop-files in pod itop-55f7b4bcb5-5t82x_itop(96028a29-69a1-479a-9032-e8a77041758e)
