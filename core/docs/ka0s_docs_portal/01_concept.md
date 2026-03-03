# Concepto: Ka0s Docs Portal

El **Ka0s Docs Portal** es el punto central de conocimiento para todo el ecosistema Ka0s. Su objetivo es proporcionar una interfaz web navegable, moderna y con capacidad de búsqueda para toda la documentación técnica, operativa y de negocio almacenada en el repositorio.

## Filosofía "Docs as Code"

El portal sigue estrictamente la filosofía **Docs as Code**:
1.  **Fuente de Verdad**: La documentación vive junto al código en el repositorio (`core/docs`).
2.  **Formato**: Markdown estándar.
3.  **Versionado**: Git es el sistema de control de versiones.
4.  **Automatización**: El despliegue y actualización son automáticos.

## Stack Tecnológico

- **Motor**: [MkDocs](https://www.mkdocs.org/)
- **Tema**: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- **Infraestructura**: Kubernetes (Namespace `docs-portal`)
- **Despliegue**: GitOps (Pull & Serve)

## Componentes Clave

1.  **Repositorio Git**: Contiene los archivos `.md` y la configuración `mkdocs.yml`.
2.  **Pod de Kubernetes**:
    - **Init Container**: Clona el repositorio actualizado al iniciar el pod.
    - **Main Container**: Ejecuta `mkdocs serve` para servir el contenido dinámicamente.
3.  **Ingress**: Expone el servicio a internet bajo `docs.ka0s.io` con terminación TLS.
