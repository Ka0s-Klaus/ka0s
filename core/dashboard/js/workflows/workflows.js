/**
 * Workflow Statistics functionality for Ka0s dashboard
 * This file handles loading and displaying Ka0s workflow data
 */

// Load workflow data from JSON file
async function loadWorkflowStats() {
    try {
        // Try primary and fallback paths
        const primaryPath = 'dashboard/data/kaos-workflows-available.json';
        const fallbackPath = '../outputs/w/kaos-workflows-available.json';
        
        try {
            console.log(`Attempting to fetch from primary path: ${primaryPath}`);
            let response = await fetch(primaryPath);
            
            if (!response.ok) {
                console.log('Primary path failed, trying fallback location...');
                response = await fetch(fallbackPath);
            }
            
            if (response.ok) {
                const data = await response.json();
                console.log(`Successfully loaded data from: ${response.url}`);
                return data;
            } else {
                console.error(`Failed to load data from both locations: ${response.status} ${response.statusText}`);
                return null;
            }
        } catch (e) {
            console.log(`Failed to fetch workflow statistics: ${e.message}`);
            return null;
        }
    } catch (error) {
        console.error('Error loading workflow statistics:', error);
        return null;
    }
}

// Display workflow statistics in table
async function displayWorkflowStats() {
    const statsData = await loadWorkflowStats();
    if (!statsData) {
        console.error('No workflow data available');
        return;
    }

    console.log('Workflow data loaded:', statsData);

    const tableBody = document.getElementById("workflowTable");
    
    // Clear existing content
    tableBody.innerHTML = '';

    // Process each workflow
    statsData.forEach((workflow) => {
        const { id, name, path, state } = workflow;
        
        // Determine the workflow path for the badge
        let badgePath = path;
        let workflowUrl = `https://github.com/Ka0s-Klaus/ka0s/actions/workflows/${path}`;
        
        // Handle special case for CodeQL which has a different path structure
        if (path.startsWith('dynamic/')) {
            badgePath = path;
            workflowUrl = `https://github.com/Ka0s-Klaus/ka0s/actions/${path}`;
        }
        
        // Determine status color based on state
        const color = state === 'active' ? 'green' : 'red';
        
        const row = document.createElement("tr");
        row.classList.add("hover:bg-gray-50");

        row.innerHTML = `
            <td class="px-6 py-4 text-sm">
                <a href="${workflowUrl}" target="_blank">
                    <img src="https://github.com/Ka0s-Klaus/ka0s/actions/workflows/${badgePath}/badge.svg?branch=main" 
                         alt="${name}" class="h-6">
                </a>
            </td>
            
            <td class="px-6 py-4 whitespace-nowrap">
                    ${name}
            </td>
            
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color}-100 text-${color}-800">
                    ${state}
                </span>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Initialize workflow statistics
function initializeWorkflowStats() {
    console.log('Starting workflow statistics initialization');
    
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(() => {
        displayWorkflowStats().then(() => {
            console.log('Workflow statistics display completed');
        }).catch(error => {
            console.error('Error in displayWorkflowStats:', error);
        });
    }, 300);
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing workflow stats');
    initializeWorkflowStats();
});

// Also try initializing after window load (as a fallback)
window.addEventListener('load', function() {
    console.log('Window loaded, checking if workflow stats need initialization');
    const recentCommitsElement = document.getElementById('recent-commits');
    if (!recentCommitsElement || 
        recentCommitsElement.textContent === '-' || 
        recentCommitsElement.textContent.includes('{{')) {
        console.log('Workflow stats need initialization after window load');
        initializeWorkflowStats();
    }
});
