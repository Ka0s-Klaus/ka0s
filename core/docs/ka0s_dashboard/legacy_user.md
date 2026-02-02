![Ka0S](/core/imgs/Portada_Documentacion_Ka0s_Dashboard.png)
# 1.Casos de uso Generales de la web
El dashboard web está diseñado para mostrar información de manera dinámica a partir de los archivos JSON ubicados en core\web\data. Esto lo hace sumamente flexible y adaptable a cualquier tipo de contenido o de web, ya que para crear la web solo se necesita agregar archivos JSON sin necesidad de modificar nada de Backend, simplemente escribir los datos de una determinada forma que se explicará posteriormente y obtener los resultados en pantalla.
De esta manera cualquier persona, sin necesidad de que tenga conocimientos de programación, puede crear una web simplemente incluyendo los ficheros de datos que quiera mostrar y haciendo referencia en los JSON en los que inserte la estructura de la web que desee.
En cuanto a los ficheros que hay que modificar o agregar para crear esta web se encuentran los siguientes:
- El archivo principal de configuración: webs.json, en el cual se tienen que definir qué archivos se usan para cada sección. Un ejemplo de configuración de este fichero podría ser el siguiente:
```shell
{
  "title": "dashboard",
  "sections": [
    {
      "title": "inicio",
      "icon": "fa fa-home",
      "data": "data/productos_tienda.json.json",
      "datatemplate": "data/section1.json"
    },
    {
      "title": "Articulos Invierno",
      "icon": "fa fa-stopwatch",
      "data": "data/productos_tienda.json.json",
      "datatemplate": "data/section2.json"
    },
    {
      "title": "Articulos Verano",
      "icon": "fa fa-exclamation-circle",
      "data": "data/productos_tienda.json.json",
      "datatemplate": "data/section3.json"
    },
    {
      "title": "Ingresos",
      "icon": "fa fa-bar-chart",
      "data": "data/productos_tienda.json.json",
      "datatemplate": "data/section4.json"
    },
    {
      "title": "Gastos",
      "icon": "fa fa-exclamation-triangle",
      "data": "data/productos_tienda.json.json",
      "datatemplate": "data/section5.json"
    }
  ]
}
```

- Cada una de las secciones que se quieran agregar a la web: se configuran mediante un archivo JSON en el que se especifican el título, la descripción y los componentes que se le quiera añadir a cada una. 
Estos componentes pueden ser: 

  - **NavBar**: Se crea automáticamente recogiendo los títulos e iconos insertados en el JSON de configuración principal de la estructura de la web: webs.json.
  - **Métricas**: Muestran datos relevantes del fichero de datos correspondiente.
  - **Lista**: Muestra  los datos en forma de tablas con sus correspondientes columnas.
  - **Gráfico de Tarta**: Muestra los datos en forma de gráfico fraccionado.
  - **Gráfico de Barras**:Muestra los datos en forma de barras diferenciándose por la longitud de las mismas.
Un ejemplo de cómo configurar una sección con estos componentes podría ser el siguiente:

```shell
{
  "title": "Ventas Tienda",
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
          "name": "mediaValoracion",
          "type": "average",
          "title": "Valoración media",
          "field": "valoracion_media"
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
```

# 2.Agregar y editar listas

Para mostrar los datos en forma de lista, debemos añadirlo en el archivo JSON de la sección correspondiente de la siguiente manera:
```shell
 {
            "type": "list",
            "title": "Productos",
            "dataSource": "data/productos_tienda.json",
            "columns": [
                "id",
                "nombre",
                "precio",
                "ventas: green",
                "stock"
            ]
        }
```
Como podemos ver, tiene un filtro para elegir las columnas que queremos que salgan, para ello ponemos en "columns" las columnas que queramos. Además, podemos añadir al lado de cada columna un color para los datos de esa columna, "ventas: green". También, podemos editar el número de elementos por página en orchestrator.js aquí:  pageSize: 10. Con el código anterior, tenemos el siguiente gráfico:
![Ka0S](/core/imgs/lista-dashboard.png)

# 3.Agregar y editar gráficos

Para mostrar los datos mediante gráficos deberemos especificarlo en nuestro archivo JSON de la sección como vemos en el siguiente código de ejemplo:
```shell
   {
            "type": "graphic", 
            "title": "Ventas por producto", (Título que se mostrará en el gráfico)
            "dataSource": "data/productos_tienda.json", (Archivo JSON del que extraeremos los datos)
            "xAxisLabel": "Producto", (Título del eje X)
            "yAxisLabel": "Ventas", (Título del eje Y)
            "categoryField": "nombre", (Clave del JSON que queremos mostrar)
            "valueField": "ventas", Clave del JSON que queremos mostrar)
            "chartTypes": ["bar"] (Tipo de gráfico que queremos)
        }
```
Como vemos en el campo “chartTypes” debemos especificar si queremos un gráfico de barras ("bar") o tipo “tarta” ("doughnut"), en caso de no especificarlo se mostrarán ambos gráficos.
Así pues con el código anterior tendremos un gráfico como este:
![Ka0S](/core/imgs/barras.png)

Además tenemos la opción de personalizar los colores de las barras, imaginemos que queremos mostrarlas con el color verde, únicamente deberemos añadir a nuestro JSON los campos: 
 "barColor": "green",
 "barBorderColor": "white",
![Ka0S](/core/imgs/barrasve.png)


A continuación veamos cómo se mostrarán nuestros datos mediante un gráfico circular, para ellos usaremos el siguiente código de ejemplo:
```shell
{
            "type": "graphic",
            "title": "Stock por categoría",
            "dataSource": "data/productos_tienda.json",
            "statusField": "categoria",(Clave del JSON que queremos mostrar)
            "chartTypes": ["doughnut"]
        }
  ```
![Ka0S](/core/imgs/grafico_circular.png)

Y finalmente veamos cómo podemos mostrar los dos tipos de gráficos conjuntamente.
```shell
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
 ```
![Ka0S](/core/imgs/graficos.png)

Como podemos ver ambos gráficos son muy fáciles de configurar y nos servirán para mostrar diferentes tipos de datos según nuestras necesidades.


# 4. Agregar y editar métricas

Ka0s Dashboard nos permite también agregar métricas y datos relevantes para mostrar en nuestra web mediante nuestro archivo JSON, para ello deberemos agregar una plantilla del tipo “summary” como vemos en el siguiente ejemplo:
  ```shell
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
  ```
Como vemos en el código, tenemos varios tipos de métrica para mostrar:
- **count** : Cuenta el número total de elementos.
- **rate** : Calcula porcentajes (como tasa de éxito).
- **average** : Calcula promedios (como tiempo medio).
- **latest** : Obtiene el valor más reciente.
- **max** : Encuentra el valor máximo agrupado por un campo (ej: producto más vendido).
- **sum** : Suma valores de un campo (ej: ingresos totales).

Todo ello se verá en nuestra web de la siguiente manera.
![Ka0S](/core/imgs/metricas.png)

Además, en este caso también tenemos la oportunidad de personalizar los colores de dichas métricas y adaptarlas así a nuestro gusto o colores de nuestra marca. Así pues imaginemos que los colores de nuestra tienda son el azul y el naranja, deberemos añadir el campo “metricsColors” antes de la plantilla e indicar el color mediante su nombre o con su código HTML.
```shell
{
    "title": "Ventas Tienda",
    "description": "Dashboard de ventas, stock e ingresos de la tienda",
    "metricsColors": ["orange", "blue", "orange", "blue", "orange", "blue", "orange", "blue", "orange", "blue"],
    "templates": [
        {
            "type": "summary",
            "dataSource": "data/productos_tienda.json",
            "metrics": [
(Resto del codigo)
```

Y así veríamos nuestras métricas.
![Ka0S](/core/imgs/metricasColo.png)



Como hemos visto, al igual que los gráficos, podemos configurar fácilmente los datos que queremos mostrar mediante el uso de métricas, y además, personalizar los colores de éstas adaptándolas así a nuestras preferencias.


