Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 08:52:24 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (10h ago)   41h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (10h ago)   41h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             41h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (9h ago)    41h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running             0             24m   172.16.74.25    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Terminating         0             24m   172.16.209.58   k8-node-20   <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running             0             24m   172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v18-49wb7      0/1     ContainerCreating   0             1s    <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      44h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             57m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   44h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   44h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:48:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:49:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:50:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:51:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:52:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
Error from server (BadRequest): container "fix-permissions" in pod "wazuh-indexer-0" is waiting to start: PodInitializing
Failed to fetch logs
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Init:0/2
--- Description for wazuh-indexer-0 ---
    ReadOnly:   false
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs-v3
    Optional:    false
  kube-api-access-9v8bs:
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
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  0s    default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal  Pulling    0s    kubelet            Pulling image "busybox"
--- Logs for wazuh-indexer-0 (Current) ---
Error from server (BadRequest): container "fix-permissions" in pod "wazuh-indexer-0" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "fix-permissions" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
