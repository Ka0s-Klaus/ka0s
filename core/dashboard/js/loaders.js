// loaders.js - Utilities for loading data and templates

// Initialize the utilities namespace
window.dashboardUtils = {};

// Load JSON data from a file
window.dashboardUtils.loadJsonData = async function(path) {
    try {
        console.log(`Attempting to load JSON from: ${path}`);
        const response = await fetch(path);
        if (!response.ok) {
            console.error(`Failed to load JSON from ${path}: ${response.status} ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        console.log(`Successfully loaded JSON from: ${path}`);
        return data;
    } catch (error) {
        console.error(`Error loading JSON from ${path}:`, error);
        return null;
    }
};

// Load HTML template from a file
window.dashboardUtils.loadHtmlTemplate = async function(path) {
    try {
        console.log(`Attempting to load HTML template from: ${path}`);
        const response = await fetch(path);
        if (!response.ok) {
            console.error(`Failed to load HTML template from ${path}: ${response.status} ${response.statusText}`);
            return null;
        }
        const text = await response.text();
        console.log(`Successfully loaded HTML template from: ${path}`);
        return text;
    } catch (error) {
        console.error(`Error loading HTML template from ${path}:`, error);
        return null;
    }
};

// Get base URL for the application
window.dashboardUtils.getBaseUrl = function() {
    return window.location.pathname.includes('/core/dashboard/') 
        ? '/core/dashboard/'
        : '/';
};