# Ka0s Dashboard Documentation

This directory contains the core components of the Ka0s Dashboard, a web-based interface for monitoring and managing Ka0s workflows and performance metrics.

## Directory Structure

```
├── Index.html              # Main dashboard entry point
├── dashboard/              # Dashboard data and configuration
│   ├── principal.json      # Main dashboard configuration
│   └── sections/           # Section-specific JSON configurations
├── images/                 # Dashboard images and assets
├── js/                     # JavaScript modules
├── principal.py           # Python script for dashboard initialization
└── templates/             # HTML templates for dashboard sections
```

## Key Components

### Entry Point
- `Index.html`: The main dashboard interface that loads all necessary scripts and styles.

### Configuration
- `dashboard/`: Contains JSON configuration files for different dashboard sections
  - `principal.json`: Main dashboard settings and configuration
  - `sections/`: Individual configuration files for each dashboard section

### JavaScript Modules
- `js/`: Core JavaScript functionality
  - `dashboard.js`: Main dashboard initialization and coordination
  - `sections.js`: Section-specific functionality and rendering
  - `charts.js`: Chart generation and data visualization
  - `navigation.js`: Navigation and routing functionality
  - `loaders.js`: Data loading and processing utilities
  - `workflows.js`: Workflow management functionality

### Templates
- `templates/`: HTML templates for different dashboard sections
  - Section-specific templates (e.g., `leadTime.html`, `backLogs.html`)
  - Common components (`navbar.html`, `footer.html`)

### Assets
- `images/`: Dashboard images and visual assets

### Backend Integration
- `principal.py`: Python script for dashboard initialization and backend integration

## Features

- Real-time workflow monitoring
- Performance metrics visualization
- Lead time tracking
- Actions performance analysis
- Handler success/failure monitoring
- Workflow completion tracking
- Interactive navigation
- Responsive design

## Technology Stack

- Frontend: HTML5, JavaScript, TailwindCSS
- Data Visualization: Chart.js
- Backend Integration: Python
- Template System: Custom HTML templates
- Configuration: JSON-based