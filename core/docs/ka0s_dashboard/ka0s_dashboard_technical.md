# Descripción
Creación de páginas Web mediante ficheros json

# Requerimientos
1. Crear rama que empiece por la letra H.
2. Permisos para hacer push, pull, creación de ramas y poder ejecutar actions
3. Usar js, json y html 

# Pasos para creación de la Web
- En primer lugar clonaremos la rama a nuestro local para poder trabajar con ella.
- A continuacion deberemos establecer la estructura de la web en un JSON llamado **webs.json** ubicado en **core/web/data**, con la siguiente estructura de ejemplo (hay que tener presente que el título no puede tener espacios para que no de fallo al crear la carpeta de la estructura de la web con el nombre de dicho título):
```shell
{
    "title": "Tienda",
    "sections": [
        {
            "title": "inicio",
            "icon": "fa fa-home",
            "data": "data/productos_tienda.json",
            "datatemplate": "data/section1.json"
        },
        {
            "title": "ventas",
            "icon": "fa fa-ventas",
            "data": "data/ventas.json",
            "datatemplate": "data/section2.json"
        },

    ]
}
```
- El siguiente paso será copiar a la carpeta **core/web/data** los JSON con los datos que vamos a mostrar.
- A continuacion crearemos los archivos JSON de cada seccion en la **core/web/data** con el mismo nombre que hemos establecido en "datatemplate".
- Debemos copiar los archivos **navbar.html** de la carpeta **core/web/templates** y **orchestrator.js** de la carpeta **core/web/js** en nuestra estructura de carpetas.
- Ahora debemos configurar cada archivo JSON de las secciones indicando si queremos mostrar métricas, gráficos o tablas. Para ello veamos un código de  se una sección completa:
```
{
    "title": "Ventas",
    "description": "Dashboard de ventas, stock e ingresos de la tienda",
    "metricsColors": ["orange", "blue", "orange", "blue", "orange", "blue", "orange", "blue", "orange", "blue"],
    "templates": [
        {
            "type": "summary",
            "dataSource": "data/productos_tienda.json",
            "metrics": [
                {
                    "name": "totalArticulos",
                    "type": "count",
                    "title": "Total Artículos"
                },
                {
                    "name": "ventasTotales",
                    "type": "sum",
                    "title": "Ventas Totales",
                    "field": "ventas"
                },
                {
                    "name": "ingresosTotales",
                    "type": "sum",
                    "title": "Ingresos Totales",
                    "field": "ingresos",
                    "format": "currency"
                },
                {
                    "name": "stockTotal",
                    "type": "sum",
                    "title": "Stock Total",
                    "field": "stock"
                },
                {
                    "name": "productoMasVendido",
                    "type": "max",
                    "title": "Producto más vendido",
                    "field": "ventas",
                    "groupBy": "nombre"
                },
                {
                    "name": "categoriaMasVentas",
                    "type": "max",
                    "title": "Categoría con más ventas",
                    "field": "ventas",
                    "groupBy": "categoria"
                },
                {
                    "name": "mediaValoracion",
                    "type": "average",
                    "title": "Valoración media",
                    "field": "valoracion_media"
                },
                {
                    "name": "mediaReabastecimiento",
                    "type": "average",
                    "title": "Tiempo medio de reabastecimiento (días)",
                    "field": "tiempo_reabastecimiento"
                }
            ]
        },
        {
            "type": "graphic",
            "title": "Ventas por producto",
            "dataSource": "data/productos_tienda.json",
            "barColor": "green",
            "barBorderColor": "white",
            "xAxisLabel": "Producto",
            "yAxisLabel": "Ventas",
            "categoryField": "nombre",
            "valueField": "ventas",
            "chartTypes": ["bar"]
        },
        {
            "type": "graphic",
            "title": "Stock por categoría",
            "dataSource": "data/productos_tienda.json",
            "statusField": "categoria",
            "chartTypes": ["doughnut"]
        },
        {
            "type": "graphic",
            "title": "Ingresos por producto y disponibilidad de stock",
            "dataSource": "data/productos_tienda.json",
            "xAxisLabel": "Producto",
            "yAxisLabel": "Ingresos",
            "categoryField": "nombre",
            "statusField": "estado",
            "valueField": "ingresos"
        },
        {
            "type": "list",
            "title": "Listado de productos",
            "dataSource": "data/productos_tienda.json",
            "columns": [
                "id",
                "nombre",
                "precio",
                "ventas",
                "stock",
                "ingresos",
                "tiempo_reabastecimiento",
                "categoria",
                "valoracion_media",
                "proveedor",
                "ultima_venta"
            ]
        }
    ]
}
```
Para añadir una lista de datos:
Usar plantilla de tipo `"list"` en el JSON de sección
Configurar con:
`"title"`: Título de la lista
`"dataSource"`: Ruta al archivo JSON con datos
`"columns"`: Array con nombres de columnas a mostrar
Opción de formato: `"columna: color"` para colorear datos específicos
El número de elementos por página se configura en `orchestrator.js` con `pageSize: 10`

Para añadir gráficos:
Usar plantilla de tipo `"graphic"` en el JSON de sección
Configuración básica:
`"title"`: Título del gráfico
`"dataSource"`: Ruta al archivo JSON con datos
`"chartTypes"`: Array con tipos de gráficos (`["bar"]`, `["doughnut"]` o ambos)

### Gráfico de Barras
Configuración específica:
- `"xAxisLabel"`: Etiqueta del eje X
- `"yAxisLabel"`: Etiqueta del eje Y
- `"categoryField"`: Campo para categorías (eje X)
- `"valueField"`: Campo para valores (eje Y)
- Personalización: `"barColor"` y `"barBorderColor"`

### Gráfico Circular
Configuración específica:
- `"statusField"`: Campo para segmentos del gráfico


Para añadir métricas:
Usar plantilla de tipo `"summary"` en el JSON de sección
Configurar con:
`"dataSource"`: Ruta al archivo JSON con datos
`"metrics"`: Array de objetos de métrica

Cada métrica requiere:
`"name"`: Identificador único
`"type"`: Tipo de cálculo (`count`, `rate`, `average`, `latest`, `max`, `sum`)
`"title"`: Título visible
`"field"`: Campo a utilizar para el cálculo (excepto en `count`)
-Opciones adicionales:
  `"format"`: Formato de visualización (ej: `"currency"`)
  `"groupBy"`: Campo para agrupar en cálculos como `max`

Personalización de colores:
Añadir `"metricsColors"` en la raíz del JSON con array de colores para cada métrica


# Pasos Finales
- Una vez realizados los archivos de las secciones, hay que proceder con los cambios en github\workflows\deploy-dashboard.yml para que sea posible la subida de la web al servidor. Simplemente se tiene que añadir la ruta correspondiente con el título que se le haya asignado a la web en **pahts** en la linea 6 del deploy-dashboard.yml, ejemplo:
```shell
paths:
      # Ajustar el path para incluir ambos dashboards
      - 'core/results/webs/dashboard/**'
      - 'core/results/webs/test/**'
      - 'core/results/webs/tienda/**'
```  
y tras esto también se tiene que cambiar la ruta en la variable **KAOS_PATH_ORIGIN_DASHBOARD:** y **asignarle la añadida a paths pero sin los dos asteriscos finales** como sería por ejemplo en el caso de la web tienda:'core/results/webs/tienda/'
- Posteriormente subiremos los cambios a nuestra rama.
- Después de que hayan sido subidos realizaremos una **pull request** y posteriormente un **Merge**
- A continuación, en el **main**, ejecutaremos el action de **Ka0s Create structure for dashboard** y **Ka0s Deploy Webs (Dashboard y Test)**
- Estos actions harán que nuestra web se suba al servidor.
- Finalmente la web se podrá consultar en la siguiente url: https://ka0s.io/dashboard/dashboard.html.