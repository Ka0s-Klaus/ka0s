Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:28:02 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS      RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running     4 (10h ago)   17h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running     2 (10h ago)   17h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running     0             17h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 0/2     Unknown     0             17h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-29dwp    0/1     Completed   0             53s   172.16.74.39    k8-manager   <none>           <none>
wazuh-dashboard-d6dc86cd5-gckbb   1/1     Running     0             53s   172.16.74.28    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Running     0             51s   172.16.209.32   k8-node-20   <none>           <none>
wazuh-manager-7669bb5bb8-sbnh7    1/1     Running     1 (30s ago)   48s   172.16.209.31   k8-node-20   <none>           <none>
wazuh-security-init-v6-hhfj9      1/1     Running     2 (19s ago)   53s   172.16.74.16    k8-manager   <none>           <none>

>>> Services Status:
NAME              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE
wazuh-dashboard   ClusterIP   10.106.200.130   <none>        5601/TCP                      21h
wazuh-indexer     ClusterIP   10.98.67.79      <none>        9200/TCP,9300/TCP             21h
wazuh-manager     ClusterIP   10.109.153.22    <none>        1514/TCP,1515/TCP,55000/TCP   21h

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   21h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
--> Debugging: Checking for Wazuh Dashboard Logs...
--- Logs for wazuh-dashboard-d6dc86cd5-gckbb ---
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["warning","config","deprecation"],"pid":55,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","dynamic-config-service"],"pid":55,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins-system"],"pid":55,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,mapsLegacy,share,opensearchUiShared,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeVega,visTypeTimeline,visTypeTable,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,visualize,ganttChartDashboards,apmOss,management,indexPatternManagement,dataSourceManagement,customImportMapDashboards,reportsDashboards,indexManagementDashboards,anomalyDetectionDashboards,alertingDashboards,notificationsDashboards,console,advancedSettings,dataExplorer,charts,visTypeVislib,visTypeTimeseries,visTypeTagcloud,visTypeMetric,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh,bfetch]"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:25Z","tags":["info","plugins","queryEnhancements"],"pid":55,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:26Z","tags":["info","dynamic-config-service"],"pid":55,"message":"initiating start()"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:26Z","tags":["info","dynamic-config-service"],"pid":55,"message":"finished start()"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:26Z","tags":["info","savedobjects-service"],"pid":55,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:26Z","tags":["error","savedobjects-service"],"pid":55,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:27:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-d6dc86cd5-gckbb/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:28:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:45,298][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:45,298][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:45,298][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:45,299][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:46,612][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:46,620][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:46,627][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:46,632][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:49,111][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:49,117][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:49,122][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:49,129][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,327][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.plugins-ml-config/Vf9d5QNwQ7CV308bSkobcw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,346][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.plugins-ml-config] creating index, cause [api], templates [], shards [1]/[1]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,348][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] updating number_of_replicas to [0] for indices [.plugins-ml-config]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,612][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,614][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.plugins-ml-config/Vf9d5QNwQ7CV308bSkobcw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,620][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,629][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:51,637][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:52,394][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.plugins-ml-config][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:52,789][INFO ][o.o.m.e.i.MLIndicesHandler] [wazuh.indexer] create index:.plugins-ml-config
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:53,019][INFO ][o.o.m.c.MLSyncUpCron     ] [wazuh.indexer] ML configuration initialized successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:54,115][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:54,122][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:54,129][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:54,136][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:56,619][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:56,628][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:56,636][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:56,644][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,301][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,302][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,302][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,303][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,303][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,304][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,304][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,305][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,305][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,306][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:58,568][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:59,116][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:59,128][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:59,134][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:27:59,139][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:28:01,618][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:28:01,624][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:28:01,630][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:28:01,635][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-agent-jd2pk Unknown
wazuh-security-init-v6-hhfj9 Error
--- Description for wazuh-agent-jd2pk ---
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/disk-pressure:NoSchedule op=Exists
                             node.kubernetes.io/memory-pressure:NoSchedule op=Exists
                             node.kubernetes.io/network-unavailable:NoSchedule op=Exists
                             node.kubernetes.io/not-ready:NoExecute op=Exists
                             node.kubernetes.io/pid-pressure:NoSchedule op=Exists
                             node.kubernetes.io/unreachable:NoExecute op=Exists
                             node.kubernetes.io/unschedulable:NoSchedule op=Exists
Events:
  Type    Reason          Age    From     Message
  ----    ------          ----   ----     -------
  Normal  SandboxChanged  9m38s  kubelet  Pod sandbox changed, it will be killed and re-created.
  Normal  Pulling         6m29s  kubelet  Pulling image "busybox"
  Normal  Pulled          5m6s   kubelet  Successfully pulled image "busybox" in 1m22.483s (1m22.483s including waiting). Image size: 2222260 bytes.
  Normal  Created         4m2s   kubelet  Created container: config-init
  Normal  Started         3m50s  kubelet  Started container config-init
  Normal  Pulling         3m20s  kubelet  Pulling image "wazuh/wazuh-agent:4.14.2"
  Normal  Pulled          56s    kubelet  Successfully pulled image "wazuh/wazuh-agent:4.14.2" in 2m3.894s (2m23.574s including waiting). Image size: 74848715 bytes.
--- Logs for wazuh-agent-jd2pk (Current) ---
[pod/wazuh-agent-jd2pk/config-init] Detecting interface...
[pod/wazuh-agent-jd2pk/config-init] Detected interface: enp0s25
[pod/wazuh-agent-jd2pk/config-init] Generating Suricata config...
[pod/wazuh-agent-jd2pk/config-init] Config verification:
[pod/wazuh-agent-jd2pk/config-init]   - interface: enp0s25
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:04:32 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:05:56 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:06:56 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:08:20 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:09:20 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:10:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:11:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:13:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:14:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:15:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:16:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:17:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:18:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:20:21 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:21:21 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:22:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:23:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:25:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:26:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:27:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:28:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:29:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:30:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:32:21 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:33:21 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:34:45 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:35:45 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:37:09 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:38:09 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:39:33 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:40:33 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:41:57 wazuh-agentd: ERROR: Could not resolve hostname: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/wazuh-agent] 
[pod/wazuh-agent-jd2pk/wazuh-agent] 2026/02/10 22:42:57 wazuh-agentd: INFO: Requesting a key from server: wazuh-manager.soc.svc
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/dns-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/files.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/http2-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/http-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ipsec-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/kerberos-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/modbus-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/mqtt-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/nfs-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ntp-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/quic-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/rfb-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/smb-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/smtp-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/ssh-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/stream-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loading distribution rule file /usr/share/suricata/rules/tls-events.rules
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Loaded 435 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Disabled 15 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Enabled 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Modified 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Dropped 0 rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Enabled 0 rules for flowbit dependencies.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Creating directory /var/lib/suricata/rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Backing up current rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Writing rules to /var/lib/suricata/rules/suricata.rules: total: 435; enabled: 373; added: 435; removed 0; modified: 0
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Writing /var/lib/suricata/rules/classification.config
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:17 - <Info> -- Testing with suricata -T.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Info> -- Running suricatasc -c reload-rules.
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Error> -- Reload command failed: b'Unable to connect socket to /var/run/suricata/suricata-command.socket: ioerror: `No such file or directory (os error 2)`\n'
[pod/wazuh-agent-jd2pk/suricata] 10/2/2026 -- 15:46:18 - <Info> -- Done.
[pod/wazuh-agent-jd2pk/suricata] Launching Suricata...
[pod/wazuh-agent-jd2pk/suricata] Notice: suricata: This is Suricata version 8.0.3 RELEASE running in SYSTEM mode
[pod/wazuh-agent-jd2pk/suricata] Info: cpu: CPUs/cores online: 4
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: Setting engine mode to IDS mode by default
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: No 'host-mode': suricata is in IDS mode, using default setting 'sniffer-only'
[pod/wazuh-agent-jd2pk/suricata] Info: logopenfile: eve-log output device (regular) initialized: eve.json
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "http", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "tls", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "ssh", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: output-json-alert: Found deprecated eve-log.alert flag "smtp", this flag has no effect
[pod/wazuh-agent-jd2pk/suricata] Warning: counters: stats are enabled but no loggers are active
[pod/wazuh-agent-jd2pk/suricata] Info: detect: 1 rule files processed. 373 rules successfully loaded, 0 rules failed, 0 rules skipped
[pod/wazuh-agent-jd2pk/suricata] Info: threshold-config: Threshold config parsed: 0 rule(s) found
[pod/wazuh-agent-jd2pk/suricata] Info: detect: 373 signatures processed. 0 are IP-only rules, 0 are inspecting packet payload, 191 inspect application layer, 110 are decoder event only
[pod/wazuh-agent-jd2pk/suricata] Info: runmodes: enp0s25: creating 4 threads
[pod/wazuh-agent-jd2pk/suricata] Info: ioctl: enp0s25: MTU 1500
[pod/wazuh-agent-jd2pk/suricata] Notice: threads: Threads created -> W: 4 FM: 1 FR: 1   Engine started.
[pod/wazuh-agent-jd2pk/suricata] Notice: suricata: Signal Received.  Stopping engine.
[pod/wazuh-agent-jd2pk/suricata] Info: suricata: time elapsed 25066.496s
--- Logs for wazuh-agent-jd2pk (Previous) ---
Error from server (BadRequest): previous terminated container "config-init" in pod "wazuh-agent-jd2pk" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v6-hhfj9 ---
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-f7tp8:
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
  Type     Reason     Age               From               Message
  ----     ------     ----              ----               -------
  Normal   Scheduled  54s               default-scheduler  Successfully assigned soc/wazuh-security-init-v6-hhfj9 to k8-manager
  Normal   Pulled     6s (x3 over 53s)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    6s (x3 over 52s)  kubelet            Created container: security-init
  Normal   Started    6s (x3 over 52s)  kubelet            Started container security-init
  Warning  BackOff    2s (x2 over 20s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v6-hhfj9_soc(910c7d60-a4e4-433b-9c2f-ad0120b9ecb7)
--- Logs for wazuh-security-init-v6-hhfj9 (Current) ---
[pod/wazuh-security-init-v6-hhfj9/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v6-hhfj9/security-init] Trace:
[pod/wazuh-security-init-v6-hhfj9/security-init] javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
[pod/wazuh-security-init-v6-hhfj9/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v6-hhfj9/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v6-hhfj9/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.validator.PKIXValidator.doBuild(PKIXValidator.java:388)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:271)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	... 19 more
[pod/wazuh-security-init-v6-hhfj9/security-init] Caused by: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.provider.certpath.SunCertPathBuilder.build(SunCertPathBuilder.java:148)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.provider.certpath.SunCertPathBuilder.engineBuild(SunCertPathBuilder.java:129)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/java.security.cert.CertPathBuilder.build(CertPathBuilder.java:297)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	at java.base/sun.security.validator.PKIXValidator.doBuild(PKIXValidator.java:383)
[pod/wazuh-security-init-v6-hhfj9/security-init] 	... 24 more
[pod/wazuh-security-init-v6-hhfj9/security-init] 
[pod/wazuh-security-init-v6-hhfj9/security-init] 
--- Logs for wazuh-security-init-v6-hhfj9 (Previous) ---
[pod/wazuh-security-init-v6-hhfj9/security-init] unable to retrieve container logs for containerd://441bcc3d2d587145b3e368a408297b788d2b2dad99100446b4d534c89a55b0fd