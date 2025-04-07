// lead-time.js - Handles lead time data processing and visualization

document.addEventListener('DOMContentLoaded', function() {
    // Initialize lead time section when the document is loaded
    initLeadTimeSection();
});

async function initLeadTimeSection() {
    // Get the lead time section element
    const leadTimeSection = document.getElementById('leadTime');
    if (!leadTimeSection) return;

    try {
        // Fetch real workflow data from kaos-workflows-runs.json
        const response = await fetch('../outputs/w/kaos-workflows-runs.json');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const workflowsData = await response.json();
        console.log('Workflow data loaded for lead time:', workflowsData.length, 'workflows');
        
        // Process the data for lead time metrics
        const processedData = processLeadTimeData(workflowsData);
        
        // Render the lead time section with the processed data
        renderLeadTimeSection(leadTimeSection, processedData);
    } catch (error) {
        console.error('Error loading workflow runs for lead time:', error);
        leadTimeSection.innerHTML = `
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Lead Time Analysis</h2>
                <div class="bg-red-100 p-4 rounded-lg text-red-700">
                    Error loading workflow data: ${error.message}
                </div>
            </div>
        `;
    }
}

function processLeadTimeData(runs) {
    // Filter completed workflows
    const completedRuns = runs.filter(run => run.status === 'completed');
    
    // Calculate lead times (time from creation to completion)
    const leadTimes = completedRuns.map(run => {
        const createdAt = new Date(run.created_at);
        const updatedAt = new Date(run.updated_at);
        const leadTimeSeconds = Math.floor((updatedAt - createdAt) / 1000);
        
        return {
            workflow: run.name,
            leadTimeSeconds: leadTimeSeconds,
            status: run.conclusion || 'unknown',
            createdAt: createdAt,
            formattedLeadTime: formatDuration(leadTimeSeconds)
        };
    });
    
    // Sort by creation time (most recent first)
    leadTimes.sort((a, b) => b.createdAt - a.createdAt);
    
    // Calculate metrics
    const totalWorkflows = leadTimes.length;
    
    // Calculate average lead time
    const totalLeadTimeSeconds = leadTimes.reduce((sum, item) => sum + item.leadTimeSeconds, 0);
    const avgLeadTimeSeconds = totalWorkflows > 0 ? Math.floor(totalLeadTimeSeconds / totalWorkflows) : 0;
    
    // Find min and max lead times
    let minLeadTimeSeconds = Number.MAX_SAFE_INTEGER;
    let maxLeadTimeSeconds = 0;
    
    leadTimes.forEach(item => {
        if (item.leadTimeSeconds < minLeadTimeSeconds) {
            minLeadTimeSeconds = item.leadTimeSeconds;
        }
        if (item.leadTimeSeconds > maxLeadTimeSeconds) {
            maxLeadTimeSeconds = item.leadTimeSeconds;
        }
    });
    
    // If no workflows, set min to 0
    if (minLeadTimeSeconds === Number.MAX_SAFE_INTEGER) {
        minLeadTimeSeconds = 0;
    }
    
    // Get the 5 most recent executions
    const recentExecutions = leadTimes.slice(0, 5).map(item => {
        return {
            workflow: item.workflow,
            leadTime: item.formattedLeadTime,
            time: getTimeAgo(item.createdAt),
            status: item.status === 'success' ? 'Success' : 'Failed'
        };
    });
    
    return {
        metrics: {
            totalWorkflows: totalWorkflows.toString(),
            avgLeadTime: formatDuration(avgLeadTimeSeconds),
            maxLeadTime: formatDuration(maxLeadTimeSeconds),
            minLeadTime: formatDuration(minLeadTimeSeconds)
        },
        recentExecutions: recentExecutions
    };
}

function renderLeadTimeSection(container, data) {
    // Create the HTML for the lead time section
    const html = `
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Lead Time Analysis</h2>
            <p class="text-gray-600 mb-6">Análisis del tiempo transcurrido desde el commit hasta el despliegue</p>
            
            <!-- Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-blue-100 p-4 rounded-lg">
                    <h3 class="font-bold text-blue-800">Total Workflows</h3>
                    <p class="text-3xl font-bold text-blue-600">${data.metrics.totalWorkflows}</p>
                </div>
                <div class="bg-green-100 p-4 rounded-lg">
                    <h3 class="font-bold text-green-800">Avg Lead Time</h3>
                    <p class="text-3xl font-bold text-green-600">${data.metrics.avgLeadTime}</p>
                </div>
                <div class="bg-yellow-100 p-4 rounded-lg">
                    <h3 class="font-bold text-yellow-800">Max Lead Time</h3>
                    <p class="text-3xl font-bold text-yellow-600">${data.metrics.maxLeadTime}</p>
                </div>
                <div class="bg-purple-100 p-4 rounded-lg">
                    <h3 class="font-bold text-purple-800">Min Lead Time</h3>
                    <p class="text-3xl font-bold text-purple-600">${data.metrics.minLeadTime}</p>
                </div>
            </div>
            
            <!-- Recent Executions Table -->
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Recent Executions</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Time</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" id="leadTimeTableBody">
                        ${data.recentExecutions.map(execution => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${execution.workflow}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">${execution.leadTime}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${execution.time}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${execution.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                        ${execution.status}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Set the HTML content
    container.innerHTML = html;
}

// Helper function to format duration in seconds to "Xm Ys" format
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

// Helper function to format time ago
function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
        return `${diffDays}d ago`;
    } else if (diffHours > 0) {
        return `${diffHours}h ago`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes}m ago`;
    } else {
        return `${diffSeconds}s ago`;
    }
}