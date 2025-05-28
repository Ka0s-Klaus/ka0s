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
            const response = await fetch('navbar.html');
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