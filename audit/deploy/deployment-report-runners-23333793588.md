Deployment Report: core/b2b/core-services/runners
Date: Fri Mar 20 07:49:55 UTC 2026
Trigger: push by asantacana1970
Namespace: actions-runner-system
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS    RESTARTS      AGE     IP              NODE         NOMINATED NODE   READINESS GATES
gha-rs-controller-7dbd968c-p8wzb            1/1     Running   1 (21m ago)   33h     172.16.74.60    k8-manager   <none>           <none>
swarm-runners-scaleset-884475f5-listener    1/1     Running   0             3m21s   172.16.209.10   k8-node-20   <none>           <none>
swarm-runners-scaleset-97tpt-runner-8gn22   1/1     Running   0             2m11s   172.16.209.12   k8-node-20   <none>           <none>
swarm-runners-scaleset-97tpt-runner-dh7bx   1/1     Running   0             40s     172.16.209.36   k8-node-20   <none>           <none>

>>> Services Status:
No resources found in actions-runner-system namespace.

>>> Ingress Status:
No resources found in actions-runner-system namespace.
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: actions-runner-system ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service runners...
ℹ️  Service 'runners' not found in namespace 'actions-runner-system'. Skipping endpoint check.
=== Verification Successful (with possible warnings) ===
