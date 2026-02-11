Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:03:31 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS             RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                2/2     Running            4 (10h ago)   17h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                2/2     Running            2 (10h ago)   17h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                2/2     Running            0             17h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                2/2     Running            0             17h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-lx6j2    0/1     Completed          0             7m36s   172.16.74.17    k8-manager   <none>           <none>
wazuh-dashboard-c4765547-46h4h   1/1     Running            0             20m     172.16.74.22    k8-manager   <none>           <none>
wazuh-indexer-0                  1/1     Running            0             20m     172.16.209.18   k8-node-20   <none>           <none>
wazuh-manager-656dfb7d78-5qmhh   1/1     Running            0             20m     172.16.209.27   k8-node-20   <none>           <none>
wazuh-security-init-v2-qfdgx     0/1     CrashLoopBackOff   4 (77s ago)   3m30s   172.16.74.20    k8-manager   <none>           <none>

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
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:59:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:00:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:01:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:33Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:38Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:48Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:53Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:02:58Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:08Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:13Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:18Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:23Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:28Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:03:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,251][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,807][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,809][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,811][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:13,813][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:16,309][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:16,310][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:16,312][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:16,316][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:18,811][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:18,812][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:18,815][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:18,816][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:21,312][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:21,314][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:21,316][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:21,318][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:23,813][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:23,815][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:23,817][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:23,818][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,252][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,317][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,319][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,321][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:26,322][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:28,818][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:28,820][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:28,821][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:28,822][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:31,319][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:31,320][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:31,322][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:03:31,323][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-v2-qfdgx CrashLoopBackOff
--- Description for wazuh-security-init-v2-qfdgx ---
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-4hmjk:
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
  Type     Reason     Age                   From               Message
  ----     ------     ----                  ----               -------
  Normal   Scheduled  3m32s                 default-scheduler  Successfully assigned soc/wazuh-security-init-v2-qfdgx to k8-manager
  Normal   Pulled     93s (x5 over 3m32s)   kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    93s (x5 over 3m32s)   kubelet            Created container: security-init
  Normal   Started    93s (x5 over 3m31s)   kubelet            Started container security-init
  Warning  BackOff    12s (x13 over 3m21s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v2-qfdgx_soc(e4378c8d-5623-4052-9b60-d5aac3dac7bc)
--- Logs for wazuh-security-init-v2-qfdgx (Current) ---
[pod/wazuh-security-init-v2-qfdgx/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v2-qfdgx/security-init] Trace:
[pod/wazuh-security-init-v2-qfdgx/security-init] javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:318)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:267)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	... 19 more
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.validate(PKIXCertPathValidator.java:157)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.engineValidate(PKIXCertPathValidator.java:83)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.security.cert.CertPathValidator.validate(CertPathValidator.java:309)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:313)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	... 24 more
[pod/wazuh-security-init-v2-qfdgx/security-init] 
[pod/wazuh-security-init-v2-qfdgx/security-init] 
--- Logs for wazuh-security-init-v2-qfdgx (Previous) ---
[pod/wazuh-security-init-v2-qfdgx/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v2-qfdgx/security-init] Trace:
[pod/wazuh-security-init-v2-qfdgx/security-init] javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:318)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:267)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	... 19 more
[pod/wazuh-security-init-v2-qfdgx/security-init] Caused by: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.validate(PKIXCertPathValidator.java:157)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.engineValidate(PKIXCertPathValidator.java:83)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/java.security.cert.CertPathValidator.validate(CertPathValidator.java:309)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:313)
[pod/wazuh-security-init-v2-qfdgx/security-init] 	... 24 more
[pod/wazuh-security-init-v2-qfdgx/security-init] 
[pod/wazuh-security-init-v2-qfdgx/security-init] 
