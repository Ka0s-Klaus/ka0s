// loaders.js - Utilities for loading data and templates

// Initialize the utilities namespace
window.dashboardUtils = {};

// Load JSON data from a file
window.dashboardUtils.loadJsonData = async function(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            console.error(`Failed to load JSON from ${path}: ${response.status} ${response.statusText}`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading JSON from ${path}:`, error);
        return null;
    }
};

// Load HTML template from a file
window.dashboardUtils.loadHtmlTemplate = async function(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            console.error(`Failed to load HTML template from ${path}: ${response.status} ${response.statusText}`);
            return null;
        }
        return await response.text();
    } catch (error) {
        console.error(`Error loading HTML template from ${path}:`, error);
        return null;
    }
};