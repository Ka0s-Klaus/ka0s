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
                        // Load and process the Actions Performance data
                        const actionsData = await window.dashboardUtils.loadJsonData('dashboard/sections/actionsPerformance.json');
                        if (actionsData) {
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsPerformance.html');
                            if (template) {
                                // Replace all template variables with actual data
                                let renderedTemplate = template;
                                
                                // Replace summary data
                                for (const [key, value] of Object.entries(actionsData.summary)) {
                                    renderedTemplate = renderedTemplate.replace(`{{summary.${key}}}`, value);
                                }
                                
                                // Replace title and description
                                renderedTemplate = renderedTemplate.replace('{{title}}', actionsData.title);
                                renderedTemplate = renderedTemplate.replace('{{description}}', actionsData.description);
                                
                                // Handle the workflows loop
                                const workflowsMatch = renderedTemplate.match(/{{#each workflows}}([\s\S]*?){{\/each}}/);
                                if (workflowsMatch) {
                                    const workflowTemplate = workflowsMatch[1];
                                    const workflowsHtml = actionsData.workflows.map(workflow => {
                                        let row = workflowTemplate;
                                        for (const [key, value] of Object.entries(workflow)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        // Handle status-based styling
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
                        }
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
                    document.querySelector('#backLogs')?.classList.remove('hidden');
                    break;
                case 'Handler Failure':
                    const failureSection = document.querySelector('#handlerFailure');
                    if (failureSection) {
                        failureSection.classList.remove('hidden');
                        // Load and process the Handler Failure data
                        const failureData = await window.dashboardUtils.loadJsonData('dashboard/sections/handlerFailure.json');
                        if (failureData) {
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerFailure.html');
                            if (template) {
                                // Replace all template variables with actual data
                                let renderedTemplate = template;
                                
                                // Replace metrics
                                for (const [key, value] of Object.entries(failureData.metrics)) {
                                    renderedTemplate = renderedTemplate.replace(`{{metrics.${key}}}`, value);
                                }
                                
                                // Handle the failures loop
                                const failuresMatch = renderedTemplate.match(/{{#each failures}}([\s\S]*?){{\/each}}/);
                                if (failuresMatch) {
                                    const failureTemplate = failuresMatch[1];
                                    const failuresHtml = failureData.failures.map(failure => {
                                        let row = failureTemplate;
                                        for (const [key, value] of Object.entries(failure)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each failures}}[\s\S]*?{{\/each}}/, failuresHtml);
                                }
                                
                                failureSection.innerHTML = renderedTemplate;
                            }
                        }
                    }
                    break;
                case 'Handler Success':
                    const successSection = document.querySelector('#handlerSuccess');
                    if (successSection) {
                        successSection.classList.remove('hidden');
                        // Load and process the Handler Success data
                        const successData = await window.dashboardUtils.loadJsonData('dashboard/sections/handlerSuccess.json');
                        if (successData) {
                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerSuccess.html');
                            if (template) {
                                let renderedTemplate = template
                                    .replace('{{title}}', successData.title)
                                    .replace('{{description}}', successData.description)
                                    .replace('{{summary.total_successful}}', successData.summary.total_successful)
                                    .replace('{{summary.success_rate}}', successData.summary.success_rate)
                                    .replace('{{summary.avg_duration}}', successData.summary.avg_duration)
                                    .replace('{{summary.last_success}}', successData.summary.last_success);

                                // Handle the processes loop
                                const processesMatch = renderedTemplate.match(/{{#each processes}}([\s\S]*?){{\/each}}/);
                                if (processesMatch) {
                                    const processTemplate = processesMatch[1];
                                    const processesHtml = successData.processes.map(process => {
                                        let row = processTemplate;
                                        for (const [key, value] of Object.entries(process)) {
                                            row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                        }
                                        return row;
                                    }).join('');
                                    renderedTemplate = renderedTemplate.replace(/{{#each processes}}[\s\S]*?{{\/each}}/, processesHtml);
                                }

                                successSection.innerHTML = renderedTemplate;
                            }
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