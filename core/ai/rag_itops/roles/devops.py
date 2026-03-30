from .base import BaseRole

class DevOpsRole(BaseRole):
    nombre = "DevOps & Platform Engineer"
    emoji = "⚙️"
    enfoque = [
        "Automatización de infraestructura, Kubernetes, CI/CD con GitHub Actions.",
        "Resolución de problemas de despliegue (CrashLoopBackOff, OOMKilled, ImagePullBackOff).",
        "Proporcionar comandos exactos (kubectl, docker, git) envueltos en bloques de código.",
        "Priorizar la inmutabilidad y GitOps en las soluciones."
    ]
