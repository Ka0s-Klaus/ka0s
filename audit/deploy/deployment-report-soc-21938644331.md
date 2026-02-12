Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 08:14:55 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS    RESTARTS     AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running   6 (9h ago)   40h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running   4 (9h ago)   40h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running   0            40h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running   4 (9h ago)   40h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-65f848cf6c-ngxp4   1/1     Running   0            31m   172.16.74.59    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running   0            25s   172.16.209.8    k8-node-20   <none>           <none>
wazuh-manager-65657fb74c-rjbff     1/1     Running   0            22s   172.16.209.26   k8-node-20   <none>           <none>
wazuh-security-init-v16-6x9hz      1/1     Running   4 (3m ago)   20m   172.16.74.38    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      43h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             20m
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   43h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   43h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-65f848cf6c-ngxp4 ---
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:10:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:10:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:10:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:10:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:10:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:11:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:12:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:13:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: getaddrinfo EBUSY wazuh-indexer"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 172.16.209.8:9200"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T08:14:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:47,094][WARN ][o.o.s.p.SQLPlugin        ] [wazuh.indexer] Master key is a required config for using create and update datasource APIs. Please set plugins.query.datasources.encryption.masterkey config in opensearch.yml in all the cluster nodes. More details can be found here: https://github.com/opensearch-project/sql/blob/main/docs/user/ppl/admin/datasources.rst#master-key-config-for-encrypting-credential-information
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:48,329][INFO ][o.o.t.NettyAllocator     ] [wazuh.indexer] creating NettyAllocator with the following configs: [name=unpooled, suggested_max_allocation_size=256kb, factors={opensearch.unsafe.use_unpooled_allocator=null, g1gc_enabled=true, g1gc_region_size=1mb, heap_size=1gb}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:48,334][INFO ][o.o.s.s.t.SSLConfig      ] [wazuh.indexer] SSL dual mode is disabled
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:48,441][INFO ][o.o.d.DiscoveryModule    ] [wazuh.indexer] using discovery type [single-node] and seed hosts providers [settings]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:48,928][WARN ][o.o.g.DanglingIndicesState] [wazuh.indexer] gateway.auto_import_dangling_indices is disabled, dangling indices will not be automatically detected or imported and must be managed manually
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:49,618][INFO ][o.o.p.h.c.PerformanceAnalyzerConfigAction] [wazuh.indexer] PerformanceAnalyzer Enabled: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:49,645][INFO ][o.o.n.Node               ] [wazuh.indexer] initialized
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:49,645][INFO ][o.o.n.Node               ] [wazuh.indexer] starting ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:49,733][INFO ][o.o.t.TransportService   ] [wazuh.indexer] publish_address {172.16.209.8:9300}, bound_addresses {[::]:9300}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:49,734][INFO ][o.o.t.TransportService   ] [wazuh.indexer] Remote clusters initialized successfully.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:50,369][INFO ][o.o.c.c.Coordinator      ] [wazuh.indexer] setting initial configuration to VotingConfiguration{cmNhsBiZR6yXcWwPhD4f2g}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,008][INFO ][o.o.c.s.MasterService    ] [wazuh.indexer] Tasks batched with key: org.opensearch.cluster.coordination.JoinHelper, count:3 and sample tasks: elected-as-cluster-manager ([1] nodes joined)[{wazuh.indexer}{cmNhsBiZR6yXcWwPhD4f2g}{TAidhig6Txixw8pyCdYU_A}{172.16.209.8}{172.16.209.8:9300}{dimr}{shard_indexing_pressure_enabled=true} elect leader, _BECOME_CLUSTER_MANAGER_TASK_, _FINISH_ELECTION_], term: 1, version: 1, delta: cluster-manager node changed {previous [], current [{wazuh.indexer}{cmNhsBiZR6yXcWwPhD4f2g}{TAidhig6Txixw8pyCdYU_A}{172.16.209.8}{172.16.209.8:9300}{dimr}{shard_indexing_pressure_enabled=true}]}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,394][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [dQrZEbxkQ7CJwz5gMORYaw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,653][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{cmNhsBiZR6yXcWwPhD4f2g}{TAidhig6Txixw8pyCdYU_A}{172.16.209.8}{172.16.209.8:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,674][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,675][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,675][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,699][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770884091699
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,708][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,715][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{cmNhsBiZR6yXcWwPhD4f2g}{TAidhig6Txixw8pyCdYU_A}{172.16.209.8}{172.16.209.8:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,720][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.8:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,721][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,721][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,722][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,723][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,723][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,849][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [cmNhsBiZR6yXcWwPhD4f2g]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,856][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: cmNhsBiZR6yXcWwPhD4f2g
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,859][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {cmNhsBiZR6yXcWwPhD4f2g=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,860][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,860][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,861][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,862][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,862][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,874][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:51,895][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/pabqJofqSnuz6zKzn4cFtA]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,011][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,298][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/pabqJofqSnuz6zKzn4cFtA]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,727][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,727][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,727][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,727][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:52,728][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:53,415][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T08:14:53,659][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
