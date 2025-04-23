// Función para cargar el archivo data.json que contiene las rutas
async function loadDataConfig() {
    try {
        const response = await fetch('../data/data.json');
        const config = await response.json();
        return config;
    } catch (error) {
        console.error('Error al cargar la configuración de datos:', error);
        document.getElementById('loadingMessage').textContent = 'Error al cargar la configuración de datos';
        return null;
    }
}

// Función para cargar los datos desde una ruta específica
async function loadDataFromSource(sourcePath) {
    try {
        const response = await fetch(`../${sourcePath}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error al cargar los datos desde ${sourcePath}:`, error);
        document.getElementById('loadingMessage').textContent = `Error al cargar los datos desde ${sourcePath}`;
        return null;
    }
}

// Función para inicializar el selector de fuentes de datos
async function initializeDataSourceSelector() {
    const config = await loadDataConfig();
    if (!config || !config.dataFiles || config.dataFiles.length === 0) {
        document.getElementById('loadingMessage').textContent = 'No se encontraron fuentes de datos';
        return;
    }
    
    const selector = document.getElementById('dataSource');
    
    // Agregar opciones al selector
    config.dataFiles.forEach(file => {
        const option = document.createElement('option');
        option.value = file.source;
        option.textContent = file.source.split('/').pop(); // Mostrar solo el nombre del archivo
        selector.appendChild(option);
    });
    
    // Ocultar mensaje de carga
    document.getElementById('loadingMessage').style.display = 'none';
    
    // Agregar evento de cambio al selector
    selector.addEventListener('change', async function() {
        if (this.value) {
            const data = await loadDataFromSource(this.value);
            if (data) {
                createChart(data);
            }
        }
    });
}

// Función para crear el gráfico con los datos cargados
function createChart(data) {
    // Limpiar el gráfico anterior si existe
    const chartContainer = document.getElementById('dataChart');
    if (window.currentChart) {
        window.currentChart.destroy();
    }
    
    // Preparar los datos para el gráfico
    // Esto dependerá de la estructura de tus datos JSON
    // Aquí hay un ejemplo genérico que puedes adaptar
    
    let labels = [];
    let values = [];
    
    // Intentar extraer datos en diferentes formatos comunes
    if (Array.isArray(data)) {
        // Si es un array, usar índices como etiquetas
        labels = data.map((_, index) => `Ítem ${index + 1}`);
        
        // Intentar extraer valores numéricos
        if (typeof data[0] === 'number') {
            values = data;
        } else if (typeof data[0] === 'object') {
            // Buscar la primera propiedad numérica en cada objeto
            const firstKey = Object.keys(data[0])[0];
            values = data.map(item => {
                for (const key in item) {
                    if (typeof item[key] === 'number') return item[key];
                }
                return 0; // Valor por defecto
            });
            
            // Intentar usar una propiedad como etiqueta
            if (data[0].name || data[0].label || data[0].id) {
                labels = data.map(item => item.name || item.label || item.id || '');
            }
        }
    } else if (typeof data === 'object') {
        // Si es un objeto, usar claves como etiquetas
        labels = Object.keys(data);
        values = Object.values(data).map(val => typeof val === 'number' ? val : 0);
    }
    
    // Crear el gráfico
    const ctx = chartContainer.getContext('2d');
    window.currentChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (puede ser 'line', 'pie', etc.)
        data: {
            labels: labels,
            datasets: [{
                label: 'Datos del archivo',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Visualización de datos'
                },
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Iniciar la aplicación cuando se cargue la página
window.addEventListener('load', initializeDataSourceSelector);