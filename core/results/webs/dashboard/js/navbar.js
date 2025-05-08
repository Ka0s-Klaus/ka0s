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
<<<<<<< HEAD
                li.innerHTML = `<a href="#${sectionName}" class="text-gray-300 hover:text-white capitalize">${sectionName}</a>`;
                navbar.appendChild(li);
            });
=======
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
>>>>>>> origin
    })
    .catch(error => {
        console.error('Error cargando webs.json:', error);
    });

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
<<<<<<< HEAD
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
        console.log('Evento de clic agregado al botón de toggle');
    } else {
        console.error('No se encontró el elemento con ID sidebarToggle');
=======
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
>>>>>>> origin
    }

    function handleResponsiveLayout() {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth < 640 && sidebar.classList.contains('w-[250px]')) {
            toggleSidebar();
        }
    }
    window.addEventListener('load', handleResponsiveLayout);
    window.addEventListener('resize', handleResponsiveLayout);
});