# Kubernetes Manifest Validation Report
- **Generated at**: Fri Mar 13 08:18:56 UTC 2026
- **Commit**: d9d21f1bdcc221472166d84cbd2bfa3a768fdf52
- **Date**: Fri Mar 13 08:18:56 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/zabbix
```
2026-03-13T08:18:56Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-03-13T08:18:56Z	INFO	[checks-client] Need to update the checks bundle
2026-03-13T08:18:56Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [------------------------------------------------------] 100.00% ? p/s 100ms2026-03-13T08:18:59Z	INFO	Detected config files	num=11

Report Summary

┌───────────────────────────────┬────────────┬───────────────────┐
│            Target             │    Type    │ Misconfigurations │
├───────────────────────────────┼────────────┼───────────────────┤
│ ingress.yaml                  │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml                │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-agent-daemonset.yaml   │ kubernetes │         6         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-agent-service.yaml     │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-k8s-rbac.yaml          │ kubernetes │         1         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-scripts.yaml           │ kubernetes │         1         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-server-deployment.yaml │ kubernetes │         3         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-server-nfs-pvc.yaml    │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-server-service.yaml    │ kubernetes │         0         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-web-deployment.yaml    │ kubernetes │         5         │
├───────────────────────────────┼────────────┼───────────────────┤
│ zabbix-web-service.yaml       │ kubernetes │         0         │
└───────────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


zabbix-agent-daemonset.yaml (kubernetes)
========================================
Tests: 35 (SUCCESSES: 29, FAILURES: 6)
Failures: 6 (HIGH: 6, CRITICAL: 0)

KSV-0009 (HIGH): DaemonSet 'zabbix-agent' should not set 'spec.template.spec.hostNetwork' to true
════════════════════════════════════════
Sharing the host’s network namespace permits processes in the pod to communicate with processes bound to the host’s loopback adapter.

See https://avd.aquasec.com/misconfig/ksv-0009
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:8-54
────────────────────────────────────────
   8 ┌ spec:
   9 │   selector:
  10 │     matchLabels:
  11 │       app: zabbix-agent
  12 │   template:
  13 │     metadata:
  14 │       labels:
  15 │         app: zabbix-agent
  16 └     spec:
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'zabbix-agent' of DaemonSet 'zabbix-agent' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:21-47
────────────────────────────────────────
  21 ┌         - name: zabbix-agent
  22 │           image: zabbix/zabbix-agent2:latest
  23 │           ports:
  24 │             - containerPort: 10050
  25 │               hostPort: 10050
  26 │               name: zabbix-agent
  27 │           env:
  28 │             - name: ZBX_HOSTNAME
  29 └               valueFrom:
  ..   
────────────────────────────────────────


KSV-0024 (HIGH): Container 'zabbix-agent' of DaemonSet 'zabbix-agent' should not set host ports, 'ports[*].hostPort'
════════════════════════════════════════
According to pod security standard 'Host Ports', hostPorts should be disallowed, or at minimum restricted to a known list.

See https://avd.aquasec.com/misconfig/ksv-0024
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:21-47
────────────────────────────────────────
  21 ┌         - name: zabbix-agent
  22 │           image: zabbix/zabbix-agent2:latest
  23 │           ports:
  24 │             - containerPort: 10050
  25 │               hostPort: 10050
  26 │               name: zabbix-agent
  27 │           env:
  28 │             - name: ZBX_HOSTNAME
  29 └               valueFrom:
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container zabbix-agent in zabbix namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:21-47
────────────────────────────────────────
  21 ┌         - name: zabbix-agent
  22 │           image: zabbix/zabbix-agent2:latest
  23 │           ports:
  24 │             - containerPort: 10050
  25 │               hostPort: 10050
  26 │               name: zabbix-agent
  27 │           env:
  28 │             - name: ZBX_HOSTNAME
  29 └               valueFrom:
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): daemonset zabbix-agent in zabbix namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:16-54
────────────────────────────────────────
  16 ┌     spec:
  17 │       serviceAccountName: zabbix-service-account
  18 │       hostNetwork: true
  19 │       dnsPolicy: ClusterFirstWithHostNet
  20 │       containers:
  21 │         - name: zabbix-agent
  22 │           image: zabbix/zabbix-agent2:latest
  23 │           ports:
  24 └             - containerPort: 10050
  ..   
────────────────────────────────────────


KSV-0121 (HIGH): daemonset zabbix-agent in zabbix namespace shouldn't have volumes set to {"/"}
════════════════════════════════════════
HostPath present many security risks and as a security practice it is better to avoid critical host paths mounts.

See https://avd.aquasec.com/misconfig/ksv-0121
────────────────────────────────────────
 zabbix-agent-daemonset.yaml:8-54
────────────────────────────────────────
   8 ┌ spec:
   9 │   selector:
  10 │     matchLabels:
  11 │       app: zabbix-agent
  12 │   template:
  13 │     metadata:
  14 │       labels:
  15 │         app: zabbix-agent
  16 └     spec:
  ..   
────────────────────────────────────────



zabbix-k8s-rbac.yaml (kubernetes)
=================================
Tests: 35 (SUCCESSES: 34, FAILURES: 1)
Failures: 1 (HIGH: 1, CRITICAL: 0)

KSV-0047 (HIGH): Role permits privilege escalation from node proxy
════════════════════════════════════════
Check whether role permits privilege escalation from node proxy

See https://avd.aquasec.com/misconfig/ksv-0047
────────────────────────────────────────
 zabbix-k8s-rbac.yaml:7-21
────────────────────────────────────────
   7 ┌   - apiGroups: [""]
   8 │     resources:
   9 │       - nodes
  10 │       - nodes/proxy
  11 │       - nodes/stats
  12 │       - nodes/metrics
  13 │       - nodes/log
  14 │       - pods
  15 └       - pods/log
  ..   
────────────────────────────────────────



zabbix-scripts.yaml (kubernetes)
================================
Tests: 34 (SUCCESSES: 33, FAILURES: 1)
Failures: 1 (HIGH: 1, CRITICAL: 0)

KSV-0109 (HIGH): ConfigMap 'zabbix-external-scripts' in 'zabbix' namespace stores secrets in key(s) or value(s) '{"TOKEN"}'
════════════════════════════════════════
Storing secrets in configMaps is unsafe

See https://avd.aquasec.com/misconfig/ksv-0109
────────────────────────────────────────



zabbix-server-deployment.yaml (kubernetes)
==========================================
Tests: 35 (SUCCESSES: 32, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'zabbix-server' of Deployment 'zabbix-server' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 zabbix-server-deployment.yaml:26-53
────────────────────────────────────────
  26 ┌         - name: zabbix-server
  27 │           image: zabbix/zabbix-server-pgsql:latest
  28 │           ports:
  29 │             - containerPort: 10051
  30 │           env:
  31 │             - name: DB_SERVER_HOST
  32 │               value: postgresql.postgresql.svc.cluster.local
  33 │             - name: POSTGRES_USER
  34 └               value: "zabbix"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container zabbix-server in zabbix namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-server-deployment.yaml:26-53
────────────────────────────────────────
  26 ┌         - name: zabbix-server
  27 │           image: zabbix/zabbix-server-pgsql:latest
  28 │           ports:
  29 │             - containerPort: 10051
  30 │           env:
  31 │             - name: DB_SERVER_HOST
  32 │               value: postgresql.postgresql.svc.cluster.local
  33 │             - name: POSTGRES_USER
  34 └               value: "zabbix"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment zabbix-server in zabbix namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-server-deployment.yaml:15-61
────────────────────────────────────────
  15 ┌     spec:
  16 │       serviceAccountName: zabbix-service-account
  17 │       # Modificado: Apunta explícitamente a k8-node-40
  18 │       nodeSelector:
  19 │         kubernetes.io/hostname: k8-node-40
  20 │       # Añadido: Tolerancia para permitir que se ejecute en un nodo "cordoned" (SchedulingDisabled)
  21 │       tolerations:
  22 │       - key: "node.kubernetes.io/unschedulable"
  23 └         operator: "Exists"
  ..   
────────────────────────────────────────



zabbix-web-deployment.yaml (kubernetes)
=======================================
Tests: 37 (SUCCESSES: 32, FAILURES: 5)
Failures: 5 (HIGH: 5, CRITICAL: 0)

KSV-0014 (HIGH): Container 'init-zabbix-web-branding' of Deployment 'zabbix-web' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 zabbix-web-deployment.yaml:25-75
────────────────────────────────────────
  25 ┌         - name: init-zabbix-web-branding
  26 │           image: zabbix/zabbix-web-nginx-pgsql:latest
  27 │           command:
  28 │             - sh
  29 │             - -c
  30 │             - |
  31 │               set -e
  32 │               mkdir -p /work
  33 └               # Copy original files to work directory, ignoring errors for special files/permissions
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'zabbix-web' of Deployment 'zabbix-web' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 zabbix-web-deployment.yaml:77-105
────────────────────────────────────────
  77 ┌         - name: zabbix-web
  78 │           image: zabbix/zabbix-web-nginx-pgsql:latest
  79 │           ports:
  80 │             - containerPort: 8080
  81 │           env:
  82 │             - name: DB_SERVER_HOST
  83 │               value: postgresql.postgresql.svc.cluster.local
  84 │             - name: POSTGRES_USER
  85 └               value: "zabbix"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container zabbix-web in zabbix namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-web-deployment.yaml:77-105
────────────────────────────────────────
  77 ┌         - name: zabbix-web
  78 │           image: zabbix/zabbix-web-nginx-pgsql:latest
  79 │           ports:
  80 │             - containerPort: 8080
  81 │           env:
  82 │             - name: DB_SERVER_HOST
  83 │               value: postgresql.postgresql.svc.cluster.local
  84 │             - name: POSTGRES_USER
  85 └               value: "zabbix"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container zabbix-web in zabbix namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-web-deployment.yaml:25-75
────────────────────────────────────────
  25 ┌         - name: init-zabbix-web-branding
  26 │           image: zabbix/zabbix-web-nginx-pgsql:latest
  27 │           command:
  28 │             - sh
  29 │             - -c
  30 │             - |
  31 │               set -e
  32 │               mkdir -p /work
  33 └               # Copy original files to work directory, ignoring errors for special files/permissions
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment zabbix-web in zabbix namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 zabbix-web-deployment.yaml:15-111
────────────────────────────────────────
  15 ┌     spec:
  16 │       # Modificado: Apunta explícitamente a k8-node-40
  17 │       nodeSelector:
  18 │         kubernetes.io/hostname: k8-node-40
  19 │       # Añadido: Tolerancia para permitir que se ejecute en un nodo "cordoned" (SchedulingDisabled)
  20 │       tolerations:
  21 │       - key: "node.kubernetes.io/unschedulable"
  22 │         operator: "Exists"
  23 └         effect: "NoSchedule"
  ..   
────────────────────────────────────────


```
