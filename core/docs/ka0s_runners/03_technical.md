# Detalles Técnicos

## Estructura de Archivos (`core/b2b/core-services/runners/`)

| Archivo | Propósito |
| :--- | :--- |
| `kustomization.yaml` | Orquestador Kustomize. Ensambla YAML estático (sin Helm en CD). |
| `namespace.yaml` | Definición del namespace `actions-runner-system`. |
| `values-controller.yaml` | `values.yaml` para el chart `gha-runner-scale-set-controller`. |
| `values-runner-set.yaml` | `values.yaml` para el chart `gha-runner-scale-set`. Aquí se define `maxRunners`. |
| `rendered/00-crds.yaml` | CRDs de ARC (versionadas como YAML). |
| `rendered/10-controller.yaml` | ARC Controller (renderizado desde Helm y versionado como YAML). |
| `rendered/20-runnerset.yaml` | Runner Scale Set (renderizado desde Helm y versionado como YAML). |

### Política de despliegue (YAML)

El despliegue de runners sigue la misma política que el resto de `core-services`: **`kubectl apply -k`**.
Por ello, los charts se **renderizan a YAML** y se versionan en `rendered/`.

### Regeneración de YAML renderizado

Se regenera cuando cambian `values-*.yaml` o se actualiza la versión del chart.

Ejemplo (desde repo):

```bash
./.tools/helm/helm.exe pull oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller --version 0.10.1 --untar --untardir .tmp/arc
cat .tmp/arc/gha-runner-scale-set-controller/crds/*.yaml > core/b2b/core-services/runners/rendered/00-crds.yaml
./.tools/helm/helm.exe template actions-runner-controller .tmp/arc/gha-runner-scale-set-controller -n actions-runner-system -f core/b2b/core-services/runners/values-controller.yaml > core/b2b/core-services/runners/rendered/10-controller.yaml

./.tools/helm/helm.exe pull oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set --version 0.10.1 --untar --untardir .tmp/arc
./.tools/helm/helm.exe template swarm-runners-scaleset .tmp/arc/gha-runner-scale-set -n actions-runner-system -f core/b2b/core-services/runners/values-runner-set.yaml > core/b2b/core-services/runners/rendered/20-runnerset.yaml
```

### Configuración de Values

`values-runner-set.yaml`:
```yaml
runnerScaleSet:
  # runnerGroup: swarm-runners-scaleset (Comentado para usar Default)
  minRunners: 1
  maxRunners: 50

template:
  spec:
    containers:
      - name: runner
        image: ghcr.io/actions/actions-runner:latest
        command: ["/home/runner/run.sh"]
```

## Inyección de Secretos en CD

El workflow `.github/workflows/cd-core-services.yml` contiene lógica específica para este servicio:

1.  Detecta cambios en la carpeta `runners`.
2.  Antes de aplicar Kustomize, genera un manifiesto `Secret` en vivo usando `kubectl create secret generic ... --dry-run=client`.
3.  Rellena el campo `github_app_private_key` con el valor del secreto de repositorio `${{ secrets.PRIVATE_KEY_PEM }}`.
4.  Aplica este secreto al clúster, permitiendo que el controlador se autentique con GitHub.

Esto garantiza que **nunca** se commiteen claves privadas en el repositorio.
