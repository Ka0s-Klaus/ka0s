Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 09:09:29 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (10h ago)   41h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (10h ago)   41h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             41h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (10h ago)   41h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running             0             41m   172.16.74.25    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0             17m   172.16.209.53   k8-node-20   <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running             0             41m   172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v19-7vf8q      0/1     ContainerCreating   0             0s    <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      44h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             74m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   44h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   44h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:05:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:06:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:07:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:08:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:09:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:12,527][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:13,741][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:13,743][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:13,744][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:13,745][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:16,241][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:16,243][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:16,246][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:16,248][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:18,741][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:18,743][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:18,746][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:18,748][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:21,246][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:21,247][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:21,249][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:21,250][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:23,748][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:23,749][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:23,751][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:23,752][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,528][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,528][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,529][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,530][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:25,530][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:26,252][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:26,253][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:26,255][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:26,256][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:28,750][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:28,751][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:28,752][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:28,754][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:30,497][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:31,252][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:31,254][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:31,255][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T09:09:31,257][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
