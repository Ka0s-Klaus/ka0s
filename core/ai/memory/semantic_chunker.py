import os
import ast
import json
from typing import List, Dict, Any

def chunk_markdown(content: str, file_path: str, max_chars=2000) -> List[str]:
    """Basic markdown chunking splitting by headers or paragraphs."""
    # Simplified version for now
    lines = content.splitlines(True)
    chunks = []
    current_chunk = ""
    for line in lines:
        if len(current_chunk) + len(line) > max_chars and current_chunk:
            chunks.append(current_chunk)
            current_chunk = line
        else:
            current_chunk += line
    if current_chunk:
        chunks.append(current_chunk)
    return chunks

def chunk_python(content: str, file_path: str, max_chars=2000) -> List[str]:
    """Semantic chunking for Python using AST."""
    try:
        tree = ast.parse(content)
        chunks = []
        lines = content.splitlines(True)
        
        current_chunk = []
        current_len = 0
        
        # We group top-level nodes
        for node in tree.body:
            start_line = node.lineno - 1
            end_line = getattr(node, 'end_lineno', start_line + 1)
            node_text = "".join(lines[start_line:end_line])
            
            if current_len + len(node_text) > max_chars and current_chunk:
                chunks.append("".join(current_chunk))
                current_chunk = [node_text]
                current_len = len(node_text)
            else:
                current_chunk.append(node_text)
                current_len += len(node_text)
                
        if current_chunk:
            chunks.append("".join(current_chunk))
            
        return chunks if chunks else chunk_markdown(content, file_path, max_chars)
    except SyntaxError:
        # Fallback if invalid python
        return chunk_markdown(content, file_path, max_chars)

def chunk_yaml(content: str, file_path: str, max_chars=2000) -> List[str]:
    """Chunking for YAML/JSON. Tries to split by top level keys if possible, otherwise line based."""
    # For Kubernetes YAMLs, they are often split by '---'
    if '---' in content:
        docs = content.split('---')
        chunks = []
        for doc in docs:
            if doc.strip():
                # If a single doc is too large, fallback to line splitting
                if len(doc) > max_chars:
                    chunks.extend(chunk_markdown(doc, file_path, max_chars))
                else:
                    chunks.append(doc)
        return chunks
    return chunk_markdown(content, file_path, max_chars)

def semantic_chunk(content: str, file_path: str, max_chars=2000) -> List[str]:
    """Route to appropriate chunker based on file extension."""
    ext = os.path.splitext(file_path)[1].lower()
    
    if ext == '.py':
        return chunk_python(content, file_path, max_chars)
    elif ext in ['.yaml', '.yml']:
        return chunk_yaml(content, file_path, max_chars)
    elif ext in ['.md', '.txt']:
        return chunk_markdown(content, file_path, max_chars)
    else:
        return chunk_markdown(content, file_path, max_chars)
