document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos de section3leadtime.json
    async function loadConfig() {
        try {
            const response = await fetch('../../config/webs/section6handlersuccess.json');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const config = await response.json();

            // Actualizar título y descripción
            if (config.title) {
                const h1 = document.querySelector('h1');
                if (h1) h1.textContent = config.title;
            }
            if (config.description) {
                const desc = document.querySelector('p.text-gray-600');
                if (desc) desc.textContent = config.description;
            }

            // Actualizar métricas
            const metrics = [
                { key: 'metric1', color: 'green' },
                { key: 'metric2', color: 'blue' },
                { key: 'metric3', color: 'purple' },
                { key: 'metric3', color: 'orange' }
            ];
            metrics.forEach((metric, idx) => {
                const container = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 > div')[idx];
                if (container && config[metric.key]) {
                    const h2 = container.querySelector('h2');
                    if (h2) h2.textContent = config[metric.key];
                }
            });

            // Configurar la lista dinámica
            if (config.templates && Array.isArray(config.templates)) {
                const listTemplate = config.templates.find(t => t.type === 'list');
                if (listTemplate) {
                    // Título de la tabla/lista
                    const tableTitle = document.querySelector('.bg-white.shadow-sm.rounded-lg.p-6 h2, .bg-white.shadow-sm.rounded-lg.p-6 h3, .bg-white.shadow-sm.rounded-lg.p-6 .text-xl');
                    const h2Table = document.querySelector('.bg-white.shadow-sm.rounded-lg.p-6 h2.text-xl, .bg-white.shadow-sm.rounded-lg.p-6 h3.text-xl, .bg-white.shadow-sm.rounded-lg.p-6 h2, .bg-white.shadow-sm.rounded-lg.p-6 h3');
                    const h2Fallback = document.querySelector('.text-xl.font-semibold.text-gray-800');
                    if (tableTitle) tableTitle.textContent = listTemplate.title;
                    else if (h2Table) h2Table.textContent = listTemplate.title;
                    else if (h2Fallback) h2Fallback.textContent = listTemplate.title;

                    // Fuente de datos
                    const dataList = document.getElementById('data-list');
                    if (dataList && listTemplate.dataSource) {
                        dataList.setAttribute('data-source', listTemplate.dataSource);
                    }
                }
            }
        } catch (error) {
            console.error('Error cargando configuración:', error);
            const dataList = document.getElementById('data-list');
            if (dataList) {
                dataList.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        Error cargando configuración: ${error.message}
                    </div>
                `;
            }
        }
    }

    loadConfig();
});