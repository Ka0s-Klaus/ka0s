Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 14:17:00 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             4 (15h ago)     22h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             2 (15h ago)     22h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0               22h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             2 (4h59m ago)   22h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-vhxsc     0/1     ContainerCreating   0               1s      <none>          k8-manager   <none>           <none>
wazuh-dashboard-579d87bb6b-pbd2m   1/1     Running             0               4h12m   172.16.74.60    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0               4h12m   172.16.209.55   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-sszd8     1/1     Running             0               4h12m   172.16.209.20   k8-node-20   <none>           <none>
wazuh-security-init-v10-cw88p      0/1     ContainerCreating   0               1s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      25h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             25h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   25h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   25h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-579d87bb6b-pbd2m ---
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:12:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:12:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:12:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:12:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:13:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:14:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:15:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T14:16:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:55,531][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.55:9200, remoteAddress=/172.16.209.20:54616}
[pod/wazuh-indexer-0/wazuh-indexer] io.netty.handler.codec.DecoderException: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:500) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1357) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:868) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:796) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeysPlain(NioEventLoop.java:697) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:660) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:998) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:56,760][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:56,761][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:56,762][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:56,763][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:59,262][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:59,264][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:59,266][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:16:59,267][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:17:01,763][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:17:01,765][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:17:01,766][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T14:17:01,768][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
