// Script para cargar dinámicamente las secciones en la navbar y el título
fetch('data/webs.json')
    .then(response => response.json())
    .then(data => {
        // Actualizar el título de la navbar
        const navbarTitle = document.getElementById('navbar-title');
        if (navbarTitle && data.title) {
            navbarTitle.textContent = data.title;
        }

        // Cargar las secciones
        const navbar = document.getElementById('navbar-sections');
        if (data.sections && Array.isArray(data.sections)) {
            data.sections.forEach(section => {
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
        initializeSidebar();
    })
    .catch(error => {
        console.error('Error cargando webs.json:', error);
    });

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const mainContent = document.getElementById('main-content');

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