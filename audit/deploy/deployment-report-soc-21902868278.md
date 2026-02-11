Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 11:15:16 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS       AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             4 (12h ago)    19h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             2 (12h ago)    19h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0              19h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             2 (118m ago)   19h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-bsbs8     0/1     ContainerCreating   0              0s    <none>          k8-manager   <none>           <none>
wazuh-dashboard-579d87bb6b-pbd2m   1/1     Running             0              70m   172.16.74.60    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0              70m   172.16.209.55   k8-node-20   <none>           <none>
wazuh-manager-565968f5d7-sszd8     1/1     Running             0              70m   172.16.209.20   k8-node-20   <none>           <none>
wazuh-security-init-v10-5cgzg      0/1     ContainerCreating   0              0s    <none>          k8-manager   <none>           <none>

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
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:11:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:12:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:13:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:14:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-pbd2m/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T11:15:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:53,880][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:53,882][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:53,884][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:53,886][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:56,380][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:56,382][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:56,384][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:56,386][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:58,881][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:58,883][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:58,885][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:14:58,887][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:01,382][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:01,383][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:01,385][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:01,387][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:03,881][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:03,883][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:03,885][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:03,887][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,661][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,661][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,661][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,662][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:05,663][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:06,384][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:06,386][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:06,388][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:06,391][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:08,885][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:08,887][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:08,889][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:08,891][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:11,387][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:11,390][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:11,392][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:11,394][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:13,887][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:13,889][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:13,891][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:13,893][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:16,388][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:16,390][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:16,392][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T11:15:16,394][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-certs-generator-v9-bsbs8 ContainerCreating
--- Description for wazuh-certs-generator-v9-bsbs8 ---
  PodScheduled                True 
Volumes:
  kube-api-access-9xl4p:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned soc/wazuh-certs-generator-v9-bsbs8 to k8-manager
  Normal  Pulling    1s    kubelet            Pulling image "alpine:latest"
  Normal  Pulled     1s    kubelet            Successfully pulled image "alpine:latest" in 665ms (665ms including waiting). Image size: 3872672 bytes.
  Normal  Created    1s    kubelet            Created container: cert-generator
  Normal  Started    0s    kubelet            Started container cert-generator
--- Logs for wazuh-certs-generator-v9-bsbs8 (Current) ---
Error from server (BadRequest): container "cert-generator" in pod "wazuh-certs-generator-v9-bsbs8" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-certs-generator-v9-bsbs8 (Previous) ---
Error from server (BadRequest): previous terminated container "cert-generator" in pod "wazuh-certs-generator-v9-bsbs8" not found
Failed to fetch previous logs
