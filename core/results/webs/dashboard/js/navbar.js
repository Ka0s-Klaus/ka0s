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
                li.innerHTML = `<a href="#${sectionName}" class="text-gray-300 hover:text-white capitalize">${sectionName}</a>`;
                navbar.appendChild(li);
            });
    })
    .catch(error => {
        console.error('Error cargando webs.json:', error);
    });

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
        console.log('Evento de clic agregado al botón de toggle');
    } else {
        console.error('No se encontró el elemento con ID sidebarToggle');
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