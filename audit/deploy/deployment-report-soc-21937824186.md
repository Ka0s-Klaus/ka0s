Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 07:44:08 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       6 (9h ago)   39h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       4 (8h ago)   39h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0            39h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       4 (8h ago)   39h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v2-qppz4     1/1     Running       0            24s     172.16.74.37    k8-manager   <none>           <none>
wazuh-dashboard-597c746645-t2kb8   1/1     Terminating   0            9m28s   172.16.74.22    k8-manager   <none>           <none>
wazuh-dashboard-65f848cf6c-ngxp4   1/1     Running       0            24s     172.16.74.59    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0            23s     172.16.209.59   k8-node-20   <none>           <none>
wazuh-manager-5df976f47d-d5cbc     1/1     Running       0            19s     172.16.209.9    k8-node-20   <none>           <none>
wazuh-security-init-v12-4crbq      0/1     Completed     0            9m27s   172.16.74.56    k8-manager   <none>           <none>
wazuh-security-init-v14-rlgq4      1/1     Running       0            24s     172.16.74.33    k8-manager   <none>           <none>

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
--- Logs for wazuh-dashboard-597c746645-t2kb8 ---
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:39:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:40:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:41:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,572][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [lmyuCIYTSkafKvZMICCGlQ]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,767][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{rh9k-oUnQNy-BHFSVWMkKQ}{F_5mw74hQFit0A_TvlG_xA}{172.16.209.59}{172.16.209.59:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,787][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,788][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,789][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,814][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770882244814
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,822][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,829][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{rh9k-oUnQNy-BHFSVWMkKQ}{F_5mw74hQFit0A_TvlG_xA}{172.16.209.59}{172.16.209.59:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,834][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.59:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,835][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,835][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,836][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,837][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,837][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,909][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [rh9k-oUnQNy-BHFSVWMkKQ]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,914][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: rh9k-oUnQNy-BHFSVWMkKQ
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,916][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {rh9k-oUnQNy-BHFSVWMkKQ=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,917][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,917][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,918][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,919][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,919][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,930][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:04,952][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/kFNcX0MwTDG3h8efP1NF-A]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,083][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,176][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,242][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,250][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,257][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,336][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/kFNcX0MwTDG3h8efP1NF-A]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,843][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,843][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,844][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,845][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,845][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,864][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:05,985][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,332][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,367][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,375][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,381][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,496][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,500][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,504][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:44:07,508][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-597c746645-t2kb8 Terminating
--- Description for wazuh-dashboard-597c746645-t2kb8 ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-2ncj5:
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
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  9m29s  default-scheduler  Successfully assigned soc/wazuh-dashboard-597c746645-t2kb8 to k8-manager
  Normal  Pulled     9m28s  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    9m28s  kubelet            Created container: wazuh-dashboard
  Normal  Started    9m27s  kubelet            Started container wazuh-dashboard
  Normal  Killing    23s    kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-597c746645-t2kb8 (Current) ---
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:42:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:43:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-597c746645-t2kb8/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:44:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--- Logs for wazuh-dashboard-597c746645-t2kb8 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-597c746645-t2kb8" not found
Failed to fetch previous logs
