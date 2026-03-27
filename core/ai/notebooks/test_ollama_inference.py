#!/usr/bin/env python3
import os
import sys
import time
import requests


# Configuration from Environment or Defaults
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "ollama.ollama.svc.cluster.local")
OLLAMA_PORT = os.getenv("OLLAMA_PORT", "11434")
MODEL_NAME = os.getenv("MODEL_NAME", "llama3.2:7b")
API_URL = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/generate"


def test_inference(prompt):
    """
    Tests inference connectivity to Ollama following Ka0s AI standards:
    - Timeouts
    - Error Handling
    - Structured Logging
    """
    payload = {
        "model": MODEL_NAME,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.7,
            "top_k": 50
        }
    }

    print(f"🚀 Testing Connectivity to: {API_URL}")
    print(f"🤖 Model: {MODEL_NAME}")
    print(f"📝 Prompt: {prompt}")

    try:
        start_time = time.time()
        response = requests.post(
            API_URL,
            json=payload,
            timeout=30  # Strict timeout as per AI Expert guidelines
        )
        response.raise_for_status()

        elapsed = time.time() - start_time
        result = response.json()

        print(f"\n✅ Success! (Latency: {elapsed:.2f}s)")
        print("-" * 40)
        print(f"Response: {result.get('response', '').strip()}")
        print("-" * 40)

        return True

    except requests.exceptions.Timeout:
        print("\n❌ Error: Request Timed Out (Limit: 30s)")
        print("Suggestion: Check network policies or model loading time.")
        return False

    except requests.exceptions.ConnectionError:
        print(f"\n❌ Error: Could not connect to {API_URL}")
        print("Suggestion: Verify Service DNS resolution or Pod status.")
        return False

    except Exception as e:
        print(f"\n❌ Unexpected Error: {str(e)}")
        return False


if __name__ == "__main__":
    # Simple prompt for validation
    test_prompt = "Explain why Kubernetes is useful in one sentence."

    success = test_inference(test_prompt)
    sys.exit(0 if success else 1)
