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
            case 'credit-summary':
                await createCreditSummary(templateContainer, templateConfig);
                break;
            case 'DoughnutChart':
                await createDoughnutChart(templateContainer, templateConfig);
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
        summaryContainer.className = 'flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full mb-8';

        summaryContainer.innerHTML = `
            <div class="flex flex-col items-center mb-4 md:mb-0">
                <span class="text-base text-gray-500 mb-1">Costo</span>
                <span class="font-bold text-2xl" id="real-cost">€0</span>
            </div>
            <span class="hidden md:block text-gray-400 text-3xl font-light mx-2">−</span>
            <div class="flex flex-col items-center mb-4 md:mb-0">
                <span class="text-base text-gray-500 mb-1">Créditos usados</span>
                <span class="font-bold text-2xl" id="estimated-cost">€0</span>
            </div>
            <span class="hidden md:block text-gray-400 text-3xl font-light mx-2">=</span>
            <div class="flex flex-col items-center mb-4 md:mb-0">
                <span class="text-base text-gray-500 mb-1">Costo total</span>
                <span class="font-bold text-2xl" id="net-cost">€0</span>
            </div>
            <div class="flex flex-col items-center md:border-l-2 md:border-gray-200 md:pl-8 md:ml-8 w-full md:w-auto">
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

        // Definir campos para costos (usar valores por defecto si no están definidos en config)
        const realCostField = config.realCostField || 'final_cost';
        const estimatedCostField = config.estimatedCostField || 'total_cost';

        // Calcular totales usando los campos configurados
        const totalReal = processedData.reduce((sum, item) => sum + parseFloat(item[realCostField] || 0), 0);
        const totalEstimated = processedData.reduce((sum, item) => sum + parseFloat(item[estimatedCostField] || 0), 0);
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
                data: processedData.map(item => parseFloat(item[estimatedCostField] || 0)),
                backgroundColor: 'rgba(255, 209, 141, 0.8)',
                borderColor: 'rgba(234, 67, 53, 1)',
                borderWidth: 0,
                borderRadius: 4,
                order: 2
            });
        }
        if (config.costReal) {
            datasets.push({
                label: 'Coste Real',
                data: processedData.map(item => parseFloat(item[realCostField] || 0)),
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
    // Definir campos para costos (usar valores por defecto si no están definidos en config)
    const realCostField = config.realCostField || 'final_cost';
    const estimatedCostField = config.estimatedCostField || 'total_cost';
    
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
            let realCost = 0;
            let estimatedCost = 0;
            itemsForDay.forEach(item => {
                realCost += parseFloat(item[realCostField] || 0);
                estimatedCost += parseFloat(item[estimatedCostField] || 0);
            });

            daysArray.push({
                day: d,
                [realCostField]: realCost,
                [estimatedCostField]: estimatedCost
            });
        }
        return daysArray;
    }

    // Para otros tipos de agrupación (como service_description)
    const grouped = data.reduce((acc, item) => {
        const key = item[config.groupBy] || 'Sin categoría';
        if (!acc[key]) {
            acc[key] = {
                day: key, // Usamos 'day' como etiqueta para mostrar en el gráfico
                name: key,
                [realCostField]: 0,
                [estimatedCostField]: 0
            };
        }
        acc[key][realCostField] += parseFloat(item[realCostField] || 0);
        acc[key][estimatedCostField] += parseFloat(item[estimatedCostField] || 0);
        return acc;
    }, {});

    let result = Object.values(grouped);

    // Ordenar según la configuración
    if (config.orderBy) {
        result.sort((a, b) => {
            const valueA = parseFloat(a[config.orderBy] || 0);
            const valueB = parseFloat(b[config.orderBy] || 0);
            return config.orderDirection === 'desc' 
                ? valueB - valueA  // Mayor a menor
                : valueA - valueB;  // Menor a mayor
        });
    } else {
        // Si no hay configuración de ordenación, ordenar por el campo de costo real de mayor a menor por defecto
        result.sort((a, b) => {
            const valueA = parseFloat(a[realCostField] || 0);
            const valueB = parseFloat(b[realCostField] || 0);
            return valueB - valueA;  // Mayor a menor
        });
    }

    // Aplicar límite si está configurado
    if (config.limit && config.limit > 0) {
        result = result.slice(0, config.limit);
    }

    return result;
}

// Función para crear un resumen de créditos similar a la imagen proporcionada
async function createCreditSummary(container, config) {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-col';

    // Crear el contenedor principal con borde
    const summaryContainer = document.createElement('div');
    summaryContainer.className = 'border border-gray-200 rounded-lg p-4';

    // Título de la sección
    const titleElement = document.createElement('div');
    titleElement.className = 'text-lg font-medium mb-1';
    titleElement.textContent = config.title || 'Logros importantes basados en la inversión';
    summaryContainer.appendChild(titleElement);

    // Subtítulo con número de programas
    const subtitleElement = document.createElement('div');
    subtitleElement.className = 'text-sm text-gray-500 mb-4';
    subtitleElement.textContent = config.subtitle || 'De 1 programas';
    summaryContainer.appendChild(subtitleElement);

    // Contenedor para los créditos
    const creditsContainer = document.createElement('div');
    creditsContainer.className = 'flex justify-between items-center mb-4';

    try {
        // Cargar datos si es necesario
        let obtainedCredits = config.obtainedCredits || '0';
        let potentialCredits = config.potentialCredits || '0';
        
        if (config.dataSource) {
            const response = await fetch(config.dataSource);
            const data = await response.json();
            
            // Definir campos para créditos (usar valores por defecto si no están definidos en config)
            const obtainedField = config.obtainedField || 'obtained_credits';
            const potentialField = config.potentialField || 'potential_credits';
            
            // Calcular totales
            obtainedCredits = data.reduce((sum, item) => sum + parseFloat(item[obtainedField] || 0), 0);
            potentialCredits = data.reduce((sum, item) => sum + parseFloat(item[potentialField] || 0), 0);
        }

        // Formatear valores
        const formatValue = (value) => {
            if (Math.abs(value) >= 1e6) return `€${(value/1e6).toFixed(2)}M`;
            if (Math.abs(value) >= 1e3) return `€${(value/1e3).toFixed(1)}k`;
            return `€${value.toFixed(2)}`;
        };

        // Créditos obtenidos
        const obtainedElement = document.createElement('div');
        obtainedElement.className = 'flex flex-col items-center';
        
        const obtainedLabel = document.createElement('div');
        obtainedLabel.className = 'text-sm text-green-600 mb-1 flex items-center';
        obtainedLabel.innerHTML = '<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Créditos obtenidos';
        
        const obtainedValue = document.createElement('div');
        obtainedValue.className = 'text-2xl font-bold';
        obtainedValue.textContent = typeof obtainedCredits === 'number' ? formatValue(obtainedCredits) : obtainedCredits;
        
        obtainedElement.appendChild(obtainedLabel);
        obtainedElement.appendChild(obtainedValue);
        
        // Créditos potenciales
        const potentialElement = document.createElement('div');
        potentialElement.className = 'flex flex-col items-center';
        
        const potentialLabel = document.createElement('div');
        potentialLabel.className = 'text-sm text-gray-500 mb-1';
        potentialLabel.textContent = 'Créditos potenciales';
        
        const potentialValue = document.createElement('div');
        potentialValue.className = 'text-2xl font-bold';
        potentialValue.textContent = typeof potentialCredits === 'number' ? formatValue(potentialCredits) : potentialCredits;
        
        potentialElement.appendChild(potentialLabel);
        potentialElement.appendChild(potentialValue);
        
        // Añadir elementos al contenedor de créditos
        creditsContainer.appendChild(obtainedElement);
        
        // Línea divisoria vertical
        const divider = document.createElement('div');
        divider.className = 'h-12 w-px bg-gray-200 mx-4';
        creditsContainer.appendChild(divider);
        
        creditsContainer.appendChild(potentialElement);
        
        summaryContainer.appendChild(creditsContainer);
        
        // Botón "Ver detalles"
        if (config.detailsLink) {
            const detailsLink = document.createElement('a');
            detailsLink.href = config.detailsLink;
            detailsLink.className = 'flex items-center text-gray-600 hover:text-gray-800 text-sm';
            detailsLink.innerHTML = '<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> Ver detalles';
            summaryContainer.appendChild(detailsLink);
        }
        
    } catch (error) {
        console.error('Error al cargar datos de créditos:', error);
        creditsContainer.textContent = 'Error al cargar datos';
    }
    
    mainContainer.appendChild(summaryContainer);
    container.appendChild(mainContainer);
}

async function createDoughnutChart(container, config) {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-col gap-6';
    if (config.title) {
        const titleElement = document.createElement('h3');
        titleElement.className = 'text-lg font-semibold mb-2';
        titleElement.textContent = config.title;
        mainContainer.appendChild(titleElement);
    }
    const chartContainer = document.createElement('div');
    chartContainer.style.height = '300px';
    mainContainer.appendChild(chartContainer);
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    try {
        const response = await fetch(config.dataSource);
        const data = await response.json();
        let processedData = data;
        if (config.groupBy) {
            processedData = processDataByGroup(data, config);
        }
        const realCostField = config.realCostField || 'final_cost';
        const labels = processedData.map(item => item[config.groupBy] || item.day);
        const values = processedData.map(item => parseFloat(item[realCostField] || 0));
        const backgroundColors = [
            'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)',
            'rgba(199, 199, 199, 0.8)', 'rgba(83, 102, 255, 0.8)',
            'rgba(40, 159, 64, 0.8)', 'rgba(210, 199, 199, 0.8)'
        ];
        while (backgroundColors.length < labels.length) {
            backgroundColors.push(...backgroundColors);
        }
        new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels,
                datasets: [{
                    data: values,
                    backgroundColor: backgroundColors.slice(0, labels.length),
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const value = context.raw;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                let formattedValue;
                                if (Math.abs(value) >= 1e6) formattedValue = `€${(value / 1e6).toFixed(2)}M`;
                                else if (Math.abs(value) >= 1e3) formattedValue = `€${(value / 1e3).toFixed(1)}k`;
                                else formattedValue = `€${value.toFixed(2)}`;
                                return `${context.label}: ${formattedValue} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error al crear el gráfico:', error);
        chartContainer.textContent = 'Error al cargar el gráfico';
    }
    container.appendChild(mainContainer);
}
