# scheduler.py (Ejemplo)
import croniter
import subprocess

def add_cron_job(task_id, schedule, command):
    # Añadir entrada a crontab
    subprocess.run(f'(crontab -l ; echo "{schedule} {command}") | crontab -', shell=True)