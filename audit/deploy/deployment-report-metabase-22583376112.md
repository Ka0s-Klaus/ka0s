Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 15:43:17 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS             RESTARTS         AGE   IP              NODE         NOMINATED NODE   READINESS GATES
metabase-84746db9b5-wqzsr   0/1     Running            0                60s   172.16.209.33   k8-node-20   <none>           <none>
metabase-86f54686ff-mrzw2   0/1     CrashLoopBackOff   10 (2m13s ago)   36m   172.16.74.41    k8-manager   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    89m

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   89m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
metabase-86f54686ff-mrzw2 CrashLoopBackOff
--- Description for metabase-86f54686ff-mrzw2 ---
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Burstable
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason     Age                  From               Message
  ----     ------     ----                 ----               -------
  Normal   Scheduled  36m                  default-scheduler  Successfully assigned metabase/metabase-86f54686ff-mrzw2 to k8-manager
  Normal   Pulling    36m                  kubelet            Pulling image "metabase/metabase:v0.50.23"
  Normal   Pulled     36m                  kubelet            Successfully pulled image "metabase/metabase:v0.50.23" in 12.034s (12.034s including waiting). Image size: 514169031 bytes.
  Warning  Unhealthy  32m (x17 over 36m)   kubelet            Startup probe failed: Get "http://172.16.74.41:3000/api/health": dial tcp 172.16.74.41:3000: connect: connection refused
  Normal   Killing    24m (x2 over 31m)    kubelet            Container metabase failed startup probe, will be restarted
  Warning  Unhealthy  16m (x22 over 35m)   kubelet            Startup probe failed: HTTP probe failed with statuscode: 503
  Normal   Created    10m (x9 over 36m)    kubelet            Created container: metabase
  Normal   Started    10m (x9 over 36m)    kubelet            Started container metabase
  Normal   Pulled     4m11s (x9 over 34m)  kubelet            Container image "metabase/metabase:v0.50.23" already present on machine
  Warning  BackOff    76s (x93 over 33m)   kubelet            Back-off restarting failed container metabase in pod metabase-86f54686ff-mrzw2_metabase(23b4c479-d79b-40bc-bbb3-149e9b26dc8d)
--- Logs for metabase-86f54686ff-mrzw2 (Current) ---
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.sql.SqlUtils.toSQLException(SqlUtils.java:118)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:692)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.getConnection(AbstractPoolBackedDataSource.java:140)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$get_connection.invokeStatic(jdbc.clj:372)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$get_connection.invoke(jdbc.clj:274)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invokeStatic(jdbc.clj:1111)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invoke(jdbc.clj:1093)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1182)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1160)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invokeStatic(connection.clj:348)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invoke(connection.clj:345)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at clojure.lang.Var.invoke(Var.java:384)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at metabase.db.setup$verify_db_connection$fn__53175.invoke(setup.clj:115)
[pod/metabase-86f54686ff-mrzw2/metabase] 	... 32 more
[pod/metabase-86f54686ff-mrzw2/metabase] Caused by: com.mchange.v2.resourcepool.CannotAcquireResourceException: A ResourcePool could not acquire a resource from its primary factory or source.
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.awaitAvailable(BasicResourcePool.java:1507)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.prelimCheckoutResource(BasicResourcePool.java:644)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.checkoutResource(BasicResourcePool.java:554)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutAndMarkConnectionInUse(C3P0PooledConnectionPool.java:758)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:685)
[pod/metabase-86f54686ff-mrzw2/metabase] 	... 45 more
[pod/metabase-86f54686ff-mrzw2/metabase] Caused by: org.postgresql.util.PSQLException: FATAL: no pg_hba.conf entry for host "172.16.74.41", user "metabase_user", database "metabase", no encryption
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.doAuthentication(ConnectionFactoryImpl.java:698)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:207)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:262)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:54)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:273)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.Driver.makeConnection(Driver.java:446)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at org.postgresql.Driver.connect(Driver.java:298)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at metabase.db.data_source.DataSource.getConnection(data_source.clj:78)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.WrapperConnectionPoolDataSource.getPooledConnection(WrapperConnectionPoolDataSource.java:161)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool$1PooledConnectionResourcePoolManager.acquireResource(C3P0PooledConnectionPool.java:213)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquire(BasicResourcePool.java:1176)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquireAndDecrementPendingAcquiresWithinLockOnSuccess(BasicResourcePool.java:1163)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.access$700(BasicResourcePool.java:44)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool$ScatteredAcquireTask.run(BasicResourcePool.java:1908)
[pod/metabase-86f54686ff-mrzw2/metabase] 	at com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:696)
[pod/metabase-86f54686ff-mrzw2/metabase] 	Suppressed: org.postgresql.util.PSQLException: FATAL: no pg_hba.conf entry for host "172.16.74.41", user "metabase_user", database "metabase", no encryption
[pod/metabase-86f54686ff-mrzw2/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.doAuthentication(ConnectionFactoryImpl.java:698)
[pod/metabase-86f54686ff-mrzw2/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:207)
[pod/metabase-86f54686ff-mrzw2/metabase] 		at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:271)
[pod/metabase-86f54686ff-mrzw2/metabase] 		... 14 more
[pod/metabase-86f54686ff-mrzw2/metabase] 2026-03-02 15:41:04,154 INFO metabase.core :: Metabase Shutting Down ...
[pod/metabase-86f54686ff-mrzw2/metabase] 2026-03-02 15:41:04,155 INFO metabase.server :: Shutting Down Embedded Jetty Webserver
[pod/metabase-86f54686ff-mrzw2/metabase] 2026-03-02 15:41:04,212 WARN db.liquibase :: ()
[pod/metabase-86f54686ff-mrzw2/metabase] 2026-03-02 15:41:04,214 INFO metabase.core :: Metabase Shutdown COMPLETE
--> Checking Endpoints for Service metabase...
WARNING: Service metabase has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
