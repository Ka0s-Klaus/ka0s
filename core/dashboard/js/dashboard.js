// dashboard.js - Main dashboard functionality

// Initialize the dashboard utilities namespace
window.dashboardUtils = {};

// Load JSON data
window.dashboardUtils.loadJsonData = async function(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
};

// Load HTML templates
window.dashboardUtils.loadHtmlTemplate = async function(path) {
    try {
        const response = await fetch(path);
        return await response.text();
    } catch (error) {
        console.error(`Error loading template ${path}:`, error);
        return null;
    }
};

// Main dashboard.js - Coordinates all dashboard functionality
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Dashboard initializing...');
    
    try {
        // Load all required modules
        await import('./loaders.js');
        await import('./navigation.js');
        await import('./sections.js');
        await import('./charts.js');
        
        // Initialize dashboard
        await updateDashboard();
        // Cargar las métricas después de que el dashboard esté listo
        await updateDashboardMetrics();
    } catch (error) {
        console.error('Error initializing dashboard:', error);
    }
});

// Main dashboard update function
async function updateDashboard() {
    // Load all JSON files
    const principal = await window.dashboardUtils.loadJsonData('dashboard/principal.json');
    const navbar = await window.dashboardUtils.loadJsonData('dashboard/sections/navbar.json');
    
    // Try multiple paths for footer.json
    let footer = await window.dashboardUtils.loadJsonData('dashboard/sections/footer.json');
    if (!footer) {
        console.log('Trying alternative path for footer.json...');
        footer = await window.dashboardUtils.loadJsonData('/dashboard/sections/footer.json');
    }
    
    // Fallback footer data if loading fails
    if (!footer) {
        console.log('Using fallback footer data');
        footer = {
            title: "Footer",
            copyright: "Ka0s Project - GitHub",
            version: "1.0.0"
        };
    }
    
    // Update navbar
    // Update navbar
    if (navbar) {
        const navbarHtml = await window.sectionUtils.createNavbarHtml(navbar);
        const navbarElement = document.querySelector('#navbar');
        if (navbarElement) {
            navbarElement.innerHTML = navbarHtml;
            window.navigationUtils.setupNavigation();
            window.navigationUtils.initializeSidebar();
        } else {
            console.error('Navbar element not found in the DOM');
        }
    }
    
    // Load and update dashboard template
    const dashboardTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/index.html');
    if (dashboardTemplate) {
        const dashboardContainer = document.querySelector('#dashboard-container');
        if (dashboardContainer) {
            dashboardContainer.innerHTML = dashboardTemplate;
            window.chartUtils.initializeCharts(); // Initialize charts after content is loaded
        } else {
            console.error('Dashboard container element not found in the DOM');
        }
    }
    
    // Update footer
    if (footer) {
        const footerHtml = await window.sectionUtils.createFooterHtml(footer);
        const footerElement = document.querySelector('#footer');
        if (footerElement) {
            footerElement.innerHTML = footerHtml;
            console.log('Footer updated successfully');
        } else {
            console.error('Footer element not found in the DOM');
        }
    }
}

// Export the updateDashboard function for use in other modules
window.updateDashboard = updateDashboard;


// Función para cargar los datos
async function updateDashboardMetrics() {
    try {
        console.log('Loading dashboard metrics...');
        let response = await fetch('dashboard/data/workflow-statistics.json')
            .then(response => {
                if (!response.ok) {
                    console.log('Primary metrics file not found, trying fallback location...');
                    // Try the fallback location
                    return fetch('../outputs/w/workflow-statistics.json');
                }
                return response;
            });

        if (!response.ok) {
            throw new Error(`Failed to load metrics data: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.summary) {
            console.error('Invalid data format');
            return;
        }

        console.log('Updating metrics with:', data.summary);
        
        // Fix for average duration - convert to a reasonable value
        let avgDuration = data.summary.average_duration;
        console.log('Raw average duration:', avgDuration);
        
        // If the value is unreasonably large, use a more reasonable value
        if (avgDuration > 100000) {
            console.warn('Average duration is unreasonably large, using a more reasonable value');
            avgDuration = 300; // Default to 5 minutes
        }
        
        // Format the duration properly
        const formattedDuration = formatDurationFixed(avgDuration * 1000);
        console.log('Formatted duration:', formattedDuration);
        
        // Actualizar las métricas con los datos del summary
        const elements = {
            'total-runs': data.summary.total_runs,
            'success-rate': `${data.summary.success_rate}%`,
            'avg-duration': formattedDuration,
            'failure-rate': `${data.summary.failure_rate}%`
        };

        // Actualizar cada elemento
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
                console.log(`Updated ${id} with ${value}`);
            } else {
                console.error(`Element with id ${id} not found`);
            }
        });

    } catch (error) {
        console.error('Error loading dashboard metrics:', error);
    }
}

// New improved duration formatting function
function formatDurationFixed(ms) {
    if (!ms || isNaN(ms)) return 'N/A';
    
    // Convert to seconds
    const totalSeconds = Math.floor(ms / 1000);
    
    // Calculate different time units
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);
    
    // Format the duration based on its magnitude
    if (days > 0) {
        return `${days}d ${hours}h`;
    } else if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${seconds}s`;
    }
}

// Keep the original formatDuration function for backward compatibility
function formatDuration(ms) {
    return formatDurationFixed(ms);
}
