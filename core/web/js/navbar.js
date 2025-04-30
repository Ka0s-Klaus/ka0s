// Script para cargar dinámicamente las secciones en la navbar y el título
fetch('../../config/webs/webs.json')
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