import os
import requests
from datetime import datetime
from pymongo import MongoClient
from dotenv import load_dotenv
import time

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
        page += 1
    return results

def get_traffic_data(endpoint):
    url = f"https://api.github.com/repos/{ORG}/{REPO}/traffic/{endpoint}"
    response = requests.get(url, headers=HEADERS)
    return response.json() if response.status_code == 200 else {}

def save_to_mongo(data):
    client = MongoClient(MONGO_URI)
    db = client.github_stats
    collection = db.repo_metrics
    collection.insert_one(data)
    client.close()

if __name__ == "__main__":
    stats = {
        "timestamp": datetime.utcnow(),
        "org": ORG,
        "repo": REPO
    }

    try:
        # 1. Datos generales
        stats["general"] = get_github_data("")
        
        # 2. Commits (todos los históricos)
        stats["commits"] = get_paginated_data("commits")
        
        # 3. Issues (abiertos y cerrados)
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
        
        # 6. Releases (todas)
        stats["releases"] = get_paginated_data("releases")
        
        # 7. Tráfico
        stats["traffic"] = {
            "views": get_traffic_data("views"),
            "clones": get_traffic_data("clones"),
            "popular_paths": get_traffic_data("popular/paths"),
            "referrers": get_traffic_data("popular/referrers")
        }
        
        # 8. Lenguajes (nueva métrica)
        stats["languages"] = get_github_data("languages")
        
        # 9. Participación (nueva métrica)
        stats["participation"] = get_github_data("stats/participation")
        
    except Exception as e:
        print(f"Error recolectando datos: {str(e)}")
        stats["error"] = str(e)

    save_to_mongo(stats)
    print("✅ Datos guardados en MongoDB!")