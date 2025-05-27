// Función para cargar la configuración inicial
async function loadInitialConfig() {
    try {
        // Cargar el navbar primero
        await loadNavbar();
        
        // Cargar el archivo de configuración webs.json
        const response = await fetch('data/webs.json');
        const config = await response.json();
        
        // Guardar la configuración global para uso posterior
        window.webConfig = config;
        
        // Inicializar la barra de navegación con las secciones
        initNavbar();
        
        // Encontrar la sección de inicio
        const inicioSection = config.sections.find(section => section.title.toLowerCase() === 'inicio');
        
        if (inicioSection) {
            // Cargar los datos de la sección desde section1.json
            const dataResponse = await fetch(`data/${inicioSection.datatemplate}`);
            const sectionData = await dataResponse.json();
            
            // Actualizar el título y descripción en el HTML
            document.getElementById('section-title').textContent = sectionData.title;
            document.getElementById('section-description').textContent = sectionData.description;

            // Procesar los templates
            if (sectionData.templates && Array.isArray(sectionData.templates)) {
                const contentContainer = document.getElementById('content-container');
                contentContainer.innerHTML = ''; // Limpiar el contenedor

                // Iterar sobre cada template y renderizarlo
                for (const template of sectionData.templates) {
                    const templateElement = await createTemplate(template);
                    if (templateElement) {
                        contentContainer.appendChild(templateElement);
                    }
                }
            }
        }
        
        // Configurar los enlaces del navbar
        setupNavbarLinks();
        
        // Escuchar cambios en el hash de la URL
        window.addEventListener('hashchange', handleHashChange);
    } catch (error) {
        console.error('Error al cargar la configuración inicial:', error);
    }
} // Cierre correcto de loadInitialConfig

// Cargar la sección de inicio cuando se carga la página
document.addEventListener('DOMContentLoaded', loadInitialConfig);

/**
 * Carga una sección específica del dashboard
 */
async function loadSection(section) {
    console.log('Cargando sección:', section.title);
    
    try {
        // Cargar los datos de la sección desde su archivo de plantilla
        const dataResponse = await fetch(`data/${section.datatemplate}`);
        const sectionData = await dataResponse.json();
        
        // Actualizar el título y descripción en el HTML
        document.getElementById('section-title').textContent = sectionData.title || section.title;
        document.getElementById('section-description').textContent = sectionData.description || `Información sobre ${section.title}`;

        // Procesar los templates
        if (sectionData.templates && Array.isArray(sectionData.templates)) {
            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = ''; // Limpiar el contenedor

            // Iterar sobre cada template y renderizarlo
            for (const template of sectionData.templates) {
                const templateElement = await createTemplate(template);
                if (templateElement) {
                    contentContainer.appendChild(templateElement);
                }
            }
        } else {
            // Si no hay plantillas, mostrar un mensaje
            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = `
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Sección ${section.title}</h2>
                    <p>No hay plantillas definidas para esta sección.</p>
                </div>
            `;
        }
        
        // Marcar el enlace correspondiente como activo
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkHash = link.getAttribute('href');
            if (linkHash && linkHash.substring(1) === encodeURIComponent(section.title)) {
                link.classList.add('active-nav-link');
            } else {
                link.classList.remove('active-nav-link');
            }
        });
        
    } catch (error) {
        console.error(`Error al cargar la sección ${section.title}:`, error);
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">No se pudo cargar la sección ${section.title}.</span>
            </div>
        `;
    }
}

// Configurar los enlaces del navbar
setupNavbarLinks();

try {
    // Escuchar cambios en el hash de la URL
    window.addEventListener('hashchange', handleHashChange);
} catch (error) {
    console.error('Error al cargar la configuración inicial:', error);
}


/**
 * Carga el HTML del navbar
 */
async function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        try {
            const response = await fetch('templates/navbar.html');
            const html = await response.text();
            navbarContainer.innerHTML = html;
            return true;
        } catch (error) {
            console.error('Error al cargar el navbar:', error);
            return false;
        }
    }
    return false;
}

/**
 * Inicializa la barra de navegación con las secciones configuradas
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
                <a href="#${encodeURIComponent(section.title)}" 
                   class="nav-link flex items-center justify-center w-full py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group relative">
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

    // Inicializar la funcionalidad del sidebar
    initializeSidebar();
}

/**
 * Configura los event listeners para los enlaces del navbar
 */
function setupNavbarLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remover la clase activa de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active-nav-link'));
            // Agregar la clase activa al enlace clickeado
            this.classList.add('active-nav-link');
        });
    });
}

/**
 * Maneja los cambios en el hash de la URL
 */
function handleHashChange() {
    const hash = decodeURIComponent(window.location.hash.substring(1)); // Decodificar y eliminar el #
    console.log('Hash cambiado a:', hash);
    
    if (hash && webConfig && webConfig.sections) {
        // Buscar la sección que coincide con el hash (ignorando mayúsculas/minúsculas)
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
 * Carga el HTML del navbar
 */
async function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        try {
            const response = await fetch('templates/navbar.html');
            const html = await response.text();
            navbarContainer.innerHTML = html;
            return true;
        } catch (error) {
            console.error('Error al cargar el navbar:', error);
            return false;
        }
    }
    return false;
}

/**
 * Inicializa la barra de navegación con las secciones configuradas
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
                <a href="#${encodeURIComponent(section.title)}" 
                   class="nav-link flex items-center justify-center w-full py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group relative">
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

    // Inicializar la funcionalidad del sidebar
    initializeSidebar();
}

/**
 * Configura los event listeners para los enlaces del navbar
 */
function setupNavbarLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remover la clase activa de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active-nav-link'));
            // Agregar la clase activa al enlace clickeado
            this.classList.add('active-nav-link');
        });
    });
}

/**
 * Inicializa la funcionalidad del sidebar (expandir/contraer)
 */
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const mainContent = document.getElementById('main-content');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    
    if (sidebar && sidebarToggle && toggleIcon) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('w-[250px]');
            sidebar.classList.toggle('w-[70px]');
            
            toggleIcon.classList.toggle('rotate-180');
            
            // Ajustar el margen del contenido principal
            if (mainContent) {
                mainContent.classList.toggle('ml-[270px]');
                mainContent.classList.toggle('ml-[80px]');
            }
            
            // Mostrar/ocultar textos
            sidebarTexts.forEach(text => {
                text.classList.toggle('opacity-0');
                text.classList.toggle('hidden');
            });
        });
    }
}