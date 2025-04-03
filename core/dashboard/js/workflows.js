/**
 * Workflows management functionality for Ka0s dashboard
 * This file handles loading and displaying GitHub workflow data
 */

// Load workflows data from JSON file
async function loadWorkflowsData() {
    try {
        const response = await fetch('core/outputs/w/workflows-available-14216407020.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch workflows data: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading workflows data:', error);
        return null;
    }
}

// Display workflows in the table
async function displayWorkflows() {
    const workflowsData = await loadWorkflowsData();
    if (!workflowsData) return;
    
    const tableBody = document.getElementById('workflows-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    workflowsData.forEach(workflow => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        
        // Determine status class based on state
        let statusClass = '';
        let statusText = workflow.state;
        
        switch(workflow.state) {
            case 'active':
                statusClass = 'bg-green-100 text-green-800';
                statusText = 'Active';
                break;
            case 'disabled_manually':
                statusClass = 'bg-yellow-100 text-yellow-800';
                statusText = 'Disabled';
                break;
            default:
                statusClass = 'bg-gray-100 text-gray-800';
        }
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i class="fas fa-code-branch text-blue-600"></i>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">${workflow.name}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">${workflow.path}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">${statusText}</span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize workflows section
function initializeWorkflows() {
    displayWorkflows();
    console.log('Workflows initialization called');
}

// Export functions for use in other files
window.workflowsModule = {
    loadWorkflowsData,
    displayWorkflows,
    initializeWorkflows
};