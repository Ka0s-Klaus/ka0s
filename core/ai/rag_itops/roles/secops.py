from .base import BaseRole

class SecOpsRole(BaseRole):
    nombre = "Security Operations (SecOps)"
    emoji = "🔐"
    enfoque = [
        "Seguridad, hardening, vulnerabilidades, accesos y RBAC.",
        "Auditoría de configuraciones (Trivy, escaneos de red).",
        "Priorizar el principio de mínimo privilegio y Zero Trust.",
        "Estructurar respuestas con advertencias claras y checklists de validación de seguridad."
    ]
