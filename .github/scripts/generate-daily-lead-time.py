import os
import pymongo
from datetime import datetime, timedelta

# Configuration
MONGO_URI = os.environ.get("MONGO_CONNECTION_STRING")
REPORT_DIR = "audit/reports/lead-time"

def format_duration(seconds):
    """Format duration in seconds to a human-readable string."""
    if not seconds: return "N/A"
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    if h > 0:
        return f"{int(h)}h {int(m)}m {int(s)}s"
    elif m > 0:
        return f"{int(m)}m {int(s)}s"
    else:
        return f"{s:.2f}s"

def main():
    if not MONGO_URI:
        print("❌ Error: MONGO_CONNECTION_STRING environment variable not set.")
        exit(1)

    try:
        client = pymongo.MongoClient(MONGO_URI)
        db = client["inspector"]
        col = db["col_json"]
        
        # Calculate time range for the report (Today)
        today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
        tomorrow = today + timedelta(days=1)
        
        print(f"Querying MongoDB 'inspector.col_json' for date: {today.date()}...")
        
        # Query documents imported today
        # Note: Ideally we query by 'data.createdAt', but 'import_date' is safer index-wise for now
        query = {
            "import_date": {"$gte": today, "$lt": tomorrow}
        }
        
        cursor = col.find(query)
        stats = []
        
        for doc in cursor:
            data = doc.get('data', {})
            duration = doc.get('duration_seconds', 0)
            
            # If duration wasn't pre-calculated (old records), try to calc on the fly
            if not duration and 'createdAt' in data and 'updatedAt' in data:
                try:
                    start = datetime.fromisoformat(data['createdAt'].replace('Z', '+00:00'))
                    end = datetime.fromisoformat(data['updatedAt'].replace('Z', '+00:00'))
                    duration = (end - start).total_seconds()
                except:
                    duration = 0

            stats.append({
                'workflow': data.get('name', 'Unknown'),
                'status': data.get('conclusion', 'unknown'),
                'duration': duration,
                'run_id': data.get('databaseId', 'N/A'),
                'timestamp': doc.get('import_date')
            })

        # Generate Markdown Report
        os.makedirs(REPORT_DIR, exist_ok=True)
        report_file = os.path.join(REPORT_DIR, f"{today.strftime('%Y-%m-%d')}-lead-time.md")
        
        # Sort by duration (descending) to highlight slow workflows
        stats.sort(key=lambda x: x['duration'], reverse=True)
        
        total_runs = len(stats)
        if total_runs > 0:
            avg_duration = sum(s['duration'] for s in stats) / total_runs
            success_count = len([s for s in stats if s['status'] == 'success'])
            success_rate = (success_count / total_runs) * 100
        else:
            avg_duration = 0
            success_rate = 0

        with open(report_file, 'w') as md:
            md.write(f"# ⏱️ Daily Lead Time Report - {today.strftime('%Y-%m-%d')}\n\n")
            
            # KPI Cards
            md.write("## 📊 KPIs\n")
            md.write(f"- **Total Executions**: {total_runs}\n")
            md.write(f"- **Avg Lead Time**: {format_duration(avg_duration)}\n")
            md.write(f"- **Success Rate**: {success_rate:.1f}%\n\n")
            
            # Table
            md.write("## 📝 Execution Log (Sorted by Duration)\n")
            md.write("| Workflow | Status | Lead Time | Run ID |\n")
            md.write("|---|---|---|---|\n")
            
            for s in stats:
                status_icon = "✅" if s['status'] == 'success' else "❌"
                md.write(f"| {s['workflow']} | {status_icon} {s['status']} | {format_duration(s['duration'])} | {s['run_id']} |\n")

        print(f"✅ Report generated: {report_file}")
        
    except Exception as e:
        print(f"❌ Error generating report: {e}")
        exit(1)

if __name__ == "__main__":
    main()
