/**
 * FUNCION PRINCIPAL PARA INICIALIZAR TODOS LOS COMPONENTES CUANDO EL DOM ESTE INCIALIZADO
 */
// Variables globales
let webConfig = null;
let sectionConfigMap = {};

document.addEventListener('DOMContentLoaded', function() {
    // Cargar el navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        fetch('templates/navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                loadWebsConfig();
                
                // Añadir event listeners a los enlaces del navbar después de cargarlo
                setTimeout(() => {
                    setupNavbarLinks();
                }, 500);
            })
    }
    
    // Cargar el footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('templates/footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
    }

    // Escuchar cambios en el hash de la URL
    window.addEventListener('hashchange', handleHashChange);
    
    // Comprobar si hay un hash en la URL al cargar la página
    if (window.location.hash) {
        handleHashChange();
    }
});

/**
 * Configura los event listeners para los enlaces del navbar
 */
function setupNavbarLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // El hash ya se actualiza automáticamente con el href="#sección"
            // Solo necesitamos prevenir el comportamiento predeterminado si queremos
            // hacer algo especial, pero en este caso dejamos que el hash cambie
            
            // Marcar este enlace como activo
            navLinks.forEach(l => l.classList.remove('active-nav-link'));
            this.classList.add('active-nav-link');
        });
    });
    
    console.log('Enlaces del navbar configurados:', navLinks.length);
}

/**
 * Maneja los cambios en el hash de la URL
 */
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Eliminar el # del inicio
    console.log('Hash cambiado a:', hash);
    
    if (hash && webConfig && webConfig.sections) {
        // Buscar la sección que coincide con el hash
        const section = webConfig.sections.find(s => 
            s.title.toLowerCase() === hash.toLowerCase()
        );
        
        if (section) {
            console.log('Sección encontrada para el hash:', section);
            loadSection(section);
        } else {
            console.warn('No se encontró ninguna sección para el hash:', hash);
        }
    }
}

/**
 * Carga una sección específica
 */
function loadSection(section) {
    console.log('Cargando sección:', section.title);
    
    // Cargar la plantilla de sección desde el archivo datatemplate
    if (section.datatemplate) {
        loadDataFromUrl(section.datatemplate, (sectionData) => {
            console.log('Datos de plantilla cargados para', section.title, ':', sectionData);
            
            // Actualizar directamente los elementos del título y descripción
            const sectionTitle = document.getElementById('section-title');
            const sectionDescription = document.getElementById('section-description');
            
            if (sectionTitle) {
                if (sectionData && sectionData.title) {
                    console.log('Actualizando título a:', sectionData.title);
                    sectionTitle.textContent = sectionData.title;
                } else {
                    // Si no hay título en los datos, usar el título de la sección
                    sectionTitle.textContent = section.title;
                }
            }
            
            if (sectionDescription) {
                if (sectionData && sectionData.description) {
                    console.log('Actualizando descripción a:', sectionData.description);
                    sectionDescription.textContent = sectionData.description;
                } else {
                    // Si no hay descripción, dejar un mensaje genérico
                    sectionDescription.textContent = 'Información sobre ' + section.title;
                }
            }
            
            // Cargar las plantillas definidas en la sección
            const contentContainer = document.getElementById('content-container');
            if (contentContainer) {
                // Limpiar el contenedor antes de añadir nuevas plantillas
                contentContainer.innerHTML = '';
                
                if (sectionData && sectionData.templates && sectionData.templates.length > 0) {
                    console.log('Cargando plantillas de la sección:', sectionData.templates);
                    
                    // Procesar cada plantilla
                    sectionData.templates.forEach(template => {
                        console.log('Procesando plantilla:', template);
                        
                        if (template.type === 'summary') {
                            loadTemplateFromUrl('templates/summary.html', (templateHtml) => {
                                processTemplate(contentContainer, templateHtml, template, updateSummaryTemplate);
                            });
                        } else if (template.type === 'table') {
                            loadTemplateFromUrl('templates/table.html', (templateHtml) => {
                                processTemplate(contentContainer, templateHtml, template, updateTableTemplate);
                            });
                        } else {
                            console.warn('Tipo de plantilla no soportado:', template.type);
                        }
                    });
                } else {
                    // Si no hay plantillas, mostrar un mensaje
                    contentContainer.innerHTML = `
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold mb-4">Sección ${section.title}</h2>
                            <p>No hay plantillas definidas para esta sección.</p>
                        </div>
                    `;
                }
            }
            
            // Inicializar la sección para cargar sus datos específicos
            initSection(section.title);
        });
    }
}

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
 * Carga la configuración principal desde webs.json
 */
function loadWebsConfig() {
    console.log('Iniciando carga de configuración web...');
    
    loadDataFromUrl(
        'data/webs.json',
        (data) => {
            webConfig = data;
            console.log('Configuración principal cargada:', webConfig);
            console.log('Secciones disponibles:', webConfig.sections);
            initNavbar();
            
            if (webConfig && webConfig.sections) {
                webConfig.sections.forEach(section => {
                    sectionConfigMap[section.title] = {
                        configFile: section.data
                    };
                });
            }

            // Inicializar sección actual
            const currentPath = window.location.pathname;
            console.log('Ruta actual:', currentPath);
            
            if (webConfig && webConfig.sections) {
                // Cargar automáticamente la sección "inicio"
                console.log('Buscando sección inicio...');
                const inicioSection = webConfig.sections.find(section => {
                    console.log('Comparando:', section.title.toLowerCase(), 'con "inicio"');
                    return section.title.toLowerCase() === 'inicio';
                });
                
                console.log('Sección inicio encontrada:', inicioSection);
                
                if (inicioSection) {
                    console.log('Llamando a loadInicioSection con:', inicioSection);
                    
                    // Cargar la plantilla de sección desde el archivo datatemplate
                    if (inicioSection.datatemplate) {
                        loadDataFromUrl(inicioSection.datatemplate, (sectionData) => {
                            console.log('Datos de plantilla cargados:', sectionData);
                            
                            // Actualizar directamente los elementos del título y descripción
                            const sectionTitle = document.getElementById('section-title');
                            const sectionDescription = document.getElementById('section-description');
                            
                            if (sectionTitle && sectionData.title) {
                                console.log('Actualizando título a:', sectionData.title);
                                sectionTitle.textContent = sectionData.title;
                            } else {
                                console.warn('No se pudo actualizar el título. Elemento o datos faltantes.');
                            }
                            
                            if (sectionDescription && sectionData.description) {
                                console.log('Actualizando descripción a:', sectionData.description);
                                sectionDescription.textContent = sectionData.description;
                            } else {
                                console.warn('No se pudo actualizar la descripción. Elemento o datos faltantes.');
                            }
                            
                            // Cargar las plantillas definidas en la sección
                            if (sectionData.templates && sectionData.templates.length > 0) {
                                console.log('Cargando plantillas de la sección inicio:', sectionData.templates);
                                
                                // Contenedor principal para las plantillas
                                const contentContainer = document.getElementById('content-container');
                                
                                // Limpiar el contenedor antes de añadir nuevas plantillas
                                contentContainer.innerHTML = '';
                                
                                // Procesar cada plantilla
                                sectionData.templates.forEach(template => {
                                    
                                    
                                    if (template.type === 'summary') {
                                        // Cargar la plantilla de resumen
                                        loadTemplateFromUrl('templates/summary.html', (templateHtml) => {
                                            
                                            
                                            // Crear un contenedor para esta plantilla
                                            const templateContainer = document.createElement('div');
                                            templateContainer.className = 'template-container mb-8';
                                            templateContainer.innerHTML = templateHtml;
                                            
                                            // Añadir al contenedor principal
                                            contentContainer.appendChild(templateContainer);
                                            
                                            // Cargar los datos para esta plantilla
                                            if (template.dataSource) {
                                                loadDataFromUrl(template.dataSource, (data) => {
                                                    
                                                    updateSummaryTemplate(templateContainer, data, template);
                                                });
                                            }
                                        });
                                    } else if (template.type === 'table') {
                                        // Cargar la plantilla de tabla
                                        loadTemplateFromUrl('templates/table.html', (templateHtml) => {
                                            
                                            
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
                                            contentContainer.appendChild(templateContainer);
                                            
                                            // Cargar los datos para esta plantilla
                                            if (template.dataSource) {
                                                loadDataFromUrl(template.dataSource, (data) => {
                                                    
                                                    updateTableTemplate(templateContainer, data);
                                                });
                                            }
                                        });
                                    } else {
                                        console.warn('Tipo de plantilla no soportado:', template.type);
                                    }
                                });
                            }
                            
                            // Inicializar la sección para cargar sus datos específicos
                            initSection(inicioSection.title);
                        });
                    }
                } else {
                    console.warn('No se encontró la sección inicio, buscando por ruta...');
                    // Si no hay sección inicio, buscar por ruta
                    for (const section of webConfig.sections) {
                        if (currentPath.includes(section.title.toLowerCase())) {
                            initSection(section.title);
                            break;
                        }
                    }
                }
            }
        }
    );
}

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
    
    // Colores para las diferentes métricas (se pueden añadir más si es necesario)
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
    
    // Primera pasada: calcular todos los conteos
    templateConfig.metrics.forEach(metric => {
        if (metric.type === 'count') {
            let value = 0;
            
            if (!metric.filter) {
                // Contar todos los elementos (totalItems)
                value = Array.isArray(data) ? data.length : 1;
                metricValues['total'] = value; // Guardar el total para usarlo en cálculos de rate
            } else {
                // Contar elementos que cumplen con el filtro
                value = Array.isArray(data) ? 
                    data.filter(item => item[metric.filter.field] === metric.filter.value).length : 
                    (data[metric.filter.field] === metric.filter.value ? 1 : 0);
            }
            
            metricValues[metric.name] = value;
        }
    });
    
    // Procesar cada métrica definida en la configuración
    templateConfig.metrics.forEach((metric, index) => {
        // Obtener el color para esta métrica (rotando si hay más métricas que colores)
        const color = colors[index % colors.length];
        
        // Calcular el valor de la métrica según su tipo
        let metricValue = 0;
        let formattedValue = '';
        
        if (metric.type === 'count') {
            // Ya calculado en la primera pasada
            metricValue = metricValues[metric.name];
            formattedValue = metricValue.toString();
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
                denominator = metricValues['total'] || Array.isArray(data) ? data.length : 1;
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
        metricElement.innerHTML = `
            <h2 class="text-3xl font-bold ${color.text}" id="${metric.name}">${formattedValue}</h2>
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
    
    // Configuración de paginación
    const itemsPerPage = 15;
    let currentPage = parseInt(container.dataset.currentPage || '1');
    
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
        
        // Si no se encontró ningún array, usar las propiedades del objeto
        if (processedData.length === 0) {
            processedData = [data]; // Convertir el objeto en un array de un elemento
        }
    }
    
    // Calcular el total de páginas
    const totalPages = Math.ceil(processedData.length / itemsPerPage);
    
    // Asegurarse de que la página actual es válida
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    // Guardar la página actual
    container.dataset.currentPage = currentPage.toString();
    
    // Obtener los elementos para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, processedData.length);
    const currentPageData = processedData.slice(startIndex, endIndex);
    
    // Obtener las columnas configuradas o usar las predeterminadas
    let columns = [
        { key: 'name', title: 'MÓDULO', icon: true },
        { key: 'description', title: 'DESCRIPCIÓN' },
        { key: 'status', title: 'ESTADO' }
    ];
    
    // Si hay columnas definidas en la plantilla, usarlas
    if (templateConfig && templateConfig.columns && Array.isArray(templateConfig.columns)) {
        // Verificar si las columnas son strings o objetos
        if (typeof templateConfig.columns[0] === 'string') {
            // Convertir array de strings a array de objetos
            columns = templateConfig.columns.map(colName => {
                return {
                    key: colName,
                    title: colName.toUpperCase().replace('_', ' '),
                    icon: colName === 'name' // Solo la columna 'name' tendrá icono
                };
            });
        } else {
            columns = templateConfig.columns;
        }
    }
    
    // Crear encabezados de columna
    columns.forEach(column => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.className = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
        th.textContent = column.title || column.key;
        tableHead.appendChild(th);
    });
    
    // Crear filas para cada elemento de datos
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
        paginationContainer.className = 'pagination-container bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4';
        container.appendChild(paginationContainer);
    } else {
        paginationContainer.innerHTML = '';
    }
    
    // Si hay más de una página, mostrar la paginación
    if (totalPages > 1) {
        // Versión móvil de la paginación
        const mobileNav = document.createElement('div');
        mobileNav.className = 'flex-1 flex justify-between sm:hidden';
        
        // Botón anterior para móvil
        const prevMobileBtn = document.createElement('button');
        prevMobileBtn.className = `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`;
        prevMobileBtn.textContent = 'Anterior';
        prevMobileBtn.disabled = currentPage === 1;
        if (currentPage > 1) {
            prevMobileBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage - 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        
        // Botón siguiente para móvil
        const nextMobileBtn = document.createElement('button');
        nextMobileBtn.className = `ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`;
        nextMobileBtn.textContent = 'Siguiente';
        nextMobileBtn.disabled = currentPage === totalPages;
        if (currentPage < totalPages) {
            nextMobileBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage + 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        
        mobileNav.appendChild(prevMobileBtn);
        mobileNav.appendChild(nextMobileBtn);
        paginationContainer.appendChild(mobileNav);
        
        // Versión desktop de la paginación
        const desktopNav = document.createElement('div');
        desktopNav.className = 'hidden sm:flex-1 sm:flex sm:items-center sm:justify-between';
        
        // Información de resultados
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
            <p class="text-sm text-gray-700">
                Mostrando <span class="font-medium">${startIndex + 1}</span> a <span class="font-medium">${endIndex}</span> de <span class="font-medium">${processedData.length}</span> resultados
            </p>
        `;
        
        // Navegación de páginas
        const navDiv = document.createElement('div');
        const navElement = document.createElement('nav');
        navElement.className = 'relative z-0 inline-flex rounded-md shadow-sm -space-x-px';
        navElement.setAttribute('aria-label', 'Pagination');
        
        // Botón anterior
        const prevBtn = document.createElement('button');
        prevBtn.className = `relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`;
        prevBtn.innerHTML = `
            <span class="sr-only">Anterior</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        `;
        prevBtn.disabled = currentPage === 1;
        if (currentPage > 1) {
            prevBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage - 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        navElement.appendChild(prevBtn);
        
        // Botones de página
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `relative inline-flex items-center px-4 py-2 border ${i === currentPage ? 'bg-blue-50 border-blue-500 text-blue-600 z-10' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`;
            pageBtn.textContent = i.toString();
            
            if (i !== currentPage) {
                pageBtn.addEventListener('click', () => {
                    container.dataset.currentPage = i.toString();
                    updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
                });
            }
            
            navElement.appendChild(pageBtn);
        }
        
        // Botón siguiente
        const nextBtn = document.createElement('button');
        nextBtn.className = `relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`;
        nextBtn.innerHTML = `
            <span class="sr-only">Siguiente</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        `;
        nextBtn.disabled = currentPage === totalPages;
        if (currentPage < totalPages) {
            nextBtn.addEventListener('click', () => {
                container.dataset.currentPage = (currentPage + 1).toString();
                updateTableTemplate(container, JSON.parse(container.dataset.fullData), templateConfig);
            });
        }
        navElement.appendChild(nextBtn);
        navDiv.appendChild(navElement);
        desktopNav.appendChild(infoDiv);
        desktopNav.appendChild(navDiv);
        paginationContainer.appendChild(desktopNav);
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