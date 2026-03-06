# 🧾 Ka0s Cluster Audit Report - 20260306_113355
**Generado (UTC):** Fri Mar  6 11:33:55 UTC 2026
**Origen:** manual

Este reporte evita deliberadamente volcar `Secret` o `describe` de workloads para no exponer variables sensibles.

## 🔎 Contexto del clúster

```
Command: kubectl cluster-info
Timestamp (UTC): Fri Mar  6 11:33:55 UTC 2026

Kubernetes control plane is running at https://192.168.1.10:6443
CoreDNS is running at https://192.168.1.10:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

## 🔎 Versión

```
Command: kubectl version -o yaml
Timestamp (UTC): Fri Mar  6 11:33:55 UTC 2026

clientVersion:
  buildDate: "2026-02-26T20:02:50Z"
  compiler: gc
  gitCommit: fdc9d74cbf2da6754ebf81d56f80ae2948cd6425
  gitTreeState: clean
  gitVersion: v1.35.2
  goVersion: go1.26.0
  major: "1"
  minor: "35"
  platform: darwin/arm64
kustomizeVersion: v5.7.1
serverVersion:
  buildDate: "2025-12-16T17:59:24Z"
  compiler: gc
  gitCommit: 2195eae9e91f2e72114365d9bb9c670d0c08de12
  gitTreeState: clean
  gitVersion: v1.32.11
  goVersion: go1.24.11
  major: "1"
  minor: "32"
  platform: linux/amd64

```

## 🖥️ Nodos (resumen)

```
Command: kubectl get nodes -o wide
Timestamp (UTC): Fri Mar  6 11:33:55 UTC 2026

NAME         STATUS                     ROLES           AGE   VERSION    INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION        CONTAINER-RUNTIME
k8-manager   Ready                      control-plane   77d   v1.32.11   192.168.1.10   <none>        Ubuntu 24.04.4 LTS   6.8.1-1042-realtime   containerd://2.2.1
k8-node-20   Ready                      <none>          77d   v1.32.11   192.168.1.20   <none>        Ubuntu 24.04.4 LTS   6.8.1-1042-realtime   containerd://2.2.1
k8-node-30   Ready,SchedulingDisabled   <none>          57d   v1.32.11   192.168.1.30   <none>        Ubuntu 24.04.4 LTS   6.8.0-100-generic     containerd://2.2.1
k8-node-40   Ready,SchedulingDisabled   <none>          29d   v1.32.11   192.168.1.40   <none>        Ubuntu 24.04.4 LTS   6.8.0-101-generic     containerd://2.2.1
```

## 🖥️ Nodos (taints)

```
Command: kubectl get nodes -o jsonpath={range .items[*]}{.metadata.name}{"\t"}{.spec.taints}{"\n"}{end}
Timestamp (UTC): Fri Mar  6 11:33:56 UTC 2026

k8-manager	
k8-node-20	
k8-node-30	[{"effect":"NoSchedule","key":"restricted","value":"true"},{"effect":"NoSchedule","key":"node.kubernetes.io/unschedulable","timeAdded":"2026-02-13T06:55:54Z"}]
k8-node-40	[{"effect":"NoSchedule","key":"node.kubernetes.io/unschedulable","timeAdded":"2026-02-08T10:40:11Z"}]
```

## 🖥️ Nodos (cordon/unschedulable)

```
Command: kubectl get nodes -o jsonpath={range .items[*]}{.metadata.name}{"\tunschedulable="}{.spec.unschedulable}{"\n"}{end}
Timestamp (UTC): Fri Mar  6 11:33:56 UTC 2026

k8-manager	unschedulable=
k8-node-20	unschedulable=
k8-node-30	unschedulable=true
k8-node-40	unschedulable=true
```

## 🖥️ Nodos (condiciones clave)

```
Command: kubectl get nodes -o jsonpath={range .items[*]}{.metadata.name}{"\t"}{range .status.conditions[*]}{.type}{"="}{.status}{";"}{end}{"\n"}{end}
Timestamp (UTC): Fri Mar  6 11:33:56 UTC 2026

k8-manager	NetworkUnavailable=False;MemoryPressure=False;DiskPressure=False;PIDPressure=False;Ready=True;
k8-node-20	NetworkUnavailable=False;MemoryPressure=False;DiskPressure=False;PIDPressure=False;Ready=True;
k8-node-30	NetworkUnavailable=False;MemoryPressure=False;DiskPressure=False;PIDPressure=False;Ready=True;
k8-node-40	NetworkUnavailable=False;MemoryPressure=False;DiskPressure=False;PIDPressure=False;Ready=True;
```

## 📈 Uso de recursos (top nodes)

```
Command: kubectl top nodes
Timestamp (UTC): Fri Mar  6 11:33:56 UTC 2026

NAME         CPU(cores)   CPU(%)   MEMORY(bytes)   MEMORY(%)   
k8-manager   2170m        54%      4420Mi          28%         
k8-node-20   730m         18%      6560Mi          21%         
k8-node-30   111m         2%       1129Mi          7%          
k8-node-40   116m         2%       1368Mi          36%         
```

## 📦 Namespaces

```
Command: kubectl get ns
Timestamp (UTC): Fri Mar  6 11:33:56 UTC 2026

NAME                    STATUS   AGE
actions-runner-system   Active   51d
calico-apiserver        Active   77d
calico-system           Active   77d
cloudbeaver             Active   3d15h
default                 Active   77d
docs-portal             Active   3d
elk                     Active   2d22h
ingress-nginx           Active   26d
itop                    Active   28d
kube-node-lease         Active   77d
kube-public             Active   77d
kube-system             Active   77d
kubernetes-dashboard    Active   62d
local-path-storage      Active   72d
metabase                Active   3d21h
metallb-system          Active   73d
mongo                   Active   3d13h
n8n                     Active   24d
nginx                   Active   2d19h
postgresql              Active   3d22h
storage-system          Active   3d23h
tigera-operator         Active   77d
trivy-system            Active   30d
zabbix                  Active   51d
```

## 📦 Workloads (deploy/statefulset/daemonset)

```
Command: kubectl get deploy,sts,ds -A
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

NAMESPACE               NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
actions-runner-system   deployment.apps/gha-rs-controller           1/1     1            1           51d
calico-apiserver        deployment.apps/calico-apiserver            2/2     2            2           77d
calico-system           deployment.apps/calico-kube-controllers     1/1     1            1           77d
calico-system           deployment.apps/calico-typha                1/1     1            1           77d
cloudbeaver             deployment.apps/cloudbeaver                 1/1     1            1           3d15h
docs-portal             deployment.apps/docs-portal                 1/1     1            1           3d
elk                     deployment.apps/elasticsearch               1/1     1            1           2d22h
elk                     deployment.apps/kibana                      1/1     1            1           2d22h
elk                     deployment.apps/logstash                    1/1     1            1           2d22h
ingress-nginx           deployment.apps/ingress-nginx-controller    1/1     1            1           26d
itop                    deployment.apps/itop                        1/1     1            1           28d
itop                    deployment.apps/mysql                       1/1     1            1           28d
kube-system             deployment.apps/coredns                     2/2     2            2           77d
kube-system             deployment.apps/metrics-server              1/1     1            1           44d
kubernetes-dashboard    deployment.apps/dashboard-metrics-scraper   1/1     1            1           30d
kubernetes-dashboard    deployment.apps/kubernetes-dashboard        1/1     1            1           30d
local-path-storage      deployment.apps/local-path-provisioner      1/1     1            1           72d
metabase                deployment.apps/metabase                    1/1     1            1           3d21h
metallb-system          deployment.apps/controller                  1/1     1            1           73d
n8n                     deployment.apps/n8n                         1/1     1            1           24d
storage-system          deployment.apps/nfs-client-provisioner      1/1     1            1           3d23h
tigera-operator         deployment.apps/tigera-operator             1/1     1            1           77d
trivy-system            deployment.apps/trivy-operator              1/1     1            1           30d
zabbix                  deployment.apps/postgresql                  1/1     1            1           51d
zabbix                  deployment.apps/zabbix-server               1/1     1            1           51d
zabbix                  deployment.apps/zabbix-web                  1/1     1            1           18m

NAMESPACE    NAME                          READY   AGE
mongo        statefulset.apps/mongo        1/1     3d13h
postgresql   statefulset.apps/postgresql   1/1     3d22h

NAMESPACE        NAME                             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
calico-system    daemonset.apps/calico-node       4         4         4       4            4           kubernetes.io/os=linux   77d
calico-system    daemonset.apps/csi-node-driver   4         4         4       4            4           kubernetes.io/os=linux   77d
kube-system      daemonset.apps/kube-proxy        4         4         4       4            4           kubernetes.io/os=linux   77d
metallb-system   daemonset.apps/speaker           3         3         3       3            3           kubernetes.io/os=linux   73d
zabbix           daemonset.apps/zabbix-agent      3         3         3       3            3           <none>                   51d
```

## 📦 Jobs/CronJobs

```
Command: kubectl get jobs,cronjobs -A
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

NAMESPACE       NAME                                            STATUS     COMPLETIONS   DURATION   AGE
ingress-nginx   job.batch/ingress-nginx-admission-create        Complete   1/1           7s         26d
ingress-nginx   job.batch/ingress-nginx-admission-patch         Complete   1/1           7s         26d
trivy-system    job.batch/node-collector-9b759b4d8              Complete   1/1           7s         30d
trivy-system    job.batch/scan-vulnerabilityreport-56bff54df6   Complete   1/1           27s        30d
trivy-system    job.batch/scan-vulnerabilityreport-5dd85b7cff   Failed     0/1           30d        30d
trivy-system    job.batch/scan-vulnerabilityreport-74b9cf67dd   Complete   1/1           27s        30d
trivy-system    job.batch/scan-vulnerabilityreport-74ff4778ff   Complete   1/1           3m14s      30d
trivy-system    job.batch/scan-vulnerabilityreport-756595f7cd   Complete   1/1           32s        30d
trivy-system    job.batch/scan-vulnerabilityreport-75fdcff7d5   Complete   1/1           3m6s       30d
trivy-system    job.batch/scan-vulnerabilityreport-7b46d5f745   Complete   1/1           3m11s      30d
trivy-system    job.batch/scan-vulnerabilityreport-85f5c7c74    Complete   1/1           46s        30d
trivy-system    job.batch/scan-vulnerabilityreport-8678cd695d   Complete   1/1           26s        30d
trivy-system    job.batch/scan-vulnerabilityreport-86b66dfd6f   Complete   1/1           3m27s      30d
trivy-system    job.batch/scan-vulnerabilityreport-9b8b97657    Complete   1/1           2m59s      30d
trivy-system    job.batch/scan-vulnerabilityreport-f55ddf94f    Failed     0/1           30d        30d
```

## 📦 PodDisruptionBudgets

```
Command: kubectl get pdb -A
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

NAMESPACE       NAME           MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE
calico-system   calico-typha   N/A             1                 1                     77d
```

## 🧩 Pods (wide)

```
Command: kubectl get pods -A -o wide
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

NAMESPACE               NAME                                         READY   STATUS      RESTARTS        AGE     IP              NODE         NOMINATED NODE   READINESS GATES
actions-runner-system   gha-rs-controller-cd9ccc9c5-2bn9d            1/1     Running     1 (4d3h ago)    26d     172.16.74.22    k8-manager   <none>           <none>
actions-runner-system   swarm-runners-scaleset-7d4866c5-listener     1/1     Running     0               12h     172.16.209.37   k8-node-20   <none>           <none>
calico-apiserver        calico-apiserver-8659d4bbc5-296fz            1/1     Running     4 (4d3h ago)    77d     172.16.74.27    k8-manager   <none>           <none>
calico-apiserver        calico-apiserver-8659d4bbc5-pxwpw            1/1     Running     4 (4d3h ago)    77d     172.16.74.32    k8-manager   <none>           <none>
calico-system           calico-kube-controllers-7cf5864d67-4h9zr     1/1     Running     8 (4d3h ago)    23d     172.16.74.29    k8-manager   <none>           <none>
calico-system           calico-node-2cvj7                            1/1     Running     18 (8d ago)     26d     192.168.1.20    k8-node-20   <none>           <none>
calico-system           calico-node-jd4cl                            1/1     Running     11 (4d ago)     26d     192.168.1.40    k8-node-40   <none>           <none>
calico-system           calico-node-pjgs8                            1/1     Running     12 (18d ago)    26d     192.168.1.30    k8-node-30   <none>           <none>
calico-system           calico-node-zgvjv                            1/1     Running     2 (4d3h ago)    26d     192.168.1.10    k8-manager   <none>           <none>
calico-system           calico-typha-7dfd6bfb56-8qkxp                1/1     Running     4 (4d3h ago)    77d     192.168.1.10    k8-manager   <none>           <none>
calico-system           csi-node-driver-8hf6g                        2/2     Running     18 (18d ago)    57d     172.16.146.37   k8-node-30   <none>           <none>
calico-system           csi-node-driver-dbm9t                        2/2     Running     46 (8d ago)     77d     172.16.209.55   k8-node-20   <none>           <none>
calico-system           csi-node-driver-kwltm                        2/2     Running     8 (4d3h ago)    77d     172.16.74.8     k8-manager   <none>           <none>
calico-system           csi-node-driver-q6fsx                        2/2     Running     26 (4d ago)     29d     172.16.64.172   k8-node-40   <none>           <none>
cloudbeaver             cloudbeaver-7c94b5f4fb-sdkjz                 1/1     Running     0               3d15h   172.16.209.11   k8-node-20   <none>           <none>
docs-portal             docs-portal-8d4686745-fftrc                  1/1     Running     0               14h     172.16.209.47   k8-node-20   <none>           <none>
elk                     elasticsearch-7c4bfdb66b-mld4b               1/1     Running     0               2d22h   172.16.209.29   k8-node-20   <none>           <none>
elk                     kibana-5858558c5b-hvgmk                      1/1     Running     0               2d22h   172.16.209.63   k8-node-20   <none>           <none>
elk                     logstash-6df86d7678-sq7jf                    1/1     Running     0               2d22h   172.16.209.18   k8-node-20   <none>           <none>
ingress-nginx           ingress-nginx-controller-5c78d86944-5qrnv    1/1     Running     5 (4d3h ago)    24d     172.16.74.56    k8-manager   <none>           <none>
itop                    itop-655d9f67f8-8dds7                        1/1     Running     12 (8d ago)     20d     172.16.209.26   k8-node-20   <none>           <none>
itop                    mysql-6d89499c7c-bwdcl                       1/1     Running     12 (8d ago)     20d     172.16.209.59   k8-node-20   <none>           <none>
kube-system             coredns-668d6bf9bc-blvkl                     1/1     Running     4 (4d3h ago)    77d     172.16.74.16    k8-manager   <none>           <none>
kube-system             coredns-668d6bf9bc-l86hn                     1/1     Running     4 (4d3h ago)    77d     172.16.74.59    k8-manager   <none>           <none>
kube-system             etcd-k8-manager                              1/1     Running     37 (4d3h ago)   77d     192.168.1.10    k8-manager   <none>           <none>
kube-system             kube-apiserver-k8-manager                    1/1     Running     55 (4d3h ago)   77d     192.168.1.10    k8-manager   <none>           <none>
kube-system             kube-controller-manager-k8-manager           1/1     Running     96 (4d3h ago)   77d     192.168.1.10    k8-manager   <none>           <none>
kube-system             kube-proxy-kblfg                             1/1     Running     13 (4d ago)     29d     192.168.1.40    k8-node-40   <none>           <none>
kube-system             kube-proxy-p9gdf                             1/1     Running     9 (18d ago)     57d     192.168.1.30    k8-node-30   <none>           <none>
kube-system             kube-proxy-t4sv5                             1/1     Running     23 (8d ago)     77d     192.168.1.20    k8-node-20   <none>           <none>
kube-system             kube-proxy-zwsjt                             1/1     Running     4 (4d3h ago)    77d     192.168.1.10    k8-manager   <none>           <none>
kube-system             kube-scheduler-k8-manager                    1/1     Running     97 (4d3h ago)   77d     192.168.1.10    k8-manager   <none>           <none>
kube-system             metrics-server-8f4f477fc-h86mb               1/1     Running     0               103m    172.16.209.38   k8-node-20   <none>           <none>
kubernetes-dashboard    dashboard-metrics-scraper-5bd45c9dd6-6kp8q   1/1     Running     1 (4d3h ago)    20d     172.16.74.23    k8-manager   <none>           <none>
kubernetes-dashboard    kubernetes-dashboard-84fb97c47f-cvdxr        1/1     Running     4 (4d3h ago)    24d     172.16.74.51    k8-manager   <none>           <none>
local-path-storage      local-path-provisioner-6bc759bc5-5xb67       1/1     Running     1 (4d3h ago)    20d     172.16.74.1     k8-manager   <none>           <none>
metabase                metabase-5cfc5bb76b-9d26w                    1/1     Running     0               3d16h   172.16.74.17    k8-manager   <none>           <none>
metallb-system          controller-5cbffbc46b-qpvsv                  1/1     Running     60 (4d3h ago)   66d     172.16.74.11    k8-manager   <none>           <none>
metallb-system          speaker-fzckw                                1/1     Running     46 (8d ago)     73d     192.168.1.20    k8-node-20   <none>           <none>
metallb-system          speaker-jtkrt                                1/1     Running     38 (4d3h ago)   73d     192.168.1.10    k8-manager   <none>           <none>
metallb-system          speaker-qlr7k                                1/1     Running     26 (4d ago)     29d     192.168.1.40    k8-node-40   <none>           <none>
metallb-system          speaker-xfb9s                                1/1     Running     41 (18d ago)    57d     192.168.1.30    k8-node-30   <none>           <none>
mongo                   mongo-0                                      1/1     Running     0               3d13h   172.16.209.15   k8-node-20   <none>           <none>
n8n                     n8n-6f66788f78-cbgjf                         1/1     Running     12 (8d ago)     20d     172.16.209.45   k8-node-20   <none>           <none>
postgresql              postgresql-0                                 1/1     Running     1 (3d22h ago)   3d22h   172.16.74.3     k8-manager   <none>           <none>
storage-system          nfs-client-provisioner-7bc7b6d5dd-t9ntd      1/1     Running     0               3d23h   172.16.209.1    k8-node-20   <none>           <none>
tigera-operator         tigera-operator-7b9dcd4cd7-k6bx2             1/1     Running     53 (4d3h ago)   77d     192.168.1.10    k8-manager   <none>           <none>
trivy-system            node-collector-9b759b4d8-lh6l4               0/1     Completed   0               30d     <none>          k8-manager   <none>           <none>
trivy-system            trivy-operator-5cbf845bf9-28n7j              1/1     Running     15 (4d3h ago)   20d     172.16.74.5     k8-manager   <none>           <none>
zabbix                  postgresql-7dfd4b4b68-kdbz9                  1/1     Running     7 (4d3h ago)    51d     172.16.74.6     k8-manager   <none>           <none>
zabbix                  zabbix-agent-6fftl                           1/1     Running     4 (4d3h ago)    37d     192.168.1.10    k8-manager   <none>           <none>
zabbix                  zabbix-agent-ksjkb                           1/1     Running     21 (8d ago)     37d     192.168.1.20    k8-node-20   <none>           <none>
zabbix                  zabbix-agent-ksx2w                           1/1     Running     45 (18d ago)    37d     192.168.1.30    k8-node-30   <none>           <none>
zabbix                  zabbix-agent-qz6g2                           1/1     Running     27 (4d ago)     29d     192.168.1.40    k8-node-40   <none>           <none>
zabbix                  zabbix-server-554759d44b-mf4q5               1/1     Running     5 (4d3h ago)    29d     172.16.74.62    k8-manager   <none>           <none>
zabbix                  zabbix-web-77c4b56ff4-87jj5                  1/1     Running     0               18m     172.16.209.10   k8-node-20   <none>           <none>
```

## 🧩 Pods no saludables (no Running/Completed)

```
Command: bash -lc kubectl get pods -A --no-headers | egrep -v 'Running|Completed' || true
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

```

## 🌐 Services

```
Command: kubectl get svc -A
Timestamp (UTC): Fri Mar  6 11:33:57 UTC 2026

NAMESPACE              NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                      AGE
calico-apiserver       calico-api                           ClusterIP      10.98.212.235    <none>          443/TCP                      77d
calico-system          calico-kube-controllers-metrics      ClusterIP      None             <none>          9094/TCP                     77d
calico-system          calico-typha                         ClusterIP      10.111.32.23     <none>          5473/TCP                     77d
cloudbeaver            cloudbeaver                          ClusterIP      10.105.40.153    <none>          80/TCP                       3d15h
default                kubernetes                           ClusterIP      10.96.0.1        <none>          443/TCP                      77d
docs-portal            docs-portal                          ClusterIP      10.104.15.70     <none>          80/TCP                       3d
elk                    elasticsearch                        ClusterIP      10.103.231.161   <none>          9200/TCP,9300/TCP            2d22h
elk                    kibana                               ClusterIP      10.109.148.84    <none>          5601/TCP                     2d22h
ingress-nginx          ingress-nginx-controller             LoadBalancer   10.107.218.204   192.168.1.250   80:31217/TCP,443:30093/TCP   26d
ingress-nginx          ingress-nginx-controller-admission   ClusterIP      10.98.154.157    <none>          443/TCP                      26d
itop                   itop                                 ClusterIP      10.103.185.4     <none>          80/TCP                       28d
itop                   mysql                                ClusterIP      10.110.39.171    <none>          3306/TCP                     28d
kube-system            kube-dns                             ClusterIP      10.96.0.10       <none>          53/UDP,53/TCP,9153/TCP       77d
kube-system            metrics-server                       ClusterIP      10.106.204.195   <none>          443/TCP                      44d
kubernetes-dashboard   dashboard-metrics-scraper            ClusterIP      10.99.221.154    <none>          8000/TCP                     30d
kubernetes-dashboard   kubernetes-dashboard                 ClusterIP      10.98.228.11     <none>          443/TCP                      30d
metabase               metabase                             ClusterIP      10.104.238.93    <none>          80/TCP                       3d21h
metallb-system         webhook-service                      ClusterIP      10.111.134.225   <none>          443/TCP                      73d
mongo                  mongo                                ClusterIP      10.102.57.180    <none>          27017/TCP                    3d13h
n8n                    n8n                                  ClusterIP      10.101.63.45     <none>          5678/TCP                     24d
postgresql             postgresql                           ClusterIP      10.104.163.236   <none>          5432/TCP                     3d22h
trivy-system           trivy-operator                       ClusterIP      None             <none>          80/TCP                       30d
zabbix                 postgresql                           ClusterIP      10.102.133.214   <none>          5432/TCP                     51d
zabbix                 zabbix-agent                         ClusterIP      None             <none>          10050/TCP                    49d
zabbix                 zabbix-server                        ClusterIP      10.96.9.144      <none>          10051/TCP                    51d
zabbix                 zabbix-web                           ClusterIP      10.102.145.85    <none>          80/TCP                       51d
```

## 🌐 Endpoints

```
Command: kubectl get endpoints -A
Timestamp (UTC): Fri Mar  6 11:33:58 UTC 2026

NAMESPACE              NAME                                          ENDPOINTS                                                              AGE
calico-apiserver       calico-api                                    172.16.74.27:5443,172.16.74.32:5443                                    77d
calico-system          calico-kube-controllers-metrics               172.16.74.29:9094                                                      77d
calico-system          calico-typha                                  192.168.1.10:5473                                                      77d
cloudbeaver            cloudbeaver                                   172.16.209.11:8978                                                     3d15h
default                kubernetes                                    192.168.1.10:6443                                                      77d
docs-portal            docs-portal                                   172.16.209.47:8000                                                     3d
elk                    elasticsearch                                 172.16.209.29:9200,172.16.209.29:9300                                  2d22h
elk                    kibana                                        172.16.209.63:5601                                                     2d22h
ingress-nginx          ingress-nginx-controller                      172.16.74.56:443,172.16.74.56:80                                       26d
ingress-nginx          ingress-nginx-controller-admission            172.16.74.56:8443                                                      26d
itop                   itop                                          172.16.209.26:80                                                       28d
itop                   mysql                                         172.16.209.59:3306                                                     28d
kube-system            kube-dns                                      172.16.74.16:53,172.16.74.59:53,172.16.74.16:53 + 3 more...            77d
kube-system            metrics-server                                172.16.209.38:4443                                                     44d
kubernetes-dashboard   dashboard-metrics-scraper                     172.16.74.23:8000                                                      30d
kubernetes-dashboard   kubernetes-dashboard                          172.16.74.51:8443                                                      30d
metabase               metabase                                      172.16.74.17:3000                                                      3d21h
metallb-system         webhook-service                               172.16.74.11:9443                                                      73d
mongo                  mongo                                         172.16.209.15:27017                                                    3d13h
n8n                    n8n                                           172.16.209.45:5678                                                     24d
postgresql             postgresql                                    172.16.74.3:5432                                                       3d22h
storage-system         k8s-sigs.io-nfs-subdir-external-provisioner   <none>                                                                 3d23h
trivy-system           trivy-operator                                172.16.74.5:8080                                                       30d
zabbix                 postgresql                                    172.16.74.6:5432                                                       51d
zabbix                 zabbix-agent                                  192.168.1.10:10050,192.168.1.20:10050,192.168.1.30:10050 + 1 more...   49d
zabbix                 zabbix-server                                 172.16.74.62:10051                                                     51d
zabbix                 zabbix-web                                    172.16.209.10:8080                                                     51d
```

## 🌐 Ingress

```
Command: kubectl get ingress -A
Timestamp (UTC): Fri Mar  6 11:33:58 UTC 2026

NAMESPACE              NAME                           CLASS    HOSTS               ADDRESS         PORTS     AGE
cloudbeaver            cloudbeaver-ingress            nginx    db-admin.ka0s.io    192.168.1.250   80, 443   3d15h
docs-portal            docs-portal-ingress            <none>   docs.ka0s.io        192.168.1.250   80, 443   3d
elk                    kibana-ingress                 nginx    kibana.ka0s.io      192.168.1.250   80, 443   2d22h
itop                   itop-ingress                   nginx    itsm.ka0s.io        192.168.1.250   80, 443   26d
kubernetes-dashboard   kubernetes-dashboard-ingress   nginx    dashboard.ka0s.io   192.168.1.250   80, 443   30d
metabase               metabase-ingress               nginx    metabase.ka0s.io    192.168.1.250   80, 443   3d21h
n8n                    n8n-ingress                    nginx    n8n.ka0s.io         192.168.1.250   80, 443   24d
zabbix                 zabbix-ingress                 nginx    noc.ka0s.io         192.168.1.250   80        26d
```

## 🌐 NetworkPolicies

```
Command: kubectl get netpol -A
Timestamp (UTC): Fri Mar  6 11:33:58 UTC 2026

NAMESPACE          NAME              POD-SELECTOR     AGE
calico-apiserver   allow-apiserver   apiserver=true   77d
```

## 🧩 APIService (agregado)

```
Command: kubectl get apiservices
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

NAME                                SERVICE                       AVAILABLE   AGE
v1.                                 Local                         True        77d
v1.admissionregistration.k8s.io     Local                         True        77d
v1.apiextensions.k8s.io             Local                         True        77d
v1.apps                             Local                         True        77d
v1.authentication.k8s.io            Local                         True        77d
v1.authorization.k8s.io             Local                         True        77d
v1.autoscaling                      Local                         True        77d
v1.batch                            Local                         True        77d
v1.certificates.k8s.io              Local                         True        77d
v1.configuration.konghq.com         Local                         True        62d
v1.coordination.k8s.io              Local                         True        77d
v1.crd.projectcalico.org            Local                         True        77d
v1.discovery.k8s.io                 Local                         True        77d
v1.events.k8s.io                    Local                         True        77d
v1.flowcontrol.apiserver.k8s.io     Local                         True        77d
v1.networking.k8s.io                Local                         True        77d
v1.node.k8s.io                      Local                         True        77d
v1.operator.tigera.io               Local                         True        77d
v1.policy                           Local                         True        77d
v1.rbac.authorization.k8s.io        Local                         True        77d
v1.scheduling.k8s.io                Local                         True        77d
v1.storage.k8s.io                   Local                         True        77d
v1alpha1.actions.github.com         Local                         True        56d
v1alpha1.actions.summerwind.dev     Local                         True        56d
v1alpha1.aquasecurity.github.io     Local                         True        30d
v1alpha1.configuration.konghq.com   Local                         True        62d
v1alpha1.metallb.io                 Local                         True        73d
v1beta1.configuration.konghq.com    Local                         True        62d
v1beta1.metallb.io                  Local                         True        73d
v1beta1.metrics.k8s.io              kube-system/metrics-server    True        44d
v1beta2.metallb.io                  Local                         True        73d
v2.autoscaling                      Local                         True        77d
v3.projectcalico.org                calico-apiserver/calico-api   True        77d
```

## 💾 StorageClasses

```
Command: kubectl get storageclass
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

NAME         PROVISIONER                                   RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
local-path   rancher.io/local-path                         Delete          WaitForFirstConsumer   false                  72d
manual       kubernetes.io/no-provisioner                  Delete          WaitForFirstConsumer   false                  72d
nfs-client   k8s-sigs.io/nfs-subdir-external-provisioner   Delete          Immediate              false                  3d23h
```

## 💾 PersistentVolumes

```
Command: kubectl get pv
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS        CLAIM                                    STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
elasticsearch-pv                           5Gi        RWO            Retain           Bound         elk/elasticsearch-pvc                    manual         <unset>                          2d22h
elasticsearch-pv-0                         10Gi       RWO            Retain           Released      elasticsearch/data-es-cluster-0          manual         <unset>                          45d
elasticsearch-pv-1                         10Gi       RWO            Retain           Released      soc/wazuh-indexer-pvc                    manual         <unset>                          45d
elasticsearch-pv-2                         10Gi       RWO            Retain           Released      elasticsearch/data-es-cluster-1          manual         <unset>                          45d
itop-web-pv                                1Gi        RWO            Retain           Terminating   itop/itop-web-pvc                        manual         <unset>                          28d
mongo-pv                                   10Gi       RWO            Retain           Released      elasticsearch/data-es-cluster-1          manual         <unset>                          56d
mysql-pv                                   1Gi        RWO            Retain           Terminating   itop/mysql-pvc                           manual         <unset>                          28d
n8n-app-pv                                 1Gi        RWO            Retain           Released      n8n/n8n-app-pvc                          manual         <unset>                          38d
n8n-data-pv                                2Gi        RWO            Retain           Terminating   n8n/n8n-data-pvc                         manual         <unset>                          24d
n8n-db-pv                                  1Gi        RWO            Retain           Released      n8n/n8n-db-pvc                           manual         <unset>                          38d
postgres-pv                                1Gi        RWO            Retain           Available                                              manual         <unset>                          37d
pvc-94c06130-afd8-4fcf-9182-9ea5ecc3e2ea   8Gi        RWO            Delete           Bound         mongo/mongo-persistent-storage-mongo-0   nfs-client     <unset>                          3d13h
pvc-aabecb0b-f8b8-423c-9426-7e3233fda9d7   10Gi       RWO            Delete           Bound         postgresql/postgres-data-postgresql-0    nfs-client     <unset>                          3d22h
pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba   10Mi       RWX            Delete           Bound         storage-system/nfs-validation-pvc        nfs-client     <unset>                          3d23h
pvc-f6f98101-0565-4fd5-940f-27509b7df55d   5Gi        RWO            Delete           Bound         cloudbeaver/cloudbeaver-pvc              nfs-client     <unset>                          3d15h
wazuh-manager-pv                           50Gi       RWO            Retain           Released      soc/wazuh-manager-pvc                    manual         <unset>                          23d
zabbix-postgresql-pv                       1Gi        RWO            Retain           Bound         zabbix/postgresql-pvc                    manual         <unset>                          51d
zabbix-server-pv                           5Gi        RWO            Retain           Bound         zabbix/zabbix-server-pvc                 manual         <unset>                          51d
```

## 💾 PersistentVolumeClaims

```
Command: kubectl get pvc -A
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

NAMESPACE        NAME                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
cloudbeaver      cloudbeaver-pvc                    Bound    pvc-f6f98101-0565-4fd5-940f-27509b7df55d   5Gi        RWO            nfs-client     <unset>                 3d15h
elk              elasticsearch-pvc                  Bound    elasticsearch-pv                           5Gi        RWO            manual         <unset>                 2d22h
itop             itop-web-pvc                       Bound    itop-web-pv                                1Gi        RWO            manual         <unset>                 28d
itop             mysql-pvc                          Bound    mysql-pv                                   1Gi        RWO            manual         <unset>                 28d
mongo            mongo-persistent-storage-mongo-0   Bound    pvc-94c06130-afd8-4fcf-9182-9ea5ecc3e2ea   8Gi        RWO            nfs-client     <unset>                 3d13h
n8n              n8n-data-pvc                       Bound    n8n-data-pv                                2Gi        RWO            manual         <unset>                 24d
postgresql       postgres-data-postgresql-0         Bound    pvc-aabecb0b-f8b8-423c-9426-7e3233fda9d7   10Gi       RWO            nfs-client     <unset>                 3d22h
storage-system   nfs-validation-pvc                 Bound    pvc-b5e5ac38-ff1a-47e2-a71a-0abd740547ba   10Mi       RWX            nfs-client     <unset>                 3d23h
zabbix           postgresql-pvc                     Bound    zabbix-postgresql-pv                       1Gi        RWO            manual         <unset>                 51d
zabbix           zabbix-server-pvc                  Bound    zabbix-server-pv                           5Gi        RWO            manual         <unset>                 51d
```

## 🛡️ Trivy Operator (CRDs)

```
Command: bash -lc kubectl get crd | egrep 'aquasecurity|trivy' || true
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

clustercompliancereports.aquasecurity.github.io        2026-02-04T11:29:20Z
clusterconfigauditreports.aquasecurity.github.io       2026-02-04T11:29:20Z
clusterinfraassessmentreports.aquasecurity.github.io   2026-02-04T11:29:20Z
clusterrbacassessmentreports.aquasecurity.github.io    2026-02-04T11:29:20Z
clustersbomreports.aquasecurity.github.io              2026-02-04T11:29:20Z
clustervulnerabilityreports.aquasecurity.github.io     2026-02-04T11:29:20Z
configauditreports.aquasecurity.github.io              2026-02-04T11:29:20Z
exposedsecretreports.aquasecurity.github.io            2026-02-04T11:29:20Z
infraassessmentreports.aquasecurity.github.io          2026-02-04T11:29:20Z
rbacassessmentreports.aquasecurity.github.io           2026-02-04T11:29:20Z
sbomreports.aquasecurity.github.io                     2026-02-04T11:29:20Z
vulnerabilityreports.aquasecurity.github.io            2026-02-04T11:29:21Z
```

## 🛡️ Trivy Reports (conteo)

```
Command: bash -lc kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers 2>/dev/null | wc -l || true
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

       0
```

## 🛡️ Trivy Reports (muestra)

```
Command: bash -lc kubectl get vulnerabilityreports.aquasecurity.github.io -A --no-headers 2>/dev/null | head -n 20 || true
Timestamp (UTC): Fri Mar  6 11:33:59 UTC 2026

```

## 📢 Eventos Warning (últimos 50)

```
Command: bash -lc kubectl get events -A --field-selector type=Warning --sort-by='.lastTimestamp' | tail -n 50
Timestamp (UTC): Fri Mar  6 11:34:00 UTC 2026

NAMESPACE     LAST SEEN   TYPE      REASON                            OBJECT                            MESSAGE
zabbix        22m         Warning   FailedMount                       pod/zabbix-web-77c4b56ff4-zsm5q   MountVolume.SetUp failed for volume "zabbix-web-branding" : configmap "zabbix-web-branding" not found
zabbix        19m         Warning   FailedMount                       pod/zabbix-web-77c4b56ff4-q6rrf   MountVolume.SetUp failed for volume "zabbix-web-branding" : configmap "zabbix-web-branding" not found
docs-portal   2m22s       Warning   FailedToRetrieveImagePullSecret   pod/docs-portal-8d4686745-fftrc   Unable to retrieve some image pull secrets (ghcr-secret); attempting to pull the image may not succeed.
```

## 🧭 Servicios críticos (estado rápido)

- metrics-server: 1 available replicas
- ingress-nginx-controller: 1 available replicas
- trivy-operator: 1 available replicas
- zabbix-server: 1 available replicas
- zabbix-web: 1 available replicas

## 🗃️ MongoDB (estado y ubicación)

```
NAME      READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES
mongo-0   1/1     Running   0          3d13h   172.16.209.15   k8-node-20   <none>           <none>

NAME                     READY   AGE
statefulset.apps/mongo   1/1     3d13h

NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
service/mongo   ClusterIP   10.102.57.180   <none>        27017/TCP   3d13h

NAME                                                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
persistentvolumeclaim/mongo-persistent-storage-mongo-0   Bound    pvc-94c06130-afd8-4fcf-9182-9ea5ecc3e2ea   8Gi        RWO            nfs-client     <unset>                 3d13h
```

---
✅ Reporte generado en: audit/kube/20260306_113355_manual_cluster-audit.md
