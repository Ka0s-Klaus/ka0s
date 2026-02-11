Deployment Report: core/b2b/core-services/itop
Date: Wed Feb 11 08:55:36 UTC 2026
Trigger: push by santakloud
Namespace: itop
---------------------------------------------------
>>> Pods Status:
NAME                          READY   STATUS              RESTARTS      AGE   IP              NODE         NOMINATED NODE   READINESS GATES
fix-mysql-permissions-rcmc5   0/1     ContainerCreating   0             1s    <none>          k8-manager   <none>           <none>
itop-677bffb8d8-bzq9v         1/1     Running             2 (10h ago)   42h   172.16.209.23   k8-node-20   <none>           <none>
mysql-6d89499c7c-kqvv5        1/1     Running             2 (10h ago)   42h   172.16.209.35   k8-node-20   <none>           <none>

>>> Services Status:
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
itop    ClusterIP   10.103.185.4    <none>        80/TCP     5d
mysql   ClusterIP   10.110.39.171   <none>        3306/TCP   5d

>>> Ingress Status:
NAME           CLASS   HOSTS          ADDRESS         PORTS     AGE
itop-ingress   nginx   itsm.ka0s.io   192.168.1.250   80, 443   2d21h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: itop ===
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
--> Checking Endpoints for Service itop...
✅ Endpoints found: 172.16.209.23
=== Verification Successful ===
