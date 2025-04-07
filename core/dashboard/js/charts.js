
// Initialize the chart utilities namespace
window.chartUtils = {};

// Initialize charts
window.chartUtils.initializeCharts = async function() {
    try {
        // Load workflow statistics data
        const response = await fetch('../outputs/w/workflow-statistics.json');
        const workflowData = await response.json();

        // Doughnut Chart - Workflow Statistics
        const doughnutCtx = document.getElementById('doughnutChart')?.getContext('2d');
        if (doughnutCtx && workflowData) {
            new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Successful', 'Failed', 'Cancelled'],
                    datasets: [{
                        data: [
                            workflowData.summary.successful_runs,
                            workflowData.summary.failed_runs,
                            workflowData.summary.cancelled_runs
                        ],
                        backgroundColor: [
                            'rgba(34, 197, 94, 0.8)',  // green
                            'rgba(239, 68, 68, 0.8)',   // red
                            'rgba(156, 163, 175, 0.8)'  // gray
                        ],
                        borderColor: [
                            'rgb(34, 197, 94)',
                            'rgb(239, 68, 68)',
                            'rgb(156, 163, 175)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 10
                                },
                                padding: 10
                            }
                        },
                        title: {
                            display: true,
                            text: 'Workflow Runs Distribution',
                            padding: {
                                top: 10,
                                bottom: 10
                            }
                        }
                    }
                }
            });
        }

        // Update statistics section if it exists
        const statsSection = document.querySelector('.statistics');
        if (statsSection && workflowData) {
            const totalRuns = workflowData.summary.total_runs;
            const successRate = workflowData.summary.success_rate;
            
            if (statsSection.querySelector('h3')) {
                statsSection.querySelector('h3').textContent = 'Workflow Metrics';
            }
            if (statsSection.querySelector('.text-yellow-500')) {
                statsSection.querySelector('.text-yellow-500').textContent = `${successRate}%`;
            }
            
            const metrics = [
                { value: totalRuns.toLocaleString(), label: 'Total Workflows' },
                { value: `${Math.round(workflowData.summary.average_duration / 60)}m`, label: 'Avg Duration' }
            ];
            
            const h4Elements = statsSection.querySelectorAll('h4');
            const pElements = statsSection.querySelectorAll('p');
            
            if (h4Elements.length >= 2 && pElements.length >= 2) {
                h4Elements[0].textContent = metrics[0].value;
                pElements[0].textContent = metrics[0].label;
                h4Elements[1].textContent = metrics[1].value;
                pElements[1].textContent = metrics[1].label;
            }
        }

    } catch (error) {
        console.error('Error initializing charts:', error);
    }
};