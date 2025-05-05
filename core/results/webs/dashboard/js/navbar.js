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
        Object.keys(data)
            .filter(key => /^section\d+$/.test(key))
            .forEach(key => {
                const sectionName = data[key];
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="#${sectionName}" 
                       class="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group">
                        <i class="fas fa-chart-line text-blue-500 group-hover:text-blue-600"></i>
                        <span class="sidebar-text font-medium capitalize">${sectionName}</span>
                    </a>`;
                navbar.appendChild(li);
            });

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
        
        if (sidebar.classList.contains('w-[250px]')) {
            // Colapsar sidebar
            sidebar.classList.remove('w-[250px]');
            sidebar.classList.add('w-[60px]');
            toggleIcon.style.transform = 'rotate(180deg)';
            sidebarTexts.forEach(text => {
                text.style.opacity = '0';
                text.classList.add('hidden');
            });
            logoImage.classList.add('scale-75');
            if (mainContent) {
                mainContent.classList.remove('ml-[250px]');
                mainContent.classList.add('ml-[60px]');
            }
        } else {
            // Expandir sidebar
            sidebar.classList.remove('w-[60px]');
            sidebar.classList.add('w-[250px]');
            toggleIcon.style.transform = 'rotate(0deg)';
            logoImage.classList.remove('scale-75');
            sidebarTexts.forEach(text => {
                text.classList.remove('hidden');
                setTimeout(() => {
                    text.style.opacity = '1';
                }, 150);
            });
            if (mainContent) {
                mainContent.classList.remove('ml-[60px]');
                mainContent.classList.add('ml-[250px]');
            }
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