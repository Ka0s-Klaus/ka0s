# Detalles Técnicos

## Estructura de Archivos (`core/b2b/core-services/runners/`)

| Archivo | Propósito |
| :--- | :--- |
| `kustomization.yaml` | Orquestador Kustomize. Define `helmCharts` y recursos estáticos. |
| `namespace.yaml` | Definición del namespace `actions-runner-system`. |
| `values-controller.yaml` | `values.yaml` para el chart `gha-runner-scale-set-controller`. |
| `values-runner-set.yaml` | `values.yaml` para el chart `gha-runner-scale-set`. Aquí se define `maxRunners`. |

### Instalación (Manual / Script)

Se ha recuperado el script `deploy.sh` que utiliza los charts OCI oficiales.

```bash
# Versión del Chart: 0.13.1 (Latest)
# Imagen del Runner: ka0score/actions-runner:1.0.3
# Grupo de Runners: Default (sin especificar runnerGroup)

helm upgrade --install actions-runner-controller \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller \
  --namespace actions-runner-system \
  --skip-crds

helm upgrade --install swarm-runners-scaleset \
  oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set \
  --namespace actions-runner-system \
  -f values-runner-set.yaml
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
        image: ka0score/actions-runner:1.0.3
        command: ["/home/runner/run.sh"]
```

## Inyección de Secretos en CD

El workflow `.github/workflows/cd-core-services.yml` contiene lógica específica para este servicio:

1.  Detecta cambios en la carpeta `runners`.
2.  Antes de aplicar Kustomize, genera un manifiesto `Secret` en vivo usando `kubectl create secret generic ... --dry-run=client`.
3.  Rellena el campo `github_app_private_key` con el valor del secreto de repositorio `${{ secrets.PRIVATE_KEY_PEM }}`.
4.  Aplica este secreto al clúster, permitiendo que el controlador se autentique con GitHub.

Esto garantiza que **nunca** se commiteen claves privadas en el repositorio.
