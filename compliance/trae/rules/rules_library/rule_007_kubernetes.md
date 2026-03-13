# Regla 007: Kubernetes Manifests (Kustomize)

Estandarización para la definición de infraestructura en `core/b2b/`.

## 1. Estructura Obligatoria
Todo servicio debe seguir el patrón Kustomize Base/Overlay o ser autocontenido con `kustomization.yaml`.
- Prohibido: Archivos YAML sueltos sin contexto.
- Obligatorio: `resources`, `livenessProbe`, `readinessProbe` definidos en Deployments.

## 2. Naming Convention
- Archivos: `deployment.yaml`, `service.yaml`, `ingress.yaml`.
- Recursos: `kebab-case`. Usar prefijos consistentes con el nombre del servicio.

## 3. Seguridad
- No usar `latest` en imágenes de contenedor. Usar SHA o Tags de versión específicos.
- No ejecutar contenedores como `root` (securityContext).
