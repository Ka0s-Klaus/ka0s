Deployment Report: core/b2b/core-services/planka
Date: Sun Feb  8 09:36:48 UTC 2026
Trigger: push by santakloud
Namespace: planka
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS              RESTARTS   AGE    IP       NODE         NOMINATED NODE   READINESS GATES
planka-66ddf7bf8c-vx2g8     0/1     Init:0/1            0          2m1s   <none>   k8-node-30   <none>           <none>
planka-db-f6fdc6fcc-sflxf   0/1     ContainerCreating   0          2m1s   <none>   k8-node-30   <none>           <none>

>>> Services Status:
NAME        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
planka      LoadBalancer   10.97.249.37    192.168.1.244   80:30497/TCP   2m1s
planka-db   ClusterIP      10.105.250.18   <none>          5432/TCP       2m1s

>>> Ingress Status:
No resources found in planka namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: planka ===
--> Checking Pods status...
ERROR: The following pods are not ready:
planka-66ddf7bf8c-vx2g8 Init:0/1
planka-db-f6fdc6fcc-sflxf ContainerCreating
--- Description for planka-66ddf7bf8c-vx2g8 ---
  PodScheduled                True 
Volumes:
  planka-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  planka-data-pvc
    ReadOnly:   false
  kube-api-access-tvk9b:
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
  Normal  Scheduled  2m    default-scheduler  Successfully assigned planka/planka-66ddf7bf8c-vx2g8 to k8-node-30
--- Description for planka-db-f6fdc6fcc-sflxf ---
  PodScheduled                True 
Volumes:
  db-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  planka-db-pvc
    ReadOnly:   false
  kube-api-access-4h9gl:
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
  Normal  Scheduled  2m    default-scheduler  Successfully assigned planka/planka-db-f6fdc6fcc-sflxf to k8-node-30
