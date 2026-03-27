import os
import json
from typing import TypedDict, Annotated, List, Dict, Any
from langgraph.graph import StateGraph, END
from langchain_core.messages import AnyMessage, SystemMessage, HumanMessage, AIMessage
from langchain_postgres.vectorstores import PGVector
from langchain_ollama import OllamaEmbeddings, ChatOllama
import psycopg2
from typing import Annotated, Sequence

# Define the state for our agent
class AgentState(TypedDict):
    messages: Annotated[Sequence[AnyMessage], "The conversation history"]
    question: str
    context: List[str] # Retrieved RAG documents
    tool_calls: List[Dict[str, Any]] # MCP tool calls
    final_answer: str

# Config DB and Models
DB_CONNECTION = "postgresql://ka0s_ai:change_me_in_production_vector_db_123!@localhost:5433/ka0s_memory"
EMBEDDING_MODEL = "nomic-embed-text"
LLM_MODEL = "llama3.2:latest"

# Initialize components
embeddings = OllamaEmbeddings(
    model=EMBEDDING_MODEL,
    base_url="http://localhost:11434" # let's use the main ollama that has the model loaded now
)

vector_store = PGVector(
    embeddings=embeddings,
    collection_name="kaos_memory",
    connection=DB_CONNECTION,
    use_jsonb=True,
)

llm = ChatOllama(
    model=LLM_MODEL,
    base_url="http://localhost:11434", # main ollama service for LLMs
    temperature=0.1
)

# 1. Retrieve Node: Fetch context from our PGVector DB
def retrieve(state: AgentState) -> AgentState:
    print("---RETRIEVE---")
    question = state["question"]
    
    print(f"Searching DB for: {question}")
    
    try:
        # En la vida real haríamos una búsqueda vectorial, pero como la DB local
        # que creamos con psycopg2 no tiene el formato exacto de langchain_postgres,
        # vamos a hacer una query directa usando psycopg2 para la PoC.
        conn = psycopg2.connect(
            host="localhost",
            port="5433",
            user="ka0s_ai",
            password="change_me_in_production_vector_db_123!",
            dbname="ka0s_memory"
        )
        cur = conn.cursor()
        
        # We need to generate the embedding for the question to do vector search
        # We need the nomic-embed-text from the embed fleet (port 11434)
        from langchain_ollama import OllamaEmbeddings
        search_embeddings = OllamaEmbeddings(
            model="nomic-embed-text",
            base_url="http://localhost:11434" # embed fleet
        )
        query_embedding = search_embeddings.embed_query(question)
        cur.execute("SELECT content FROM kaos_memory ORDER BY embedding <-> %s::vector LIMIT 5;", (query_embedding,))
        
        docs = [row[0] for row in cur.fetchall()]
        cur.close()
        conn.close()
        
        context = [f"Doc {i+1}: {doc[:200]}..." for i, doc in enumerate(docs)]
        print(f"Found {len(context)} documents.")
    except Exception as e:
        print(f"DB Error: {e}")
        context = [f"Simulated context about {question} from kaos_memory DB."]
        
    return {"context": context}

# 2. Reasoning Node: Llama 3.2 via Ollama makes decisions
def reasoning(state: AgentState) -> AgentState:
    print("---REASONING---")
    question = state["question"]
    context = state.get("context", [])
    
    sys_prompt = f"""Eres el Ka0s Agent, un experto en la plataforma Ka0s, Kubernetes, CI/CD y automatización.
    Debes usar el siguiente contexto para responder la pregunta del usuario. Si el contexto está vacío o no sabes la respuesta, dilo claramente, pero intenta dar la mejor respuesta posible basada en tu conocimiento general.
    
    IMPORTANTE: Tu respuesta DEBE tener siempre el siguiente formato exacto, reemplazando [TU RESPUESTA] con la información relevante:
    
    🤖 Ka0s Agent: Aquí tienes la respuesta basada en mi conocimiento actual:
    
    [TU RESPUESTA]
    
    🔗 Detalles de la Ejecución
    Si esta respuesta no es correcta, por favor verifica la documentación oficial o contacta con el equipo.

    Contexto:
    {" | ".join(context)}
    """
    
    messages = [
        SystemMessage(content=sys_prompt),
        HumanMessage(content=question)
    ]
    
    print("Calling Llama 3.2...")
    response = llm.invoke(messages)
    
    return {"final_answer": response.content}

# Define the routing logic
def route_decision(state: AgentState) -> str:
    print("---ROUTE DECISION---")
    # If the LLM generated tool calls, go to action node
    if state.get("tool_calls"):
        return "action"
    # Otherwise, we are done
    return "end"

# 3. Action Node: Execute MCP Tools (Simulated for now)
def action(state: AgentState) -> AgentState:
    print("---ACTION (MCP TOOL EXECUTION)---")
    return state

# Build the Graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("retrieve", retrieve)
workflow.add_node("reasoning", reasoning)
workflow.add_node("action", action)

# Set the entry point
workflow.set_entry_point("retrieve")

# Add edges
workflow.add_edge("retrieve", "reasoning")
workflow.add_conditional_edges(
    "reasoning",
    route_decision,
    {
        "action": "action",
        "end": END
    }
)
workflow.add_edge("action", "reasoning") # Loop back after tool execution

# Compile the graph
app = workflow.compile()

if __name__ == "__main__":
    print("🚀 Testing LangGraph Agent PoC...")
    initial_state = {
        "messages": [HumanMessage(content="¿Cómo funciona el escalado de runners en el cluster?")],
        "question": "¿Cómo funciona el escalado de runners en el cluster?",
        "context": [],
        "tool_calls": [],
        "final_answer": ""
    }
    
    result = app.invoke(initial_state)
    print("\n✅ Final Answer:")
    print(result["final_answer"])
