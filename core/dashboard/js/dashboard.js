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
        { id: 'backLogs', data: backLogs },
        { id: 'handlerFailure', data: handlerFailure },
        { id: 'handlerSuccess', data: handlerSuccess },
        { id: 'endWorkflow', data: endWorkflow }
    ];
    
    for (const section of sections) {
        if (section.data) {
            const sectionHtml = await createSectionHtml(section.data, section.id);
            const sectionElement = document.querySelector(`#${section.id}`);
            if (sectionElement) {
                sectionElement.innerHTML = sectionHtml;
            }
        }
    }

    // Update footer last
    if (footer) {
        const footerHtml = await createFooterHtml(footer);
        document.querySelector('#footer').innerHTML = footerHtml;
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

function setupNavigation() {
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the section ID from the data attribute
            const sectionId = this.getAttribute('data-section');
            
            // Call the showSection function
            showSection(sectionId);
        });
    });
    
    // Set the default section (dashboard) as active on page load
    setTimeout(() => {
        showSection('dashboard');
    }, 100);
}

// Add the showSection function to handle section switching
function showSection(sectionId) {
    // Get all section elements
    const dashboardContainer = document.querySelector('#dashboard-container');
    const seccion1 = document.querySelector('#seccion1');
    const seccion2 = document.querySelector('#seccion2');
    const leadTime = document.querySelector('#leadTime');
    const actionsPerformance = document.querySelector('#actionsPerformance');
    const backLogs = document.querySelector('#backLogs');
    const handlerFailure = document.querySelector('#handlerFailure');
    const handlerSuccess = document.querySelector('#handlerSuccess');
    const endWorkflow = document.querySelector('#endWorkflow');
    
    // Hide all sections first
    [dashboardContainer, seccion1, seccion2, leadTime, actionsPerformance, 
     backLogs, handlerFailure, handlerSuccess, endWorkflow].forEach(section => {
        if (section) section.classList.add('hidden');
    });
    
    // Show the selected section
    if (sectionId === 'dashboard') {
        if (dashboardContainer) dashboardContainer.classList.remove('hidden');
    } else if (sectionId === 'seccion1') {
        if (seccion1) seccion1.classList.remove('hidden');
    } else if (sectionId === 'leadTime') {
        if (leadTime) leadTime.classList.remove('hidden');
    } else if (sectionId === 'seccion2') {
        if (seccion2) seccion2.classList.remove('hidden');
    } else if (sectionId === 'actionsPerformance') {
        if (actionsPerformance) actionsPerformance.classList.remove('hidden');
    } else if (sectionId === 'backLogs') {
        if (backLogs) backLogs.classList.remove('hidden');
    } else if (sectionId === 'handlerFailure') {
        if (handlerFailure) handlerFailure.classList.remove('hidden');
    } else if (sectionId === 'handlerSuccess') {
        if (handlerSuccess) handlerSuccess.classList.remove('hidden');
    } else if (sectionId === 'endWorkflow') {
        if (endWorkflow) endWorkflow.classList.remove('hidden');
    }
    
    // Update active state in navbar
    const navLinks = document.querySelectorAll('#navbar .mt-6 a');
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('bg-blue-700', 'text-white');
        const icon = link.querySelector('i');
        if (icon) {
            icon.classList.remove('text-white');
            icon.classList.add('text-gray-600');
        }
    });
    
    // Add active class to clicked link
    const activeLink = document.querySelector(`a[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-blue-700', 'text-white');
        const icon = activeLink.querySelector('i');
        if (icon) {
            icon.classList.remove('text-gray-600');
            icon.classList.add('text-white');
        }
    }
    
    console.log(`Switched to section: ${sectionId}`);
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
    
    // Replace the placeholders in the template
    return navbarTemplate
        .replace('{{NAVBAR_TITLE}}', data.title)
        .replace('{{NAVBAR_LOGO}}', data.logo || 'images/kaos-summary.png')
        .replace(/{{NAVBAR_LINKS}}/g, linksHtml);
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

// Update on page load - modified to handle async
// Add this function after showDayEvents
function debugCalendar() {
    const calendarElement = document.getElementById('calendar');
    if (calendarElement) {
        console.log('Calendar element found:', calendarElement);
        return true;
    } else {
        console.error('Calendar element not found in the DOM');
        // Let's check if the dashboard container is loaded
        const dashboardContainer = document.querySelector('#dashboard-container');
        if (dashboardContainer) {
            console.log('Dashboard container found:', dashboardContainer);
            console.log('Dashboard container HTML:', dashboardContainer.innerHTML);
        } else {
            console.error('Dashboard container not found');
        }
        return false;
    }
}

// Update the window.onload function to include debugging
window.onload = () => {
    updateDashboard();
    
    // Add a slight delay to ensure the DOM is fully loaded
    setTimeout(() => {
        debugCalendar();
    }, 1000);
};


// Update the initializeCalendar function to use the new template
async function initializeCalendar() {
    const calendarContainer = document.getElementById('calendar');
    if (!calendarContainer) {
        console.error('Calendar container not found');
        return;
    }
    
    // Load the calendar template
    const calendarTemplate = await loadHtmlTemplate('templates/calendar.html');
    if (!calendarTemplate) {
        console.error('Failed to load calendar template');
        return;
    }
    
    // Insert the template into the container
    calendarContainer.innerHTML = calendarTemplate;
    
    // Get current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Set the calendar title
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const calendarTitle = document.getElementById('calendar-title');
    if (calendarTitle) {
        calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }
    
    // Generate the calendar days
    generateCalendarDays(currentYear, currentMonth);
    
    // Add event listeners for month navigation
    document.getElementById('prev-month')?.addEventListener('click', () => {
        navigateMonth(-1);
    });
    
    document.getElementById('next-month')?.addEventListener('click', () => {
        navigateMonth(1);
    });
    
    console.log('Material UI style calendar initialized');
}

// Update the function to generate calendar days
function generateCalendarDays(year, month) {
    const daysContainer = document.getElementById('calendar-days');
    if (!daysContainer) return;
    
    // Clear existing days
    daysContainer.innerHTML = '';
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get current date to highlight current day
    const currentDate = new Date();
    const isCurrentMonth = currentDate.getMonth() === month && currentDate.getFullYear() === year;
    const currentDay = currentDate.getDate();
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'h-10 text-center';
        daysContainer.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        
        // Base styles for all days
        let dayClass = 'h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors';
        
        // Highlight current day
        if (isCurrentMonth && day === currentDay) {
            dayClass += ' bg-blue-600 text-white font-medium';
        } else {
            dayClass += ' text-gray-700 hover:bg-gray-100';
        }
        
        dayElement.className = dayClass;
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
        
        // Add click event to show events for this day
        dayElement.addEventListener('click', () => {
            // Remove selected class from all days
            document.querySelectorAll('#calendar-days > div').forEach(el => {
                if (el.classList.contains('bg-blue-600') && !el.classList.contains('font-medium')) {
                    el.classList.remove('bg-blue-600', 'text-white');
                    el.classList.add('text-gray-700', 'hover:bg-gray-100');
                }
            });
            
            // Add selected class to clicked day (if not current day)
            if (!(isCurrentMonth && day === currentDay)) {
                dayElement.classList.remove('text-gray-700', 'hover:bg-gray-100');
                dayElement.classList.add('bg-blue-600', 'text-white');
            }
            
            showDayEvents(year, month, day);
        });
    }
}

// Update the navigateMonth function
function navigateMonth(direction) {
    const calendarTitle = document.getElementById('calendar-title');
    if (!calendarTitle) return;
    
    const [month, year] = calendarTitle.textContent.split(' ');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = monthNames.indexOf(month);
    let yearNum = parseInt(year);
    
    monthIndex += direction;
    
    if (monthIndex < 0) {
        monthIndex = 11;
        yearNum--;
    } else if (monthIndex > 11) {
        monthIndex = 0;
        yearNum++;
    }
    
    // Update calendar title
    calendarTitle.textContent = `${monthNames[monthIndex]} ${yearNum}`;
    
    // Regenerate calendar days
    generateCalendarDays(yearNum, monthIndex);
}

// Update the showDayEvents function
function showDayEvents(year, month, day) {
    const eventsContainer = document.getElementById('calendar-events');
    if (!eventsContainer) return;
    
    const formattedDate = `${month + 1}/${day}/${year}`;
    console.log(`Showing events for ${formattedDate}`);
    
    // For demonstration, let's create some sample events for specific dates
    const events = [];
    
    // Add some sample events
    if (day === 15) {
        events.push({ title: 'Team Meeting', time: '10:00 AM', type: 'work' });
        events.push({ title: 'Project Deadline', time: '5:00 PM', type: 'important' });
    } else if (day === 20) {
        events.push({ title: 'Doctor Appointment', time: '2:30 PM', type: 'personal' });
    } else if (day % 7 === 0) {
        events.push({ title: 'Weekly Review', time: '9:00 AM', type: 'work' });
    }
    
    // Display events
    if (events.length > 0) {
        eventsContainer.innerHTML = events.map(event => {
            let typeClass = '';
            if (event.type === 'work') typeClass = 'border-blue-500';
            else if (event.type === 'important') typeClass = 'border-red-500';
            else if (event.type === 'personal') typeClass = 'border-green-500';
            
            return `
                <div class="p-2 border-l-4 ${typeClass} bg-gray-50 rounded">
                    <div class="font-medium">${event.title}</div>
                    <div class="text-xs text-gray-500">${event.time}</div>
                </div>
            `;
        }).join('');
    } else {
        eventsContainer.innerHTML = '<div class="text-sm text-gray-500 italic">No events for selected date</div>';
    }
}
