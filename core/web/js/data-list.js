// Script para cargar dinámicamente los datos de la lista
// Configuración
let itemsPerPage = 10;
let currentPage = 1;
let filteredData = [];
let allData = [];
// Obtener dinámicamente la fuente de datos desde el HTML
let archive = 'data/kaos-workflows-available.json';

document.addEventListener('DOMContentLoaded', function() {
    const dataListElement = document.getElementById('data-list');
    if (dataListElement && dataListElement.getAttribute('data-source')) {
        archive = dataListElement.getAttribute('data-source');
    }
    
    // Cargar los datos
    loadData();
});

// Cargar datos usando fetch directamente
function loadData() {
    fetch(archive)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Adaptarse a la estructura real del JSON
            if (Array.isArray(data) && data.length > 0) {
                // Si es un array de arrays
                if (Array.isArray(data[0])) {
                    allData = data[0]; // Tomar el primer array interno
                } else {
                    allData = data; // Es un array simple
                }
            } else if (data.dataFiles && Array.isArray(data.dataFiles)) {
                // Si tiene la estructura esperada con dataFiles
                allData = data.dataFiles;
            } else if (typeof data === 'object') {
                // Si es un objeto simple, convertir cada propiedad en una fila
                allData = Object.entries(data).map(([key, value]) => ({
                    key: key,
                    value: typeof value === 'object' ? JSON.stringify(value) : value
                }));
            } else {
                throw new Error('Formato de datos no reconocido');
            }
            
            // Inicializar con todos los datos
            filteredData = [...allData];
            
            // Renderizar la primera página
            renderPage(1);
        })
        .catch(error => {
            console.error('Error cargando datos:', error);
            document.getElementById('data-list').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error cargando datos: ${error.message}
                </div>
            `;
        });
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

    // Determinar si necesitamos scroll horizontal
    const headers = Object.keys(pageData[0]);
    const needsScroll = headers.length > 4;
    
    // Generar encabezados dinámicamente basados en el primer elemento
    if (pageData.length > 0) {
        const dataHeaders = document.getElementById('data-headers');
        
        // Limpiar cualquier clase de scroll anterior
        if (dataHeaders.parentElement) {
            dataHeaders.parentElement.classList.remove('overflow-x-auto');
        }
        
        // Calcular el ancho de columna basado en el número de propiedades
        const colSpan = Math.floor(12 / headers.length);
        
        let headersHtml = '';
        
        if (needsScroll) {
            // Para muchas columnas, usamos un contenedor con ancho fijo para cada columna
            headersHtml = '';
            headers.forEach(header => {
                const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
                headersHtml += `<div class="px-4 py-2 min-w-[150px] font-medium text-gray-700">${displayName}</div>`;
            });
        } else {
            // Para pocas columnas, usamos grid
            headers.forEach(header => {
                const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
                headersHtml += `<div class="col-span-${colSpan} font-medium text-gray-700">${displayName}</div>`;
            });
        }

        dataHeaders.innerHTML = headersHtml;
    }

    let html = '';
    
    if (needsScroll) {
        // Crear un contenedor único con scroll para encabezados y datos
        html = `<div class="overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr>`;
            
        // Añadir encabezados a la tabla
        headers.forEach(header => {
            const displayName = header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1');
            html += `<th class="px-4 py-2 min-w-[150px] font-medium text-gray-700 bg-gray-100 sticky top-0">${displayName}</th>`;
        });
            
        html += `</tr>
                </thead>
                <tbody>`;
            
        // Añadir filas de datos
        pageData.forEach(item => {
            html += `<tr class="border-b hover:bg-gray-50">`;
            
            headers.forEach(header => {
                let value = item[header];
                // Formatear objetos o arrays
                if (typeof value === 'object' && value !== null) {
                    value = JSON.stringify(value);
                }
                
                html += `<td class="px-4 py-3 text-gray-800">${value}</td>`;
            });
            
            html += `</tr>`;
        });
            
        html += `</tbody>
                </table>
            </div>`;
            
        // Ocultar los encabezados originales cuando usamos tabla
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.style.display = 'none';
        }
    } else {
        // Formato original para pocas columnas
        // Mostrar los encabezados originales
        const dataHeaders = document.getElementById('data-headers');
        if (dataHeaders) {
            dataHeaders.style.display = '';
        }
        
        pageData.forEach(item => {
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
    }

    dataList.innerHTML = html;

    // Añadir event listeners a los botones de detalles
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
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
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(startItem + itemsPerPage - 1, filteredData.length);

    let html = `
        <div class="flex items-center justify-between w-full">
            <div class="text-sm text-gray-700">
                Showing ${startItem} to ${endItem} of ${filteredData.length} successful workflows
            </div>
            <div class="flex space-x-2">
                <button id="prevPage" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}" ${currentPage === 1 ? 'disabled' : ''}>
                    Previous
                </button>
                <div class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
                    Page ${currentPage} of ${totalPages}
                </div>
                 <button id="nextPage" class="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}" ${currentPage === totalPages ? 'disabled' : ''}>
                    Next
                </button>
            </div>
        `;

    pagination.innerHTML = html;

    // Añadir event listeners a los botones de paginación
    document.getElementById('prevPage')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            renderPage(currentPage - 1);
        }
    });

    document.getElementById('nextPage')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            renderPage(currentPage + 1);
        }
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
    modal.addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(modal);
    });
}