// Script para manejar la navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('#main-nav a');
    
    // Añadir evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ocultar todas las secciones
            document.querySelectorAll('.section-container').forEach(section => {
                section.style.display = 'none';
            });
            
            // Mostrar la sección seleccionada
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).style.display = 'block';
            
            // Marcar el enlace activo
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Mostrar la primera sección por defecto y ocultar las demás
    if (navLinks.length > 0) {
        document.querySelectorAll('.section-container').forEach(section => {
            section.style.display = 'none';
        });
        const firstSectionId = navLinks[0].getAttribute('data-section');
        document.getElementById(firstSectionId).style.display = 'block';
        navLinks[0].classList.add('active');
    }
});
