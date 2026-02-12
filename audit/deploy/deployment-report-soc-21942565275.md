Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 10:21:36 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS     RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running    6 (11h ago)   42h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running    4 (11h ago)   42h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running    0             42h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running    4 (11h ago)   42h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-97b9cc795-hw247   1/1     Running    0             29m   172.16.74.32    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running    0             29m   172.16.209.41   k8-node-20   <none>           <none>
wazuh-manager-c486b48c8-xxm8g     0/1     Init:0/1   0             57s   <none>          k8-node-20   <none>           <none>
wazuh-security-init-v21-lrshk     0/1     Error      3 (35s ago)   61s   172.16.74.52    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      45h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             146m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   45h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   45h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-97b9cc795-hw247 ---
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:17:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:18:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:19:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:20:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T10:21:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,909][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,909][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,909][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,909][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,910][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,910][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:18,910][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:19,435][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:19,438][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:19,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:19,442][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:21,938][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:21,942][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:21,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:21,949][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:24,439][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:24,441][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:24,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:24,446][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:26,473][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:26,939][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:26,942][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:26,944][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:26,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:29,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:29,442][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:29,444][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:29,446][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,911][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,912][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,912][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,912][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,912][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,912][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,913][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,913][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,913][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,913][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,942][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,944][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,946][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:31,948][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:34,445][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:34,449][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:34,452][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:34,455][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:36,948][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:36,951][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:36,953][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T10:21:36,956][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-manager-c486b48c8-xxm8g Init:0/1
wazuh-security-init-v21-lrshk Error
--- Description for wazuh-manager-c486b48c8-xxm8g ---
    ReadOnly:   false
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-manager-certs-v4
    Optional:    false
  kube-api-access-kt5bz:
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
  Type     Reason       Age                From               Message
  ----     ------       ----               ----               -------
  Normal   Scheduled    57s                default-scheduler  Successfully assigned soc/wazuh-manager-c486b48c8-xxm8g to k8-node-20
  Warning  FailedMount  26s (x7 over 58s)  kubelet            MountVolume.SetUp failed for volume "wazuh-manager-config" : configmap "wazuh-manager-conf" not found
--- Logs for wazuh-manager-c486b48c8-xxm8g (Current) ---
Error from server (BadRequest): container "wait-for-indexer" in pod "wazuh-manager-c486b48c8-xxm8g" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-manager-c486b48c8-xxm8g (Previous) ---
Error from server (BadRequest): previous terminated container "wait-for-indexer" in pod "wazuh-manager-c486b48c8-xxm8g" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v21-lrshk ---
    SecretName:  wazuh-indexer-certs-v4
    Optional:    false
  kube-api-access-l4l8w:
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  62s                default-scheduler  Successfully assigned soc/wazuh-security-init-v21-lrshk to k8-manager
  Normal   Pulled     12s (x4 over 61s)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    12s (x4 over 61s)  kubelet            Created container: security-init
  Normal   Started    12s (x4 over 61s)  kubelet            Started container security-init
  Warning  BackOff    7s (x4 over 52s)   kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v21-lrshk_soc(f7f697f8-85ae-4ca1-919e-04f9bc812500)
--- Logs for wazuh-security-init-v21-lrshk (Current) ---
[pod/wazuh-security-init-v21-lrshk/security-init] 	 SHA256: FA:73:19:A9:AB:63:EC:84:B1:98:C6:95:0A:F5:04:86:8D:F0:D9:A2:53:2B:5F:B3:0C:D8:25:48:53:B8:8C:BC
[pod/wazuh-security-init-v21-lrshk/security-init] Signature algorithm name: SHA256withRSA
[pod/wazuh-security-init-v21-lrshk/security-init] Subject Public Key Algorithm: 2048-bit RSA key
[pod/wazuh-security-init-v21-lrshk/security-init] Version: 3
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] Extensions: 
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] #1: ObjectId: 2.5.29.35 Criticality=false
[pod/wazuh-security-init-v21-lrshk/security-init] AuthorityKeyIdentifier [
[pod/wazuh-security-init-v21-lrshk/security-init] KeyIdentifier [
[pod/wazuh-security-init-v21-lrshk/security-init] 0000: 7F 99 B7 47 C7 5F 8B 07   AA EF E6 ED 62 85 34 E1  ...G._......b.4.
[pod/wazuh-security-init-v21-lrshk/security-init] 0010: 1B 51 BF BA                                        .Q..
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] #2: ObjectId: 2.5.29.37 Criticality=false
[pod/wazuh-security-init-v21-lrshk/security-init] ExtendedKeyUsages [
[pod/wazuh-security-init-v21-lrshk/security-init]   serverAuth
[pod/wazuh-security-init-v21-lrshk/security-init]   clientAuth
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] #3: ObjectId: 2.5.29.15 Criticality=false
[pod/wazuh-security-init-v21-lrshk/security-init] KeyUsage [
[pod/wazuh-security-init-v21-lrshk/security-init]   DigitalSignature
[pod/wazuh-security-init-v21-lrshk/security-init]   Non_repudiation
[pod/wazuh-security-init-v21-lrshk/security-init]   Key_Encipherment
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] #4: ObjectId: 2.5.29.17 Criticality=false
[pod/wazuh-security-init-v21-lrshk/security-init] SubjectAlternativeName [
[pod/wazuh-security-init-v21-lrshk/security-init]   DNSName: admin
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] #5: ObjectId: 2.5.29.14 Criticality=false
[pod/wazuh-security-init-v21-lrshk/security-init] SubjectKeyIdentifier [
[pod/wazuh-security-init-v21-lrshk/security-init] KeyIdentifier [
[pod/wazuh-security-init-v21-lrshk/security-init] 0000: 22 11 83 05 5D 30 51 61   09 2C AA 1E 04 74 4D 7E  "...]0Qa.,...tM.
[pod/wazuh-security-init-v21-lrshk/security-init] 0010: 92 71 C2 27                                        .q.'
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] ]
[pod/wazuh-security-init-v21-lrshk/security-init] 
[pod/wazuh-security-init-v21-lrshk/security-init] Running securityadmin.sh...
[pod/wazuh-security-init-v21-lrshk/security-init] Security Admin v7
[pod/wazuh-security-init-v21-lrshk/security-init] Will connect to wazuh-indexer:9200 ... done
[pod/wazuh-security-init-v21-lrshk/security-init] Connected as "CN=admin,O=Wazuh,L=California,C=US"
[pod/wazuh-security-init-v21-lrshk/security-init] ERR: "CN=admin,O=Wazuh,L=California,C=US" is not an admin user
[pod/wazuh-security-init-v21-lrshk/security-init] Seems you use a client certificate but this one is not registered as admin_dn
[pod/wazuh-security-init-v21-lrshk/security-init] Make sure opensearch.yml on all nodes contains:
[pod/wazuh-security-init-v21-lrshk/security-init] plugins.security.authcz.admin_dn:
[pod/wazuh-security-init-v21-lrshk/security-init]   - ""CN=admin,O=Wazuh,L=California,C=US""
--- Logs for wazuh-security-init-v21-lrshk (Previous) ---
[pod/wazuh-security-init-v21-lrshk/security-init] unable to retrieve container logs for containerd://1e3b7bdc489f0dbe131150ce2541d1cc87156a2b03664421979aaabed30f75ae