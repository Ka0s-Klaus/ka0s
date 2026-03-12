# Integración: Ka0s Docs Portal

Este módulo se integra con varios componentes del ecosistema Ka0s para asegurar su funcionamiento y accesibilidad.

## Dependencias de Infraestructura

### 1. Secretos de Kubernetes
El portal requiere acceso al repositorio privado (si aplica) o público de GitHub.

- **Secret Name**: `git-credentials`
- **Namespace**: `docs-portal`
- **Key**: `password` (Token de acceso personal o GIT_TOKEN)

### 2. Ingress Controller & Cert-Manager
El portal depende de NGINX Ingress Controller y Cert-Manager para la gestión de certificados SSL.

- **Issuer**: `letsencrypt-prod`
- **Host**: `docs.ka0s.io`

## Manifiestos de Kubernetes

Los archivos de definición se encuentran en `core/b2b/core-services/docs-portal/`:

| Archivo | Descripción |
|---------|-------------|
| `deployment.yaml` | Define el Pod con InitContainer (git-clone) y contenedor MkDocs. |
| `service.yaml` | Servicio ClusterIP que expone el puerto 8000. |
| `ingress.yaml` | Reglas de enrutamiento y configuración TLS. |
| `namespace.yaml` | Definición del namespace `docs-portal`. |

## Flujo de Integración Continua

Aunque el pod actual realiza un "git clone" al inicio, la arquitectura soporta (y recomienda migrar hacia) un modelo de imagen inmutable donde el CI construye una imagen Docker con el contenido estático pre-generado.

**Modelo Híbrido Actual:**
1.  **Código**: GitHub (`core/docs`)
2.  **Infra**: Kubernetes (`core/b2b/core-services/docs-portal`)
3.  **Runtime**: `squidfunk/mkdocs-material` + `alpine/git`
