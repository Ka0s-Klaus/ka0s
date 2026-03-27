from langchain_core.messages import HumanMessage
from core.ai.inference.langgraph_agent import app

initial_state = {
    "messages": [HumanMessage(content="¿Cómo funciona el escalado de runners en el cluster? ¿Se usa ARC?")],
    "question": "¿Cómo funciona el escalado de runners en el cluster? ¿Se usa ARC?",
    "context": [],
    "tool_calls": [],
    "final_answer": ""
}

print("Running...")
result = app.invoke(initial_state)
print("\n✅ Final Answer:")
print(result["final_answer"])
