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
            })
            .catch(error => console.error('Error cargando el navbar:', error));
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
});

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
                    
                    // Actualizar directamente los elementos del título y descripción
                    const sectionTitle = document.getElementById('section-title');
                    const sectionDescription = document.getElementById('section-description');
                    
                    if (sectionTitle && inicioSection.titleWeb) {
                        console.log('Actualizando título a:', inicioSection.titleWeb);
                        sectionTitle.textContent = inicioSection.titleWeb;
                    } else {
                        console.warn('No se pudo actualizar el título. Elemento o datos faltantes.');
                    }
                    
                    if (sectionDescription && inicioSection.description) {
                        console.log('Actualizando descripción a:', inicioSection.description);
                        sectionDescription.textContent = inicioSection.description;
                    } else {
                        console.warn('No se pudo actualizar la descripción. Elemento o datos faltantes.');
                    }
                    
                    // Cargar las plantillas definidas en la sección
                    if (inicioSection.templates && inicioSection.templates.length > 0) {
                        console.log('Cargando plantillas de la sección inicio:', inicioSection.templates);
                        
                        // Contenedor principal para las plantillas
                        const contentContainer = document.getElementById('content-container');
                        if (!contentContainer) {
                            console.error('No se encontró el contenedor de contenido con ID "content-container"');
                            return;
                        }
                        
                        // Limpiar el contenedor antes de añadir nuevas plantillas
                        contentContainer.innerHTML = '';
                        
                        // Procesar cada plantilla
                        inicioSection.templates.forEach(template => {
                            console.log('Procesando plantilla:', template);
                            
                            if (template.type === 'summary') {
                                // Cargar la plantilla de resumen
                                loadTemplateFromUrl('templates/summary.html', (templateHtml) => {
                                    console.log('Plantilla summary cargada:', templateHtml);
                                    
                                    // Crear un contenedor para esta plantilla
                                    const templateContainer = document.createElement('div');
                                    templateContainer.className = 'template-container mb-8';
                                    templateContainer.innerHTML = templateHtml;
                                    
                                    // Añadir al contenedor principal
                                    contentContainer.appendChild(templateContainer);
                                    
                                    // Cargar los datos para esta plantilla
                                    if (template.dataSource) {
                                        loadDataFromUrl(template.dataSource, (data) => {
                                            console.log('Datos cargados para summary:', data);
                                            updateSummaryTemplate(templateContainer, data);
                                        }, (error) => {
                                            console.error('Error cargando datos para summary:', error);
                                        });
                                    }
                                }, (error) => {
                                    console.error('Error cargando plantilla summary:', error);
                                });
                            } else if (template.type === 'table') {
                                // Cargar la plantilla de tabla
                                loadTemplateFromUrl('templates/table.html', (templateHtml) => {
                                    console.log('Plantilla table cargada:', templateHtml);
                                    
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
                                            console.log('Datos cargados para table:', data);
                                            updateTableTemplate(templateContainer, data);
                                        }, (error) => {
                                            console.error('Error cargando datos para table:', error);
                                        });
                                    }
                                }, (error) => {
                                    console.error('Error cargando plantilla table:', error);
                                });
                            } else {
                                console.warn('Tipo de plantilla no soportado:', template.type);
                            }
                        });
                    }
                    
                    // Inicializar la sección para cargar sus datos específicos
                    initSection(inicioSection.title);
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
    console.log('Cargando plantilla desde:', url);
    
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
            console.error('Error cargando plantilla:', error);
            if (errorCallback) errorCallback(error);
        });
}

/**
 * Actualiza los elementos de la plantilla de resumen con los datos proporcionados
 */
function updateSummaryTemplate(container, data) {
    console.log('Actualizando plantilla de resumen con datos:', data);
    
    // Actualizar los elementos de la plantilla con los datos
    // Ejemplo: Total Workflows
    const totalWorkflows = container.querySelector('#total-workflows');
    if (totalWorkflows && data.totalWorkflows) {
        totalWorkflows.textContent = data.totalWorkflows;
    }
    
    // Ejemplo: Avg Lead Time
    const avgLeadTime = container.querySelector('#avg-lead-time');
    if (avgLeadTime && data.avgLeadTime) {
        avgLeadTime.textContent = data.avgLeadTime;
    }
    
    // Ejemplo: Max Lead Time
    const maxLeadTime = container.querySelector('#max-lead-time');
    if (maxLeadTime && data.maxLeadTime) {
        maxLeadTime.textContent = data.maxLeadTime;
    }
    
    // Ejemplo: Min Lead Time
    const minLeadTime = container.querySelector('#min-lead-time');
    if (minLeadTime && data.minLeadTime) {
        minLeadTime.textContent = data.minLeadTime;
    }
}

/**
 * Actualiza los elementos de la plantilla de tabla con los datos proporcionados
 */
function updateTableTemplate(container, data) {
    console.log('Actualizando plantilla de tabla con datos:', data);
    
    // Obtener el cuerpo de la tabla
    const tableBody = container.querySelector('#table-body');
    if (!tableBody) {
        console.error('No se encontró el cuerpo de la tabla');
        return;
    }
    
    // Limpiar el cuerpo de la tabla
    tableBody.innerHTML = '';
    
    // Verificar que los datos sean un array
    if (!Array.isArray(data)) {
        console.error('Los datos no son un array:', data);
        return;
    }
    
    // Crear filas para cada elemento en los datos
    data.forEach(item => {
        // Determinar el estado para el estilo de la etiqueta
        const statusClass = getStatusClass(item.state);
        const iconClass = getIconClass(item.name);
        
        // Crear la fila
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-gray-800 text-white rounded">
                        <i class="${iconClass} text-xs"></i>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">${item.name}</div>
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass.bgClass} ${statusClass.textClass}">
                            ${item.state}
                        </span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.path}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass.bgClass} ${statusClass.textClass}">
                    ${item.state}
                </span>
            </td>
        `;
        
        // Añadir la fila al cuerpo de la tabla
        tableBody.appendChild(row);
    });
}

/**
 * Obtiene las clases CSS para el estado
 */
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

/**
 * Obtiene la clase de icono basada en el nombre
 */
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

/**
 * Función genérica para cargar datos desde una URL
 */
function loadDataFromUrl(url, successCallback, errorCallback = null) {

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
            if (errorCallback && typeof errorCallback === 'function') {
                errorCallback(error);
            }
        });
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