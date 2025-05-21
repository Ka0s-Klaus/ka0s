// Función para crear un template según su tipo
async function createTemplate(templateConfig) {
    const templateContainer = document.createElement('div');
    templateContainer.className = 'bg-white rounded-lg shadow-lg p-6 mb-6';
    
    // Agregar título del template si existe
    if (templateConfig.title) {
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-xl font-semibold mb-4';
        titleElement.textContent = templateConfig.title;
        templateContainer.appendChild(titleElement);
    }

    try {
        switch (templateConfig.type) {
            case 'cost-chart':
                await createCostChart(templateContainer, templateConfig);
                break;
            case 'table':
                await createTable(templateContainer, templateConfig);
                break;
            case 'metric':
                await createMetric(templateContainer, templateConfig);
                break;
            default:
                console.error(`Tipo de template no soportado: ${templateConfig.type}`);
                return null;
        }
    } catch (error) {
        console.error(`Error al crear el template ${templateConfig.type}:`, error);
        return null;
    }

    return templateContainer;
}

// Función para crear un gráfico de costos
// Función para crear un gráfico de costos
async function createCostChart(container, config) {
    // Crear contenedor principal que incluirá el resumen y el gráfico
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-col gap-6';

    // Crear el contenedor del resumen
    const summaryContainer = document.createElement('div');
    summaryContainer.className = 'flex justify-between items-center';
    
    // Contenedor izquierdo para los costos
    const costSummary = document.createElement('div');
    costSummary.className = 'flex items-center gap-4';
    costSummary.innerHTML = `
        <div class="text-lg">
            <div class="flex items-center gap-2">
                <span class="font-medium">€815k</span>
                <span class="text-gray-400">−</span>
                <span class="font-medium">€149k</span>
                <span class="text-gray-400">=</span>
                <span class="font-medium">€667k</span>
            </div>
            <div class="text-sm text-gray-500 mt-1">
                <a href="#" class="hover:text-blue-600">Ver detalles</a>
            </div>
        </div>
    `;

    // Contenedor derecho para el costo previsto
    const predictedCost = document.createElement('div');
    predictedCost.className = 'text-right';
    predictedCost.innerHTML = `
        <div class="font-medium">€1.24M</div>
        <div class="text-sm text-red-500">↑ 2% versus abril</div>
    `;

    summaryContainer.appendChild(costSummary);
    summaryContainer.appendChild(predictedCost);
    mainContainer.appendChild(summaryContainer);

    // Crear contenedor para el gráfico
    const chartContainer = document.createElement('div');
    chartContainer.style.height = '300px';
    mainContainer.appendChild(chartContainer);

    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);

    container.appendChild(mainContainer);

    try {
        const response = await fetch(config.dataSource);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Filtrar datos para el año 2025 y agrupar por mes
        const year = 2025;
        let filteredData = data.filter(item => {
            const itemDate = new Date(item.month);
            return itemDate.getFullYear() === year;
        });

        // Agrupar por mes
        const groupedByMonth = filteredData.reduce((acc, item) => {
            const date = new Date(item.month);
            const monthKey = date.getMonth();
            
            if (!acc[monthKey]) {
                acc[monthKey] = {
                    cost: 0,
                    credits: 0,
                    networkCost: 0,
                    flatrateCost: 0,
                    k8sCost: 0
                };
            }
            
            acc[monthKey].cost += parseFloat(item.cost || 0);
            acc[monthKey].credits += parseFloat(item.credits || 0);
            acc[monthKey].networkCost += parseFloat(item.inc_ntw_cost_sharing || 0);
            acc[monthKey].flatrateCost += parseFloat(item.inc_flatrate_cost_sharing || 0);
            acc[monthKey].k8sCost += parseFloat(item.inc_k8s_cost_sharing || 0);
            
            return acc;
        }, {});

        // Convertir el objeto agrupado en array para el gráfico
        const monthlyData = Object.entries(groupedByMonth).map(([month, data]) => ({
            month: new Date(year, parseInt(month)).toLocaleString('es-ES', { month: 'short' }),
            cost: data.cost + data.networkCost + data.flatrateCost + data.k8sCost,
            credits: Math.abs(data.credits)
        }));

        // Calcular totales anuales
        const totalCost = monthlyData.reduce((sum, item) => sum + item.cost, 0);
        const totalCredits = monthlyData.reduce((sum, item) => sum + item.credits, 0);
        const netCost = totalCost - totalCredits;

        // Actualizar el título
        config.title = `Tu costo total (${year})`;

        // Función para formatear moneda
        const formatCurrency = (value) => {
            const formatter = new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: config.currency || 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });

            if (value >= 1000000) {
                return formatter.format(value/1000000) + 'M';
            } else if (value >= 1000) {
                return formatter.format(value/1000) + 'k';
            }
            return formatter.format(value);
        };

        // Actualizar el contenido del resumen con los datos calculados
        costSummary.innerHTML = `
            <div class="text-lg">
                <div class="flex items-center gap-2">
                    <span class="font-medium">${formatCurrency(totalCost)}</span>
                    <span class="text-gray-400">−</span>
                    <span class="font-medium">${formatCurrency(totalCredits)}</span>
                    <span class="text-gray-400">=</span>
                    <span class="font-medium">${formatCurrency(netCost)}</span>
                </div>
                <div class="text-sm text-gray-500 mt-1">
                    <a href="#" class="hover:text-blue-600">Ver detalles</a>
                </div>
            </div>
        `;

        // Calcular el costo previsto y la comparación con el mes anterior
        const lastDayData = data[data.length - 1];
        const predictedCostValue = parseFloat(lastDayData.predicted_cost || 0);
        const previousMonthCost = parseFloat(lastDayData.previous_month_cost || 0);
        const percentageChange = ((predictedCostValue - previousMonthCost) / previousMonthCost) * 100;

        predictedCost.innerHTML = `
            <div class="font-medium">${formatCurrency(predictedCostValue)}</div>
            <div class="text-sm ${percentageChange >= 0 ? 'text-red-500' : 'text-green-500'}">
                ${percentageChange >= 0 ? '↑' : '↓'} ${Math.abs(percentageChange).toFixed(1)}% versus abril
            </div>
        `;

        // Configuración del gráfico con datos filtrados
        new Chart(canvas, {
            type: 'bar',
            data: {
                labels: monthlyData.map(item => item.month),
                datasets: [{
                    label: 'Costo',
                    data: monthlyData.map(item => item.cost),
                    backgroundColor: 'rgba(66, 133, 244, 0.8)',
                    borderColor: 'rgba(66, 133, 244, 1)',
                    borderWidth: 0,
                    borderRadius: 4,
                    stack: 'Stack 0'
                }, {
                    label: 'Créditos',
                    data: monthlyData.map(item => item.credits),
                    backgroundColor: 'rgba(234, 237, 242, 0.8)',
                    borderColor: 'rgba(234, 237, 242, 1)',
                    borderWidth: 0,
                    borderRadius: 4,
                    stack: 'Stack 0'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: value => `€${value/1000}k`,
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'white',
                        titleColor: 'black',
                        bodyColor: 'black',
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: context => `€${context.raw/1000}k`
                        }
                    }
                }
            }
        });

        // Agregar enlace "Ver detalles en Informes" al final
        const detailsLink = document.createElement('a');
        detailsLink.href = '#';
        detailsLink.className = 'text-blue-600 hover:text-blue-800 flex items-center gap-2 mt-4';
        detailsLink.innerHTML = `
            <span>→</span>
            <span>Ver detalles en Informes</span>
        `;
        mainContainer.appendChild(detailsLink);

    } catch (error) {
        console.error('Error al crear el gráfico:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center p-4';
        errorMessage.textContent = 'Error al cargar el gráfico';
        container.appendChild(errorMessage);
    }
}

// Función para crear una tabla
async function createTable(container, config) {
    try {
        const response = await fetch(config.dataSource);
        const data = await response.json();
        
        const table = document.createElement('table');
        table.className = 'min-w-full divide-y divide-gray-200';
        // Implementar la lógica de la tabla según los datos
        container.appendChild(table);
    } catch (error) {
        console.error('Error al crear la tabla:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center p-4';
        errorMessage.textContent = 'Error al cargar la tabla';
        container.appendChild(errorMessage);
    }
}

// Función para crear una métrica
async function createMetric(container, config) {
    try {
        const response = await fetch(config.dataSource);
        const data = await response.json();
        
        const metricDiv = document.createElement('div');
        metricDiv.className = 'text-center';
        // Implementar la lógica de la métrica según los datos
        container.appendChild(metricDiv);
    } catch (error) {
        console.error('Error al crear la métrica:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center p-4';
        errorMessage.textContent = 'Error al cargar la métrica';
        container.appendChild(errorMessage);
    }
}


async function createCostChart(container, config) {
    const chartContainer = document.createElement('div');
    chartContainer.style.height = '300px';
    container.appendChild(chartContainer);

    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);

    try {
        const response = await fetch(config.dataSource);
        const data = await response.json();

        let processedData = data;
        if (config.groupBy) {
            processedData = processDataByGroup(data, config);
        }

        const datasets = [];
        
        // Primero añadir dataset para costo estimado (para que aparezca detrás)
        if (config.costEstimated) {
            datasets.push({
                label: 'Coste Estimado',
                data: processedData.map(item => parseFloat(item.cost_at_list || 0)),
                backgroundColor: 'rgba(234, 67, 53, 0.8)',
                borderColor: 'rgba(234, 67, 53, 1)',
                borderWidth: 0,
                borderRadius: 4,
                order: 2  // Mayor número = más atrás
            });
        }

        // Luego añadir dataset para costo real (para que aparezca delante)
        if (config.costReal) {
            datasets.push({
                label: 'Coste Real',
                data: processedData.map(item => parseFloat(item.cost || 0)),
                backgroundColor: 'rgba(66, 133, 244, 0.8)',
                borderColor: 'rgba(66, 133, 244, 1)',
                borderWidth: 0,
                borderRadius: 4,
                order: 1  // Menor número = más adelante
            });
        }

        // Si no se especifica ningún tipo de costo, mostrar el costo total
        if (!config.costReal && !config.costEstimated) {
            datasets.push({
                label: 'Costo Total',
                data: processedData.map(item => parseFloat(item.cost || 0)),
                backgroundColor: 'rgba(66, 133, 244, 0.8)',
                borderColor: 'rgba(66, 133, 244, 1)',
                borderWidth: 0,
                borderRadius: 4
            });
        }

        new Chart(canvas, {
            type: config.tipo === 'StackedBarChart' ? 'bar' : 'bar',
            data: {
                labels: processedData.map(item => {
                    if (config.groupBy === 'month') {
                        const date = new Date(item[config.groupBy]);
                        return date.toLocaleString('es-ES', { month: 'short' });
                    }
                    return item[config.groupBy] || '';
                }),
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: value => `€${(value/1000).toFixed(1)}k`
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: 'white',
                        titleColor: 'black',
                        bodyColor: 'black',
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        padding: 10,
                        callbacks: {
                            label: context => `€${(context.raw/1000).toFixed(1)}k`
                        }
                    }
                },
                barPercentage: 0.8,
                categoryPercentage: 0.9,
                grouped: true // Esta es la clave para mostrar las barras una al lado de la otra
            }
        });

    } catch (error) {
        console.error('Error al crear el gráfico:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center p-4';
        errorMessage.textContent = 'Error al cargar el gráfico';
        container.appendChild(errorMessage);
    }
}

// Función auxiliar para procesar datos según el groupBy
function processDataByGroup(data, config) {
    const grouped = data.reduce((acc, item) => {
        const key = item[config.groupBy];
        if (!acc[key]) {
            acc[key] = {
                [config.groupBy]: key,
                name: item.name,
                cost: 0,
                cost_at_list: 0
            };
        }
        acc[key].cost += parseFloat(item.cost || 0);
        acc[key].cost_at_list += parseFloat(item.cost_at_list || 0);
        return acc;
    }, {});

    let result = Object.values(grouped);

    if (config.orderBy) {
        result.sort((a, b) => {
            return config.orderDirection === 'desc' 
                ? b[config.orderBy] - a[config.orderBy]
                : a[config.orderBy] - b[config.orderBy];
        });
    }

    if (config.limit) {
        result = result.slice(0, config.limit);
    }

    return result;
}
