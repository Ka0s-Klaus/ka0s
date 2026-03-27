export POSTGRES_HOST=localhost
export POSTGRES_PORT=5433
export POSTGRES_USER=ka0s_ai
export POSTGRES_PASSWORD='change_me_in_production_vector_db_123!'
export POSTGRES_DB=ka0s_memory
export OLLAMA_HOST=localhost
export OLLAMA_PORT=11434
export EMBEDDING_MODEL=nomic-embed-text

python3 core/ai/memory/ingest_local.py
