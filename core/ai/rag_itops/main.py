import argparse
import sys
import os
import logging

# Configurar sys.path para importaciones
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from core.llm import detectar_rol, embed_query, generate_answer
from core.search import search_context
from roles import AVAILABLE_ROLES

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("rag_itops.main")

def main():
    parser = argparse.ArgumentParser(description="Ka0s RAG Agent - Multi-Persona")
    parser.add_argument("query", type=str, help="La pregunta del usuario")
    parser.add_argument("--rol", type=str, help=f"Forzar un rol específico: {', '.join(AVAILABLE_ROLES.keys())}")

    args = parser.parse_args()

    logger.info(f"❓ Nueva pregunta: '{args.query}'")

    if args.rol:
        rol = args.rol.lower()
        if rol not in AVAILABLE_ROLES:
            logger.warning(f"Rol desconocido: '{rol}', usando 'devops' por defecto.")
            rol = "devops"
        else:
            logger.info(f"❗️ Rol forzado: '{rol}'")
    else:
        rol = detectar_rol(args.query)

    embedding = embed_query(args.query)
    if not embedding:
        logger.error("No se pudo generar el embedding. Saliendo.")
        sys.exit(1)

    context = search_context(embedding, limit=5)

    response = generate_answer(args.query, context, rol)

    print("\n================================================================================\n")
    print(response)
    print(f"\n--- (Rol usado: {rol}) ---")

if __name__ == "__main__":
    main()
