Deployment Report: core/b2b/core-services/openclaw
Date: Thu Mar 19 11:53:52 UTC 2026
Trigger: push by ka0score
Namespace: openclaw
---------------------------------------------------
>>> Pods Status:
NAME         READY   STATUS    RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
openclaw-0   0/1     Running   0          29s   172.16.209.32   k8-node-20   <none>           <none>

>>> Services Status:
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)            AGE
openclaw   ClusterIP   10.101.236.82   <none>        80/TCP,18791/TCP   46h

>>> Ingress Status:
NAME               CLASS    HOSTS              ADDRESS         PORTS     AGE
openclaw-ingress   <none>   openclaw.ka0s.io   192.168.1.250   80, 443   46h
---------------------------------------------------
>>> Advanced Verification Results:
=== Starting Kubernetes Deployment Verification for Namespace: openclaw ===
--> Checking Pods status...
✅ All pods are Running or Completed.
--> Checking Endpoints for Service openclaw...
WARNING: Service openclaw has no active endpoints! (Pods might not be ready or matching labels are wrong)
=== Verification Successful (with possible warnings) ===
