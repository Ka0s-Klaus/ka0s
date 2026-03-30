from .devops import DevOpsRole
from .secops import SecOpsRole
from .finops import FinOpsRole

# Registro centralizado de roles para el router
AVAILABLE_ROLES = {
    "devops": DevOpsRole,
    "secops": SecOpsRole,
    "finops": FinOpsRole
}

def get_role_prompt(role_name: str) -> str:
    """Devuelve el system prompt para el rol especificado, o el base si no existe."""
    role_class = AVAILABLE_ROLES.get(role_name.lower())
    if role_class:
        return role_class.get_system_prompt()
    
    from .base import BaseRole
    return BaseRole.get_system_prompt()
