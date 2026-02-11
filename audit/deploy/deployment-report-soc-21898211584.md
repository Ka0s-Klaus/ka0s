Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:43:06 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS        RESTARTS     AGE     IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running       4 (9h ago)   16h     192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running       2 (9h ago)   16h     192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running       0            16h     192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running       0            16h     192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-m42bc     0/1     Init:1/2      0            22s     172.16.74.57    k8-manager   <none>           <none>
wazuh-dashboard-c4765547-46h4h    1/1     Running       0            23s     172.16.74.22    k8-manager   <none>           <none>
wazuh-dashboard-dc9db56cf-xq965   1/1     Terminating   0            9m13s   172.16.74.37    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running       0            21s     172.16.209.18   k8-node-20   <none>           <none>
wazuh-manager-656dfb7d78-5qmhh    1/1     Running       0            18s     172.16.209.27   k8-node-20   <none>           <none>

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
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-service"],"pid":54,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["warning","config","deprecation"],"pid":54,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","dynamic-config-service"],"pid":54,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins-system"],"pid":54,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,mapsLegacy,charts,share,opensearchUiShared,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeVega,visTypeVislib,visTypeTimeline,visTypeTagcloud,visTypeTable,visTypeMetric,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,reportsDashboards,indexManagementDashboards,customImportMapDashboards,anomalyDetectionDashboards,alertingDashboards,visTypeTimeseries,notificationsDashboards,console,advancedSettings,dataExplorer,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh,bfetch]"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["info","plugins","queryEnhancements"],"pid":54,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:02Z","tags":["info","dynamic-config-service"],"pid":54,"message":"initiating start()"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:02Z","tags":["info","dynamic-config-service"],"pid":54,"message":"finished start()"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:02Z","tags":["info","savedobjects-service"],"pid":54,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:03Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:03Z","tags":["error","savedobjects-service"],"pid":54,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-c4765547-46h4h/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:05Z","tags":["error","opensearch","data"],"pid":54,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,971][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.18:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,971][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,972][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,973][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,974][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:02,974][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,068][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [evXsczWKS6KrRdJUFc2Ygg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,074][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: evXsczWKS6KrRdJUFc2Ygg
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,078][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {evXsczWKS6KrRdJUFc2Ygg=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,079][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,080][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,082][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,083][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,085][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,089][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,105][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,112][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/0QjfsJlrRhaIMkQU2QQN9Q]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,151][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,179][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,183][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,256][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,486][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/0QjfsJlrRhaIMkQU2QQN9Q]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,640][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,655][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,658][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,662][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,915][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,977][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,978][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,979][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:03,979][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:04,078][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:05,489][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:05,498][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:05,506][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:05,513][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:06,118][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:06,122][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:06,125][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:06,128][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:07,989][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:07,993][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:07,998][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:43:08,001][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-cert-generator-v7-m42bc Init:1/2
wazuh-dashboard-dc9db56cf-xq965 Terminating
--- Description for wazuh-cert-generator-v7-m42bc ---
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
  Normal  Scheduled  24s   default-scheduler  Successfully assigned soc/wazuh-cert-generator-v7-m42bc to k8-manager
  Normal  Pulling    23s   kubelet            Pulling image "busybox"
  Normal  Pulled     22s   kubelet            Successfully pulled image "busybox" in 655ms (655ms including waiting). Image size: 2222260 bytes.
  Normal  Created    22s   kubelet            Created container: config-writer
  Normal  Started    22s   kubelet            Started container config-writer
  Normal  Pulled     22s   kubelet            Container image "debian:bookworm-slim" already present on machine
  Normal  Created    22s   kubelet            Created container: generator
  Normal  Started    21s   kubelet            Started container generator
--- Logs for wazuh-cert-generator-v7-m42bc (Current) ---
[pod/wazuh-cert-generator-v7-m42bc/generator] Unpacking libcurl4:amd64 (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Selecting previously unselected package curl.
[pod/wazuh-cert-generator-v7-m42bc/generator] Preparing to unpack .../18-curl_7.88.1-10+deb12u14_amd64.deb ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Unpacking curl (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Selecting previously unselected package libldap-common.
[pod/wazuh-cert-generator-v7-m42bc/generator] Preparing to unpack .../19-libldap-common_2.5.13+dfsg-5_all.deb ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Unpacking libldap-common (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Selecting previously unselected package libsasl2-modules:amd64.
[pod/wazuh-cert-generator-v7-m42bc/generator] Preparing to unpack .../20-libsasl2-modules_2.1.28+dfsg-10_amd64.deb ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Unpacking libsasl2-modules:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Selecting previously unselected package publicsuffix.
[pod/wazuh-cert-generator-v7-m42bc/generator] Preparing to unpack .../21-publicsuffix_20230209.2326-1_all.deb ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Unpacking publicsuffix (20230209.2326-1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libkeyutils1:amd64 (1.6.3-2) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libpsl5:amd64 (0.21.2-1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libbrotli1:amd64 (1.0.9-2+b6) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libssl3:amd64 (3.0.18-1~deb12u2) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libnghttp2-14:amd64 (1.52.0-1+deb12u2) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up krb5-locales (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libldap-common (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libkrb5support0:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libsasl2-modules-db:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2+b2) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libk5crypto3:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libsasl2-2:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libssh2-1:amd64 (1.10.0-3+b1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libkrb5-3:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up openssl (3.0.18-1~deb12u2) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up publicsuffix (20230209.2326-1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libsasl2-modules:amd64 (2.1.28+dfsg-10) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libldap-2.5-0:amd64 (2.5.13+dfsg-5) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up ca-certificates (20230311+deb12u1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: unable to initialize frontend: Dialog
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: (TERM is not set, so the dialog frontend is not usable.)
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: falling back to frontend: Readline
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: unable to initialize frontend: Readline
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.36.0 /usr/local/share/perl/5.36.0 /usr/lib/x86_64-linux-gnu/perl5/5.36 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl-base /usr/lib/x86_64-linux-gnu/perl/5.36 /usr/share/perl/5.36 /usr/local/lib/site_perl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
[pod/wazuh-cert-generator-v7-m42bc/generator] debconf: falling back to frontend: Teletype
[pod/wazuh-cert-generator-v7-m42bc/generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-cert-generator-v7-m42bc/generator] 142 added, 0 removed; done.
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libgssapi-krb5-2:amd64 (1.20.1-2+deb12u4) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up libcurl4:amd64 (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Setting up curl (7.88.1-10+deb12u14) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Processing triggers for libc-bin (2.36-9+deb12u13) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Processing triggers for ca-certificates (20230311+deb12u1) ...
[pod/wazuh-cert-generator-v7-m42bc/generator] Updating certificates in /etc/ssl/certs...
[pod/wazuh-cert-generator-v7-m42bc/generator] 0 added, 0 removed; done.
[pod/wazuh-cert-generator-v7-m42bc/generator] Running hooks in /etc/ca-certificates/update.d...
[pod/wazuh-cert-generator-v7-m42bc/generator] done.
[pod/wazuh-cert-generator-v7-m42bc/generator] 11/02/2026 08:43:09 INFO: Verbose logging redirected to //wazuh-certificates-tool.log
Error from server (BadRequest): container "uploader" in pod "wazuh-cert-generator-v7-m42bc" is waiting to start: PodInitializing
Failed to fetch current logs
--- Logs for wazuh-cert-generator-v7-m42bc (Previous) ---
Error from server (BadRequest): previous terminated container "config-writer" in pod "wazuh-cert-generator-v7-m42bc" not found
Failed to fetch previous logs
--- Description for wazuh-dashboard-dc9db56cf-xq965 ---
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-m6jn8:
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
  Normal  Scheduled  9m16s  default-scheduler  Successfully assigned soc/wazuh-dashboard-dc9db56cf-xq965 to k8-manager
  Normal  Pulled     9m16s  kubelet            Container image "wazuh/wazuh-dashboard:4.14.2" already present on machine
  Normal  Created    9m16s  kubelet            Created container: wazuh-dashboard
  Normal  Started    9m16s  kubelet            Started container wazuh-dashboard
  Normal  Killing    24s    kubelet            Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-dc9db56cf-xq965 (Current) ---
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:41:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:13Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:18Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:23Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:28Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:33Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:38Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:43Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:48Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:53Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:42:58Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:03Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-dc9db56cf-xq965/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:43:08Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--- Logs for wazuh-dashboard-dc9db56cf-xq965 (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-dc9db56cf-xq965" not found
Failed to fetch previous logs
