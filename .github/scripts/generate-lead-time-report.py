import os
import json
import glob
from datetime import datetime

# Configuration
INSPECTOR_PATH = "audit/inspector"
REPORT_DIR = "audit/reports/lead-time"

def parse_time(t_str):
    """Parse ISO format time string, handling 'Z' for UTC."""
    if not t_str:
        return None
    try:
        # Handle Z for UTC which might not be supported in older python versions
        return datetime.fromisoformat(t_str.replace('Z', '+00:00'))
    except ValueError:
        return None

def format_duration(seconds):
    """Format duration in seconds to a human-readable string."""
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    if h > 0:
        return f"{int(h)}h {int(m)}m {int(s)}s"
    elif m > 0:
        return f"{int(m)}m {int(s)}s"
    else:
        return f"{s:.2f}s"

def main():
    # Create report directory if it doesn't exist
    os.makedirs(REPORT_DIR, exist_ok=True)
    
    today = datetime.now().strftime("%Y-%m-%d")
    report_file = os.path.join(REPORT_DIR, f"{today}-lead-time.md")
    
    print(f"Scanning for JSON files in {INSPECTOR_PATH}...")
    files = glob.glob(os.path.join(INSPECTOR_PATH, "*.json"))
    stats = []

    for f in files:
        try:
            with open(f, 'r') as json_file:
                data = json.load(json_file)
                
            # Extract key metrics
            start_str = data.get('createdAt') or data.get('created_at')
            end_str = data.get('updatedAt') or data.get('updated_at')
            
            start = parse_time(start_str)
            end = parse_time(end_str)
            
            if start and end:
                duration = (end - start).total_seconds()
                stats.append({
                    'file': os.path.basename(f),
                    'workflow': data.get('name', 'Unknown'),
                    'status': data.get('conclusion', 'unknown'),
                    'duration': duration,
                    'start': start,
                    'run_id': data.get('databaseId') or 'N/A'
                })
        except Exception as e:
            print(f"Skipping {f}: {e}")

    # Sort by start time (newest first)
    stats.sort(key=lambda x: x['start'], reverse=True)

    # Calculate Summary Metrics
    total_runs = len(stats)
    if total_runs > 0:
        avg_duration = sum(s['duration'] for s in stats) / total_runs
        success_rate = len([s for s in stats if s['status'] == 'success']) / total_runs * 100
    else:
        avg_duration = 0
        success_rate = 0

    # Generate Markdown
    with open(report_file, 'w') as md:
        md.write(f"# ⏱️ Daily Lead Time Report - {today}\n\n")
        
        # Summary Section
        md.write("## 📊 Summary\n")
        md.write(f"- **Total Executions**: {total_runs}\n")
        md.write(f"- **Average Lead Time**: {format_duration(avg_duration)}\n")
        md.write(f"- **Success Rate**: {success_rate:.1f}%\n\n")
        
        # Detailed Table
        md.write("## 📝 Execution Details\n")
        md.write("| Workflow | Status | Start Time | Duration | Lead Time (s) |\n")
        md.write("|---|---|---|---|---|\n")
        
        for s in stats:
            status_icon = "✅" if s['status'] == 'success' else "❌"
            md.write(f"| {s['workflow']} | {status_icon} {s['status']} | {s['start'].strftime('%H:%M:%S')} | {format_duration(s['duration'])} | {s['duration']:.2f} |\n")

    print(f"✅ Report generated successfully: {report_file}")

if __name__ == "__main__":
    main()
