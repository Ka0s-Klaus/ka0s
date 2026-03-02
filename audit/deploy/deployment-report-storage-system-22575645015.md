Deployment Report: core/b2b/core-services/storage-system
Date: Mon Mar  2 12:18:19 UTC 2026
Trigger: push by santakloud
Namespace: storage-system
---------------------------------------------------
>>> Pods Status:
NAME                                      READY   STATUS              RESTARTS   AGE   IP             NODE         NOMINATED NODE   READINESS GATES
nfs-client-provisioner-7bc7b6d5dd-t9ntd   1/1     Running             0          11m   172.16.209.1   k8-node-20   <none>           <none>
nfs-validation-job-v98lz                  0/1     ContainerCreating   0          0s    <none>         k8-node-20   <none>           <none>

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
WARNING: The following pods are not ready (yet):
nfs-validation-job-v98lz ContainerCreating
--- Description for nfs-validation-job-v98lz ---
Volumes:
  nfs-vol:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  nfs-validation-pvc
    ReadOnly:   false
  kube-api-access-7g5xs:
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
  Normal  Scheduled  1s    default-scheduler  Successfully assigned storage-system/nfs-validation-job-v98lz to k8-node-20
  Normal  Pulling    0s    kubelet            Pulling image "busybox"
--- Logs for nfs-validation-job-v98lz (Current) ---
Error from server (BadRequest): container "validation" in pod "nfs-validation-job-v98lz" is waiting to start: ContainerCreating
Failed to fetch current logs
--> Checking Endpoints for Service storage-system...
Error from server (NotFound): endpoints "storage-system" not found
