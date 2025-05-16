/**
 * Procesa una plantilla y la añade al contenedor
 */
function processTemplate(container, templateHtml, template, updateFunction) {
    // Crear un contenedor para esta plantilla
    const templateContainer = document.createElement('div');
    templateContainer.className = 'template-container mb-8';
    templateContainer.innerHTML = templateHtml;
    
    // Actualizar el título de la tabla si está definido
    if (template.title) {
        const tableTitle = templateContainer.querySelector('#table-title');
        if (tableTitle) {
            tableTitle.textContent = template.title;
        }
    }
    
    // Añadir al contenedor principal
    container.appendChild(templateContainer);
    
    // Cargar los datos para esta plantilla
    if (template.dataSource) {
        loadDataFromUrl(template.dataSource, (data) => {
            console.log('Datos cargados para', template.type, ':', data);
            // Pasar la configuración de la plantilla a la función de actualización
            updateFunction(templateContainer, data, template);
        });
    }
}

// AJUSTAR MAIN CONTENT CUANDO EL SIDEBAR SE MINIMICE
setTimeout(() => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const observer = new MutationObserver(adjustMainContent);
        observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
        adjustMainContent();
    }
}, 1000);

/**
 * Carga una plantilla HTML desde una URL
 */
function loadTemplateFromUrl(url, successCallback, errorCallback) {
    
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Plantilla cargada correctamente');
            if (successCallback) successCallback(html);
        })
        .catch(error => {
            
            if (errorCallback) errorCallback(error);
        });
}

/**
 * Actualiza los elementos de la plantilla de resumen con los datos proporcionados
 */
function updateSummaryTemplate(container, data, templateConfig) {
    console.log('Actualizando plantilla de resumen con datos:', data);
    console.log('Configuración de la plantilla:', templateConfig);
    
    // Verificar si tenemos configuración de métricas
    if (!templateConfig || !templateConfig.metrics) {
        console.error('No se encontró configuración de métricas para la plantilla de resumen');
        return;
    }
    
    // Obtener el contenedor de métricas
    const metricsContainer = container.querySelector('#metrics-container');
    if (!metricsContainer) {
        console.error('No se encontró el contenedor de métricas');
        return;
    }
    
    // Limpiar el contenedor de métricas
    metricsContainer.innerHTML = '';
    
    // Ajustar las clases del grid según la cantidad de métricas
    const metricCount = templateConfig.metrics.length;
    
    // Ajustar las clases del grid según la cantidad de métricas
    if (metricCount <= 4) {
        // Ajustar el grid según la cantidad de métricas
        if (metricCount === 2) {
            metricsContainer.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8';
        } else if (metricCount === 3) {
            metricsContainer.className = 'grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8';
        } else {
            metricsContainer.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8';
        }
    } else {
        // Si hay más de 4 métricas, mantener 4 columnas en pantallas grandes
        metricsContainer.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8';
    }
    
    // Colores para las diferentes métricas
    const colors = [
        { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', textLight: 'text-blue-600' },
        { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', textLight: 'text-green-600' },
        { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', textLight: 'text-yellow-600' },
        { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', textLight: 'text-purple-600' },
        { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', textLight: 'text-red-600' },
        { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', textLight: 'text-indigo-600' }
    ];
    
    // Calcular valores para métricas de tipo "count" primero
    const metricValues = {};
    
    // Procesar cada métrica definida en la configuración
    templateConfig.metrics.forEach((metric, index) => {
        // Obtener el color para esta métrica
        const color = colors[index % colors.length];
        
        // Calcular el valor de la métrica según su tipo
        let metricValue = 0;
        let formattedValue = '';
        
        if (metric.type === 'count') {
            // Contar elementos con filtro si existe
            if (metric.filter) {
                metricValue = Array.isArray(data) ? 
                    data.filter(item => item[metric.filter.field] === metric.filter.value).length : 
                    (data[metric.filter.field] === metric.filter.value ? 1 : 0);
            } else {
                // Si no hay filtro, contar todos los elementos
                metricValue = Array.isArray(data) ? data.length : 1;
            }
            formattedValue = metricValue.toString();
        } else if (metric.type === 'avgTime') {
            // Calcular el tiempo promedio de duración
            if (Array.isArray(data) && data.length > 0) {
                let totalDuration = 0;
                let completedCount = 0;
                
                data.forEach(workflow => {
                    if (workflow.status === 'completed') {
                        const createdAt = new Date(workflow.created_at);
                        const updatedAt = new Date(workflow.updated_at);
                        const duration = (updatedAt - createdAt) / 1000; // en segundos
                        
                        totalDuration += duration;
                        completedCount++;
                    }
                });
                
                if (completedCount > 0) {
                    const avgDuration = totalDuration / completedCount;
                    
                    if (metric.format === 'minutes') {
                        const minutes = Math.floor(avgDuration / 60);
                        const seconds = Math.floor(avgDuration % 60);
                        formattedValue = `${minutes}m ${seconds}s`;
                    } else {
                        formattedValue = `${avgDuration.toFixed(0)}s`;
                    }
                    
                    metricValue = {
                        value: avgDuration,
                        formatted: formattedValue,
                        tooltip: `Basado en ${completedCount} workflows completados`
                    };
                } else {
                    formattedValue = 'N/A';
                    metricValue = { value: 0, formatted: formattedValue };
                }
            } else {
                formattedValue = 'N/A';
                metricValue = { value: 0, formatted: formattedValue };
            }
        } else if (metric.type === 'maxTime') {
            // Calcular el tiempo máximo de duración
            if (Array.isArray(data) && data.length > 0) {
                let maxDuration = 0;
                let maxWorkflow = null;
                
                data.forEach(workflow => {
                    if (workflow.status === 'completed') {
                        const createdAt = new Date(workflow.created_at);
                        const updatedAt = new Date(workflow.updated_at);
                        const duration = (updatedAt - createdAt) / 1000; // en segundos
                        
                        if (duration > maxDuration) {
                            maxDuration = duration;
                            maxWorkflow = workflow;
                        }
                    }
                });
                
                if (maxWorkflow) {
                    if (metric.format === 'minutes') {
                        const minutes = Math.floor(maxDuration / 60);
                        const seconds = Math.floor(maxDuration % 60);
                        formattedValue = `${minutes}m ${seconds}s`;
                    } else {
                        formattedValue = `${maxDuration.toFixed(0)}s`;
                    }
                    
                    // Añadir tooltip con información adicional
                    metricValue = {
                        value: maxDuration,
                        formatted: formattedValue,
                        tooltip: `Workflow: ${maxWorkflow.name}`
                    };
                } else {
                    formattedValue = 'N/A';
                    metricValue = { value: 0, formatted: formattedValue };
                }
            } else {
                formattedValue = 'N/A';
                metricValue = { value: 0, formatted: formattedValue };
            }
        } else if (metric.type === 'rate') {
            // Calcular el numerador
            let numerator = 0;
            if (metric.numerator) {
                numerator = Array.isArray(data) ? 
                    data.filter(item => item[metric.numerator.field] === metric.numerator.value).length : 
                    (data[metric.numerator.field] === metric.numerator.value ? 1 : 0);
            }
            
            // Obtener el denominador
            let denominator = 1;
            if (metric.denominator === 'total') {
                denominator = Array.isArray(data) ? data.length : 1;
            } else if (metricValues[metric.denominator]) {
                denominator = metricValues[metric.denominator];
            }
            
            // Evitar división por cero
            if (denominator === 0) {
                metricValue = 0;
            } else {
                metricValue = numerator / denominator;
            }
            
            // Formatear según la configuración
            if (metric.format === 'percentage') {
                formattedValue = (metricValue * 100).toFixed(1) + '%';
            } else {
                formattedValue = metricValue.toFixed(2);
            }
        }
        
        // Crear el elemento HTML para esta métrica
        const metricElement = document.createElement('div');
        metricElement.className = `${color.bg} border ${color.border} rounded-lg p-4 flex flex-col items-center justify-center`;
        
        // Si la métrica tiene un tooltip, añadir atributo title
        if (typeof metricValue === 'object' && metricValue.tooltip) {
            metricElement.title = metricValue.tooltip;
        }
        
        // Determinar el valor a mostrar
        const displayValue = typeof metricValue === 'object' ? metricValue.formatted : formattedValue;
        
        metricElement.innerHTML = `
            <h2 class="text-3xl font-bold ${color.text}" id="${metric.name}">${displayValue}</h2>
            <p class="${color.textLight} mt-1" id="${metric.name}-title">${metric.title || metric.name}</p>
        `;
        
        // Añadir el elemento al contenedor
        metricsContainer.appendChild(metricElement);
    });
}

/**
 * Actualiza una plantilla de tabla con los datos proporcionados
 */
function updateTableTemplate(container, data, templateConfig) {
    console.log('Actualizando plantilla de tabla con datos:', data);
    
    // Obtener la tabla y el cuerpo de la tabla
    const tableBody = container.querySelector('#table-body');
    if (!tableBody) {
        console.error('No se encontró el cuerpo de la tabla');
        return;
    }
    
    // Obtener el encabezado de la tabla
    const tableHead = container.querySelector('thead tr');
    if (!tableHead) {
        console.error('No se encontró el encabezado de la tabla');
        return;
    }
    
    // Limpiar el contenido actual de la tabla
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';
    
    // Almacenar los datos completos como atributo del contenedor
    container.dataset.fullData = JSON.stringify(data);
    
    // Variables para el ordenamiento
    let sortColumn = container.dataset.sortColumn || '';
    let sortDirection = container.dataset.sortDirection || 'asc';
    
    // Procesar los datos según su estructura
    let processedData = [];
    
    if (Array.isArray(data)) {
        processedData = data;
    } else if (typeof data === 'object' && data !== null) {
        // Buscar arrays dentro del objeto
        for (const key in data) {
            if (Array.isArray(data[key])) {
                processedData = data[key];
                break;
            }
        }
        
        if (processedData.length === 0) {
            processedData = [data];
        }
    }

    // Función para ordenar los datos
    function sortData(data, column, direction) {
        return [...data].sort((a, b) => {
            let valueA = a[column];
            let valueB = b[column];
            
            // Manejar valores nulos o indefinidos
            if (valueA === null || valueA === undefined) valueA = '';
            if (valueB === null || valueB === undefined) valueB = '';
            
            // Convertir a string para comparación
            valueA = valueA.toString().toLowerCase();
            valueB = valueB.toString().toLowerCase();
            
            if (direction === 'asc') {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });
    }

    // Si hay una columna de ordenamiento activa, ordenar los datos
    if (sortColumn && templateConfig.sortable) {
        processedData = sortData(processedData, sortColumn, sortDirection);
    }

    // Obtener las columnas configuradas o usar las predeterminadas
    let columns = [
        { key: 'name', title: 'MÓDULO', icon: true },
        { key: 'description', title: 'DESCRIPCIÓN' },
        { key: 'status', title: 'ESTADO' }
    ];
    
    if (templateConfig && templateConfig.columns && Array.isArray(templateConfig.columns)) {
        if (typeof templateConfig.columns[0] === 'string') {
            columns = templateConfig.columns.map(colName => {
                return {
                    key: colName,
                    title: colName.toUpperCase().replace('_', ' '),
                    icon: colName === 'name'
                };
            });
        } else {
            columns = templateConfig.columns;
        }
    }
    
    // Crear encabezados de columna con funcionalidad de ordenamiento
    columns.forEach(column => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.className = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none';
        
        // Crear contenedor flex para el título y el icono de ordenamiento
        const headerContent = document.createElement('div');
        headerContent.className = 'flex items-center space-x-1';
        
        // Añadir el título
        const titleSpan = document.createElement('span');
        titleSpan.textContent = column.title || column.key;
        headerContent.appendChild(titleSpan);
        
        // Añadir icono de ordenamiento si la tabla es ordenable
        if (templateConfig.sortable) {
            const sortIcon = document.createElement('span');
            sortIcon.className = 'sort-icon ml-1';
            
            // Mostrar el icono apropiado según el estado de ordenamiento
            if (sortColumn === column.key) {
                sortIcon.innerHTML = sortDirection === 'asc' ? '↑' : '↓';
            } else {
                sortIcon.innerHTML = '↕';
            }
            
            headerContent.appendChild(sortIcon);
        }
        
        th.appendChild(headerContent);
        
        // Añadir evento de clic para ordenamiento si la tabla es ordenable
        if (templateConfig.sortable) {
            th.addEventListener('click', () => {
                // Actualizar dirección de ordenamiento
                if (sortColumn === column.key) {
                    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    sortColumn = column.key;
                    sortDirection = 'asc';
                }
                
                // Guardar estado de ordenamiento
                container.dataset.sortColumn = sortColumn;
                container.dataset.sortDirection = sortDirection;
                
                // Actualizar la tabla
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        
        tableHead.appendChild(th);
    });

    // Configuración de paginación
    const itemsPerPage = 20;
    const currentPage = parseInt(container.dataset.currentPage) || 1;
    const totalPages = Math.ceil(processedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = processedData.slice(startIndex, endIndex);

    // Crear filas para cada elemento de datos de la página actual
    currentPageData.forEach(item => {
        const row = document.createElement('tr');
        
        // Crear celdas para cada columna configurada
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.className = 'px-6 py-4 whitespace-nowrap';
            
            // Manejar columna con icono (generalmente la primera columna)
            if (column.icon) {
                const moduleContent = document.createElement('div');
                moduleContent.className = 'flex items-center';
                
                const iconContainer = document.createElement('div');
                iconContainer.className = 'flex-shrink-0 h-6 w-6 flex items-center justify-center bg-gray-800 text-white rounded';
                
                // Determinar el icono basado en el tipo o usar uno predeterminado
                let iconClass = 'fas fa-code';
                if (item.type === 'branch' || item.type === 'version') iconClass = 'fas fa-code-branch';
                else if (item.type === 'test') iconClass = 'fas fa-vial';
                
                iconContainer.innerHTML = `<i class="${iconClass} text-xs"></i>`;
                
                const textContainer = document.createElement('div');
                textContainer.className = 'ml-4';
                
                const moduleName = document.createElement('div');
                moduleName.className = 'text-sm font-medium text-gray-900';
                moduleName.textContent = item[column.key] || 'N/A';
                
                // Crear etiqueta de estado si existe
                if (item.status) {
                    const statusLabel = document.createElement('span');
                    statusLabel.className = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
                    
                    // Determinar el estilo y texto de la etiqueta según el estado
                    if (item.status === 'running') {
                        statusLabel.classList.add('bg-green-100', 'text-green-800');
                    } else if (item.status === 'on-demand') {
                        statusLabel.classList.add('bg-gray-100', 'text-gray-800');
                    } else if (item.status === 'failed') {
                        statusLabel.classList.add('bg-red-100', 'text-red-800');
                    } else {
                        statusLabel.classList.add('bg-blue-100', 'text-blue-800');
                    }
                    
                    statusLabel.textContent = item.status;
                    textContainer.appendChild(moduleName);
                    textContainer.appendChild(statusLabel);
                } else {
                    textContainer.appendChild(moduleName);
                }
                
                moduleContent.appendChild(iconContainer);
                moduleContent.appendChild(textContainer);
                cell.appendChild(moduleContent);
            } 
            // Manejar columna de estado
            else if (column.key === 'status' || column.key === 'state') {
                const stateLabel = document.createElement('span');
                stateLabel.className = 'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full';
                
                // Determinar el estilo y texto del estado
                const value = item[column.key];
                if (value === 'active' || value === true) {
                    stateLabel.classList.add('bg-green-100', 'text-green-800');
                    stateLabel.textContent = 'active';
                } else if (value === 'disabled' || value === false) {
                    stateLabel.classList.add('bg-red-100', 'text-red-800');
                    stateLabel.textContent = 'disabled manually';
                } else {
                    stateLabel.classList.add('bg-yellow-100', 'text-yellow-800');
                    stateLabel.textContent = value || 'N/A';
                }
                
                cell.appendChild(stateLabel);
            } 
            // Manejar columnas de texto normales
            else {
                const textDiv = document.createElement('div');
                textDiv.className = 'text-sm text-gray-900';
                textDiv.textContent = item[column.key] || 'N/A';
                cell.appendChild(textDiv);
            }
            
            row.appendChild(cell);
        });
        
        // Añadir la fila al cuerpo de la tabla
        tableBody.appendChild(row);
    });

    // Crear o actualizar el contenedor de paginación
    let paginationContainer = container.querySelector('.pagination-container');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination-container flex items-center justify-end space-x-1 mt-4';
        container.appendChild(paginationContainer);
    } else {
        paginationContainer.innerHTML = '';
    }

    // Si hay más de una página, mostrar la paginación
    if (totalPages > 1) {
        // Información de resultados
        const infoText = document.createElement('div');
        infoText.className = 'text-sm text-gray-700 mr-4';
        infoText.textContent = `Mostrando ${startIndex + 1} a ${Math.min(endIndex, processedData.length)} de ${processedData.length} resultados`;
        paginationContainer.appendChild(infoText);

        // Botón Anterior
        const prevBtn = document.createElement('button');
        prevBtn.className = `px-3 py-1 text-sm ${
            currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-600 hover:text-gray-900'
        }`;
        prevBtn.textContent = 'Anterior';
        prevBtn.disabled = currentPage === 1;
        if (currentPage > 1) {
            prevBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage - 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        paginationContainer.appendChild(prevBtn);

        // Números de página
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Primera página si no es visible
        if (startPage > 1) {
            const firstBtn = document.createElement('button');
            firstBtn.className = 'px-3 py-1 text-sm text-gray-600 hover:text-gray-900';
            firstBtn.textContent = '1';
            firstBtn.addEventListener('click', () => {
                container.dataset.currentPage = '1';
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
            paginationContainer.appendChild(firstBtn);

            if (startPage > 2) {
                const dots = document.createElement('span');
                dots.className = 'px-2 py-1 text-gray-500';
                dots.textContent = '...';
                paginationContainer.appendChild(dots);
            }
        }

        // Páginas centrales
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `px-3 py-1 text-sm ${
                i === currentPage
                ? 'bg-blue-500 text-white rounded-md'
                : 'text-gray-600 hover:text-gray-900'
            }`;
            pageBtn.textContent = i.toString();
            
            if (i !== currentPage) {
                pageBtn.addEventListener('click', () => {
                    container.dataset.currentPage = i.toString();
                    updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
                });
            }
            
            paginationContainer.appendChild(pageBtn);
        }

        // Última página si no es visible
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const dots = document.createElement('span');
                dots.className = 'px-2 py-1 text-gray-500';
                dots.textContent = '...';
                paginationContainer.appendChild(dots);
            }

            const lastBtn = document.createElement('button');
            lastBtn.className = 'px-3 py-1 text-sm text-gray-600 hover:text-gray-900';
            lastBtn.textContent = totalPages.toString();
            lastBtn.addEventListener('click', () => {
                container.dataset.currentPage = totalPages.toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
            paginationContainer.appendChild(lastBtn);
        }

        // Botón Siguiente
        const nextBtn = document.createElement('button');
        nextBtn.className = `px-3 py-1 text-sm ${
            currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-600 hover:text-gray-900'
        }`;
        nextBtn.textContent = 'Siguiente';
        nextBtn.disabled = currentPage === totalPages;
        if (currentPage < totalPages) {
            nextBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage + 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        paginationContainer.appendChild(nextBtn);
    }
}

// Obtiene las clases CSS para el estado
function getStatusClass(state) {
    switch (state.toLowerCase()) {
        case 'active':
            return { bgClass: 'bg-green-100', textClass: 'text-green-800' };
        case 'disabled_manually':
            return { bgClass: 'bg-red-100', textClass: 'text-red-800' };
        default:
            return { bgClass: 'bg-gray-100', textClass: 'text-gray-800' };
    }
}

// Obtiene la clase de icono basada en el nombre
function getIconClass(name) {
    if (name.includes('CodeQL')) {
        return 'fas fa-code';
    } else if (name.includes('Version')) {
        return 'fas fa-code-branch';
    } else if (name.includes('Execution')) {
        return 'fas fa-vial';
    } else if (name.includes('Lint')) {
        return 'fas fa-check-square';
    } else {
        return 'fas fa-cog';
    }
}

// Función genérica para cargar datos desde una URL
/**
 * Carga datos desde una URL
 */
function loadDataFromUrl(url, successCallback, errorCallback) {
    console.log('Cargando datos desde:', url);
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos cargados correctamente desde:', url);
            if (successCallback) successCallback(data);
        })
        .catch(error => {
            
            if (errorCallback) errorCallback(error);
        });
}

// ==================== MÓDULO NAVBAR ====================
function initNavbar() {

    // Actualizar el título de la navbar
    const navbarTitle = document.getElementById('navbar-title');
    if (navbarTitle && webConfig.title) {
        navbarTitle.textContent = webConfig.title;
    }

    // Cargar las secciones
    const navbar = document.getElementById('navbar-sections');
    if (navbar && webConfig.sections && Array.isArray(webConfig.sections)) {
        webConfig.sections.forEach(section => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="#${section.title.toLowerCase()}" 
                   class="flex items-center justify-center w-full py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group relative">
                    <div class="flex items-center justify-center w-12">
                        <i class="fas ${section.icon} text-orange-300 group-hover:text-orange-500 text-xl"></i>
                    </div>
                    <span class="sidebar-text flex-1 font-medium capitalize">${section.title}</span>
                    <div class="tooltip hidden absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                        ${section.title}
                    </div>
                </a>`;
            navbar.appendChild(li);
        });
    }

    // Inicializar la funcionalidad del sidebar después de cargar el contenido
    // Asegurarse de que el DOM esté listo antes de inicializar el sidebar
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initializeSidebar();
    } else {
        document.addEventListener('DOMContentLoaded', initializeSidebar);
    }
}

function adjustMainContent() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    if (sidebar && mainContent) {
        if (sidebar.classList.contains('w-[60px]')) {
            mainContent.classList.remove('ml-[260px]');
            mainContent.classList.add('ml-[75px]');
        } else {
            mainContent.classList.remove('ml-[75px]');
            mainContent.classList.add('ml-[260px]');
        }
    }
}

function initializeSidebar() {
    
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');

    if (!sidebar) {
        console.warn('No se encontró el elemento sidebar, omitiendo inicialización');
        return;
    }

    // Continuar incluso si faltan algunos elementos secundarios
    function toggleSidebar() {
        const sidebarTexts = document.querySelectorAll('.sidebar-text');
        const logoImage = document.querySelector('.logo-image');
        const tooltips = document.querySelectorAll('.tooltip');

        if (sidebar.classList.contains('w-[250px]')) {
            // Colapsar sidebar
            sidebar.classList.remove('w-[250px]');
            sidebar.classList.add('w-[60px]');
            if (toggleIcon) toggleIcon.style.transform = 'rotate(180deg)';
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

    // Agregar event listeners solo si los elementos existen
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
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