Deployment Report: core/b2b/core-services/runners
Date: Wed Mar 18 23:56:14 UTC 2026
Trigger: push by ka0score
Namespace: actions-runner-system
---------------------------------------------------
>>> Pods Status:
NAME                                        READY   STATUS              RESTARTS   AGE     IP             NODE         NOMINATED NODE   READINESS GATES
gha-rs-controller-7dbd968c-p8wzb            1/1     Running             0          111m    172.16.74.61   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-2jzlq   0/1     Terminating         0          40m     172.16.74.41   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-47xqm   1/1     Running             0          3m36s   172.16.74.11   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-5l9tt   1/1     Running             0          40m     172.16.74.79   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-6s9v6   1/1     Running             0          22m     172.16.74.42   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-6x4x9   0/1     ContainerCreating   0          12s     <none>         k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-78kqh   1/1     Running             0          23m     172.16.74.55   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-7gbhx   1/1     Running             0          2m18s   172.16.74.35   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-82wkh   1/1     Running             0          47s     172.16.74.9    k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-88xrc   1/1     Running             0          40m     172.16.74.50   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-98jjh   0/1     Terminating         0          3m58s   172.16.74.13   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-9w7f6   1/1     Running             0          2m44s   172.16.74.15   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-b6v9s   1/1     Running             0          22m     172.16.74.1    k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-btkhx   1/1     Running             0          13m     172.16.74.93   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-cb8kk   1/1     Running             0          13m     172.16.74.92   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-cfklg   1/1     Running             0          7m7s    172.16.74.17   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-ct444   1/1     Running             0          40m     172.16.74.73   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-cwzg8   1/1     Running             0          39m     172.16.74.80   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-fd27g   1/1     Running             0          11m     172.16.74.94   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-fnvbt   1/1     Running             0          29m     172.16.74.7    k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-ftrl6   1/1     Running             0          22m     172.16.74.48   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-fwq9g   1/1     Running             0          41m     172.16.74.60   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-h5wms   1/1     Running             0          40m     172.16.74.19   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-hdx68   1/1     Running             0          5m29s   172.16.74.49   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-hmx6z   1/1     Running             0          40m     172.16.74.74   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-hrdlx   1/1     Running             0          50s     172.16.74.39   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-hrn94   1/1     Running             0          20m     172.16.74.44   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-j46cq   1/1     Running             0          3m38s   172.16.74.58   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-jnzjc   1/1     Running             0          32m     172.16.74.45   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-kcs8j   1/1     Running             0          35m     172.16.74.83   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-mvw6l   1/1     Running             0          29m     172.16.74.28   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-n8dls   1/1     Running             0          31m     172.16.74.86   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-p67kv   1/1     Running             0          12m     172.16.74.22   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-q9k2n   1/1     Running             0          39m     172.16.74.75   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-qr649   1/1     Running             0          41m     172.16.74.38   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-qtprq   1/1     Running             0          40m     172.16.74.47   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-qxhhh   1/1     Running             0          34m     172.16.74.23   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-rkwcn   1/1     Running             0          21m     172.16.74.37   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-rphxc   1/1     Running             0          32m     172.16.74.53   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-s9fxb   1/1     Running             0          28m     172.16.74.2    k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-t55r7   1/1     Running             0          41m     172.16.74.27   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-t6scp   1/1     Running             0          37s     172.16.74.57   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-t7dlc   1/1     Running             0          25m     172.16.74.62   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-tnrjs   0/1     ContainerCreating   0          3s      <none>         k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-tp8fd   1/1     Running             0          2m43s   172.16.74.52   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-tst99   1/1     Running             0          29m     172.16.74.51   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-v727z   1/1     Running             0          41m     172.16.74.43   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-vf58b   1/1     Running             0          19m     172.16.74.29   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-vx4mh   1/1     Running             0          29m     172.16.74.88   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-x5wbv   1/1     Running             0          33m     172.16.74.63   k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-z4wh5   1/1     Running             0          40m     172.16.74.5    k8-manager   <none>           <none>
swarm-runners-scaleset-4dsfd-runner-zh664   1/1     Running             0          12m     172.16.74.40   k8-manager   <none>           <none>

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
