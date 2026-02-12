Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 09:40:03 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS    RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running   6 (11h ago)   41h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running   4 (10h ago)   41h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running   0             41h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running   4 (10h ago)   41h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running   0             72m   172.16.74.25    k8-manager   <none>           <none>
wazuh-indexer-0                    0/1     Pending   0             1s    <none>          <none>       <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running   0             72m   172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v20-8c7sr      1/1     Running   0             18m   172.16.74.55    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      45h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             105m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   45h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   45h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:35:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:35:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:36:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:37:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:38:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:39:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:40:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:40:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Pending
--- Description for wazuh-indexer-0 ---
Volumes:
  wazuh-indexer-data-v2:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  wazuh-indexer-data-v2-wazuh-indexer-0
    ReadOnly:   false
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs-v3
    Optional:    false
  kube-api-access-c97mw:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:                      <none>
--- Logs for wazuh-indexer-0 (Current) ---
--- Logs for wazuh-indexer-0 (Previous) ---
