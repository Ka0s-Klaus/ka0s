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

    // Solo mostrar el encabezado si config.head es true
    let costContainer, summaryContainer;
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
        const response = await fetch(config.dataSource);
        const data = await response.json();
        
        console.log("Datos originales cargados:", data);
        
        // Generar datos diarios si se solicita agrupar por día
        let processedData = data;
        if (config.groupBy === 'day') {
            // Crear datos diarios a partir de datos mensuales
            processedData = generateDailyDataFromMonthly(data);
            console.log("Datos diarios generados:", processedData);
        }
        
        // Aplicar filtros según la configuración
        let filteredData = processedData;
        
        // Filtrar por mes actual si se solicita
        if (config.currentMonth) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; 
            console.log("Filtrando por mes actual:", currentMonth, "y año:", currentYear);
            
            filteredData = processedData.filter(item => {
                // Obtener el mes del item según el formato YYYY-MM
                if (item.month) {
                    const [year, month] = item.month.split('-').map(Number);
                    return year === currentYear && month === currentMonth;
                }
                
                // Si estamos trabajando con datos diarios generados
                if (item.day) {
                    const itemDate = new Date(item.day);
                    return itemDate.getFullYear() === currentYear && 
                           itemDate.getMonth() + 1 === currentMonth;
                }
                
                return true; // Si no hay información de fecha, incluir el item
            });
            
            console.log("Datos filtrados por mes actual:", filteredData);
            
            // Si no hay datos después del filtrado, usar todos los datos
            if (filteredData.length === 0) {
                console.log("No hay datos para el mes actual, mostrando todos los datos");
                filteredData = processedData;
            }
        }
        
        if (config.groupBy) {
            filteredData = processDataByGroup(filteredData, config);
            console.log("Datos agrupados:", filteredData);
        }

        // Calcular totales
        const totalReal = filteredData.reduce((sum, item) => sum + parseFloat(item.cost || item.final_cost || 0), 0);
        const totalEstimated = filteredData.reduce((sum, item) => sum + parseFloat(item.cost_at_list || item.total_credits || 0), 0);
        
        // Determinar si debemos sumar o restar según el signo de totalEstimated
        const netCost = totalEstimated < 0 ? totalReal + totalEstimated : totalReal - totalEstimated;

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
                data: processedData.map(item => parseFloat(item.total_cost || 0)),
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
                data: processedData.map(item => parseFloat(item.cost || 0)),
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
                labels: processedData.map(item => {
                    if (config.groupBy === 'month') {
                        const date = new Date(item[config.groupBy]);
                        return date.toLocaleString('es-ES', { month: 'short' });
                    } else if (config.groupBy === 'day') {
                        const date = new Date(item[config.groupBy]);
                        return date.toLocaleString('es-ES', { day: 'numeric' });
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
    }

    container.appendChild(mainContainer);
}

// Función para generar datos diarios a partir de datos mensuales
function generateDailyDataFromMonthly(monthlyData) {
    const dailyData = [];
    
    monthlyData.forEach(item => {
        if (!item.month) return;
        
        // Obtener el año y mes del dato mensual
        const [year, month] = item.month.split('-').map(num => parseInt(num));
        
        // Determinar el número de días en el mes
        const daysInMonth = new Date(year, month, 0).getDate();
        
        // Distribuir el costo mensual entre los días del mes
        const dailyCost = parseFloat(item.final_cost) / daysInMonth;
        const dailyCredits = parseFloat(item.total_credits) / daysInMonth;
        const dailyTotalCost = parseFloat(item.total_cost) / daysInMonth;
        
        // Crear un registro para cada día del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayStr = day.toString().padStart(2, '0');
            dailyData.push({
                currency: item.currency,
                final_cost: dailyCost.toFixed(10),
                day: `${year}-${month.toString().padStart(2, '0')}-${dayStr}`,
                month: item.month,
                service_description: item.service_description,
                total_cost: dailyTotalCost.toFixed(10),
                total_credits: dailyCredits.toFixed(10),
                cost: dailyCost.toFixed(10),
                cost_at_list: dailyCredits.toFixed(10)
            });
        }
    });
    
    return dailyData;
}

function processDataByGroup(data, config) {
    // Asegurarse de que el campo groupBy existe en los datos
    const groupByField = config.groupBy;
    
    const grouped = data.reduce((acc, item) => {
        const key = item[groupByField];
        if (!key) return acc; // Ignorar items sin el campo de agrupación
        
        if (!acc[key]) {
            acc[key] = {
                [groupByField]: key,
                name: item.name || '',
                cost: 0,
                cost_at_list: 0
            };
        }
        
        // Usar final_cost como cost si no existe el campo cost
        const itemCost = parseFloat(item.cost || item.final_cost || 0);
        // Usar total_credits como cost_at_list si no existe el campo cost_at_list
        const itemCostAtList = parseFloat(item.cost_at_list || item.total_credits || 0);
        
        acc[key].cost += itemCost;
        acc[key].cost_at_list += itemCostAtList;
        return acc;
    }, {});

    let result = Object.values(grouped);

    // Ordenar por fecha si es un campo de fecha
    if (groupByField === 'month') {
        result.sort((a, b) => new Date(a.month) - new Date(b.month));
    } else if (groupByField === 'day') {
        result.sort((a, b) => new Date(a.day) - new Date(b.day));
    } else if (config.orderBy) {
        // Ordenar por el campo especificado en la configuración
        result.sort((a, b) => {
            return config.orderDirection === 'desc' 
                ? b[config.orderBy] - a[config.orderBy]
                : a[config.orderBy] - b[config.orderBy];
        });
    }

    // Limitar resultados si se especifica
    if (config.limit && config.limit > 0) {
        result = result.slice(0, config.limit);
    }

    return result;
}
