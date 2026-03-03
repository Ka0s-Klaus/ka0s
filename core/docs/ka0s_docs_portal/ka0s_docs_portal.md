# Módulo: Ka0s Docs Portal

Este módulo contiene la definición de infraestructura necesaria para desplegar el portal de documentación de Ka0s.

## Descripción General

El **Docs Portal** es un servicio web contenerizado que renderiza la documentación del proyecto (ubicada en `core/docs`) utilizando **MkDocs** y el tema **Material**. Proporciona una experiencia de usuario superior a la navegación de archivos Markdown en GitHub, con características como búsqueda instantánea, navegación estructurada, modo oscuro y diseño responsivo.

## Estructura del Módulo

El módulo se encuentra en `core/b2b/core-services/docs-portal/` y consta de los siguientes recursos de Kubernetes:

- **Deployment**: Orquesta el ciclo de vida de la aplicación. Utiliza un patrón de **Init Container** para clonar el repositorio más reciente antes de iniciar el servicio de documentación.
- **Service**: Expone la aplicación dentro del clúster.
- **Ingress**: Gestiona el acceso externo y la terminación SSL.

## Documentación Detallada

Para más detalles sobre la implementación y operación, consulta las siguientes secciones:

- [Concepto y Filosofía](./01_concept.md)
- [Uso y Validación Operativa](./02_usage_validation.md)
- [Integración e Infraestructura](./03_integration.md)

## Ubicación del Código Fuente

- **Manifiestos K8s**: [`core/b2b/core-services/docs-portal/`](../../b2b/core-services/docs-portal/)
- **Contenido de Documentación**: [`core/docs/`](../)
