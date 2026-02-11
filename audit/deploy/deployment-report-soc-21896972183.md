Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:01:30 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS     RESTARTS     AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running    4 (9h ago)   16h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running    2 (9h ago)   16h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running    0            16h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running    0            16h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-2hx8p      0/1     Init:1/2   0            5s    172.16.74.49    k8-manager   <none>           <none>
wazuh-dashboard-7c976c74f8-54rsl   1/1     Running    0            15h   172.16.74.9     k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running    2 (9h ago)   16h   172.16.209.14   k8-node-20   <none>           <none>
wazuh-manager-648d6f9b5d-zn8tz     1/1     Running    2 (9h ago)   17h   172.16.209.38   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      19h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             19h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   19h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   19h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-cert-generator-v7-2hx8p Init:1/2
--- Description for wazuh-cert-generator-v7-2hx8p ---
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
  Normal  Scheduled  13s   default-scheduler  Successfully assigned soc/wazuh-cert-generator-v7-2hx8p to k8-manager
  Normal  Pulling    12s   kubelet            Pulling image "busybox"
  Normal  Pulled     11s   kubelet            Successfully pulled image "busybox" in 641ms (641ms including waiting). Image size: 2222260 bytes.
  Normal  Created    11s   kubelet            Created container: config-writer
  Normal  Started    10s   kubelet            Started container config-writer
  Normal  Pulled     9s    kubelet            Container image "debian:bookworm-slim" already present on machine
  Normal  Created    9s    kubelet            Created container: generator
  Normal  Started    8s    kubelet            Started container generator
--- Logs for wazuh-cert-generator-v7-2hx8p (Current) ---
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:2 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:4 http://deb.debian.org/debian bookworm/main amd64 Packages [8792 kB]
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:5 http://deb.debian.org/debian bookworm-updates/main amd64 Packages [6924 B]
[pod/wazuh-cert-generator-v7-2hx8p/generator] Get:6 http://deb.debian.org/debian-security bookworm-security/main amd64 Packages [295 kB]
Error from server (BadRequest): container "uploader" in pod "wazuh-cert-generator-v7-2hx8p" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-cert-generator-v7-2hx8p (Previous) ---
Error from server (BadRequest): previous terminated container "config-writer" in pod "wazuh-cert-generator-v7-2hx8p" not found
Failed to fetch previous logs
