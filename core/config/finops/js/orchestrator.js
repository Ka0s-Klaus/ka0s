// Función para cargar la configuración inicial
async function loadInitialConfig() {
    try {
        // Cargar el navbar primero
        await loadNavbar();
        
        // Cargar el archivo de configuración webs.json
        const response = await fetch('../config/webs.json');
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
            const response = await fetch('template/navbar.html');
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

