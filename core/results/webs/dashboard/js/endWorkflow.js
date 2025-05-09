document.addEventListener('DOMContentLoaded', function() {
    console.log('EndWorkflow.js cargado correctamente');
    
    // Cargar la configuración desde section5endworkflow.json
    fetch('data/section5endworkflow.json')
        .then(response => response.json())
        .then(config => {
            // Establecer títulos
            document.querySelector('header h1').textContent = config.title || 'Workflow Executions';
            document.querySelector('header p').textContent = config.description || '';
            document.querySelector('#table-title').textContent = config.templates[0].title || 'Completed Executions';
            
            // Establecer títulos de métricas
            const metricTitles = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 h2');
            if (metricTitles.length >= 4) {
                metricTitles[0].textContent = config.metric1 || 'Total Completed';
                metricTitles[1].textContent = config.metric2 || 'Success Rate';
                metricTitles[2].textContent = config.metric3 || 'Average Time';
                metricTitles[3].textContent = config.metric4 || 'Last Completion';
            }
            
            // Obtener la fuente de datos
            const dataSource = document.getElementById('data-list').getAttribute('data-source');
            
            // Cargar los datos para filtrar y calcular las métricas
            fetch(dataSource)
                .then(response => response.json())
                .then(data => {
                    // Filtrar solo los workflows completados
                    const completedWorkflows = data.filter(workflow => workflow.status === "completed");
                    
                    // Calcular métricas
                    updateMetrics(completedWorkflows);
                    
                    // Crear un nuevo objeto con solo los workflows completados
                    const filteredData = JSON.stringify(completedWorkflows);
                    
                    // Crear un Blob con los datos filtrados
                    const blob = new Blob([filteredData], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    
                    // Crear un elemento script para cargar data-list.js con los datos filtrados
                    const script = document.createElement('script');
                    script.textContent = `
                        // Sobrescribir la función fetchData en data-list.js
                        window.originalFetchData = window.fetchData;
                        window.fetchData = function(url) {
                            // Usar los datos filtrados en lugar de hacer fetch
                            const filteredData = ${filteredData};
                            processData(filteredData);
                        };
                    `;
                    document.head.appendChild(script);
                    
                    // Disparar manualmente la carga de datos
                    if (typeof window.initDataList === 'function') {
                        window.initDataList();
                    }
                })
                .catch(error => {
                    console.error('Error al cargar los datos:', error);
                    document.getElementById('data-list').innerHTML = `
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            Error al cargar los datos: ${error.message}
                        </div>
                    `;
                });
        })
        .catch(error => {
            console.error('Error al cargar la configuración:', error);
        });
});

// Función para actualizar las métricas basadas en los workflows completados
function updateMetrics(completedWorkflows) {
    // Total de workflows completados
    document.getElementById('metric1').textContent = completedWorkflows.length;
    
    // Tasa de éxito (porcentaje de workflows con conclusion=success)
    const successWorkflows = completedWorkflows.filter(w => w.conclusion === "success");
    const successRate = completedWorkflows.length > 0 
        ? (successWorkflows.length / completedWorkflows.length * 100).toFixed(1) 
        : "0.0";
    document.getElementById('metric2').textContent = `${successRate}%`;
    
    // Tiempo promedio (si hay datos de tiempo disponibles)
    let totalTime = 0;
    let timeCount = 0;
    completedWorkflows.forEach(workflow => {
        if (workflow.created_at && workflow.updated_at) {
            const startTime = new Date(workflow.created_at);
            const endTime = new Date(workflow.updated_at);
            const durationMs = endTime - startTime;
            if (!isNaN(durationMs) && durationMs > 0) {
                totalTime += durationMs;
                timeCount++;
            }
        }
    });
    
    const avgTimeMs = timeCount > 0 ? totalTime / timeCount : 0;
    const avgTimeMin = Math.floor(avgTimeMs / 60000);
    const avgTimeSec = Math.floor((avgTimeMs % 60000) / 1000);
    document.getElementById('metric3').textContent = `${avgTimeMin}m ${avgTimeSec}s`;
    
    // Última finalización
    if (completedWorkflows.length > 0) {
        // Ordenar por updated_at (más reciente primero)
        completedWorkflows.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const lastCompletionDate = new Date(completedWorkflows[0].updated_at);
        
        // Formatear fecha como "dd/mm/yyyy HH:MM"
        const formattedDate = `${lastCompletionDate.getDate().toString().padStart(2, '0')}/${
            (lastCompletionDate.getMonth() + 1).toString().padStart(2, '0')}/${
            lastCompletionDate.getFullYear()} ${
            lastCompletionDate.getHours().toString().padStart(2, '0')}:${
            lastCompletionDate.getMinutes().toString().padStart(2, '0')}`;
            
        document.getElementById('metric4').textContent = formattedDate;
    }
}