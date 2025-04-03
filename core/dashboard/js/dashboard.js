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
    } catch (error) {
        console.error('Error initializing dashboard:', error);
    }
});

// Main dashboard update function
async function updateDashboard() {
    // Load all JSON files
    const principal = await window.dashboardUtils.loadJsonData('dashboard/principal.json');
    const navbar = await window.dashboardUtils.loadJsonData('dashboard/sections/navbar.json');
    const footer = await window.dashboardUtils.loadJsonData('dashboard/sections/footer.json');
    
    // Update navbar
    if (navbar) {
        const navbarHtml = await window.navigationUtils.createNavbarHtml(navbar);
        document.querySelector('#navbar').innerHTML = navbarHtml;
        window.navigationUtils.setupNavigation();
        window.navigationUtils.initializeSidebar();
    }
    
    // Load and update dashboard template
    const dashboardTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/index.html');
    if (dashboardTemplate) {
        document.querySelector('#dashboard-container').innerHTML = dashboardTemplate;
        window.chartUtils.initializeCharts(); // Initialize charts after content is loaded
    }
    
    // Update footer
    if (footer) {
        const footerHtml = await window.sectionUtils.createFooterHtml(footer);
        document.querySelector('#footer').innerHTML = footerHtml;
    }
}

// Export the updateDashboard function for use in other modules
window.updateDashboard = updateDashboard;
