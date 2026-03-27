import os
import sys
import logging
import requests
import subprocess
from typing import Dict, Any

# Configuración del Logger
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("incident-solver")

OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
MODEL = "llama3.2:7b"

# 1. Definición de Herramientas
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_kubernetes_pods",
            "description": "Ejecuta 'kubectl get pods' en un namespace específico para ver el estado de los servicios. Usar para investigar incidentes.",
            "parameters": {
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "El namespace de Kubernetes (ej. 'default', 'kube-system')."
                    }
                },
                "required": ["namespace"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_pod_logs",
            "description": "Obtiene los logs de un pod específico en un namespace para diagnosticar por qué está fallando.",
            "parameters": {
                "type": "object",
                "properties": {
                    "pod_name": {
                        "type": "string",
                        "description": "El nombre exacto del pod."
                    },
                    "namespace": {
                        "type": "string",
                        "description": "El namespace donde reside el pod."
                    },
                    "tail": {
                        "type": "integer",
                        "description": "Número de líneas a recuperar (por defecto 50)."
                    }
                },
                "required": ["pod_name", "namespace"]
            }
        }
    }
]

# 2. Ejecutor Seguro
def execute_tool(name: str, args: Dict[str, Any]) -> str:
    logger.info(f"🛠️ Ejecutando: {name} con argumentos: {args}")
    try:
        if name == "get_kubernetes_pods":
            ns = args.get("namespace", "default")
            cmd = ["kubectl", "get", "pods", "-n", ns]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            if result.returncode != 0:
                return f"Error de kubectl: {result.stderr}"
            return result.stdout or "No se encontraron pods."
            
        elif name == "get_pod_logs":
            pod = args.get("pod_name")
            ns = args.get("namespace")
            tail = str(args.get("tail", 50))
            cmd = ["kubectl", "logs", pod, "-n", ns, "--tail", tail]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
            if result.returncode != 0:
                return f"Error obteniendo logs: {result.stderr}"
            return result.stdout or "El pod no tiene logs recientes."
            
        else:
            return f"Herramienta desconocida: {name}"
            
    except Exception as e:
        return f"Excepción ejecutando herramienta: {str(e)}"

# 3. Bucle ReAct del Agente
def solve_incident(incident_description: str):
    print(f"\n🚨 INCIDENTE RECIBIDO: {incident_description}")
    print("-" * 50)
    
    messages = [
        {
            "role": "system",
            "content": "Eres un ingeniero DevSecOps experto en Ka0s. Tu objetivo es diagnosticar incidentes de Kubernetes. "
                       "REGLA DE ORO: NO adivines comandos. DEBES usar las herramientas (tools) proporcionadas para inspeccionar el clúster. "
                       "1. Primero usa get_kubernetes_pods para ver el estado.\n"
                       "2. Si un pod está fallando, usa get_pod_logs con su nombre exacto.\n"
                       "IMPORTANTE: SIEMPRE responde en Español. Solo responde con texto cuando tengas el diagnóstico final basado en la salida de las herramientas."
        },
        {"role": "user", "content": incident_description}
    ]
    
    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS,
        "stream": False
    }

    try:
        # Bucle de hasta 5 iteraciones (razonamiento profundo)
        for iteration in range(5):
            logger.info(f"🧠 Pensando (Iteración {iteration + 1})...")
            response = requests.post(f"{OLLAMA_HOST}/api/chat", json=payload, timeout=60)
            response.raise_for_status()
            
            response_msg = response.json().get("message", {})
            
            # Si el modelo no pidió usar herramientas, asumimos que tiene la respuesta final
            if "tool_calls" not in response_msg or not response_msg["tool_calls"]:
                print("\n✅ DIAGNÓSTICO FINAL:")
                print(response_msg.get("content", ""))
                break
                
            # Si pidió usar herramientas, las ejecutamos
            tool_calls = response_msg["tool_calls"]
            messages.append(response_msg) # Guardar la intención
            
            for tool_call in tool_calls:
                func_name = tool_call["function"]["name"]
                func_args = tool_call["function"]["arguments"]
                
                result = execute_tool(func_name, func_args)
                
                messages.append({
                    "role": "tool",
                    "content": result,
                    "name": func_name
                })
                
            # Actualizamos el payload para la siguiente iteración (que vea los resultados)
            payload["messages"] = messages
        else:
            print("\n⚠️ Se alcanzó el límite de iteraciones (5) sin llegar a una conclusión final.")
            
            # Pedir un resumen final forzado
            payload["messages"].append({"role": "user", "content": "Por favor, basándote en la información recopilada hasta ahora, genera un diagnóstico final resumido."})
            payload.pop("tools", None) # Quitamos las herramientas para forzar texto
            final_response = requests.post(f"{OLLAMA_HOST}/api/chat", json=payload, timeout=60)
            print("\n✅ DIAGNÓSTICO FORZADO:")
            print(final_response.json().get("message", {}).get("content", ""))

    except Exception as e:
        logger.error(f"Error crítico en el bucle: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query = " ".join(sys.argv[1:])
    else:
        query = "Hay una alerta crítica indicando que el servicio 'ollama' en el namespace 'core-services' está fallando o no responde. Por favor, investiga la causa."
        
    solve_incident(query)
