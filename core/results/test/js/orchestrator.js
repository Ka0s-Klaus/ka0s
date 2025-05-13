// Configuración global
const config = {
    itemsPerPage: 10,
    defaultArchive: 'data/kaos-workflows-available.json'
};

// Variables globales iniciales
let currentPage = 1;
let filteredData = [];
let allData = [];
let currentChart = null;
let webConfig = null;
let sectionConfigMap = {};

// Función para inicializar todos los módulos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Cargar la configuración principal desde webs.json
    loadWebsConfig();
});

/**
 * Carga y procesa el archivo de configuración principal
 */
function loadWebsConfig() {
    fetch('data/webs.json')
        .then(response => response.json())
        .then(data => {
            // Establecer el título del documento
            document.title = data.title || 'Ka0s Dashboard';
            
            // Para la sección inicial (inicio)
            if (data.sections && data.sections.length > 0) {
                const inicioSection = data.sections.find(section => section.title === 'inicio');
                if (inicioSection && inicioSection.datatemplate) {
                    // Cargar la información de la plantilla de la sección
                    fetch(inicioSection.datatemplate)
                        .then(response => response.json())
                        .then(templateData => {
                            document.title = templateData.title || data.title;
                            // Si hay un elemento para mostrar la descripción, actualizarlo
                            const descriptionElement = document.querySelector('.section-description');
                            if (descriptionElement && templateData.description) {
                                descriptionElement.textContent = templateData.description;
                            }
                        })
                        .catch(error => console.error('Error cargando la plantilla de la sección:', error));
                }
            }
        })
        .catch(error => console.error('Error cargando webs.json:', error));
    if (!data || !data.sections || !Array.isArray(data.sections)) {
        console.error('Formato de webs.json inválido');
        return;
    }
    
    // Establecer el título de la página
    document.title = data.title || 'Ka0s Dashboard';
    
    // Cargar la sección inicial por defecto (la primera)
    if (data.sections.length > 0) {
        loadSection(data.sections[0]);
    }
}

/**
 * Carga una sección específica
 * @param {Object} section - Objeto de sección del archivo webs.json
 */
function loadSection(section) {
    if (!section || !section.datatemplate) {
        console.error('Sección inválida o sin plantilla de datos');
        return;
    }
    
    // Actualizar título de la sección actual
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) {
        sectionTitle.textContent = section.title || 'Sección';
    }
    
    // Cargar la plantilla de datos de la sección
    loadDataFromUrl(section.datatemplate, function(templateData) {
        // Cargar los datos para esta sección
        loadSectionData(section, templateData);
    }, function(error) {
        console.error(`Error cargando plantilla ${section.datatemplate}:`, error);
    });
}

/**
 * Carga los datos para una sección y su plantilla
 * @param {Object} section - Objeto de sección
 * @param {Object} templateData - Datos de la plantilla de la sección
 */
function loadSectionData(section, templateData) {
    // Actualizar título y descripción de la sección
    const sectionTitle = document.getElementById('section-title');
    const sectionDescription = document.getElementById('section-description');
    
    if (sectionTitle && templateData.title) {
        sectionTitle.textContent = templateData.title;
    }
    
    if (sectionDescription && templateData.description) {
        sectionDescription.textContent = templateData.description;
    }
    
    // Procesar las plantillas definidas en la sección
    if (templateData.templates && Array.isArray(templateData.templates)) {
        renderTemplates(templateData.templates);
    }
    
    // Cargar datos si la sección tiene una URL de datos
    if (section.data) {
        if (Array.isArray(section.data)) {
            // Cargar múltiples fuentes de datos
            const dataPromises = section.data.map(dataItem => {
                return new Promise((resolve, reject) => {
                    loadDataFromUrl(dataItem.url, resolve, reject);
                });
            });
            
            Promise.all(dataPromises)
                .then(dataResults => {
                    // Combinar todos los resultados de datos
                    const combinedData = {};
                    dataResults.forEach((data, index) => {
                        const dataKey = section.data[index].key || `data${index}`;
                        combinedData[dataKey] = data;
                    });
                    
                    // Actualizar las plantillas con los datos combinados
                    updateTemplatesWithData(combinedData);
                })
                .catch(error => {
                    console.error('Error cargando datos múltiples:', error);
                });
        } else {
            // Cargar una sola fuente de datos
            loadDataFromUrl(section.data, function(data) {
                updateTemplatesWithData(data);
            }, function(error) {
                console.error(`Error cargando datos ${section.data}:`, error);
            });
        }
    }
}

/**
 * Renderiza las plantillas en el contenedor de plantillas
 * @param {Array} templates - Array de objetos de plantilla
 */
function renderTemplates(templates) {
    const templatesContainer = document.getElementById('templates-container');
    if (!templatesContainer) {
        console.error('No se encontró el contenedor de plantillas');
        return;
    }
    
    // Limpiar el contenedor de plantillas
    templatesContainer.innerHTML = '';
    
    // Renderizar cada plantilla
    templates.forEach((template, index) => {
        const templateDiv = document.createElement('div');
        templateDiv.className = 'mb-8';
        templateDiv.id = `template-${index}`;
        
        switch (template.type) {
            case 'summary':
                // Plantilla de resumen (métricas)
                templateDiv.innerHTML = `
                    <div id="metrics-container" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-source="${template.dataSource}">
                        <!-- Total Workflows -->
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center">
                            <h2 class="text-3xl font-bold text-blue-700" id="total-workflows">--</h2>
                            <p class="text-blue-600 mt-1">Total Workflows</p>
                        </div>
                        
                        <!-- Avg Lead Time -->
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col items-center justify-center">
                            <h2 class="text-3xl font-bold text-green-700" id="avg-lead-time">--</h2>
                            <p class="text-green-600 mt-1">Avg Lead Time</p>
                        </div>
                        
                        <!-- Max Lead Time -->
                        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col items-center justify-center">
                            <h2 class="text-3xl font-bold text-yellow-700" id="max-lead-time">--</h2>
                            <p class="text-yellow-600 mt-1">Max Lead Time</p>
                        </div>
                        
                        <!-- Min Lead Time -->
                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 flex flex-col items-center justify-center">
                            <h2 class="text-3xl font-bold text-purple-700" id="min-lead-time">--</h2>
                            <p class="text-purple-600 mt-1">Min Lead Time</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'table':
                // Plantilla de tabla
                templateDiv.innerHTML = `
                    <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <header class="mb-4 px-6 pt-6">
                            <h2 class="text-2xl font-bold text-gray-800" id="table-title">${template.title || 'Tabla'}</h2>
                            <p class="text-gray-600 mt-2" id="table-description">${template.description || ''}</p>
                        </header>
                        <table class="min-w-full divide-y divide-gray-200" data-source="${template.dataSource}">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        MÓDULO
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        DESCRIPCIÓN
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ESTADO
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200" id="table-body">
                                <!-- Los datos de la tabla se cargarán dinámicamente -->
                                <tr>
                                    <td colspan="3" class="px-6 py-4 text-center text-gray-500">
                                        Cargando datos...
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `;
                break;
                
            case 'chart':
                // Plantilla de gráfico
                templateDiv.innerHTML = `
                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">${template.title || 'Gráfico'}</h2>
                        <div id="chart-${index}" class="h-80" data-source="${template.dataSource}">
                            <!-- El gráfico se cargará dinámicamente -->
                            <div class="flex items-center justify-center h-full text-gray-500">
                                Cargando gráfico...
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                templateDiv.innerHTML = `
                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 class="text-xl font-bold text-gray-800 mb-2">Plantilla desconocida</h2>
                        <p class="text-gray-600">Tipo de plantilla no soportado: ${template.type}</p>
                    </div>
                `;
        }
        
        templatesContainer.appendChild(templateDiv);
        
        // Inicializar la plantilla según su tipo
        if (template.type === 'summary') {
            initSummaryIfPresent();
        } else if (template.type === 'table') {
            initTableIfPresent();
        }
    });
}

/**
 * Actualiza las plantillas con los datos cargados
 * @param {Object} data - Datos cargados
 */
function updateTemplatesWithData(data) {
    // Actualizar resumen si existe
    updateSummaryWithData(data);
    
    // Actualizar tabla si existe
    updateTableWithData(data);
}

/**
 * Actualiza el resumen con los datos cargados
 * @param {Object} data - Datos cargados
 */
function updateSummaryWithData(data) {
    // Implementar la actualización del resumen con los datos
    if (data.totalWorkflows) {
        const totalWorkflows = document.getElementById('total-workflows');
        if (totalWorkflows) {
            totalWorkflows.textContent = data.totalWorkflows;
        }
    }
    
    if (data.avgLeadTime) {
        const avgLeadTime = document.getElementById('avg-lead-time');
        if (avgLeadTime) {
            avgLeadTime.textContent = formatLeadTime(data.avgLeadTime);
        }
    }
    
    if (data.maxLeadTime) {
        const maxLeadTime = document.getElementById('max-lead-time');
        if (maxLeadTime) {
            maxLeadTime.textContent = formatLeadTime(data.maxLeadTime);
        }
    }
    
    if (data.minLeadTime) {
        const minLeadTime = document.getElementById('min-lead-time');
        if (minLeadTime) {
            minLeadTime.textContent = formatLeadTime(data.minLeadTime);
        }
    }
}

/**
 * Actualiza la tabla con los datos cargados
 * @param {Object} data - Datos cargados
 */
function updateTableWithData(data) {
    // Implementar la actualización de la tabla con los datos
    if (Array.isArray(data)) {
        renderModulesTable(data);
    } else if (data.modules && Array.isArray(data.modules)) {
        renderModulesTable(data.modules);
    }
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar la configuración principal desde webs.json
    loadWebsConfig();
});

// Función para filtrar datos
function filterData(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
        filteredData = [...allData];
    } else {
        searchTerm = searchTerm.toLowerCase();
        filteredData = allData.filter(item => {
            return Object.values(item).some(value => {
                if (value === null || value === undefined) return false;
                return value.toString().toLowerCase().includes(searchTerm);
            });
        });
    }

    renderPage(1);
}

// Exportar funciones para uso global
window.initSection = initSection;
window.filterData = filterData;

// Función para cargar el navbar y procesar la configuración de la sección
document.addEventListener('DOMContentLoaded', function() {
    // Cargar el navbar
    // ==================== MÓDULO NAVBAR ====================
    /**
     * Inicializa la barra de navegación
     */
    function initNavbar() {
        // Cargar la plantilla de navbar.html
        fetch('templates/navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(template => {
                // Obtener el contenedor de la barra de navegación
                const navbarContainer = document.getElementById('navbar-container');
                if (!navbarContainer) {
                    console.error('No se encontró el contenedor de la barra de navegación');
                    return;
                }
                
                // Cargar el navbar
                fetch('templates/navbar.html')
                    .then(response => response.text())
                    .then(data => {
                        navbarContainer.innerHTML = data;
                        // Inicializar el orquestador después de cargar el navbar
                        if (typeof loadWebsConfig === 'function') {
                            loadWebsConfig();
                        }
                    })
                    .catch(error => console.error('Error cargando el navbar:', error));
            });
    
    // Ajustar el contenido principal cuando cambia el tamaño del sidebar
    function adjustMainContent() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main-content');
        
        if (sidebar && mainContent) {
            if (sidebar.classList.contains('w-[60px]')) {
                mainContent.classList.remove('ml-[250px]');
                mainContent.classList.add('ml-[60px]');
            } else {
                mainContent.classList.remove('ml-[60px]');
                mainContent.classList.add('ml-[250px]');
            }
        }
    }

    // Observar cambios en el sidebar
    setTimeout(() => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            const observer = new MutationObserver(adjustMainContent);
            observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
            adjustMainContent();
        }
    }, 1000);
}
});


// Función para renderizar métricas dinámicamente
function renderMetrics(config) {
    const metricsContainer = document.getElementById('metrics-container');
    if (!metricsContainer) return;
    
    // Limpiar el contenedor
    metricsContainer.innerHTML = '';
    
    // Colores para las métricas
    const colors = ['blue', 'green', 'yellow', 'purple', 'red', 'orange', 'gray'];
    
    // Contador de métricas
    let metricCount = 0;
    
    // Buscar todas las propiedades que comienzan con "metric"
    for (const key in config) {
        if (key.startsWith('metric') && !isNaN(key.substring(6))) {
            const metricNumber = key.substring(6);
            const titleKey = `metric${metricNumber}Title`;
            const title = config[titleKey] || `Métrica ${metricNumber}`;
            const value = config[key] || '0';
            const color = colors[metricCount % colors.length];
            
            // Crear el elemento de métrica
            const metricElement = document.createElement('div');
            metricElement.className = `bg-white rounded-lg shadow-sm p-4 border-l-4 border-${color}-500`;
            metricElement.innerHTML = `
                <p class="text-sm text-gray-500 uppercase">${title}</p>
                <h2 id="metric${metricNumber}" class="text-2xl font-bold text-gray-800">${value}</h2>
            `;
            
            // Añadir al contenedor
            metricsContainer.appendChild(metricElement);
            metricCount++;
        }
    }
    
    // Si no hay métricas, ocultar el contenedor
    if (metricCount === 0) {
        metricsContainer.style.display = 'none';
    } else {
        metricsContainer.style.display = 'grid';
        
        // Ajustar el número de columnas según la cantidad de métricas
        if (metricCount <= 2) {
            metricsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-8';
        } else if (metricCount <= 3) {
            metricsContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 mb-8';
        } else {
            metricsContainer.className = 'grid grid-cols-1 md:grid-cols-4 gap-4 mb-8';
        }
    }
}

// Función para renderizar plantillas dinámicamente
function renderTemplates(config) {
    const templatesContainer = document.getElementById('templates-container');
    if (!templatesContainer || !config.templates || !Array.isArray(config.templates)) return;
    
    // Limpiar el contenedor
    templatesContainer.innerHTML = '';
    
    // Procesar cada plantilla
    config.templates.forEach((template, index) => {
        // Crear contenedor para esta plantilla
        const templateContainer = document.createElement('div');
        templateContainer.className = 'bg-white shadow-sm rounded-lg p-6 mb-6';
        
        // Título de la plantilla
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-xl font-semibold text-gray-800 mb-4';
        titleElement.textContent = template.title || `Plantilla ${index + 1}`;
        templateContainer.appendChild(titleElement);
        
        // Contenido según el tipo de plantilla
        if (template.type === 'list') {
            // Crear contenedor de búsqueda
            const searchContainer = document.createElement('div');
            searchContainer.className = 'flex justify-between items-center mb-4';
            searchContainer.innerHTML = `
                <div class="relative ml-auto">
                    <input type="text" id="search-input-${index}" placeholder="Buscar..." 
                        class="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
            `;
            templateContainer.appendChild(searchContainer);
            
            // Crear contenedor de encabezados
            const headersContainer = document.createElement('div');
            headersContainer.id = `data-headers-${index}`;
            headersContainer.className = 'grid grid-cols-12 gap-4 p-3 bg-gray-100 rounded-t-lg mb-2';
            templateContainer.appendChild(headersContainer);
            
            // Crear contenedor de datos
            const dataContainer = document.createElement('div');
            dataContainer.id = `data-list-${index}`;
            dataContainer.setAttribute('data-source', template.dataSource || '');
            templateContainer.appendChild(dataContainer);
            
            // Crear contenedor de paginación
            const paginationContainer = document.createElement('div');
            paginationContainer.id = `pagination-${index}`;
            paginationContainer.className = 'mt-4';
            templateContainer.appendChild(paginationContainer);
            
            // Configurar evento de búsqueda
            setTimeout(() => {
                const searchInput = document.getElementById(`search-input-${index}`);
                if (searchInput && window.filterData) {
                    searchInput.addEventListener('input', function(e) {
                        window.filterData(e.target.value);
                    });
                }
            }, 500);
            
        } else if (template.type === 'graphic' || template.type === 'chart') {
            // Crear contenedor para el gráfico
            const chartContainer = document.createElement('div');
            chartContainer.className = 'w-full h-64 md:h-80';
            
            // Crear el canvas para el gráfico
            const canvas = document.createElement('canvas');
            canvas.id = `chart-${index}`;
            chartContainer.appendChild(canvas);
            templateContainer.appendChild(chartContainer);
            
            // Cargar datos y crear gráfico
            if (template.dataSource) {
                fetch(template.dataSource)
                    .then(response => response.json())
                    .then(data => {
                        // Configuración básica del gráfico
                        const ctx = canvas.getContext('2d');
                        new Chart(ctx, {
                            type: 'bar', // Tipo predeterminado, se puede cambiar según los datos
                            data: {
                                labels: data.labels || Object.keys(data),
                                datasets: [{
                                    label: template.title || 'Datos',
                                    data: data.values || Object.values(data),
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(75, 192, 192, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(153, 102, 255, 0.5)',
                                        'rgba(255, 99, 132, 0.5)'
                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 99, 132, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    }
                                }
                            }
                        });
                    })
                    .catch(error => {
                        console.error(`Error cargando datos para el gráfico ${index}:`, error);
                        chartContainer.innerHTML = `
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                Error cargando datos del gráfico: ${error.message}
                            </div>
                        `;
                    });
            }
        }
        
        // Añadir la plantilla al contenedor principal
        templatesContainer.appendChild(templateContainer);
    });
}

// Función para procesar la configuración completa
function processConfig(config) {
    // Actualizar título y descripción
    const titleElement = document.getElementById('section-title');
    if (titleElement && config.title) {
        titleElement.textContent = config.title;
    }
    
    const descriptionElement = document.getElementById('section-description');
    if (descriptionElement && config.description) {
        descriptionElement.textContent = config.description;
    }
    
    // Renderizar métricas
    renderMetrics(config);
    
    // Renderizar plantillas
    renderTemplates(config);
}

// Exponer la función para que pueda ser usada desde otros contextos
window.processConfig = processConfig;

// Exponer la función de filtrado para que pueda ser usada por los inputs de búsqueda
window.filterData = function(searchTerm) {
    if (!searchTerm) {
        filteredData = [...allData];
    } else {
        searchTerm = searchTerm.toLowerCase();
        filteredData = allData.filter(item => {
            return Object.values(item).some(value => {
                if (value === null || value === undefined) return false;
                return value.toString().toLowerCase().includes(searchTerm);
            });
        });
    }
    renderPage(1);
};