Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 14:31:15 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS      RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running     6 (15h ago)   46h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running     4 (15h ago)   46h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running     0             46h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running     4 (15h ago)   46h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-dashboard-59cb58d8f5-vm9j5   1/1     Running     0             61s     172.16.209.46   k8-node-20   <none>           <none>
wazuh-manager-6969d7d459-fcb5p     0/1     Pending     0             6m19s   <none>          <none>       <none>           <none>
wazuh-security-init-s8hmg          1/1     Running     0             152m    172.16.74.55    k8-manager   <none>           <none>
wazuh-security-init-v2-8jfh9       1/1     Running     0             61s     172.16.74.34    k8-manager   <none>           <none>
wazuh-setup-job-6phbb              0/1     Completed   0             9m14s   172.16.209.5    k8-node-20   <none>           <none>

>>> Services Status:
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE
wazuh-dashboard          LoadBalancer   10.104.84.70    192.168.1.242   443:30229/TCP                                   6m21s
wazuh-indexer            ClusterIP      10.104.200.35   <none>          9200/TCP                                        6m21s
wazuh-indexer-headless   ClusterIP      None            <none>          9300/TCP                                        6m21s
wazuh-manager            LoadBalancer   10.100.29.107   192.168.1.243   1514:31450/TCP,1515:31559/TCP,55000:31404/TCP   6m21s

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d2h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-59cb58d8f5-vm9j5 ---
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["warning","config","deprecation"],"pid":54,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","dynamic-config-service"],"pid":54,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins-system"],"pid":54,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,mapsLegacy,share,opensearchUiShared,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeVega,visTypeTimeline,visTypeTable,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,anomalyDetectionDashboards,reportsDashboards,indexManagementDashboards,customImportMapDashboards,alertingDashboards,notificationsDashboards,console,advancedSettings,dataExplorer,charts,visTypeVislib,visTypeTimeseries,visTypeTagcloud,visTypeMetric,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh,bfetch]"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:24Z","tags":["info","plugins","queryEnhancements"],"pid":54,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:25Z","tags":["info","dynamic-config-service"],"pid":54,"message":"initiating start()"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:25Z","tags":["info","dynamic-config-service"],"pid":54,"message":"finished start()"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:25Z","tags":["info","savedobjects-service"],"pid":54,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:25Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:25Z","tags":["error","savedobjects-service"],"pid":54,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:27Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:31Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:36Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:39Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:43Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:47Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:52Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:55Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:30:59Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:31:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:31:07Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:31:12Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
[pod/wazuh-dashboard-59cb58d8f5-vm9j5/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-12T14:31:16Z","tags":["error","opensearch","data"],"pid":54,"message":"[ConnectionError]: connect ECONNREFUSED 10.104.200.35:9200"}
--> Debugging: Checking for Wazuh Indexer Logs...
error: error executing jsonpath "{.items[0].metadata.name}": Error executing template: array index out of bounds: index 0, length 0. Printing more information for debugging the template:
	template was:
		{.items[0].metadata.name}
	object given to jsonpath engine was:
		map[string]interface {}{"apiVersion":"v1", "items":[]interface {}{}, "kind":"List", "metadata":map[string]interface {}{"resourceVersion":""}}


No wazuh-indexer pod found.
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-manager-6969d7d459-fcb5p Pending
--- Description for wazuh-manager-6969d7d459-fcb5p ---
    ReadOnly:   false
  wazuh-manager-certs:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  wazuh-manager-certs
    Optional:    false
  kube-api-access-l2vl6:
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
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  6m20s                  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
  Warning  FailedScheduling  2m47s (x2 over 2m51s)  default-scheduler  0/4 nodes are available: pod has unbound immediate PersistentVolumeClaims. preemption: 0/4 nodes are available: 4 Preemption is not helpful for scheduling.
--- Logs for wazuh-manager-6969d7d459-fcb5p (Current) ---
--- Logs for wazuh-manager-6969d7d459-fcb5p (Previous) ---
