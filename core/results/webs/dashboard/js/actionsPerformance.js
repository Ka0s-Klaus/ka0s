document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos de configuración
    async function loadConfig() {
        try {
            const response = await fetch('data/actionsPerformance.json');
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
            } else {
                // Si no hay configuración de plantillas, cargar datos directamente
                loadActionsPerformanceData();
            }
            
        } catch (error) {
            console.error('Error cargando configuración:', error);
            document.getElementById('data-list').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error cargando configuración: ${error.message}
                </div>
            `;
            // Intentar cargar datos directamente si falla la configuración
            loadActionsPerformanceData();
        }
    }
    
    // Cargar datos de GitHub Actions directamente
    async function loadActionsPerformanceData() {
        try {
            const response = await fetch('../../data/kaos-workflows-runs.json');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Actualizar estadísticas basadas en los datos
            updateActionsStats(data);
            
            // Configurar la tabla
            setupWorkflowTable(data);
            
        } catch (error) {
            console.error('Error cargando datos de Actions:', error);
            document.getElementById('data-list').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error cargando datos de Actions: ${error.message}
                </div>
            `;
        }
    }
    
    // Actualizar estadísticas basadas en los datos de Actions
    function updateActionsStats(data) {
        if (!data || !Array.isArray(data)) return;
        
        // Calcular estadísticas
        const totalWorkflows = data.length;
        const successfulWorkflows = data.filter(item => item.conclusion === 'success').length;
        const successRate = totalWorkflows > 0 ? Math.round((successfulWorkflows / totalWorkflows) * 100) : 0;
        
        // Calcular duración promedio
        let totalDuration = 0;
        let validDurations = 0;
        
        data.forEach(item => {
            if (item.duration && !isNaN(parseInt(item.duration))) {
                totalDuration += parseInt(item.duration);
                validDurations++;
            }
        });
        
        const avgDuration = validDurations > 0 ? Math.round(totalDuration / validDurations) : 0;
        
        // Actualizar las tarjetas de estadísticas
        const statItems = [
            { title: 'Total Workflows', value: totalWorkflows.toString() },
            { title: 'Success Rate', value: `${successRate}%` },
            { title: 'Total Runs', value: totalWorkflows.toString() },
            { title: 'Avg Duration', value: `${formatDuration(avgDuration)}` }
        ];
        
        updateStats(statItems);
    }
    
    // Configurar la tabla de workflows
    function setupWorkflowTable(data) {
        if (!data || !Array.isArray(data)) return;
        
        // Configurar columnas personalizadas
        window.customColumns = [
            { key: 'id', label: 'ID', width: 1 },
            { key: 'name', label: 'WORKFLOW', width: 2 },
            { key: 'run_number', label: 'RUN #', width: 1 },
            { key: 'head_branch', label: 'BRANCH', width: 1 },
            { key: 'head_sha', label: 'COMMIT', width: 1 },
            { key: 'event', label: 'EVENT', width: 1 },
            { key: 'status', label: 'STATUS', width: 1, formatter: 'formatStatus' },
            { key: 'conclusion', label: 'CONCLUSION', width: 1, formatter: 'formatStatus' }
        ];
        
        // Configurar límite y ordenación
        window.itemsPerPage = 10;
        window.sortBy = 'run_number';
        window.sortDirection = 'desc';
        
        // Actualizar el título de la tabla
        const tableTitle = document.querySelector('h2.text-xl');
        if (tableTitle) {
            tableTitle.textContent = 'Workflow Actions';
        }
    }
    
    // Actualizar las estadísticas en la interfaz
    function updateStats(items) {
        if (!items || !Array.isArray(items)) return;
        
        const statContainers = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 > div');
        
        items.forEach((item, index) => {
            if (index < statContainers.length) {
                const container = statContainers[index];
                const titleElement = container.querySelector('h2') || container.querySelector('h3');
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
    
    // Formatear duración
    function formatDuration(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0s';
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        if (minutes === 0) {
            return `${remainingSeconds}s`;
        } else {
            return `${minutes}m ${remainingSeconds}s`;
        }
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
        
        if (statusLower === 'success' || statusLower === 'completed') {
            statusClass = 'bg-green-100 text-green-800';
            icon = 'fa-check-circle';
        } else if (statusLower === 'failed' || statusLower === 'failure') {
            statusClass = 'bg-red-100 text-red-800';
            icon = 'fa-times-circle';
        } else if (statusLower === 'in_progress') {
            statusClass = 'bg-yellow-100 text-yellow-800';
            icon = 'fa-spinner';
        } else if (statusLower === 'pending') {
            statusClass = 'bg-orange-100 text-orange-800';
            icon = 'fa-clock';
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