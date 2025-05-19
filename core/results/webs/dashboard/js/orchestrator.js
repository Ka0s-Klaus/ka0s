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
 * Carga el contenido de una sección específica
 * @param {string} sectionName - Nombre de la sección a cargar
 * @param {string} templatePath - Ruta al archivo de plantilla JSON
 */
function loadSectionContent(sectionName, templatePath) {
    console.log(`Cargando sección: ${sectionName} desde ${templatePath}`);
    
    // Eliminar cualquier mensaje de error anterior
    const existingErrors = document.querySelectorAll('.bg-red-100.border.border-red-400');
    existingErrors.forEach(errorElement => {
        errorElement.remove();
    });
    
    // Cargar la plantilla JSON
    loadDataFromUrl(
        templatePath,
        (templateData) => {
            // Actualizar título y descripción
            updateSectionHeader(templateData);
            
            // Actualizar métricas
            updateMetrics(templateData);
            
            // Configurar la lista de datos si existe
            if (templateData.templates && Array.isArray(templateData.templates)) {
                const listTemplate = templateData.templates.find(t => t.type === 'list');
                if (listTemplate) {
                    updateDataList(listTemplate);
                }
            }
            
            // Inicializar la sección específica
            initSection(sectionName);
            
            // Asegurarse de que los contenedores de gráficas estén presentes
            ensureChartContainers();
        },
        (error) => {
            console.error(`Error cargando plantilla para ${sectionName}:`, error);
            
            // En lugar de reemplazar todo el contenido, solo mostrar el error en un contenedor específico
            const errorContainer = document.createElement('div');
            errorContainer.className = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8";
            errorContainer.innerHTML = `Error cargando la sección: ${error.message}`;
            
            const contentContainer = document.getElementById('main-content');
            if (contentContainer) {
                // Preservar el encabezado y los contenedores de gráficas
                const header = contentContainer.querySelector('header');
                
                // Insertar el mensaje de error después del encabezado
                if (header) {
                    header.after(errorContainer);
                } else {
                    // Si no hay encabezado, simplemente añadir al principio
                    contentContainer.prepend(errorContainer);
                }
                
                // Reinicializar la barra de navegación para asegurar que los enlaces funcionen
                initNavbar();
            }
        }
    );
}

/**
 * Actualiza el encabezado de la sección con título y descripción
 * @param {Object} templateData - Datos de la plantilla
 */
function updateSectionHeader(templateData) {
    const titleElement = document.getElementById('section-title');
    const descriptionElement = document.getElementById('section-description');
    
    if (titleElement && templateData.title) {
        titleElement.textContent = templateData.title;
    }
    
    if (descriptionElement && templateData.description) {
        descriptionElement.textContent = templateData.description;
    }
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
                   class="flex items-center justify-center w-full py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group relative"
                   data-section="${section.title}" 
                   data-template="${section.datatemplate}">
                    <div class="flex items-center justify-center w-12">
                        <i class="fas ${section.icon} text-orange-300 group-hover:text-orange-500 text-xl"></i>
                    </div>
                    <span class="sidebar-text flex-1 font-medium capitalize">${section.title}</span>
                </a>`;
            navbar.appendChild(li);
            
            // Agregar event listener para cada enlace
            const link = li.querySelector('a');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionName = this.getAttribute('data-section');
                const templatePath = this.getAttribute('data-template');
                loadSectionContent(sectionName, templatePath);
            });
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



// Función para renderizar una página específica de datos
function renderPage(pageNumber) {
    const dataList = document.getElementById('data-list');
    if (!dataList) return;
    
    // Actualizar la página actual
    currentPage = pageNumber;
    
    // Calcular índices para la paginación
    const startIndex = (currentPage - 1) * config.itemsPerPage;
    const endIndex = Math.min(startIndex + config.itemsPerPage, filteredData.length);
    
    // Crear la estructura de la tabla
    let tableHTML = `
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
            <thead>
                <tr class="bg-gray-100">`;
    
    // Determinar las columnas basadas en el primer elemento
    const columns = [];
    if (filteredData.length > 0) {
        const firstItem = filteredData[0];
        for (const key in firstItem) {
            if (Object.prototype.hasOwnProperty.call(firstItem, key)) {
                columns.push(key);
            }
        }
        
        // Agregar encabezados de columna
        columns.forEach(column => {
            tableHTML += `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${column.toUpperCase()}</th>`;
        });
    }
    
    tableHTML += `
            </tr>
        </thead>
        <tbody>`;
    
    // Agregar filas de datos
    if (filteredData.length === 0) {
        tableHTML += `
            <tr>
                <td colspan="${columns.length}" class="px-6 py-4 text-center text-gray-500">
                    No se encontraron datos
                </td>
            </tr>`;
    } else {
        // Mostrar los datos de la página actual
        for (let i = startIndex; i < endIndex; i++) {
            const item = filteredData[i];
            const rowClass = i % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            
            tableHTML += `<tr class="${rowClass}">`;
            
            columns.forEach(column => {
                let cellValue = item[column] || '';
                // Truncar valores muy largos
                if (typeof cellValue === 'string' && cellValue.length > 50) {
                    cellValue = cellValue.substring(0, 47) + '...';
                }
                tableHTML += `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cellValue}</td>`;
            });
            
            tableHTML += `</tr>`;
        }
    }
    
    tableHTML += `
        </tbody>
    </table>
    </div>`;
    
    // Agregar paginación similar a la imagen
    if (filteredData.length > 0) {
        const totalPages = Math.ceil(filteredData.length / config.itemsPerPage);
        
        tableHTML += `
        <div class="flex items-center justify-between mt-4 px-4 py-3 bg-white border-t border-gray-200">
            <button onclick="renderPage(${Math.max(1, currentPage - 1)})" 
                class="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}">
                <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Anterior
            </button>
            
            <div class="text-sm text-gray-700">
                Página ${currentPage} de ${totalPages}
            </div>
            
            <button onclick="renderPage(${Math.min(totalPages, currentPage + 1)})" 
                class="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}">
                Siguiente
                <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>`;
    }
    
    // Actualizar el contenido
    dataList.innerHTML = tableHTML;
}

// Función para actualizar la paginación
function updatePagination() {
    const paginationElement = document.getElementById('pagination');
    if (!paginationElement) return;
    
    const totalPages = Math.ceil(filteredData.length / config.itemsPerPage);
    
    // No mostrar paginación si solo hay una página
    if (totalPages <= 1) {
        paginationElement.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Botón anterior
    paginationHTML += `
        <button class="px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}"
                ${currentPage === 1 ? 'disabled' : `onclick="renderPage(${currentPage - 1})"`}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Números de página
    for (let i = 1; i <= totalPages; i++) {
        // Mostrar solo algunas páginas para no sobrecargar la UI
        if (
            i === 1 || // Primera página
            i === totalPages || // Última página
            (i >= currentPage - 2 && i <= currentPage + 2) // Páginas cercanas a la actual
        ) {
            paginationHTML += `
                <button class="px-3 py-1 rounded-md ${i === currentPage ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}"
                        onclick="renderPage(${i})">
                    ${i}
                </button>
            `;
        } else if (
            (i === currentPage - 3 && currentPage > 3) ||
            (i === currentPage + 3 && currentPage < totalPages - 2)
        ) {
            // Puntos suspensivos para indicar páginas omitidas
            paginationHTML += `<span class="px-3 py-1">...</span>`;
        }
    }
    
    // Botón siguiente
    paginationHTML += `
        <button class="px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}"
                ${currentPage === totalPages ? 'disabled' : `onclick="renderPage(${currentPage + 1})"`}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    paginationElement.innerHTML = paginationHTML;
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
window.renderPage = renderPage;
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

/**
 * Actualiza las métricas en la interfaz
 * @param {Object} templateData - Datos de la plantilla
 */
function updateMetrics(templateData) {
    const metricsContainer = document.getElementById('metrics-container');
    if (!metricsContainer) return;
    
    // Limpiar métricas existentes
    metricsContainer.innerHTML = '';
    
    // Colores para las métricas
    const colors = ['blue', 'green', 'yellow', 'purple'];
    
    // Buscar todas las propiedades que comienzan con "metric"
    let metricIndex = 1;
    while (templateData[`metric${metricIndex}Title`] && templateData[`metric${metricIndex}`]) {
        const color = colors[(metricIndex - 1) % colors.length];
        const metricTitle = templateData[`metric${metricIndex}Title`];
        const metricValue = templateData[`metric${metricIndex}`];
        
        const metricElement = document.createElement('div');
        metricElement.className = `bg-${color}-50 rounded-lg p-4 shadow-sm`;
        metricElement.innerHTML = `
            <h2 class="text-lg font-semibold text-${color}-800">${metricTitle}</h2>
            <p class="text-3xl font-bold text-${color}-600" id="metric${metricIndex}">${metricValue}</p>
        `;
        
        metricsContainer.appendChild(metricElement);
        metricIndex++;
    }
}

/**
 * Actualiza la lista de datos
 * @param {Object} listTemplate - Configuración de la plantilla de lista
 */
function updateDataList(listTemplate) {
    const dataList = document.getElementById('data-list');
    if (!dataList) return;
    
    // Actualizar el título de la tabla
    const tableTitle = document.querySelector('#data-section h2');
    if (tableTitle && listTemplate.title) {
        tableTitle.textContent = listTemplate.title;
    }
    
    // Configurar la fuente de datos
    if (listTemplate.dataSource) {
        dataList.setAttribute('data-source', listTemplate.dataSource);
        // Cargar datos
        loadData(listTemplate.dataSource);
    }
    
    // Actualizar encabezados si están definidos
    if (listTemplate.columns && Array.isArray(listTemplate.columns)) {
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.innerHTML = '';
            
            // Determinar el número de columnas para la cuadrícula
            const colClass = `grid-cols-${Math.min(12, listTemplate.columns.length)}`;
            dataHeaders.className = `grid ${colClass} gap-4 mb-4 p-4 bg-gray-50 border-b`;
            
            listTemplate.columns.forEach(column => {
                const headerElement = document.createElement('div');
                headerElement.className = 'font-medium text-gray-700';
                headerElement.textContent = column;
                dataHeaders.appendChild(headerElement);
            });
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
    if (!config) return;
    
    // Actualizar título y descripción
    updateSectionHeader(config);
    
    // Actualizar métricas
    updateMetrics(config);
    
    // Configurar la lista de datos si existe
    if (config.templates && Array.isArray(config.templates)) {
        const listTemplate = config.templates.find(t => t.type === 'list');
        if (listTemplate) {
            updateDataList(listTemplate);
        }
    }
    
    // Renderizar métricas (mantener para compatibilidad)
    renderMetrics(config);
    
    // Renderizar plantillas (mantener para compatibilidad)
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

// Función para asegurar que los contenedores de gráficas estén presentes
function ensureChartContainers() {
    const contentContainer = document.getElementById('main-content');
    if (!contentContainer) return;
    
    // Verificar si ya existen los contenedores de gráficas
    let chartsContainer = document.getElementById('charts-container');
    
    // Si no existe el contenedor principal de gráficas, crearlo
    if (!chartsContainer) {
        chartsContainer = document.createElement('div');
        chartsContainer.id = 'charts-container';
        chartsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8';
        contentContainer.appendChild(chartsContainer);
        
        // Crear contenedor para el gráfico de barras
        const barChartContainer = document.createElement('div');
        barChartContainer.className = 'bg-white p-4 rounded-lg shadow';
        barChartContainer.innerHTML = `
            <h3 class="text-lg font-semibold mb-4">Workflows más ejecutados</h3>
            <div class="h-64">
                <canvas id="workflows-chart"></canvas>
            </div>
        `;
        chartsContainer.appendChild(barChartContainer);
        
        // Crear contenedor para el gráfico de estado
        const statusChartContainer = document.createElement('div');
        statusChartContainer.className = 'bg-white p-4 rounded-lg shadow';
        statusChartContainer.innerHTML = `
            <h3 class="text-lg font-semibold mb-4">Estado de los workflows</h3>
            <div class="h-64">
                <canvas id="workflows-status-chart"></canvas>
            </div>
        `;
        chartsContainer.appendChild(statusChartContainer);
    }
}

// ==================== MÓDULO DE GRÁFICOS ====================
/**
 * Inicializa el gráfico de workflows
 */
function initWorkflowsChart() {
    // Cargar datos para el gráfico
    loadDataFromUrl(
        config.defaultArchive,
        (data) => {
            // Procesar datos para el gráfico de barras
            const workflowsData = processWorkflowsData(data);
            
            // Crear el gráfico de barras
            createWorkflowsBarChart(workflowsData);
            
            // Procesar datos para el gráfico de estado
            const statusData = processWorkflowsStatusData(data);
            
            // Crear el gráfico de estado
            createWorkflowsStatusChart(statusData);
        },
        (error) => {
            console.error('Error cargando datos para gráficos:', error);
        }
    );
}

// Procesar datos para el gráfico de barras
function processWorkflowsData(data) {
    // Adaptarse a la estructura real del JSON
    let workflowsData = [];
    
    if (Array.isArray(data)) {
        // Contar ejecuciones por workflow
        const workflowCounts = {};
        
        data.forEach(item => {
            const workflowName = item.name || item.workflow_name || 'Desconocido';
            workflowCounts[workflowName] = (workflowCounts[workflowName] || 0) + 1;
        });
        
        // Convertir a formato para Chart.js
        workflowsData = {
            labels: Object.keys(workflowCounts),
            datasets: [{
                label: 'Número de ejecuciones',
                data: Object.values(workflowCounts),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
    }
    
    return workflowsData;
}

// Procesar datos para el gráfico de estado
function processWorkflowsStatusData(data) {
    // Adaptarse a la estructura real del JSON
    let statusData = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };
    
    if (Array.isArray(data) && data.length > 0) {
        // Detectar automáticamente el campo que contiene el estado
        const possibleStatusFields = ['status', 'state', 'conclusion', 'estado', 'estado actual', 'estadoActual', 'status_actual', 'workflow_status'];
        let statusField = null;
        
        // Examinar el primer elemento para encontrar un campo de estado
        const firstItem = data[0];
        for (const field of possibleStatusFields) {
            if (firstItem[field] !== undefined) {
                statusField = field;
                break;
            }
        }
        
        // Si no encontramos ningún campo predefinido, buscar cualquier campo que pueda contener información de estado
        if (!statusField) {
            // Buscar campos que contengan palabras clave relacionadas con estado
            const statusKeywords = ['status', 'state', 'estado', 'condition', 'situacion', 'situación'];
            
            for (const key in firstItem) {
                const keyLower = key.toLowerCase();
                if (statusKeywords.some(keyword => keyLower.includes(keyword))) {
                    statusField = key;
                    break;
                }
            }
            
            // Si aún no encontramos nada, usar el primer campo que tenga valores de texto cortos (probablemente sea un estado)
            if (!statusField) {
                for (const key in firstItem) {
                    const value = firstItem[key];
                    if (typeof value === 'string' && value.length < 20) {
                        statusField = key;
                        break;
                    }
                }
            }
            
            // Si todo falla, usar el primer campo disponible
            if (!statusField && Object.keys(firstItem).length > 0) {
                statusField = Object.keys(firstItem)[0];
            }
        }
        
        console.log(`Campo de estado detectado: ${statusField}`);
        
        // Contar workflows por estado
        const statusCounts = {};
        
        if (statusField) {
            data.forEach(item => {
                // Obtener el estado del workflow desde el campo detectado
                const status = item[statusField] || 'Desconocido';
                statusCounts[status] = (statusCounts[status] || 0) + 1;
            });
        } else {
            // Si no pudimos detectar ningún campo, usar un valor predeterminado
            statusCounts['Desconocido'] = data.length;
        }
        
        // Generar colores para los estados
        const predefinedColors = [
            'rgba(75, 192, 192, 0.8)',   // verde-azulado
            'rgba(255, 99, 132, 0.8)',   // rojo
            'rgba(54, 162, 235, 0.8)',   // azul
            'rgba(255, 205, 86, 0.8)',   // amarillo
            'rgba(153, 102, 255, 0.8)',  // morado
            'rgba(255, 159, 64, 0.8)',   // naranja
            'rgba(201, 203, 207, 0.8)',  // gris
            'rgba(128, 128, 128, 0.8)'   // gris oscuro
        ];
        
        // Asignar colores a los estados
        const statusColors = {};
        Object.keys(statusCounts).forEach((status, index) => {
            statusColors[status] = predefinedColors[index % predefinedColors.length];
        });
        
        // Traducciones comunes para estados
        const commonTranslations = {
            'success': 'Completados',
            'completed': 'Completados',
            'failure': 'Fallidos',
            'failed': 'Fallidos',
            'cancelled': 'Cancelados',
            'in_progress': 'En progreso',
            'pending': 'Pendientes',
            'queued': 'En cola',
            'skipped': 'Omitidos',
            'Desconocido': 'Otros'
        };
        
        // Traducir estados o formatear para mejor visualización
        const formatStatusLabel = (status) => {
            if (commonTranslations[status]) {
                return commonTranslations[status];
            }
            
            // Si no hay traducción, formatear el texto para mejor visualización
            return status
                .replace(/_/g, ' ')                      // Reemplazar guiones bajos por espacios
                .split(' ')                              // Dividir en palabras
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalizar cada palabra
                .join(' ');                              // Unir de nuevo
        };
        
        // Convertir a formato para Chart.js
        statusData.labels = Object.keys(statusCounts).map(formatStatusLabel);
        statusData.datasets[0].data = Object.values(statusCounts);
        statusData.datasets[0].backgroundColor = Object.keys(statusCounts).map(status => statusColors[status]);
    }
    
    return statusData;
}

// Crear el gráfico de barras de workflows
function createWorkflowsBarChart(data) {
    const ctx = document.getElementById('workflows-chart');
    if (!ctx) return;
    
    // Destruir el gráfico existente si hay uno
    if (workflowsBarChart) {
        workflowsBarChart.destroy();
    }
    
    // Crear el nuevo gráfico
    workflowsBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Workflows más ejecutados'
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
}

// Crear el gráfico circular de estado de workflows
function createWorkflowsStatusChart(data) {
    const ctx = document.getElementById('workflows-status-chart');
    if (!ctx) return;
    
    // Destruir el gráfico existente si hay uno
    if (workflowsStatusChart) {
        workflowsStatusChart.destroy();
    }
    
    // Crear el nuevo gráfico
    workflowsStatusChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: false,
                    text: 'Estado de los workflows'
                }
            }
        }
    });
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

/**
 * Actualiza las métricas en la interfaz
 * @param {Object} templateData - Datos de la plantilla
 */
function updateMetrics(templateData) {
    const metricsContainer = document.getElementById('metrics-container');
    if (!metricsContainer) return;
    
    // Limpiar métricas existentes
    metricsContainer.innerHTML = '';
    
    // Colores para las métricas
    const colors = ['blue', 'green', 'yellow', 'purple'];
    
    // Buscar todas las propiedades que comienzan con "metric"
    let metricIndex = 1;
    while (templateData[`metric${metricIndex}Title`] && templateData[`metric${metricIndex}`]) {
        const color = colors[(metricIndex - 1) % colors.length];
        const metricTitle = templateData[`metric${metricIndex}Title`];
        const metricValue = templateData[`metric${metricIndex}`];
        
        const metricElement = document.createElement('div');
        metricElement.className = `bg-${color}-50 rounded-lg p-4 shadow-sm`;
        metricElement.innerHTML = `
            <h2 class="text-lg font-semibold text-${color}-800">${metricTitle}</h2>
            <p class="text-3xl font-bold text-${color}-600" id="metric${metricIndex}">${metricValue}</p>
        `;
        
        metricsContainer.appendChild(metricElement);
        metricIndex++;
    }
}

/**
 * Actualiza la lista de datos
 * @param {Object} listTemplate - Configuración de la plantilla de lista
 */
function updateDataList(listTemplate) {
    const dataList = document.getElementById('data-list');
    if (!dataList) return;
    
    // Actualizar el título de la tabla
    const tableTitle = document.querySelector('#data-section h2');
    if (tableTitle && listTemplate.title) {
        tableTitle.textContent = listTemplate.title;
    }
    
    // Configurar la fuente de datos
    if (listTemplate.dataSource) {
        dataList.setAttribute('data-source', listTemplate.dataSource);
        // Cargar datos
        loadData(listTemplate.dataSource);
    }
    
    // Actualizar encabezados si están definidos
    if (listTemplate.columns && Array.isArray(listTemplate.columns)) {
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.innerHTML = '';
            
            // Determinar el número de columnas para la cuadrícula
            const colClass = `grid-cols-${Math.min(12, listTemplate.columns.length)}`;
            dataHeaders.className = `grid ${colClass} gap-4 mb-4 p-4 bg-gray-50 border-b`;
            
            listTemplate.columns.forEach(column => {
                const headerElement = document.createElement('div');
                headerElement.className = 'font-medium text-gray-700';
                headerElement.textContent = column;
                dataHeaders.appendChild(headerElement);
            });
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
    if (!config) return;
    
    // Actualizar título y descripción
    updateSectionHeader(config);
    
    // Actualizar métricas
    updateMetrics(config);
    
    // Configurar la lista de datos si existe
    if (config.templates && Array.isArray(config.templates)) {
        const listTemplate = config.templates.find(t => t.type === 'list');
        if (listTemplate) {
            updateDataList(listTemplate);
        }
    }
    
    // Renderizar métricas (mantener para compatibilidad)
    renderMetrics(config);
    
    // Renderizar plantillas (mantener para compatibilidad)
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

// Función para asegurar que los contenedores de gráficas estén presentes
function ensureChartContainers() {
    const contentContainer = document.getElementById('main-content');
    if (!contentContainer) return;
    
    // Verificar si ya existen los contenedores de gráficas
    let chartsContainer = document.getElementById('charts-container');
    
    // Si no existe el contenedor principal de gráficas, crearlo
    if (!chartsContainer) {
        chartsContainer = document.createElement('div');
        chartsContainer.id = 'charts-container';
        chartsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8';
        contentContainer.appendChild(chartsContainer);
        
        // Crear contenedor para el gráfico de barras
        const barChartContainer = document.createElement('div');
        barChartContainer.className = 'bg-white p-4 rounded-lg shadow';
        barChartContainer.innerHTML = `
            <h3 class="text-lg font-semibold mb-4">Workflows más ejecutados</h3>
            <div class="h-64">
                <canvas id="workflows-chart"></canvas>
            </div>
        `;
        chartsContainer.appendChild(barChartContainer);
        
        // Crear contenedor para el gráfico de estado
        const statusChartContainer = document.createElement('div');
        statusChartContainer.className = 'bg-white p-4 rounded-lg shadow';
        statusChartContainer.innerHTML = `
            <h3 class="text-lg font-semibold mb-4">Estado de los workflows</h3>
            <div class="h-64">
                <canvas id="workflows-status-chart"></canvas>
            </div>
        `;
        chartsContainer.appendChild(statusChartContainer);
    }
}
