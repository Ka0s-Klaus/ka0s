# Ka0s AnythingLLM (Frontend de IA)

Este módulo documenta el despliegue de **AnythingLLM** como frontend colaborativo para consumir el **Ollama** ya desplegado en el clúster.

El objetivo es que el equipo pueda compartir un único backend de modelos (Ollama) manteniendo persistencia de datos (workspaces, embeddings, documentos y configuración) en almacenamiento NFS.

## Alcance

- Frontend: AnythingLLM accesible por Ingress en `https://anythingllm.ka0s.io`.
- Backend de inferencia/embeddings: Ollama (servicio existente).
- Persistencia: PVC `ReadWriteMany` sobre `StorageClass` `nfs-client` (storage-system).
- Restricción de nodo: AnythingLLM fijado a `k8-node-20`.
- Control de consumo: runners ARC limitados a `maxRunners=10`.

## Enlaces rápidos

- [Concepto y arquitectura](01_concept.md)
- [Uso y validación](02_usage_validation.md)
- [Detalles técnicos](03_technical.md)
