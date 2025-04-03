async function updateActionsPerformance() {
    try {
        // Cargar datos de estadísticas
        const statistics = await fetch('../outputs/w/workflow-statistics.json')
            .then(response => response.json())
            .catch(error => {
                console.error('Error loading statistics:', error);
                return null;
            });

        if (!statistics) {
            console.error('No statistics data available');
            return;
        }

        const container = document.querySelector('#actions-performance');
        if (!container) {
            console.error('Container not found');
            return;
        }

        const processedData = {
            title: "GitHub Actions Performance",
            description: "Real-time workflow execution metrics",
            summary: {
                total_workflows: Object.keys(statistics.workflow_distribution).length,
                success_rate: statistics.summary.success_rate + '%',
                total_runs: statistics.summary.total_runs,
                avg_duration: formatDuration(statistics.summary.average_duration * 1000) // Convertir a milisegundos
            },
            workflows: processWorkflowDistribution(statistics)
        };

        // Render HTML
        container.innerHTML = generateHTML(processedData);
        
        // Renderizar gráficos adicionales
        renderCharts(statistics);

        // Auto update cada 30 segundos
        setTimeout(updateActionsPerformance, 30000);

    } catch (error) {
        console.error('Error updating actions performance:', error);
    }
}

function processWorkflowDistribution(statistics) {
    return Object.entries(statistics.workflow_distribution)
        .filter(([name]) => !name.startsWith('PR #')) // Filtrar PRs
        .map(([name, runs]) => {
            const successRate = (runs / statistics.summary.total_runs * 100).toFixed(1);
            return {
                name: name,
                status: 'active',
                duration: formatDuration(statistics.summary.average_success_duration * 1000),
                success_rate: successRate + '%',
                last_run: 'Recent',
                total_runs: runs
            };
        })
        .sort((a, b) => b.total_runs - a.total_runs);
}

function renderCharts(statistics) {
    const chartContainer = document.createElement('div');
    chartContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6';
    chartContainer.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-lg font-semibold mb-4">Event Distribution</h3>
            <canvas id="eventDistributionChart"></canvas>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-lg font-semibold mb-4">Run Status Distribution</h3>
            <canvas id="statusDistributionChart"></canvas>
        </div>
    `;
    
    document.querySelector('#actions-performance').appendChild(chartContainer);

    // Gráfico de distribución de eventos
    new Chart(document.getElementById('eventDistributionChart'), {
        type: 'pie',
        data: {
            labels: Object.keys(statistics.event_distribution),
            datasets: [{
                data: Object.values(statistics.event_distribution),
                backgroundColor: [
                    '#3B82F6', '#10B981', '#6366F1', '#F59E0B', 
                    '#EF4444', '#8B5CF6', '#EC4899'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Gráfico de distribución de estados
    new Chart(document.getElementById('statusDistributionChart'), {
        type: 'doughnut',
        data: {
            labels: ['Successful', 'Failed', 'Cancelled'],
            datasets: [{
                data: [
                    statistics.summary.successful_runs,
                    statistics.summary.failed_runs,
                    statistics.summary.cancelled_runs
                ],
                backgroundColor: ['#10B981', '#EF4444', '#F59E0B']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// ... resto del código existente (generateHTML, getStatusClass, etc.) ...