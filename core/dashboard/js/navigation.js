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
                // En la función setupNavigation, find the case for 'Actions Performance':
                case 'Actions Performance':
                    const actionsSection = document.querySelector('#actionsPerformance');
                    if (actionsSection) {
                        actionsSection.classList.remove('hidden');
                        
                        // Cargar datos de kaos-workflows-runs.json en lugar de actionsPerformance.json
                        const workflowsData = await fetch('../outputs/w/kaos-workflows-runs.json')
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Error HTTP: ${response.status}`);
                                }
                                return response.json();
                            })
                            .catch(error => {
                                console.error('Error loading workflow runs:', error);
                                return [];
                            });
                            
                        console.log('Workflow data loaded:', workflowsData.length, 'workflows');
                        
                        if (workflowsData && workflowsData.length > 0) {
                            // Procesar los datos para el formato que espera el template
                            const processedData = processWorkflowData(workflowsData);
                            
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsperformance.html');
                            if (template) {
                                // Aplicar los datos al template
                                let renderedTemplate = template;
                                
                                // Reemplazar summary data
                                for (const [key, value] of Object.entries(processedData.summary)) {
                                    renderedTemplate = renderedTemplate.replace(`{{summary.${key}}}`, value);
                                }
                                
                                // Reemplazar title y description
                                renderedTemplate = renderedTemplate.replace('{{title}}', processedData.title);
                                renderedTemplate = renderedTemplate.replace('{{description}}', processedData.description);
                                
                                // Manejar el bucle de workflows
                                const workflowsMatch = renderedTemplate.match(/{{#each workflows}}([\s\S]*?){{\/each}}/);
                                if (workflowsMatch) {
                                    const workflowTemplate = workflowsMatch[1];
                                    const workflowsHtml = processedData.workflows.map(workflow => {
                                        let row = workflowTemplate;
                                        for (const [key, value] of Object.entries(workflow)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        // Manejar estilos basados en el estado
                                        row = row.replace(/{{#if \(eq status 'success'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'success' ? '$1' : '');
                                        row = row.replace(/{{#if \(eq status 'running'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'running' ? '$1' : '');
                                        row = row.replace(/{{#if \(eq status 'failure'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'failure' ? '$1' : '');
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each workflows}}[\s\S]*?{{\/each}}/, workflowsHtml);
                                }
                                
                                actionsSection.innerHTML = renderedTemplate;
                            }
                        } else {
                            actionsSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">No se pudieron cargar los datos de workflows</div>`;
                        }
                    }
                    break;
                // In the setupNavigation function, find the case for 'Lead Time'
                case 'Lead Time':
                    const leadTimeSection = document.querySelector('#leadTime');
                    if (leadTimeSection) {
                        leadTimeSection.classList.remove('hidden');
                        
                        // Fetch real workflow data from kaos-workflows-runs.json
                        fetch('../outputs/w/kaos-workflows-runs.json')
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Error HTTP: ${response.status}`);
                                }
                                return response.json();
                            })
                            .then(workflowsData => {
                                console.log('Workflow data loaded for lead time:', workflowsData.length, 'workflows');
                                
                                // Process the data for lead time metrics
                                const processedData = processLeadTimeData(workflowsData);
                                
                                // Render the lead time section with the processed data
                                const html = `
                                    <div class="bg-white rounded-lg shadow-md p-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Lead Time Analysis</h2>
                                        <p class="text-gray-600 mb-6">Análisis del tiempo transcurrido desde el commit hasta el despliegue</p>
                                        
                                        <!-- Metrics -->
                                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                                            <div class="bg-blue-100 p-4 rounded-lg">
                                                <h3 class="font-bold text-blue-800">Total Workflows</h3>
                                                <p class="text-3xl font-bold text-blue-600">${processedData.metrics.totalWorkflows}</p>
                                            </div>
                                            <div class="bg-green-100 p-4 rounded-lg">
                                                <h3 class="font-bold text-green-800">Avg Lead Time</h3>
                                                <p class="text-3xl font-bold text-green-600">${processedData.metrics.avgLeadTime}</p>
                                            </div>
                                            <div class="bg-yellow-100 p-4 rounded-lg">
                                                <h3 class="font-bold text-yellow-800">Max Lead Time</h3>
                                                <p class="text-3xl font-bold text-yellow-600">${processedData.metrics.maxLeadTime}</p>
                                            </div>
                                            <div class="bg-purple-100 p-4 rounded-lg">
                                                <h3 class="font-bold text-purple-800">Min Lead Time</h3>
                                                <p class="text-3xl font-bold text-purple-600">${processedData.metrics.minLeadTime}</p>
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
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    ${processedData.recentExecutions.map(execution => `
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
                                
                                leadTimeSection.innerHTML = html;
                            })
                            .catch(error => {
                                console.error('Error loading workflow runs for lead time:', error);
                                leadTimeSection.innerHTML = `
                                    <div class="bg-white rounded-lg shadow-md p-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Lead Time Analysis</h2>
                                        <div class="bg-red-100 p-4 rounded-lg text-red-700">
                                            Error loading workflow data: ${error.message}
                                        </div>
                                    </div>
                                `;
                            });
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
                                const errorType = run.name;
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
                                    if (htmlContent.includes('{{metrics.total_failures}}')) {
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
                    const handlerSuccessSection = document.querySelector('#handlerSuccess');
                    if (handlerSuccessSection) {
                        handlerSuccessSection.classList.remove('hidden');
                        
                        // Load data from kaos-workflows-runs.json
                        const successWorkflowsData = await fetch('../outputs/w/kaos-workflows-runs.json')
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
                            
                        console.log('Workflow data loaded:', successWorkflowsData.length, 'total workflows');
                        
                        if (successWorkflowsData && successWorkflowsData.length > 0) {
                            // Filter only successful workflows
                            const filteredSuccessData = successWorkflowsData.filter(run => run.conclusion === 'success');
                            console.log('Filtered successful workflows:', filteredSuccessData.length);
                            
                            // Process data for the template format
                            const processedSuccessData = processWorkflowData(filteredSuccessData);
                            processedSuccessData.title = "Successful Workflows";
                            processedSuccessData.description = "Workflows that completed successfully";
                            
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsperformance.html');
                            if (template) {
                                // Apply data to the template
                                let renderedTemplate = template;
                                
                                // Replace summary data
                                for (const [key, value] of Object.entries(processedSuccessData.summary)) {
                                    renderedTemplate = renderedTemplate.replace(`{{summary.${key}}}`, value);
                                }
                                
                                // Replace title and description
                                renderedTemplate = renderedTemplate.replace('{{title}}', processedSuccessData.title);
                                renderedTemplate = renderedTemplate.replace('{{description}}', processedSuccessData.description);
                                
                                // Handle workflows loop
                                const workflowsMatch = renderedTemplate.match(/{{#each workflows}}([\s\S]*?){{\/each}}/);
                                if (workflowsMatch) {
                                    const workflowTemplate = workflowsMatch[1];
                                    const workflowsHtml = processedSuccessData.workflows.map(workflow => {
                                        let row = workflowTemplate;
                                        for (const [key, value] of Object.entries(workflow)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        // Handle status-based styles
                                        row = row.replace(/{{#if \(eq status 'success'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'success' ? '$1' : '');
                                        row = row.replace(/{{#if \(eq status 'running'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'running' ? '$1' : '');
                                        row = row.replace(/{{#if \(eq status 'failure'\)}}(.*?){{\/if}}/g, 
                                            workflow.status === 'failure' ? '$1' : '');
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each workflows}}[\s\S]*?{{\/each}}/, workflowsHtml);
                                }
                                
                                handlerSuccessSection.innerHTML = renderedTemplate;
                            }
                        } else {
                            handlerSuccessSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Could not load workflow data</div>`;
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
    // Group by workflow name
    const workflowMap = {};
    let totalRuns = 0;
    let successfulRuns = 0;
    let totalDuration = 0;
    
    runs.forEach(run => {
        totalRuns++;
        if (run.conclusion === 'success') {
            successfulRuns++;
        }
        
        const duration = calculateDurationInSeconds(run.created_at, run.updated_at);
        totalDuration += duration;
        
        if (!workflowMap[run.name]) {
            workflowMap[run.name] = {
                name: run.name,
                status: getStatusText(run.status, run.conclusion),
                runs: [],
                success_count: 0,
                total_runs: 0,
                last_run: run.created_at
            };
        }
        
        workflowMap[run.name].total_runs++;
        if (run.conclusion === 'success') {
            workflowMap[run.name].success_count++;
        }
        
        // Update last status if more recent
        if (new Date(run.created_at) > new Date(workflowMap[run.name].last_run)) {
            workflowMap[run.name].last_run = run.created_at;
            workflowMap[run.name].status = getStatusText(run.status, run.conclusion);
            workflowMap[run.name].duration = formatDuration(duration);
        }
    });
    
    // Calculate statistics
    const workflows = Object.values(workflowMap).map(workflow => {
        const successRate = workflow.total_runs > 0 
            ? Math.round((workflow.success_count / workflow.total_runs) * 100) 
            : 0;
            
        return {
            name: workflow.name,
            status: workflow.status,
            duration: workflow.duration || 'N/A',
            success_rate: `${successRate}%`,
            last_run: formatDate(workflow.last_run),
            total_runs: workflow.total_runs
        };
    });
    
    // Summary data
    const successRate = totalRuns > 0 ? Math.round((successfulRuns / totalRuns) * 100) : 0;
    
    return {
        title: "GitHub Actions Performance",
        description: "Recent Workflow Executions",
        summary: {
            total_workflows: workflows.length,
            success_rate: `${successRate}%`,
            total_runs: totalRuns,
            avg_duration: formatDuration(totalDuration / totalRuns)
        },
        workflows: workflows
    };
}

function calculateDurationInSeconds(start, end) {
    const startTime = new Date(start);
    const endTime = new Date(end);
    return (endTime - startTime) / 1000; // in seconds
}

function formatDuration(seconds) {
    if (isNaN(seconds) || seconds <= 0) return 'N/A';
    
    if (seconds < 60) return `${Math.round(seconds)}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    return `${Math.round(seconds / 3600)}h`;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getStatusText(status, conclusion) {
    if (status === 'in_progress') return 'running';
    if (conclusion === 'success') return 'success';
    if (conclusion === 'failure') return 'failure';
    return status || conclusion || 'unknown';
}


// Process workflow data for lead time metrics
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
        title: "Lead Time Analysis",
        description: "Análisis del tiempo transcurrido desde el commit hasta el despliegue",
        metrics: {
            totalWorkflows: {
                title: "Total Workflows",
                value: totalWorkflows.toString()
            },
            avgLeadTime: {
                title: "Avg Lead Time",
                value: formatDuration(avgLeadTimeSeconds)
            },
            maxLeadTime: {
                title: "Max Lead Time",
                value: formatDuration(maxLeadTimeSeconds)
            },
            minLeadTime: {
                title: "Min Lead Time",
                value: formatDuration(minLeadTimeSeconds)
            }
        },
        recentExecutions: recentExecutions
    };
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
