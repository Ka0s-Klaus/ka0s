import os
import datetime
import argparse
from pymongo import MongoClient


def generate_markdown_report(data, date_str):
    report = f"# Informe Diario de Lead Time - {date_str}\n\n"
    report += (
        f"**Generado:** "
        f"{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
    )
    
    if not data:
        report += "No se encontraron ejecuciones para este periodo.\n"
        return report

    report += (
        "| Workflow | Ejecuciones | Éxito (%) | Avg Lead Time (min) "
        "| Max Lead Time (min) |\n"
    )
    report += "|---|---|---|---|---|\n"

    for item in data:
        name = item['_id'] or "Desconocido"
        count = item['count']
        success_rate = round((item['success_count'] / count) * 100, 1)
        avg_time = round(item['avg_time'], 2)
        max_time = round(item['max_time'], 2)
        
        report += (
            f"| {name} | {count} | {success_rate}% | {avg_time} "
            f"| {max_time} |\n"
        )
    
    report += (
        "\n\n*Nota: Lead Time calculado desde la creación del workflow hasta "
        "su finalización.*\n"
    )
    return report


def main():
    parser = argparse.ArgumentParser(
        description='Generar reporte de Lead Time desde MongoDB'
    )
    parser.add_argument(
        '--date', type=str, help='Fecha del reporte (YYYY-MM-DD)',
        default=datetime.date.today().strftime('%Y-%m-%d')
    )
    parser.add_argument(
        '--output', type=str, help='Ruta de salida del archivo MD',
        required=True
    )
    args = parser.parse_args()

    # Configuración MongoDB
    try:
        conn_str = os.environ['MONGO_SUPERUSER_CONNECTION']
    except KeyError:
        print("❌ Error: Variable MONGO_SUPERUSER_CONNECTION no definida")
        exit(1)

    client = MongoClient(conn_str)
    db = client['inspector']
    collection = db['col_json']

    # Rango de fechas (Todo el día seleccionado)
    start_date = datetime.datetime.strptime(args.date, '%Y-%m-%d')
    end_date = start_date + datetime.timedelta(days=1)

    print(f"Generando reporte para: {start_date.date()}")

    # Pipeline de Agregación
    pipeline = [
        {
            "$match": {
                "import_date": {
                    "$gte": start_date,
                    "$lt": end_date
                },
                "lead_time_minutes": {"$exists": True}
            }
        },
        {
            "$group": {
                "_id": "$data.name",
                "count": {"$sum": 1},
                "success_count": {
                    "$sum": {
                        "$cond": [
                            {"$eq": ["$data.conclusion", "success"]}, 1, 0
                        ]
                    }
                },
                "avg_time": {"$avg": "$lead_time_minutes"},
                "max_time": {"$max": "$lead_time_minutes"}
            }
        },
        {
            "$sort": {"avg_time": -1}
        }
    ]

    results = list(collection.aggregate(pipeline))
    
    # Generar Markdown
    markdown_content = generate_markdown_report(results, args.date)
    
    # Guardar archivo
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    with open(args.output, 'w') as f:
        f.write(markdown_content)
    
    print(f"✅ Reporte guardado en: {args.output}")
    client.close()


if __name__ == "__main__":
    main()
