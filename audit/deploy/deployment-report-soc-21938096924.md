Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 07:54:54 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS              RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running             6 (9h ago)      40h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running             4 (9h ago)      40h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running             0               40h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running             4 (8h ago)      40h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v2-vr68s     1/1     Running             0               2s      172.16.74.10    k8-manager   <none>           <none>
wazuh-dashboard-65f848cf6c-ngxp4   1/1     Running             0               11m     172.16.74.59    k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running             0               11m     172.16.209.59   k8-node-20   <none>           <none>
wazuh-manager-5df976f47d-d5cbc     1/1     Running             0               11m     172.16.209.9    k8-node-20   <none>           <none>
wazuh-security-init-v14-rlgq4      1/1     Running             2 (2m36s ago)   11m     172.16.74.33    k8-manager   <none>           <none>
wazuh-security-init-v15-ss6sm      1/1     Running             0               3m50s   172.16.74.15    k8-manager   <none>           <none>
wazuh-security-init-v16-6x9hz      0/1     ContainerCreating   0               2s      <none>          k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      43h
wazuh-indexer     ClusterIP   None             <none>        9200/TCP,9300/TCP             4s
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   43h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   43h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-65f848cf6c-ngxp4 ---
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:50:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:50:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:50:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:50:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:50:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:51:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:52:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:53:57Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:00Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:02Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:05Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:07Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:10Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:12Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:15Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:17Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:20Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:22Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:25Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:27Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:30Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:32Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:35Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:37Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:40Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:42Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:45Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:47Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-65f848cf6c-ngxp4/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T07:54:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:40,184][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:42,676][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:42,680][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:42,683][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:42,687][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,075][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,076][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,076][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,076][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,077][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,077][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,077][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,077][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,077][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:43,078][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:45,179][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:45,183][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:45,186][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:45,189][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:47,680][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:47,683][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:47,686][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:47,689][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:50,182][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:50,186][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:50,189][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:50,191][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:52,684][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:52,687][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:52,690][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:52,693][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:53,220][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:55,184][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:55,188][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:55,191][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:55,194][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,079][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,079][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,079][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,079][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,079][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,080][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,080][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,080][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,080][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:56,080][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:57,685][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:57,689][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:57,692][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-12T07:54:57,695][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
