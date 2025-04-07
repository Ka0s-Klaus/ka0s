// navigation.js - Handles sidebar and navigation functionality

// Initialize the navigation utilities namespace
window.navigationUtils = {};

// Toggle sidebar functionality
window.navigationUtils.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    const mainContent = document.getElementById('main-content');
    const logoImage = document.querySelector('#sidebar .logo-image');
    
    if (sidebar.classList.contains('w-[250px]')) {
        // Collapse sidebar
        sidebar.classList.remove('w-[250px]');
        sidebar.classList.add('w-[60px]');
        toggleIcon.style.transform = 'rotate(180deg)';
        sidebarTexts.forEach(text => {
            text.style.opacity = '0';
            text.classList.add('hidden');
        });
        
        // Keep logo visible but centered
        if (logoImage) {
            logoImage.classList.add('mx-auto');
        }
        
        if (mainContent) {
            mainContent.classList.remove('ml-[250px]');
            mainContent.classList.add('ml-[60px]');
        }
    } else {
        // Expand sidebar
        sidebar.classList.remove('w-[60px]');
        sidebar.classList.add('w-[250px]');
        toggleIcon.style.transform = 'rotate(0deg)';
        sidebarTexts.forEach(text => {
            text.classList.remove('hidden');
            setTimeout(() => {
                text.style.opacity = '1';
            }, 150);
        });
        
        // Restore logo position
        if (logoImage) {
            logoImage.classList.remove('mx-auto');
        }
        
        if (mainContent) {
            mainContent.classList.remove('ml-[60px]');
            mainContent.classList.add('ml-[250px]');
        }
    }
};

// Initialize sidebar functionality
window.navigationUtils.initializeSidebar = function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', window.navigationUtils.toggleSidebar);
        
        // Auto-collapse on small screens
        if (window.innerWidth < 640) {
            window.navigationUtils.toggleSidebar();
        }
        
        // Listen for window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth < 640) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('w-[250px]')) {
                    window.navigationUtils.toggleSidebar();
                }
            }
        });
    }
};

// Create navbar HTML directly in navigation.js
window.navigationUtils.createNavbarHtml = async function(data) {
    // Load the navbar template
    const navbarTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/navbar.html');
    
    if (!navbarTemplate) {
        console.error('Failed to load navbar template');
        return '';
    }
    
    // Create links HTML with data-section attributes
    const linksHtml = data.links.map(link => {
        // Determine which section to show based on link text
        let sectionId = 'dashboard';
        
        // Map the link text to the corresponding section ID
        if (link.text === 'Inicio' || link.text === 'Home') {
            sectionId = 'dashboard';
        } else if (link.text === 'Lead Time') {
            sectionId = 'leadTime';
        } else if (link.text === 'Actions Performance') {
            sectionId = 'actionsPerformance';
        } else if (link.text === 'Backlogs') {
            sectionId = 'backLogs';
        } else if (link.text === 'Handler Failure') {
            sectionId = 'handlerFailure';
        } else if (link.text === 'Handler Success') {
            sectionId = 'handlerSuccess';
        } else if (link.text === 'End Workflow') {
            sectionId = 'endWorkflow';
        } else {
            // For any other sections, convert to camelCase
            sectionId = link.text.replace(/\s+(.)/g, (match, group) => group.toUpperCase());
            sectionId = sectionId.charAt(0).toLowerCase() + sectionId.slice(1);
        }
        
        return `
            <a href="#${link.text.toLowerCase().replace(/\s+/g, '-')}" 
               class="flex items-center px-4 py-3 rounded-lg text-gray-700 transition-all duration-300 hover:bg-blue-700 hover:text-white group"
               data-section="${sectionId}">
                <i class="fas ${link.icon} text-gray-600 w-5 text-center transition-colors group-hover:text-white"></i>
                <span class="ml-2 sidebar-text">${link.text}</span>
            </a>
        `;
    }).join('');
    
    // Replace the placeholders in the template with modified logo class
    return navbarTemplate
        .replace('{{NAVBAR_TITLE}}', data.title || 'Ka0s Dashboard')
        .replace('{{NAVBAR_LOGO}}', data.logo || 'images/kaos-summary.png')
        .replace('{{NAVBAR_LINKS}}', linksHtml)
        .replace('class="h-10 w-10 rounded-xl', 'class="h-10 w-10 rounded-xl logo-image');
};

// Setup navigation links
window.navigationUtils.setupNavigation = function() {
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', async function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            
            // Hide all sections first
            const allSections = document.querySelectorAll('#dashboard-container, #leadTime, #actionsPerformance, #backLogs, #handlerFailure, #handlerSuccess, #endWorkflow');
            allSections.forEach(section => {
                if (section) section.classList.add('hidden');
            });
            
            // Show the appropriate section
            switch(linkText) {
                case 'Inicio':
                    document.querySelector('#dashboard-container')?.classList.remove('hidden');
                    break;
                case 'Actions Performance':
                    const actionsSection = document.querySelector('#actionsPerformance');
                    if (actionsSection) {
                        actionsSection.classList.remove('hidden');
                        
                        // Show loading indicator
                        actionsSection.innerHTML = `
                            <div class="flex justify-center items-center h-64">
                                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                                <p class="ml-4 text-lg text-gray-600">Loading workflow data...</p>
                            </div>
                        `;
                        
                        // Load data asynchronously
                        setTimeout(async () => {
                            try {
                                // Cargar datos de kaos-workflows-runs.json
                                const workflowsData = await fetch('../outputs/w/kaos-workflows-runs.json')
                                    .then(response => {
                                        if (!response.ok) {
                                            throw new Error(`Error HTTP: ${response.status}`);
                                        }
                                        return response.json();
                                    });
                                
                                console.log('Workflow data loaded:', workflowsData.length, 'workflows');
                                
                                if (workflowsData && workflowsData.length > 0) {
                                    // Process data with pagination
                                    const pageSize = 50; // Show 50 items per page
                                    const totalItems = workflowsData.length;
                                    const totalPages = Math.ceil(totalItems / pageSize);
                                    let currentPage = 1;
                                    
                                    // Process only the first page initially
                                    const paginatedData = workflowsData.slice(0, pageSize);
                                    const processedData = processWorkflowDataOptimized(paginatedData, workflowsData);
                                    
                                    const template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsperformance.html');
                                    if (template) {
                                        // Apply data to the template
                                        let renderedTemplate = template;
                                        
                                        // Replace summary data (calculated from all data)
                                        for (const [key, value] of Object.entries(processedData.summary)) {
                                            renderedTemplate = renderedTemplate.replace(new RegExp(`{{summary\\.${key}}}`, 'g'), value);
                                        }
                                        
                                        // Replace title and description
                                        renderedTemplate = renderedTemplate.replace(/{{title}}/g, processedData.title);
                                        renderedTemplate = renderedTemplate.replace(/{{description}}/g, processedData.description);
                                        
                                        // Handle the workflows loop with additional fields
                                        const workflowsMatch = renderedTemplate.match(/{{#each workflows}}([\s\S]*?){{\/each}}/);
                                        if (workflowsMatch) {
                                            const workflowTemplate = workflowsMatch[1];
                                            const workflowsHtml = processedData.workflows.map(workflow => {
                                                let row = workflowTemplate;
                                                
                                                // Replace all workflow properties
                                                for (const [key, value] of Object.entries(workflow)) {
                                                    row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                                }
                                                
                                                // Handle conditional formatting for status and conclusion
                                                row = row.replace(/{{#if \(eq status 'completed'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.status === 'completed' ? '$1' : '');
                                                row = row.replace(/{{#if \(eq status 'in_progress'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.status === 'in_progress' ? '$1' : '');
                                                row = row.replace(/{{#if \(eq status 'queued'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.status === 'queued' ? '$1' : '');
                                                    
                                                row = row.replace(/{{#if \(eq conclusion 'success'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.conclusion === 'success' ? '$1' : '');
                                                row = row.replace(/{{#if \(eq conclusion 'failure'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.conclusion === 'failure' ? '$1' : '');
                                                row = row.replace(/{{#if \(eq conclusion 'skipped'\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.conclusion === 'skipped' ? '$1' : '');
                                                row = row.replace(/{{#if \(eq conclusion null\)}}([\s\S]*?){{\/if}}/g, 
                                                    workflow.conclusion === 'pending' ? '$1' : '');
                                                
                                                return row;
                                            }).join('');
                                            
                                            renderedTemplate = renderedTemplate.replace(/{{#each workflows}}[\s\S]*?{{\/each}}/, workflowsHtml);
                                        }
                                        
                                        // Add pagination controls
                                        const paginationHtml = `
                                            <div class="mt-6 flex justify-between items-center">
                                                <div>
                                                    <span class="text-sm text-gray-700">
                                                        Showing <span class="font-medium">1</span> to <span class="font-medium">${Math.min(pageSize, totalItems)}</span> of <span class="font-medium">${totalItems}</span> results
                                                    </span>
                                                </div>
                                                <div class="flex space-x-2">
                                                    <button id="prevPage" class="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50" disabled>Previous</button>
                                                    <span class="px-3 py-1">Page ${currentPage} of ${totalPages}</span>
                                                    <button id="nextPage" class="px-3 py-1 rounded bg-blue-500 text-white ${totalPages <= 1 ? 'disabled:opacity-50' : ''}" ${totalPages <= 1 ? 'disabled' : ''}>Next</button>
                                                </div>
                                            </div>
                                        `;
                                        
                                        // Add pagination to the template
                                        renderedTemplate += paginationHtml;
                                        
                                        actionsSection.innerHTML = renderedTemplate;
                                        
                                        // Store the full data in a variable for pagination
                                        actionsSection.dataset.fullData = JSON.stringify(workflowsData);
                                        
                                        // Add event listeners for pagination
                                        const prevButton = document.getElementById('prevPage');
                                        const nextButton = document.getElementById('nextPage');
                                        
                                        if (prevButton && nextButton) {
                                            prevButton.addEventListener('click', () => {
                                                if (currentPage > 1) {
                                                    currentPage--;
                                                    updateWorkflowsTable(workflowsData, currentPage, pageSize, totalPages);
                                                }
                                            });
                                            
                                            nextButton.addEventListener('click', () => {
                                                if (currentPage < totalPages) {
                                                    currentPage++;
                                                    updateWorkflowsTable(workflowsData, currentPage, pageSize, totalPages);
                                                }
                                            });
                                        }
                                    }
                                } else {
                                    actionsSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">No se pudieron cargar los datos de workflows</div>`;
                                }
                            } catch (error) {
                                console.error('Error processing workflow data:', error);
                                actionsSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Error processing workflow data: ${error.message}</div>`;
                            }
                        }, 10); // Small delay to allow the UI to update with the loading indicator
                    }
                    break;
                case 'Lead Time':
                    const leadTimeSection = document.querySelector('#leadTime');
                    if (leadTimeSection) {
                        leadTimeSection.classList.remove('hidden');
                        const renderedTemplate = await window.sectionUtils.loadLeadTime();
                        if (renderedTemplate) {
                            leadTimeSection.innerHTML = renderedTemplate;
                        }
                    }
                    break;
                case 'Backlogs':
                    const backLogsSection = document.querySelector('#backLogs');
                    if (backLogsSection) {
                        backLogsSection.classList.remove('hidden');
                        // Load and process the Backlogs data
                        const backLogsData = await window.dashboardUtils.loadJsonData('dashboard/sections/backLogs.json');
                        if (backLogsData) {
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/backLogs.html');
                            if (template) {
                                // Replace all template variables with actual data
                                let renderedTemplate = template;
                                
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.title }}/g, backLogsData.title);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.description }}/g, backLogsData.description);

                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target1 }}/g, backLogsData.target.target1.title);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target1.description }}/g, backLogsData.target.target1.description);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target2 }}/g, backLogsData.target.target2.title);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target2.description }}/g, backLogsData.target.target2.description);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target3 }}/g, backLogsData.target.target3.title);
                                renderedTemplate = renderedTemplate.replace(/{{ backLogs.target3.description }}/g, backLogsData.target.target3.description);


                                
                                // Replace title and description if they exist in the template
                                if (backLogsData.title) {
                                    renderedTemplate = renderedTemplate.replace(/{{title}}/g, backLogsData.title);
                                }
                                
                                // Replace target data
                                if (backLogsData.target) {
                                    for (const [key, value] of Object.entries(backLogsData.target)) {
                                        renderedTemplate = renderedTemplate.replace(new RegExp(`{{target1.${key}.title}}`, 'g'), value.title);
                                        renderedTemplate = renderedTemplate.replace(new RegExp(`{{target1.${key}.description}}`, 'g'), value.description);
                                    }
                                }
                                
                                // Handle the mainContent loop if it exists in the template
                                const contentMatch = renderedTemplate.match(/{{#each mainContent}}([\s\S]*?){{\/each}}/);
                                if (contentMatch && backLogsData.mainContent) {
                                    const itemTemplate = contentMatch[1];
                                    const itemsHtml = backLogsData.mainContent.map(item => {
                                        let row = itemTemplate;
                                        for (const [key, value] of Object.entries(item)) {
                                            if (key === 'tags' && Array.isArray(value)) {
                                                // Handle tags array
                                                const tagsHtml = value.map(tag => 
                                                    `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-1">${tag}</span>`
                                                ).join('');
                                                row = row.replace(/{{tagsHtml}}/g, tagsHtml);
                                            } else {
                                                row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                            }
                                        }
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each mainContent}}[\s\S]*?{{\/each}}/, itemsHtml);
                                }
                                
                                backLogsSection.innerHTML = renderedTemplate;
                            }
                        }
                    }
                    break;
                case 'Handler Failure':
                    const failureSection = document.querySelector('#handlerFailure');
                    if (failureSection) {
                        failureSection.classList.remove('hidden');
                        
                        // Load data from kaos-workflows-runs.json
                        const failureWorkflowsData = await fetch('../outputs/w/kaos-workflows-runs.json')
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP Error: ${response.status}`);
                                }
                                return response.json();
                            })
                            .catch(error => {
                                console.error('Error loading workflow runs:', error);
                                return [];
                            });
                            
                        console.log('Workflow data loaded:', failureWorkflowsData.length, 'total workflows');
                        
                        if (failureWorkflowsData && failureWorkflowsData.length > 0) {
                            // Filter only failed workflows
                            const filteredFailureData = failureWorkflowsData.filter(run => run.conclusion === 'failure');
                            console.log('Filtered failed workflows:', filteredFailureData.length);
                            
                            // Calculate additional failure metrics
                            const totalWorkflows = failureWorkflowsData.length;
                            const failureCount = filteredFailureData.length;
                            const failureRatio = totalWorkflows > 0 ? (failureCount / totalWorkflows * 100).toFixed(1) : 0;
                            
                            // Calculate average time to failure
                            let totalFailureDuration = 0;
                            filteredFailureData.forEach(run => {
                                totalFailureDuration += calculateDurationInSeconds(run.created_at, run.updated_at);
                            });
                            const avgFailureTime = failureCount > 0 ? formatDuration(totalFailureDuration / failureCount) : 'N/A';
                            
                            // Analyze common errors (using workflow names as proxy for error types)
                            const errorTypes = {};
                            filteredFailureData.forEach(run => {
                                // Use event type as the error type instead of workflow name
                                const errorType = run.event || 'Unknown';
                                if (!errorTypes[errorType]) {
                                    errorTypes[errorType] = 0;
                                }
                                errorTypes[errorType]++;
                            });
                            
                            // Find most common error
                            let mostCommonError = 'None';
                            let maxCount = 0;
                            for (const [errorType, count] of Object.entries(errorTypes)) {
                                if (count > maxCount) {
                                    mostCommonError = errorType;
                                    maxCount = count;
                                }
                            }
                            
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerfailure.html');
                            if (template) {
                                // Check the template variables and log them for debugging
                                console.log('Template loaded:', template.includes('{{metrics.total_failed}}'), 
                                            'total_failed:', template.includes('{{metrics.total_failed}}'),
                                            'avg_fail_time:', template.includes('{{metrics.avg_fail_time}}')
                                            );
                                
                                // Apply data to the template
                                let renderedTemplate = template;
                                
                                // Log the actual template content to see the variable names
                                console.log('Template content sample:', template.substring(0, 500));
                                
                                // Extract the actual variable names from the template
                                const totalFailedMatch = template.match(/{{(metrics\.[^}]+)}}/);
                                if (totalFailedMatch) {
                                    console.log('Found metric variable:', totalFailedMatch[1]);
                                }
                                
                                // Replace metrics data with the correct variable names from the template
                                renderedTemplate = renderedTemplate.replace(/{{metrics\.total_failed}}/g, failureCount);
                                renderedTemplate = renderedTemplate.replace(/{{metrics\.total_failures}}/g, failureCount); // Add support for alternative variable name
                                renderedTemplate = renderedTemplate.replace(/{{metrics\.failure_rate}}/g, `${failureRatio}%`);
                                renderedTemplate = renderedTemplate.replace(/{{metrics\.common_error}}/g, mostCommonError);
                                renderedTemplate = renderedTemplate.replace(/{{metrics\.avg_fail_time}}/g, avgFailureTime);
                                
                                // Try alternative variable formats that might be in the template
                                renderedTemplate = renderedTemplate.replace(/\{\{metrics\.total_workflows\}\}/g, failureCount);
                                renderedTemplate = renderedTemplate.replace(/\{\{metrics\.avg_failure_time\}\}/g, avgFailureTime);
                                renderedTemplate = renderedTemplate.replace(/{{title}}/g, "GitHub Actions Failure Metrics");
                                renderedTemplate = renderedTemplate.replace(/{{description}}/g, "Real-time workflow failure analysis");
                                
                                // Process workflow failures for the table
                                const failures = filteredFailureData.map(run => {
                                    return {
                                        workflow_name: run.name,
                                        error_type: run.event || 'Unknown',
                                        time: formatDate(run.created_at)
                                    };
                                });
                                
                                // Handle the failures loop
                                const failuresMatch = renderedTemplate.match(/{{#each failures}}([\s\S]*?){{\/each}}/);
                                if (failuresMatch) {
                                    const failureTemplate = failuresMatch[1];
                                    const failuresHtml = failures.map(failure => {
                                        let row = failureTemplate;
                                        row = row.replace(/{{workflow_name}}/g, failure.workflow_name);
                                        row = row.replace(/{{error_type}}/g, failure.error_type);
                                        row = row.replace(/{{time}}/g, failure.time);
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each failures}}[\s\S]*?{{\/each}}/, failuresHtml);
                                }
                                
                                // Final check for any remaining template variables before rendering
                                const remainingVariables = renderedTemplate.match(/\{\{metrics\.[^}]+\}\}/g);
                                if (remainingVariables) {
                                    console.log('Found remaining variables:', remainingVariables);
                                    remainingVariables.forEach(variable => {
                                        // Replace any remaining metrics variables with appropriate values
                                        if (variable.includes('total_failed') || variable.includes('total_failures')) {
                                            renderedTemplate = renderedTemplate.replace(new RegExp(variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), failureCount);
                                        }
                                    });
                                }
                                
                                // After rendering the template, update the DOM
                                failureSection.innerHTML = renderedTemplate;
                                
                                // No need for setTimeout as we've already handled all replacements
                                setTimeout(() => {
                                    // Search directly in the HTML and replace the exact string
                                    let htmlContent = failureSection.innerHTML;
                                    if (htmlContent.includes('{{metrics.total_failed}}')) {
                                        htmlContent = htmlContent.replace(/\{\{metrics\.total_failed\}\}/g, failureCount);
                                        failureSection.innerHTML = htmlContent;
                                    }
                                    
                                    // Also check for the alternative variable name
                                    htmlContent = failureSection.innerHTML;
                                    if (htmlContent.includes('{{metrics\.total_failures}}')) {
                                        htmlContent = htmlContent.replace(/\{\{metrics\.total_failures\}\}/g, failureCount);
                                        failureSection.innerHTML = htmlContent;
                                    }
                                    
                                    // Also try with a more specific approach for individual elements
                                    const elements = failureSection.querySelectorAll('*');
                                    elements.forEach(el => {
                                        // Check for both variable names
                                        if (el.textContent && (
                                            el.textContent.trim() === '{{metrics.total_failed}}' ||
                                            el.textContent.trim() === '{{metrics.total_failures}}')) {
                                            el.textContent = failureCount;
                                        }
                                        // Also check for partial matches
                                        else if (el.textContent) {
                                            if (el.textContent.includes('{{metrics.total_failed}}')) {
                                                el.textContent = el.textContent.replace('{{metrics.total_failed}}', failureCount);
                                            }
                                            if (el.textContent.includes('{{metrics.total_failures}}')) {
                                                el.textContent = el.textContent.replace('{{metrics.total_failures}}', failureCount);
                                            }
                                        }
                                    });
                                    
                                    // Verify if the replacement was successful
                                    console.log('After direct HTML replacement:', 
                                        failureSection.innerHTML.includes('{{metrics.total_failed}}') || 
                                        failureSection.innerHTML.includes('{{metrics.total_failures}}'),
                                        'Failure count:', failureCount);
                                }, 100);
                            } else {
                                failureSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Could not load failure template</div>`;
                            }
                        } else {
                            failureSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Could not load workflow data</div>`;
                        }
                    }
                    break;
                case 'Handler Success':
                    const successSection = document.querySelector('#handlerSuccess');
                    if (successSection) {
                        successSection.classList.remove('hidden');
                        
                        // Show loading indicator
                        successSection.innerHTML = `
                            <div class="flex justify-center items-center h-64">
                                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
                                <p class="ml-4 text-lg text-gray-600">Loading success data...</p>
                            </div>
                        `;
                        
                        try {
                            // Load data from kaos-workflows-runs.json
                            const successWorkflowsData = await fetch('../outputs/w/kaos-workflows-runs.json')
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error(`HTTP Error: ${response.status}`);
                                    }
                                    return response.json();
                                });
                                
                            console.log('Workflow data loaded:', successWorkflowsData.length, 'total workflows');
                            
                            if (successWorkflowsData && successWorkflowsData.length > 0) {
                                // Filter only successful workflows
                                const filteredSuccessData = successWorkflowsData.filter(run => run.conclusion === 'success');
                                console.log('Filtered successful workflows:', filteredSuccessData.length);
                                
                                // Calculate success metrics
                                const totalWorkflows = successWorkflowsData.length;
                                const successCount = filteredSuccessData.length;
                                const successRate = totalWorkflows > 0 ? (successCount / totalWorkflows * 100).toFixed(1) + '%' : '0%';
                                
                                // Calculate average execution time
                                let totalSuccessDuration = 0;
                                filteredSuccessData.forEach(run => {
                                    const duration = calculateDurationInSeconds(run.created_at, run.updated_at);
                                    totalSuccessDuration += duration;
                                });
                                const avgExecutionTime = successCount > 0 ? formatDuration(totalSuccessDuration / successCount) : 'N/A';
                                
                                // Find most common successful workflow
                                const workflowCounts = {};
                                filteredSuccessData.forEach(run => {
                                    const workflowName = run.name;
                                    if (!workflowCounts[workflowName]) {
                                        workflowCounts[workflowName] = 0;
                                    }
                                    workflowCounts[workflowName]++;
                                });
                                
                                let mostCommonWorkflow = 'None';
                                let maxCount = 0;
                                for (const [workflow, count] of Object.entries(workflowCounts)) {
                                    if (count > maxCount) {
                                        mostCommonWorkflow = workflow;
                                        maxCount = count;
                                    }
                                }
                                
                                // Process workflow data for display
                                const successes = filteredSuccessData.slice(0, 50).map(run => {
                                    return {
                                        name: run.name,
                                        duration: formatDuration(calculateDurationInSeconds(run.created_at, run.updated_at)),
                                        created_at: new Date(run.created_at).toLocaleString()
                                    };
                                });
                                
                                // Set up pagination
                                const pageSize = 50;
                                const totalItems = filteredSuccessData.length;
                                const totalPages = Math.ceil(totalItems / pageSize);
                                const currentPage = 1;
                                
                                const pagination = {
                                    start: 1,
                                    end: Math.min(pageSize, totalItems),
                                    total: totalItems,
                                    current_page: currentPage,
                                    total_pages: totalPages,
                                    is_first_page: true,
                                    is_last_page: totalPages <= 1
                                };
                                
                                // Load and render the template
                                const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlersuccess.html');
                                if (template) {
                                    let renderedTemplate = template;
                                    
                                    // Replace metrics data
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.total_successful}}/g, successCount);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.success_rate}}/g, successRate);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.common_workflow}}/g, mostCommonWorkflow);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.avg_execution_time}}/g, avgExecutionTime);
                                    
                                    // Handle the successes loop
                                    const successesMatch = renderedTemplate.match(/{{#each successes}}([\s\S]*?){{\/each}}/);
                                    if (successesMatch) {
                                        const successTemplate = successesMatch[1];
                                        const successesHtml = successes.map(success => {
                                            let row = successTemplate;
                                            for (const [key, value] of Object.entries(success)) {
                                                row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                            }
                                            return row;
                                        }).join('');
                                        
                                        renderedTemplate = renderedTemplate.replace(/{{#each successes}}[\s\S]*?{{\/each}}/, successesHtml);
                                    }
                                    
                                    // Replace pagination data
                                    for (const [key, value] of Object.entries(pagination)) {
                                        renderedTemplate = renderedTemplate.replace(new RegExp(`{{pagination\\.${key}}}`, 'g'), value);
                                    }
                                    
                                    // Handle conditional pagination buttons
                                    renderedTemplate = renderedTemplate.replace(/{{#if pagination\.is_first_page}}disabled{{\/if}}/g, 
                                        pagination.is_first_page ? 'disabled' : '');
                                    renderedTemplate = renderedTemplate.replace(/{{#if pagination\.is_last_page}}disabled{{\/if}}/g, 
                                        pagination.is_last_page ? 'disabled' : '');
                                    
                                    successSection.innerHTML = renderedTemplate;
                                    
                                    // Add event listeners for pagination
                                    const prevButton = document.getElementById('prevPage');
                                    const nextButton = document.getElementById('nextPage');
                                    
                                    if (prevButton && nextButton) {
                                        // Store the full data for pagination
                                        successSection.dataset.fullData = JSON.stringify(filteredSuccessData);
                                        
                                        prevButton.addEventListener('click', () => {
                                            if (currentPage > 1) {
                                                updateSuccessTable(filteredSuccessData, currentPage - 1, pageSize, totalPages);
                                            }
                                        });
                                        
                                        nextButton.addEventListener('click', () => {
                                            if (currentPage < totalPages) {
                                                updateSuccessTable(filteredSuccessData, currentPage + 1, pageSize, totalPages);
                                            }
                                        });
                                    }
                                }
                            } else {
                                successSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">No workflow data available</div>`;
                            }
                        } catch (error) {
                            console.error('Error processing success data:', error);
                            successSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Error processing success data: ${error.message}</div>`;
                        }
                    }
                    break;
                case 'End Workflow':
                    const workflowSection = document.querySelector('#endWorkflow');
                    if (workflowSection) {
                        workflowSection.classList.remove('hidden');
                        // Load and process the End Workflow data
                        const endWorkflowData = await window.dashboardUtils.loadJsonData('dashboard/sections/endWorkflow.json');
                        if (endWorkflowData) {
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/endWorkflow.html');
                            if (template) {
                                let renderedTemplate = template
                                    .replace('{{title}}', endWorkflowData.title)
                                    .replace('{{description}}', endWorkflowData.description)
                                    .replace('{{summary.total_projects}}', endWorkflowData.summary.total_projects)
                                    .replace('{{summary.completion_rate}}', endWorkflowData.summary.completion_rate)
                                    .replace('{{summary.avg_time}}', endWorkflowData.summary.avg_time)
                                    .replace('{{summary.last_completion}}', endWorkflowData.summary.last_completion);

                                // Handle the projects loop
                                const projectsMatch = renderedTemplate.match(/{{#each projects}}([\s\S]*?){{\/each}}/);
                                if (projectsMatch) {
                                    const projectTemplate = projectsMatch[1];
                                    const projectsHtml = endWorkflowData.projects.map(project => {
                                        let row = projectTemplate;
                                        for (const [key, value] of Object.entries(project)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each projects}}[\s\S]*?{{\/each}}/, projectsHtml);
                                }

                                workflowSection.innerHTML = renderedTemplate;
                            }
                        }
                    }
                    break;
            }

            // Update active state in navbar
            navLinks.forEach(link => {
                link.classList.remove('bg-blue-700', 'text-white');
                const icon = link.querySelector('i');
                if (icon) {
                    icon.classList.remove('text-white');
                    icon.classList.add('text-gray-600');
                }
            });

            this.classList.add('bg-blue-700', 'text-white');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.remove('text-gray-600');
                icon.classList.add('text-white');
            }
        });
    });

    // Show dashboard by default on page load
    const defaultSection = document.querySelector('#dashboard-container');
    if (defaultSection) {
        defaultSection.classList.remove('hidden');
    }
};

// Add this function to process workflow data
function processWorkflowData(runs) {
    // Calculate summary statistics
    let totalRuns = runs.length;
    let successfulRuns = runs.filter(run => run.conclusion === 'success').length;
    let totalDuration = 0;
    
    // Process each individual workflow run
    const workflows = runs.map(run => {
        const duration = calculateDurationInSeconds(run.created_at, run.updated_at);
        totalDuration += duration;
        
        return {
            id: run.id,
            name: run.name,
            run_number: run.run_number,
            head_branch: run.head_branch || 'N/A',
            head_sha: run.head_sha ? run.head_sha.substring(0, 7) : 'N/A',
            event: run.event || 'N/A',
            status: run.status || 'N/A',
            conclusion: run.conclusion || 'pending',
            created_at: formatDate(run.created_at),
            updated_at: formatDate(run.updated_at),
            duration: formatDuration(duration)
        };
    });
    
    // Sort workflows by creation date (newest first)
    workflows.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    // Summary data
    const successRate = totalRuns > 0 ? Math.round((successfulRuns / totalRuns) * 100) : 0;
    const avgDuration = totalRuns > 0 ? formatDuration(totalDuration / totalRuns) : 'N/A';
    
    return {
        title: "GitHub Actions Performance",
        description: "All Workflow Executions",
        summary: {
            total_workflows: workflows.length,
            success_rate: `${successRate}%`,
            total_runs: totalRuns,
            avg_duration: avgDuration
        },
        workflows: workflows
    };
}

// Helper function to calculate duration in seconds
function calculateDurationInSeconds(startTime, endTime) {
    if (!startTime || !endTime) return 0;
    
    const start = new Date(startTime);
    const end = new Date(endTime);
    return Math.floor((end - start) / 1000);
}

// Helper function to format duration
function formatDuration(seconds) {
    if (!seconds || isNaN(seconds)) return 'N/A';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    if (minutes < 1) {
        return `${remainingSeconds}s`;
    } else {
        return `${minutes}m ${remainingSeconds}s`;
    }
}

// Helper function to format date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleString();
}

function getStatusText(status, conclusion) {
    if (status === 'in_progress') return 'running';
    if (conclusion === 'success') return 'success';
    if (conclusion === 'failure') return 'failure';
    return status || conclusion || 'unknown';}

// Optimized function to process workflow data
function processWorkflowDataOptimized(paginatedRuns, allRuns) {
    // Calculate summary statistics from all runs
    let totalRuns = allRuns.length;
    let successfulRuns = allRuns.filter(run => run.conclusion === 'success').length;
    let totalDuration = 0;
    
    // Calculate total duration more efficiently
    for (let i = 0; i < Math.min(100, allRuns.length); i++) {
        const run = allRuns[i];
        totalDuration += calculateDurationInSeconds(run.created_at, run.updated_at);
    }
    
    // Extrapolate average if we have more than 100 runs
    if (allRuns.length > 100) {
        totalDuration = (totalDuration / 100) * allRuns.length;
    }
    
    // Process only the paginated runs for display
    const workflows = paginatedRuns.map(run => {
        const duration = calculateDurationInSeconds(run.created_at, run.updated_at);
        
        return {
            id: run.id,
            name: run.name,
            run_number: run.run_number,
            head_branch: run.head_branch || 'N/A',
            head_sha: run.head_sha ? run.head_sha.substring(0, 7) : 'N/A',
            event: run.event || 'N/A',
            status: run.status || 'N/A',
            conclusion: run.conclusion || 'pending',
            created_at: formatDate(run.created_at),
            updated_at: formatDate(run.updated_at),
            duration: formatDuration(duration)
        };
    });
    
    // Summary data
    const successRate = totalRuns > 0 ? Math.round((successfulRuns / totalRuns) * 100) : 0;
    const avgDuration = totalRuns > 0 ? formatDuration(totalDuration / totalRuns) : 'N/A';
    
    return {
        title: "GitHub Actions Performance",
        description: "All Workflow Executions",
        summary: {
            total_workflows: allRuns.length,
            success_rate: `${successRate}%`,
            total_runs: totalRuns,
            avg_duration: avgDuration
        },
        workflows: workflows
    };
}

// Function to update the workflows table with paginated data
function updateWorkflowsTable(allData, page, pageSize, totalPages) {
    const actionsSection = document.querySelector('#actionsPerformance');
    if (!actionsSection) return;
    
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = allData.slice(start, end);
    
    // Process only the current page of data
    const processedData = processWorkflowDataOptimized(paginatedData, allData);
    
    // Find the table body
    const tableBody = actionsSection.querySelector('tbody');
    if (!tableBody) return;
    
    // Update the table rows
    const workflowTemplate = actionsSection.querySelector('template') || 
                            tableBody.innerHTML.match(/<tr[^>]*>([\s\S]*?)<\/tr>/)[0];
    
    const workflowsHtml = processedData.workflows.map(workflow => {
        let row = workflowTemplate.toString();
        
        // Replace all workflow properties
        for (const [key, value] of Object.entries(workflow)) {
            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }
        
        // Handle conditional formatting for status and conclusion
        row = row.replace(/{{#if \(eq status 'completed'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.status === 'completed' ? '$1' : '');
        row = row.replace(/{{#if \(eq status 'in_progress'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.status === 'in_progress' ? '$1' : '');
        row = row.replace(/{{#if \(eq status 'queued'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.status === 'queued' ? '$1' : '');
            
        row = row.replace(/{{#if \(eq conclusion 'success'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.conclusion === 'success' ? '$1' : '');
        row = row.replace(/{{#if \(eq conclusion 'failure'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.conclusion === 'failure' ? '$1' : '');
        row = row.replace(/{{#if \(eq conclusion 'skipped'\)}}([\s\S]*?){{\/if}}/g, 
            workflow.conclusion === 'skipped' ? '$1' : '');
        row = row.replace(/{{#if \(eq conclusion null\)}}([\s\S]*?){{\/if}}/g, 
            workflow.conclusion === 'pending' ? '$1' : '');
        
        return row;
    }).join('');
    
    tableBody.innerHTML = workflowsHtml;
    
    // Update pagination UI
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    if (prevButton) {
        prevButton.disabled = page <= 1;
    }
    
    if (nextButton) {
        nextButton.disabled = page >= totalPages;
    }
    
    // Update pagination text
    const paginationText = actionsSection.querySelector('.text-sm.text-gray-700');
    if (paginationText) {
        const startItem = (page - 1) * pageSize + 1;
        const endItem = Math.min(page * pageSize, allData.length);
        paginationText.innerHTML = `
            Showing <span class="font-medium">${startItem}</span> to <span class="font-medium">${endItem}</span> of <span class="font-medium">${allData.length}</span> results
        `;
    }
    
    // Update page counter
    const pageCounter = actionsSection.querySelector('.px-3.py-1:not(button)');
    if (pageCounter) {
        pageCounter.textContent = `Page ${page} of ${totalPages}`;
    }
}
