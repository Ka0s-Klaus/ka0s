async function loadJsonData(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
}

// New function to load HTML templates
async function loadHtmlTemplate(path) {
    try {
        const response = await fetch(path);
        return await response.text();
    } catch (error) {
        console.error(`Error loading template ${path}:`, error);
        return null;
    }
}

// Add this function to handle sidebar toggling
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
        
        // Auto-collapse on small screens
        if (window.innerWidth < 640) {
            toggleSidebar();
        }
        
        // Listen for window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth < 640) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('w-[250px]')) {
                    toggleSidebar();
                }
            }
        });
    }
}

function toggleSidebar() {
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
}

// Update the updateDashboard function to call initializeSidebar
async function updateDashboard() {
    // Load all JSON files
    const principal = await loadJsonData('dashboard/principal.json');
    const navbar = await loadJsonData('dashboard/sections/navbar.json');
    const seccion1 = await loadJsonData('dashboard/sections/seccion1.json');
    const seccion2 = await loadJsonData('dashboard/sections/seccion2.json');
    const leadTime = await loadJsonData('dashboard/sections/leadTime.json');
    const actionsPerformance = await loadJsonData('dashboard/sections/actionsPerformance.json');
    const backLogs = await loadJsonData('dashboard/sections/backLogs.json');
    const handlerFailure = await loadJsonData('dashboard/sections/handlerFailure.json');
    const handlerSuccess = await loadJsonData('dashboard/sections/handlerSuccess.json');
    const endWorkflow = await loadJsonData('dashboard/sections/endWorkflow.json');
    const footer = await loadJsonData('dashboard/sections/footer.json');
    
    // Update navbar first
    if (navbar) {
        const navbarHtml = await createNavbarHtml(navbar);
        document.querySelector('#navbar').innerHTML = navbarHtml;
        setupNavigation();
        initializeSidebar(); // Initialize sidebar toggle functionality
    }
    
    // Load and update dashboard template
    const dashboardTemplate = await loadHtmlTemplate('templates/index.html');
    if (dashboardTemplate) {
        document.querySelector('#dashboard-container').innerHTML = dashboardTemplate;
        initializeCharts(); // Initialize charts after content is loaded
    }

    // Update sections
    if (seccion1) {
        const section1Html = await createSectionHtml(seccion1, 'seccion1');
        document.querySelector('#seccion1').innerHTML = section1Html;
    }

    if (seccion2) {
        const section2Html = await createSectionHtml(seccion2, 'seccion2');
        document.querySelector('#seccion2').innerHTML = section2Html;
    }
    
    // Update Lead Time section
    if (leadTime) {
        const leadTimeHtml = await createSectionHtml(leadTime, 'leadTime');
        const leadTimeElement = document.querySelector('#leadTime');
        if (leadTimeElement) {
            leadTimeElement.innerHTML = leadTimeHtml;
        }
    }
    
    // Update other sections
    const sections = [
        { id: 'actionsPerformance', data: actionsPerformance },
        { id: 'backLogs', data: backLogs, template: 'backLogs.html' },
        { id: 'handlerFailure', data: handlerFailure },
        { id: 'handlerSuccess', data: handlerSuccess },
        { id: 'endWorkflow', data: endWorkflow }
    ];
    
    for (const section of sections) {
        if (section.data) {
            // If this section has a specific template, load it
            if (section.template) {
                const templateContent = await loadHtmlTemplate(`templates/${section.template}`);
                if (templateContent) {
                    const sectionElement = document.querySelector(`#${section.id}Content`);
                    if (sectionElement) {
                        sectionElement.innerHTML = templateContent;
                    }
                }
            }
            
            // Also load any dynamic content from the JSON
            const sectionHtml = await createSectionHtml(section.data, section.id);
            const sectionElement = document.querySelector(`#${section.id}`);
            if (sectionElement && !section.template) {
                sectionElement.innerHTML = sectionHtml;
            }
        }
    }

    // Update footer last
    if (footer) {
        const footerHtml = await createFooterHtml(footer);
        document.querySelector('#footer').innerHTML = footerHtml;
    }
    // In the updateDashboard function, add this code after loading other sections:
    
    // Load backLogs template directly
    const backLogsTemplate = await loadHtmlTemplate('templates/backLogs.html');
    if (backLogsTemplate) {
        const backLogsElement = document.querySelector('#backLogs');
        if (backLogsElement) {
            backLogsElement.innerHTML = backLogsTemplate;
        }
    }
}

// Add the initializeCharts function
async function initializeCharts() {
    // Load chart data
    const indexData = await loadJsonData('dashboard/sections/index.json');
    if (!indexData) return;

    // Line Chart - Revenue
    const lineCtx = document.getElementById('lineChart')?.getContext('2d');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: indexData.charts.revenue.labels,
                datasets: [{
                    label: indexData.charts.revenue.title,
                    data: indexData.charts.revenue.data,
                    borderColor: indexData.charts.revenue.color,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Bar Chart - Monthly Sales
    const barCtx = document.getElementById('barChart')?.getContext('2d');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: indexData.charts.monthlySales.labels,
                datasets: [{
                    label: indexData.charts.monthlySales.title,
                    data: indexData.charts.monthlySales.data,
                    backgroundColor: indexData.charts.monthlySales.color
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Doughnut Chart - Progress
    const doughnutCtx = document.getElementById('doughnutChart')?.getContext('2d');
    if (doughnutCtx) {
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: indexData.charts.progress.data,
                    backgroundColor: indexData.charts.progress.colors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Update statistics
    const statsSection = document.querySelector('.statistics');
    if (statsSection && indexData.statistics) {
        statsSection.querySelector('h3').textContent = indexData.statistics.title;
        statsSection.querySelector('.text-yellow-500').textContent = indexData.statistics.highlight;
        const metrics = indexData.statistics.metrics;
        statsSection.querySelector('h4:first-of-type').textContent = metrics[0].value;
        statsSection.querySelector('p:first-of-type').textContent = metrics[0].label;
        statsSection.querySelector('h4:last-of-type').textContent = metrics[1].value;
        statsSection.querySelector('p:last-of-type').textContent = metrics[1].label;
    }
    
    // Initialize the calendar
    initializeCalendar();
    console.log('Calendar initialization called');
}

async function loadActionsPerformance() {
    const actionsData = await loadJsonData('dashboard/sections/actionsPerformance.json');
    if (!actionsData) return null;

    const template = await loadHtmlTemplate('templates/actionsPerformance.html');
    if (template) {
        // Replace all template variables with actual data
        let renderedTemplate = template;
        for (const [key, value] of Object.entries(actionsData)) {
            if (typeof value === 'object') {
                for (const [subKey, subValue] of Object.entries(value)) {
                    renderedTemplate = renderedTemplate.replace(
                        `{{${key}.${subKey}}}`, 
                        subValue
                    );
                }
            } else {
                renderedTemplate = renderedTemplate.replace(`{{${key}}}`, value);
            }
        }
        
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
        
        return renderedTemplate;
    }
    return null;
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', async function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            
            // Hide all sections
            document.querySelectorAll('[id$="container"], [id^="actions"], [id^="lead"], [id^="back"], [id^="handler"], [id^="end"]').forEach(section => {
                section.classList.add('hidden');
            });
            
            if (linkText.includes('Actions Performance')) {
                const actionsSection = document.querySelector('#actionsPerformance');
                if (actionsSection) {
                    actionsSection.classList.remove('hidden');
                    const renderedTemplate = await loadActionsPerformance();
                    if (renderedTemplate) {
                        actionsSection.innerHTML = renderedTemplate;
                    }
                }
            } else if (linkText.includes('Dashboard') || linkText.includes('Home')) {
                document.querySelector('#dashboard-container')?.classList.remove('hidden');
            } else {
                const sectionId = linkText.toLowerCase().replace(/\s+/g, '-');
                document.querySelector(`#${sectionId}`)?.classList.remove('hidden');
            }

            // Update active state in navbar
            updateActiveNavLink(this);
        });
    });
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.classList.remove('bg-blue-700', 'text-white');
        const icon = link.querySelector('i');
        if (icon) {
            icon.classList.remove('text-white');
            icon.classList.add('text-gray-600');
        }
    });

    activeLink.classList.add('bg-blue-700', 'text-white');
    const icon = activeLink.querySelector('i');
    if (icon) {
        icon.classList.remove('text-gray-600');
        icon.classList.add('text-white');
    }
}

// Update createNavbarHtml to use the external template
async function createNavbarHtml(data) {
    // Load the navbar template
    const navbarTemplate = await loadHtmlTemplate('templates/navbar.html');
    
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
        .replace('{{NAVBAR_TITLE}}', data.title)
        .replace('{{NAVBAR_LOGO}}', data.logo || 'images/kaos-summary.png')
        .replace(/{{NAVBAR_LINKS}}/g, linksHtml)
        .replace('class="h-10 w-10 rounded-xl', 'class="h-10 w-10 rounded-xl logo-image');
}

// Update createSectionHtml to use the external template
async function createSectionHtml(data, className) {
    const sectionTemplate = await loadHtmlTemplate('templates/section.html');
    
    return sectionTemplate
        .replace(/{{CLASS_NAME}}/g, className)
        .replace('{{SECTION_TITLE}}', data.title || '')
        .replace('{{SECTION_DESCRIPTION}}', data.description || '')
        .replace('{{SECTION_MESSAGE}}', data.hola_seccion1 || '')
        .replace('{{#if_seccion1}}', className === 'seccion1' ? '' : 'hidden');
}

// Update createFooterHtml to use the external template
async function createFooterHtml(data) {
    // Load the footer template
    const footerTemplate = await loadHtmlTemplate('templates/footer.html');
    
    if (!footerTemplate) {
        console.error('Failed to load footer template');
        return '';
    }
    
    // Replace the placeholders in the template with the actual data
    return footerTemplate
        .replace('{{FOOTER_DESCRIPTION}}', data.description || '')
        .replace('{{FOOTER_COPYRIGHT}}', data.copyright || '');
}



// Update the window.onload function to include debugging
window.onload = () => {
    updateDashboard();
};
