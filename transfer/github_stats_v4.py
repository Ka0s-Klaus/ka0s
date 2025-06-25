import os
import requests
from datetime import datetime, timedelta
from pymongo import MongoClient
from dotenv import load_dotenv
import time
from dateutil.parser import parse
from collections import defaultdict

load_dotenv()

# Configuración
ORG = os.getenv("ORG_NAME")
REPO = os.getenv("REPO_NAME")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
MONGO_URI = os.getenv("MONGO_URI")

HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def get_github_data(endpoint):
    """Obtiene datos de la API de GitHub"""
    url = f"https://api.github.com/repos/{ORG}/{REPO}/{endpoint}"
    response = requests.get(url, headers=HEADERS)
    
    # Manejo de rate limit
    if response.status_code == 403:
        reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
        sleep_time = max(0, reset_time - int(time.time()) + 5)
        print(f"Rate limit alcanzado. Durmiendo {sleep_time} segundos...")
        time.sleep(sleep_time)
        return get_github_data(endpoint)
    
    response.raise_for_status()
    return response.json()

def get_paginated_data(endpoint):
    """Obtiene datos paginados de la API de GitHub"""
    results = []
    page = 1
    while True:
        url = f"https://api.github.com/repos/{ORG}/{REPO}/{endpoint}?per_page=100&page={page}"
        response = requests.get(url, headers=HEADERS)
        
        # Manejo de rate limit
        if response.status_code == 403:
            reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
            sleep_time = max(0, reset_time - int(time.time()) + 5)
            print(f"Rate limit alcanzado. Durmiendo {sleep_time} segundos...")
            time.sleep(sleep_time)
            continue
            
        response.raise_for_status()
        data = response.json()
        if not data:
            break
        results.extend(data)
        
        # Verificar si hay más páginas
        if 'next' not in response.links:
            break
        page += 1
    return results

def get_traffic_data(endpoint):
    """Obtiene datos de tráfico del repositorio"""
    url = f"https://api.github.com/repos/{ORG}/{REPO}/traffic/{endpoint}"
    response = requests.get(url, headers=HEADERS)
    return response.json() if response.status_code == 200 else {}

def get_workflow_runs(workflow_id=None):
    """Obtiene ejecuciones de workflows"""
    endpoint = "actions/runs"
    if workflow_id:
        endpoint = f"actions/workflows/{workflow_id}/runs"
    
    return get_paginated_data(f"{endpoint}?per_page=100&status=completed")

def get_workflow_jobs(run_id):
    """Obtiene jobs de una ejecución de workflow"""
    return get_paginated_data(f"actions/runs/{run_id}/jobs?per_page=100")

def calculate_lead_time(run):
    """Calcula el tiempo total de ejecución de un workflow"""
    created = parse(run['created_at'])
    updated = parse(run['updated_at'])
    return (updated - created).total_seconds()

def get_code_changes():
    """Obtiene y calcula los cambios de código diarios"""
    # Obtener todos los commits
    commits = get_paginated_data("commits")
    
    # Agrupar cambios por día
    daily_changes = defaultdict(lambda: {
        "additions": 0,
        "deletions": 0,
        "commits": 0,
        "changed_files": 0
    })
    
    for commit in commits:
        try:
            # Obtener detalles completos del commit
            commit_details = get_github_data(f"commits/{commit['sha']}")
            stats = commit_details.get('stats', {})
            date = parse(commit['commit']['author']['date']).date()
            
            # Acumular estadísticas diarias
            daily_changes[date.isoformat()]['additions'] += stats.get('additions', 0)
            daily_changes[date.isoformat()]['deletions'] += stats.get('deletions', 0)
            daily_changes[date.isoformat()]['changed_files'] += len(commit_details.get('files', []))
            daily_changes[date.isoformat()]['commits'] += 1
            
        except Exception as e:
            print(f"Error procesando commit {commit['sha']}: {str(e)}")
    
    return dict(daily_changes)

def save_to_mongo(collection, data):
    """Guarda datos en MongoDB"""
    client = MongoClient(MONGO_URI)
    db = client.github_stats
    db[collection].insert_one(data)
    client.close()

if __name__ == "__main__":
    stats = {
        "timestamp": datetime.utcnow(),
        "org": ORG,
        "repo": REPO
    }

    try:
        # 1. Datos generales del repositorio
        stats["general"] = get_github_data("")
        
        # 2. Commits
        stats["commits"] = get_paginated_data("commits")
        
        # 3. Issues
        stats["issues"] = {
            "open": get_paginated_data("issues?state=open"),
            "closed": get_paginated_data("issues?state=closed")
        }
        
        # 4. Pull Requests
        stats["pull_requests"] = {
            "open": get_paginated_data("pulls?state=open"),
            "closed": get_paginated_data("pulls?state=closed"),
            "merged": get_paginated_data("pulls?state=closed&merged=true")
        }
        
        # 5. Contribuidores
        stats["contributors"] = get_paginated_data("contributors")
        
        # 6. Releases
        stats["releases"] = get_paginated_data("releases")
        
        # 7. Tráfico
        stats["traffic"] = {
            "views": get_traffic_data("views"),
            "clones": get_traffic_data("clones"),
            "popular_paths": get_traffic_data("popular/paths"),
            "referrers": get_traffic_data("popular/referrers")
        }
        
        # 8. Lenguajes
        stats["languages"] = get_github_data("languages")
        
        # 9. Participación
        stats["participation"] = get_github_data("stats/participation")
        
        # 10. Workflows
        workflows = get_github_data("actions/workflows")['workflows']
        workflow_metrics = []
        
        for workflow in workflows:
            workflow_id = workflow['id']
            runs = get_workflow_runs(workflow_id)
            
            # Solo procesar los últimos 30 días para evitar sobrecarga
            recent_runs = [
                run for run in runs 
                if parse(run['created_at']) > datetime.utcnow() - timedelta(days=30)
            ]
            
            for run in recent_runs:
                jobs = get_workflow_jobs(run['id'])
                job_metrics = []
                
                for job in jobs:
                    # Calcular duración del job
                    started_at = parse(job['started_at'])
                    completed_at = parse(job['completed_at'])
                    duration = (completed_at - started_at).total_seconds()
                    
                    job_metrics.append({
                        "job_id": job['id'],
                        "job_name": job['name'],
                        "started_at": job['started_at'],
                        "completed_at": job['completed_at'],
                        "duration_seconds": duration,
                        "conclusion": job['conclusion'],
                        "steps": len(job['steps'])
                    })
                
                # Calcular lead time del workflow
                lead_time = calculate_lead_time(run)
                
                workflow_metrics.append({
                    "workflow_id": workflow_id,
                    "workflow_name": workflow['name'],
                    "run_id": run['id'],
                    "run_number": run['run_number'],
                    "created_at": run['created_at'],
                    "updated_at": run['updated_at'],
                    "lead_time_seconds": lead_time,
                    "conclusion": run['conclusion'],
                    "trigger": run['event'],
                    "branch": run['head_branch'],
                    "jobs": job_metrics
                })
        
        stats["workflows"] = workflow_metrics
        
        # 11. Cambios diarios de código (nueva métrica)
        stats["daily_code_changes"] = get_code_changes()
        
    except Exception as e:
        print(f"Error recolectando datos: {str(e)}")
        stats["error"] = str(e)

    # Guardar en dos colecciones separadas
    save_to_mongo("repo_metrics", stats)
    print("✅ Datos del repositorio guardados en MongoDB!")
    
    # Guardar workflows en colección separada
    if "workflows" in stats:
        for workflow_run in stats["workflows"]:
            workflow_run["timestamp"] = datetime.utcnow()
            workflow_run["org"] = ORG
            workflow_run["repo"] = REPO
            save_to_mongo("workflow_metrics", workflow_run)
        print(f"✅ {len(stats['workflows'])} ejecuciones de workflows guardadas!")
    
    # Guardar cambios diarios de código en colección separada
    if "daily_code_changes" in stats:
        for date, changes in stats["daily_code_changes"].items():
            changes["date"] = date
            changes["org"] = ORG
            changes["repo"] = REPO
            changes["timestamp"] = datetime.utcnow()
            save_to_mongo("code_changes", changes)
        print(f"✅ {len(stats['daily_code_changes'])} días de cambios de código guardados!")