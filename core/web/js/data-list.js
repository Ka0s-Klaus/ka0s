document.addEventListener('DOMContentLoaded', function() {
    // Configuración
    const itemsPerPage = 10;
    let currentPage = 1;
    let filteredData = [];
    let allData = [];
    let archive = '../data/data.json';
    
    // Función para cargar datos
     async function loadData() {

        try {
            // Cargar el archivo data.json que contiene la lista de archivos de datos
            const response = await fetch(archive);
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const dataFiles = await response.json();
            
            // Verificar si tenemos la estructura esperada con dataFiles
            if (!dataFiles.dataFiles || !Array.isArray(dataFiles.dataFiles)) {
                throw new Error('Formato de datos no válido');
            }
            
            // Usar directamente los elementos del array dataFiles como filas de datos
            allData = dataFiles.dataFiles.map(file => {
                // Cada propiedad del objeto se convierte en una columna
                return {
                    ...file
                };
            });
            
            // Inicializar con todos los datos
            filteredData = [...allData];
            
            // Renderizar la primera página
            renderPage(1);
        } catch (error) {
            console.error('Error cargando datos:', error);
            document.getElementById('data-list').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error cargando datos: ${error.message}
                </div>
            `;
        }
    }

    // Renderizar una página de datos
    function renderPage(page) {
        currentPage = page;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = filteredData.slice(startIndex, endIndex);
        
        const dataList = document.getElementById('data-list');
        
        if (pageData.length === 0) {
            dataList.innerHTML = `
                <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
                    No se encontraron datos que coincidan con los criterios de búsqueda.
                </div>
            `;
            document.getElementById('pagination').innerHTML = '';
            return;
        }
        
        // Generar encabezados dinámicamente basados en el primer elemento
        if (pageData.length > 0) {
            const headers = Object.keys(pageData[0]);
            const dataHeaders = document.getElementById('data-headers');
            
            // Calcular el ancho de columna basado en el número de propiedades
            const colSpan = Math.floor(12 / headers.length);
            
            let headersHtml = '';
            headers.forEach(header => {
                // Convertir el nombre de la propiedad a un formato más legible
                const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
                headersHtml += `<div class="col-span-${colSpan} font-medium text-gray-700">${displayName}</div>`;
            });
            
            dataHeaders.innerHTML = headersHtml;
        }
        
        let html = '';
        pageData.forEach(item => {
            const headers = Object.keys(item);
            const colSpan = Math.floor(12 / headers.length);
            
            html += `<div class="bg-white border border-gray-200 rounded-md p-4 mb-3 hover:shadow-md transition-all">`;
            html += `<div class="grid grid-cols-12 gap-4">`;
            
            headers.forEach(header => {
                let value = item[header];
                
                // Formatear objetos o arrays
                if (typeof value === 'object' && value !== null) {
                    value = JSON.stringify(value);
                }
                
                html += `<div class="col-span-${colSpan} text-gray-800">${value}</div>`;
            });
            
            html += `</div>`;
            html += `<div class="mt-3 text-right">
            </div>`;
            html += `</div>`;
        });
        
        dataList.innerHTML = html;
        
        // Añadir event listeners a los botones de detalles
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showDetails(filteredData[index]);
            });
        });
        
        // Renderizar paginación
        renderPagination(page);
    }
    
    // Renderizar controles de paginación
    function renderPagination(currentPage) {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        const pagination = document.getElementById('pagination');
        
        let html = '<nav><ul class="pagination">';
        
        // Botón anterior
        html += `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage - 1}">Anterior</a>
            </li>
        `;
        
        // Páginas
        for (let i = 1; i <= totalPages; i++) {
            html += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }
        
        // Botón siguiente
        html += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage + 1}">Siguiente</a>
            </li>
        `;
        
        html += '</ul></nav>';
        pagination.innerHTML = html;
        
        // Añadir event listeners a los enlaces de paginación
        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page >= 1 && page <= totalPages) {
                    renderPage(page);
                }
            });
        });
    }
    
    // Mostrar detalles de un elemento
    function showDetails(item) {
        // Crear modal para mostrar detalles
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'detailsModal';
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', 'detailsModalLabel');
        modal.setAttribute('aria-hidden', 'true');
        
        let detailsHtml = '';
        for (const [key, value] of Object.entries(item.data)) {
            if (typeof value !== 'object') {
                detailsHtml += `
                    <div class="mb-2">
                        <strong>${key}:</strong> ${value}
                    </div>
                `;
            }
        }
        
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="detailsModalLabel">${item.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <span class="badge bg-secondary">${item.type}</span>
                            <small class="text-muted ms-2">
                                ${new Date(item.date).toLocaleString('es-ES')}
                            </small>
                        </div>
                        
                        ${detailsHtml}
                        
                        <div class="mt-4">
                            <h6>Datos completos:</h6>
                            <pre class="bg-light p-3 rounded">${JSON.stringify(item.data, null, 2)}</pre>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
        
        // Eliminar el modal del DOM cuando se cierre
        modal.addEventListener('hidden.bs.modal', function() {
            document.body.removeChild(modal);
        });
    }
    // Iniciar carga de datos
    loadData();
});