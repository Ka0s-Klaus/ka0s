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

    url = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/generate"
    
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
    return any(k in q for k in [
        "itil",
        "cab",
        "rfc",
        "ticket",
        "cmdb",
        "itop",
        "cambio",
        "producción",
        "produccion",
    ])


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
    prefer_prefixes: Optional[List[str]] = None
    if is_flow_question(query):
        prefer_prefixes = [
            ".github/workflows/",
            "core/monitoring/",
            "core/docs/",
            "core/b2b/",
        ]
    file_paths = find_repo_files(query, repo_root=repo_root, max_hits=60, prefer_prefixes=prefer_prefixes)
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
    root = Path(repo_root)
    tokens = [t for t in re.split(r"\W+", query.lower()) if len(t) >= 4]
    tokens = [t for t in tokens if t not in {"existe", "existan", "flujo", "workflow", "workflows", "github", "actions", "pipeline"}]

    relevant_scored: List[tuple[int, str]] = []
    workflows_dir = root / ".github" / "workflows"
    if workflows_dir.exists() and workflows_dir.is_dir():
        for p in sorted(workflows_dir.glob("*.yml")):
            name = p.name.lower()
            content = read_text_file(p, max_chars=24000).lower()
            if not tokens:
                relevant_scored.append((0, str(p.relative_to(root)).replace("\\", "/")))
                continue
            score = sum(1 for t in tokens if (t in name or t in content))
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


def route_deterministic_answer(query: str, repo_root: str) -> str:
    for fn in [answer_from_trae_policies, answer_itil_gate, answer_flow_discovery]:
        out = fn(query, repo_root)
        if out:
            return out
    return ""

def main():
    parser = argparse.ArgumentParser(description="Ka0s Agent Inference CLI")
    parser.add_argument("query", type=str, help="The question to ask the agent")
    args = parser.parse_args()
    
    query = args.query
    logger.info(f"Processing query: {query}")

    repo_root = os.getenv("GITHUB_WORKSPACE") or os.getcwd()
    deterministic_answer = route_deterministic_answer(query, repo_root)
    if deterministic_answer:
        print(deterministic_answer)
        return
    trae_context = load_trae_context(repo_root)
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
