
# 2.Agregar y editar listas

Para mostrar los datos en forma de lista, debemos añadirlo en el archivo JSON de la sección correspondiente de la siguiente manera:
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

Como podemos ver, tiene un filtro para elegir las columnas que queremos que salgan, para ello ponemos en "columns" las columnas que queramos. Además, podemos añadir al lado de cada columna un color para los datos de esa columna, "ventas: green". También, podemos editar el número de elementos por página en orchestrator.js aquí:  pageSize: 10. Con el código anterior, tenemos el siguiente gráfico:
![Ka0S](/core/imgs/lista-dashboard.png)