
// Initialize the chart utilities namespace
window.chartUtils = {};

// Initialize charts
window.chartUtils.initializeCharts = async function() {
    try {
        // Load workflow runs data with fallback path
        const runsResponse = await fetch('dashboard/data/kaos-workflows-runs.json')
            .then(response => {
                if (!response.ok) {
                    console.log('Primary workflow runs file not found, trying fallback location...');
                    return fetch('../outputs/w/kaos-workflows-runs.json');
                }
                return response;
            });

        if (!runsResponse.ok) {
            throw new Error(`Failed to load workflow runs: ${runsResponse.status}`);
        }
        const workflowRuns = await runsResponse.json();

        // Calculate monthly success ratios
        const monthlyStats = {};
        workflowRuns.forEach(run => {
            const date = new Date(run.created_at);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            
            if (!monthlyStats[monthKey]) {
                monthlyStats[monthKey] = {
                    total: 0,
                    successful: 0
                };
            }
            
            if (run.status === 'completed') {
                monthlyStats[monthKey].total++;
                if (run.conclusion === 'success') {
                    monthlyStats[monthKey].successful++;
                }
            }
        });

        // Convert to arrays for chart
        const months = Object.keys(monthlyStats).sort();
        const successRates = months.map(month => 
            (monthlyStats[month].successful / monthlyStats[month].total * 100).toFixed(2)
        );

        // Create Monthly Success Rate Chart
        const monthlyChartCtx = document.getElementById('monthlySuccessChart')?.getContext('2d');
        if (monthlyChartCtx) {
            new Chart(monthlyChartCtx, {
                type: 'line',
                data: {
                    labels: months,
                    datasets: [{
                        label: 'Monthly Success Rate (%)',
                        data: successRates,
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgb(34, 197, 94)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Monthly Workflow Success Rate',
                            padding: {
                                top: 10,
                                bottom: 10
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Success Rate (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        }
                    }
                }
            });
        }

        // Continue with existing charts...
        // Load workflow statistics data with fallback path
        const response = await fetch('dashboard/data/workflow-statistics.json')
            .then(response => {
                if (!response.ok) {
                    return fetch('../outputs/w/workflow-statistics.json');
                }
                return response;
            });

        if (!response.ok) {
            throw new Error(`Failed to load workflow statistics: ${response.status}`);
        }
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