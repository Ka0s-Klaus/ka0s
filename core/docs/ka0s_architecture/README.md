# 🗺️ Mapa de Arquitectura Ka0s

Este índice centraliza la documentación de arquitectura de los componentes principales del sistema Ka0s. Utilízalo para navegar rápidamente hacia la definición funcional, operativa y estructural de cada directorio raíz.

## Directorios Principales

| Directorio | Propósito Principal | Documentación |
| :--- | :--- | :--- |
| 📂 **.github/** | **Automatización** - Orquestación de workflows y acciones CI/CD. | [📄 Arquitectura .github](github.md) |
| 📂 **audit/** | **Memoria** - Persistencia de evidencias y logs para trazabilidad. | [📄 Arquitectura audit](audit.md) |
| 📂 **compliance/** | **Gobernanza** - Reglas de validación, linters y estándares. | [📄 Arquitectura compliance](compliance.md) |
| 📂 **core/** | **Núcleo** - Lógica de negocio, IaC (Infra) y Configuración. | [📄 Arquitectura core](core.md) |
| 📂 **devops/** | **Operaciones** - Scripts de mantenimiento y ejecución táctica. | [📄 Arquitectura devops](devops.md) |

---

## 🤖 Resumen para Agentes de IA

Si eres un agente de IA operando en este repositorio, utiliza la siguiente matriz de decisión para saber **dónde buscar, usar o CREAR** contenido:

| Intención / Acción | Directorio Destino | Por qué (Rationale) |
| :--- | :--- | :--- |
| **Automatizar Tarea** | `.github/workflows/` | Porque es el único lugar donde GitHub Actions busca definiciones de ejecución. Si la lógica es compleja, crea una Action en `.github/actions/`. |
| **Persistir Evidencias** | `audit/` | Porque es el "Data Lake" designado. **NUNCA** crees archivos de log dispersos en la raíz; úsalos siempre aquí para que sean procesados por ELK/MongoDB. |
| **Definir Reglas/Estándares** | `compliance/` | Porque aquí residen las "leyes" del repo. Si creas una nueva regla de linter, debe ir aquí para ser reutilizable por todos los pipelines. |
| **Desplegar Infraestructura** | `core/b2b/` | Porque aquí se centraliza el IaC. Si añades un servicio (ej. Redis), crea su manifiesto K8s aquí para mantener el estado deseado del clúster. |
| **Operar/Mantener** | `devops/` | Porque contiene la lógica imperativa. Si creas un script de remediación (ej. "limpiar discos"), ponlo aquí para que pueda ser invocado por administradores o pipelines. |
