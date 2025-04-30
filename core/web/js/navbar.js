// Script para cargar dinámicamente las secciones en la navbar y el título
fetch('../../config/webs/webs.json')
    .then(response => response.json())
    .then(data => {
        // Actualizar el título de la navbar
        const navbarTitle = document.getElementById('navbar-title');
        if (navbarTitle && data.title) {
            navbarTitle.textContent = data.title;
        }
        // Actualizar el logo si existe
        const logoImg = document.querySelector('.logo-image');
        if (logoImg && data.logo) {
            logoImg.src = data.logo;
        }
        // Cargar los enlaces con iconos
        const navbar = document.getElementById('navbar-sections');
        navbar.innerHTML = ""; // Limpiar antes de agregar
        if (Array.isArray(data.links)) {
            data.links.forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="${link.url}" class="flex items-center gap-3 text-black hover:text-gray-400 capitalize">
                        <i class="fas ${link.icon}"></i>
                        <span class="sidebar-text">${link.text}</span>
                    </a>
                `;
                navbar.appendChild(li);
            });
        }
    })
    .catch(error => {
        console.error('Error cargando webs.json:', error);
    });

// Sidebar toggle y responsive (adaptado del dashboard)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    const mainContent = document.getElementById('main-content');
    
    if (sidebar.classList.contains('w-[250px]')) {
        sidebar.classList.remove('w-[250px]');
        sidebar.classList.add('w-[60px]');
        toggleIcon.style.transform = 'rotate(180deg)';
        sidebarTexts.forEach(text => {
            text.style.opacity = '0';
            text.classList.add('hidden');
        });
        if (mainContent) {
            mainContent.classList.remove('ml-[250px]');
            mainContent.classList.add('ml-[60px]');
        }
    } else {
        sidebar.classList.remove('w-[60px]');
        sidebar.classList.add('w-[250px]');
        toggleIcon.style.transform = 'rotate(0deg)';
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

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
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