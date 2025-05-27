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
            // Normalizar los datos según el tipo de archivo
            const normalizedData = normalizeData(url, data);
            
            if (successCallback && typeof successCallback === 'function') {
                successCallback(normalizedData);
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
 * Normaliza diferentes estructuras de datos JSON según el tipo de archivo
 * @param {string} url - URL del archivo para identificar su tipo
 * @param {object} data - Datos originales cargados
 * @returns {object} - Datos normalizados
 */
function normalizeData(url, data) {
    // Extraer el nombre del archivo de la URL
    const fileName = url.split('/').pop();
    console.log(`Normalizando datos para: ${fileName}`);
    
    // Normalizar según el tipo de archivo
    if (fileName.includes('kaos-issue')) {
        // Estructura para kaos-issue.json (array de arrays con objetos)
        return normalizeIssueData(data);
    } else if (fileName.includes('kaos-repository-statistics') || 
               fileName.includes('kaos-repository-global-statistics')) {
        // Estructura para archivos de estadísticas de repositorio
        return normalizeRepositoryStats(data);
    } else if (fileName.includes('kaos-workflows-available')) {
        // Estructura para workflows disponibles
        return normalizeWorkflowsAvailable(data);
    } else if (fileName.includes('kaos-workflows-runs')) {
        // Estructura para ejecuciones de workflows
        return normalizeWorkflowsRuns(data);
    }
    
    // Si no hay normalización específica, devolver los datos originales
    return data;
}

/**
 * Normaliza los datos de issues
 * @param {Array} data - Datos de issues
 * @returns {Array} - Datos normalizados
 */
function normalizeIssueData(data) {
    // Si los datos ya son un array plano de objetos, devolverlos tal cual
    if (Array.isArray(data) && data.length > 0 && !Array.isArray(data[0])) {
        return data;
    }
    
    // Si es un array de arrays, aplanar la estructura
    if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
        // Extraer todos los issues de los arrays anidados
        const flattenedIssues = [];
        data.forEach(issueGroup => {
            if (Array.isArray(issueGroup)) {
                issueGroup.forEach(issue => {
                    if (issue && typeof issue === 'object') {
                        flattenedIssues.push(issue);
                    }
                });
            }
        });
        return flattenedIssues;
    }
    
    return data;
}

/**
 * Normaliza los datos de estadísticas de repositorio
 * @param {Object} data - Datos de estadísticas
 * @returns {Object} - Datos normalizados
 */
function normalizeRepositoryStats(data) {
    // Asegurarse de que tenga la estructura esperada
    if (!data.statistics) {
        return {
            generated_at: data.generated_at || new Date().toISOString(),
            repository: data.repository || '',
            statistics: {
                total_commits: data.total_commits || 0,
                recent_commits: data.recent_commits || 0,
                authors: data.authors || []
            }
        };
    }
    return data;
}

/**
 * Normaliza los datos de workflows disponibles
 * @param {Array} data - Datos de workflows
 * @returns {Array} - Datos normalizados
 */
function normalizeWorkflowsAvailable(data) {
    // Si no es un array, convertirlo en uno
    if (!Array.isArray(data)) {
        return [];
    }
    
    // Asegurarse de que cada elemento tenga las propiedades esperadas
    return data.map(workflow => {
        return {
            id: workflow.id || 0,
            name: workflow.name || 'Sin nombre',
            path: workflow.path || '',
            state: workflow.state || 'unknown'
        };
    });
}

/**
 * Normaliza los datos de ejecuciones de workflows
 * @param {Array} data - Datos de ejecuciones
 * @returns {Array} - Datos normalizados
 */
function normalizeWorkflowsRuns(data) {
    // Si no es un array, convertirlo en uno
    if (!Array.isArray(data)) {
        return [];
    }
    
    // Asegurarse de que cada elemento tenga las propiedades esperadas
    return data.map(run => {
        return {
            id: run.id || 0,
            name: run.name || 'Sin nombre',
            head_branch: run.head_branch || '',
            status: run.status || 'unknown',
            conclusion: run.conclusion || null,
            created_at: run.created_at || '',
            updated_at: run.updated_at || '',
            run_started_at: run.run_started_at || ''
        };
    });
}

/**
 * Procesa una plantilla y la actualiza con datos
 * @param {HTMLElement} container - Contenedor donde se insertará la plantilla
 * @param {string} templateHtml - HTML de la plantilla
 * @param {Object} templateConfig - Configuración de la plantilla
 * @param {Function} updateFunction - Función para actualizar la plantilla con datos
 */
function processTemplate(container, templateHtml, templateConfig, updateFunction) {
    // Crear un elemento div para la plantilla
    const templateElement = document.createElement('div');
    templateElement.innerHTML = templateHtml;
    
    // Añadir la plantilla al contenedor
    container.appendChild(templateElement);
    
    // Si hay una fuente de datos definida, cargarla
    if (templateConfig.dataSource) {
        loadDataFromUrl(
            templateConfig.dataSource,
            (data) => {
                console.log(`Datos cargados para plantilla ${templateConfig.type}:`, data);
                
                // Llamar a la función de actualización con los datos
                if (updateFunction && typeof updateFunction === 'function') {
                    updateFunction(templateElement, data, templateConfig);
                }
            },
            (error) => {
                console.error(`Error cargando datos para plantilla ${templateConfig.type}:`, error);
                // Mostrar mensaje de error en la plantilla
                const errorMessage = templateElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.textContent = `Error cargando datos: ${error.message}`;
                    errorMessage.style.display = 'block';
                }
            }
        );
    }
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

    // Aquí puedes añadir lógica específica para inicializar la sección
    console.log(`Sección ${sectionName} inicializada correctamente`);
}

/**
 * Ajusta el contenido principal cuando el sidebar cambia
 */
function adjustMainContent() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    if (!sidebar || !mainContent) return;
    
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '80px';
    } else {
        mainContent.style.marginLeft = '260px';
    }
}

/**
 * Inicializa la barra de navegación
 */
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

/**
 * Inicializa la funcionalidad del sidebar
 */
function initializeSidebar() {
    const toggleButton = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            
            // Ajustar el contenido principal
            adjustMainContent();
            
            // Actualizar el icono del botón
            const icon = toggleButton.querySelector('i');
            if (icon) {
                if (sidebar.classList.contains('collapsed')) {
                    icon.classList.remove('fa-chevron-left');
                    icon.classList.add('fa-chevron-right');
                } else {
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-left');
                }
            }
            
            // Mostrar/ocultar textos del sidebar
            const sidebarTexts = document.querySelectorAll('.sidebar-text');
            sidebarTexts.forEach(text => {
                text.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'block';
            });
            
            // Mostrar/ocultar tooltips
            const tooltips = document.querySelectorAll('.tooltip');
            tooltips.forEach(tooltip => {
                tooltip.classList.toggle('hidden', !sidebar.classList.contains('collapsed'));
            });
        });
    }
}

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
                    console.log('Llamando a loadSection con:', inicioSection);
                    loadSection(inicioSection);
                } else {
                    console.warn('No se encontró la sección inicio, buscando por ruta...');
                    // Si no hay sección inicio, buscar por ruta
                    for (const section of webConfig.sections) {
                        if (currentPath.includes(section.title.toLowerCase())) {
                            loadSection(section);
                            break;
                        }
                    }
                }
            }
        }
    );
}
