document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos de seccion2.json
    async function loadConfig() {
        try {
            const response = await fetch('data/seccion2.json');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const config = await response.json();
            
            // Actualizar título y descripción si existen
            if (config.title) {
                document.querySelector('h1').textContent = config.title;
            }
            
            if (config.description) {
                document.querySelector('p.text-gray-600').textContent = config.description;
            }
            
            // Procesar las plantillas
            if (config.templates && Array.isArray(config.templates)) {
                // Procesar estadísticas
                const statsTemplate = config.templates.find(t => t.type === 'stats');
                if (statsTemplate && statsTemplate.items && Array.isArray(statsTemplate.items)) {
                    updateStats(statsTemplate.items);
                }
                
                // Procesar tabla
                const tableTemplate = config.templates.find(t => t.type === 'table');
                if (tableTemplate && tableTemplate.dataSource) {
                    // Configurar la fuente de datos para data-list.js
                    const dataListElement = document.getElementById('data-list');
                    if (dataListElement) {
                        dataListElement.setAttribute('data-source', tableTemplate.dataSource);
                        
                        // Actualizar el título de la tabla si existe
                        if (tableTemplate.title) {
                            const tableTitle = document.querySelector('h2.text-xl');
                            if (tableTitle) {
                                tableTitle.textContent = tableTemplate.title;
                            }
                        }
                        
                        // Inicializar data-list.js
                        window.archive = tableTemplate.dataSource;
                        
                        // Configurar columnas personalizadas si existen
                        if (tableTemplate.columns && Array.isArray(tableTemplate.columns)) {
                            window.customColumns = tableTemplate.columns;
                        }
                        
                        // Configurar límite si existe
                        if (tableTemplate.limit) {
                            window.itemsPerPage = tableTemplate.limit;
                        }
                        
                        // Configurar ordenación si existe
                        if (tableTemplate.sortBy) {
                            window.sortBy = tableTemplate.sortBy;
                            window.sortDirection = tableTemplate.sortDirection || 'asc';
                        }
                    }
                }
            }
            
        } catch (error) {
            console.error('Error cargando configuración:', error);
            document.getElementById('data-list').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error cargando configuración: ${error.message}
                </div>
            `;
        }
    }
    
    // Actualizar las estadísticas en la interfaz
    function updateStats(items) {
        if (!items || !Array.isArray(items)) return;
        
        const statContainers = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 > div');
        
        items.forEach((item, index) => {
            if (index < statContainers.length) {
                const container = statContainers[index];
                const titleElement = container.querySelector('h2');
                const valueElement = container.querySelector('p');
                
                if (titleElement && item.title) {
                    titleElement.textContent = item.title;
                }
                
                if (valueElement && item.value) {
                    valueElement.textContent = item.value;
                }
            }
        });
    }
    
    // Formatear tiempo relativo
    window.formatTimeAgo = function(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        } else {
            const diffInDays = Math.floor(diffInHours / 24);
            return `${diffInDays}d ago`;
        }
    };
    
    // Formatear estado
    window.formatStatus = function(status) {
        if (!status) return '';
        
        const statusLower = status.toLowerCase();
        let statusClass = '';
        let icon = '';
        
        if (statusLower === 'success') {
            statusClass = 'bg-green-100 text-green-800';
            icon = 'fa-check-circle';
        } else if (statusLower === 'failed' || statusLower === 'failure') {
            statusClass = 'bg-red-100 text-red-800';
            icon = 'fa-times-circle';
        } else {
            statusClass = 'bg-gray-100 text-gray-800';
            icon = 'fa-info-circle';
        }
        
        return `<span class="px-2 py-1 rounded-full ${statusClass} inline-flex items-center">
                    <i class="fas ${icon} mr-1"></i> ${status}
                </span>`;
    };
    
    // Cargar configuración
    loadConfig();
});