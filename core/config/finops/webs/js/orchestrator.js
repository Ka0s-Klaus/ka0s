// Eliminamos la importación de tipo módulo
// Función para cargar la configuración inicial
async function loadInitialConfig() {
    try {
        // Cargar el archivo de configuración webs.json
        const response = await fetch('data/webs.json');
        const config = await response.json();
        
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
    } catch (error) {
        console.error('Error al cargar la configuración inicial:', error);
    }
}

// Cargar la sección de inicio cuando se carga la página
document.addEventListener('DOMContentLoaded', loadInitialConfig);