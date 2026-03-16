import os
import requests
import urllib3
import json
from typing import Dict, Any, Optional

from .exceptions import ItopConnectionError, ItopAuthError, ItopApiError
from .logger import setup_logger

# Suppress InsecureRequestWarning for self-signed certs (common in dev/internal)
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class ItopSession:
    """
    Maneja la conexión y autenticación con la API REST de iTop.
    Soporta autenticación básica (user/password en payload) para API 1.3.
    """

    def __init__(
        self, 
        url: Optional[str] = None, 
        user: Optional[str] = None, 
        password: Optional[str] = None, 
        version: str = "1.3",
        verify_ssl: bool = False
    ):
        """
        Inicializa la sesión de iTop.
        Si no se proporcionan credenciales, se leen de variables de entorno:
        ITOP_URL, ITOP_USER, ITOP_PASSWORD.
        """
        self.base_url = (url or os.getenv("ITOP_URL", "http://localhost/webservices/rest.php")).rstrip('/')
        # Ensure URL points to rest.php
        if not self.base_url.endswith(".php"):
             self.endpoint = f"{self.base_url}/webservices/rest.php"
        else:
             self.endpoint = self.base_url
        
        self.user = user or os.getenv("ITOP_USER", "admin")
        self.password = password or os.getenv("ITOP_PASSWORD", "admin")
        self.version = version
        self.verify_ssl = verify_ssl
        
        self.logger = setup_logger("kaos_itop_session")
        self._session = requests.Session()

    def request(self, operation: str, data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Envía una petición a la API de iTop.
        
        Args:
            operation: La operación a realizar (e.g., 'core/get', 'core/create').
            data: Diccionario con los datos específicos de la operación.
            
        Returns:
            El resultado decodificado del JSON devuelto por iTop.
            
        Raises:
            ItopConnectionError: Si falla la conexión HTTP.
            ItopApiError: Si iTop devuelve un código de error != 0.
        """
        # Estructura del payload para iTop REST API (Legacy style auth in payload)
        payload = {
            "version": self.version,
            "auth_user": self.user,
            "auth_pwd": self.password,
            "json_data": json.dumps({"operation": operation, **data})
        }
        
        self.logger.debug(f"Sending request: op={operation} endpoint={self.endpoint}")

        try:
            response = self._session.post(
                self.endpoint, 
                data=payload, 
                verify=self.verify_ssl,
                timeout=30 # Timeout razonable
            )
            response.raise_for_status()
            
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.logger.error(f"Invalid JSON response. Status: {response.status_code}")
                self.logger.debug(f"Raw response: {response.text[:500]}")
                raise ItopApiError("La respuesta de iTop no es un JSON válido.")

            # Verificar código de retorno de iTop
            code = result.get("code")
            if code != 0:
                message = result.get("message", "Error desconocido")
                output = result.get("output", "")
                self.logger.error(f"iTop API Error (code {code}): {message}")
                if output:
                    self.logger.error(f"Output: {output}")
                raise ItopApiError(message, code=code, output=output)

            return result

        except requests.exceptions.RequestException as e:
            self.logger.error(f"HTTP Request failed: {e}")
            raise ItopConnectionError(f"Error de conexión con iTop: {e}")
