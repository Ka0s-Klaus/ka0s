Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 11:02:58 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             4 (12h ago)    19h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             2 (12h ago)    19h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0              19h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             2 (105m ago)   19h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-f2kgw     0/1     ContainerCreating   0              0s    <none>          k8-manager   <none>           <none>
wazuh-dashboard-579d87bb6b-pbd2m   1/1     Running             0              58m   172.16.74.60    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0              58m   172.16.209.55   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-sszd8     1/1     Running             0              58m   172.16.209.20   k8-node-20   <none>           <none>
wazuh-security-init-v8-g25df       0/1     ContainerCreating   0              0s    <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      22h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             22h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   22h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   22h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-579d87bb6b-pbd2m ---
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:58:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:58:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:58:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:58:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T10:59:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:00:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:01:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:02:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:53,580][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:53,582][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:53,585][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:53,587][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:56,081][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:56,083][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:56,084][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:56,086][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,502][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,502][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,503][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,504][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:57,504][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:58,580][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:58,582][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:58,584][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:02:58,586][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:03:01,083][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:03:01,085][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:03:01,088][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:03:01,089][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
