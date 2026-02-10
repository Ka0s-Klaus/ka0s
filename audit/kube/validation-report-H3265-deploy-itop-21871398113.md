# Kubernetes Manifest Validation Report
- **Generated at**: Tue Feb 10 15:38:34 UTC 2026
- **Commit**: c78bf949a0af37c24836d4608b92ffe405e53a55
- **Date**: Tue Feb 10 15:38:34 UTC 2026

## Trivy Configuration Check (Best Practices & Security)
### Scanning: core/b2b/core-services/soc
```
2026-02-10T15:38:35Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-02-10T15:38:35Z	INFO	[checks-client] Need to update the checks bundle
2026-02-10T15:38:35Z	INFO	[checks-client] Downloading the checks bundle...
235.65 KiB / 235.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?235.65 KiB / 235.65 KiB [-----------------------------------------------] 100.00% 1.71 MiB p/s 300ms2026-02-10T15:38:44Z	INFO	Detected config files	num=11

Report Summary

┌─────────────────────────┬────────────┬───────────────────┐
│         Target          │    Type    │ Misconfigurations │
├─────────────────────────┼────────────┼───────────────────┤
│ 01-security-job.yaml    │ kubernetes │         8         │
├─────────────────────────┼────────────┼───────────────────┤
│ 03-indexer.yaml         │ kubernetes │         6         │
├─────────────────────────┼────────────┼───────────────────┤
│ 04-manager.yaml         │ kubernetes │         5         │
├─────────────────────────┼────────────┼───────────────────┤
│ 05-dashboard.yaml       │ kubernetes │         3         │
├─────────────────────────┼────────────┼───────────────────┤
│ 06-agent-config.yaml    │ kubernetes │         0         │
├─────────────────────────┼────────────┼───────────────────┤
│ 06-agent-daemonset.yaml │ kubernetes │         8         │
├─────────────────────────┼────────────┼───────────────────┤
│ namespace.yaml          │ kubernetes │         0         │
├─────────────────────────┼────────────┼───────────────────┤
│ wazuh-indexer-pv.yaml   │ kubernetes │         0         │
├─────────────────────────┼────────────┼───────────────────┤
│ wazuh-indexer-pvc.yaml  │ kubernetes │         0         │
├─────────────────────────┼────────────┼───────────────────┤
│ wazuh-manager-pv.yaml   │ kubernetes │         0         │
├─────────────────────────┼────────────┼───────────────────┤
│ wazuh-manager-pvc.yaml  │ kubernetes │         0         │
└─────────────────────────┴────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


01-security-job.yaml (kubernetes)
=================================
Tests: 41 (SUCCESSES: 33, FAILURES: 8)
Failures: 8 (HIGH: 8, CRITICAL: 0)

KSV-0014 (HIGH): Container 'config-writer' of Job 'wazuh-cert-generator-v7' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 01-security-job.yaml:43-62
────────────────────────────────────────
  43 ┌       serviceAccountName: wazuh-cert-generator
  44 │       restartPolicy: OnFailure
  45 │       initContainers:
  46 │         - name: config-writer
  47 │           image: busybox
  48 │           command: ["sh", "-c"]
  49 │           args:
  50 │             - |
  51 └               cat > /config/config.yml <<EOF
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'generator' of Job 'wazuh-cert-generator-v7' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 01-security-job.yaml:64-79
────────────────────────────────────────
  64 ┌             - name: config-vol
  65 │               mountPath: /config
  66 │ 
  67 │         - name: generator
  68 │           image: debian:bookworm-slim
  69 │           command: ["/bin/bash", "-c"]
  70 │           args:
  71 │             - |
  72 └               apt-get update && apt-get install -y curl openssl tar
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'uploader' of Job 'wazuh-cert-generator-v7' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 01-security-job.yaml:82-155
────────────────────────────────────────
  82 ┌               mountPath: /certificates
  83 │ 
  84 │       containers:
  85 │         - name: uploader
  86 │           image: bitnami/kubectl:latest
  87 │           command: ["/bin/bash", "-c"]
  88 │           args:
  89 │             - |
  90 └               echo "DEBUG: Current Pods and Events:"
  ..   
────────────────────────────────────────


KSV-0056 (HIGH): Role 'wazuh-cert-generator-role' should not have access to resources ["services", "endpoints", "endpointslices", "networkpolicies", "ingresses"] for verbs ["create", "update", "patch", "delete", "deletecollection", "impersonate", "*"]
════════════════════════════════════════
The ability to control which pods get service traffic directed to them allows for interception attacks. Controlling network policy allows for bypassing lateral movement restrictions.

See https://avd.aquasec.com/misconfig/ksv-0056
────────────────────────────────────────
 01-security-job.yaml:12-14
────────────────────────────────────────
  12 ┌ rules:
  13 │   - apiGroups: [""]
  14 └     resources: ["secrets", "pods", "events", "services"]
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-cert-generator-v7 in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 01-security-job.yaml:43-62
────────────────────────────────────────
  43 ┌       serviceAccountName: wazuh-cert-generator
  44 │       restartPolicy: OnFailure
  45 │       initContainers:
  46 │         - name: config-writer
  47 │           image: busybox
  48 │           command: ["sh", "-c"]
  49 │           args:
  50 │             - |
  51 └               cat > /config/config.yml <<EOF
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-cert-generator-v7 in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 01-security-job.yaml:64-79
────────────────────────────────────────
  64 ┌             - name: config-vol
  65 │               mountPath: /config
  66 │ 
  67 │         - name: generator
  68 │           image: debian:bookworm-slim
  69 │           command: ["/bin/bash", "-c"]
  70 │           args:
  71 │             - |
  72 └               apt-get update && apt-get install -y curl openssl tar
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-cert-generator-v7 in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 01-security-job.yaml:82-155
────────────────────────────────────────
  82 ┌               mountPath: /certificates
  83 │ 
  84 │       containers:
  85 │         - name: uploader
  86 │           image: bitnami/kubectl:latest
  87 │           command: ["/bin/bash", "-c"]
  88 │           args:
  89 │             - |
  90 └               echo "DEBUG: Current Pods and Events:"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): job wazuh-cert-generator-v7 in soc namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 01-security-job.yaml:39-160
────────────────────────────────────────
  39 ┌ spec:
  40 │   ttlSecondsAfterFinished: 600
  41 │   template:
  42 │     spec:
  43 │       serviceAccountName: wazuh-cert-generator
  44 │       restartPolicy: OnFailure
  45 │       initContainers:
  46 │         - name: config-writer
  47 └           image: busybox
  ..   
────────────────────────────────────────



03-indexer.yaml (kubernetes)
============================
Tests: 39 (SUCCESSES: 33, FAILURES: 6)
Failures: 6 (HIGH: 6, CRITICAL: 0)

KSV-0014 (HIGH): Container 'fix-permissions' of StatefulSet 'wazuh-indexer' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 03-indexer.yaml:24-29
────────────────────────────────────────
  24 ┌         - name: fix-permissions
  25 │           image: busybox
  26 │           command: ["sh", "-c", "chown -R 1000:1000 /usr/share/wazuh-indexer/data"]
  27 │           volumeMounts:
  28 │             - name: wazuh-indexer-data
  29 └               mountPath: /usr/share/wazuh-indexer/data
────────────────────────────────────────


KSV-0014 (HIGH): Container 'increase-vm-max-map' of StatefulSet 'wazuh-indexer' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 03-indexer.yaml:30-34
────────────────────────────────────────
  30 ┌         - name: increase-vm-max-map
  31 │           image: busybox
  32 │           command: ["sysctl", "-w", "vm.max_map_count=262144"]
  33 │           securityContext:
  34 └             privileged: true
────────────────────────────────────────


KSV-0014 (HIGH): Container 'wazuh-indexer' of StatefulSet 'wazuh-indexer' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 03-indexer.yaml:36-99
────────────────────────────────────────
  36 ┌         - name: wazuh-indexer
  37 │           image: wazuh/wazuh-indexer:4.14.2
  38 │           resources:
  39 │             requests:
  40 │               memory: "2Gi"
  41 │               cpu: "500m"
  42 │             limits:
  43 │               memory: "4Gi"
  44 └               cpu: "2000m"
  ..   
────────────────────────────────────────


KSV-0017 (HIGH): Container 'increase-vm-max-map' of StatefulSet 'wazuh-indexer' should set 'securityContext.privileged' to false
════════════════════════════════════════
Privileged containers share namespaces with the host system and do not offer any security. They should be used exclusively for system containers that require high privileges.

See https://avd.aquasec.com/misconfig/ksv-0017
────────────────────────────────────────
 03-indexer.yaml:30-34
────────────────────────────────────────
  30 ┌         - name: increase-vm-max-map
  31 │           image: busybox
  32 │           command: ["sysctl", "-w", "vm.max_map_count=262144"]
  33 │           securityContext:
  34 └             privileged: true
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-indexer in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 03-indexer.yaml:24-29
────────────────────────────────────────
  24 ┌         - name: fix-permissions
  25 │           image: busybox
  26 │           command: ["sh", "-c", "chown -R 1000:1000 /usr/share/wazuh-indexer/data"]
  27 │           volumeMounts:
  28 │             - name: wazuh-indexer-data
  29 └               mountPath: /usr/share/wazuh-indexer/data
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-indexer in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 03-indexer.yaml:36-99
────────────────────────────────────────
  36 ┌         - name: wazuh-indexer
  37 │           image: wazuh/wazuh-indexer:4.14.2
  38 │           resources:
  39 │             requests:
  40 │               memory: "2Gi"
  41 │               cpu: "500m"
  42 │             limits:
  43 │               memory: "4Gi"
  44 └               cpu: "2000m"
  ..   
────────────────────────────────────────



04-manager.yaml (kubernetes)
============================
Tests: 38 (SUCCESSES: 33, FAILURES: 5)
Failures: 5 (HIGH: 5, CRITICAL: 0)

KSV-0014 (HIGH): Container 'wait-for-indexer' of Deployment 'wazuh-manager' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 04-manager.yaml:23-25
────────────────────────────────────────
  23 ┌         - name: wait-for-indexer
  24 │           image: busybox
  25 └           command: ['sh', '-c', 'until nc -z wazuh-indexer 9200; do echo waiting for wazuh-indexer; sleep 2; done;']
────────────────────────────────────────


KSV-0014 (HIGH): Container 'wazuh-manager' of Deployment 'wazuh-manager' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 04-manager.yaml:27-64
────────────────────────────────────────
  27 ┌         - name: wazuh-manager
  28 │           image: wazuh/wazuh-manager:4.14.2
  29 │           resources:
  30 │             requests:
  31 │               memory: "1Gi"
  32 │               cpu: "500m"
  33 │             limits:
  34 │               memory: "2Gi"
  35 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-manager in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 04-manager.yaml:23-25
────────────────────────────────────────
  23 ┌         - name: wait-for-indexer
  24 │           image: busybox
  25 └           command: ['sh', '-c', 'until nc -z wazuh-indexer 9200; do echo waiting for wazuh-indexer; sleep 2; done;']
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-manager in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 04-manager.yaml:27-64
────────────────────────────────────────
  27 ┌         - name: wazuh-manager
  28 │           image: wazuh/wazuh-manager:4.14.2
  29 │           resources:
  30 │             requests:
  31 │               memory: "1Gi"
  32 │               cpu: "500m"
  33 │             limits:
  34 │               memory: "2Gi"
  35 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment wazuh-manager in soc namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 04-manager.yaml:19-74
────────────────────────────────────────
  19 ┌     spec:
  20 │       nodeSelector:
  21 │         kubernetes.io/hostname: k8-node-20
  22 │       initContainers:
  23 │         - name: wait-for-indexer
  24 │           image: busybox
  25 │           command: ['sh', '-c', 'until nc -z wazuh-indexer 9200; do echo waiting for wazuh-indexer; sleep 2; done;']
  26 │       containers:
  27 └         - name: wazuh-manager
  ..   
────────────────────────────────────────



05-dashboard.yaml (kubernetes)
==============================
Tests: 36 (SUCCESSES: 33, FAILURES: 3)
Failures: 3 (HIGH: 3, CRITICAL: 0)

KSV-0014 (HIGH): Container 'wazuh-dashboard' of Deployment 'wazuh-dashboard' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 05-dashboard.yaml:21-60
────────────────────────────────────────
  21 ┌         - name: wazuh-dashboard
  22 │           image: wazuh/wazuh-dashboard:4.14.2
  23 │           resources:
  24 │             requests:
  25 │               memory: "512Mi"
  26 │               cpu: "250m"
  27 │             limits:
  28 │               memory: "1Gi"
  29 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-dashboard in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 05-dashboard.yaml:21-60
────────────────────────────────────────
  21 ┌         - name: wazuh-dashboard
  22 │           image: wazuh/wazuh-dashboard:4.14.2
  23 │           resources:
  24 │             requests:
  25 │               memory: "512Mi"
  26 │               cpu: "250m"
  27 │             limits:
  28 │               memory: "1Gi"
  29 └               cpu: "1000m"
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): deployment wazuh-dashboard in soc namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 05-dashboard.yaml:17-64
────────────────────────────────────────
  17 ┌     spec:
  18 │       nodeSelector:
  19 │         kubernetes.io/hostname: k8-node-20
  20 │       containers:
  21 │         - name: wazuh-dashboard
  22 │           image: wazuh/wazuh-dashboard:4.14.2
  23 │           resources:
  24 │             requests:
  25 └               memory: "512Mi"
  ..   
────────────────────────────────────────



06-agent-daemonset.yaml (kubernetes)
====================================
Tests: 37 (SUCCESSES: 29, FAILURES: 8)
Failures: 8 (HIGH: 8, CRITICAL: 0)

KSV-0009 (HIGH): DaemonSet 'wazuh-agent' should not set 'spec.template.spec.hostNetwork' to true
════════════════════════════════════════
Sharing the host’s network namespace permits processes in the pod to communicate with processes bound to the host’s loopback adapter.

See https://avd.aquasec.com/misconfig/ksv-0009
────────────────────────────────────────
 06-agent-daemonset.yaml:8-136
────────────────────────────────────────
   8 ┌ spec:
   9 │   selector:
  10 │     matchLabels:
  11 │       app: wazuh-agent
  12 │   template:
  13 │     metadata:
  14 │       labels:
  15 │         app: wazuh-agent
  16 └     spec:
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'config-init' of DaemonSet 'wazuh-agent' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 06-agent-daemonset.yaml:20-55
────────────────────────────────────────
  20 ┌         - name: config-init
  21 │           image: busybox
  22 │           command: ["sh", "-c"]
  23 │           args:
  24 │             - |
  25 │               echo "Detecting interface..."
  26 │               # Try detecting interface via default route
  27 │               IFACE=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5;exit}')
  28 └               if [ -z "$IFACE" ]; then
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'suricata' of DaemonSet 'wazuh-agent' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 06-agent-daemonset.yaml:86-122
────────────────────────────────────────
  86 ┌         - name: suricata
  87 │           image: jasonish/suricata:latest
  88 │           command: ["sh", "-c"]
  89 │           args:
  90 │             - |
  91 │               echo "Starting Suricata..."
  92 │               if [ ! -f /etc/suricata/suricata.yaml ]; then
  93 │                 echo "Error: Configuration file not found!"
  94 └                 ls -l /etc/suricata/
  ..   
────────────────────────────────────────


KSV-0014 (HIGH): Container 'wazuh-agent' of DaemonSet 'wazuh-agent' should set 'securityContext.readOnlyRootFilesystem' to true
════════════════════════════════════════
An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk.

See https://avd.aquasec.com/misconfig/ksv-0014
────────────────────────────────────────
 06-agent-daemonset.yaml:58-83
────────────────────────────────────────
  58 ┌         - name: wazuh-agent
  59 │           image: wazuh/wazuh-agent:4.14.2
  60 │           imagePullPolicy: Always
  61 │           env:
  62 │             - name: WAZUH_MANAGER
  63 │               value: "wazuh-manager.soc.svc"
  64 │             - name: WAZUH_AGENT_GROUP
  65 │               value: "default"
  66 └           volumeMounts:
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-agent in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 06-agent-daemonset.yaml:58-83
────────────────────────────────────────
  58 ┌         - name: wazuh-agent
  59 │           image: wazuh/wazuh-agent:4.14.2
  60 │           imagePullPolicy: Always
  61 │           env:
  62 │             - name: WAZUH_MANAGER
  63 │               value: "wazuh-manager.soc.svc"
  64 │             - name: WAZUH_AGENT_GROUP
  65 │               value: "default"
  66 └           volumeMounts:
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): container wazuh-agent in soc namespace is using the default security context
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 06-agent-daemonset.yaml:20-55
────────────────────────────────────────
  20 ┌         - name: config-init
  21 │           image: busybox
  22 │           command: ["sh", "-c"]
  23 │           args:
  24 │             - |
  25 │               echo "Detecting interface..."
  26 │               # Try detecting interface via default route
  27 │               IFACE=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5;exit}')
  28 └               if [ -z "$IFACE" ]; then
  ..   
────────────────────────────────────────


KSV-0118 (HIGH): daemonset wazuh-agent in soc namespace is using the default security context, which allows root privileges
════════════════════════════════════════
Security context controls the allocation of security parameters for the pod/container/volume, ensuring the appropriate level of protection. Relying on default security context may expose vulnerabilities to potential attacks that rely on privileged access.

See https://avd.aquasec.com/misconfig/ksv-0118
────────────────────────────────────────
 06-agent-daemonset.yaml:16-136
────────────────────────────────────────
  16 ┌     spec:
  17 │       hostNetwork: true
  18 │       dnsPolicy: ClusterFirstWithHostNet
  19 │       initContainers:
  20 │         - name: config-init
  21 │           image: busybox
  22 │           command: ["sh", "-c"]
  23 │           args:
  24 └             - |
  ..   
────────────────────────────────────────


KSV-0119 (HIGH): container suricata of daemonset wazuh-agent in soc namespace should not include 'NET_RAW' in securityContext.capabilities.add
════════════════════════════════════════
The NET_RAW capability grants attackers the ability to eavesdrop on network traffic or generate IP traffic with falsified source addresses, posing serious security risks.

See https://avd.aquasec.com/misconfig/ksv-0119
────────────────────────────────────────


```
