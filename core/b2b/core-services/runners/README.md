# GitHub Actions Runners (ARC) Deployment

Este directorio contiene la configuración declarativa (GitOps/Kustomize) para desplegar el **Actions Runner Controller (ARC)** y el **Runner Scale Set** en el clúster Kubernetes.

## Estructura

- `kustomization.yaml`: Orquestador principal de Kustomize. Define los recursos y los Helm Charts a instalar.
- `namespace.yaml`: Definición del namespace `actions-runner-system`.
- `values-controller.yaml`: Configuración específica para el chart del controlador (ARC).
- `values-runner-set.yaml`: Configuración específica para el chart del runner set (incluyendo límites de escalado).

## Gestión de Secretos

El secreto `controller-manager` (necesario para la autenticación con GitHub App) se inyecta automáticamente durante el pipeline de CD.
Utiliza el secreto de repositorio `PRIVATE_KEY_PEM` configurado en GitHub.

**NO** es necesario realizar acciones manuales de bootstrap de secretos.

## Despliegue (CD)

El despliegue está automatizado a través del workflow `.github/workflows/cd-core-services.yml`.
Cualquier cambio en los archivos YAML de este directorio (`core/b2b/core-services/runners/`) disparará un despliegue automático al hacer push a `main`.

El pipeline detectará el servicio `runners` e inyectará las credenciales necesarias antes de aplicar los manifiestos.

## Configuración de Escalado

Para modificar el número de runners, edita `values-runner-set.yaml`:

```yaml
runnerScaleSet:
  minRunners: 1
  maxRunners: 15  # Ajustar según necesidad
```
