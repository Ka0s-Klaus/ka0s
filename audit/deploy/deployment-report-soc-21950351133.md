Deployment Report: core/b2b/core-services/soc
Date: Thu Feb 12 14:22:14 UTC 2026
Trigger: push by santakloud
Namespace: soc
---------------------------------------------------
>>> Pods Status:
NAME                              READY   STATUS        RESTARTS      AGE    IP             NODE         NOMINATED NODE   READINESS GATES
wazuh-agent-65v4x                 2/2     Running       6 (15h ago)   46h    192.168.1.20   k8-node-20   <none>           <none>
wazuh-agent-79zds                 2/2     Running       4 (15h ago)   46h    192.168.1.40   k8-node-40   <none>           <none>
wazuh-agent-gfwhq                 2/2     Running       0             46h    192.168.1.10   k8-manager   <none>           <none>
wazuh-agent-jd2pk                 2/2     Running       4 (15h ago)   46h    192.168.1.30   k8-node-30   <none>           <none>
wazuh-dashboard-7fbd59fd8-dgdtt   0/1     Terminating   1             15s    172.16.74.22   k8-manager   <none>           <none>
wazuh-security-init-s8hmg         1/1     Running       0             143m   172.16.74.55   k8-manager   <none>           <none>
wazuh-setup-job-6phbb             1/1     Running       0             14s    172.16.209.5   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in soc namespace.

>>> Ingress Status:
NAME                      CLASS   HOSTS         ADDRESS         PORTS     AGE
wazuh-dashboard-ingress   nginx   soc.ka0s.io   192.168.1.250   80, 443   2d1h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: soc ===
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
--> Checking Endpoints for Service soc...
Error from server (NotFound): endpoints "soc" not found
