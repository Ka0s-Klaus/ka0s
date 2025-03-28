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
        const navbarHtml = createNavbarHtml(navbar);
        document.querySelector('#navbar').innerHTML = navbarHtml;
        
        // Add event listeners to navigation links after navbar is created
        setupNavigation();
    }

    // Prepare sections but keep them hidden initially
    if (seccion1) {
        const section1Html = createSectionHtml(seccion1, 'seccion1');
        document.querySelector('#seccion1').innerHTML = section1Html;
    }

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

function createNavbarHtml(data) {
    // Create links HTML
    const linksHtml = data.links.map(link => {
        return `
            <li class="inline-block">
                <a href="#${link.text.toLowerCase().replace(' ', '-')}" class="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full border border-gray-200 transition-all duration-300 hover:bg-light hover:text-secondary"
                   onmouseover="this.querySelector('i').style.color='#4287f5';" 
                   onmouseout="this.querySelector('i').style.color='#000000';">
                    <i class="fas ${link.icon} text-black"></i>
                    ${link.text}
                </a>
            </li>
        `;
    }).join('');

    return `
        <nav class="bg-primary py-4 px-5 shadow-md w-full flex justify-center">
            <div class="container mx-auto flex justify-center items-center">
                <ul class="flex gap-5 items-center m-0 p-0 list-none">
                    ${linksHtml}
                </ul>
            </div>
        </nav>
    `;
}

function createSectionHtml(data, className) {
    return `
        <div class="${className} bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-3">${data.title || ''}</h2>
            <p class="text-gray-600 italic mb-4">${data.description || ''}</p>
            <p class="hola-${className} text-gray-700">${data.hola_seccion1 || ''}</p>
        </div>
    `;
}

function createFooterHtml(data) {
    return `
        <footer class="bg-gray-800 text-white py-8 px-4 mt-10">
            <div class="container mx-auto flex flex-col items-center">
                <p class="text-gray-300 mb-2">${data.description || ''}</p>
                <p class="text-sm text-gray-400">${data.copyright || ''}</p>
            </div>
        </footer>
    `;
}

// Update on page load
window.onload = updateDashboard;

// Refresh every 5 seconds
setInterval(updateDashboard, 5000);