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

async function updateDashboard() {
    // Load all JSON files
    const principal = await loadJsonData('dashboard/principal.json');
    const navbar = await loadJsonData('dashboard/sections/navbar.json');
    const seccion1 = await loadJsonData('dashboard/sections/seccion1.json');
    const seccion2 = await loadJsonData('dashboard/sections/seccion2.json');
    const footer = await loadJsonData('dashboard/sections/footer.json');

    // Apply body styles from principal.json
    if (principal && principal.styles && principal.styles.body) {
        const bodyStyles = principal.styles.body;
        for (const [property, value] of Object.entries(bodyStyles)) {
            document.body.style[property] = value;
        }
    }

    // Update title
    document.title = principal?.title || 'Ka0s Dashboard';
    document.querySelector('h1').textContent = principal?.title || 'Ka0s Dashboard';

    // Update hello world
    document.querySelector('#hello-world').textContent = principal?.hello_world || 'Hello World';

    // Update navbar
    if (navbar) {
        const navbarHtml = await createNavbarHtml(navbar);
        document.querySelector('#navbar').innerHTML = navbarHtml;
        
        // Add event listeners to navigation links after navbar is created
        setupNavigation();
    }

    // Prepare sections but keep them hidden initially
    if (seccion1) {
        const section1Html = await createSectionHtml(seccion1, 'seccion1');
        document.querySelector('#seccion1').innerHTML = section1Html;
    }

    if (seccion2) {
        const section2Html = await createSectionHtml(seccion2, 'seccion2');
        document.querySelector('#seccion2').innerHTML = section2Html;
    }

    // Update footer
    if (footer) {
        const footerHtml = await createFooterHtml(footer);
        document.querySelector('#footer').innerHTML = footerHtml;
    }

    // Add this inside the updateDashboard function after the title update
    // Update dashboard image
    if (principal && principal.dashboard_image) {
        const imgElement = document.getElementById('dashboard-logo');
        if (imgElement) {
            imgElement.src = principal.dashboard_image;
            imgElement.onerror = function() {
                console.error(`Failed to load image: ${principal.dashboard_image}`);
                this.src = 'core/imgs/kaos.jpeg'; // Fallback to a known image
            };
        }
    }
}

function setupNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent.trim();
            
            // Hide all sections first
            document.querySelector('#seccion1').classList.add('hidden');
            document.querySelector('#seccion2').classList.add('hidden');
            
            // Show the appropriate section based on the link clicked
            if (linkText.includes('Seccion 1') || linkText.includes('Sección 1')) {
                document.querySelector('#seccion1').classList.remove('hidden');
            } else if (linkText.includes('Seccion 2') || linkText.includes('Sección 2')) {
                document.querySelector('#seccion2').classList.remove('hidden');
            }
        });
    });
}

// Update createNavbarHtml to use the external template
async function createNavbarHtml(data) {
    // Load the navbar template
    const navbarTemplate = await loadHtmlTemplate('templates/navbar.html');
    
    if (!navbarTemplate) {
        console.error('Failed to load navbar template');
        return '';
    }
    
    // Create links HTML
    const linksHtml = data.links.map(link => {
        return `
            <li class="inline-block">
                <a href="#${link.text.toLowerCase().replace(' ', '-')}" 
                   class="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full border border-gray-200 transition-all duration-300 hover:bg-gray-100"
                   onclick="showSection('${link.text === 'Dashboard' ? 'seccion1' : 'principal'}'); return false;">
                    <i class="fas ${link.icon} text-gray-600"></i>
                    ${link.text}
                </a>
            </li>
        `;
    }).join('');
    
    // Replace the placeholders in the template
    return navbarTemplate
        .replace('{{NAVBAR_TITLE}}', data.title)
        .replace(/{{NAVBAR_LINKS}}/g, linksHtml);
}

// Update createSectionHtml to use the external template
async function createSectionHtml(data, className) {
    // Load the section template
    const sectionTemplate = await loadHtmlTemplate('templates/section.html');
    
    if (!sectionTemplate) {
        console.error('Failed to load section template');
        return '';
    }
    
    // Replace the placeholders in the template with the actual data
    return sectionTemplate
        .replace(/{{CLASS_NAME}}/g, className)
        .replace('{{SECTION_TITLE}}', data.title || '')
        .replace('{{SECTION_DESCRIPTION}}', data.description || '')
        .replace('{{SECTION_MESSAGE}}', data.hola_seccion1 || '');
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

// Update on page load - modified to handle async
window.onload = () => {
    updateDashboard();
};

// Refresh every 5 seconds - modified to handle async
setInterval(() => {
    updateDashboard();
}, 5000);