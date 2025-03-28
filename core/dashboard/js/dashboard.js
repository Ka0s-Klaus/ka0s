async function loadJsonData(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
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

    // Update title
    document.title = principal?.title || 'Ka0s Dashboard';
    document.querySelector('h1').textContent = principal?.title || 'Ka0s Dashboard';

    // Update hello world
    document.querySelector('#hello-world').textContent = principal?.hello_world || 'Hello World';

    // Update navbar
    if (navbar) {
        const navbarHtml = createNavbarHtml(navbar);
        document.querySelector('#navbar').innerHTML = navbarHtml;
    }

    // Update section 1
    if (seccion1) {
        const section1Html = createSectionHtml(seccion1, 'seccion1');
        document.querySelector('#seccion1').innerHTML = section1Html;
    }

    // Update section 2
    if (seccion2) {
        const section2Html = createSectionHtml(seccion2, 'seccion2');
        document.querySelector('#seccion2').innerHTML = section2Html;
    }

    // Update footer
    if (footer) {
        const footerHtml = createFooterHtml(footer);
        document.querySelector('#footer').innerHTML = footerHtml;
    }
}

function createNavbarHtml(data) {
    const styles = data.styles || {};
    const sectionStyle = Object.entries(styles.section || {})
        .map(([k, v]) => `${k}: ${v}`).join(';') + '; display: flex; justify-content: center; width: 100%;';
    const containerStyle = Object.entries(styles.container || {})
        .map(([k, v]) => `${k}: ${v}`).join(';') + '; max-width: 1200px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;';
    const brandStyle = Object.entries(styles.brand || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    const menuStyle = Object.entries(styles.menu || {})
        .map(([k, v]) => `${k}: ${v}`).join(';') + '; display: flex; gap: 20px; margin: 0; padding: 0; list-style: none; align-items: center;';
    const menuItemStyle = Object.entries(styles.menuItem || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    const linkStyle = Object.entries(styles.link || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');

    // Create links HTML
    const linksHtml = data.links.map(link => {
        return `
            <li style="${menuItemStyle}">
                <a href="${link.url}" style="${linkStyle}; border-radius: 25px;" 
                   onmouseover="this.style.backgroundColor='#e6f0ff'; this.style.color='#4287f5'; this.querySelector('i').style.color='#4287f5';" 
                   onmouseout="this.style.backgroundColor='#ffffff'; this.style.color='#000000'; this.querySelector('i').style.color='#000000';">
                    <i class="fas ${link.icon}" style="${Object.entries(styles.icon || {}).map(([k, v]) => `${k}: ${v}`).join(';')}"></i>
                    ${link.text}
                </a>
            </li>
        `;
    }).join('');

    return `
        <nav style="${sectionStyle}">
            <div style="${containerStyle}">
                <a href="#" style="${brandStyle}">
                    <i class="fas fa-code-branch" style="margin-right: 10px;"></i>
                    ${data.title}
                </a>
                <ul style="${menuStyle}">
                    ${linksHtml}
                </ul>
            </div>
        </nav>
    `;
}

function createSectionHtml(data, className) {
    const styles = data.styles || {};
    const sectionStyle = Object.entries(styles.section || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    
    // Style for titles and descriptions
    const titleStyle = 'color: #2196F3; font-size: 24px;';
    const descriptionStyle = 'font-style: italic;';

    return `
        <div class="${className}" style="${sectionStyle}">
            <h2 style="${titleStyle}">${data.title || ''}</h2>
            <p style="${descriptionStyle}">${data.description || ''}</p>
            <p class="hola-${className}">${data.hola_seccion1 || ''}</p>
        </div>
    `;
}

function createFooterHtml(data) {
    const styles = data.styles || {};
    const layout = data.layout || {};
   
    // Create style strings for each element
    const sectionStyle = Object.entries(styles.section || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    const titleStyle = Object.entries(styles.title || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    const descStyle = Object.entries(styles.description || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
    const copyrightStyle = Object.entries(styles.copyright || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
 
    // Create layout style
    const layoutStyle = Object.entries(layout || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');
 
    return `
        <footer style="${sectionStyle}">
            <div style="${layoutStyle}">
                <h3 style="${titleStyle}">${data.title || 'Footer'}</h3>
                <p style="${descStyle}">${data.description || ''}</p>
                <p style="${copyrightStyle}">${data.copyright || ''}</p>
            </div>
        </footer>
    `;
}

// Update on page load
window.onload = updateDashboard;

// Refresh every 5 seconds
setInterval(updateDashboard, 5000);