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
    const seccion1 = await loadJsonData('dashboard/sections/seccion1.json');
    const seccion2 = await loadJsonData('dashboard/sections/seccion2.json');
    const footer = await loadJsonData('dashboard/sections/footer.json');

    // Update title
    document.title = principal?.title || 'Ka0s Dashboard';
    document.querySelector('h1').textContent = principal?.title || 'Ka0s Dashboard';

    // Update hello world
    document.querySelector('#hello-world').textContent = principal?.hello_world || 'Hello World';

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

function createSectionHtml(data, className) {
    const styles = data.styles || {};
    const sectionStyle = Object.entries(styles.section || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');

    return `
        <div class="${className}" style="${sectionStyle}">
            <h2>${data.title || ''}</h2>
            <p>${data.description || ''}</p>
            <p class="hola-${className}">${data.hola_seccion1 || ''}</p>
        </div>
    `;
}

function createFooterHtml(data) {
    const styles = data.styles || {};
    const footerStyle = Object.entries(styles.section || {})
        .map(([k, v]) => `${k}: ${v}`).join(';');

    return `
        <footer style="${footerStyle}">
            <h3>${data.title || 'Footer'}</h3>
            <p>${data.description || ''}</p>
            <p>${data.copyright || ''}</p>
        </footer>
    `;
}

// Update on page load
window.onload = updateDashboard;

// Refresh every 5 seconds
setInterval(updateDashboard, 5000);