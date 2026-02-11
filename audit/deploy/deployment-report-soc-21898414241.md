Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:49:43 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                2/2     Running             4 (10h ago)   17h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                2/2     Running             2 (10h ago)   17h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                2/2     Running             0             17h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                2/2     Running             0             17h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-m42bc    0/1     Completed           0             6m59s   172.16.74.57    k8-manager   <none>           <none>
wazuh-dashboard-c4765547-46h4h   1/1     Running             0             7m      172.16.74.22    k8-manager   <none>           <none>
wazuh-indexer-0                  1/1     Running             0             6m58s   172.16.209.18   k8-node-20   <none>           <none>
wazuh-manager-656dfb7d78-5qmhh   1/1     Running             0             6m55s   172.16.209.27   k8-node-20   <none>           <none>
wazuh-security-init-4wrxp        0/1     ContainerCreating   0             0s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      20h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             20h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   20h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   20h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-c4765547-46h4h ---
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:45:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:46:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:47:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:45Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:50Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:48:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:00Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:10Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:15Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:20Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:30Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:35Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:40Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:49:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:21,114][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:21,114][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:21,114][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:21,114][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:23,256][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:23,260][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:23,263][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:23,266][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:25,758][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:25,761][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:25,764][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:25,767][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:28,259][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:28,262][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:28,265][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:28,268][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:30,762][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:30,768][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:30,771][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:30,774][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:33,262][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:33,266][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:33,269][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:33,272][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,116][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,116][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,116][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,117][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,117][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,117][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,117][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,118][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,118][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:34,118][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:35,764][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:35,767][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:35,771][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:35,774][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:38,267][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:38,270][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:38,273][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:38,276][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:40,770][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:40,773][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:40,776][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:40,779][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:43,271][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:43,275][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:43,278][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:49:43,281][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-4wrxp ContainerCreating
--- Description for wazuh-security-init-4wrxp ---
Volumes:
  certificates:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-cqglw:
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
  Normal  Scheduled  2s    default-scheduler  Successfully assigned soc/wazuh-security-init-4wrxp to k8-manager
  Normal  Pulling    1s    kubelet            Pulling image "wazuh/wazuh-indexer:4.14.2"
--- Logs for wazuh-security-init-4wrxp (Current) ---
Error from server (BadRequest): container "security-init" in pod "wazuh-security-init-4wrxp" is waiting to start: ContainerCreating
Failed to fetch current logs
--- Logs for wazuh-security-init-4wrxp (Previous) ---
Error from server (BadRequest): previous terminated container "security-init" in pod "wazuh-security-init-4wrxp" not found
Failed to fetch previous logs
