# Dashboard Templates Documentation

This directory contains HTML templates used throughout the Ka0s Dashboard for rendering different sections and components.

## Template Overview

### Core Templates

#### index.html
- Main dashboard template
- Defines the overall dashboard structure
- Includes placeholders for dynamic content

#### navbar.html
- Navigation bar template
- Contains menu structure and navigation elements
- Includes user interface controls

#### footer.html
- Dashboard footer template
- Contains copyright and version information
- Includes additional links and information

### Section Templates

#### leadTime.html
- Template for Lead Time metrics visualization
- Includes charts and data display components
- Contains performance metric layouts

#### actionsPerformance.html
- Actions performance monitoring template
- Displays workflow action statistics
- Includes performance charts and metrics

#### backLogs.html
- Backlogs visualization template
- Shows pending and completed tasks
- Includes task management interface

#### handlerFailure.html & handlerSuccess.html
- Templates for handling success/failure states
- Displays error and success metrics
- Includes status visualization components

#### endWorkflow.html
- Workflow completion template
- Shows workflow summary and results
- Includes completion statistics

#### calendar.html
- Calendar view template
- Displays scheduled events and timelines
- Includes date-based visualization

## Template Usage

- Templates are loaded dynamically by the dashboard
- Use placeholders for dynamic content (e.g., {{TITLE}})
- Support responsive design principles
- Integrate with TailwindCSS for styling

## Integration

- Templates are processed by the JavaScript modules
- Data is injected from JSON configuration files
- Styling is handled through TailwindCSS classes
- Dynamic content is managed by dashboard.js