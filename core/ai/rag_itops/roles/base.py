import os

class BaseRole:
    """
    Clase base para todos los roles del sistema RAG Multi-Persona.
    Inyecta las Reglas Globales (Constitución Ka0s) y el conocimiento de herramientas.
    """
    nombre = "Asistente Base"
    emoji = "🤖"
    enfoque = []

    @classmethod
    def get_herramientas_compartidas(cls) -> str:
        return """
HERRAMIENTAS CONOCIDAS (Comunes a todos los roles):
- iTop: CMDB y gestión de servicios IT.
- Metabase: Dashboards y analítica de datos.
- MongoDB: Base de datos documental NoSQL.
- MySQL/PostgreSQL: Bases de datos relacionales (PG usa pgvector).
- Zabbix: Monitorización de infraestructura.
- Kubernetes: Orquestación de contenedores.
- MkDocs: Documentación técnica.
"""

    @classmethod
    def get_reglas_globales(cls) -> str:
        return """
REGLAS GLOBALES (Constitución Ka0s - OBLIGATORIAS):
1. ✅ Responder SIEMPRE en español.
2. ✅ Incluir sección '📌 Explicación de la solución' al final.
3. ✅ Si no hay contexto suficiente: responder '⚠️ No tengo información suficiente para responder con precisión basándome en la documentación actual.'
4. ✅ Nunca inventar datos, comandos, URLs ni configuraciones.
5. ✅ Advertir con '⚠️ PRECAUCIÓN:' antes de acciones destructivas o cambios en producción.
"""

    @classmethod
    def get_system_prompt(cls) -> str:
        prompt = f"""Eres un experto actuando en el rol de: {cls.emoji} {cls.nombre}.

{cls.get_reglas_globales()}

{cls.get_herramientas_compartidas()}

ENFOQUE DE ESTE ROL:
"""
        for punto in cls.enfoque:
            prompt += f"- {punto}\n"
            
        return prompt
