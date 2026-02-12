Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 09:21:57 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (10h ago)   41h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (10h ago)   41h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0             41h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (10h ago)   41h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running             0             54m   172.16.74.25    k8-manager   <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running             0             54m   172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v20-8c7sr      0/1     ContainerCreating   0             0s    <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      44h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             87m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   44h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   44h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:17:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:17:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:17:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:17:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:17:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:18:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:19:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:20:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:21:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
--> Debugging: Checking for Wazuh Indexer Logs...
error: error executing jsonpath "{.items[0].metadata.name}": Error executing template: array index out of bounds: index 0, length 0. Printing more information for debugging the template:
	template was:
		{.items[0].metadata.name}
	object given to jsonpath engine was:
		map[string]interface {}{"apiVersion":"v1", "items":[]interface {}{}, "kind":"List", "metadata":map[string]interface {}{"resourceVersion":""}}


No wazuh-indexer pod found.
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
