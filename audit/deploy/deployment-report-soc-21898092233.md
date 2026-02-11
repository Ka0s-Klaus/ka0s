Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:38:02 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS      RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running     4 (9h ago)   16h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running     2 (9h ago)   16h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running     0            16h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running     0            16h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-d65gl     0/1     Completed   0            9m30s   172.16.209.11   k8-node-20   <none>           <none>
wazuh-dashboard-dc9db56cf-xq965   1/1     Running     0            4m9s    172.16.74.37    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running     0            9m30s   172.16.209.6    k8-node-20   <none>           <none>
wazuh-manager-65bdf7bbd7-fx6w8    1/1     Running     0            7m38s   172.16.209.49   k8-node-20   <none>           <none>

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
--- Logs for wazuh-dashboard-dc9db56cf-xq965 ---
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:10Z","tags":["info","dynamic-config-service"],"pid":55,"message":"initiating start()"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:10Z","tags":["info","dynamic-config-service"],"pid":55,"message":"finished start()"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:10Z","tags":["info","savedobjects-service"],"pid":55,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:10Z","tags":["error","savedobjects-service"],"pid":55,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:34:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:35:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:36:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:37:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:38:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:38:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1357) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:868) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:796) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeysPlain(NioEventLoop.java:697) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:660) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:998) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:38:02,657][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.6:9200, remoteAddress=/172.16.209.49:59484}
[pod/wazuh-indexer-0/wazuh-indexer] io.netty.handler.codec.DecoderException: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:500) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1357) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:868) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:796) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeysPlain(NioEventLoop.java:697) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:660) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562) [netty-transport-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:998) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) [netty-common-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] Caused by: javax.net.ssl.SSLHandshakeException: Received fatal alert: bad_certificate
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:117) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:370) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.Alert$AlertConsumer.consume(Alert.java:287) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:209) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.decode(SSLEngineImpl.java:736) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.readRecord(SSLEngineImpl.java:691) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:506) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/sun.security.ssl.SSLEngineImpl.unwrap(SSLEngineImpl.java:482) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/javax.net.ssl.SSLEngine.unwrap(SSLEngine.java:679) ~[?:?]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler$SslEngineType$3.unwrap(SslHandler.java:308) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1486) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1377) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1428) ~[netty-handler-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:530) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:469) ~[netty-codec-4.1.125.Final.jar:4.1.125.Final]
[pod/wazuh-indexer-0/wazuh-indexer] 	... 16 more
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
