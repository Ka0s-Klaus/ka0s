document.addEventListener('DOMContentLoaded', function() {
    console.log('HandlerFailure.js cargado correctamente');
    
    // Cargar la configuración desde section7handlerFailure.json
    fetch('data/section7handlerFailure.json')
        .then(response => response.json())
        .then(config => {
            // Establecer títulos
            document.querySelector('header h1').textContent = config.title || 'Handler Failure';
            document.querySelector('header p').textContent = config.description || '';
            document.querySelector('#table-title').textContent = config.templates[0].title || 'Recent Failures';
            
            // Establecer títulos de métricas
            const metricTitles = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 h2');
            if (metricTitles.length >= 4) {
                metricTitles[0].textContent = config.metric1 || 'Total Failed Workflows';
                metricTitles[1].textContent = config.metric2 || 'Failure Rate';
                metricTitles[2].textContent = config.metric3 || 'Most Common Failure';
                metricTitles[3].textContent = config.metric4 || 'Avg Time to Failure';
            }
            
            // Obtener la fuente de datos
            const dataSource = document.getElementById('data-list').getAttribute('data-source');
            
            // Cargar los datos para filtrar y calcular las métricas
            fetch(dataSource)
                .then(response => response.json())
                .then(data => {
                    // Filtrar solo los workflows fallidos
                    const failedWorkflows = data.filter(workflow => 
                        workflow.status === "completed" && workflow.conclusion === "failure");
                    
                    // Calcular métricas
                    updateMetrics(failedWorkflows, data);
                    
                    // Crear un nuevo objeto con solo los workflows fallidos
                    const filteredData = JSON.stringify(failedWorkflows);
                    
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

// Función para actualizar las métricas basadas en los workflows fallidos
function updateMetrics(failedWorkflows, allWorkflows) {
    // Total de workflows fallidos
    document.getElementById('metric1').textContent = failedWorkflows.length;
    
    // Tasa de fallos (porcentaje de workflows con conclusion=failure)
    const completedWorkflows = allWorkflows.filter(w => w.status === "completed");
    const failureRate = completedWorkflows.length > 0 
        ? (failedWorkflows.length / completedWorkflows.length * 100).toFixed(1) 
        : "0.0";
    document.getElementById('metric2').textContent = `${failureRate}%`;
    
    // Workflow con más fallos
    const workflowCounts = {};
    failedWorkflows.forEach(workflow => {
        const name = workflow.name || "Unknown";
        workflowCounts[name] = (workflowCounts[name] || 0) + 1;
    });
    
    let mostCommonWorkflow = "Ninguno";
    let maxCount = 0;
    
    for (const [name, count] of Object.entries(workflowCounts)) {
        if (count > maxCount) {
            mostCommonWorkflow = name;
            maxCount = count;
        }
    }
    
    document.getElementById('metric3').textContent = mostCommonWorkflow;
    
    // Tiempo promedio hasta el fallo
    let totalTime = 0;
    let timeCount = 0;
    failedWorkflows.forEach(workflow => {
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
    document.getElementById('metric4').textContent = `${avgTimeMin}m ${avgTimeSec}s`;
}