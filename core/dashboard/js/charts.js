// charts.js - Handles chart initialization and rendering

// Initialize the chart utilities namespace
window.chartUtils = {};

// Initialize charts
window.chartUtils.initializeCharts = async function() {
    // Load chart data
    const indexData = await window.dashboardUtils.loadJsonData('dashboard/sections/index.json');
    if (!indexData) return;

    // Line Chart - Revenue
    const lineCtx = document.getElementById('lineChart')?.getContext('2d');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: indexData.charts.revenue.labels,
                datasets: [{
                    label: indexData.charts.revenue.title,
                    data: indexData.charts.revenue.data,
                    borderColor: indexData.charts.revenue.color,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Bar Chart - Monthly Sales
    const barCtx = document.getElementById('barChart')?.getContext('2d');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: indexData.charts.monthlySales.labels,
                datasets: [{
                    label: indexData.charts.monthlySales.title,
                    data: indexData.charts.monthlySales.data,
                    backgroundColor: indexData.charts.monthlySales.color
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Doughnut Chart - Progress
    const doughnutCtx = document.getElementById('doughnutChart')?.getContext('2d');
    if (doughnutCtx) {
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: indexData.charts.progress.data,
                    backgroundColor: indexData.charts.progress.colors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Update statistics
    const statsSection = document.querySelector('.statistics');
    if (statsSection && indexData.statistics) {
        statsSection.querySelector('h3').textContent = indexData.statistics.title;
        statsSection.querySelector('.text-yellow-500').textContent = indexData.statistics.highlight;
        const metrics = indexData.statistics.metrics;
        statsSection.querySelector('h4:first-of-type').textContent = metrics[0].value;
        statsSection.querySelector('p:first-of-type').textContent = metrics[0].label;
        statsSection.querySelector('h4:last-of-type').textContent = metrics[1].value;
        statsSection.querySelector('p:last-of-type').textContent = metrics[1].label;
    }
    
    // Initialize the calendar
    if (window.initializeCalendar) {
        window.initializeCalendar();
        console.log('Calendar initialization called');
    }
};