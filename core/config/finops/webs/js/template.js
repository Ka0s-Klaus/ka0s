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
            // Agregar más casos según sea necesario
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

async function createCostChart(container, config) {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-col gap-6';

    // Verificar si la configuración requiere encabezado
    if (config.head) {
        // Crear el contenedor del resumen con el título y período
        const headerContainer = document.createElement('div');
        headerContainer.className = 'flex flex-col items-center w-full';

        // Título dinámico desde la configuración
        const titleContainer = document.createElement('div');
        titleContainer.className = 'w-full flex justify-start';

        headerContainer.appendChild(titleContainer);

        // Contenedor resumen centrado y grande
        summaryContainer = document.createElement('div');
        summaryContainer.className = 'flex flex-row items-center justify-center gap-16 w-full mb-8';

        summaryContainer.innerHTML = `
            <div class="flex flex-col items-center">
                <span class="text-base text-gray-500 mb-1">Costo</span>
                <span class="font-bold text-2xl" id="real-cost">€0</span>
            </div>
            <span class="text-gray-400 text-3xl font-light mx-2">−</span>
            <div class="flex flex-col items-center">
                <span class="text-base text-gray-500 mb-1">Créditos usados</span>
                <span class="font-bold text-2xl" id="estimated-cost">€0</span>
            </div>
            <span class="text-gray-400 text-3xl font-light mx-2">=</span>
            <div class="flex flex-col items-center">
                <span class="text-base text-gray-500 mb-1">Costo total</span>
                <span class="font-bold text-2xl" id="net-cost">€0</span>
            </div>
            <div class="flex flex-col items-center border-l-2 border-gray-200 pl-8 ml-8">
                <span class="text-base text-gray-500 mb-1">Costo total previsto</span>
                <span class="font-bold text-2xl" id="total-cost-summary">€0</span>
                <span class="text-base text-green-500" id="cost-comparison-summary">Cargando...</span>
            </div>
        `;

        // Contenedor para agrupar todo centrado
        const summaryWrapper = document.createElement('div');
        summaryWrapper.className = 'flex flex-col items-center w-full';
        summaryWrapper.appendChild(summaryContainer);

        // Añadir resumen al header centrado
        headerContainer.appendChild(summaryWrapper);

        mainContainer.appendChild(headerContainer);
    }

    // Crear contenedor para el gráfico
    const chartContainer = document.createElement('div');
    chartContainer.style.height = '300px';
    mainContainer.appendChild(chartContainer);

    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);

    try {
        // Cargar datos y procesar
        const response = await fetch(config.dataSource);
        const data = await response.json();
        
        // Procesamiento de datos y creación del gráfico
        const currentYear = new Date().getFullYear();
        let filteredData = data.filter(item => {
            const itemDate = new Date(item.month);
            return !config.currentYear || itemDate.getFullYear() === currentYear;
        });

        let processedData = filteredData;
        if (config.groupBy) {
            processedData = processDataByGroup(filteredData, config);
        }

        // Calcular totales usando los campos correctos del JSON
        const totalReal = processedData.reduce((sum, item) => sum + parseFloat(item.final_cost || 0), 0);
        const totalEstimated = processedData.reduce((sum, item) => sum + parseFloat(item.total_cost || 0), 0);
        const netCost = totalReal - totalEstimated;

        // Formatear valores
        const formatValue = (value) => {
            if (Math.abs(value) >= 1e6) return `€${(value/1e6).toFixed(2)}M`;
            if (Math.abs(value) >= 1e3) return `€${(value/1e3).toFixed(1)}k`;
            return `€${value.toFixed(2)}`;
        };

        // Calcular comparación
        let comparisonElementText = "Sin estimación";
        let comparisonElementClass = "text-base text-gray-500";
        if (totalEstimated > 0) {
            const diff = totalReal - totalEstimated;
            const percent = ((diff / totalEstimated) * 100).toFixed(1);
            if (diff >= 0) {
                comparisonElementText = `↑ ${percent}% sobre estimado`;
                comparisonElementClass = "text-base text-red-500";
            } else {
                comparisonElementText = `↓ ${Math.abs(percent)}% bajo estimado`;
                comparisonElementClass = "text-base text-green-500";
            }
        }

        // Actualizar solo el summaryContainer
        if (summaryContainer) {
            summaryContainer.querySelector('#real-cost').textContent = formatValue(totalReal);
            summaryContainer.querySelector('#estimated-cost').textContent = formatValue(totalEstimated);
            summaryContainer.querySelector('#net-cost').textContent = formatValue(netCost);
            summaryContainer.querySelector('#total-cost-summary').textContent = formatValue(totalReal);
            summaryContainer.querySelector('#cost-comparison-summary').textContent = comparisonElementText;
            summaryContainer.querySelector('#cost-comparison-summary').className = comparisonElementClass;
        }

        const datasets = [];
        if (config.costEstimated) {
            datasets.push({
                label: 'Coste Estimado',
                data: processedData.map(item => parseFloat(item.net_cost || 0)),
                backgroundColor: 'rgba(234, 67, 53, 0.8)',
                borderColor: 'rgba(234, 67, 53, 1)',
                borderWidth: 0,
                borderRadius: 4,
                order: 2
            });
        }
        if (config.costReal) {
            datasets.push({
                label: 'Coste Real',
                data: processedData.map(item => parseFloat(item.final_cost || 0)),
                backgroundColor: 'rgba(66, 133, 244, 0.8)',
                borderColor: 'rgba(66, 133, 244, 1)',
                borderWidth: 0,
                borderRadius: 4,
                order: 1
            });
        }

        new Chart(canvas, {
            type: config.tipo === 'StackedBarChart' ? 'bar' : 'bar',
            data: {
                labels: processedData.map(item => item.day),
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
                            callback: value => formatValue(value)
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
        // Manejo de errores
    }

    container.appendChild(mainContainer);
}

function processDataByGroup(data, config) {
    if (config.groupBy === 'day') {
        // Agrupar por día del mes usando usage_date
        const now = new Date();
        const currentDay = now.getDate();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();

        // Crear un array con los días del mes hasta hoy
        const daysArray = [];
        for (let d = 1; d <= currentDay; d++) {
            // Filtrar los datos para el día d del mes actual
            const dayStr = d.toString().padStart(2, '0');
            const monthStr = currentMonth.toString().padStart(2, '0');
            const dateStr = `${currentYear}-${monthStr}-${dayStr}`;
            const itemsForDay = data.filter(item => {
                // Solo considerar registros del mes y año actual
                return item.usage_date && item.usage_date.startsWith(`${currentYear}-${monthStr}-`) && item.usage_date.endsWith(`-${dayStr}`);
            });

            // Sumar los costes reales y estimados de ese día
            let final_cost = 0;
            let net_cost = 0;
            itemsForDay.forEach(item => {
                final_cost += parseFloat(item.final_cost || 0);
                net_cost += parseFloat(item.net_cost || 0);
            });

            daysArray.push({
                day: d,
                final_cost: final_cost,
                net_cost: net_cost
            });
        }
        return daysArray;
    }

    const grouped = data.reduce((acc, item) => {
        const key = item[config.groupBy];
        if (!acc[key]) {
            acc[key] = {
                [config.groupBy]: key,
                name: item.name,
                cost: 0,
                cost_at_list: 0,
                final_cost: 0
            };
        }
        acc[key].cost += parseFloat(item.cost || 0);
        acc[key].cost_at_list += parseFloat(item.cost_at_list || 0);
        acc[key].final_cost += parseFloat(item.final_cost || item.cost || 0);
        return acc;
    }, {});

    let result = Object.values(grouped);

    // Si agrupamos por día, rellenar los días faltantes del mes con 0
    if (config.groupBy === 'day') {
        // Determinar el día actual
        const now = new Date();
        const currentDay = now.getDate();

        // Crear un array con los días desde 1 hasta el día actual
        const daysArray = [];
        for (let d = 1; d <= currentDay; d++) {
            const existing = result.find(item => Number(item.day) === d);
            if (existing) {
                daysArray.push(existing);
            } else {
                daysArray.push({
                    day: d,
                    name: "",
                    cost: 0,
                    cost_at_list: 0,
                    final_cost: 0
                });
            }
        }
        result = daysArray;
    } else if (config.orderBy) {
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
