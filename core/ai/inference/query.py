import os
import argparse
import psycopg2
import requests
import logging
import json
import re
from pathlib import Path
from typing import List, Dict, Any, Optional, Callable

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


def is_kubernetes_topic(query: str) -> bool:
    q = query.lower()
    return any(k in q for k in [
        "kubernetes",
        "k8s",
        "cluster",
        "namespace",
        "pod",
        "deployment",
        "ingress",
        "svc",
        "service",
        "kustomize",
        "gitops",
        "core/b2b",
        "kustomization.yaml",
        "overlays",
    ])

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
    base = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}"
    api_url = f"{base}/api/embeddings"
    api_payload = {
        "model": EMBEDDING_MODEL,
        "prompt": text,
    }
    try:
        response = requests.post(api_url, json=api_payload, timeout=30)
        if response.status_code == 404:
            v1_url = f"{base}/v1/embeddings"
            v1_payload = {
                "model": EMBEDDING_MODEL,
                "input": text,
            }
            response = requests.post(v1_url, json=v1_payload, timeout=30)
        response.raise_for_status()
        data = response.json()
        if isinstance(data, dict) and "embedding" in data:
            return data["embedding"]
        if isinstance(data, dict) and "data" in data and isinstance(data["data"], list) and data["data"]:
            first = data["data"][0]
            if isinstance(first, dict) and "embedding" in first:
                return first["embedding"]
        return []
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

def build_verification_plan(query: str, repo_root: str) -> str:
    q = query.lower()
    bullets: List[str] = []
    focus_paths: List[str] = []

    if any(k in q for k in ["kubernetes", "k8s", "cluster", "namespace", "pod", "deployment", "ingress", "svc", "service"]):
        bullets.extend([
            "`kubectl get nodes -o wide`",
            "`kubectl get pods -A`",
            "`kubectl get events -A --sort-by=.lastTimestamp | tail -n 50`",
            "`kubectl describe pod <pod> -n <ns>`",
            "`kubectl logs <pod> -n <ns> --tail=200`",
        ])
        focus_paths.extend([
            "core/b2b/",
            "core/b2b/core-services/",
            ".github/workflows/",
            "core/docs/",
        ])

    if any(k in q for k in ["workflow", "github actions", "actions", "pipeline", "ci", "cd", "job", "runner"]):
        bullets.extend([
            "Revisar workflows en `.github/workflows/`",
            "Buscar el nombre del job/step en el repo",
        ])
        focus_paths.append(".github/workflows/")

    if "zabbix" in q or "monitor" in q or "monitoring" in q:
        bullets.extend([
            "Revisar templates en `core/monitoring/zabbix/templates/`",
            "Revisar sync/discovery en workflows `zabbix-*.yml`",
        ])
        focus_paths.append("core/monitoring/zabbix/")

    if "itop" in q or "cmdb" in q:
        focus_paths.extend([
            "core/b2b/core-services/itop/",
            "core/docs/",
        ])

    if not bullets:
        bullets.extend([
            "Buscar keywords en el repo (por nombre de fichero y contenido)",
            "Revisar documentación en `core/docs/`",
            "Revisar workflows en `.github/workflows/` si aplica",
        ])
    if not focus_paths:
        focus_paths = ["core/docs/", ".github/workflows/", "core/"]

    unique_bullets: List[str] = []
    seen = set()
    for b in bullets:
        if b in seen:
            continue
        seen.add(b)
        unique_bullets.append(b)

    unique_paths: List[str] = []
    seen_p = set()
    for p in focus_paths:
        if p in seen_p:
            continue
        seen_p.add(p)
        unique_paths.append(p)

    out: List[str] = []
    out.append("## Evidencia insuficiente")
    out.append("- No hay contexto suficiente en la base de conocimiento o en el repo para contestar con certeza.")
    out.append("")
    out.append("## Plan de verificación")
    for b in unique_bullets[:10]:
        out.append(f"- {b}")
    out.append("")
    out.append("## Rutas a revisar")
    for p in unique_paths[:8]:
        out.append(f"- `{p}`")
    return "\n".join(out).strip() + "\n"


def generate_answer(query: str, context: List[Dict[str, Any]], repo_root: str) -> str:
    if not context:
        return build_verification_plan(query, repo_root)

    base = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}"
    url = f"{base}/api/generate"
    
    context_str = "\n\n".join([f"--- Source: {r['source']} (Score: {r['similarity']:.2f}) ---\n{r['content']}" for r in context])
    
    prompt = f"""
    You are **Ka0s Agent**, the expert AI engineer for the Ka0s Framework.
    
    ### 🛡️ Core Directive: HONESTY & ACCURACY
    You must answer the User Question based **ONLY** on the provided Context.
    
    ### 🚫 Strict Prohibitions
    - **DO NOT INVENT** information, commands, or file paths not present in the Context.
    - **DO NOT HALLUCINATE** features or services.
    - If the Context does not contain the answer, say clearly that you lack evidence and provide a short verification plan.
    
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
            "temperature": 0.1,
            "top_k": 20,
        },
    }
    
    try:
        response = requests.post(url, json=payload, timeout=600)
        if response.status_code == 404:
            v1_url = f"{base}/v1/chat/completions"
            v1_payload = {
                "model": GENERATION_MODEL,
                "messages": [
                    {"role": "system", "content": "You are Ka0s Agent. Answer using ONLY the provided context."},
                    {"role": "user", "content": prompt},
                ],
                "temperature": 0.1,
                "stream": False,
            }
            response = requests.post(v1_url, json=v1_payload, timeout=600)
        response.raise_for_status()
        data = response.json()
        if isinstance(data, dict) and "response" in data:
            return data.get("response") or "Error: Empty response from LLM"
        if isinstance(data, dict) and "choices" in data and isinstance(data["choices"], list) and data["choices"]:
            choice0 = data["choices"][0]
            if isinstance(choice0, dict):
                msg = choice0.get("message")
                if isinstance(msg, dict) and msg.get("content"):
                    return msg["content"]
                if choice0.get("text"):
                    return choice0["text"]
        return "Error: Empty response from LLM"
    except Exception as e:
        logger.error(f"Generation failed: {e}")
        plan = build_verification_plan(query, repo_root)
        sources = [c.get("source") for c in context if c.get("source")]
        sources = [s for s in sources if isinstance(s, str)]
        if not sources:
            return plan
        out = [plan.rstrip(), "", "## Contexto localizado", *[f"- `{s}`" for s in sources[:8]]]
        return "\n".join(out).strip() + "\n"


def is_flow_question(query: str) -> bool:
    q = query.lower()
    return any(k in q for k in [
        "flujo",
        "workflow",
        "workflows",
        "pipeline",
        "ci/cd",
        "github actions",
        "action",
        "actions",
        "job",
        "runner",
    ])


def is_itil_question(query: str) -> bool:
    q = query.lower()
    def has_word(w: str) -> bool:
        return re.search(rf"\b{re.escape(w)}\b", q) is not None

    strong = any(has_word(w) for w in ["itil", "cab", "rfc", "cmdb", "itop"]) or bool(
        re.search(r"\btickets?\b", q)
    )
    change_mgmt = any(k in q for k in [
        "gestión de cambios",
        "gestion de cambios",
        "change management",
    ])
    return strong or change_mgmt


def find_repo_files(query: str, repo_root: str, max_hits: int = 40, prefer_prefixes: Optional[List[str]] = None) -> List[str]:
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

    prefer_prefixes = prefer_prefixes or []

    def prefer_rank(path: str) -> int:
        for idx, pref in enumerate(prefer_prefixes):
            if path.startswith(pref):
                return idx
        return len(prefer_prefixes) + 1

    candidates.sort(key=lambda x: (-x[0], prefer_rank(x[1]), x[1]))
    return [p for _, p in candidates[:max_hits]]


def read_text_file(path: Path, max_chars: int) -> str:
    try:
        with path.open("r", encoding="utf-8", errors="ignore") as f:
            return f.read(max_chars)
    except Exception:
        return ""


def load_trae_context(query: str, repo_root: str, max_chars: int = 12000) -> List[Dict[str, Any]]:
    root = Path(repo_root)
    q = query.lower()

    rel_paths: List[str] = []
    if any(k in q for k in ["reglas", "regla", "constitución", "constitucion", "compliance", "skill", "skills"]):
        rel_paths.append("compliance/trae/rules/reglas.md")

    if any(k in q for k in ["done", "verificación", "verificacion", "test", "lint", "dry-run", "prueba"]):
        rel_paths.append("compliance/trae/rules/rules_library/rule_001_verificacion.md")

    if any(k in q for k in ["docs", "documentación", "documentacion", "mkdocs", "mermaid", "update-docs-index"]):
        rel_paths.extend([
            "compliance/trae/rules/rules_library/rule_002_docs_vivos.md",
            "compliance/trae/rules/rules_library/rule_010_documentation.md",
            "compliance/trae/skills/mkdocs-expert/SKILL.md",
        ])

    if any(k in q for k in ["audit", "auditoría", "auditoria", "evidencia", "recomendations", "recommendations"]):
        rel_paths.append("compliance/trae/rules/rules_library/rule_004_auditoria.md")

    if any(k in q for k in ["memoria", "contexto", "cierre de sesión", "cierre de sesion"]):
        rel_paths.append("compliance/trae/rules/rules_library/rule_005_memoria.md")

    if any(k in q for k in ["itil", "cab", "rfc", "ticket", "cmdb", "itop", "cambio", "producción", "produccion"]):
        rel_paths.extend([
            "compliance/trae/rules/rules_library/rule_006_skill_first.md",
            "compliance/trae/skills/itil-expert/SKILL.md",
            "compliance/trae/skills/itop-expert/SKILL.md",
        ])

    if is_kubernetes_topic(query):
        rel_paths.extend([
            "compliance/trae/rules/rules_library/rule_007_kubernetes.md",
            "compliance/trae/skills/kubernetes-expert/SKILL.md",
        ])

    if any(k in q for k in ["python", "bash", "script", "scripts", "automatización", "automatizacion"]):
        rel_paths.extend([
            "compliance/trae/rules/rules_library/rule_008_scripting.md",
            "compliance/trae/skills/python-expert/SKILL.md",
        ])

    if any(k in q for k in ["observabilidad", "observability", "zabbix", "metabase", "logs", "logging"]):
        rel_paths.extend([
            "compliance/trae/rules/rules_library/rule_009_observability.md",
            "compliance/trae/skills/observability-expert/SKILL.md",
            "compliance/trae/skills/metabase-expert/SKILL.md",
        ])

    if any(k in q for k in ["ubicación", "ubicacion", "ruta", "rutas", "dónde", "donde"]):
        rel_paths.append("compliance/trae/rules/rules_library/rule_011_ubicacion.md")

    if any(k in q for k in ["workflow", "workflows", "github actions", "actions", "runner", ".github/workflows"]):
        rel_paths.append("compliance/trae/skills/github-expert/SKILL.md")

    if any(k in q for k in ["secrets", "secretos", "security", "seguridad", "trivy", "wazuh", "vault"]):
        rel_paths.append("compliance/trae/skills/security-expert/SKILL.md")

    rel_paths.append("compliance/trae/rules/rules_library/rule_013_honestidad_ia.md")

    seen = set()
    rel_paths = [p for p in rel_paths if not (p in seen or seen.add(p))]
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

    explicit_paths: List[str] = []
    for m in re.finditer(r"(?P<p>(?:\.?\.github/workflows/)[A-Za-z0-9._\-/]+\.(?:ya?ml))", query):
        explicit_paths.append(m.group("p").lstrip("./"))
    for m in re.finditer(r"`(?P<p>[^`]+\.(?:ya?ml|md|py|sh|sql|json))`", query):
        p = m.group("p").strip().lstrip("./")
        if p.startswith(".github/") or p.startswith("core/") or p.startswith("devops/") or p.startswith("compliance/"):
            explicit_paths.append(p)
    seen_exp = set()
    explicit_paths = [p for p in explicit_paths if not (p in seen_exp or seen_exp.add(p))]

    def pick_workflow_files(q: str, max_pick: int = 2) -> List[str]:
        if not is_flow_question(q):
            return []
        if re.search(r"\.?\.github/workflows/[^\s`]+\.(?:ya?ml)", q.lower()):
            return []
        workflows_dir = root / ".github" / "workflows"
        if not workflows_dir.exists() or not workflows_dir.is_dir():
            return []
        tokens = [t for t in re.split(r"\W+", q.lower()) if len(t) >= 4]
        tokens = [t for t in tokens if t not in {
            "existe",
            "flujo",
            "workflow",
            "workflows",
            "github",
            "actions",
            "pipeline",
            "core",
            "docs",
            "audit",
            "regla",
            "reglas",
            "documentación",
            "documentacion",
        }]
        if not tokens:
            return []
        scored: List[tuple[int, str]] = []
        for p in workflows_dir.glob("*.y*ml"):
            rel = str(p.relative_to(root)).replace("\\", "/")
            name = p.name.lower()
            content = read_text_file(p, max_chars=24000).lower()
            score = sum(1 for t in tokens if (t in name or t in content))
            if score:
                scored.append((score, rel))
        scored.sort(key=lambda x: (-x[0], x[1]))
        return [r for _, r in scored[:max_pick]]

    prefer_prefixes: Optional[List[str]] = None
    if is_flow_question(query):
        prefer_prefixes = [
            ".github/workflows/",
            ".github/scripts/",
            "core/monitoring/",
            "core/docs/",
            "core/b2b/",
            "devops/",
        ]
    workflow_picks = pick_workflow_files(query, max_pick=2)
    file_paths = explicit_paths + workflow_picks + find_repo_files(query, repo_root=repo_root, max_hits=60, prefer_prefixes=prefer_prefixes)
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

    if not is_kubernetes_topic(query):
        return ""

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
        parts.append("- Para ver pods más consumidores: `kubectl top pods -A --sort-by=cpu` y `kubectl top pods -A --sort-by=memory`")
        parts.append("- Si `kubectl top` no devuelve datos, normalmente falta Metrics Server (API `metrics.k8s.io`).")
        parts.append("- Para validar métricas: `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes`")
        parts.append("- Para diagnosticar Metrics Server: `kubectl get apiservice v1beta1.metrics.k8s.io` y `kubectl -n kube-system get deploy metrics-server`")
        parts.append("\nFuente (contexto del skill): `compliance/trae/skills/kubernetes-expert/SKILL.md`\n")

        parts.append("### Flujos/ficheros existentes relacionados")

        workflows_dir = root / ".github" / "workflows"
        workflow_hits: List[str] = []
        if workflows_dir.exists() and workflows_dir.is_dir():
            for p in workflows_dir.glob("*.yml"):
                content = read_text_file(p, max_chars=20000).lower()
                if any(k in content for k in ["zabbix", "metrics-server", "metrics.k8s.io", "metrics", "prometheus", "kubectl top"]):
                    workflow_hits.append(str(p.relative_to(root)).replace("\\", "/"))

        templates_dir = root / "core" / "monitoring" / "zabbix" / "templates"
        k8s_template_hits: List[str] = []
        if templates_dir.exists() and templates_dir.is_dir():
            for p in templates_dir.glob("*.y*ml"):
                if "kubernetes" not in p.name.lower():
                    continue
                k8s_template_hits.append(str(p.relative_to(root)).replace("\\", "/"))

        if workflow_hits:
            parts.append("- Workflows:")
            for h in sorted(workflow_hits)[:8]:
                parts.append(f"  - `{h}`")

        if k8s_template_hits:
            parts.append("- Zabbix (templates Kubernetes):")
            for h in sorted(k8s_template_hits)[:10]:
                parts.append(f"  - `{h}`")

        if not workflow_hits and not k8s_template_hits:
            parts.append("- No se detectó un workflow/template evidente en el repo para este caso.")
        parts.append("")

    if wants_structure and skill_k8s:
        principles = pick_lines(skill_k8s, ["GitOps Puro", "Kustomize First", "Inmutabilidad"])
        parts.append("## Recomendación (kubernetes-expert)")
        if principles:
            for ln in principles:
                t = normalize_bullet(ln)
                if "GitOps Puro" in t:
                    parts.append(f"- Trabaja con GitOps: define estado deseado en `core/b2b/` y deja que sincronice GitOps. (*{t}*)")
                    parts.append("")
                elif "Kustomize First" in t:
                    parts.append(f"- Usa Kustomize como estándar para entornos. (*{t}*)")
                    parts.append("")
                elif "Inmutabilidad" in t:
                    parts.append(f"- Evita cambios manuales en pods (no `kubectl exec` para configurar). (*{t}*)")
                    parts.append("")

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
            parts.append("Archivo: `core/b2b/core-services/nginx/base/deployment.yaml`")
            parts.append("```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginxinc/nginx-unprivileged:1.27-alpine\n          ports:\n            - containerPort: 8080\n          securityContext:\n            allowPrivilegeEscalation: false\n            readOnlyRootFilesystem: true\n            runAsNonRoot: true\n            runAsUser: 101\n            runAsGroup: 101\n            capabilities:\n              drop: [\"ALL\"]\n          resources:\n            requests:\n              cpu: 50m\n              memory: 64Mi\n            limits:\n              cpu: 200m\n              memory: 256Mi\n          livenessProbe:\n            httpGet:\n              path: /\n              port: 8080\n            initialDelaySeconds: 10\n            periodSeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /\n              port: 8080\n            initialDelaySeconds: 5\n            periodSeconds: 5\n```")
            parts.append("Archivo: `core/b2b/core-services/nginx/base/service.yaml`")
            parts.append("```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      targetPort: 8080\n```")
            parts.append("Archivo: `core/b2b/core-services/nginx/base/ingress.yaml`")
            parts.append("```yaml\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx\nspec:\n  rules:\n    - host: nginx.example.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: nginx\n                port:\n                  number: 80\n```")
            parts.append("Archivo: `core/b2b/core-services/nginx/base/kustomization.yaml`")
            parts.append("```yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - deployment.yaml\n  - service.yaml\n  - ingress.yaml\n```")
            parts.append("Archivo: `core/b2b/core-services/nginx/overlays/prod/kustomization.yaml`")
            parts.append("```yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - ../../base\npatches:\n  - target:\n      kind: Deployment\n      name: nginx\n    patch: |-\n      - op: replace\n        path: /spec/replicas\n        value: 2\n```")
            parts.append("Archivo: `core/b2b/core-services/nginx/kustomization.yaml`")
            parts.append("```yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - overlays/prod\n```")
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


def answer_flow_discovery(query: str, repo_root: str) -> str:
    if not is_flow_question(query):
        return ""

    q = query.lower()
    discovery_intent = any(k in q for k in [
        "que workflows",
        "qué workflows",
        "cuales workflows",
        "cuáles workflows",
        "listar workflows",
        "lista de workflows",
        "listado de workflows",
        "donde esta el workflow",
        "dónde está el workflow",
        "donde está el workflow",
        "ubicacion del workflow",
        "ubicación del workflow",
        "que flujos",
        "qué flujos",
        "listar flujos",
        "lista de flujos",
        "que pipeline",
        "qué pipeline",
        "listar pipeline",
        "lista de pipeline",
    ])
    analysis_intent = any(k in q for k in [
        "analiza",
        "analizar",
        "explica",
        "explicar",
        "como funciona",
        "cómo funciona",
        "identifica",
        "propón",
        "propon",
        "revis",
    ])
    if not discovery_intent or analysis_intent:
        return ""
    root = Path(repo_root)
    tokens = [t for t in re.split(r"\W+", query.lower()) if len(t) >= 4]
    tokens = [t for t in tokens if t not in {"existe", "existan", "flujo", "workflow", "workflows", "github", "actions", "pipeline"}]

    boost_agent = any(k in q for k in ["agente", "agent", "kaos-agent", "ka0s-agent"])

    relevant_scored: List[tuple[int, str]] = []
    workflows_dir = root / ".github" / "workflows"
    if workflows_dir.exists() and workflows_dir.is_dir():
        for p in sorted(list(workflows_dir.glob("*.yml")) + list(workflows_dir.glob("*.yaml"))):
            name = p.name.lower()
            content = read_text_file(p, max_chars=24000).lower()
            if not tokens:
                score = 0
                if boost_agent and "agent" in name:
                    score += 5
                relevant_scored.append((score, str(p.relative_to(root)).replace("\\", "/")))
                continue
            score = sum(1 for t in tokens if (t in name or t in content))
            if boost_agent and "agent" in name:
                score += 5
            if score:
                relevant_scored.append((score, str(p.relative_to(root)).replace("\\", "/")))

    if any(k in query.lower() for k in ["zabbix", "kubernetes", "k8s", "cluster"]):
        templates_dir = root / "core" / "monitoring" / "zabbix" / "templates"
        if templates_dir.exists() and templates_dir.is_dir():
            for p in sorted(templates_dir.glob("*.y*ml")):
                if "kubernetes" not in p.name.lower():
                    continue
                relevant_scored.append((3, str(p.relative_to(root)).replace("\\", "/")))

    docs_dir = root / "core" / "docs"
    if docs_dir.exists() and docs_dir.is_dir() and tokens:
        for p in docs_dir.rglob("*"):
            if not p.is_file():
                continue
            rel = str(p.relative_to(root)).replace("\\", "/").lower()
            if any(t in rel for t in tokens):
                relevant_scored.append((1, str(p.relative_to(root)).replace("\\", "/")))

    relevant_scored.sort(key=lambda x: (-x[0], x[1]))
    seen = set()
    relevant: List[str] = []
    for _, path in relevant_scored:
        if path in seen:
            continue
        seen.add(path)
        relevant.append(path)
    if not relevant:
        return ""
    parts: List[str] = []
    parts.append("## Flujos y docs relevantes")
    for h in relevant[:12]:
        parts.append(f"- `{h}`")
    return "\n".join(parts).strip() + "\n"


def answer_itil_gate(query: str, repo_root: str) -> str:
    if not is_itil_question(query):
        return ""

    root = Path(repo_root)
    workflows_dir = root / ".github" / "workflows"
    workflow_scored: List[tuple[int, str]] = []
    if workflows_dir.exists() and workflows_dir.is_dir():
        for p in sorted(workflows_dir.glob("*.yml")):
            name = p.name.lower()
            content = read_text_file(p, max_chars=24000).lower()
            score = 0
            if any(k in name for k in ["itil", "itop", "cmdb"]):
                score += 10
            if "cd-" in name or name.startswith("cd") or "deploy" in name:
                score += 6
            if "prod" in name or "production" in name:
                score += 3
            if "rfc" in name:
                score += 4

            for k, w in [("itil", 4), ("itop", 4), ("cmdb", 4), ("rfc", 3)]:
                if k in content:
                    score += w

            if score >= 8:
                workflow_scored.append((score, str(p.relative_to(root)).replace("\\", "/")))

    if not workflow_scored:
        return ""

    workflow_scored.sort(key=lambda x: (-x[0], x[1]))
    workflow_hits = [p for _, p in workflow_scored]

    parts: List[str] = []
    parts.append("## Gate ITIL + CMDB (sin alucinaciones)")
    parts.append("- Política: sin ticket/RFC aprobado no hay despliegue a producción; y cualquier cambio debe actualizar CMDB.")
    parts.append("- Implementación recomendada: añade un step de validación al inicio del workflow de despliegue y haz que falle si no hay RFC.")
    parts.append("")
    parts.append("### Workflows relacionados detectados")
    for h in workflow_hits[:10]:
        parts.append(f"- `{h}`")
    parts.append("")
    parts.append("### Plan de verificación")
    parts.append("- Identificar el workflow que despliega a producción (p.ej. `cd-*` o el que aplique en tu repo).")
    parts.append("- Definir el formato del RFC/ticket (ej. `RFC-1234`) y dónde se aporta (issue/PR/input del workflow).")
    parts.append("- Validar el RFC contra iTop/CMDB con el mecanismo existente (si lo hay) o añadir integración segura.")
    return "\n".join(parts).strip() + "\n"


def answer_agent_automation_howto(query: str, repo_root: str) -> str:
    q = query.lower()
    if not any(k in q for k in [
        "automatización",
        "automatizacion",
        "nueva automatización",
        "nueva automatizacion",
        "extienda el agente",
        "extender el agente",
        "workflow del responder",
        "issue responder",
        "agent responder",
    ]):
        return ""
    if not any(k in q for k in [
        "dónde",
        "donde",
        "ruta",
        "rutas",
        "documentación",
        "documentacion",
        "evidencia",
        "audit",
        "verificación",
        "verificacion",
        "lint",
        "dry-run",
        "done",
        "tree",
        "estructura",
    ]):
        return ""

    root = Path(repo_root)

    key_paths = [
        ".github/workflows/kaos-agent-issue-responder.yaml",
        ".github/workflows/kaos-agent-query.yaml",
        ".github/workflows/kaos-agent-ingest.yaml",
        ".github/scripts/update-docs-index.py",
        "core/ai/inference/query.py",
        "core/ai/memory/ingest_local.py",
        "core/docs/README.md",
        "compliance/trae/rules/rules_library/rule_001_verificacion.md",
        "compliance/trae/rules/rules_library/rule_002_docs_vivos.md",
        "compliance/trae/rules/rules_library/rule_004_auditoria.md",
        "compliance/trae/rules/rules_library/rule_011_ubicacion.md",
        "compliance/trae/skills/github-expert/SKILL.md",
        "compliance/trae/rules/rules_library/rule_013_honestidad_ia.md",
    ]
    existing = [p for p in key_paths if (root / p).exists()]

    parts: List[str] = []
    parts.append("## Guía operativa (Ka0s): nueva automatización del agente")
    parts.append("")

    parts.append("### 1) Dónde debe vivir el código (rutas exactas)")
    parts.append("- Workflows GitHub Actions: `.github/workflows/` (estándar Ka0s para automatización).")
    parts.append("- Lógica reusable >50 líneas: `.github/actions/<accion>/` (composite action).")
    parts.append("- Scripts operativos idempotentes: `devops/core/<dominio>/` (ej: `devops/core/k8s/`, `devops/core/mongo/scripts/`).")
    parts.append("- Código del agente (inferencia): `core/ai/inference/`.")
    parts.append("- Pipeline de memoria/ingesta: `core/ai/memory/`.")
    parts.append("")

    parts.append("### 2) Qué documentación crear/actualizar")
    parts.append("- Crea un módulo en `core/docs/<modulo>/` con al menos `00_main.md` (qué hace, cómo ejecutar, inputs/outputs, límites).")
    parts.append("- Actualiza el índice de docs (se autogenera): `.github/scripts/update-docs-index.py` actualiza `core/docs/README.md` y `mkdocs.yml`.")
    parts.append("")

    parts.append("### 3) Qué evidencia generar en `audit/` (nomenclatura)")
    parts.append("- Guarda evidencias bajo una subcarpeta por dominio: `audit/<dominio>/` (ej: `audit/response/`, `audit/k8services/`).")
    parts.append("- Nomenclatura recomendada (ya usada en workflows): `<YYYYMMDD_HHMMSS>_<RUN_ID>_<slug>.md`.")
    parts.append("- Incluye siempre: pregunta/inputs, fecha, `github.run_id`, fuentes consultadas y resultado.")
    parts.append("")

    parts.append("### 4) Verificación mínima antes de marcar Done")
    parts.append("- Validación YAML (workflows): ejecutar el workflow `yamllint.yml` o el linter equivalente del repo.")
    parts.append("- Dry-run local del script (si aplica): ejecución con datos de ejemplo y salida en `audit/`.")
    parts.append("- Prueba de workflow: `workflow_dispatch` con inputs mínimos + evidencia commit en `audit/`.")
    parts.append("")

    parts.append("### 5) Ejemplo de estructura resultante")
    parts.append("```text\n.github/\n  workflows/\n    kaos-agent-my-automation.yml\n  actions/\n    my-automation/\n      action.yml\n      entrypoint.sh\ndevops/\n  core/\n    my-domain/\n      run-my-automation.sh\ncore/\n  ai/\n    inference/\n      my_feature.py\ncore/\n  docs/\n    ka0s_agent_my_automation/\n      00_main.md\naudit/\n  my-automation/\n    20260319_123000_<RUN_ID>_my-automation.md\n```")
    parts.append("")

    if existing:
        parts.append("### Referencias en este repo")
        for p in existing:
            parts.append(f"- `{p}`")

    return "\n".join(parts).strip() + "\n"


def answer_docs_howto(query: str, repo_root: str) -> str:
    q = query.lower()
    if any(k in q for k in [
        "automatización",
        "automatizacion",
        "nueva automatización",
        "nueva automatizacion",
        "workflow del responder",
        "issue responder",
        "agent responder",
    ]):
        return ""

    docs_intent = any(k in q for k in [
        "docs",
        "mkdocs",
        "core/docs",
        "mkdocs.yml",
        "readme",
        "índice",
        "indice",
        "nav",
        "portal de docs",
        "docs portal",
    ])
    if not docs_intent:
        docs_intent = any(k in q for k in ["documentación", "documentacion"])
    howto_intent = any(k in q for k in [
        "cómo",
        "como",
        "guía",
        "guia",
        "pasos",
        "estructura",
        "dónde",
        "donde",
        "publicar",
        "desplegar",
        "actualizar",
        "agregar",
        "añadir",
    ])
    if not (docs_intent and howto_intent):
        return ""

    root = Path(repo_root)
    key_paths = [
        "core/docs/README.md",
        "mkdocs.yml",
        ".github/scripts/update-docs-index.py",
        ".github/workflows/docs-autoupdate.yml",
        ".github/workflows/docs-index-auto-update.yml",
        ".github/workflows/deploy-docs-portal.yml",
        "compliance/trae/rules/rules_library/rule_002_docs_vivos.md",
        "compliance/trae/rules/rules_library/rule_001_verificacion.md",
    ]
    existing = [p for p in key_paths if (root / p).exists()]

    parts: List[str] = []
    parts.append("## Guía Ka0s: documentación (core/docs)")
    parts.append("")
    parts.append("### 1) Dónde vive la documentación")
    parts.append("- Raíz: `core/docs/`.")
    parts.append("- Navegación: `mkdocs.yml` (nav).")
    parts.append("")
    parts.append("### 2) Cómo crear un nuevo módulo de docs")
    parts.append("- Crea carpeta: `core/docs/<modulo>/`.")
    parts.append("- Crea `core/docs/<modulo>/00_main.md` como portada del módulo.")
    parts.append("- Si necesitas subsecciones: `01_*.md`, `02_*.md` (nombres estables, markdown estricto).")
    parts.append("")
    parts.append("### 3) Cómo actualizar índice y navegación")
    parts.append("- El índice se autogenera con `.github/scripts/update-docs-index.py`.")
    parts.append("- Ese script actualiza `core/docs/README.md`, `index.md` y `mkdocs.yml`.")
    parts.append("")
    parts.append("### 4) Cómo se publica")
    parts.append("- Al hacer push a `main` tocando `core/docs/**` o `mkdocs.yml`, se ejecuta el deploy del portal de docs.")
    parts.append("")
    parts.append("### 5) Verificación mínima (antes de darlo por Done)")
    parts.append("- Ejecuta el generador de índice localmente y revisa el diff en `mkdocs.yml` y `core/docs/README.md`.")
    parts.append("- Verifica enlaces/rutas y que los títulos sean consistentes.")
    parts.append("")
    parts.append("### 6) Estructura mínima recomendada")
    parts.append("```text\ncore/docs/\n  <modulo>/\n    00_main.md\n    01_concept.md\n    02_usage.md\n```")

    if existing:
        parts.append("")
        parts.append("### Referencias en este repo")
        for p in existing:
            parts.append(f"- `{p}`")

    return "\n".join(parts).strip() + "\n"


def answer_project_onboarding(query: str, repo_root: str) -> str:
    q = query.lower()
    onboarding_intent = any(k in q for k in [
        "onboarding",
        "bienvenida",
        "introducción",
        "introduccion",
        "cómo empezar",
        "como empezar",
        "getting started",
        "primeros pasos",
    ])
    if not onboarding_intent:
        return ""

    root = Path(repo_root)
    key_paths = [
        "README.md",
        "core/docs/README.md",
        "mkdocs.yml",
        ".github/workflows/kaos.yml",
        ".github/workflows/ci-core-validate.yml",
        ".github/workflows/kaos-agent-issue-responder.yaml",
        ".github/workflows/kaos-agent-eval.yml",
        "core/ai/inference/query.py",
        "core/ai/eval/run_eval.py",
        "core/ai/eval/eval_cases.json",
        "compliance/trae/rules/rules_library/rule_001_verificacion.md",
        "compliance/trae/rules/rules_library/rule_002_docs_vivos.md",
    ]
    existing = [p for p in key_paths if (root / p).exists()]

    parts: List[str] = []
    parts.append("## Onboarding rápido: proyecto Ka0s")
    parts.append("")
    parts.append("### 1) Qué es Ka0s (en una frase)")
    parts.append("- Framework operativo/DevOps orientado a GitOps, evidencia y automatización reproducible (workflows + scripts + docs vivas).")
    parts.append("")
    parts.append("### 2) Mapa del repo (lo mínimo para orientarte)")
    parts.append("- `core/`: núcleo (IA, validadores, plantillas, lógica compartida).")
    parts.append("- `core/docs/`: documentación viva (portal MkDocs).")
    parts.append("- `.github/workflows/`: automatizaciones (CI/CD, auditorías, agente).")
    parts.append("- `.github/scripts/`: scripts de soporte usados por workflows.")
    parts.append("- `compliance/`: reglas/políticas (guardrails de Ka0s).")
    parts.append("- `audit/`: evidencias generadas por ejecuciones (run_id, outputs, reportes).")
    parts.append("")
    parts.append("### 3) Documentación: cómo se organiza y cómo se publica")
    parts.append("- Raíz: `core/docs/`.")
    parts.append("- Navegación/portal: `mkdocs.yml`.")
    parts.append("- Índice/nav: `.github/scripts/update-docs-index.py` actualiza `core/docs/README.md`, `index.md` y `mkdocs.yml`.")
    parts.append("- Publicación: cambios en `core/docs/**` o `mkdocs.yml` en `main` disparan el deploy del portal.")
    parts.append("")
    parts.append("### 4) Automatización: cómo se ejecuta el agente en issues")
    parts.append("- Label de disparo: `ka0s-agent`.")
    parts.append("- Workflow: `.github/workflows/kaos-agent-issue-responder.yaml` concatena `title + body` y responde comentando en la issue.")
    parts.append("")
    parts.append("### 5) Contribución típica (patrón Ka0s)")
    parts.append("- Cambias código/scripts/workflows.")
    parts.append("- Añades/actualizas docs en `core/docs/<modulo>/`.")
    parts.append("- Dejas evidencia cuando aplica en `audit/<dominio>/`.")
    parts.append("- Refuerzas el comportamiento con casos en `core/ai/eval/` si afecta al agente.")
    parts.append("")
    parts.append("### 6) Verificación mínima (antes de decir ‘Done’)")
    parts.append("- Docs: ejecutar `.github/scripts/update-docs-index.py` y revisar diffs (`mkdocs.yml`, `core/docs/README.md`).")
    parts.append("- Agente: ejecutar evaluación offline con `python core/ai/eval/run_eval.py` (si tocaste routing/respuestas).")
    parts.append("- Workflows: pasar linters/validadores de YAML (CI del repo).")

    if existing:
        parts.append("")
        parts.append("### Referencias en este repo")
        for p in existing:
            parts.append(f"- `{p}`")

    return "\n".join(parts).strip() + "\n"


def answer_platform_strengths_and_description(query: str, repo_root: str) -> str:
    q = query.lower()
    strengths_intent = any(k in q for k in [
        "puntos fuertes",
        "puntos mas fuertes",
        "fortalezas",
        "resumen",
        "breve resumen",
    ])
    description_intent = any(k in q for k in [
        "descripción",
        "descripcion",
        "15 líneas",
        "15 lineas",
        "15 líneas",
    ])
    if not (strengths_intent and description_intent):
        return ""

    root = Path(repo_root)
    key_paths = [
        "core/docs/README.md",
        "mkdocs.yml",
        ".github/workflows/kaos.yml",
        ".github/workflows/ci-core-validate.yml",
        ".github/workflows/deploy-docs-portal.yml",
        ".github/workflows/kaos-agent-issue-responder.yaml",
        ".github/workflows/kaos-agent-eval.yml",
        ".github/workflows/kaos-agent-feedback.yml",
        "core/ai/inference/query.py",
        "core/ai/eval/run_eval.py",
        "core/ai/eval/eval_cases.json",
        "compliance/trae/rules/rules_library/rule_001_verificacion.md",
        "compliance/trae/rules/rules_library/rule_002_docs_vivos.md",
        "audit/",
    ]
    existing = [p for p in key_paths if (root / p).exists()]

    strengths = [
        "GitOps como fuente de verdad: cambios trazables en repo + automatización reproducible.",
        "Evidencia obligatoria: los workflows generan outputs en `audit/` con `run_id` y artefactos.",
        "Docs vivas: estructura modular en `core/docs/` y navegación gestionada por `mkdocs.yml`.",
        "Automatización operativa amplia: `.github/workflows/` cubre CI, auditorías, reports y operaciones.",
        "Agente integrado en Issues: responder y evaluar respuestas con workflows dedicados.",
        "Quality loop humano: feedback `/feedback good|bad` que deja evidencia y facilita PRs.",
        "Normativa/guardrails explícitos: reglas en `compliance/` que actúan como quality gate.",
        "Patrones consistentes de verificación: linters, checks y ejecución controlada antes de ‘Done’."
    ]

    desc_lines = [
        "Ka0s es una plataforma operativa orientada a GitOps para estandarizar y automatizar operaciones técnicas.",
        "El repositorio es la fuente de verdad: workflows, scripts, docs y reglas conviven en un mismo lugar.",
        "Su núcleo vive en `core/`, donde se agrupan piezas reutilizables y lógica compartida.",
        "La documentación es viva y modular en `core/docs/`.",
        "La navegación y publicación del portal se gobierna desde `mkdocs.yml`.",
        "Las automatizaciones se implementan principalmente en `.github/workflows/`.",
        "Las ejecuciones dejan evidencia en `audit/` para trazabilidad y auditoría.",
        "Ka0s incorpora un agente que interactúa en Issues para responder preguntas y acelerar tareas.",
        "El agente se ejecuta mediante workflows como `kaos-agent-issue-responder.yaml`.",
        "La calidad se refuerza con evaluación continua y casos en `core/ai/eval/`.",
        "El loop humano se cierra con feedback explícito y evidencias versionadas.",
        "Las reglas y políticas se documentan en `compliance/` para evitar desviaciones.",
        "El enfoque prioriza verificaciones mínimas y repetibles antes de dar cambios por finalizados.",
        "El diseño favorece la mantenibilidad separando dominio, automatización, documentación y auditoría.",
        "El resultado es un sistema coherente para operar, auditar y evolucionar la plataforma con seguridad."
    ]

    parts: List[str] = []
    parts.append("## Puntos fuertes de Ka0s")
    for s in strengths[:8]:
        parts.append(f"- {s}")
    parts.append("")
    parts.append("## Descripción (15 líneas)")
    parts.extend(desc_lines)
    parts.append("")
    parts.append("## Referencias en el repo")
    for p in existing[:12]:
        parts.append(f"- `{p}`")
    return "\n".join(parts).strip() + "\n"


def answer_repo_directory_overview(query: str, repo_root: str) -> str:
    q = query.lower()
    intent = any(k in q for k in [
        "directorio",
        "carpeta",
        "qué hay en",
        "que hay en",
        "qué contiene",
        "que contiene",
        "contiene",
        "para qué sirve",
        "para que sirve",
        "sirve",
        "explícame",
        "explicame",
        "estructura",
    ])
    if not intent:
        return ""

    root = Path(repo_root)

    def normalize_path(s: str) -> str:
        p = s.strip().strip("`\"'[](){} ")
        p = p.replace("\\", "/")
        while p.startswith("./"):
            p = p[2:]
        while p.endswith("/"):
            p = p[:-1]
        return p

    def should_ignore_dir(path: Path) -> bool:
        ignore = {
            ".git",
            ".venv",
            "node_modules",
            "__pycache__",
            ".pytest_cache",
            ".mypy_cache",
            ".ruff_cache",
            ".idea",
            ".vscode",
        }
        return any(part in ignore for part in path.parts)

    if any(k in q for k in [
        "lista todos los directorios",
        "listar todos los directorios",
        "árbol de directorios",
        "arbol de directorios",
        "estructura completa",
        "no te dejes ninguno",
    ]):
        count = 0
        try:
            count = sum(1 for p in root.rglob("*") if p.is_dir() and not should_ignore_dir(p))
        except Exception:
            count = 0
        return "\n".join([
            "## Directorios del repo (árbol completo)",
            "- Referencia: `core/docs/ka0s_repo_directories_tree/01_tree.md`.",
            "- Generación: `python .github/scripts/generate-repo-directories-tree.py`. ",
            f"- Total directorios (sin ignorados): {count}.",
            "",
            "Pide un directorio concreto por ruta (ej: `core/b2b/core-services/itop/`) y te saco propósito + top de subdirectorios/archivos.",
            "",
        ]).strip() + "\n"

    def describe_directory(rel_dir: str) -> str:
        rel_dir = normalize_path(rel_dir)
        p = root / rel_dir
        if not p.exists() or not p.is_dir() or should_ignore_dir(p):
            return ""

        purpose = "Directorio del repositorio."
        if rel_dir == "audit" or rel_dir.startswith("audit/"):
            purpose = "Evidencia y artefactos de ejecución (outputs de workflows y auditorías)."
        elif rel_dir == ".github" or rel_dir.startswith(".github/"):
            purpose = "Automatización del repo (workflows, actions, scripts y templates)."
        elif rel_dir == "core/b2b" or rel_dir.startswith("core/b2b/"):
            purpose = "Despliegues de servicios core (Kubernetes)."
        elif rel_dir == "core/ai" or rel_dir.startswith("core/ai/"):
            purpose = "Agente (inferencia), evaluación (regresión) y memoria/ingest."
        elif rel_dir == "core" or rel_dir.startswith("core/"):
            purpose = "Núcleo funcional (IA/agente, automatización, despliegues, configuración y docs)."
        elif rel_dir == "compliance" or rel_dir.startswith("compliance/"):
            purpose = "guardrails y estándares (quality gate) del proyecto."
        elif rel_dir == "bin" or rel_dir.startswith("bin/"):
            purpose = "utilidades locales y bootstrap."

        dirs = sorted([c.name for c in p.iterdir() if c.is_dir() and not should_ignore_dir(c)])
        files = sorted([c.name for c in p.iterdir() if c.is_file()])

        key_files: list[str] = []
        for fn in ["README.md", "readme.md", "mkdocs.yml", "kustomization.yaml", "kustomization.yml"]:
            if fn in files:
                key_files.append(fn)
        for fn in files:
            if fn in key_files:
                continue
            if fn.endswith((".yml", ".yaml", ".py", ".sh", ".md", ".json")):
                key_files.append(fn)
            if len(key_files) >= 12:
                break

        extra_paths: list[str] = []
        if rel_dir == "compliance":
            for ep in ["compliance/trae/rules", "compliance/trae/skills"]:
                if (root / ep).exists():
                    extra_paths.append(ep + "/")
        if rel_dir == "core/ai":
            for ep in [
                "core/ai/inference/query.py",
                "core/ai/eval/run_eval.py",
                "core/ai/eval/suites/",
                "core/ai/memory/",
            ]:
                if (root / ep.rstrip("/")).exists():
                    extra_paths.append(ep)
        if rel_dir == "core/b2b":
            for ep in ["core/b2b/core-services/"]:
                if (root / ep.rstrip("/")).exists():
                    extra_paths.append(ep)

        out: list[str] = []
        out.append(f"## Directorio: {rel_dir}")
        out.append(f"- Propósito: {purpose}")
        if extra_paths:
            out.append("- Rutas clave:")
            for ep in extra_paths[:18]:
                out.append(f"  - `{ep}`")
        if dirs:
            out.append("- Subdirectorios (top):")
            for d in dirs[:18]:
                out.append(f"  - `{rel_dir}/{d}/`")
        if key_files:
            out.append("- Archivos clave (top):")
            for f in key_files[:18]:
                out.append(f"  - `{rel_dir}/{f}`")
        return "\n".join(out).strip()

    targets: list[str] = []

    raw = query.replace("\\", "/")
    candidates = re.findall(r"(?:\.?[A-Za-z0-9._-]+/)+[A-Za-z0-9._-]+/?", raw)
    candidates.extend(re.findall(r"\b(?:\.github|audit|bin|core|compliance)(?:/)?\b", raw))
    for c in candidates:
        n = normalize_path(c)
        if not n:
            continue
        if (root / n).exists() and (root / n).is_dir() and not should_ignore_dir(root / n):
            targets.append(n)

    if not targets:
        for k in [".github", "audit", "core", "compliance", "bin"]:
            if k in q:
                targets.append(k)

    blocks: list[str] = []
    for t in dict.fromkeys(targets):
        block = describe_directory(t)
        if block:
            blocks.append(block)

    return "\n\n".join(blocks).strip() + "\n" if blocks else ""


def answer_agent_capabilities(query: str, repo_root: str) -> str:
    q = query.lower()
    if not any(k in q for k in [
        "capacidad",
        "capacidades",
        "habilidad",
        "habilidades",
        "qué puedes hacer",
        "que puedes hacer",
        "capabilities",
        "acciones",
    ]):
        return ""

    root = Path(repo_root)
    reg_path = root / "core" / "ai" / "capabilities" / "registry.json"
    if not reg_path.exists():
        return ""

    try:
        payload = json.loads(read_text_file(reg_path, max_chars=120000) or "{}")
    except Exception:
        return ""

    caps = payload.get("capabilities") if isinstance(payload, dict) else None
    if not isinstance(caps, list) or not caps:
        return ""

    parts: List[str] = []
    parts.append("## Capacidades del Ka0s Agent")
    parts.append("- Registro: `core/ai/capabilities/registry.json`")
    parts.append("")
    for c in caps[:12]:
        if not isinstance(c, dict):
            continue
        cid = c.get("id")
        name = c.get("name")
        status = c.get("status")
        if cid and name:
            s = f"{name}"
            if status:
                s += f" (`{status}`)"
            parts.append(f"- `{cid}`: {s}")
    parts.append("")
    parts.append("### Cómo extenderlo")
    parts.append("- Añade una capability con `id`, `entrypoints`, `evidence` y `guardrails`.")
    parts.append("- Crea docs en `core/docs/<modulo>/00_main.md` y agrega casos en `core/ai/eval/eval_cases.json`.")
    return "\n".join(parts).strip() + "\n"


def answer_agent_vision(query: str, repo_root: str) -> str:
    q = query.lower()
    if not any(k in q for k in [
        "visión",
        "vision",
        "visionario",
        "futurista",
        "futuro",
        "roadmap",
        "siguiente nivel",
        "next level",
    ]):
        return ""

    root = Path(repo_root)
    doc = root / "core" / "docs" / "ka0s_agent_future" / "00_main.md"
    if not doc.exists():
        return ""

    parts: List[str] = []
    parts.append("## Visión (Ka0s Agent)")
    parts.append("- North Star: operador técnico autónomo con evidencia y trazabilidad.")
    parts.append("- Ruta: robustez -> memoria -> operación -> autonomía supervisada.")
    parts.append("")
    parts.append("### Documento")
    parts.append("- `core/docs/ka0s_agent_future/00_main.md`")
    parts.append("")
    parts.append("### Próxima apuesta técnica")
    parts.append("- Router de modelos + citación obligatoria + evaluación continua como quality gate.")
    return "\n".join(parts).strip() + "\n"


def route_deterministic_answer(query: str, repo_root: str) -> str:
    for fn in [
        answer_agent_vision,
        answer_agent_capabilities,
        answer_project_onboarding,
        answer_platform_strengths_and_description,
        answer_repo_directory_overview,
        answer_docs_howto,
        answer_agent_automation_howto,
        answer_from_trae_policies,
        answer_itil_gate,
        answer_flow_discovery,
    ]:
        out = fn(query, repo_root)
        if out:
            return out
    return ""

def main():
    parser = argparse.ArgumentParser(description="Ka0s Agent Inference CLI")
    parser.add_argument("query", type=str, help="The question to ask the agent")
    parser.add_argument("--offline", action="store_true", help="Disable DB/LLM calls and answer using repo/rules only")
    args = parser.parse_args()
    
    query = args.query
    logger.info(f"Processing query: {query}")

    repo_root = os.getenv("GITHUB_WORKSPACE") or os.getcwd()
    deterministic_answer = route_deterministic_answer(query, repo_root)
    if deterministic_answer:
        print(deterministic_answer)
        return

    if args.offline:
        trae_context = load_trae_context(query, repo_root)
        repo_context = build_repo_context(query, repo_root=repo_root, max_files=8)
        if repo_context or trae_context:
            sources = [c.get("source") for c in (repo_context + trae_context) if c.get("source")]
            sources = [s for s in sources if isinstance(s, str)]
            parts = [
                "## Modo offline",
                "- No se ha usado DB/LLM; respuesta basada en repo/rules.",
            ]
            if sources:
                parts.append("\n## Contexto localizado")
                parts.extend([f"- `{s}`" for s in sources[:12]])
            parts.append("\n" + build_verification_plan(query, repo_root=repo_root).strip())
            print("\n".join(parts).strip() + "\n")
            return
        print(build_verification_plan(query, repo_root=repo_root))
        return

    include_trae_context = bool(
        is_query_about_rules_or_skills(query)
        or is_itil_question(query)
        or is_kubernetes_topic(query)
    )
    trae_context = load_trae_context(query, repo_root) if include_trae_context else []
    if should_return_file_list(query) and not is_query_about_rules_or_skills(query):
        prefer = None
        if is_flow_question(query):
            prefer = [".github/workflows/", "core/monitoring/", "core/docs/", "core/b2b/"]
        matches = find_repo_files(query, repo_root=repo_root, prefer_prefixes=prefer)
        if matches:
            print("Ficheros relevantes encontrados en el repositorio:\n" + "\n".join([f"- {m}" for m in matches]))
            return
    
    # 1. Embed Query
    query_embedding = generate_embedding(query)
    if not query_embedding:
        repo_context = build_repo_context(query, repo_root=repo_root)
        if repo_context or (trae_context and is_query_about_rules_or_skills(query)):
            answer = generate_answer(query, repo_context + trae_context, repo_root=repo_root)
            print(answer)
            return
        print(build_verification_plan(query, repo_root=repo_root))
        return

    # 2. Retrieve Context
    context = search_context(query_embedding)
    logger.info(f"Retrieved {len(context)} relevant context chunks.")

    if not context or context[0]["similarity"] < 0.4:
        repo_context = build_repo_context(query, repo_root=repo_root)
        if repo_context:
            answer = generate_answer(query, repo_context + trae_context, repo_root=repo_root)
            print(answer)
            return
        if trae_context and is_query_about_rules_or_skills(query):
            answer = generate_answer(query, trae_context, repo_root=repo_root)
            print(answer)
            return
        print(build_verification_plan(query, repo_root=repo_root))
        return
    
    # 3. Generate Answer
    answer = generate_answer(query, context + trae_context, repo_root=repo_root)
    
    # Output solely the answer for the caller to capture
    print(answer)

if __name__ == "__main__":
    main()
