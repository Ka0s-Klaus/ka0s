// sections.js - Handles different dashboard sections

// Initialize the section utilities namespace
window.sectionUtils = {};

// Create navbar HTML
window.sectionUtils.createNavbarHtml = async function(data) {
    const navbarTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/navbar.html');
    if (!navbarTemplate) return '';
    
    // Replace placeholders with actual data
    let html = navbarTemplate;
    html = html.replace(/{{NAVBAR_TITLE}}/g, data.title || 'Ka0s Dashboard');
    html = html.replace(/{{NAVBAR_LOGO}}/g, data.logo || 'images/kaos-summary.png');
    
    // Process links
    let linksHtml = '';
    if (data.links && Array.isArray(data.links)) {
        linksHtml = data.links.map(link => `
            <a href="${link.url}" class="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200">
                <i class="fas ${link.icon} text-blue-500 w-5 text-center"></i>
                <span class="sidebar-text transition-opacity duration-300">${link.text}</span>
            </a>
        `).join('');
    }
    
    html = html.replace('{{NAVBAR__LINKS}}', linksHtml);
    
    return html;
};

// Create footer HTML
window.sectionUtils.createFooterHtml = async function(data) {
    // Try multiple possible paths for the footer template
    let footerTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/footer.html');
    
    // If the first path fails, try alternative paths
    if (!footerTemplate) {
        console.log('Failed to load footer from templates/footer.html, trying alternative paths...');
        footerTemplate = await window.dashboardUtils.loadHtmlTemplate('/templates/footer.html');
    }
    
    if (!footerTemplate) {
        console.log('Failed to load footer from /templates/footer.html, trying with full path...');
        footerTemplate = await window.dashboardUtils.loadHtmlTemplate('/core/dashboard/templates/footer.html');
    }
    
    // Last resort - use a hardcoded footer template
    if (!footerTemplate) {
        console.log('Using hardcoded footer template as fallback');
        footerTemplate = `
<footer class="bg-white shadow-2xl rounded-xl py-6 md:py-6 px-2 w-[97%] sm:w-[97%] mt-auto">
    <div class="flex flex-col items-center">
        <div class="flex flex-wrap justify-center gap-3">
            <a href="https://app.codacy.com/gh/SantaKa0S/kaos/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade" target="_blank" rel="noopener noreferrer">
                <img src="https://app.codacy.com/project/badge/Grade/203720c203a84af7a9d888680a047df4" alt="Codacy Badge" class="h-6">
            </a>
            <a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3" class="h-6">
            </a>
        </div>
        <p class="text-dark text-xs mt-2">{{COPYRIGHT}}</p>
    </div>
</footer>`;
    }
    
    // Replace placeholders with actual data
    let html = footerTemplate;
    html = html.replace('{{COPYRIGHT}}', data.copyright || '© 2024 Ka0s');
    html = html.replace('{{VERSION}}', data.version || '1.0.0');
    
    return html;
};

// Create section HTML
window.sectionUtils.createSectionHtml = async function(data, className) {
    const sectionTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/section.html');
    
    return sectionTemplate
        .replace(/{{CLASS_NAME}}/g, className)
        .replace('{{SECTION_TITLE}}', data.title || '')
        .replace('{{SECTION_DESCRIPTION}}', data.description || '')
        .replace('{{SECTION_MESSAGE}}', data.hola_seccion1 || '')
        .replace('{{#if_seccion1}}', className === 'seccion1' ? '' : 'hidden');
};

// Load Lead Time section
window.sectionUtils.loadLeadTime = async function() {
    const leadTimeData = await window.dashboardUtils.loadJsonData('dashboard/sections/leadTime.json');
    if (!leadTimeData) return null;

    const template = await window.dashboardUtils.loadHtmlTemplate('templates/leadTime.html');
    if (template) {
        // Replace all template variables with actual data
        let renderedTemplate = template;
        
        // Replace metrics
        for (const [key, value] of Object.entries(leadTimeData.metrics)) {
            renderedTemplate = renderedTemplate.replace(`{{metrics.${key}.title}}`, value.title);
            renderedTemplate = renderedTemplate.replace(`{{metrics.${key}.value}}`, value.value);
        }
        
        // Handle the executions loop
        const executionsMatch = renderedTemplate.match(/{{#each recentExecutions}}([\s\S]*?){{\/each}}/);
        if (executionsMatch) {
            const executionTemplate = executionsMatch[1];
            const executionsHtml = leadTimeData.recentExecutions.map(execution => {
                let row = executionTemplate;
                for (const [key, value] of Object.entries(execution)) {
                    row = row.replace(new RegExp(`{{${key}}}`, 'g'), value);
                }
                // Handle status-based styling
                const statusClass = execution.status === 'Success' ? 
                    'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
                row = row.replace('{{statusClass}}', statusClass);
                return row;
            }).join('');
            renderedTemplate = renderedTemplate.replace(/{{#each recentExecutions}}[\s\S]*?{{\/each}}/, executionsHtml);
        }
        
        return renderedTemplate;
    }
    return null;
};

// Load Actions Performance section
window.sectionUtils.loadActionsPerformance = async function() {
    const data = await window.dashboardUtils.loadJsonData('dashboard/sections/actionsPerformance.json');
    if (!data) return null;

    const template = await window.dashboardUtils.loadHtmlTemplate('templates/actionsPerformance.html');
    if (template) {
        // Implementation similar to loadLeadTime
        // Replace placeholders with actual data
        return template;
    }
    return null;
};

// Load Handler Failure section
window.sectionUtils.loadHandlerFailure = async function() {
    const data = await window.dashboardUtils.loadJsonData('dashboard/sections/handlerFailure.json');
    if (!data) return null;

    const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerFailure.html');
    if (template) {
        // Implementation similar to loadLeadTime
        // Replace placeholders with actual data
        return template;
    }
    return null;
};

// Load Handler Success section
window.sectionUtils.loadHandlerSuccess = async function() {
    const data = await window.dashboardUtils.loadJsonData('dashboard/sections/handlerSuccess.json');
    if (!data) return null;

    const template = await window.dashboardUtils.loadHtmlTemplate('templates/handlerSuccess.html');
    if (template) {
        // Implementation similar to loadLeadTime
        // Replace placeholders with actual data
        return template;
    }
    return null;
};

// Load End Workflow section
window.sectionUtils.loadEndWorkflow = async function() {
    const data = await window.dashboardUtils.loadJsonData('dashboard/sections/endWorkflow.json');
    if (!data) return null;

    const template = await window.dashboardUtils.loadHtmlTemplate('templates/endWorkflow.html');
    if (template) {
        // Implementation similar to loadLeadTime
        // Replace placeholders with actual data
        return template;
    }
    return null;
};