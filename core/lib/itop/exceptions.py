"""
Excepciones personalizadas para el SDK de iTop.
"""

class ItopError(Exception):
    """Clase base para todas las excepciones de iTop."""
    pass

class ItopConnectionError(ItopError):
    """Error al conectar con la API de iTop (Network, Timeout)."""
    pass

class ItopAuthError(ItopError):
    """Error de autenticación (Credenciales inválidas, 401/403)."""
    pass

class ItopApiError(ItopError):
    """Error devuelto por la API de iTop (code != 0)."""
    def __init__(self, message: str, code: int = None, output: str = None):
        super().__init__(message)
        self.code = code
        self.output = output
