Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 15:27:07 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                     READY   STATUS       RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
itop-5cdd8dc7b9-g8dlj    0/1     Init:Error   3 (42s ago)   60s     172.16.209.34   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8   1/1     Running      0             5h43m   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.102.203.241   192.168.1.244   80:32708/TCP   5h43m
mysql   ClusterIP      10.106.214.58    <none>          3306/TCP       5h43m

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   5h43m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
itop-5cdd8dc7b9-g8dlj Init:Error
--- Description for itop-5cdd8dc7b9-g8dlj ---
    ClaimName:  itop-web-pvc
    ReadOnly:   false
  kube-api-access-44z9p:
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
  Normal   Scheduled  60s                default-scheduler  Successfully assigned itop/itop-5cdd8dc7b9-g8dlj to k8-node-20
  Normal   Pulled     14s (x4 over 60s)  kubelet            Container image "vbkunin/itop:latest-base" already present on machine
  Normal   Created    14s (x4 over 60s)  kubelet            Created container: init-itop-files
  Normal   Started    14s (x4 over 60s)  kubelet            Started container init-itop-files
  Warning  BackOff    12s (x5 over 56s)  kubelet            Back-off restarting failed container init-itop-files in pod itop-5cdd8dc7b9-g8dlj_itop(c1389c51-e7e4-4b98-8092-9bce0d9cfb5c)
