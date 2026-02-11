Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:14:54 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS              RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                2/2     Running             4 (10h ago)   17h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                2/2     Running             2 (10h ago)   17h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                2/2     Running             0             17h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                2/2     Running             0             17h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-jhsgc    0/1     Completed           0             4m48s   172.16.74.9     k8-manager   <none>           <none>
wazuh-dashboard-c4765547-46h4h   1/1     Running             0             32m     172.16.74.22    k8-manager   <none>           <none>
wazuh-indexer-0                  1/1     Running             0             32m     172.16.209.18   k8-node-20   <none>           <none>
wazuh-manager-656dfb7d78-5qmhh   1/1     Running             0             32m     172.16.209.27   k8-node-20   <none>           <none>
wazuh-security-init-v3-2vd5s     0/1     CrashLoopBackOff    5 (86s ago)   4m48s   172.16.74.40    k8-manager   <none>           <none>
wazuh-security-init-v4-wknsl     0/1     ContainerCreating   0             1s      <none>          k8-manager   <none>           <none>

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
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:10:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:11:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:12:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:13:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:14:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:36,730][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:36,731][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:39,230][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:39,233][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:39,235][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:39,238][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:41,732][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:41,734][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:41,736][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:41,738][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,344][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,344][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,344][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,344][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,345][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,345][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,345][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,345][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,345][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:42,346][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:44,232][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:44,234][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:44,237][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:44,238][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:46,742][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:46,755][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:46,757][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:46,768][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:49,245][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:49,247][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:49,249][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:49,250][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:51,745][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:51,747][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:51,750][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:51,752][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:54,247][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:54,250][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:54,256][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:54,259][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,347][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,347][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,347][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,347][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,348][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,348][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,348][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,348][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,348][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:14:55,349][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-security-init-v3-2vd5s CrashLoopBackOff
--- Description for wazuh-security-init-v3-2vd5s ---
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-mxmt4:
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
  Normal   Scheduled  4m50s                 default-scheduler  Successfully assigned soc/wazuh-security-init-v3-2vd5s to k8-manager
  Normal   Pulled     91s (x6 over 4m49s)   kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    91s (x6 over 4m49s)   kubelet            Created container: security-init
  Normal   Started    91s (x6 over 4m49s)   kubelet            Started container security-init
  Warning  BackOff    11s (x20 over 4m37s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v3-2vd5s_soc(94215c6d-807d-4f99-ac6e-38e51cab2125)
--- Logs for wazuh-security-init-v3-2vd5s (Current) ---
[pod/wazuh-security-init-v3-2vd5s/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v3-2vd5s/security-init] Trace:
[pod/wazuh-security-init-v3-2vd5s/security-init] javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:318)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:267)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	... 19 more
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.validate(PKIXCertPathValidator.java:157)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.engineValidate(PKIXCertPathValidator.java:83)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.security.cert.CertPathValidator.validate(CertPathValidator.java:309)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:313)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	... 24 more
[pod/wazuh-security-init-v3-2vd5s/security-init] 
[pod/wazuh-security-init-v3-2vd5s/security-init] 
--- Logs for wazuh-security-init-v3-2vd5s (Previous) ---
[pod/wazuh-security-init-v3-2vd5s/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v3-2vd5s/security-init] Trace:
[pod/wazuh-security-init-v3-2vd5s/security-init] javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:318)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:267)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	... 19 more
[pod/wazuh-security-init-v3-2vd5s/security-init] Caused by: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.validate(PKIXCertPathValidator.java:157)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.engineValidate(PKIXCertPathValidator.java:83)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/java.security.cert.CertPathValidator.validate(CertPathValidator.java:309)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:313)
[pod/wazuh-security-init-v3-2vd5s/security-init] 	... 24 more
[pod/wazuh-security-init-v3-2vd5s/security-init] 
[pod/wazuh-security-init-v3-2vd5s/security-init] 
