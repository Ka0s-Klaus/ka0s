// Configuración global
const config = {
    itemsPerPage: 10,
    defaultArchive: 'data/kaos-workflows-available.json'
};

// Variables globales iniciales
let webConfig = null;
let sectionConfigMap = {};

// Función para inicializar todos los módulos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
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
 * Función genérica para cargar datos desde una URL
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
 */
function initSection(sectionName) {
    console.log(`Inicializando sección: ${sectionName}`);

    const sectionConfig = sectionConfigMap[sectionName];
    if (!sectionConfig) {
        console.error(`Configuración no encontrada para la sección: ${sectionName}`);
        return;
    }

    loadDataFromUrl(
        sectionConfig.configFile,
        (config) => {
            updateTitleAndDescription(config);
        },
        (error) => {
            console.error(`Error cargando configuración para ${sectionName}:`, error);
        }
    );
}

/**
 * Actualiza el título y descripción de la página
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
 * Inicializa la barra de navegación
 */
function initNavbar() {
    if (!webConfig) {
        console.error('Configuración no disponible para inicializar navbar');
        return;
    }

    const navbarTitle = document.getElementById('navbar-title');
    if (navbarTitle && webConfig.title) {
        navbarTitle.textContent = webConfig.title;
    }

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
                </a>`;
            navbar.appendChild(li);
        });
    }

    initializeSidebar();
}

/**
 * Inicializa el sidebar
 */
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (!sidebar || !sidebarToggle) return;

    function toggleSidebar() {
        const sidebarTexts = document.querySelectorAll('.sidebar-text');
        
        if (sidebar.classList.contains('w-[250px]')) {
            sidebar.classList.remove('w-[250px]');
            sidebar.classList.add('w-[60px]');
            sidebarTexts.forEach(text => {
                text.style.opacity = '0';
                text.classList.add('hidden');
            });
        } else {
            sidebar.classList.remove('w-[60px]');
            sidebar.classList.add('w-[250px]');
            sidebarTexts.forEach(text => {
                text.classList.remove('hidden');
                setTimeout(() => text.style.opacity = '1', 150);
            });
        }
    }

    sidebarToggle.addEventListener('click', toggleSidebar);
}