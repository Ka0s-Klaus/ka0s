# Uso y validación (AnythingLLM)

## Acceso

- URL: `https://anythingllm.ka0s.io`

## Primera configuración (usuario/contraseña)

El despliegue no “inyecta” credenciales por manifiesto. En **el primer acceso**, AnythingLLM guía el alta inicial (modo de acceso y creación del primer usuario administrador) desde la propia interfaz web.

Recomendación operativa:

- Activar multi-user mode desde la UI.
- Crear un admin inicial.
- Crear usuarios para el equipo (hasta 10) y asignar workspaces/roles.

## Validación de despliegue (GitOps/CD)

El despliegue entra en el flujo CD del repo al vivir en `core/b2b/core-services/anythingllm/`.

Comprobaciones esperadas tras el CD:

- `Namespace` `anythingllm` existe.
- `Deployment/Pod` `anythingllm` en `Running`.
- `PVC` `anythingllm-pvc` en `Bound`.
- `Ingress` resuelve host `anythingllm.ka0s.io` hacia el Service.

## Validación de integración con Ollama

Desde la UI de AnythingLLM:

- Seleccionar proveedor LLM: `Ollama`.
- Confirmar que el backend responde (el pod usa `OLLAMA_BASE_PATH` apuntando a `ollama.ollama.svc.cluster.local:11434`).

## Nota sobre certificados

El Ingress se publica por host. La terminación TLS se añadirá posteriormente cuando se instalen certificados.
