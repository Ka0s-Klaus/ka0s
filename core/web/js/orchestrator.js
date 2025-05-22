// Configuración global
const config = {
    itemsPerPage: 10,
    defaultArchive: 'data/kaos-workflows-available.json',
    defaultSection: 'Workflows',
    defaultTemplate: 'data/section1.json'
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
let charts = {};


// ==================== UTILIDADES GENERALES ====================
/**
 * Función genérica para cargar datos desde una URL
 * @param {string|Array} url - La URL del archivo a cargar o array de objetos con URLs
 * @param {function} successCallback - Función a ejecutar si la carga es exitosa
 * @param {function} errorCallback - Función a ejecutar si hay un error (opcional)
 */
function loadDataFromUrl(url, successCallback, errorCallback = null) {
    console.log(`Cargando datos desde: ${url}`);

    // Si url es un array, procesamos cada elemento por separado
    if (Array.isArray(url)) {
        // Crear un array para almacenar todas las promesas de fetch
        const fetchPromises = url.map(item => {
            const urlToFetch = item.url || item;
            return fetch(urlToFetch)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }
                    return response.json();
                });
        });

        // Esperar a que todas las promesas se resuelvan
        Promise.all(fetchPromises)
            .then(dataArray => {
                if (successCallback && typeof successCallback === 'function') {
                    successCallback(dataArray);
                }
            })
            .catch(error => {
                console.error(`Error cargando datos desde ${url}:`, error);
                if (errorCallback && typeof errorCallback === 'function') {
                    errorCallback(error);
                }
            });
    } else {
        // Comportamiento original para una sola URL
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
}

function initApp() {
    // Usar directamente la configuración por defecto
    console.log('Inicializando aplicación con configuración por defecto');
    
    // Inicializar la barra de navegación
    initNavbar();
    
    // Cargar la sección por defecto
    loadSectionContent(config.defaultSection, config.defaultTemplate);
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initApp);

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
 * Procesa las plantillas de la sección actual
 * @param {Object} templateData - Datos de la plantilla JSON
 */
// ... existing code ...

// ... existing code ...

function processTemplates(templateData) {
    if (!templateData.templates || !Array.isArray(templateData.templates)) {
        console.error('No se encontraron plantillas en los datos');
        return;
    }
    
    // Estado de todas las listas
    const listsState = {};
    window.listsState = listsState;
    // --- GRÁFICOS ---
    const graphicTemplates = templateData.templates.filter(t => t.type === 'graphic');
    const chartsSection = document.getElementById('charts-section');
    if (chartsSection && graphicTemplates.length > 0) {
        chartsSection.style.display = 'block';
        const chartsContainer = document.getElementById('charts-container');
        if (chartsContainer) {
            chartsContainer.innerHTML = '';
            graphicTemplates.forEach((template, index) => {
                const graphicContainer = document.createElement('div');
                graphicContainer.className = 'bg-white rounded-lg shadow-sm p-4 mb-4';
                const titleElement = document.createElement('h3');
                titleElement.className = 'text-lg font-semibold mb-3';
                titleElement.textContent = template.title || `Gráfico ${index + 1}`;
                graphicContainer.appendChild(titleElement);

                // Determinar qué tipos de gráficos mostrar
                const chartTypes = template.chartTypes || ['bar', 'doughnut']; // Por defecto, mostrar ambos
                
                // Crear grid solo si hay más de un tipo de gráfico
                let chartsGrid;
                if (chartTypes.length > 1) {
                    chartsGrid = document.createElement('div');
                    chartsGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
                } else {
                    chartsGrid = document.createElement('div');
                    chartsGrid.className = 'w-full';
                }
                
                // Crear contenedores para cada tipo de gráfico solicitado
                let barChartId, doughnutChartId;
                
                if (chartTypes.includes('bar')) {
                    barChartId = `bar-chart-${index}`;
                    const barChartContainer = document.createElement('div');
                    barChartContainer.className = chartTypes.length > 1 ? 'h-64' : 'h-80 mx-auto';
                    barChartContainer.innerHTML = `<canvas id="${barChartId}"></canvas>`;
                    chartsGrid.appendChild(barChartContainer);
                }
                
                if (chartTypes.includes('doughnut')) {
                    doughnutChartId = `doughnut-chart-${index}`;
                    const doughnutChartContainer = document.createElement('div');
                    doughnutChartContainer.className = chartTypes.length > 1 ? 'h-64' : 'h-80 mx-auto';
                    doughnutChartContainer.innerHTML = `<canvas id="${doughnutChartId}"></canvas>`;
                    chartsGrid.appendChild(doughnutChartContainer);
                }
                
                graphicContainer.appendChild(chartsGrid);
                chartsContainer.appendChild(graphicContainer);

                if (template.dataSource) {
                    loadDataFromUrl(
                        template.dataSource,
                        (data) => {
                            if (barChartId) {
                                createBarChart(data, barChartId, template);
                            }
                            if (doughnutChartId) {
                                createDoughnutChart(data, doughnutChartId, template);
                            }
                        },
                        (error) => {
                            const errorMessage = `
                                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                    Error cargando datos para el gráfico: ${error.message}
                                </div>
                            `;
                            
                            if (barChartId && document.getElementById(barChartId)) {
                                document.getElementById(barChartId).parentNode.innerHTML = errorMessage;
                            }
                            
                            if (doughnutChartId && document.getElementById(doughnutChartId)) {
                                document.getElementById(doughnutChartId).parentNode.innerHTML = errorMessage;
                            }
                        }
                    );
                }
            });
        }
    } else if (chartsSection) {
        chartsSection.style.display = 'none';
    }
    
    // Procesamiento de plantillas de tipo "summary" para métricas dinámicas
    const summaryTemplates = templateData.templates.filter(t => t.type === 'summary');
    if (summaryTemplates.length > 0) {
        // Contenedor para métricas
        const metricsContainer = document.getElementById('metrics-container');
        if (!metricsContainer) return;
        
        summaryTemplates.forEach(template => {
            if (!template.dataSource || !template.metrics) return;
            
            // Cargar datos para calcular métricas
            loadDataFromUrl(
                template.dataSource,
                (data) => {
                    // Asegurarse de que los datos sean un array
                    const items = Array.isArray(data) ? data : (data.dataFiles || []);
                    if (!items.length) return;
                    
                    // Procesar cada métrica definida
                    template.metrics.forEach((metric, index) => {
                        let metricValue = '';
                        const metricId = `metric${index + 1}`;
                        const metricTitleId = `${metricId}Title`;
                        
                        // Calcular el valor según el tipo de métrica
                        switch (metric.type) {
                            case 'count':
                            let filteredItems = items;
                            // Aplicar filtro si existe
                            if (metric.filter && metric.filter.field && metric.filter.value !== undefined) {
                                filteredItems = filteredItems.filter(item => item[metric.filter.field] === metric.filter.value);
                            }
                            // Si hay groupBy, agrupar y contar
                            if (metric.groupBy) {
                                const groupCounts = {};
                                filteredItems.forEach(item => {
                                    const groupKey = item[metric.groupBy];
                                    if (!groupKey) return;
                                    groupCounts[groupKey] = (groupCounts[groupKey] || 0) + 1;
                                });
                                // Ordenar los grupos por cantidad descendente
                                const sortedGroups = Object.entries(groupCounts).sort((a, b) => b[1] - a[1]);
                                // Tomar el grupo más frecuente
                                if (sortedGroups.length > 0) {
                                    const [mostCommonGroup, count] = sortedGroups[0];
                                    // Mostrar el nombre del evento más común o el valorField si está definido
                                    metricValue = metric.valueField ? mostCommonGroup : count.toString();
                                } else {
                                    metricValue = '';
                                }
                            } else {
                                // Si no hay groupBy, solo contar los elementos filtrados
                                metricValue = filteredItems.length.toString();
                            }
                            break;
                                
                            case 'rate':
                                // Calcular porcentaje (ej: tasa de éxito)
                                if (metric.numerator && metric.denominator) {
                                    let numerator = 0;
                                    const denominator = metric.denominator === 'total' ? items.length : 0;
                                    
                                    // Contar elementos que cumplen la condición
                                    if (metric.numerator.field && metric.numerator.value) {
                                        numerator = items.filter(item => 
                                            item[metric.numerator.field] === metric.numerator.value
                                        ).length;
                                    }
                                    
                                    // Calcular porcentaje
                                    const rate = denominator > 0 ? (numerator / denominator) * 100 : 0;
                                    metricValue = metric.format === 'percentage' ? 
                                        `${Math.round(rate)}%` : rate.toFixed(2);
                                }
                                break;
                                
                            case 'average':
                                // Calcular promedio de un campo numérico
                                if (metric.field) {
                                    const validItems = items.filter(item => 
                                        item[metric.field] !== undefined && 
                                        !isNaN(parseFloat(item[metric.field]))
                                    );
                                    
                                    if (validItems.length > 0) {
                                        const sum = validItems.reduce((acc, item) => 
                                            acc + parseFloat(item[metric.field]), 0
                                        );
                                        const avg = sum / validItems.length;
                                        
                                        if (metric.format === 'time') {
                                            // Formatear como tiempo (minutos:segundos)
                                            const minutes = Math.floor(avg / 60);
                                            const seconds = Math.round(avg % 60);
                                            metricValue = `${minutes}m ${seconds}s`;
                                        } else {
                                            metricValue = avg.toFixed(2);
                                        }
                                    }
                                }
                                break;
                                
                            case 'latest':
                                // Obtener el valor más reciente de un campo
                                if (metric.field) {
                                    // Ordenar por fecha si es posible
                                    const sortedItems = [...items].sort((a, b) => {
                                        const dateA = new Date(a[metric.field] || 0);
                                        const dateB = new Date(b[metric.field] || 0);
                                        return dateB - dateA; // Orden descendente
                                    });
                                    
                                    if (sortedItems.length > 0 && sortedItems[0][metric.field]) {
                                        if (metric.format === 'date') {
                                            // Formatear como fecha
                                            const date = new Date(sortedItems[0][metric.field]);
                                            metricValue = date.toLocaleDateString();
                                        } else {
                                            metricValue = sortedItems[0][metric.field];
                                        }
                                    }
                                }
                                break;
                                
                            case 'max':
                                // Encontrar el valor máximo (ej: producto más vendido)
                                if (metric.field && metric.groupBy) {
                                    // Agrupar por el campo especificado
                                    const groups = {};
                                    items.forEach(item => {
                                        const groupKey = item[metric.groupBy];
                                        if (!groupKey) return;
                                        
                                        if (!groups[groupKey]) {
                                            groups[groupKey] = 0;
                                        }
                                        
                                        // Sumar el valor del campo
                                        const value = parseFloat(item[metric.field]) || 0;
                                        groups[groupKey] += value;
                                    });
                                    
                                    // Encontrar el grupo con el valor máximo
                                    let maxGroup = null;
                                    let maxValue = -Infinity;
                                    
                                    Object.entries(groups).forEach(([group, value]) => {
                                        if (value > maxValue) {
                                            maxGroup = group;
                                            maxValue = value;
                                        }
                                    });
                                    
                                    if (maxGroup) {
                                        metricValue = maxGroup;
                                    }
                                }
                                break;
                                
                            case 'sum':
                                // Sumar valores de un campo
                                if (metric.field) {
                                    const sum = items.reduce((acc, item) => {
                                        const value = parseFloat(item[metric.field]) || 0;
                                        return acc + value;
                                    }, 0);
                                    
                                    if (metric.format === 'currency') {
                                        metricValue = `$${sum.toLocaleString('es-ES', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}`;
                                    } else {
                                        metricValue = sum.toString();
                                    }
                                }
                                break;
                        }
                        
                        // Actualizar las métricas en templateData para que estén disponibles
                        templateData[metricTitleId] = metric.title || `Métrica ${index + 1}`;
                        templateData[metricId] = metricValue;
                    });
                    
                    // Actualizar las métricas en la interfaz
                    updateMetrics(templateData);
                },
                (error) => {
                    console.error(`Error cargando datos para métricas: ${error.message}`);
                }
            );
        });
    }
    
    // Listas
    const listTemplates = templateData.templates.filter(t => t.type === 'list');
    const mainContent = document.getElementById('main-content');
    // Elimina listas previas para evitar duplicados
    const oldLists = document.querySelectorAll('.dynamic-list-section');
    oldLists.forEach(el => el.remove());

    listTemplates.forEach((listTemplate, idx) => {
        // Crear contenedor para cada lista
        const listId = `list-${idx}`;
        const containerId = `data-list-${idx}`;
        const listSection = document.createElement('div');
        listSection.className = 'dynamic-list-section bg-white rounded-lg shadow-md p-6 mb-6';
        // Título de la lista
        const title = document.createElement('h2');
        title.className = 'text-xl font-semibold mb-4';
        title.textContent = listTemplate.title || `Lista ${idx + 1}`;
        listSection.appendChild(title);
        // Contenedor de la lista
        const dataList = document.createElement('div');
        dataList.id = containerId;
        listSection.appendChild(dataList);
        // Añadir al contenido principal
        if (mainContent) mainContent.appendChild(listSection);

        // Cargar datos para la lista
        loadDataFromUrl(
            listTemplate.dataSource,
            (data) => {
                // Inicializar datos completos
                const allData = Array.isArray(data) ? data : (data.dataFiles || []);
                
                // Aplicar filtro si existe en la configuración de la plantilla
                let filteredData = allData;
                if (listTemplate.filter) {
                    console.log(`Aplicando filtro: ${listTemplate.filter}`);
                    const filterParts = listTemplate.filter.split(':').map(part => part.trim());
                    if (filterParts.length === 2) {
                        const [field, value] = filterParts;
                        filteredData = allData.filter(item => {
                            return String(item[field]).toLowerCase() === value.toLowerCase();
                        });
                    }
                }
                
                // Inicializar estado de la lista con los datos filtrados
                listsState[listId] = {
                    allData: allData,
                    filteredData: filteredData,
                    columns: listTemplate.columns || (Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : []),
                    currentPage: 1,
                    pageSize: 10,
                    containerId
                };
                renderPage(listId);
            },
            (error) => {
                dataList.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando datos: ${error.message}
                    </div>
                `;
            }
        );
    });

    /**
     * Renderiza una página de una lista específica
     * @param {string} listId - ID único de la lista
     */
    function renderPage(listId) {
        const state = listsState[listId];
        if (!state) return;

        // Procesar columnas para extraer nombre y color
        const processedColumns = (state.columns || []).map(col => {
            const match = col.match(/^([^:]+)(?::\s*(\w+))?$/);
            return {
                key: match ? match[1] : col,
                color: match && match[2] ? match[2].toLowerCase() : null,
                original: col
            };
        });

        const { filteredData, currentPage, pageSize, containerId } = state;
        const dataList = document.getElementById(containerId);
        if (!dataList) return;

        // Calcular paginación
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pageData = filteredData.slice(start, end);

        // Renderizar tabla con Tailwind
        let html = `
        <div class="overflow-x-auto rounded-lg shadow">
            <table class="min-w-full divide-y divide-gray-200 bg-white">
                <thead class="bg-gray-100">
                    <tr>
                        ${processedColumns.map(col => `<th class="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">${col.key}</th>`).join('')}
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    ${pageData.map(row => `
                        <tr class="hover:bg-blue-50 transition-colors">
                            ${processedColumns.map(col => {
                                let cellClass = "px-4 py-2 text-sm text-gray-700";
                                if (col.color) {
                                    // Mapear color a clase de fondo de Tailwind
                                    const colorMap = {
                                        red: "bg-red-100 text-red-700 rounded-lg m-1 px-3 py-1 inline-block text-center",
                                        green: "bg-green-100 text-green-700 rounded-lg m-1 px-3 py-1 inline-block",
                                        yellow: "bg-yellow-100 text-yellow-700 rounded-lg m-1 px-3 py-1 inline-block",
                                        blue: "bg-blue-100 text-blue-700 rounded-lg m-1 px-3 py-1 inline-block",
                                        orange: "bg-orange-100 text-orange-700 rounded-lg m-1 px-3 py-1 inline-block text-center",
                                        purple: "bg-purple-100 text-purple-700 rounded-lg m-1 px-3 py-1 inline-block",
                                        gray: "bg-gray-100 text-gray-700 rounded-lg m-1 px-3 py-1 inline-block"
                                    };
                                    cellClass += " " + (colorMap[col.color] || "");
                                }
                                return `<td class="${cellClass}">${row[col.key] !== undefined ? row[col.key] : ''}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;

        // Renderizar paginador
        const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
        html += `
        <div class="pagination flex justify-center mt-4 gap-2">
            <button 
                class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                ${currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage('${listId}', ${currentPage - 1})">
                <i class="fas fa-chevron-left"></i>
            </button>
            <span class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
                Página ${currentPage} de ${totalPages}
            </span>
            <button 
                class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage('${listId}', ${currentPage + 1})">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        `;

        dataList.innerHTML = html;
    }

    // --- PAGINACIÓN GLOBAL PARA LISTAS DINÁMICAS ---
    window.listsState = window.listsState || listsState;
    /**
     * Cambia de página en una lista específica
     * @param {string} listId
     * @param {number} newPage
     */
    window.changePage = function(listId, newPage) {
        if (window.listsState[listId]) {
            window.listsState[listId].currentPage = newPage;
            renderPage(listId);
        }
    };
}


function clearContainers() {
    // Limpiar contenedor de gráficos
    const chartsContainer = document.getElementById('charts-container');
    if (chartsContainer) {
        chartsContainer.innerHTML = '';
    }
    
    // Ocultar sección de gráficos si existe
    const chartsSection = document.getElementById('charts-section');
    if (chartsSection) {
        chartsSection.style.display = 'none';
    }
    
    // Limpiar listas dinámicas
    const dynamicLists = document.querySelectorAll('.dynamic-list-section');
    dynamicLists.forEach(list => {
        list.remove();
    });
    
    // Destruir todos los gráficos existentes para liberar recursos
    if (charts) {
        Object.keys(charts).forEach(chartId => {
            if (charts[chartId]) {
                charts[chartId].destroy();
                delete charts[chartId];
            }
        });
    }
    
    // Reiniciar variables globales de gráficos
    if (workflowsBarChart) {
        workflowsBarChart.destroy();
        workflowsBarChart = null;
    }
    
    if (workflowsStatusChart) {
        workflowsStatusChart.destroy();
        workflowsStatusChart = null;
    }
    
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }
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
    clearContainers();
    
    // Cargar la plantilla JSON
    loadDataFromUrl(
        templatePath,
        (templateData) => {
            // Actualizar título y descripción
            updateSectionHeader(templateData);
            
            // Actualizar métricas
            updateMetrics(templateData);
            
            // Procesar las plantillas
            processTemplates(templateData);
            
            // Inicializar la sección específica
            initSection(sectionName);
        },
        (error) => {
            console.error(`Error cargando plantilla para ${sectionName}:`, error);
            
            // Mostrar mensaje de error
            const errorContainer = document.createElement('div');
            errorContainer.className = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8";
            errorContainer.innerHTML = `Error cargando la sección: ${error.message}`;
            
            const contentContainer = document.getElementById('main-content');
            if (contentContainer) {
                // Preservar el encabezado
                const header = contentContainer.querySelector('header');
                
                // Insertar el mensaje de error después del encabezado
                if (header) {
                    header.after(errorContainer);
                } else {
                    // Si no hay encabezado, simplemente añadir al principio
                    contentContainer.prepend(errorContainer);
                }
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
// Variable global para columnas actuales de la lista
let currentListColumns = [];

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
            // Renderizar la primera página usando las columnas actuales
            renderPage(1, currentListColumns);
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
function renderPage(pageNumber, columns = null) {
    const dataList = document.getElementById('data-list');
    if (!dataList) return;

    // Actualizar la página actual
    currentPage = pageNumber;

    // Calcular índices para la paginación
    const startIndex = (currentPage - 1) * config.itemsPerPage;
    const endIndex = Math.min(startIndex + config.itemsPerPage, filteredData.length);
    
    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredData.length / config.itemsPerPage);

    // Usar columnas del template si están definidas, si no, usar todas las del primer elemento
    let tableColumns = columns && columns.length > 0 ? columns : [];
    if (tableColumns.length === 0 && filteredData.length > 0) {
        tableColumns = Object.keys(filteredData[0]);
    }

    // Crear la estructura de la tabla
    let tableHTML = `
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
            <thead>
                <tr class="bg-gray-100">`;

    tableColumns.forEach(column => {
        tableHTML += `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${column.toUpperCase()}</th>`;
    });

    tableHTML += `
            </tr>
        </thead>
        <tbody>`;

    // Agregar filas de datos
    if (filteredData.length === 0) {
        tableHTML += `
            <tr>
                <td colspan="${tableColumns.length}" class="px-6 py-4 text-center text-gray-500">
                    No se encontraron datos
                </td>
            </tr>`;
    } else {
        // Mostrar los datos de la página actual
        for (let i = startIndex; i < endIndex; i++) {
            const item = filteredData[i];
            const rowClass = i % 2 === 0 ? 'bg-white' : 'bg-gray-50';

            tableHTML += `<tr class="${rowClass}">`;

            tableColumns.forEach(column => {
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

    // Agregar paginación
    if (totalPages > 1) {
        tableHTML += `
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
                <button id="prev-page-mobile" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Anterior
                </button>
                <button id="next-page-mobile" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Siguiente
                </button>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        Mostrando <span class="font-medium">${startIndex + 1}</span> a <span class="font-medium">${endIndex}</span> de <span class="font-medium">${filteredData.length}</span> resultados
                    </p>
                </div>
                <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button id="prev-page" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span class="sr-only">Anterior</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>`;

        // Mostrar números de página
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            const isCurrentPage = i === currentPage;
            tableHTML += `
                <button data-page="${i}" class="page-number relative inline-flex items-center px-4 py-2 border ${isCurrentPage ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'} text-sm font-medium">
                    ${i}
                </button>`;
        }

        tableHTML += `
                        <button id="next-page" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span class="sr-only">Siguiente</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>`;
    }

    // Actualizar el contenido del elemento
    dataList.innerHTML = tableHTML;
    
    // Añadir event listeners a los botones de paginación
    if (totalPages > 1) {
        // Botón anterior (versión escritorio)
        const prevButton = document.getElementById('prev-page');
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                if (currentPage > 1) {
                    renderPage(currentPage - 1, tableColumns);
                }
            });
            // Deshabilitar si estamos en la primera página
            prevButton.disabled = currentPage === 1;
            if (prevButton.disabled) {
                prevButton.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
        
        // Botón siguiente (versión escritorio)
        const nextButton = document.getElementById('next-page');
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    renderPage(currentPage + 1, tableColumns);
                }
            });
            // Deshabilitar si estamos en la última página
            nextButton.disabled = currentPage === totalPages;
            if (nextButton.disabled) {
                nextButton.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
        
        // Botón anterior (versión móvil)
        const prevButtonMobile = document.getElementById('prev-page-mobile');
        if (prevButtonMobile) {
            prevButtonMobile.addEventListener('click', function() {
                if (currentPage > 1) {
                    renderPage(currentPage - 1, tableColumns);
                }
            });
            // Deshabilitar si estamos en la primera página
            prevButtonMobile.disabled = currentPage === 1;
            if (prevButtonMobile.disabled) {
                prevButtonMobile.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
        
        // Botón siguiente (versión móvil)
        const nextButtonMobile = document.getElementById('next-page-mobile');
        if (nextButtonMobile) {
            nextButtonMobile.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    renderPage(currentPage + 1, tableColumns);
                }
            });
            // Deshabilitar si estamos en la última página
            nextButtonMobile.disabled = currentPage === totalPages;
            if (nextButtonMobile.disabled) {
                nextButtonMobile.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
        
        // Botones de número de página
        const pageButtons = document.querySelectorAll('.page-number');
        pageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pageNum = parseInt(this.getAttribute('data-page'));
                if (pageNum !== currentPage) {
                    renderPage(pageNum, tableColumns);
                }
            });
        });
    }
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



/**
 * Actualiza las métricas en la interfaz
 * @param {Object} templateData - Datos de la plantilla
 */
/**
 * Actualiza las métricas en la interfaz
 * @param {Object} templateData - Datos de la plantilla
 */
function updateMetrics(templateData) {
    const metricsContainer = document.getElementById('metrics-container');
    if (!metricsContainer) return;
    
    // Limpiar el contenedor
    metricsContainer.innerHTML = '';
    
    // Asegurar que el contenedor tenga la clase grid con 4 columnas en pantallas medianas
    const sectionData = templateData;
    const metricKeys = Object.keys(sectionData)
        .filter(key => key.startsWith('metric') && !key.endsWith('Title'));
    const numMetrics = metricKeys.length > 0 ? metricKeys.length : 1;
    metricsContainer.className = "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8";
    
    // Definir colores para las métricas
    const metricColors = {
        metric1: 'blue',
        metric2: 'green',
        metric3: 'yellow',
        metric4: 'purple',
        metric5: 'red',
        metric6: 'orange',
        metric7: 'gray',
        metric8: 'pink',
        metric9: 'teal',
        metric10: 'indigo'
    };
    
    // Definir clases de color para cada métrica
    const colorClasses = {
        blue: 'bg-blue-50 border-blue-100 text-blue-600',
        green: 'bg-green-50 border-green-100 text-green-600',
        yellow: 'bg-yellow-50 border-yellow-100 text-yellow-600',
        purple: 'bg-purple-50 border-purple-100 text-purple-600',
        red: 'bg-red-50 border-red-100 text-red-600',
        orange: 'bg-orange-50 border-orange-100 text-orange-600',
        gray: 'bg-gray-50 border-gray-100 text-gray-600',
        pink: 'bg-pink-50 border-pink-100 text-pink-600',
        teal: 'bg-teal-50 border-teal-100 text-teal-600',
        indigo: 'bg-indigo-50 border-indigo-100 text-indigo-600'
    };
    
    // Crear métricas
    for (let i = 1; i <= numMetrics; i++) {
        const metricKey = `metric${i}`;
        const titleKey = `${metricKey}Title`;
        
        if (templateData[metricKey] && templateData[titleKey]) {
            const metricValue = templateData[metricKey];
            const metricTitle = templateData[titleKey];
            const color = metricColors[metricKey] || 'gray';
            const colorClass = colorClasses[color];
            
            // Crear elemento de métrica con el nuevo estilo
            const metricElement = document.createElement('div');
            metricElement.className = `${colorClass} rounded-lg shadow-sm p-4 text-center border`;
            metricElement.innerHTML = `
                <div class="text-4xl font-bold mb-2">${metricValue}</div>
                <div class="text-sm">${metricTitle}</div>
            `;
            
            metricsContainer.appendChild(metricElement);
        }
    }
}a
// Exponer la función para que pueda ser usada desde otros contextos
window.processConfig = processConfig;

// Función para procesar datos para diferentes tipos de gráficos
function processChartData(data, template, chartType) {
    if (chartType === 'bar') {
        // Contar elementos por nombre o categoría
        const counts = {};
        
        data.forEach(item => {
            // Usar el campo especificado en la plantilla o uno predeterminado
            const field = template.categoryField || 'name';
            const name = item[field] || 'Sin nombre';
            counts[name] = (counts[name] || 0) + 1;
        });
        
        // Ordenar por cantidad (de mayor a menor)
        const sortedItems = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10); // Limitar a los 10 más frecuentes
        
        // Preparar datos para el gráfico
        return {
            labels: sortedItems.map(item => item[0]),
            datasets: [{
                label: template.barChartLabel || 'Frecuencia',
                data: sortedItems.map(item => item[1]),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }],
            // Obtener etiquetas de ejes del template
            xAxisLabel: template.xAxisLabel,
            yAxisLabel: template.yAxisLabel
        };
    } else if (chartType === 'doughnut') {
        // Contar elementos por estado o categoría
        const counts = {};
        
        data.forEach(item => {
            // Usar el campo especificado en la plantilla o uno predeterminado
            const field = template.statusField || 'status';
            const status = item[field] || 'Desconocido';
            counts[status] = (counts[status] || 0) + 1;
        });
        
        // Generar colores para los estados
        const colors = [
            'rgba(75, 192, 192, 0.8)',   // verde-azulado
            'rgba(255, 99, 132, 0.8)',   // rojo
            'rgba(54, 162, 235, 0.8)',   // azul
            'rgba(255, 205, 86, 0.8)',   // amarillo
            'rgba(153, 102, 255, 0.8)',  // morado
            'rgba(255, 159, 64, 0.8)',   // naranja
            'rgba(201, 203, 207, 0.8)'   // gris
        ];
        
        // Preparar datos para el gráfico
        const labels = Object.keys(counts);
        const data = Object.values(counts);
        const backgroundColor = labels.map((_, i) => colors[i % colors.length]);
        
        return {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColor,
                borderWidth: 1
            }]
        };
    }
    
    return null;
}

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
// Procesar datos para el gráfico de barras
function processWorkflowsData(data) {
    // Adaptarse a la estructura real del JSON
    let workflowsData = [];
    let chartData = {
        xAxisLabel: 'Cogerlo del JSON',
        yAxisLabel: 'Cogerlo del JSON'
    };
    
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
                label: 'Incluir aqui filtro en JSON',
                data: Object.values(workflowCounts),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
    }
    
    // Combinar los datos del gráfico con las etiquetas de los ejes
    return { ...workflowsData, ...chartData };
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
    return createBarChart(data, 'workflows-chart');
}

// Crear el gráfico circular de estado de workflows
function createWorkflowsStatusChart(data) {
    return createDoughnutChart(data, 'workflows-status-chart');
}

/**
 * Crea un gráfico de barras
 * @param {Array} data - Datos para el gráfico
 * @param {string} chartId - ID del elemento canvas
 * @param {Object} template - Plantilla con configuración adicional
 */
function createBarChart(data, chartId, template) {
    console.log(`Creando gráfico de barras con ID: ${chartId}`, data);
    const ctx = document.getElementById(chartId);
    if (!ctx) {
        console.error(`No se encontró el elemento canvas con ID: ${chartId}`);
        return;
    }
    
    // Destruir el gráfico existente si hay uno
    if (charts[chartId]) {
        charts[chartId].destroy();
    }
    
    // Verificar que los datos sean un array
    if (!Array.isArray(data)) {
        console.error('Los datos para el gráfico no son un array:', data);
        return;
    }
    
    // Determinar los campos a utilizar
    const categoryField = template.categoryField || 'name';
    const valueField = template.valueField || null;
    
    // Preparar datos para el gráfico
    let labels = [];
    let values = [];
    
    if (valueField) {
        // Si hay un campo de valor específico, usarlo directamente
        data.forEach(item => {
            if (item && typeof item === 'object') {
                const category = item[categoryField] || 'Sin categoría';
                const value = parseFloat(item[valueField]) || 0;
                
                labels.push(category);
                values.push(value);
            }
        });
    } else {
        // Si no hay campo de valor, contar ocurrencias (comportamiento anterior)
        const counts = {};
        data.forEach(item => {
            if (item && typeof item === 'object') {
                const category = item[categoryField] || 'Sin categoría';
                counts[category] = (counts[category] || 0) + 1;
            }
        });
        
        // Ordenar por cantidad (de mayor a menor)
        const sortedItems = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10); // Limitar a los 10 más frecuentes
        
        labels = sortedItems.map(item => item[0]);
        values = sortedItems.map(item => item[1]);
    }
    // Usar colores personalizados desde la plantilla o valores por defecto
    const backgroundColor = template.barColor || 'rgba(54, 162, 235, 0.5)';
    const borderColor = template.barBorderColor || 'rgba(54, 162, 235, 1)';
    
    // Crear el gráfico
    charts[chartId] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: template.barChartLabel || 'Valor',
                data: values,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
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
                    display: false,
                    text: 'Elementos más frecuentes'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: template.yAxisLabel || 'Eje Y'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: template.xAxisLabel || 'Eje X'
                    }
                }
            }
        }
    });
}

/**
 * Crea un gráfico circular
 * @param {Array} data - Datos para el gráfico
 * @param {string} chartId - ID del elemento canvas
 * @param {Object} template - Plantilla con configuración adicional
 */
function createDoughnutChart(data, chartId = 'doughnut-chart', template = {}) {
    console.log(`Creando gráfico circular con ID: ${chartId}`, data);
    const ctx = document.getElementById(chartId);
    if (!ctx) {
        console.error(`No se encontró el elemento canvas con ID: ${chartId}`);
        return;
    }
    
    // Destruir el gráfico existente si hay uno
    if (charts[chartId]) {
        charts[chartId].destroy();
    }
    
    // Verificar que los datos sean un array
    if (!Array.isArray(data)) {
        console.error('Los datos para el gráfico no son un array:', data);
        return;
    }
    
    // Procesar datos para el gráfico
    const counts = {};
    const statusField = template.statusField || 'status';
    
    // Contar elementos por estado
    data.forEach(item => {
        if (item && typeof item === 'object') {
            const status = item[statusField] || 'Desconocido';
            counts[status] = (counts[status] || 0) + 1;
        }
    });
    
    // Verificar si hay datos procesados
    if (Object.keys(counts).length === 0) {
        console.warn(`No se encontraron datos válidos para el campo: ${statusField}`);
        // Crear datos de muestra para evitar errores
        counts['Sin datos'] = 0;
    }
    
    console.log('Datos procesados para gráfico circular:', counts);
    
    // Generar colores para los estados
    const colors = [
        'rgba(75, 192, 192, 0.8)',   // verde-azulado
        'rgba(255, 99, 132, 0.8)',   // rojo
        'rgba(54, 162, 235, 0.8)',   // azul
        'rgba(255, 205, 86, 0.8)',   // amarillo
        'rgba(153, 102, 255, 0.8)',  // morado
        'rgba(255, 159, 64, 0.8)',   // naranja
        'rgba(201, 203, 207, 0.8)'   // gris
    ];
    
    // Crear el gráfico
    charts[chartId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(counts),
            datasets: [{
                data: Object.values(counts),
                backgroundColor: Object.keys(counts).map((_, i) => colors[i % colors.length]),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });
    
    return charts[chartId];
}

// Modificar la función loadWebsConfig para inicializar los gráficos
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
            // Inicializar los gráficos
            

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

/**
 * Actualiza la lista de datos basada en la configuración
 * @param {Object} listTemplate - Configuración de la plantilla de lista
 */
function updateDataList(listTemplate) {
    const dataList = document.getElementById('data-list');
    if (!dataList) return;

    // Guardar columnas en variable global
    currentListColumns = Array.isArray(listTemplate.columns) ? listTemplate.columns : [];

    // Actualizar el título de la tabla/lista
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
}

