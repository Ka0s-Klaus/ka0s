Deployment Report: core/b2b/core-services/metabase
Date: Mon Mar  2 16:15:23 UTC 2026
Trigger: push by santakloud
Namespace: metabase
---------------------------------------------------
>>> Pods Status:
NAME                        READY   STATUS             RESTARTS      AGE    IP              NODE         NOMINATED NODE   READINESS GATES
metabase-74d498ccc9-9fm2c   0/1     CrashLoopBackOff   5 (37s ago)   9m5s   172.16.209.60   k8-node-20   <none>           <none>
metabase-86f54686ff-wzc72   0/1     Running            0             60s    172.16.209.27   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
metabase   ClusterIP   10.104.238.93   <none>        80/TCP    121m

>>> Ingress Status:
NAME               CLASS   HOSTS              ADDRESS         PORTS     AGE
metabase-ingress   nginx   metabase.ka0s.io   192.168.1.250   80, 443   121m
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: metabase ===
--> Checking Pods status...
WARNING: The following pods are not ready (yet):
metabase-74d498ccc9-9fm2c CrashLoopBackOff
--- Description for metabase-74d498ccc9-9fm2c ---
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
  Type     Reason     Age                     From               Message
  ----     ------     ----                    ----               -------
  Normal   Scheduled  9m5s                    default-scheduler  Successfully assigned metabase/metabase-74d498ccc9-9fm2c to k8-node-20
  Warning  Unhealthy  5m55s (x11 over 8m55s)  kubelet            Startup probe failed: Get "http://172.16.209.60:3000/api/health": dial tcp 172.16.209.60:3000: connect: connection refused
  Warning  BackOff    5m5s (x5 over 6m39s)    kubelet            Back-off restarting failed container metabase in pod metabase-74d498ccc9-9fm2c_metabase(a126f4cf-008a-45e9-8beb-3d388efe9aeb)
  Warning  Unhealthy  3m55s (x11 over 8m15s)  kubelet            Startup probe failed: HTTP probe failed with statuscode: 503
  Normal   Killing    2m15s                   kubelet            Container metabase failed startup probe, will be restarted
  Normal   Pulled     105s (x6 over 9m4s)     kubelet            Container image "metabase/metabase:v0.50.23" already present on machine
  Normal   Created    105s (x6 over 9m4s)     kubelet            Created container: metabase
  Normal   Started    104s (x6 over 9m4s)     kubelet            Started container metabase
--- Logs for metabase-74d498ccc9-9fm2c (Current) ---
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.lang.RestFn.invoke(RestFn.java:397)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.lang.AFn.applyToHelper(AFn.java:152)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.lang.RestFn.applyTo(RestFn.java:132)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at metabase.bootstrap.main(Unknown Source)
[pod/metabase-74d498ccc9-9fm2c/metabase] Caused by: java.sql.SQLException: Connections could not be acquired from the underlying database!
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.sql.SqlUtils.toSQLException(SqlUtils.java:118)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:692)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.getConnection(AbstractPoolBackedDataSource.java:140)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$get_connection.invokeStatic(jdbc.clj:372)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$get_connection.invoke(jdbc.clj:274)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invokeStatic(jdbc.clj:1111)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$db_query_with_resultset_STAR_.invoke(jdbc.clj:1093)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1182)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$query.invokeStatic(jdbc.clj:1160)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.java.jdbc$query.invoke(jdbc.clj:1144)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invokeStatic(connection.clj:348)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at metabase.driver.sql_jdbc.connection$can_connect_with_spec_QMARK_.invoke(connection.clj:345)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at clojure.lang.Var.invoke(Var.java:384)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at metabase.db.setup$verify_db_connection$fn__53175.invoke(setup.clj:115)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	... 32 more
[pod/metabase-74d498ccc9-9fm2c/metabase] Caused by: com.mchange.v2.resourcepool.CannotAcquireResourceException: A ResourcePool could not acquire a resource from its primary factory or source.
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.awaitAvailable(BasicResourcePool.java:1507)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.prelimCheckoutResource(BasicResourcePool.java:644)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.checkoutResource(BasicResourcePool.java:554)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutAndMarkConnectionInUse(C3P0PooledConnectionPool.java:758)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.checkoutPooledConnection(C3P0PooledConnectionPool.java:685)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	... 45 more
[pod/metabase-74d498ccc9-9fm2c/metabase] Caused by: org.postgresql.util.PSQLException: The server does not support SSL.
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.enableSSL(ConnectionFactoryImpl.java:615)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:195)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:262)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:54)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:273)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.Driver.makeConnection(Driver.java:446)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at org.postgresql.Driver.connect(Driver.java:298)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at java.sql/java.sql.DriverManager.getConnection(Unknown Source)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at metabase.db.data_source.DataSource.getConnection(data_source.clj:78)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.WrapperConnectionPoolDataSource.getPooledConnection(WrapperConnectionPoolDataSource.java:161)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool$1PooledConnectionResourcePoolManager.acquireResource(C3P0PooledConnectionPool.java:213)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquire(BasicResourcePool.java:1176)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.doAcquireAndDecrementPendingAcquiresWithinLockOnSuccess(BasicResourcePool.java:1163)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool.access$700(BasicResourcePool.java:44)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.resourcepool.BasicResourcePool$ScatteredAcquireTask.run(BasicResourcePool.java:1908)
[pod/metabase-74d498ccc9-9fm2c/metabase] 	at com.mchange.v2.async.ThreadPoolAsynchronousRunner$PoolThread.run(ThreadPoolAsynchronousRunner.java:696)
[pod/metabase-74d498ccc9-9fm2c/metabase] 2026-03-02 16:14:46,275 INFO metabase.core :: Metabase Shutting Down ...
[pod/metabase-74d498ccc9-9fm2c/metabase] 2026-03-02 16:14:46,276 INFO metabase.server :: Shutting Down Embedded Jetty Webserver
[pod/metabase-74d498ccc9-9fm2c/metabase] 2026-03-02 16:14:46,287 WARN db.liquibase :: ()
[pod/metabase-74d498ccc9-9fm2c/metabase] 2026-03-02 16:14:46,288 INFO metabase.core :: Metabase Shutdown COMPLETE
--> Checking Endpoints for Service metabase...
WARNING: Service metabase has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
