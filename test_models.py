required = ["qwen2:1.5b", "nomic-embed-text"]
required = [m if ':' in m else m + ':latest' for m in required]
print(required)
