from typing import Dict, Any, List, Optional
from .session import ItopSession
from .exceptions import ItopApiError
from .logger import setup_logger

class ItopClient:
    """
    Cliente de alto nivel para interactuar con iTop.
    Provee métodos CRUD y lógica de sincronización (Upsert).
    """

    def __init__(self, session: Optional[ItopSession] = None):
        """
        Inicializa el cliente.
        :param session: Instancia de ItopSession. Si es None, crea una nueva por defecto.
        """
        self.session = session or ItopSession()
        self.logger = setup_logger("kaos_itop_client")

    def create(self, class_name: str, fields: Dict[str, Any], comment: str = None) -> Dict[str, Any]:
        """Crea un nuevo objeto en iTop."""
        data = {
            "class": class_name,
            "fields": fields,
            "comment": comment or "Created by Ka0s SDK"
        }
        return self.session.request("core/create", data)

    def update(self, class_name: str, key: Any, fields: Dict[str, Any], comment: str = None) -> Dict[str, Any]:
        """Actualiza un objeto existente."""
        data = {
            "class": class_name,
            "key": key,
            "fields": fields,
            "comment": comment or "Updated by Ka0s SDK"
        }
        return self.session.request("core/update", data)

    def get(self, class_name: str, key: Any) -> Dict[str, Any]:
        """Obtiene un objeto por su clave primaria (ID)."""
        data = {
            "class": class_name,
            "key": key,
            "output_fields": "*" 
        }
        return self.session.request("core/get", data)

    def delete(self, class_name: str, key: Any, comment: str = None) -> Dict[str, Any]:
        """Elimina un objeto."""
        data = {
            "class": class_name,
            "key": key,
            "comment": comment or "Deleted by Ka0s SDK"
        }
        return self.session.request("core/delete", data)

    def find(self, class_name: str, criteria: Dict[str, Any] = None, oql: str = None, output_fields: str = "id,friendlyname") -> List[Dict[str, Any]]:
        """
        Busca objetos usando criterios clave-valor o una OQL explícita.
        """
        final_oql = oql
        
        if not final_oql and criteria:
            conditions = []
            for field, value in criteria.items():
                if isinstance(value, str):
                    safe_val = value.replace("'", "\\'")
                    conditions.append(f"{field} = '{safe_val}'")
                elif isinstance(value, dict) and "name" in value:
                    # Soporte para foreign keys por nombre: org_id->name = 'Foo'
                    safe_val = value["name"].replace("'", "\\'")
                    conditions.append(f"{field}->name = '{safe_val}'")
                else:
                    conditions.append(f"{field} = {value}")
            
            if conditions:
                final_oql = f"SELECT {class_name} WHERE {' AND '.join(conditions)}"
        
        if not final_oql:
            # Evitar búsqueda masiva accidental
            return []

        data = {
            "class": class_name,
            "key": final_oql,
            "output_fields": output_fields
        }
        
        result = self.session.request("core/get", data)
        objects = result.get("objects")
        
        if not objects:
            return []
            
        # iTop devuelve un dict donde las keys son los IDs/Clases. Convertimos a lista.
        return list(objects.values())

    def sync(self, obj_def: Dict[str, Any]) -> Dict[str, Any]:
        """
        Sincroniza un objeto (Idempotente: Create si no existe, Update si existe).
        Usa 'key_fields' o 'key' (OQL) para buscar duplicados.
        """
        class_name = obj_def.get("class")
        fields = obj_def.get("fields", {})
        key_fields = obj_def.get("key_fields", {})
        oql_key = obj_def.get("key") # Explicit OQL

        if not class_name or not fields:
            raise ValueError(f"Definición inválida: falta 'class' o 'fields'. Data: {obj_def}")

        # Inferir key_fields si es posible
        if not key_fields and not oql_key and "name" in fields:
            key_fields = {"name": fields["name"]}
        
        existing_id = None
        
        # 1. Buscar existencia
        if oql_key:
            # Búsqueda por OQL explícito
            found = self.find(class_name, oql=oql_key, output_fields="id")
            if found:
                existing_id = found[0].get("key") 
        elif key_fields:
            # Búsqueda por campos clave
            found = self.find(class_name, criteria=key_fields, output_fields="id")
            if found:
                existing_id = found[0].get("key")
        
        # 2. Actuar
        if existing_id:
            self.logger.info(f"Sync: Updating {class_name} ({existing_id})")
            self.update(class_name, existing_id, fields)
            return {"status": "updated", "id": existing_id, "class": class_name}
        else:
            self.logger.info(f"Sync: Creating {class_name}")
            res = self.create(class_name, fields)
            
            new_id = None
            if res.get("objects"):
                first_k = next(iter(res["objects"]))
                new_id = res["objects"][first_k].get("key")
            
            return {"status": "created", "id": new_id, "class": class_name}
