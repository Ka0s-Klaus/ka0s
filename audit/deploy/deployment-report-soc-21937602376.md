Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 07:35:01 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS     AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       6 (9h ago)   39h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       4 (8h ago)   39h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0            39h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       4 (8h ago)   39h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v1-dxgrr     1/1     Running       0            20s   172.16.74.20    k8-manager   <none>           <none>
wazuh-dashboard-579d87bb6b-9k9sz   1/1     Terminating   0            14h   172.16.74.58    k8-manager   <none>           <none>
wazuh-dashboard-597c746645-t2kb8   1/1     Running       0            21s   172.16.74.22    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0            19s   172.16.209.40   k8-node-20   <none>           <none>
wazuh-manager-6d9f74bc4d-hpjlm     1/1     Running       0            16s   172.16.209.4    k8-node-20   <none>           <none>
wazuh-security-init-v12-4crbq      1/1     Running       0            20s   172.16.74.56    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      43h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             43h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   43h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   43h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-579d87bb6b-9k9sz ---
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:30:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:31:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:58,954][WARN ][o.o.g.DanglingIndicesState] [wazuh.indexer] gateway.auto_import_dangling_indices is disabled, dangling indices will not be automatically detected or imported and must be managed manually
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,591][INFO ][o.o.p.h.c.PerformanceAnalyzerConfigAction] [wazuh.indexer] PerformanceAnalyzer Enabled: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,618][INFO ][o.o.n.Node               ] [wazuh.indexer] initialized
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,619][INFO ][o.o.n.Node               ] [wazuh.indexer] starting ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,708][INFO ][o.o.t.TransportService   ] [wazuh.indexer] publish_address {172.16.209.40:9300}, bound_addresses {[::]:9300}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,710][INFO ][o.o.t.TransportService   ] [wazuh.indexer] Remote clusters initialized successfully.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:34:59,855][INFO ][o.o.c.c.Coordinator      ] [wazuh.indexer] setting initial configuration to VotingConfiguration{vRWxu0VTQQiW6WIUnnBevw}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,007][INFO ][o.o.c.s.MasterService    ] [wazuh.indexer] Tasks batched with key: org.opensearch.cluster.coordination.JoinHelper, count:3 and sample tasks: elected-as-cluster-manager ([1] nodes joined)[{wazuh.indexer}{vRWxu0VTQQiW6WIUnnBevw}{62s3ROjbSV-OyUIuIZUJYA}{172.16.209.40}{172.16.209.40:9300}{dimr}{shard_indexing_pressure_enabled=true} elect leader, _BECOME_CLUSTER_MANAGER_TASK_, _FINISH_ELECTION_], term: 1, version: 1, delta: cluster-manager node changed {previous [], current [{wazuh.indexer}{vRWxu0VTQQiW6WIUnnBevw}{62s3ROjbSV-OyUIuIZUJYA}{172.16.209.40}{172.16.209.40:9300}{dimr}{shard_indexing_pressure_enabled=true}]}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,044][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [RRPXPzGnRGm1SC4wbncfLg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,067][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{vRWxu0VTQQiW6WIUnnBevw}{62s3ROjbSV-OyUIuIZUJYA}{172.16.209.40}{172.16.209.40:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,075][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,076][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,076][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,098][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770881700098
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,106][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,113][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{vRWxu0VTQQiW6WIUnnBevw}{62s3ROjbSV-OyUIuIZUJYA}{172.16.209.40}{172.16.209.40:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,118][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.40:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,118][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,119][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,120][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,121][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,121][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,136][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [vRWxu0VTQQiW6WIUnnBevw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,141][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: vRWxu0VTQQiW6WIUnnBevw
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,144][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {vRWxu0VTQQiW6WIUnnBevw=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,145][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,146][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,147][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,148][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,148][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,159][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,185][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/WJvPSY76SwK0j79Lu1IZYg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,337][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,389][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/WJvPSY76SwK0j79Lu1IZYg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,544][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:00,573][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,127][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,127][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,127][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,128][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:01,130][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:02,243][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:02,300][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:02,308][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:35:02,315][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-579d87bb6b-9k9sz Terminating
--- Description for wazuh-dashboard-579d87bb6b-9k9sz ---
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  dashboard-conf:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-pnjlw:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason   Age   From     Message
  ----    ------   ----  ----     -------
  Normal  Killing  21s   kubelet  Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-579d87bb6b-9k9sz (Current) ---
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:32:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:41Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:44Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:46Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:49Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:51Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:54Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:56Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:33:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:01Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:04Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:06Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:09Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:11Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:14Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:19Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:21Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:24Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:26Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:29Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:34Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-579d87bb6b-9k9sz/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:34:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--- Logs for wazuh-dashboard-579d87bb6b-9k9sz (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-579d87bb6b-9k9sz" not found
Failed to fetch previous logs
