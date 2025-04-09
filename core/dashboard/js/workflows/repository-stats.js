/**
 * Repository Statistics functionality for Ka0s dashboard
 * This file handles loading and displaying GitHub repository statistics
 */

// Load repository statistics from JSON file
async function loadRepositoryStats() {
    try {
        // Try primary and fallback paths
        const primaryPath = 'dashboard/data/kaos-repository-statistics.json';
        const fallbackPath = '../outputs/w/kaos-repository-statistics.json';
        
        try {
            console.log(`Attempting to fetch from primary path: ${primaryPath}`);
            let response = await fetch(primaryPath);
            
            if (!response.ok) {
                console.log('Primary path failed, trying fallback location...');
                response = await fetch(fallbackPath);
            }
            
            if (response.ok) {
                const data = await response.json();
                console.log(`Successfully loaded data from: ${response.url}`);
                return data;
            } else {
                console.error(`Failed to load data from both locations: ${response.status} ${response.statusText}`);
                return null;
            }
        } catch (e) {
            console.log(`Failed to fetch repository statistics: ${e.message}`);
            return null;
        }
    } catch (error) {
        console.error('Error loading repository statistics:', error);
        return null;
    }
}

// Format date to a readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Calculate commit frequency (commits per day/week/month)
function calculateCommitFrequency(totalCommits) {
    // Assuming the repository is at least 30 days old
    const perDay = (totalCommits / 30).toFixed(1);
    const perWeek = (totalCommits / 4.3).toFixed(1);
    const perMonth = (totalCommits / 1).toFixed(0);
    
    // Return the most appropriate metric
    if (perDay < 1) {
        return `${perWeek}/week`;
    } else if (perDay >= 1 && perDay < 10) {
        return `${perDay}/day`;
    } else {
        return `${perMonth}/month`;
    }
}

// Display repository statistics
async function displayRepositoryStats() {
    const statsData = await loadRepositoryStats();
    if (!statsData) {
        console.error('No statistics data available');
        return;
    }
    
    console.log('Stats data loaded:', statsData);
    
    // Update last updated timestamp
    const lastUpdatedElement = document.getElementById('stats-last-updated');
    if (lastUpdatedElement && statsData.generated_at) {
        // Remove template placeholders if they exist
        if (lastUpdatedElement.textContent.includes('{{')) {
            lastUpdatedElement.textContent = `Last updated: ${formatDate(statsData.generated_at)}`;
        } else {
            lastUpdatedElement.textContent = `Last updated: ${formatDate(statsData.generated_at)}`;
        }
    }
    
    // Update repository link
    const repoLinkElement = document.getElementById('repo-link');
    if (repoLinkElement && statsData.repository) {
        repoLinkElement.href = statsData.repository;
    }
    
    // Update total commits
    updateStatElement('total-commits', statsData.statistics?.total_commits);
    
    // Update recent commits - focus on this data
    updateStatElement('recent-commits', statsData.statistics?.recent_commits);
    
    // Update commit frequency
    if (statsData.statistics?.total_commits) {
        const frequency = calculateCommitFrequency(statsData.statistics.total_commits);
        updateStatElement('commit-frequency', frequency);
    }
}

// Helper function to update statistic elements
function updateStatElement(elementId, value) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID '${elementId}' not found`);
        return;
    }
    
    // Check if element contains template placeholders
    if (element.textContent.includes('{{')) {
        // Replace the entire content
        element.textContent = typeof value === 'number' ? value.toLocaleString() : value;
    } else {
        // Just update the value
        element.textContent = typeof value === 'number' ? value.toLocaleString() : value;
    }
    
    console.log(`Updated ${elementId} with value: ${value}`);
}

// Initialize repository statistics
function initializeRepositoryStats() {
    console.log('Starting repository statistics initialization');
    
    // Check if elements exist
    const elements = [
        'stats-last-updated',
        'repo-link',
        'total-commits',
        'recent-commits',
        'commit-frequency'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`Element ${id} exists: ${element ? 'Yes' : 'No'}`);
    });
    
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(() => {
        displayRepositoryStats().then(() => {
            console.log('Repository statistics display completed');
        }).catch(error => {
            console.error('Error in displayRepositoryStats:', error);
        });
    }, 300);
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing repository stats');
    initializeRepositoryStats();
});

// Also try initializing after window load (as a fallback)
window.addEventListener('load', function() {
    console.log('Window loaded, checking if repository stats need initialization');
    const recentCommitsElement = document.getElementById('recent-commits');
    if (!recentCommitsElement || 
        recentCommitsElement.textContent === '-' || 
        recentCommitsElement.textContent.includes('{{')) {
        console.log('Repository stats need initialization after window load');
        initializeRepositoryStats();
    }
});