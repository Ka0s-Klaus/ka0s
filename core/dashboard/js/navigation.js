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
            // Show the appropriate section
        switch(linkText) {
            case 'Inicio':
                document.querySelector('#dashboard-container')?.classList.remove('hidden');
                break;
            case 'Actions Performance':
                const actionsSection = document.querySelector('#actionsPerformance');
                if (actionsSection) {
                    actionsSection.classList.remove('hidden');
                    
                    // Create pagination state object
                    const paginationState = {
                        currentPage: 1,
                        pageSize: 10,
                        totalPages: 0,
                        workflowsData: null,
                        template: null
                    };

                    // Function to render page
                    const renderPage = async () => {
                        const start = (paginationState.currentPage - 1) * paginationState.pageSize;
                        const end = start + paginationState.pageSize;
                        const paginatedData = paginationState.workflowsData.slice(start, end);
                        
                        const processedData = processWorkflowDataOptimized(paginatedData, paginationState.workflowsData);
                        let renderedTemplate = paginationState.template;
                    
                        // Add pagination data to the template context
                        processedData.pagination = {
                            start: start + 1,
                            end: Math.min(end, paginationState.workflowsData.length),
                            total: paginationState.workflowsData.length,
                            currentPage: paginationState.currentPage,
                            totalPages: paginationState.totalPages,
                            isFirstPage: paginationState.currentPage <= 1,
                            isLastPage: paginationState.currentPage >= paginationState.totalPages
                        };
                    
                        // Replace summary data
                        for (const [key, value] of Object.entries(processedData.summary)) {
                            renderedTemplate = renderedTemplate.replace(new RegExp(`{{summary\\.${key}}}`, 'g'), value);
                        }

                        // Replace title and description
                        renderedTemplate = renderedTemplate.replace(/{{title}}/g, processedData.title);
                        renderedTemplate = renderedTemplate.replace(/{{description}}/g, processedData.description);

                        // Handle workflows loop
                        const workflowsMatch = renderedTemplate.match(/{{#each workflows}}([\s\S]*?){{\/each}}/);
                        if (workflowsMatch) {
                            const workflowTemplate = workflowsMatch[1];
                            const workflowsHtml = processedData.workflows.map(workflow => {
                                let row = workflowTemplate;
                                
                                // Replace properties
                                for (const [key, value] of Object.entries(workflow)) {
                                    row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                }
                                
                                // Handle conditional formatting
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
                        for (const [key, value] of Object.entries(processedData.pagination)) {
                            renderedTemplate = renderedTemplate.replace(new RegExp(`{{pagination\\.${key}}}`, 'g'), value);
                        }
                    
                        actionsSection.innerHTML = renderedTemplate;
                    
                        // Add event listeners for pagination
                        document.getElementById('prevPage')?.addEventListener('click', () => {
                            if (paginationState.currentPage > 1) {
                                paginationState.currentPage--;
                                renderPage();
                            }
                        });
                    
                        document.getElementById('nextPage')?.addEventListener('click', () => {
                            if (paginationState.currentPage < paginationState.totalPages) {
                                paginationState.currentPage++;
                                renderPage();
                            }
                        });
                    };

                    // Initial load
                    const loadData = async () => {
                        try {
                            const response = await fetch('dashboard/data/kaos-workflows-runs.json')
                                .then(response => !response.ok ? fetch('../outputs/w/kaos-workflows-runs.json') : response);

                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }

                            paginationState.workflowsData = await response.json();
                            paginationState.totalPages = Math.ceil(paginationState.workflowsData.length / paginationState.pageSize);
                            paginationState.template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsperformance.html');

                            if (paginationState.template) {
                                await renderPage();
                            }
                        } catch (error) {
                            console.error('Error loading workflow data:', error);
                            actionsSection.innerHTML = `<div class="bg-red-100 p-4 rounded-lg text-red-700">Error loading workflow data: ${error.message}</div>`;
                        }
                    };

                    loadData();
                }
                break;
                // In the setupNavigation function, find the case for 'Lead Time'
                case 'Lead Time':
                    const leadTimeSection = document.querySelector('#leadTime');
                    if (leadTimeSection) {
                        leadTimeSection.classList.remove('hidden');
                        
                        // Try to fetch workflow data with fallback path
                        fetch('dashboard/data/kaos-workflows-runs.json')
                            .then(response => {
                                if (!response.ok) {
                                    console.log('Primary workflow data file not found, trying fallback location...');
                                    // Try the fallback location
                                    return fetch('../outputs/w/kaos-workflows-runs.json');
                                }
                                return response;
                            })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Error HTTP: ${response.status}`);
                                }
                                return response.json();
                            })
                            .then(async workflowsData => {
                                console.log('Workflow data loaded for lead time:', workflowsData.length, 'workflows');
                                
                                // Process the data for lead time metrics
                                const processedData = processLeadTimeData(workflowsData);
                                
                                // Load template instead of embedding HTML
                                const template = await window.dashboardUtils.loadHtmlTemplate('templates/leadtime.html');
                                if (template) {
                                    let renderedTemplate = template;
                                    
                                    // Replace metrics data
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.totalWorkflows}}/g, processedData.metrics.totalWorkflows);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.avgLeadTime}}/g, processedData.metrics.avgLeadTime);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.maxLeadTime}}/g, processedData.metrics.maxLeadTime);
                                    renderedTemplate = renderedTemplate.replace(/{{metrics\.minLeadTime}}/g, processedData.metrics.minLeadTime);
                                    
                                    // Handle the executions loop
                                    const executionsMatch = renderedTemplate.match(/{{#each recentExecutions}}([\s\S]*?){{\/each}}/);
                                    if (executionsMatch) {
                                        const executionTemplate = executionsMatch[1];
                                        const executionsHtml = processedData.recentExecutions.map(execution => {
                                            let row = executionTemplate;
                                            for (const [key, value] of Object.entries(execution)) {
                                                row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                            }
                                            // Handle status-specific styling
                                            row = row.replace(/{{#if \(eq status 'Success'\)}}([\s\S]*?){{\/if}}/g, 
                                                execution.status === 'Success' ? '$1' : '');
                                            row = row.replace(/{{#if \(eq status 'Failed'\)}}([\s\S]*?){{\/if}}/g, 
                                                execution.status === 'Failed' ? '$1' : '');
                                            return row;
                                        }).join('');
                                        renderedTemplate = renderedTemplate.replace(/{{#each recentExecutions}}[\s\S]*?{{\/each}}/, executionsHtml);
                                    }
                                    
                                    leadTimeSection.innerHTML = renderedTemplate;
                                } else {
                                    // Fallback if template can't be loaded
                                    leadTimeSection.innerHTML = `
                                        <div class="bg-red-100 p-4 rounded-lg text-red-700">
                                            Could not load lead time template
                                        </div>
                                    `;
                                }
                            })
                            .catch(error => {
                                console.error('Error loading workflow runs for lead time:', error);
                                leadTimeSection.innerHTML = `
                                    <div class="bg-red-100 p-4 rounded-lg text-red-700">
                                        Error loading workflow data: ${error.message}
                                    </div>
                                `;
                            });
                    }
                    break;
                    case 'Backlogs':
                        const backLogsSection = document.querySelector('#backLogs');
                        if (backLogsSection) {
                            backLogsSection.classList.remove('hidden');
                            
                            // Show loading indicator
                            backLogsSection.innerHTML = `
                                <div class="flex justify-center items-center h-64">
                                    <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                                    <p class="ml-4 text-lg text-gray-600">Loading issues data...</p>
                                </div>
                            `;
                            
                            // Load and process the Backlogs data
                                                        // Load and process the Backlogs data with fallback paths
                                                        let backLogsData;
                                                        try {
                                                            backLogsData = await window.dashboardUtils.loadJsonData('dashboard/sections/backLogs.json');
                                                            if (!backLogsData) {
                                                                console.log('Primary backLogs config file not found, trying fallback location...');
                                                                backLogsData = await fetch('../sections/backLogs.json')
                                                                    .then(response => response.ok ? response.json() : null);
                                                            }
                                                        } catch (error) {
                                                            console.error('Error loading backLogs config:', error);
                                                        }
                                                        
                                                        let backLogsDataReal;
                                                        try {
                                                            backLogsDataReal = await window.dashboardUtils.loadJsonData('dashboard/data/kaos-issue.json');
                                                            if (!backLogsDataReal) {
                                                                console.log('Primary issues data file not found, trying fallback location...');
                                                                backLogsDataReal = await fetch('../outputs/w/kaos-issue.json')
                                                                    .then(response => response.ok ? response.json() : null);
                                                            }
                                                        } catch (error) {
                                                            console.error('Error loading issues data:', error);
                                                        }
                            
                                                        if (backLogsData && backLogsDataReal) {
                                                            const template = await window.dashboardUtils.loadHtmlTemplate('templates/backLogs.html');
                                
                                if (template) {
                                    // Replace all template variables with actual data
                                    let renderedTemplate = template;
                                    
                                    // Replace basic template variables
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.title }}/g, backLogsData.title);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.description }}/g, backLogsData.description);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target1 }}/g, backLogsData.target.target1.title);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target1.description }}/g, backLogsData.target.target1.description);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target2 }}/g, backLogsData.target.target2.title);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target2.description }}/g, backLogsData.target.target2.description);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target3 }}/g, backLogsData.target.target3.title);
                                    renderedTemplate = renderedTemplate.replace(/{{ backLogs.target3.description }}/g, backLogsData.target.target3.description);
                                    
                                    // Render the template first
                                    backLogsSection.innerHTML = renderedTemplate;
                                    
                                    // Now populate the columns with actual issue data
                                    const issues = Array.isArray(backLogsDataReal[0]) ? backLogsDataReal[0] : backLogsDataReal;
                                    
                                    // Filter out issues with the error title
                                    const filteredIssues = issues.filter(issue => 
                                        !issue.title.includes("[Ka0S] Error detected in [Ka0S] Workflow Statistics Summary")
                                    );
                                    
                                    // Get the columns
                                    const todoColumn = document.getElementById('todo-column');
                                    const inProgressColumn = document.getElementById('in-progress-column');
                                    const doneColumn = document.getElementById('done-column');
                                    
                                    // Counters for each column
                                    let todoCount = 0;
                                    let inProgressCount = 0;
                                    let doneCount = 0;
                                    
                                    // Process each issue and add it to the appropriate column
                                    filteredIssues.forEach(issue => {
                                        // Determine which column to place the issue in based on projectItems status
                                        let targetColumn;
                                        let columnType;
                                        let columnColor;
                                        
                                        // Check if the issue has projectItems with status
                                        if (issue.projectItems && issue.projectItems.length > 0 && issue.projectItems[0].status) {
                                            const status = issue.projectItems[0].status.name;
                                            
                                            if (status === "Done") {
                                                targetColumn = doneColumn;
                                                columnType = 'done';
                                                columnColor = 'purple';
                                                doneCount++;
                                            } else if (status === "In Progress") {
                                                targetColumn = inProgressColumn;
                                                columnType = 'in-progress';
                                                columnColor = 'yellow';
                                                inProgressCount++;
                                            } else {
                                                targetColumn = todoColumn;
                                                columnType = 'todo';
                                                columnColor = 'blue';
                                                todoCount++;
                                            }
                                        } else {
                                            // Default to todo if no status is found
                                            targetColumn = todoColumn;
                                            columnType = 'todo';
                                            columnColor = 'blue';
                                            todoCount++;
                                        }
                                        
                                        // Create the card element
                                        const card = document.createElement('div');
                                        card.className = `bg-${columnColor}-50 border rounded-lg p-3 mb-2 border-l-4 border-${columnColor}-500 hover:bg-gray-50 cursor-pointer`;
                                        card.dataset.issueId = issue.number;
                                        
                                        // Format date
                                        const createdDate = new Date(issue.createdAt);
                                        const formattedDate = createdDate.toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        });
                                        
                                        // Create card content
                                        card.innerHTML = `
                                            <div class="flex items-center mb-2">
                                                <div class="w-4 h-4 rounded-full bg-${columnColor}-500 flex items-center justify-center mr-2">
                                                    <div class="w-2 h-2 rounded-full bg-white"></div>
                                                </div>
                                                <span class="text-blue-600 text-sm">ka0s #${issue.number}</span>
                                            </div>
                                            <h3 class="font-medium text-gray-800 mb-2">${issue.title}</h3>
                                            <div class="flex flex-wrap gap-1 mb-2">
                                                ${issue.labels && issue.labels.map ? issue.labels.map(label => 
                                                    `<span class="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">${label.name}</span>`
                                                ).join('') : ''}
                                                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs flex items-center">
                                                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                                    </svg>
                                                    ${formattedDate}
                                                </span>
                                            </div>
                                            <div class="flex justify-end">
                                                <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <span class="text-xs text-gray-600">${issue.author ? (issue.author.name ? issue.author.name.substring(0, 2) : issue.author.login.substring(0, 2)) : 'NA'}</span>
                                                </div>
                                            </div>
                                        `;
                                        
                                        // Add click event to show issue details
                                        card.addEventListener('click', () => {
                                            // Get modal elements
                                            const taskModal = document.getElementById('taskModal');
                                            const modalTaskTitle = document.getElementById('modalTaskTitle');
                                            const modalTaskId = document.getElementById('modalTaskId');
                                            const modalTaskDescription = document.getElementById('modalTaskDescription');
                                            const modalTaskTags = document.getElementById('modalTaskTags');
                                            const commentsList = document.getElementById('commentsList');
                                            
                                            // Update modal content
                                            modalTaskTitle.textContent = issue.title;
                                            modalTaskId.textContent = `ka0s #${issue.number}`;
                                            modalTaskDescription.textContent = issue.body || 'No description provided.';
                                            
                                            // Clear previous tags and add new ones
                                            modalTaskTags.innerHTML = '';
                                            if (issue.labels && issue.labels.map) {
                                                issue.labels.forEach(label => {
                                                    const tagSpan = document.createElement('span');
                                                    tagSpan.className = 'px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs';
                                                    tagSpan.textContent = label.name;
                                                    modalTaskTags.appendChild(tagSpan);
                                                });
                                            }
                                            
                                            // Clear previous comments and add new ones
                                            commentsList.innerHTML = '';
                                            if (issue.comments && issue.comments.length > 0) {
                                                issue.comments.forEach(comment => {
                                                    const commentDiv = document.createElement('div');
                                                    commentDiv.className = 'bg-gray-50 p-3 rounded-lg';
                                                    
                                                    const commentHeader = document.createElement('div');
                                                    commentHeader.className = 'flex items-center mb-2';
                                                    
                                                    const authorSpan = document.createElement('span');
                                                    authorSpan.className = 'font-medium text-gray-800';
                                                    authorSpan.textContent = comment.author ? (comment.author.name || comment.author.login) : 'Unknown';
                                                    
                                                    const dateSpan = document.createElement('span');
                                                    dateSpan.className = 'text-xs text-gray-500 ml-2';
                                                    const commentDate = new Date(comment.createdAt);
                                                    dateSpan.textContent = commentDate.toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    });
                                                    
                                                    commentHeader.appendChild(authorSpan);
                                                    commentHeader.appendChild(dateSpan);
                                                    
                                                    const commentBody = document.createElement('p');
                                                    commentBody.className = 'text-gray-700';
                                                    commentBody.textContent = comment.body;
                                                    
                                                    commentDiv.appendChild(commentHeader);
                                                    commentDiv.appendChild(commentBody);
                                                    
                                                    commentsList.appendChild(commentDiv);
                                                });
                                            } else {
                                                commentsList.innerHTML = '<p class="text-gray-500">No comments yet.</p>';
                                            }
                                            
                                            // Show the modal
                                            taskModal.classList.remove('hidden');
                                            
                                            // Add event listener to close modal
                                            const closeModal = document.getElementById('closeModal');
                                            closeModal.addEventListener('click', () => {
                                                taskModal.classList.add('hidden');
                                            });
                                            
                                            // Close modal when clicking outside
                                            taskModal.addEventListener('click', (e) => {
                                                if (e.target === taskModal) {
                                                    taskModal.classList.add('hidden');
                                                }
                                            });
                                        });
                                        
                                        // Add the card to the appropriate column
                                        targetColumn.appendChild(card);
                                    });
                                    
                                    // Update the counters
                                    document.getElementById('todo-count').textContent = todoCount;
                                    document.getElementById('in-progress-count').textContent = inProgressCount;
                                    document.getElementById('done-count').textContent = doneCount;
                                } else {
                                    backLogsSection.innerHTML = `
                                        <div class="bg-red-100 p-4 rounded-lg text-red-700">
                                            Error: Could not load backLogs template
                                        </div>
                                    `;
                                }
                            } else {
                                backLogsSection.innerHTML = `
                                    <div class="bg-red-100 p-4 rounded-lg text-red-700">
                                        Error: Could not load backLogs data
                                    </div>
                                `;
                            }
                        }
                        break;

                // ... existing code ...

case 'Handler Failure':
    const failureSection = document.querySelector('#handlerFailure');
    if (failureSection) {
        failureSection.classList.remove('hidden');
        
        // Show loading indicator
        failureSection.innerHTML = `
            <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
                <p class="ml-4 text-lg text-gray-600">Loading failure data...</p>
            </div>
        `;

        try {
            // Try to fetch workflow data with fallback path
            const failureWorkflowsData = await fetch('dashboard/data/kaos-workflows-runs.json')
                .then(response => {
                    if (!response.ok) {
                        console.log('Primary workflow data file not found for failure handler, trying fallback location...');
                        // Try the fallback location
                        return fetch('../outputs/w/kaos-workflows-runs.json');
                    }
                    return response;
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP Error: ${response.status}`);
                    }
                    return response.json();
                });

            if (failureWorkflowsData && failureWorkflowsData.length > 0) {
                const filteredFailureData = failureWorkflowsData.filter(run => run.conclusion === 'failure');
                
                // Calculate most common error
                const errorCounts = {};
                filteredFailureData.forEach(run => {
                    // Extract error message from the run data
                    const errorType = run.error_message || run.conclusion_message || run.event || 'Unknown';
                    errorCounts[errorType] = (errorCounts[errorType] || 0) + 1;
                });
                
                let mostCommonError = 'None';
                let maxErrorCount = 0;
                for (const [error, count] of Object.entries(errorCounts)) {
                    if (count > maxErrorCount) {
                        mostCommonError = error;
                        maxErrorCount = count;
                    }
                }
                // Set up pagination
                const pageSize = 10;
                const totalPages = Math.ceil(filteredFailureData.length / pageSize);
                let currentPage = 1;

                // Function to render a specific page
                async function renderFailurePage(page) {
                    const start = (page - 1) * pageSize;
                    const end = start + pageSize;
                    const paginatedFailures = filteredFailureData.slice(start, end);

                    // Calculate metrics
                    const totalWorkflows = failureWorkflowsData.length;
                    const failureCount = filteredFailureData.length;
                    const failureRatio = totalWorkflows > 0 ? (failureCount / totalWorkflows * 100).toFixed(1) : 0;
                    
                    let totalFailureDuration = 0;
                    filteredFailureData.forEach(run => {
                        totalFailureDuration += calculateDurationInSeconds(run.created_at, run.updated_at);
                    });
                    const avgFailureTime = failureCount > 0 ? formatDuration(totalFailureDuration / failureCount) : 'N/A';

                    const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerFailure.html');
                    if (template) {
                        let renderedTemplate = template;
                        
                        // Replace metrics data
                        renderedTemplate = renderedTemplate.replace(/{{metrics\.total_failed}}/g, failureCount);
                        renderedTemplate = renderedTemplate.replace(/{{metrics\.total_failures}}/g, failureCount);
                        renderedTemplate = renderedTemplate.replace(/{{metrics\.failure_rate}}/g, `${failureRatio}%`);
                        renderedTemplate = renderedTemplate.replace(/{{metrics\.avg_failure_time}}/g, avgFailureTime);
                        renderedTemplate = renderedTemplate.replace(/{{metrics\.most_common_error}}/g, mostCommonError);
                        // Handle the failures loop
                        const failuresMatch = renderedTemplate.match(/{{#each failures}}([\s\S]*?){{\/each}}/);
                        if (failuresMatch) {
                            const failureTemplate = failuresMatch[1];
                            const failuresHtml = paginatedFailures.map(failure => {
                                let row = failureTemplate;
                                row = row.replace(/{{workflow_name}}/g, failure.name);
                                row = row.replace(/{{error_type}}/g, failure.event || 'Unknown');
                                row = row.replace(/{{time}}/g, formatDate(failure.created_at));
                                return row;
                            }).join('');
                            
                            renderedTemplate = renderedTemplate.replace(/{{#each failures}}[\s\S]*?{{\/each}}/, failuresHtml);
                        }

                        // Update pagination data
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.current_page}}/g, currentPage);
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.total_pages}}/g, totalPages);
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.start}}/g, start + 1);
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.end}}/g, Math.min(end, filteredFailureData.length));
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.total}}/g, filteredFailureData.length);
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.is_first_page}}/g, currentPage === 1);
                        renderedTemplate = renderedTemplate.replace(/{{pagination\.is_last_page}}/g, currentPage === totalPages);

                        failureSection.innerHTML = renderedTemplate;

                        // Add pagination event listeners
                        const prevButton = failureSection.querySelector('#prevPage');
                        const nextButton = failureSection.querySelector('#nextPage');

                        if (prevButton) {
                            prevButton.disabled = currentPage === 1;
                            prevButton.addEventListener('click', () => {
                                if (currentPage > 1) {
                                    currentPage--;
                                    renderFailurePage(currentPage);
                                }
                            });
                        }

                        if (nextButton) {
                            nextButton.disabled = currentPage === totalPages;
                            nextButton.addEventListener('click', () => {
                                if (currentPage < totalPages) {
                                    currentPage++;
                                    renderFailurePage(currentPage);
                                }
                            });
                        }
                    }
                }

                // Initial render of the first page
                renderFailurePage(1);
            }
        } catch (error) {
            console.error('Error processing failure data:', error);
            failureSection.innerHTML = `
                <div class="bg-red-100 p-4 rounded-lg text-red-700">
                    Error processing failure data: ${error.message}
                </div>
            `;
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
                // Load data from kaos-workflows-runs.json with fallback path
                const successWorkflowsData = await fetch('dashboard/data/kaos-workflows-runs.json')
                    .then(response => {
                        if (!response.ok) {
                            console.log('Primary workflow data file not found for success handler, trying fallback location...');
                            // Try the fallback location
                            return fetch('../outputs/w/kaos-workflows-runs.json');
                        }
                        return response;
                    })
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
                        workflowCounts[workflowName] = (workflowCounts[workflowName] || 0) + 1;
                    });
                    
                    let mostCommonWorkflow = 'None';
                    let maxCount = 0;
                    for (const [workflow, count] of Object.entries(workflowCounts)) {
                        if (count > maxCount) {
                            mostCommonWorkflow = workflow;
                            maxCount = count;
                        }
                    }

                    // Set up pagination
                    const pageSize = 10; // Set items per page to 10
                    const totalPages = Math.ceil(filteredSuccessData.length / pageSize);
                    let currentPage = 1;

                    // Function to render a specific page
                    async function renderSuccessPage(page) {
                        const start = (page - 1) * pageSize;
                        const end = start + pageSize;
                        const paginatedSuccesses = filteredSuccessData.slice(start, end);

                        const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerSuccess.html');
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
                                const successesHtml = paginatedSuccesses.map(success => {
                                    let row = successTemplate;
                                    row = row.replace(/{{name}}/g, success.name);
                                    row = row.replace(/{{duration}}/g, formatDuration(calculateDurationInSeconds(success.created_at, success.updated_at)));
                                    row = row.replace(/{{created_at}}/g, new Date(success.created_at).toLocaleString());
                                    return row;
                                }).join('');
                                
                                renderedTemplate = renderedTemplate.replace(/{{#each successes}}[\s\S]*?{{\/each}}/, successesHtml);
                            }

                            // Update pagination data
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.current_page}}/g, currentPage);
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.total_pages}}/g, totalPages);
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.start}}/g, start + 1);
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.end}}/g, Math.min(end, filteredSuccessData.length));
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.total}}/g, filteredSuccessData.length);
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.is_first_page}}/g, currentPage === 1);
                            renderedTemplate = renderedTemplate.replace(/{{pagination\.is_last_page}}/g, currentPage === totalPages);

                            successSection.innerHTML = renderedTemplate;

                            // Add pagination event listeners
                            const prevButton = successSection.querySelector('#prevPage');
                            const nextButton = successSection.querySelector('#nextPage');

                            if (prevButton) {
                                prevButton.addEventListener('click', () => {
                                    if (currentPage > 1) {
                                        currentPage--;
                                        renderSuccessPage(currentPage);
                                    }
                                });
                            }

                            if (nextButton) {
                                nextButton.addEventListener('click', () => {
                                    if (currentPage < totalPages) {
                                        currentPage++;
                                        renderSuccessPage(currentPage);
                                    }
                                });
                            }
                        }
                    }

                    // Initial render of the first page
                    renderSuccessPage(1);
                }
            } catch (error) {
                console.error('Error processing success data:', error);
                successSection.innerHTML = `
                    <div class="bg-red-100 p-4 rounded-lg text-red-700">
                        Error processing success data: ${error.message}
                    </div>
                `;
            }
        }
        break;

                    
                        case 'End Workflow':
                            const workflowSection = document.querySelector('#endWorkflow');
                            if (workflowSection) {
                                workflowSection.classList.remove('hidden');
                                try {
                                    const response = await fetch('dashboard/data/kaos-workflows-runs.json')
                                    .then(response => {
                                        if (!response.ok) {
                                            console.log('Primary workflow data file not found for end workflow, trying fallback location...');
                                            // Try the fallback location
                                            return fetch('../outputs/w/kaos-workflows-runs.json');
                                        }
                                        return response;
                                    });
                                    
                                if (!response.ok) {
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                const runsData = await response.json();

                                // Calculate total and completed workflows correctly
                                const totalRuns = runsData.length;
                                const completedWorkflows = runsData.filter(run => run.status === 'completed');
                                const totalProjects = completedWorkflows.length;
                                const successfulWorkflows = completedWorkflows.filter(run => run.conclusion === 'success');
                                const percentajeCompleted = Math.round((successfulWorkflows.length / totalRuns) * 100);
                                
                                // Set up pagination
                                const pageSize = 10;
                                const totalPages = Math.ceil(completedWorkflows.length / pageSize);
                                let currentPage = 1;
                                
                                // Calculate average time
                                const avgTime = calculateAverageTime(completedWorkflows);
                                
                                // Get last completion
                                const lastCompletion = completedWorkflows.length > 0 ? 
                                    formatTimeAgo(new Date(completedWorkflows[0].updated_at)) : 'N/A';

                                const template = await window.dashboardUtils.loadHtmlTemplate('templates/endWorkflow.html');
                                if (template) {
                                    function renderWorkflowPage(page) {
                                        const start = (page - 1) * pageSize;
                                        const end = start + pageSize;
                                        const paginatedWorkflows = completedWorkflows.slice(start, end);

                                        const projectsData = paginatedWorkflows.map(workflow => ({
                                            projectId: workflow.run_number,
                                            name: workflow.name,
                                            startDate: new Date(workflow.created_at).toLocaleDateString(),
                                            endDate: new Date(workflow.updated_at).toLocaleDateString(),
                                            duration: calculateDuration(workflow.created_at, workflow.updated_at),
                                            finalStatus: `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                workflow.conclusion === 'success' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : workflow.conclusion === 'failure'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-gray-100 text-gray-800'
                                            }">${workflow.conclusion.charAt(0).toUpperCase() + workflow.conclusion.slice(1)}</span>`
                                        }));

                                        let renderedTemplate = template
                                            .replace('{{title}}', 'Workflow Executions')
                                            .replace('{{description}}', 'Overview of workflow executions')
                                            .replace('{{summary.total_projects}}', totalProjects)
                                            .replace('{{summary.completion_rate}}', `${percentajeCompleted}%`)
                                            .replace('{{summary.avg_time}}', avgTime)
                                            .replace('{{summary.last_completion}}', lastCompletion)
                                            .replace('{{pagination.current_page}}', currentPage)
                                            .replace('{{pagination.total_pages}}', totalPages)
                                            .replace('{{pagination.start}}', start + 1)
                                            .replace('{{pagination.end}}', Math.min(end, completedWorkflows.length))
                                            .replace('{{pagination.total}}', completedWorkflows.length);

                                        // Handle the projects loop
                                        const projectsMatch = renderedTemplate.match(/{{#each projects}}([\s\S]*?){{\/each}}/);
                                        if (projectsMatch && projectsData.length > 0) {
                                            const projectTemplate = projectsMatch[1];
                                            const projectsHtml = projectsData.map(project => {
                                                let row = projectTemplate;
                                                for (const [key, value] of Object.entries(project)) {
                                                    row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                                                }
                                                return row;
                                            }).join('');
                                            renderedTemplate = renderedTemplate.replace(/{{#each projects}}[\s\S]*?{{\/each}}/, projectsHtml);
                                        }

                                        workflowSection.innerHTML = renderedTemplate;

                                        // Add pagination event listeners
                                        const prevButton = workflowSection.querySelector('#prevPage');
                                        const nextButton = workflowSection.querySelector('#nextPage');

                                        if (prevButton) {
                                            prevButton.disabled = currentPage === 1;
                                            prevButton.addEventListener('click', () => {
                                                if (currentPage > 1) {
                                                    currentPage--;
                                                    renderWorkflowPage(currentPage);
                                                }
                                            });
                                        }

                                        if (nextButton) {
                                            nextButton.disabled = currentPage === totalPages;
                                            nextButton.addEventListener('click', () => {
                                                if (currentPage < totalPages) {
                                                    currentPage++;
                                                    renderWorkflowPage(currentPage);
                                                }
                                            });
                                        }
                                    }

                                    // Initial render
                                    renderWorkflowPage(1);
                                } else {
                                    throw new Error('Could not load template');
                                }
                            } catch (error) {
                                console.error('Error loading workflow data:', error);
                                workflowSection.innerHTML = `
                                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                        Failed to load workflow data: ${error.message}
                                    </div>`;
                            }
                        }
                        break;
    
                        function calculateDuration(startTime, endTime) {
                            const start = new Date(startTime);
                            const end = new Date(endTime);
                            const diffInSeconds = Math.floor((end - start) / 1000);
                            
                            const hours = Math.floor(diffInSeconds / 3600);
                            const minutes = Math.floor((diffInSeconds % 3600) / 60);
                            const seconds = diffInSeconds % 60;
                            
                            if (hours > 0) {
                                return `${hours}h ${minutes}m ${seconds}s`;
                            } else {
                                return `${minutes}m ${seconds}s`;
                            }
                        }
    
                        function calculateAverageTime(workflows) {
                            if (!workflows || workflows.length === 0) return 'N/A';
                            
                            const totalSeconds = workflows.reduce((acc, workflow) => {
                                const duration = (new Date(workflow.updated_at) - new Date(workflow.created_at)) / 1000;
                                return acc + duration;
                            }, 0);
                            
                            const avgSeconds = totalSeconds / workflows.length;
                            const hours = Math.floor(avgSeconds / 3600);
                            const minutes = Math.floor((avgSeconds % 3600) / 60);
                            const seconds = Math.floor(avgSeconds % 60);
                            
                            if (hours > 0) {
                                return `${hours}h ${minutes}m ${seconds}s`;
                            } else {
                                return `${minutes}m ${seconds}s`;
                            }
                        }
    
                        function formatTimeAgo(date) {
                            const now = new Date();
                            const diffMs = now - date;
                            const diffMins = Math.floor(diffMs / 60000);
                            
                            if (diffMins < 60) return `${diffMins}m ago`;
                            if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
                            return `${Math.floor(diffMins / 1440)}d ago`;
                        }
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
