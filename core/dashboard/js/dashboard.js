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
    if (navbar) {
        const navbarHtml = await window.navigationUtils.createNavbarHtml(navbar);
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
