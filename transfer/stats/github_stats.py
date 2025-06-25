import os
import requests
from datetime import datetime
from pymongo import MongoClient
from dotenv import load_dotenv

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

def get_github_data(url_suffix):
    url = f"https://api.github.com/repos/{ORG}/{REPO}/{url_suffix}"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json()

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

# Métricas a recolectar
METRICS = {
    "general": "",
    "commits": "commits?per_page=1",
    "issues": "issues?state=all&per_page=1",
    "pulls": "pulls?state=all&per_page=1",
    "contributors": "contributors",
    "releases": "releases/latest",
    "traffic_views": "views",
    "traffic_clones": "clones",
    "popular_paths": "popular/paths",
    "referrers": "popular/referrers"
}

if __name__ == "__main__":
    stats = {
        "timestamp": datetime.utcnow(),
        "org": ORG,
        "repo": REPO
    }

    for metric, endpoint in METRICS.items():
        try:
            if "traffic" in metric:
                data = get_traffic_data(endpoint)
            else:
                data = get_github_data(endpoint)
            
            stats[metric] = data
        except Exception as e:
            print(f"Error obteniendo {metric}: {str(e)}")
            stats[metric] = None

    save_to_mongo(stats)
    print("Datos guardados exitosamente!")