import os
import json
import requests
import argparse
from datetime import datetime, timedelta

def main():
    parser = argparse.ArgumentParser(description='Export iTop data to JSON')
    parser.add_argument('--date', help='Date to export (YYYY-MM-DD)', default=None)
    parser.add_argument('--output-dir', help='Output directory', default='audit/itop')
    args = parser.parse_args()

    # Configuración desde variables de entorno
    ITOP_URL = os.environ.get('ITOP_URL')
    ITOP_USER = os.environ.get('ITOP_USER')
    ITOP_PASSWORD = os.environ.get('ITOP_PASSWORD')
    
    if not ITOP_URL or not ITOP_USER or not ITOP_PASSWORD:
        print("::error::Faltan variables de entorno ITOP_URL, ITOP_USER o ITOP_PASSWORD")
        exit(1)

    # Calcular fechas
    if args.date:
        target_date = datetime.strptime(args.date, '%Y-%m-%d')
    else:
        # Por defecto: Ayer
        target_date = datetime.now() - timedelta(days=1)
    
    date_str = target_date.strftime('%Y-%m-%d')
    start_time = target_date.strftime('%Y-%m-%d 00:00:00')
    end_time = target_date.strftime('%Y-%m-%d 23:59:59')
    
    print(f"Exportando datos para la fecha: {date_str}")
    print(f"Rango: {start_time} a {end_time}")

    targets = [
        {"class": "UserRequest", "filename": f"requerimientos_{date_str}.json"},
        {"class": "Incident", "filename": f"incidentes_{date_str}.json"},
        {"class": "Problem", "filename": f"problemas_{date_str}.json"},
        {"class": "Change", "filename": f"cambios_{date_str}.json"}
    ]

    os.makedirs(args.output_dir, exist_ok=True)

    for target in targets:
        class_name = target["class"]
        filename = target["filename"]
        file_path = os.path.join(args.output_dir, filename)
        
        # OQL: start_date para UserRequest/Incident/Problem/Change
        oql = f"SELECT {class_name} WHERE start_date >= '{start_time}' AND start_date <= '{end_time}'"
        
        payload = {
            "operation": "core/get",
            "class": class_name,
            "key": oql,
            "output_fields": "*",
            "version": "1.3"
        }
        
        try:
            # Desactivar warnings de SSL inseguro para logs más limpios
            requests.packages.urllib3.disable_warnings()
            
            response = requests.post(
                f"{ITOP_URL}/webservices/rest.php",
                auth=(ITOP_USER, ITOP_PASSWORD),
                data={"json_data": json.dumps(payload)},
                verify=False
            )
            
            if response.status_code == 200:
                data = response.json()
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                
                count = len(data.get('objects', {})) if data.get('objects') else 0
                print(f"✅ {class_name}: {count} registros guardados en {filename}")
                
            else:
                print(f"❌ Error HTTP {response.status_code} al consultar {class_name}")
                print(response.text)
                
        except Exception as e:
            print(f"❌ Excepción al procesar {class_name}: {str(e)}")

if __name__ == "__main__":
    main()
