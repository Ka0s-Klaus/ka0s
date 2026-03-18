# Detalles Técnicos

## Estructura de Archivos (`core/b2b/core-services/runners/`)

| Archivo | Propósito |
| :--- | :--- |
| `kustomization.yaml` | Orquestador Kustomize. Define `helmCharts` y recursos estáticos. |
| `namespace.yaml` | Definición del namespace `actions-runner-system`. |
| `values-controller.yaml` | `values.yaml` para el chart `gha-runner-scale-set-controller`. |
| `values-runner-set.yaml` | `values.yaml` para el chart `gha-runner-scale-set`. Aquí se define `maxRunners`. |

## Configuración de Helm en Kustomize

Utilizamos la característica `helmCharts` de Kustomize para renderizar los templates de Helm en tiempo de despliegue sin necesidad de tener los charts descargados en el repo.

```yaml
helmCharts:
  - name: gha-runner-scale-set
    repo: https://actions-runner-controller.github.io/actions-runner-controller-charts
    releaseName: swarm-runners-scaleset
    version: 0.8.0
    namespace: actions-runner-system
    valuesFile: values-runner-set.yaml
```

> **Nota**: Se utiliza la URL HTTPS del repositorio de charts para evitar dependencias de autenticación OCI (Docker/GHCR) en entornos locales.

## Inyección de Secretos en CD

El workflow `.github/workflows/cd-core-services.yml` contiene lógica específica para este servicio:

1.  Detecta cambios en la carpeta `runners`.
2.  Antes de aplicar Kustomize, genera un manifiesto `Secret` en vivo usando `kubectl create secret generic ... --dry-run=client`.
3.  Rellena el campo `github_app_private_key` con el valor del secreto de repositorio `${{ secrets.PRIVATE_KEY_PEM }}`.
4.  Aplica este secreto al clúster, permitiendo que el controlador se autentique con GitHub.

Esto garantiza que **nunca** se commiteen claves privadas en el repositorio.
