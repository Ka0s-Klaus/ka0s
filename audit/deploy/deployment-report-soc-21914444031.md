Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 17:04:33 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS             RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running            4 (18h ago)     25h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running            2 (18h ago)     25h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running            0               25h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running            2 (7h47m ago)   25h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v1-2rvt9     0/1     CrashLoopBackOff   4 (18s ago)     4m46s   172.16.209.49   k8-node-20   <none>           <none>
wazuh-dashboard-579d87bb6b-9k9sz   1/1     Running            0               10m     172.16.74.58    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running            0               10m     172.16.209.21   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-xrfjm     1/1     Running            0               10m     172.16.209.45   k8-node-20   <none>           <none>
wazuh-security-init-qr8hg          0/1     Completed          0               10m     172.16.209.37   k8-node-20   <none>           <none>

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
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:00:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:01:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:02:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:03:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T17:04:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:19,964][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:19,964][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:19,965][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:20,119][INFO ][o.o.j.s.JobSweeper       ] [wazuh.indexer] Running full sweep
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:21,018][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:21,020][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:21,023][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:21,025][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:23,520][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:23,523][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:23,525][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:23,528][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:26,023][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:26,027][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:26,032][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:26,035][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:28,524][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:28,528][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:28,533][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:28,535][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:31,024][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:31,026][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:31,028][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:31,031][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,965][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:32,966][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:33,525][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:33,528][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:33,531][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:33,534][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:36,027][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:36,030][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:36,034][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:36,036][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:38,529][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:38,532][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:38,533][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:38,535][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:41,030][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:41,032][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:41,034][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T17:04:41,038][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-certs-generator-v1-2rvt9 CrashLoopBackOff
--- Description for wazuh-certs-generator-v1-2rvt9 ---
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
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  4m57s                default-scheduler  Successfully assigned soc/wazuh-certs-generator-v1-2rvt9 to k8-node-20
  Normal   Pulled     54s (x5 over 4m53s)  kubelet            Container image "ubuntu:22.04" already present on machine
  Normal   Created    53s (x5 over 4m51s)  kubelet            Created container: cert-generator
  Normal   Started    53s (x5 over 4m50s)  kubelet            Started container cert-generator
  Warning  BackOff    6s (x9 over 3m19s)   kubelet            Back-off restarting failed container cert-generator in pod wazuh-certs-generator-v1-2rvt9_soc(bfff9cb5-3abc-4a36-9a5b-cbb6ff520e02)
--- Logs for wazuh-certs-generator-v1-2rvt9 (Current) ---
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Selecting previously unselected package libsasl2-modules:amd64.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Preparing to unpack .../14-libsasl2-modules_2.1.27+dfsg2-3ubuntu1.2_amd64.deb ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Unpacking libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libpsl5:amd64 (0.21.0-1.2build2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libbrotli1:amd64 (1.0.9-2build6) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libnghttp2-14:amd64 (1.43.0-1ubuntu0.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libldap-common (2.5.20+dfsg-0ubuntu0.22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-modules-db:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2build4) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-2:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libssh-4:amd64 (0.9.6-2ubuntu0.22.04.5) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up openssl (3.0.2-0ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up publicsuffix (20211207.1025-1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libldap-2.5-0:amd64 (2.5.20+dfsg-0ubuntu0.22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up ca-certificates (20240203~22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: unable to initialize frontend: Dialog
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: (TERM is not set, so the dialog frontend is not usable.)
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: falling back to frontend: Readline
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: unable to initialize frontend: Readline
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.34.0 /usr/local/share/perl/5.34.0 /usr/lib/x86_64-linux-gnu/perl5/5.34 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl-base /usr/lib/x86_64-linux-gnu/perl/5.34 /usr/share/perl/5.34 /usr/local/lib/site_perl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: falling back to frontend: Teletype
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 146 added, 0 removed; done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libcurl4:amd64 (7.81.0-1ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up curl (7.81.0-1ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing triggers for libc-bin (2.35-0ubuntu3.11) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing triggers for ca-certificates (20240203~22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 0 added, 0 removed; done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Running hooks in /etc/ca-certificates/update.d...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]                                  Dload  Upload   Total   Spent    Left  Speed
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   138  100   138    0     0    736      0 --:--:-- --:--:-- --:--:--   737
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]  40 55.8M   40 22.5M    0     0  38.5M      0  0:00:01 --:--:--  0:00:01 38.5M100 55.8M  100 55.8M    0     0  50.5M      0  0:00:01  0:00:01 --:--:-- 64.2M
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Generating certificates...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Verbose logging redirected to //wazuh-certificates-tool.log
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Generating the root certificate.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Generating Admin certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Admin certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Generating Wazuh indexer certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Wazuh indexer certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Generating Filebeat certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Wazuh Filebeat certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Generating Wazuh dashboard certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Wazuh dashboard certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing output...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] tar: wazuh-certificates.tar: Cannot open: No such file or directory
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] tar: Error is not recoverable: exiting now
--- Logs for wazuh-certs-generator-v1-2rvt9 (Previous) ---
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Selecting previously unselected package libsasl2-modules:amd64.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Preparing to unpack .../14-libsasl2-modules_2.1.27+dfsg2-3ubuntu1.2_amd64.deb ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Unpacking libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libpsl5:amd64 (0.21.0-1.2build2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libbrotli1:amd64 (1.0.9-2build6) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libnghttp2-14:amd64 (1.43.0-1ubuntu0.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libldap-common (2.5.20+dfsg-0ubuntu0.22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-modules-db:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2build4) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libsasl2-2:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libssh-4:amd64 (0.9.6-2ubuntu0.22.04.5) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up openssl (3.0.2-0ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up publicsuffix (20211207.1025-1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libldap-2.5-0:amd64 (2.5.20+dfsg-0ubuntu0.22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up ca-certificates (20240203~22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: unable to initialize frontend: Dialog
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: (TERM is not set, so the dialog frontend is not usable.)
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: falling back to frontend: Readline
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: unable to initialize frontend: Readline
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.34.0 /usr/local/share/perl/5.34.0 /usr/lib/x86_64-linux-gnu/perl5/5.34 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl-base /usr/lib/x86_64-linux-gnu/perl/5.34 /usr/share/perl/5.34 /usr/local/lib/site_perl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] debconf: falling back to frontend: Teletype
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 146 added, 0 removed; done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up libcurl4:amd64 (7.81.0-1ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Setting up curl (7.81.0-1ubuntu1.21) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing triggers for libc-bin (2.35-0ubuntu3.11) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing triggers for ca-certificates (20240203~22.04.1) ...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 0 added, 0 removed; done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Running hooks in /etc/ca-certificates/update.d...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] done.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]                                  Dload  Upload   Total   Spent    Left  Speed
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   138  100   138    0     0    736      0 --:--:-- --:--:-- --:--:--   737
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator]  40 55.8M   40 22.5M    0     0  38.5M      0  0:00:01 --:--:--  0:00:01 38.5M100 55.8M  100 55.8M    0     0  50.5M      0  0:00:01  0:00:01 --:--:-- 64.2M
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Generating certificates...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Verbose logging redirected to //wazuh-certificates-tool.log
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Generating the root certificate.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:14 INFO: Generating Admin certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Admin certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Generating Wazuh indexer certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Wazuh indexer certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:15 INFO: Generating Filebeat certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Wazuh Filebeat certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Generating Wazuh dashboard certificates.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] 11/02/2026 17:04:16 INFO: Wazuh dashboard certificates created.
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] Processing output...
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] tar: wazuh-certificates.tar: Cannot open: No such file or directory
[pod/wazuh-certs-generator-v1-2rvt9/cert-generator] tar: Error is not recoverable: exiting now
