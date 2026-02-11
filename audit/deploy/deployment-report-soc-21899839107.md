Deployment Report: core/b2b/core-services/soc
Date: Wed Feb 11 09:38:00 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS        RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running       4 (10h ago)   17h   192.168.1.20    k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running       2 (10h ago)   17h   192.168.1.40    k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running       0             17h   192.168.1.10    k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running       2 (20m ago)   17h   192.168.1.30    k8-node-30   <none>           <none>
wazuh-certs-generator-v9-q4jq8    0/1     Completed     0             76s   172.16.74.34    k8-manager   <none>           <none>
wazuh-dashboard-f885b6567-cndcj   1/1     Running       0             77s   172.16.74.45    k8-manager   <none>           <none>
wazuh-indexer-0                   1/1     Terminating   0             76s   172.16.209.13   k8-node-20   <none>           <none>
wazuh-manager-5b5bc55b98-scdgm    1/1     Running       0             72s   172.16.209.57   k8-node-20   <none>           <none>
wazuh-security-init-v7-4cwn2      0/1     Error         2 (34s ago)   76s   172.16.74.58    k8-manager   <none>           <none>

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
--- Logs for wazuh-dashboard-f885b6567-cndcj ---
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] Created OpenSearch Dashboards keystore in /usr/share/wazuh-dashboard/config/opensearch_dashboards.keystore
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-service"],"pid":56,"message":"Plugin \"applicationConfig\" is disabled."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-service"],"pid":56,"message":"Plugin \"cspHandler\" is disabled."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-service"],"pid":56,"message":"Plugin \"dataSource\" is disabled."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-service"],"pid":56,"message":"Plugin \"visTypeXy\" is disabled."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-service"],"pid":56,"message":"Plugin \"workspace\" is disabled."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["warning","config","deprecation"],"pid":56,"message":"\"opensearch.requestHeadersWhitelist\" is deprecated and has been replaced by \"opensearch.requestHeadersAllowlist\""}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","dynamic-config-service"],"pid":56,"message":"registering middleware to inject context to AsyncLocalStorage"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins-system"],"pid":56,"message":"Setting up [51] plugins: [usageCollection,opensearchDashboardsUsageCollection,opensearchDashboardsLegacy,mapsLegacy,share,opensearchUiShared,legacyExport,embeddable,expressions,data,savedObjects,queryEnhancements,home,dashboard,visualizations,visTypeVega,visTypeTimeline,visTypeTable,visTypeMarkdown,visBuilder,visAugmenter,tileMap,regionMap,inputControlVis,ganttChartDashboards,visualize,apmOss,management,indexPatternManagement,dataSourceManagement,reportsDashboards,indexManagementDashboards,customImportMapDashboards,anomalyDetectionDashboards,alertingDashboards,notificationsDashboards,console,advancedSettings,dataExplorer,charts,visTypeTagcloud,visTypeVislib,visTypeTimeseries,visTypeMetric,discover,savedObjectsManagement,securityDashboards,wazuhCore,wazuhCheckUpdates,wazuh,bfetch]"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:00Z","tags":["info","plugins","queryEnhancements"],"pid":56,"message":"queryEnhancements: Setup complete"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] [agentkeepalive:deprecated] options.freeSocketKeepAliveTimeout is deprecated, please use options.freeSocketTimeout instead
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["info","dynamic-config-service"],"pid":56,"message":"initiating start()"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["info","dynamic-config-service"],"pid":56,"message":"finished start()"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["info","savedobjects-service"],"pid":56,"message":"Waiting until all OpenSearch nodes are compatible with OpenSearch Dashboards before starting saved objects migrations..."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["error","opensearch","data"],"pid":56,"message":"[ConnectionError]: connect ECONNREFUSED 10.98.67.79:9200"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:01Z","tags":["error","savedobjects-service"],"pid":56,"message":"Unable to retrieve version information from OpenSearch nodes."}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:04Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:06Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:09Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:11Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:14Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:16Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:19Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:21Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:24Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:26Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:29Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:32Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:34Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:36Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:39Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:41Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:44Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:46Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:49Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:51Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:54Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:56Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
[pod/wazuh-dashboard-f885b6567-cndcj/wazuh-dashboard] {"type":"log","@timestamp":"2026-02-11T09:37:59Z","tags":["error","opensearch","data"],"pid":56,"message":"[ResponseError]: Response Error"}
--> Debugging: Checking for Wazuh Indexer Logs...
--- Logs for wazuh-indexer-0 ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:57,022][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.13:9200, remoteAddress=/172.16.209.57:40950}
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,445][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,450][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,454][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,624][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,625][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,633][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,734][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,735][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,739][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,741][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--> Checking Pods status...
ERROR: The following pods are not ready:
wazuh-indexer-0 Terminating
wazuh-security-init-v7-4cwn2 Error
--- Description for wazuh-indexer-0 ---
QoS Class:                   Burstable
Node-Selectors:              kubernetes.io/hostname=k8-node-20
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  77s   default-scheduler  Successfully assigned soc/wazuh-indexer-0 to k8-node-20
  Normal  Pulling    77s   kubelet            Pulling image "busybox"
  Normal  Pulled     76s   kubelet            Successfully pulled image "busybox" in 683ms (683ms including waiting). Image size: 2222260 bytes.
  Normal  Created    76s   kubelet            Created container: fix-permissions
  Normal  Started    76s   kubelet            Started container fix-permissions
  Normal  Pulling    76s   kubelet            Pulling image "busybox"
  Normal  Pulled     75s   kubelet            Successfully pulled image "busybox" in 709ms (709ms including waiting). Image size: 2222260 bytes.
  Normal  Created    75s   kubelet            Created container: increase-vm-max-map
  Normal  Started    75s   kubelet            Started container increase-vm-max-map
  Normal  Pulled     75s   kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal  Created    74s   kubelet            Created container: wazuh-indexer
  Normal  Started    74s   kubelet            Started container wazuh-indexer
  Normal  Killing    2s    kubelet            Stopping container wazuh-indexer
--- Logs for wazuh-indexer-0 (Current) ---
[pod/wazuh-indexer-0/increase-vm-max-map] vm.max_map_count = 262144
[pod/wazuh-indexer-0/wazuh-indexer] 	at java.base/java.lang.Thread.run(Thread.java:1583) [?:?]
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:57,022][WARN ][o.o.h.AbstractHttpServerTransport] [wazuh.indexer] caught exception while handling client http traffic, closing connection Netty4HttpChannel{localAddress=/172.16.209.13:9200, remoteAddress=/172.16.209.57:40950}
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
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,440][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,445][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,450][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:37:59,454][ERROR][o.o.s.a.BackendRegistry  ] [wazuh.indexer] Not yet initialized (you may need to run securityadmin)
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,624][INFO ][o.o.n.Node               ] [wazuh.indexer] stopping ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,625][INFO ][o.o.s.a.r.AuditMessageRouter] [wazuh.indexer] Closing AuditMessageRouter
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,633][INFO ][o.o.s.a.s.SinkProvider   ] [wazuh.indexer] Closing DebugSink
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,734][INFO ][o.o.n.Node               ] [wazuh.indexer] stopped
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,735][INFO ][o.o.n.Node               ] [wazuh.indexer] closing ...
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,739][INFO ][o.o.s.a.i.AuditLogImpl   ] [wazuh.indexer] Closing AuditLogImpl
[pod/wazuh-indexer-0/wazuh-indexer] [2026-02-11T09:38:00,741][INFO ][o.o.n.Node               ] [wazuh.indexer] closed
--- Logs for wazuh-indexer-0 (Previous) ---
Error from server (BadRequest): previous terminated container "fix-permissions" in pod "wazuh-indexer-0" not found
Failed to fetch previous logs
--- Description for wazuh-security-init-v7-4cwn2 ---
    SecretName:  wazuh-indexer-certs
    Optional:    false
  kube-api-access-2w649:
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
  Type     Reason     Age                From               Message
  ----     ------     ----               ----               -------
  Normal   Scheduled  78s                default-scheduler  Successfully assigned soc/wazuh-security-init-v7-4cwn2 to k8-manager
  Normal   Pulled     21s (x3 over 77s)  kubelet            Container image "wazuh/wazuh-indexer:4.14.2" already present on machine
  Normal   Created    21s (x3 over 77s)  kubelet            Created container: security-init
  Normal   Started    21s (x3 over 76s)  kubelet            Started container security-init
  Warning  BackOff    14s (x2 over 36s)  kubelet            Back-off restarting failed container security-init in pod wazuh-security-init-v7-4cwn2_soc(0c4aa37b-3cc8-4a38-937e-3e4dfa9e2f82)
--- Logs for wazuh-security-init-v7-4cwn2 (Current) ---
[pod/wazuh-security-init-v7-4cwn2/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v7-4cwn2/security-init] Trace:
[pod/wazuh-security-init-v7-4cwn2/security-init] javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v7-4cwn2/security-init] See https://opensearch.org/docs/latest/clients/java-rest-high-level/ for troubleshooting.
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.opensearch.client.RestClient.extractAndWrapCause(RestClient.java:1241)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:358)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.opensearch.client.RestClient.performRequest(RestClient.java:346)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.opensearch.security.tools.SecurityAdmin.execute(SecurityAdmin.java:575)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.opensearch.security.tools.SecurityAdmin.main(SecurityAdmin.java:165)
[pod/wazuh-security-init-v7-4cwn2/security-init] Caused by: javax.net.ssl.SSLHandshakeException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.Alert.createSSLException(Alert.java:130)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:383)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:326)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:321)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1327)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1204)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1147)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:393)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:476)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1273)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask$DelegatedAction.run(SSLEngineImpl.java:1260)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/java.security.AccessController.doPrivileged(AccessController.java:714)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.SSLEngineImpl$DelegatedTask.run(SSLEngineImpl.java:1205)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doRunTask(SSLIOSession.java:289)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.doHandshake(SSLIOSession.java:357)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.nio.reactor.ssl.SSLIOSession.isAppInputReady(SSLIOSession.java:545)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIODispatch.inputReady(AbstractIODispatch.java:120)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.readable(BaseIOReactor.java:162)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvent(AbstractIOReactor.java:337)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.processEvents(AbstractIOReactor.java:315)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.AbstractIOReactor.execute(AbstractIOReactor.java:276)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.BaseIOReactor.execute(BaseIOReactor.java:104)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at org.apache.http.impl.nio.reactor.AbstractMultiworkerIOReactor$Worker.run(AbstractMultiworkerIOReactor.java:591)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/java.lang.Thread.run(Thread.java:1583)
[pod/wazuh-security-init-v7-4cwn2/security-init] Caused by: sun.security.validator.ValidatorException: PKIX path validation failed: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:318)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:267)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.validator.Validator.validate(Validator.java:256)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:284)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:144)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1305)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	... 19 more
[pod/wazuh-security-init-v7-4cwn2/security-init] Caused by: java.security.cert.CertPathValidatorException: Path does not chain with any of the trust anchors
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.validate(PKIXCertPathValidator.java:157)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.provider.certpath.PKIXCertPathValidator.engineValidate(PKIXCertPathValidator.java:83)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/java.security.cert.CertPathValidator.validate(CertPathValidator.java:309)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	at java.base/sun.security.validator.PKIXValidator.doValidate(PKIXValidator.java:313)
[pod/wazuh-security-init-v7-4cwn2/security-init] 	... 24 more
[pod/wazuh-security-init-v7-4cwn2/security-init] 
[pod/wazuh-security-init-v7-4cwn2/security-init] 
--- Logs for wazuh-security-init-v7-4cwn2 (Previous) ---
[pod/wazuh-security-init-v7-4cwn2/security-init] unable to retrieve container logs for containerd://e7042984bf2e0c127bb36231b2f38263408b4de2a7073c5b2e25dbfb351a740d