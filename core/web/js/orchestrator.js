// Configuración global

const config = {
    itemsPerPage: 10,
    defaultArchive: 'data/kaos-workflows-runs.json'
};

// Variables globales iniciales
let currentPage = 1;
let filteredData = [];
let allData = [];
let currentChart = null;
let webConfig = null;
let sectionConfigMap = {};
// Declarar variables para almacenar referencias a los gráficos
let workflowsBarChart = null;
let workflowsStatusChart = null;

// Función para inicializar todos los módulos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Cargar la configuración principal desde webs.json
    loadWebsConfig();
});

/**
 * Carga la configuración principal desde webs.json
 */
function loadWebsConfig() {
    loadDataFromUrl(
        'data/webs.json',
        (data) => {
            webConfig = data;
            console.log('Configuración principal cargada:', webConfig);

            // Inicializar la barra de navegación
            initNavbar();
            processConfig(webConfig);
            // Inicializar el módulo de datos
            initDataList();
            // Inicializar el gráfico de workflows
            initWorkflowsChart();

            // Inicializar el mapa de configuración de secciones
            if (webConfig && webConfig.sections) {
                webConfig.sections.forEach(section => {
                    sectionConfigMap[section.title] = {
                        configFile: section.data,
                        metrics: [] // Se llenará al cargar la configuración específica
                    };
                });
            }

            // Inicializar los módulos específicos según la página actual
            const currentPath = window.location.pathname;

            // Determinar qué sección inicializar basado en la ruta
            if (webConfig && webConfig.sections) {
                for (const section of webConfig.sections) {
                    if (currentPath.includes(section.title.toLowerCase())) {
                        initSection(section.title);
                        break;
                    }
                }
            }
        },
        (error) => {
            console.error('Error cargando configuración principal:', error);
        }
    );
}

// ==================== UTILIDADES GENERALES ====================
/**
 * Función genérica para cargar datos desde una URL
 * @param {string} url - La URL del archivo a cargar
 * @param {function} successCallback - Función a ejecutar si la carga es exitosa
 * @param {function} errorCallback - Función a ejecutar si hay un error (opcional)
 */
function loadDataFromUrl(url, successCallback, errorCallback = null) {
    console.log(`Cargando datos desde: ${url}`);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (successCallback && typeof successCallback === 'function') {
                successCallback(data);
            }
        })
        .catch(error => {
            console.error(`Error cargando datos desde ${url}:`, error);
            if (errorCallback && typeof errorCallback === 'function') {
                errorCallback(error);
            }
        });
}

/**
 * Inicializa una sección específica
 * @param {string} sectionName - Nombre de la sección a inicializar
 */
function initSection(sectionName) {
    console.log(`Inicializando sección: ${sectionName}`);

    const sectionConfig = sectionConfigMap[sectionName];
    if (!sectionConfig) {
        console.error(`Configuración no encontrada para la sección: ${sectionName}`);
        return;
    }

    // Cargar la configuración de la sección
    loadDataFromUrl(
        sectionConfig.configFile,
        (config) => {
            // Procesar la configuración usando la función processConfig
            processConfig(config);
            
            // Configurar las métricas basadas en el archivo de configuración
            const metricKeys = [];
            const colors = ['blue', 'green', 'yellow', 'purple', 'red', 'orange', 'gray'];

            // Buscar todas las propiedades que comienzan con "metric"
            for (const key in config) {
                if (key.startsWith('metric') && !isNaN(key.substring(6))) {
                    metricKeys.push({
                        key: key,
                        color: colors[metricKeys.length % colors.length] // Asignar color cíclicamente
                    });
                }
            }

            // Actualizar la configuración de métricas para esta sección
            sectionConfig.metrics = metricKeys;

            // Procesar datos específicos si es necesario
            if (sectionConfig.processData && typeof sectionConfig.processData === 'function') {
                // Obtener la fuente de datos
                const dataSource = document.getElementById('data-list').getAttribute('data-source');

                // Cargar los datos para procesamiento específico
                loadDataFromUrl(
                    dataSource,
                    sectionConfig.processData,
                    (error) => {
                        console.error(`Error procesando datos para ${sectionName}:`, error);
                    }
                );
            }
        },
        (error) => {
            console.error(`Error cargando configuración para ${sectionName}:`, error);
            const dataList = document.getElementById('data-list');
            if (dataList) {
                dataList.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando configuración: ${error.message}
                    </div>
                `;
            }
        }
    );
}

/**
 * Actualiza el título y descripción de la página
 * @param {Object} config - Configuración con título y descripción
 */
function updateTitleAndDescription(config) {
    if (config.title) {
        const h1 = document.querySelector('h1');
        if (h1) h1.textContent = config.title;
    }
    if (config.description) {
        const desc = document.querySelector('p.text-gray-600, header p');
        if (desc) desc.textContent = config.description;
    }
}

/**
 * Actualiza las métricas en la página
 * @param {Object} config - Configuración con valores de métricas
 * @param {Array} metricConfig - Configuración de las métricas (claves y colores)
 
/**function updateMetrics(config, metricConfig) {
    if (!metricConfig || !Array.isArray(metricConfig)) return;

    metricConfig.forEach((metric, idx) => {
        const container = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 > div')[idx];
        if (container && config[metric.key]) {
            const h2 = container.querySelector('h2');
            if (h2) h2.textContent = config[metric.key];
        }
    });
}*/

/**
 * Configura la lista de datos basada en la configuración
 * @param {Object} config - Configuración con plantillas
 */
function configureDataList(config) {
    if (!config.templates || !Array.isArray(config.templates)) return;

    const listTemplate = config.templates.find(t => t.type === 'list');
    if (!listTemplate) return;

    // Actualizar el título de la tabla/lista
    updateTableTitle(listTemplate.title);

    // Configurar la fuente de datos
    const dataList = document.getElementById('data-list');
    if (dataList && listTemplate.dataSource) {
        dataList.setAttribute('data-source', listTemplate.dataSource);
        // Cargar datos
        loadData(listTemplate.dataSource);
    }
}

/**
 * Actualiza el título de la tabla/lista
 * @param {string} title - Título a establecer

function updateTableTitle(title) {
    if (!title) return;

    const selectors = [
        '.bg-white.shadow-sm.rounded-lg.p-6 h2',
        '.bg-white.shadow-sm.rounded-lg.p-6 h3',
        '.bg-white.shadow-sm.rounded-lg.p-6 .text-xl',
        '#table-title',
        '.text-xl.font-semibold.text-gray-800'
    ];

    for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = title;
            break;
        }
    }
} */

// ==================== MÓDULO NAVBAR ====================
function initNavbar() {
    // Usar la configuración ya cargada
    if (!webConfig) {
        console.error('Configuración no disponible para inicializar navbar');
        return;
    }

    // Actualizar el título de la navbar
    const navbarTitle = document.getElementById('navbar-title');
    if (navbarTitle && webConfig.title) {
        navbarTitle.textContent = webConfig.title;
    }

    // Cargar las secciones
    const navbar = document.getElementById('navbar-sections');
    if (navbar && webConfig.sections && Array.isArray(webConfig.sections)) {
        // Limpiar elementos existentes para evitar duplicados
        navbar.innerHTML = '';
        
        webConfig.sections.forEach(section => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="#${section.title.toLowerCase()}" 
                   class="flex items-center justify-center w-full py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group relative">
                    <div class="flex items-center justify-center w-12">
                        <i class="fas ${section.icon} text-orange-300 group-hover:text-orange-500 text-xl"></i>
                    </div>
                    <span class="sidebar-text flex-1 font-medium capitalize">${section.title}</span>
                </a>`;
            navbar.appendChild(li);
        });
    }

    // Esperar a que el DOM esté actualizado antes de inicializar el sidebar
    setTimeout(() => {
        initializeSidebar();
    }, 0);
}

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');

    if (!sidebar || !sidebarToggle || !toggleIcon) {
        console.error('No se encontraron los elementos necesarios del sidebar');
        return;
    }

    function toggleSidebar() {
        const sidebarTexts = document.querySelectorAll('.sidebar-text');
        const logoImage = document.querySelector('.logo-image');
        const tooltips = document.querySelectorAll('.tooltip');

        if (sidebar.classList.contains('w-[250px]')) {
            // Colapsar sidebar
            sidebar.classList.remove('w-[250px]');
            sidebar.classList.add('w-[60px]');
            toggleIcon.style.transform = 'rotate(180deg)';
            sidebarTexts.forEach(text => {
                text.style.opacity = '0';
                text.classList.add('hidden');
            });
            if (logoImage) {
                logoImage.classList.add('hidden');
            }
            tooltips.forEach(tooltip => {
                tooltip.classList.remove('hidden');
            });
        } else {
            // Expandir sidebar
            sidebar.classList.remove('w-[60px]');
            sidebar.classList.add('w-[250px]');
            toggleIcon.style.transform = 'rotate(0deg)';
            if (logoImage) {
                logoImage.classList.remove('hidden');
            }
            tooltips.forEach(tooltip => {
                tooltip.classList.add('hidden');
            });
            sidebarTexts.forEach(text => {
                text.classList.remove('hidden');
                setTimeout(() => {
                    text.style.opacity = '1';
                }, 150);
            });
        }
    }

    function handleResponsiveLayout() {
        if (window.innerWidth < 640 && sidebar.classList.contains('w-[250px]')) {
            toggleSidebar();
        }
    }

    // Agregar event listeners
    sidebarToggle.addEventListener('click', toggleSidebar);
    window.addEventListener('resize', handleResponsiveLayout);

    // Ejecutar el layout responsive inicial
    handleResponsiveLayout();
}

// ==================== MÓDULO DATA-LIST ====================
function initDataList() {
    const dataListElement = document.getElementById('data-list');
    if (dataListElement && dataListElement.getAttribute('data-source')) {
        const dataSource = dataListElement.getAttribute('data-source');
        loadData(dataSource);
    } else {
        loadData(config.defaultArchive);
    }
    console.log("data-list element:", dataListElement);
}

// Cargar datos desde una fuente específica
function loadData(dataSource) {
    loadDataFromUrl(dataSource,
        // Callback de éxito
        (data) => {
            // Adaptarse a la estructura real del JSON
            if (Array.isArray(data) && data.length > 0) {
                // Si es un array de arrays
                if (Array.isArray(data[0])) {
                    allData = data[0]; // Tomar el primer array interno
                } else {
                    allData = data; // Es un array simple
                }
            } else if (data.dataFiles && Array.isArray(data.dataFiles)) {
                // Si tiene la estructura esperada con dataFiles
                allData = data.dataFiles;
            } else if (typeof data === 'object') {
                // Si es un objeto simple, convertir cada propiedad en una fila
                allData = Object.entries(data).map(([key, value]) => ({
                    key: key,
                    value: typeof value === 'object' ? JSON.stringify(value) : value
                }));
            } else {
                throw new Error('Formato de datos no reconocido');
            }

            // Inicializar con todos los datos
            filteredData = [...allData];
            console.log("data:", data);
            // Renderizar la primera página
            renderPage(1);
        },
        // Callback de error
        (error) => {
            const dataList = document.getElementById('data-list');
            if (dataList) {
                dataList.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando datos: ${error.message}
                    </div>
                `;
            }
        }
    );
}

// Renderizar una página de datos
function renderPage(page) {
    console.log("pagina: ", page);
    currentPage = page;
    const startIndex = (page - 1) * config.itemsPerPage;
    const endIndex = startIndex + config.itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    const dataList = document.getElementById('data-list');
    if (!dataList) return;

    if (pageData.length === 0) {
        dataList.innerHTML = `
            <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
                No se encontraron datos que coincidan con los criterios de búsqueda.
            </div>
        `;
        const pagination = document.getElementById('pagination');
        if (pagination) pagination.innerHTML = '';
        return;
    }

    // Determinar si necesitamos scroll horizontal
    const headers = Object.keys(pageData[0]);
    const needsScroll = headers.length > 4;

    // Generar encabezados dinámicamente basados en el primer elemento
    if (pageData.length > 0) {
        const dataHeaders = document.getElementById('data-headers');
        if (!dataHeaders) return;
        console.log("datalistelement:", dataList);  // Cambiado de dataListElement a dataList

        // Limpiar cualquier clase de scroll anterior
        if (dataHeaders.parentElement) {
            dataHeaders.parentElement.classList.remove('overflow-x-auto');
        }

        // Calcular el ancho de columna basado en el número de propiedades
        const colSpan = Math.floor(12 / headers.length);

        let headersHtml = '';

        if (needsScroll) {
            // Para muchas columnas, usamos un contenedor con ancho fijo para cada columna
            headersHtml = '';
            headers.forEach(header => {
                const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
                headersHtml += `<div class="px-4 py-2 min-w-[150px] font-medium text-gray-700">${displayName}</div>`;
            });
        } else {
            // Para pocas columnas, usamos grid
            headers.forEach(header => {
                const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
                headersHtml += `<div class="col-span-${colSpan} font-medium text-gray-700">${displayName}</div>`;
            });
        }

        dataHeaders.innerHTML = headersHtml;
    }

    let html = '';

    if (needsScroll) {
        // Crear un contenedor único con scroll para encabezados y datos
        html = `<div class="overflow-x-auto shadow-md rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>`;

        // Añadir encabezados a la tabla
        headers.forEach(header => {
            const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
            html += `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50">${displayName}</th>`;
        });

        html += `</tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">`;

        // Añadir filas de datos con estilos alternados
        pageData.forEach((item, index) => {
            const rowClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";
            html += `<tr class="${rowClass} hover:bg-blue-50 transition-colors duration-150">`;

            headers.forEach(header => {
                let value = item[header];
                // Formatear objetos o arrays
                if (typeof value === 'object' && value !== null) {
                    value = JSON.stringify(value);
                }

                html += `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${value}</td>`;
            });

            html += `</tr>`;
        });

        html += `</tbody>
                </table>
            </div>`;

        // Ocultar los encabezados originales cuando usamos tabla
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.style.display = 'none';
        }
    } else {
        // Formato original para pocas columnas
        // Mostrar los encabezados originales
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.style.display = '';
        }

        pageData.forEach(item => {
            const colSpan = Math.floor(12 / headers.length);

            html += `<div class="bg-white border border-gray-200 rounded-md p-4 mb-3 hover:shadow-md transition-all">`;
            html += `<div class="grid grid-cols-12 gap-4">`;

            headers.forEach(header => {
                let value = item[header];

                // Formatear objetos o arrays
                if (typeof value === 'object' && value !== null) {
                    value = JSON.stringify(value);
                }

                html += `<div class="col-span-${colSpan} text-gray-800">${value}</div>`;
            });

            html += `</div>`;
            html += `</div>`;
        });
    }

    dataList.innerHTML = html;

    // Actualizar paginación
    updatePagination();
}

// Actualizar la paginación
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / config.itemsPerPage);
    const pagination = document.getElementById('pagination');

    if (!pagination || totalPages <= 1) {
        if (pagination) pagination.innerHTML = '';
        return;
    }

    let paginationHtml = `
        <div class="flex items-center justify-between mt-4 w-full max-w-md">
            <button id="prev-page" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left text-sm"></i>
                <span>Anterior</span>
            </button>
            <span class="text-gray-700 font-medium">Página ${currentPage} de ${totalPages}</span>
            <button id="next-page" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400" ${currentPage === totalPages ? 'disabled' : ''}>
                <span>Siguiente</span>
                <i class="fas fa-chevron-right text-sm"></i>
            </button>
        </div>
    `;

    pagination.innerHTML = paginationHtml;

    // Agregar event listeners para los botones de paginación
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    
    if (prevButton) {
        prevButton.onclick = function() {
            if (currentPage > 1) {
                console.log("Botón anterior clickeado, cambiando a página", currentPage - 1);
                renderPage(currentPage - 1);
            }
        };
    }
    
    if (nextButton) {
        nextButton.onclick = function() {
            if (currentPage < totalPages) {
                console.log("Botón siguiente clickeado, cambiando a página", currentPage + 1);
                renderPage(currentPage + 1);
            }
        };
    }
}

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

/**
 * Inicializa un gráfico con los datos proporcionados
 * @param {Object} data - Datos para el gráfico
 */
function initializeChart(data) {
    // Verificar si existe la función createChart (posiblemente en graphic.js)
    if (typeof createChart === 'function') {
        createChart(data);
    } else {
        console.error('La función createChart no está disponible');
        
        // Implementación básica de respaldo
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
        
        if (data.statistics) {
            // Usar las estadísticas del repositorio
            labels = Object.keys(data.statistics).filter(key => typeof data.statistics[key] === 'number');
            values = labels.map(key => data.statistics[key]);
        } else if (typeof data === 'object') {
            // Fallback: usar todas las propiedades numéricas
            labels = Object.keys(data).filter(key => typeof data[key] === 'number');
            values = labels.map(key => data[key]);
        }
        
        // Crear el gráfico si Chart.js está disponible
        if (typeof Chart === 'function') {
            const ctx = chartContainer.getContext('2d');
            window.currentChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Datos',
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
                            text: 'Gráfico de Datos'
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
    }
}

// Exportar funciones para uso global
window.initSection = initSection;
window.filterData = filterData;
window.initializeChart = initializeChart;

// Función para cargar el navbar y procesar la configuracion de la seccion
document.addEventListener('DOMContentLoaded', function() {
    // Cargar el navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
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
    }

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
        console.log("Titulo:", config.title)
    }
    console.log("Titulo:", config.title)
    
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

// ==================== MÓDULO DE GRÁFICOS ====================
/**
 * Inicializa el gráfico de workflows
 */
function initWorkflowsChart() {
    console.log('Inicializando gráfico de workflows');
    
    // Obtener referencias a los canvas
    const chartCanvas = document.getElementById('workflows-chart');
    const statusCanvas = document.getElementById('workflows-status-chart');
    
    if (!chartCanvas || !statusCanvas) {
        console.error('No se encontraron los elementos canvas para los gráficos');
        return;
    }
    
    // Destruir gráficos existentes si existen
    if (workflowsBarChart) {
        workflowsBarChart.destroy();
        workflowsBarChart = null;
    }
    
    if (workflowsStatusChart) {
        workflowsStatusChart.destroy();
        workflowsStatusChart = null;
    }
    
    // Limpiar los canvas para evitar problemas de Chart.js
    // Esto es crucial para evitar el error "Canvas is already in use"
    const barChartParent = chartCanvas.parentNode;
    const statusChartParent = statusCanvas.parentNode;
    
    // Recrear los canvas para asegurarnos de que estén limpios
    const newBarCanvas = document.createElement('canvas');
    newBarCanvas.id = 'workflows-chart';
    const newStatusCanvas = document.createElement('canvas');
    newStatusCanvas.id = 'workflows-status-chart';
    
    // Reemplazar los canvas existentes con los nuevos
    if (barChartParent) {
        barChartParent.innerHTML = '';
        barChartParent.appendChild(newBarCanvas);
    }
    
    if (statusChartParent) {
        statusChartParent.innerHTML = '';
        statusChartParent.appendChild(newStatusCanvas);
    }
    
    // Cargar datos para el gráfico con los nuevos canvas
    loadDataFromUrl(
        'data/kaos-workflows-runs.json',
        (data) => {
            createWorkflowsCharts(newBarCanvas, newStatusCanvas, data);
        },
        (error) => {
            console.error('Error cargando datos para el gráfico:', error);
            const chartContainer = document.getElementById('chart-container');
            const statusChartContainer = document.getElementById('status-chart-container');
            
            if (chartContainer) {
                chartContainer.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando datos para el gráfico: ${error.message}
                    </div>
                `;
            }
            
            if (statusChartContainer) {
                statusChartContainer.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando datos para el gráfico: ${error.message}
                    </div>
                `;
            }
        }
    );
}

/**
 * Crea los gráficos de workflows basados en los datos proporcionados
 * @param {HTMLCanvasElement} barCanvas - El elemento canvas para el gráfico de barras
 * @param {HTMLCanvasElement} pieCanvas - El elemento canvas para el gráfico circular
 * @param {Array} data - Los datos de workflows
 */
function createWorkflowsCharts(barCanvas, pieCanvas, data) {
    if (!barCanvas || !pieCanvas || !data || !Array.isArray(data)) return;

    // Procesar datos para el gráfico
    const workflowNames = {};
    const workflowStatus = {
        'completed': { count: 0, color: 'rgba(34, 197, 94, 0.7)' },
        'in_progress': { count: 0, color: 'rgba(59, 130, 246, 0.7)' },
        'queued': { count: 0, color: 'rgba(250, 204, 21, 0.7)' },
        'failure': { count: 0, color: 'rgba(239, 68, 68, 0.7)' },
        'cancelled': { count: 0, color: 'rgba(156, 163, 175, 0.7)' },
        'other': { count: 0, color: 'rgba(107, 114, 128, 0.7)' }
    };

    // Contar workflows por nombre
    data.forEach(workflow => {
        if (workflow.name) {
            if (!workflowNames[workflow.name]) {
                workflowNames[workflow.name] = 0;
            }
            workflowNames[workflow.name]++;
        }

        // Contar por estado
        if (workflow.status === 'completed') {
            if (workflow.conclusion === 'success') {
                workflowStatus.completed.count++;
            } else if (workflow.conclusion === 'failure') {
                workflowStatus.failure.count++;
            } else if (workflow.conclusion === 'cancelled') {
                workflowStatus.cancelled.count++;
            } else {
                workflowStatus.other.count++;
            }
        } else if (workflow.status === 'in_progress') {
            workflowStatus.in_progress.count++;
        } else if (workflow.status === 'queued') {
            workflowStatus.queued.count++;
        } else {
            workflowStatus.other.count++;
        }
    });

    // Crear datasets para el gráfico de barras
    const workflowNamesLabels = Object.keys(workflowNames).slice(0, 10); // Limitar a 10 workflows
    const workflowNamesCounts = workflowNamesLabels.map(name => workflowNames[name]);
    
    // Crear datasets para el gráfico circular
    const statusLabels = ['Completados', 'En progreso', 'En cola', 'Fallidos', 'Cancelados', 'Otros'];
    const statusCounts = [
        workflowStatus.completed.count,
        workflowStatus.in_progress.count,
        workflowStatus.queued.count,
        workflowStatus.failure.count,
        workflowStatus.cancelled.count,
        workflowStatus.other.count
    ];
    const statusColors = [
        workflowStatus.completed.color,
        workflowStatus.in_progress.color,
        workflowStatus.queued.color,
        workflowStatus.failure.color,
        workflowStatus.cancelled.color,
        workflowStatus.other.color
    ];

    try {
        // Crear el gráfico de barras
        workflowsBarChart = new Chart(barCanvas, {
            type: 'bar',
            data: {
                labels: workflowNamesLabels,
                datasets: [{
                    label: 'Número de ejecuciones',
                    data: workflowNamesCounts,
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Workflows más ejecutados'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Ejecuciones: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Número de ejecuciones'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Nombre del workflow'
                        }
                    }
                }
            }
        });

        // Crear el gráfico circular
        workflowsStatusChart = new Chart(pieCanvas, {
            type: 'doughnut',
            data: {
                labels: statusLabels,
                datasets: [{
                    data: statusCounts,
                    backgroundColor: statusColors,
                    borderColor: statusColors.map(color => color.replace('0.7', '1')),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Estado de los workflows'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error al crear los gráficos:', error);
        alert('Error al crear los gráficos: ' + error.message);
    }
}

// Modificar la función loadWebsConfig para inicializar el gráfico
function loadWebsConfig() {
    loadDataFromUrl(
        'data/webs.json',
        (data) => {
            webConfig = data;
            console.log('Configuración principal cargada:', webConfig);

            // Inicializar la barra de navegación
            initNavbar();
            processConfig(webConfig);
            // Inicializar el módulo de datos
            initDataList();
            // Inicializar el gráfico de workflows
            initWorkflowsChart();

            // Inicializar el mapa de configuración de secciones
            if (webConfig && webConfig.sections) {
                webConfig.sections.forEach(section => {
                    sectionConfigMap[section.title] = {
                        configFile: section.data,
                        metrics: [] // Se llenará al cargar la configuración específica
                    };
                });
            }

            // Inicializar los módulos específicos según la página actual
            const currentPath = window.location.pathname;

            // Determinar qué sección inicializar basado en la ruta
            if (webConfig && webConfig.sections) {
                for (const section of webConfig.sections) {
                    if (currentPath.includes(section.title.toLowerCase())) {
                        initSection(section.title);
                        break;
                    }
                }
            }
        },
        (error) => {
            console.error('Error cargando configuración principal:', error);
        }
    );
}

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
        console.log("Titulo:", config.title)
    }
    console.log("Titulo:", config.title)
    
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
