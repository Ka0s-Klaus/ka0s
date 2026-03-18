import os
import argparse
import psycopg2
import requests
import logging
import json
import re
from pathlib import Path
from typing import List, Dict, Any

# Configuration
POSTGRES_HOST = os.getenv("POSTGRES_HOST") or "localhost"
POSTGRES_PORT = os.getenv("POSTGRES_PORT") or "5433"
POSTGRES_DB = os.getenv("POSTGRES_DB") or "ka0s_memory"
POSTGRES_USER = os.getenv("POSTGRES_USER") or "ka0s_ai"
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD") or "change_me_in_production_vector_db_123!"

OLLAMA_HOST = os.getenv("OLLAMA_HOST") or "localhost"
OLLAMA_PORT = os.getenv("OLLAMA_PORT") or "11435"
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL") or "nomic-embed-text"
GENERATION_MODEL = os.getenv("GENERATION_MODEL") or "deepseek-r1:8b" # Or llama3:latest

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=POSTGRES_HOST,
            port=POSTGRES_PORT,
            database=POSTGRES_DB,
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD
        )
        return conn
    except Exception as e:
        logger.error(f"Failed to connect to DB: {e}")
        return None

def generate_embedding(text: str) -> List[float]:
    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/embeddings"
    payload = {
        "model": EMBEDDING_MODEL,
        "prompt": text
    }
    
    try:
        response = requests.post(url, json=payload, timeout=30)
        response.raise_for_status()
        return response.json()["embedding"]
    except Exception as e:
        logger.error(f"Embedding generation failed: {e}")
        return []

def search_context(query_embedding: List[float], limit: int = 5) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    if not conn:
        return []
    
    try:
        cur = conn.cursor()
        # Cosine similarity search using pgvector (<=> is distance, so we order by it ASC)
        cur.execute("""
            SELECT source, content, 1 - (embedding <=> %s::vector) as similarity
            FROM kaos_memory
            WHERE 1 - (embedding <=> %s::vector) > 0.35  -- Filter low relevance at DB level
            ORDER BY embedding <=> %s::vector
            LIMIT %s;
        """, (json.dumps(query_embedding), json.dumps(query_embedding), json.dumps(query_embedding), limit))
        
        results = [{"source": row[0], "content": row[1], "similarity": row[2]} for row in cur.fetchall()]
        cur.close()
        conn.close()
        return results
    except Exception as e:
        logger.error(f"Search failed: {e}")
        return []

def generate_answer(query: str, context: List[Dict[str, Any]]) -> str:
    # 1. Check for similarity threshold (Safety Net)
    # If the best context has low similarity, it's likely irrelevant.
    # We use a loose threshold (0.4) because cosine similarity distributions vary.
    if not context or context[0]['similarity'] < 0.4:
        logger.warning(f"Low confidence context found. Top score: {context[0]['similarity'] if context else 0}")
        return "Lo siento, no dispongo de suficiente información en mi base de conocimientos actual para responder a tu pregunta con precisión. 🙇‍♂️\n\nPrueba a reformularla o consulta la documentación oficial en `core/docs`."

    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/generate"
    
    context_str = "\n\n".join([f"--- Source: {r['source']} (Score: {r['similarity']:.2f}) ---\n{r['content']}" for r in context])
    
    prompt = f"""
    You are **Ka0s Agent**, the expert AI engineer for the Ka0s Framework.
    
    ### 🛡️ Core Directive: HONESTY & ACCURACY
    You must answer the User Question based **ONLY** on the provided Context.
    
    ### 🚫 Strict Prohibitions
    - **DO NOT INVENT** information, commands, or file paths not present in the Context.
    - **DO NOT HALLUCINATE** features or services.
    - If the Context does not contain the answer, you **MUST** reply exactly:
      "... disculpa pero no dispongo de suficiente información como para contestar tu pregunta. Siento no haberte sido de ayuda."
    
    ### 📝 Style Guidelines
    - **Tone**: Professional, Technical, Helpful.
    - **Format**: Use Markdown (bold for key terms, code blocks for commands).
    - **Language**: Answer in the SAME language as the User Question (Español/English).
    
    ### 🧠 Context (Knowledge Base)
    {context_str}
    
    ### 👤 User Question
    {query}
    
    ### 🤖 Your Answer:
    """
    
    payload = {
        "model": GENERATION_MODEL,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.1,  # Low temp for factual answers
            "top_k": 20          # Restricted vocabulary for precision
        }
    }
    
    try:
        response = requests.post(url, json=payload, timeout=600)
        response.raise_for_status()
        return response.json().get("response", "Error: Empty response from LLM")
    except Exception as e:
        logger.error(f"Generation failed: {e}")
        return f"Error generating answer: {e}"


def find_repo_files(query: str, repo_root: str, max_hits: int = 40) -> List[str]:
    tokens = [t for t in re.split(r"\W+", query.lower()) if len(t) >= 4]
    if not tokens:
        return []
    root = Path(repo_root)

    core_services = root / "core" / "b2b" / "core-services"
    if core_services.exists():
        for t in tokens:
            svc_dir = core_services / t
            if svc_dir.exists() and svc_dir.is_dir():
                files = [str(p.relative_to(root)).replace("\\", "/") for p in svc_dir.rglob("*") if p.is_file()]
                files.sort()
                return files[:max_hits]

    ignore_parts = {
        ".git",
        ".venv",
        "node_modules",
        "__pycache__",
        ".pytest_cache",
        "dist",
        "build",
    }
    stopwords = {
        "puedes",
        "podrias",
        "podrías",
        "mostrar",
        "mostrarme",
        "ficheros",
        "archivo",
        "archivos",
        "despliegue",
        "deployment",
        "service",
        "services",
        "yaml",
        "yml",
    }
    tokens = [t for t in tokens if t not in stopwords]
    if not tokens:
        return []

    candidates: List[tuple[int, str]] = []
    for p in root.rglob("*"):
        if not p.is_file():
            continue
        rel = p.relative_to(root)
        parts = set(rel.parts)
        if parts & ignore_parts:
            continue
        rel_str = str(rel).lower().replace("\\", "/")
        hits = sum(1 for tok in tokens if tok in rel_str)
        if hits:
            candidates.append((hits, rel_str))
            if len(candidates) >= 500:
                break

    candidates.sort(key=lambda x: (-x[0], x[1]))
    return [p for _, p in candidates[:max_hits]]


def read_text_file(path: Path, max_chars: int) -> str:
    try:
        with path.open("r", encoding="utf-8", errors="ignore") as f:
            return f.read(max_chars)
    except Exception:
        return ""


def load_trae_context(repo_root: str, max_chars: int = 12000) -> List[Dict[str, Any]]:
    root = Path(repo_root)
    rel_paths = [
        "compliance/trae/rules/reglas.md",
        "compliance/trae/rules/rules_library/rule_006_skill_first.md",
        "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
        "compliance/trae/rules/rules_library/rule_011_ubicacion.md",
        "compliance/trae/rules/rules_library/rule_013_honestidad_ia.md",
        "compliance/trae/skills/kubernetes-expert/SKILL.md",
    ]
    parts: List[str] = []
    budget = max_chars
    for rel in rel_paths:
        p = root / rel
        if not p.exists() or not p.is_file():
            continue
        chunk = read_text_file(p, max_chars=min(4000, budget))
        if not chunk.strip():
            continue
        parts.append(f"### {rel}\n{chunk}")
        budget -= len(chunk)
        if budget <= 0:
            break
    if not parts:
        return []
    return [
        {
            "source": "compliance/trae (rules+skills)",
            "content": "\n\n".join(parts),
            "similarity": 1.0,
        }
    ]


def build_repo_context(query: str, repo_root: str, max_files: int = 4, max_chars_per_file: int = 4000) -> List[Dict[str, Any]]:
    allowed_ext = {".md", ".yaml", ".yml", ".py", ".sh", ".sql", ".json"}
    root = Path(repo_root)
    file_paths = find_repo_files(query, repo_root=repo_root, max_hits=60)
    picked: List[Path] = []
    for rel in file_paths:
        p = root / rel
        if not p.exists() or not p.is_file():
            continue
        if p.suffix.lower() not in allowed_ext:
            continue
        picked.append(p)
        if len(picked) >= max_files:
            break
    context: List[Dict[str, Any]] = []
    for p in picked:
        content = read_text_file(p, max_chars=max_chars_per_file)
        if not content.strip():
            continue
        context.append({
            "source": str(p.relative_to(root)).replace("\\", "/"),
            "content": content,
            "similarity": 1.0,
        })
    return context


def answer_from_trae_policies(query: str, repo_root: str) -> str:
    q = query.lower()
    root = Path(repo_root)

    skill_k8s_path = root / "compliance" / "trae" / "skills" / "kubernetes-expert" / "SKILL.md"
    rule_006_path = root / "compliance" / "trae" / "rules" / "rules_library" / "rule_006_skill_first.md"
    rule_007_path = root / "compliance" / "trae" / "rules" / "rules_library" / "rule_007_kubernetes.md"
    reglas_index_path = root / "compliance" / "trae" / "rules" / "reglas.md"

    skill_k8s = read_text_file(skill_k8s_path, max_chars=20000) if skill_k8s_path.exists() else ""
    rule_006 = read_text_file(rule_006_path, max_chars=20000) if rule_006_path.exists() else ""
    rule_007 = read_text_file(rule_007_path, max_chars=20000) if rule_007_path.exists() else ""
    reglas_index = read_text_file(reglas_index_path, max_chars=20000) if reglas_index_path.exists() else ""

    if not any([skill_k8s, rule_006, rule_007, reglas_index]):
        return ""

    def pick_lines(text: str, contains: List[str]) -> List[str]:
        lines = [ln.rstrip() for ln in text.splitlines()]
        picked = []
        for ln in lines:
            s = ln.strip()
            if not s:
                continue
            if any(c in s for c in contains):
                picked.append(s)
        seen = set()
        out = []
        for ln in picked:
            if ln in seen:
                continue
            seen.add(ln)
            out.append(ln)
        return out

    def normalize_bullet(text: str) -> str:
        s = text.strip()
        while s.startswith("- ") or s.startswith("* "):
            s = s[2:].strip()
        return s

    wants_checklist = any(k in q for k in ["checklist", "pasos", "antes de", "antes", "cambio", "infraestructura"])
    wants_structure = bool(
        re.search(r"\bestructura\b", q)
        or any(k in q for k in ["core/b2b", "desplegar", "kustomization", "overlays", "base/"])
    )
    wants_nginx = "nginx" in q
    wants_cluster_resources = bool(
        re.search(r"\b(uso|estado)\b", q)
        and re.search(r"\b(recursos?|cpu|memoria|ram)\b", q)
        and re.search(r"\b(cluster|kubernetes|k8s)\b", q)
    ) or bool(re.search(r"\b(kubectl\s+top|metrics-server|metrics\.k8s\.io)\b", q))

    parts: List[str] = []

    if wants_cluster_resources:
        parts.append("## Estado de uso de recursos (Kubernetes)")
        parts.append("- Para ver uso de CPU/memoria de nodos: `kubectl top nodes`")
        parts.append("- Para ver uso de CPU/memoria de pods (todos los namespaces): `kubectl top pods -A`")
        parts.append("- Si `kubectl top` no devuelve datos, normalmente falta Metrics Server (API `metrics.k8s.io`).")
        parts.append("- Para validar la API de métricas: `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes`")
        parts.append("\nFuente (contexto del skill): `compliance/trae/skills/kubernetes-expert/SKILL.md`\n")

        needles = [
            "kubectl top",
            "metrics-server",
            "metrics.k8s.io",
            "kube-state-metrics",
            "prometheus",
            "zabbix",
        ]
        scan_dirs = [
            root / ".github" / "workflows",
            root / "core" / "b2b",
            root / "core" / "monitoring",
            root / "core" / "docs",
        ]
        allowed_ext = {".md", ".yaml", ".yml", ".sh"}
        hits: List[str] = []
        scanned = 0
        for d in scan_dirs:
            if not d.exists() or not d.is_dir():
                continue
            for p in d.rglob("*"):
                if not p.is_file():
                    continue
                if p.suffix.lower() not in allowed_ext:
                    continue
                scanned += 1
                if scanned > 600:
                    break
                content = read_text_file(p, max_chars=12000).lower()
                if any(n in content for n in needles):
                    hits.append(str(p.relative_to(root)).replace("\\", "/"))
                    if len(hits) >= 12:
                        break
            if scanned > 600 or len(hits) >= 12:
                break

        if hits:
            parts.append("### Flujos/ficheros existentes relacionados")
            for h in hits:
                parts.append(f"- `{h}`")
        else:
            parts.append("### Flujos/ficheros existentes relacionados")
            parts.append("- No se detectó un workflow/script evidente en el repo (búsqueda por keywords).")
        parts.append("")

    if wants_structure and skill_k8s:
        principles = pick_lines(skill_k8s, ["GitOps Puro", "Kustomize First", "Inmutabilidad"])
        parts.append("## Recomendación (kubernetes-expert)")
        if principles:
            for ln in principles:
                t = normalize_bullet(ln)
                if "GitOps Puro" in t:
                    parts.append(f"- Trabaja con GitOps: define estado deseado en `core/b2b/` y deja que sincronice GitOps. (*{t}*)")
                elif "Kustomize First" in t:
                    parts.append(f"- Usa Kustomize como estándar para entornos. (*{t}*)")
                elif "Inmutabilidad" in t:
                    parts.append(f"- Evita cambios manuales en pods (no `kubectl exec` para configurar). (*{t}*)")

        parts.append("\nFuente: `compliance/trae/skills/kubernetes-expert/SKILL.md`\n")

        parts.append("### Estructura recomendada en `core/b2b/`")
        structure_lines = []
        for ln in skill_k8s.splitlines():
            if ln.strip().startswith("- Cada servicio") or ln.strip().startswith("- Estructura obligatoria") or ln.strip().startswith("- `base/") or ln.strip().startswith("- `overlays/") or ln.strip().startswith("- `kustomization.yaml"):
                structure_lines.append(normalize_bullet(ln))
        for ln in structure_lines:
            parts.append(f"- {ln}")
        if structure_lines:
            parts.append("\nFuente: `compliance/trae/skills/kubernetes-expert/SKILL.md`\n")

        if wants_nginx:
            parts.append("### Ejemplo: estructura de deploy para nginx")
            parts.append("Directorio sugerido:")
            parts.append("```text\ncore/b2b/core-services/nginx/\n  base/\n    deployment.yaml\n    service.yaml\n    ingress.yaml\n    kustomization.yaml\n  overlays/\n    staging/\n      kustomization.yaml\n    prod/\n      kustomization.yaml\n  kustomization.yaml\n```")
            parts.append("Manifiestos mínimos (ejemplo):")
            parts.append("```yaml\n# core/b2b/core-services/nginx/base/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginxinc/nginx-unprivileged:1.27-alpine\n          ports:\n            - containerPort: 8080\n          resources:\n            requests:\n              cpu: 50m\n              memory: 64Mi\n            limits:\n              cpu: 200m\n              memory: 256Mi\n          livenessProbe:\n            httpGet:\n              path: /\n              port: 8080\n            initialDelaySeconds: 10\n            periodSeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /\n              port: 8080\n            initialDelaySeconds: 5\n            periodSeconds: 5\n```")
            parts.append("```yaml\n# core/b2b/core-services/nginx/base/service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      targetPort: 8080\n```")
            parts.append("```yaml\n# core/b2b/core-services/nginx/base/ingress.yaml\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx\nspec:\n  rules:\n    - host: nginx.example.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: nginx\n                port:\n                  number: 80\n```")
            parts.append("```yaml\n# core/b2b/core-services/nginx/base/kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - deployment.yaml\n  - service.yaml\n  - ingress.yaml\n```")
            parts.append("```yaml\n# core/b2b/core-services/nginx/overlays/prod/kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - ../../base\npatches:\n  - target:\n      kind: Deployment\n      name: nginx\n    patch: |-\n      - op: replace\n        path: /spec/replicas\n        value: 2\n```")
            parts.append("Notas: evita `:latest` y los cambios manuales (`kubectl apply/exec`), y usa Kustomize/GitOps como indica el skill.")

    if wants_checklist and (rule_006 or rule_007 or reglas_index):
        parts.append("## Checklist mínimo recomendado (Regla 006 + Regla 007)")
        checklist: List[str] = []

        def add_item(text: str, regla: str, file_rel: str) -> None:
            t = normalize_bullet(text)
            if not t:
                return
            checklist.append(f"{t} (Fuente: {regla} - `{file_rel}`)")

        if rule_006:
            lines = rule_006.splitlines()
            for ln in lines:
                s = ln.strip()
                if s.startswith("Antes de iniciar cualquier tarea"):
                    add_item(
                        "Antes de tocar Kubernetes, comprueba si existe un Skill experto aplicable y síguelo.",
                        "Regla 006",
                        "compliance/trae/rules/rules_library/rule_006_skill_first.md",
                    )
                if s.startswith("- **Si existe**:"):
                    add_item(
                        "Si existe, invócalo y sigue sus directrices.",
                        "Regla 006",
                        "compliance/trae/rules/rules_library/rule_006_skill_first.md",
                    )
                if s.startswith("- **Gestión de Cambios**"):
                    add_item(
                        "Alinea el cambio con ITIL: registra Gestión de Cambios (ticket/registro en iTop).",
                        "Regla 006",
                        "compliance/trae/rules/rules_library/rule_006_skill_first.md",
                    )
                if s.startswith("- **Gestión de Configuración**"):
                    add_item(
                        "Actualiza Gestión de Configuración: CMDB al día.",
                        "Regla 006",
                        "compliance/trae/rules/rules_library/rule_006_skill_first.md",
                    )

        if rule_007:
            lines = rule_007.splitlines()
            for ln in lines:
                s = ln.strip()
                if s.startswith("Todo servicio debe seguir el patrón"):
                    add_item(
                        "Estructura el servicio con Kustomize Base/Overlay (o autocontenido con `kustomization.yaml`).",
                        "Regla 007",
                        "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
                    )
                if s.startswith("- Obligatorio:") or s.startswith("- Prohibido:"):
                    if s.startswith("- Prohibido:"):
                        add_item(
                            "Evita YAML sueltos sin contexto (usa kustomization/estructura).",
                            "Regla 007",
                            "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
                        )
                    if s.startswith("- Obligatorio:"):
                        add_item(
                            "Asegura `resources`, `livenessProbe`, `readinessProbe` en Deployments.",
                            "Regla 007",
                            "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
                        )
                if s.startswith("- No usar `latest`"):
                    add_item(
                        "No uses imágenes `latest`; usa tags específicas o SHA.",
                        "Regla 007",
                        "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
                    )
                if s.startswith("- No ejecutar contenedores"):
                    add_item(
                        "No ejecutes contenedores como `root` (usa `securityContext`).",
                        "Regla 007",
                        "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
                    )

        seen = set()
        compact: List[str] = []
        for item in checklist:
            if item in seen:
                continue
            seen.add(item)
            compact.append(item)

        for item in compact[:8]:
            parts.append(f"- {item}")

    if not parts:
        return ""

    return "\n".join(parts).strip() + "\n"


def should_return_file_list(query: str) -> bool:
    q = query.lower()
    return bool(
        re.search(r"\b(ficheros?|archivos?|rutas?|paths?)\b", q)
        or re.search(r"\bmanifiestos?\b", q)
    )


def is_query_about_rules_or_skills(query: str) -> bool:
    q = query.lower()
    keywords = [
        "trae",
        "regla",
        "reglas",
        "skill",
        "skills",
        "kubernetes",
        "kustomize",
        "gitops",
        "itil",
        "auditoria",
        "auditoría",
        "ubicacion",
        "ubicación",
    ]
    return any(k in q for k in keywords)

def main():
    parser = argparse.ArgumentParser(description="Ka0s Agent Inference CLI")
    parser.add_argument("query", type=str, help="The question to ask the agent")
    args = parser.parse_args()
    
    query = args.query
    logger.info(f"Processing query: {query}")

    repo_root = os.getenv("GITHUB_WORKSPACE") or os.getcwd()
    policies_answer = answer_from_trae_policies(query, repo_root)
    if policies_answer:
        print(policies_answer)
        return
    trae_context = load_trae_context(repo_root)
    if should_return_file_list(query) and not is_query_about_rules_or_skills(query):
        matches = find_repo_files(query, repo_root=repo_root)
        if matches:
            print("Ficheros relevantes encontrados en el repositorio:\n" + "\n".join([f"- {m}" for m in matches]))
            return
    
    # 1. Embed Query
    query_embedding = generate_embedding(query)
    if not query_embedding:
        repo_context = build_repo_context(query, repo_root=repo_root)
        if repo_context or (trae_context and is_query_about_rules_or_skills(query)):
            answer = generate_answer(query, repo_context + trae_context)
            print(answer)
            return
        print("Error: Could not embed query.")
        return

    # 2. Retrieve Context
    context = search_context(query_embedding)
    logger.info(f"Retrieved {len(context)} relevant context chunks.")

    if not context or context[0]["similarity"] < 0.4:
        repo_context = build_repo_context(query, repo_root=repo_root)
        if repo_context:
            answer = generate_answer(query, repo_context + trae_context)
            print(answer)
            return
        if trae_context and is_query_about_rules_or_skills(query):
            answer = generate_answer(query, trae_context)
            print(answer)
            return
    
    # 3. Generate Answer
    answer = generate_answer(query, context + trae_context)
    
    # Output solely the answer for the caller to capture
    print(answer)

if __name__ == "__main__":
    main()
