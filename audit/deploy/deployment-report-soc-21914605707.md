Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 16:59:48 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             4 (18h ago)     25h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             2 (18h ago)     25h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0               25h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             2 (7h42m ago)   25h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-rc2bk        1/1     Running             5 (2m ago)      5m59s   172.16.209.29   k8-node-20   <none>           <none>
wazuh-certs-generator-v1-2rvt9     0/1     ContainerCreating   0               0s      <none>          k8-node-20   <none>           <none>
wazuh-dashboard-579d87bb6b-9k9sz   1/1     Running             0               6m      172.16.74.58    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0               5m51s   172.16.209.21   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-xrfjm     1/1     Running             0               5m50s   172.16.209.45   k8-node-20   <none>           <none>
wazuh-security-init-qr8hg          0/1     Completed           0               5m59s   172.16.209.37   k8-node-20   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      28h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             28h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   28h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   28h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-579d87bb6b-9k9sz ---
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:55:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:56:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:57:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:58:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T16:59:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] Caused by: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:117) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:370) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert$AlertConsumer.consume(Alert.java:287) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:209) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.decode(SSLEngineImpl.java:736) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.readRecord(SSLEngineImpl.java:691) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:506) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:482) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/javax.net.ssl.SSLEngine.unwrap(SSLEngine.java:679) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler$SslEngineType$3.unwrap(SslHandler.java:308) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1486) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1377) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1428) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:530) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:38,299][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:38,301][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:38,303][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:38,305][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:40,800][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:40,803][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:40,807][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:40,811][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:43,300][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:43,305][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:43,308][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:43,313][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:45,801][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:45,804][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:45,808][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:45,810][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,716][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,717][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:46,718][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:48,302][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:48,424][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:48,430][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T16:59:48,435][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-certs-generator-v1-2rvt9 ContainerCreating
--- Description for wazuh-certs-generator-v1-2rvt9 ---
  PodScheduled                True 
Volumes:
  config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-certs-config-v1
    Optional:  false
  kube-api-access-wc75z:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-certs-generator-v1-2rvt9 to k8-node-20
--- Logs for wazuh-certs-generator-v1-2rvt9 (Current) ---
Error from server (BadRequest): container "cert-generator" in pod "wazuh-certs-generator-v1-2rvt9" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-certs-generator-v1-2rvt9 (Previous) ---
Error from server (BadRequest): previous terminated container "cert-generator" in pod "wazuh-certs-generator-v1-2rvt9" not found
Failed to fetch previous logs
