Deployment Report: core/b2b/core-services/zabbix
Date: Mon Mar  2 11:49:41 UTC 2026
Trigger: push by santakloud
Namespace: zabbix
---------------------------------------------------
>>> Pods Status:
NAME                             READY   STATUS    RESTARTS         AGE   IP             NODE         NOMINATED NODE   READINESS GATES
postgresql-7dfd4b4b68-kdbz9      1/1     Running   7 (3h46m ago)    47d   172.16.74.6    k8-manager   <none>           <none>
zabbix-agent-6fftl               1/1     Running   4 (3h46m ago)    33d   192.168.1.10   k8-manager   <none>           <none>
zabbix-agent-ksjkb               1/1     Running   21 (4d13h ago)   33d   192.168.1.20   k8-node-20   <none>           <none>
zabbix-agent-ksx2w               1/1     Running   45 (14d ago)     33d   192.168.1.30   k8-node-30   <none>           <none>
zabbix-agent-qz6g2               1/1     Running   27 (24m ago)     25d   192.168.1.40   k8-node-40   <none>           <none>
zabbix-server-554759d44b-mf4q5   1/1     Running   5 (3h46m ago)    25d   172.16.74.62   k8-manager   <none>           <none>
zabbix-web-677b9f7b9c-sljl8      1/1     Running   4 (3h46m ago)    32d   172.16.74.20   k8-manager   <none>           <none>

>>> Services Status:
NAME            TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
postgresql      ClusterIP      10.102.133.214   <none>          5432/TCP       47d
zabbix-agent    ClusterIP      None             <none>          10050/TCP      45d
zabbix-server   ClusterIP      10.96.9.144      <none>          10051/TCP      47d
zabbix-web      LoadBalancer   10.102.145.85    192.168.1.241   80:31123/TCP   47d

>>> Ingress Status:
NAME             CLASS   HOSTS         ADDRESS         PORTS   AGE
zabbix-ingress   nginx   noc.ka0s.io   192.168.1.250   80      22d
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: zabbix ===
--> Debugging: Checking for Wazuh Dashboard Logs...
error: error executing jsonpath "{.items[0].metadata.name}": Error executing template: array index out of bounds: index 0, length 0. Printing more information for debugging the template:
	template was:
		{.items[0].metadata.name}
	object given to jsonpath engine was:
		map[string]interface {}{"apiVersion":"v1", "items":[]interface {}{}, "kind":"List", "metadata":map[string]interface {}{"resourceVersion":""}}


No wazuh-dashboard pod found.
--> Debugging: Checking for Wazuh Indexer Logs...
error: error executing jsonpath "{.items[0].metadata.name}": Error executing template: array index out of bounds: index 0, length 0. Printing more information for debugging the template:
	template was:
		{.items[0].metadata.name}
	object given to jsonpath engine was:
		map[string]interface {}{"apiVersion":"v1", "items":[]interface {}{}, "kind":"List", "metadata":map[string]interface {}{"resourceVersion":""}}


No wazuh-indexer pod found.
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service zabbix...
Error from server (NotFound): endpoints "zabbix" not found
