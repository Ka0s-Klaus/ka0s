Deployment Report: core/b2b/core-services/storage-system
Date: Mon Mar  2 12:07:05 UTC 2026
Trigger: push by santakloud
Namespace: storage-system
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS    RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
nfs-client-provisioner-7bc7b6d5dd-t9ntd   1/1     Running   0          5s    172.16.209.1   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in storage-system namespace.

>>> Ingress Status:
No resources found in storage-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: storage-system ===
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
--> Checking Endpoints for Service storage-system...
Error from server (NotFound): endpoints "storage-system" not found
