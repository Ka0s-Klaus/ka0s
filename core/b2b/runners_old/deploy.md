# Despliegue de Runners Auto-escalables de GitHub Actions con Kustomize

Esta guía describe cómo desplegar el sistema de runners usando Kustomize.

## Prerrequisitos

1.  **Tener `kubectl` y `kustomize` instalados.**
2.  **Tener un fichero `private-key.pem`** en el mismo directorio con la clave privada de tu GitHub App.
3.  **Crear el Namespace**: `kubectl create namespace runners`

## Despliegue

Simplemente ejecuta el siguiente comando desde el directorio `core/b2b/core-services/runners`:

```bash
kubectl apply -k .
```
