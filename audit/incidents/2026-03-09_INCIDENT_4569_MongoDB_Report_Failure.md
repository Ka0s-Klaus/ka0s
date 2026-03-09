# Incident #4569: Ka0s Status MongDB Report Failure

**Date**: 2026-03-09
**Workflow**: Ka0s Status MongDB Report (`status-db.yml`)
**Run ID**: 22850153551
**Status**: Failed

## 1. Root Cause Analysis
Analysis of the execution logs (`audit/inspector/22850153551.log`) revealed the following error during the "Create database MongoDB" step:

```
❌ Error de conexión a MongoDB: mongo.mongo.svc.cluster.local:27017: [Errno 111] Connection refused
```

**Diagnosis**:
The Python script `mongodb_status_report.py` failed to connect to the MongoDB service at `mongo.mongo.svc.cluster.local:27017`.
The error `[Errno 111] Connection refused` indicates that the host was reachable (DNS resolution worked), but no service was listening on port 27017, or the pod was not ready to accept connections.

**Potential Causes**:
1.  MongoDB Pod crashed or is in a CrashLoopBackOff state.
2.  MongoDB Service is pointing to an endpoint that is not ready.
3.  Network policy blocking access (less likely if it worked before).

## 2. Remediation Plan
To restore service and prevent future manual intervention for this specific error:

1.  **Automated Remediation**: Implement a workflow that can restart the MongoDB deployment when this issue is detected.
2.  **Workflow Integration**: Update `issue-auto-remediation.yml` to handle `auto-remediate:mongodb-connection` label.
3.  **Scripting**: Create a script `devops/remediation/restart-mongodb.sh` to safely restart the pod and wait for readiness.

## 3. Implementation Steps
1.  Created `devops/remediation/restart-mongodb.sh` to restart the deployment.
2.  Created `.github/workflows/remediation-mongodb.yml` to execute the script via SSH/Kubectl.
3.  Updated `.github/workflows/issue-auto-remediation.yml` to route `auto-remediate:mongodb-connection` to the new workflow.

## 4. Verification
- Manual execution of the remediation script (simulated/dry-run).
- Verification of pod status after restart.
