document.addEventListener('DOMContentLoaded', async function() {
    async function loadBackLogsData() {
        try {
            console.log('Fetching backLogs data...');
            
            // Mostrar la URL actual para depuración
            const currentLocation = window.location.href;
            console.log('Current location:', currentLocation);
            
            // Intentar con una ruta absoluta
            const jsonPath = './dashboard/sections/backLogs.json';
            console.log('Trying to fetch from:', jsonPath);
            
            const response = await fetch(jsonPath, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });
            
            if (!response.ok) {
                throw new Error(`Failed to load backLogs data: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('BackLogs data loaded successfully:', data);
            return data;
        } catch (error) {
            console.error('Error loading backLogs data:', error);
            
            // Intentar con una ruta alternativa como último recurso
            try {
                console.log('Trying alternative path...');
                const altResponse = await fetch('../dashboard/sections/backLogs.json');
                if (altResponse.ok) {
                    const data = await altResponse.json();
                    console.log('Data loaded from alternative path:', data);
                    return data;
                }
            } catch (e) {
                console.error('Alternative path also failed:', e);
            }
            
            // Usar datos de respaldo en caso de error
            console.log('Using fallback data');
            return {
                title: "Ka0s BackLogs (Fallback)",
                description: "No se pudieron cargar los datos",
                target: {
                    target1: "TO DO",
                    target2: "DOING",
                    target3: "DONE"
                }
            };
        }
    }

    // Get the backLogs container
    const backLogsContainer = document.getElementById('backLogs');
    if (!backLogsContainer) {
        console.error('BackLogs container not found');
        return;
    }
    
    console.log('BackLogs container found:', backLogsContainer);

    // Load the data
    const data = await loadBackLogsData();
    if (!data) {
        console.error('No data available to render');
        return;
    }

    console.log('Rendering data to HTML:', data);

    // IMPORTANTE: Solo establecer el HTML una vez
    backLogsContainer.innerHTML = `
    <div>
        <h2 class="text-2xl font-bold mb-2" data-placeholder="TITLE">${data.title || 'BackLogs'}</h2>
        <p class="text-gray-600 mb-4" data-placeholder="DESCRIPTION">${data.description || ''}</p>
    </div>

    <div class="grid grid-cols-3 text-center gap-7 h-full w-full">
        <div class="bg-white rounded-2xl py-7 shadow-md flex items-center justify-center shadow-xl" data-placeholder="TARGET1">${data.target?.target1 || 'TO DO'}</div>
        <div class="bg-white rounded-2xl py-7 shadow-md flex items-center justify-center col-start-2 shadow-xl" data-placeholder="TARGET2">${data.target?.target2 || 'DOING'}</div>
        <div class="bg-white rounded-2xl py-7 shadow-md flex items-center justify-center col-start-3 shadow-xl" data-placeholder="TARGET3">"target3": "${data.target?.target3 || 'DONE'}"</div>
        <div class="bg-white rounded-2xl py-[60%] shadow-md flex items-center justify-center row-start-2 col-start-1 shadow-xl">2</div>
        <div class="bg-white rounded-2xl py-[60%] shadow-md flex items-center justify-center row-start-2 col-start-2 shadow-xl">4</div>
        <div class="bg-white rounded-2xl py-[60%] shadow-md flex items-center justify-center row-start-2 col-start-3 shadow-xl">6</div>
    </div>
    `;
    
    console.log('BackLogs HTML updated with data');
    
    // Verificar que el HTML se haya actualizado correctamente
    setTimeout(() => {
        console.log('Final HTML content:', backLogsContainer.innerHTML);
    }, 100);
});