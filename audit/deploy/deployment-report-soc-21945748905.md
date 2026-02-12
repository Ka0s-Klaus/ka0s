Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 12:02:07 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS              RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running             6 (13h ago)   44h    192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running             4 (13h ago)   44h    192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running             0             44h    192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running             4 (13h ago)   44h    192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-6lk47       0/1     Completed           0             3m3s   172.16.74.39    k8-manager   <none>           <none>
wazuh-dashboard-97b9cc795-hw247   1/1     Running             0             130m   172.16.74.32    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running             0             130m   172.16.209.41   k8-node-20   <none>           <none>
wazuh-manager-c486b48c8-xxm8g     1/1     Running             0             101m   172.16.209.30   k8-node-20   <none>           <none>
wazuh-security-init-s8hmg         1/1     Running             0             3m3s   172.16.74.55    k8-manager   <none>           <none>
wazuh-setup-job-jsv8d             0/1     ContainerCreating   0             0s     <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.106.200.130   192.168.1.242   443:31698/TCP                                   47h
wazuh-indexer            ClusterIP      None             <none>          9200/TCP                                        4h7m
wazuh-indexer-headless   ClusterIP      None             <none>          9300/TCP                                        3m4s
wazuh-manager            LoadBalancer   10.109.153.22    192.168.1.243   1514:31970/TCP,1515:30538/TCP,55000:30748/TCP   47h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   47h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-97b9cc795-hw247 ---
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:57:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:58:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T11:59:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:00:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:01:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:02:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:02:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-97b9cc795-hw247/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T12:02:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,177][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,225][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,233][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,247][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:52,255][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:54,724][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:54,728][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:54,731][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:54,738][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:57,224][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:57,230][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:57,236][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:57,241][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:59,726][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:59,735][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:59,751][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:01:59,770][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:01,462][INFO ][o.o.j.s.JobSweeper       ] [wazuh.indexer] Running full sweep
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:02,231][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:02,234][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:02,237][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:02,239][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:04,730][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:04,732][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:04,734][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:04,737][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:05,178][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:07,231][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:07,232][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:07,234][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:07,234][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:09,732][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:09,734][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:09,736][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T12:02:09,738][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
