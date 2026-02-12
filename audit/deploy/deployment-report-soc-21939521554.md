Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 08:45:50 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (10h ago)   41h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (10h ago)   41h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             41h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (9h ago)    41h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running             0             17m   172.16.74.25    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0             17m   172.16.209.58   k8-node-20   <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running             0             17m   172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v17-gvp9t      0/1     ContainerCreating   0             0s    <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      44h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             50m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   44h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   44h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:41:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:42:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:43:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:44:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:45:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:32,848][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:33,112][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:35,346][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:35,348][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:35,350][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:35,351][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:37,849][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:37,850][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:37,853][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:37,854][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:40,349][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:40,351][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:40,355][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:40,357][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:42,851][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:42,854][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:42,857][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:42,859][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:45,352][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:45,355][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:45,356][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:45,357][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,113][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:46,114][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:47,856][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:47,857][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:47,858][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:47,859][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:50,356][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:50,357][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:50,358][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:50,360][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:45:51,459][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
