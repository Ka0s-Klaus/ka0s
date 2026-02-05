Deployment Report: core/b2b/core-services/itop
Date: Thu Feb  5 15:15:42 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS                  RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-7h7gn   0/1     Pending                 0             1s      <none>          k8-node-30   <none>           <none>
itop-55f7b4bcb5-5t82x         0/1     Init:CrashLoopBackOff   7 (79s ago)   12m     172.16.209.26   k8-node-20   <none>           <none>
mysql-6c885b98c4-lxxs8        1/1     Running                 0             5h32m   172.16.209.6    k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
itop    LoadBalancer   10.102.203.241   192.168.1.244   80:32708/TCP   5h32m
mysql   ClusterIP      10.106.214.58    <none>          3306/TCP       5h32m

>>> Ingress Status:
NAME           CLASS    HOSTS          ADDRESS   PORTS     AGE
itop-ingress   <none>   itsm.ka0s.io             80, 443   5h32m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
--> Checking Pods status...
ERROR: The following pods are not ready:
fix-mysql-permissions-7h7gn Pending
itop-55f7b4bcb5-5t82x Init:CrashLoopBackOff
--- Description for fix-mysql-permissions-7h7gn ---
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-89g2r (ro)
Conditions:
  Type           Status
  PodScheduled   True 
Volumes:
  kube-api-access-89g2r:
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
  Normal  Scheduled  0s    default-scheduler  Successfully assigned itop/fix-mysql-permissions-7h7gn to k8-node-30
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  12m                   default-scheduler  Successfully assigned itop/itop-55f7b4bcb5-5t82x to k8-node-20
  Warning  BackOff    2m14s (x47 over 12m)  kubelet            Back-off restarting failed container init-itop-files in pod itop-55f7b4bcb5-5t82x_itop(96028a29-69a1-479a-9032-e8a77041758e)
  Normal   Pulled     80s (x8 over 12m)     kubelet            Container image "vbkunin/itop:latest-base" already present on machine
  Normal   Created    80s (x8 over 12m)     kubelet            Created container: init-itop-files
  Normal   Started    80s (x8 over 12m)     kubelet            Started container init-itop-files
