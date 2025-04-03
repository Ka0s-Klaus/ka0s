// sections.js - Handles different dashboard sections

// Initialize the section utilities namespace
window.sectionUtils = {};

// Create navbar HTML
window.sectionUtils.createNavbarHtml = async function(data) {
    const navbarTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/navbar.html');
    if (!navbarTemplate) return '';
    
    // Replace placeholders with actual data
    let html = navbarTemplate;
    html = html.replace('{{TITLE}}', data.title || 'Ka0s Dashboard');
    
    // Process menu items
    const menuItemsMatch = html.match(/{{#each menuItems}}([\s\S]*?){{\/each}}/);
    if (menuItemsMatch && data.menuItems) {
        const itemTemplate = menuItemsMatch[1];
        const menuItemsHtml = data.menuItems.map(item => {
            let itemHtml = itemTemplate;
            itemHtml = itemHtml.replace(/{{name}}/g, item.name);
            itemHtml = itemHtml.replace(/{{icon}}/g, item.icon);
            itemHtml = itemHtml.replace(/{{link}}/g, item.link);
            return itemHtml;
        }).join('');
        
        html = html.replace(/{{#each menuItems}}[\s\S]*?{{\/each}}/, menuItemsHtml);
    }
    
    return html;
};

// Create footer HTML
window.sectionUtils.createFooterHtml = async function(data) {
    const footerTemplate = await window.dashboardUtils.loadHtmlTemplate('templates/footer.html');
    if (!footerTemplate) return '';
    
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