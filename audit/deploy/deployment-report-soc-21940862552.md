Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 09:28:27 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS    RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running   6 (10h ago)   41h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running   4 (10h ago)   41h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running   0             41h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running   4 (10h ago)   41h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-57b54ddcf5-m6qvb   1/1     Running   0             60m     172.16.74.25    k8-manager   <none>           <none>
wazuh-manager-5d8546b8d5-ftxmf     1/1     Running   0             60m     172.16.209.17   k8-node-20   <none>           <none>
wazuh-security-init-v20-8c7sr      1/1     Running   0             6m30s   172.16.74.55    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      45h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             93m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   45h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   45h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-57b54ddcf5-m6qvb ---
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:24:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:25:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:26:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:27:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-57b54ddcf5-m6qvb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T09:28:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
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
