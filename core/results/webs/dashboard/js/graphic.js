// Función para cargar el archivo data.json que contiene las rutas
async function loadDataConfig() {
    try {
        const response = await fetch('data/data.json');
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
        // Ajustar la ruta relativa para que no duplique 'core/'
        const adjustedPath = sourcePath.replace(/^core\//, '../../');
        const response = await fetch(adjustedPath);
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

// Función para cargar los datos directamente desde el archivo específico
async function loadData() {
    try {
        // Ruta directa al archivo de estadísticas del repositorio HARCODEADA
        const dataPath = 'data/kaos-repository-statistics.json';
        console.log('Intentando cargar datos desde:', dataPath);
        
        const response = await fetch(dataPath);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos cargados correctamente:', data);
        
        // Crear el gráfico con los datos cargados
        createChart(data);
        
        // Ocultar mensaje de carga si existe
        const loadingMessage = document.getElementById('loadingMessage');
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }
        
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        const loadingMessage = document.getElementById('loadingMessage');
        if (loadingMessage) {
            loadingMessage.textContent = `Error al cargar los datos: ${error.message}`;
        }
    }
}

// Función para crear el gráfico con los datos cargados
function createChart(data) {
    // Limpiar el gráfico anterior si existe
    const chartContainer = document.getElementById('dataChart');
    if (!chartContainer) {
        console.error('No se encontró el elemento canvas para el gráfico');
        return;
    }
    
    if (window.currentChart) {
        window.currentChart.destroy();
    }
    
    // Preparar los datos para el gráfico
    let labels = [];
    let values = [];
    
    // Extraer datos específicos para estadísticas del repositorio
    if (data.statistics) {
        // Usar las estadísticas del repositorio
        labels = Object.keys(data.statistics).filter(key => typeof data.statistics[key] === 'number');
        values = labels.map(key => data.statistics[key]);
    } else if (typeof data === 'object') {
        // Fallback: usar todas las propiedades numéricas
        labels = Object.keys(data).filter(key => typeof data[key] === 'number');
        values = labels.map(key => data[key]);
    }
    
    // Crear el gráfico
    const ctx = chartContainer.getContext('2d');
    window.currentChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (puede ser 'line', 'pie', etc.)
        data: {
            labels: labels,
            datasets: [{
                label: 'Estadísticas del Repositorio',
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
                    text: 'Estadísticas del Repositorio Ka0s'
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
window.addEventListener('load', loadData);
window.addEventListener('load', initializeDataSourceSelector);