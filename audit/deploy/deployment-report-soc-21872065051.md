Deployment Report: core/b2b/core-services/soc
Date: Tue Feb 10 16:08:44 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             0          24m   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             0          24m   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0          24m   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             0          24m   192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-chw7f      0/1     Completed           0          70s   172.16.209.34   k8-node-20   <none>           <none>
wazuh-dashboard-7c976c74f8-54rsl   0/1     ContainerCreating   0          74s   <none>          k8-manager   <none>           <none>
wazuh-dashboard-948f56664-hvv6q    1/1     Running             0          18m   172.16.209.35   k8-node-20   <none>           <none>
wazuh-indexer-0                    1/1     Running             0          33m   172.16.209.9    k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     1/1     Running             0          79m   172.16.209.7    k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      3h42m
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             3h42m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   3h42m

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   3h42m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-7c976c74f8-54rsl ContainerCreating
--- Description for wazuh-dashboard-7c976c74f8-54rsl ---
    Optional:    false
  dashboard-conf:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-5dklk:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  89s   default-scheduler  Successfully assigned soc/wazuh-dashboard-7c976c74f8-54rsl to k8-manager
  Normal  Pulling    88s   kubelet            Pulling image "wazuh/wazuh-dashboard:4.14.2"
--- Logs for wazuh-dashboard-7c976c74f8-54rsl (Current) ---
Error from server (BadRequest): container "wazuh-dashboard" in pod "wazuh-dashboard-7c976c74f8-54rsl" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-dashboard-7c976c74f8-54rsl (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-7c976c74f8-54rsl" not found
Failed to fetch previous logs
