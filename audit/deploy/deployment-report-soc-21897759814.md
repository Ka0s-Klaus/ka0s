Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 08:28:52 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                               READY   STATUS        RESTARTS     AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                  2/2     Running       4 (9h ago)   16h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                  2/2     Running       2 (9h ago)   16h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                  2/2     Running       0            16h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                  2/2     Running       0            16h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-cert-generator-v7-d65gl      0/1     Completed     0            21s   172.16.209.11   k8-node-20   <none>           <none>
wazuh-dashboard-6d645769fd-nrfpv   1/1     Running       0            24s   172.16.74.16    k8-manager   <none>           <none>
wazuh-dashboard-7c976c74f8-54rsl   1/1     Terminating   0            16h   172.16.74.9     k8-manager   <none>           <none>
wazuh-indexer-0                    1/1     Running       0            21s   172.16.209.6    k8-node-20   <none>           <none>
wazuh-manager-849f7c48db-k8t56     1/1     Running       0            19s   172.16.209.56   k8-node-20   <none>           <none>

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
--- Logs for wazuh-dashboard-6d645769fd-nrfpv ---
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-service"],"pid":55,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["warning","config","deprecation"],"pid":55,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","dynamic-config-service"],"pid":55,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:48Z","tags":["info","plugins-system"],"pid":55,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,mapsLegacy,opensearchDashboardsLegacy,share,opensearchUiShared,legacyExport,expressions,data,savedObjects,queryEnhancements,embeddable,dataExplorer,home,dashboard,visualizations,visTypeVega,visTypeTable,visTypeMarkdown,visBuilder,visTypeTimeline,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,alertingDashboards,reportsDashboards,customImportMapDashboards,indexManagementDashboards,anomalyDetectionDashboards,notificationsDashboards,console,advancedSettings,bfetch,charts,visTypeVislib,visTypeTimeseries,visTypeMetric,visTypeTagcloud,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh]"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","plugins","queryEnhancements"],"pid":55,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","dynamic-config-service"],"pid":55,"message":"initiating start()"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["info","dynamic-config-service"],"pid":55,"message":"finished start()"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["info","savedobjects-service"],"pid":55,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:50Z","tags":["error","savedobjects-service"],"pid":55,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:52Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-6d645769fd-nrfpv/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:55Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:46,970][WARN ][o.o.s.p.SQLPlugin        ] [wazuh.indexer] Master key is a required config for using create and update datasource APIs. Please set plugins.query.datasources.encryption.masterkey config in opensearch.yml in all the cluster nodes. More details can be found here: https://github.com/opensearch-project/sql/blob/main/docs/user/ppl/admin/datasources.rst#master-key-config-for-encrypting-credential-information
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:47,858][INFO ][o.o.t.NettyAllocator     ] [wazuh.indexer] creating NettyAllocator with the following configs: [name=unpooled, suggested_max_allocation_size=256kb, factors={opensearch.unsafe.use_unpooled_allocator=null, g1gc_enabled=true, g1gc_region_size=1mb, heap_size=1gb}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:47,868][INFO ][o.o.s.s.t.SSLConfig      ] [wazuh.indexer] SSL dual mode is disabled
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:48,000][INFO ][o.o.d.DiscoveryModule    ] [wazuh.indexer] using discovery type [single-node] and seed hosts providers [settings]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:48,553][WARN ][o.o.g.DanglingIndicesState] [wazuh.indexer] gateway.auto_import_dangling_indices is disabled, dangling indices will not be automatically detected or imported and must be managed manually
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,293][INFO ][o.o.p.h.c.PerformanceAnalyzerConfigAction] [wazuh.indexer] PerformanceAnalyzer Enabled: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,320][INFO ][o.o.n.Node               ] [wazuh.indexer] initialized
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,320][INFO ][o.o.n.Node               ] [wazuh.indexer] starting ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,415][INFO ][o.o.t.TransportService   ] [wazuh.indexer] publish_address {172.16.209.6:9300}, bound_addresses {[::]:9300}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,417][INFO ][o.o.t.TransportService   ] [wazuh.indexer] Remote clusters initialized successfully.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,568][INFO ][o.o.c.c.Coordinator      ] [wazuh.indexer] setting initial configuration to VotingConfiguration{HHKiUSxcQpyxt9O-eVN1Yw}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,754][INFO ][o.o.c.s.MasterService    ] [wazuh.indexer] Tasks batched with key: org.opensearch.cluster.coordination.JoinHelper, count:3 and sample tasks: elected-as-cluster-manager ([1] nodes joined)[{wazuh.indexer}{HHKiUSxcQpyxt9O-eVN1Yw}{zAyoR5WrRYqhPdAf8DMlZg}{172.16.209.6}{172.16.209.6:9300}{dimr}{shard_indexing_pressure_enabled=true} elect leader, _BECOME_CLUSTER_MANAGER_TASK_, _FINISH_ELECTION_], term: 1, version: 1, delta: cluster-manager node changed {previous [], current [{wazuh.indexer}{HHKiUSxcQpyxt9O-eVN1Yw}{zAyoR5WrRYqhPdAf8DMlZg}{172.16.209.6}{172.16.209.6:9300}{dimr}{shard_indexing_pressure_enabled=true}]}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,798][INFO ][o.o.c.c.CoordinationState] [wazuh.indexer] cluster UUID set to [bvNc2f5sQs6yQYWcjJIvNA]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,828][INFO ][o.o.c.s.ClusterApplierService] [wazuh.indexer] cluster-manager node changed {previous [], current [{wazuh.indexer}{HHKiUSxcQpyxt9O-eVN1Yw}{zAyoR5WrRYqhPdAf8DMlZg}{172.16.209.6}{172.16.209.6:9300}{dimr}{shard_indexing_pressure_enabled=true}]}, term: 1, version: 1, reason: Publication{term=1, version=1}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,837][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,838][INFO ][o.o.t.i.IndexManagement  ] [wazuh.indexer] Candidate custom result indices are empty.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,838][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Cluster is not recovered yet.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,861][INFO ][o.o.i.i.ManagedIndexCoordinator] [wazuh.indexer] Cache cluster manager node onClusterManager time: 1770798529861
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,869][WARN ][o.o.p.c.s.h.ConfigOverridesClusterSettingHandler] [wazuh.indexer] Config override setting update called with empty string. Ignoring.
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,878][INFO ][o.o.d.PeerFinder         ] [wazuh.indexer] setting findPeersInterval to [1s] as node commission status = [true] for local node [{wazuh.indexer}{HHKiUSxcQpyxt9O-eVN1Yw}{zAyoR5WrRYqhPdAf8DMlZg}{172.16.209.6}{172.16.209.6:9300}{dimr}{shard_indexing_pressure_enabled=true}]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,884][INFO ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] publish_address {172.16.209.6:9200}, bound_addresses {[::]:9200}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,884][INFO ][o.o.n.Node               ] [wazuh.indexer] started
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,885][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Will not attempt to create index .opendistro_security and default configs if they are absent. Use securityadmin to initialize cluster
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,887][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Background init thread started. Install default config?: false
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,888][INFO ][o.o.s.c.ConfigurationRepository] [wazuh.indexer] Wait for cluster to be available ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,889][INFO ][o.o.s.OpenSearchSecurityPlugin] [wazuh.indexer] 0 OpenSearch Security modules loaded so far: []
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,909][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Node added: [HHKiUSxcQpyxt9O-eVN1Yw]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,916][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Add data node to version hash ring: HHKiUSxcQpyxt9O-eVN1Yw
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,921][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] All nodes with known version: {HHKiUSxcQpyxt9O-eVN1Yw=ADNodeInfo{version=2.19.4, isEligibleDataNode=true}}
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,922][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Rebuild hash ring for realtime with cooldown, nodeChangeEvents size 0
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,922][INFO ][o.o.t.c.HashRing         ] [wazuh.indexer] Build version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,928][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] Start migrating AD data
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,930][INFO ][o.o.t.c.ADDataMigrator   ] [wazuh.indexer] AD job index doesn't exist, no need to migrate
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,931][INFO ][o.o.t.c.ClusterEventListener] [wazuh.indexer] Init version hash ring successfully
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,938][INFO ][o.o.g.GatewayService     ] [wazuh.indexer] recovered [0] indices into cluster_state
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:49,962][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/AnUNQzLRSbOYb6Jk_UUSwg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,099][INFO ][o.o.c.m.MetadataCreateIndexService] [wazuh.indexer] [.opensearch-observability] creating index, cause [api], templates [], shards [1]/[0]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,164][INFO ][o.o.p.PluginsService     ] [wazuh.indexer] PluginService:onIndexModule index:[.opensearch-observability/AnUNQzLRSbOYb6Jk_UUSwg]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,394][INFO ][o.o.c.r.a.AllocationService] [wazuh.indexer] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.opensearch-observability][0]]]).
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,439][INFO ][o.o.o.i.ObservabilityIndex] [wazuh.indexer] observability:Index .opensearch-observability creation Acknowledged
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,901][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,902][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,902][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,903][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,903][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,904][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,905][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,905][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,906][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T08:28:50,906][ERROR][o.o.s.c.ConfigurationLoaderSecurity7] [wazuh.indexer] Failure no such index [.opendistro_security] retrieving configuration for [ACTIONGROUPS, ALLOWLIST, AUDIT, CONFIG, INTERNALUSERS, NODESDN, ROLES, ROLESMAPPING, TENANTS, WHITELIST] (index=.opendistro_security)
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-dashboard-7c976c74f8-54rsl Terminating
--- Description for wazuh-dashboard-7c976c74f8-54rsl ---
    SecretName:  wazuh-dashboard-certs
    Optional:    false
  dashboard-conf:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      wazuh-dashboard-conf
    Optional:  false
  kube-api-access-5dklk:
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
  Normal  Killing  27s   kubelet  Stopping container wazuh-dashboard
--- Logs for wazuh-dashboard-7c976c74f8-54rsl (Current) ---
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:26:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:26:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:26:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:27:59Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:01Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:04Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:06Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:09Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:11Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:14Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:16Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:19Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:21Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:24Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:26Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:29Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:31Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:34Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:36Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:39Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:41Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:44Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:46Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:49Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:51Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:54Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
[pod/wazuh-dashboard-7c976c74f8-54rsl/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T08:28:56Z","tags":["error","opensearch","data"],"pid":55,"message":"[ConnectionError]: unable to verify the first certificate"}
--- Logs for wazuh-dashboard-7c976c74f8-54rsl (Previous) ---
Error from server (BadRequest): previous terminated container "wazuh-dashboard" in pod "wazuh-dashboard-7c976c74f8-54rsl" not found
Failed to fetch previous logs
