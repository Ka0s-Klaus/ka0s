# add-doc-to-db.py - Cargador de Documentos MongoDB

## 🔍 Propósito

Carga masiva de archivos en MongoDB organizados por:

- Bases de datos: Directorios del filesystem
- Colecciones: Extensiones de archivo

## 🛠️ Requisitos Técnicos

```python
# Versiones compatibles
Python >= 3.8
PyMongo >= 3.12

## 🚀 Ejecución Básica
```bash
export REPORT_FILENAME_DB='informe.json'
export REPORT_PATH='./logs'
export REPORT_SCAN='./audit'
export MONGO_SUPERUSER_CONNECTION='mongodb+srv://user:pass@cluster.example.com/admin?tls=true'
export REPORT_SCAN='/ruta/directorio'
python3 add-doc-to-db.py

## 🧪 Casos de Prueba
| Escenario | Comando | Salida Esperada |
|----------|---------|-----------------|
| Carga exitosa | `python3 add-doc-to-db.py` | `✅ Proceso completado: X documentos insertados` |
| Directorio vacío | `python3 add-doc-to-db.py` | `❌ Error: No se encontraron archivos` |
| Permisos insuficientes | `python3 add-doc-to-db.py` | `❌ Error de operación: not authorized` |
| Eliminación de archivos | `python3 add-doc-to-db.py` | `[DEBUG] Archivos eliminados en: ...` |

## 📊 Esquema del Reporte JSON

Cada ejecución genera un fichero JSON en `REPORT_PATH` (por defecto `audit/mongodb/`) con el siguiente esquema base orientado a AIOps:

```json
{
  "type": "mongo_document_loader",
  "source": "/ruta/absoluta/al/directorio/scan",
  "timestamp": "2024-03-18T12:34:56.789Z",
  "databases_created": 2,
  "collections_created": 5,
  "documents_inserted": 342,
  "errors": []
}
```

- `type`: Identifica el tipo de proceso que ha generado el reporte.
- `source`: Ruta absoluta del directorio escaneado (`REPORT_SCAN`).
- `timestamp`: Momento de inicio de la ejecución.
- `databases_created`: Número de bases de datos nuevas creadas.
- `collections_created`: Número de colecciones nuevas creadas.
- `documents_inserted`: Total de documentos insertados.
- `errors`: Lista de errores encontrados durante el proceso (si los hay).

## 🛑 Códigos de Error

| Código | Significado | Acción Recomendada |
|--------|-------------|---------------------|
| 1 | Variable faltante | Verificar variables de entorno |
| 2 | Error conexión | Chequear URI MongoDB |
| 3 | Error operación | Verificar permisos |
| 4 | Error inesperado | Verificar logs detallados |

## 🔄 Integración con GitHub Actions

```yaml
- name: Cargar Documentos
  env:
    MONGO_SUPERUSER_CONNECTION: ${{ secrets.PROD_MONGO_URI }}
    REPORT_SCAN: './audit'
  run: python3 core/database/scripts/add-doc-to-db.py
```

## 🔒 Consideraciones de Seguridad

- 🔐 Acceso de solo escritura para el usuario
- 📁 Validar rutas de escaneo
- 🧮 Usar hashes MD5 para evitar duplicados

## 📚 Recursos

- [MongoDB Bulk Writes](https://www.mongodb.com/docs/manual/core/bulk-write-operations/)
- [PyMongo Indexing](https://pymongo.readthedocs.io/en/stable/tutorial.html#indexing)


## ⚠️ Excepciones
- Los archivos README.md en cualquier directorio **no serán eliminados**
- Los archivos con extensión .md se almacenarán en la colección `col_md`
