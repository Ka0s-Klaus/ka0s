import os
import sys
import json
import argparse
import logging
from datetime import datetime
import subprocess
import shutil
from pathlib import Path

# Add the parent directory to sys.path to import local modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Import local modules
from dashboard.comprobarActions import GitHubActionsChecker

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(os.path.join('core', 'logs', 'dashboard.log')),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger('dashboard-principal')

class DashboardManager:
    def __init__(self, run_id=None):
        self.run_id = run_id or os.environ.get('KAOS_CODE')
        self.results_dir = os.path.join('core', 'results')
        self.dashboard_dir = os.path.join(self.results_dir, 'dashboard')
        self.config_dir = os.path.join('core', 'dashboard', 'config')
        self.templates_dir = os.path.join('core', 'dashboard', 'templates')
        
        # Create necessary directories
        os.makedirs(self.dashboard_dir, exist_ok=True)
        os.makedirs(os.path.join('core', 'logs'), exist_ok=True)
        
        # Initialize GitHub Actions checker
        self.actions_checker = GitHubActionsChecker()
        
        logger.info(f"Dashboard Manager initialized with run_id: {self.run_id}")
    
    def load_config(self):
        """Load dashboard configuration"""
        config_file = os.path.join(self.config_dir, 'dashboard_config.json')
        
        try:
            with open(config_file, 'r') as f:
                config = json.load(f)
            logger.info(f"Configuration loaded from {config_file}")
            return config
        except Exception as e:
            logger.error(f"Error loading configuration: {str(e)}")
            # Create default config if not exists
            default_config = {
                "title": "Ka0s Dashboard",
                "description": "Visualization of Ka0s execution results",
                "version": "1.0.0",
                "components": ["summary", "actions", "logs"]
            }
            
            # Save default config
            os.makedirs(self.config_dir, exist_ok=True)
            with open(config_file, 'w') as f:
                json.dump(default_config, f, indent=2)
            
            logger.info(f"Created default configuration at {config_file}")
            return default_config
    
    def collect_data(self):
        """Collect data for dashboard visualization"""
        data = {
            'metadata': {
                'run_id': self.run_id,
                'collected_at': datetime.now().isoformat(),
                'components': []
            },
            'components': {}
        }
        
        # Collect event data
        event_data_file = f"{os.path.join(self.results_dir, 'event_data')}{self.run_id}.json"
        if os.path.exists(event_data_file):
            try:
                with open(event_data_file, 'r') as f:
                    event_data = f.read()
                    # Parse JSON lines if possible
                    event_json = {}
                    for line in event_data.splitlines():
                        if line.strip() and line.strip()[0] == '{':
                            try:
                                line_json = json.loads(line)
                                event_json.update(line_json)
                            except:
                                pass
                
                data['components']['event'] = {
                    'type': 'event',
                    'title': 'Event Data',
                    'data': event_json
                }
                data['metadata']['components'].append('event')
                logger.info(f"Collected event data from {event_data_file}")
            except Exception as e:
                logger.error(f"Error collecting event data: {str(e)}")
        
        # Collect GitHub Actions data
        try:
            actions_report_file = os.path.join(self.dashboard_dir, f'github_actions_report_{self.run_id}.json')
            self.actions_checker.generate_actions_report(actions_report_file, limit=5)
            
            with open(actions_report_file, 'r') as f:
                actions_data = json.load(f)
            
            data['components']['actions'] = {
                'type': 'actions',
                'title': 'GitHub Actions',
                'data': actions_data
            }
            data['metadata']['components'].append('actions')
            logger.info(f"Collected GitHub Actions data")
        except Exception as e:
            logger.error(f"Error collecting GitHub Actions data: {str(e)}")
        
        # Save collected data
        output_file = os.path.join(self.dashboard_dir, f'dashboard_data_{self.run_id}.json')
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2)
        
        logger.info(f"Data collection completed and saved to {output_file}")
        return data
    
    def generate_dashboard(self):
        """Generate dashboard HTML from collected data"""
        # Load configuration
        config = self.load_config()
        
        # Collect data
        data = self.collect_data()
        
        # Load HTML template
        template_file = os.path.join(self.templates_dir, 'dashboard_template.html')
        if not os.path.exists(template_file):
            # Create default template if not exists
            os.makedirs(self.templates_dir, exist_ok=True)
            default_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background-color: #3498db; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .component { background-color: white; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .component-header { padding: 15px; border-bottom: 1px solid #eee; }
        .component-content { padding: 15px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
        th { background-color: #f2f2f2; }
        .footer { text-align: center; margin-top: 20px; color: #7f8c8d; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{TITLE}}</h1>
            <p>Run ID: {{RUN_ID}} | Generated: {{GENERATED_AT}}</p>
        </div>
        
        {{COMPONENTS}}
        
        <div class="footer">
            <p>Ka0s Dashboard - Generated on {{GENERATED_AT}}</p>
        </div>
    </div>
</body>
</html>"""
            with open(template_file, 'w') as f:
                f.write(default_template)
            logger.info(f"Created default template at {template_file}")
        
        with open(template_file, 'r') as f:
            template = f.read()
        
        # Generate component HTML
        components_html = []
        for component_name in data['metadata']['components']:
            component = data['components'][component_name]
            component_type = component.get('type', 'generic')
            
            # Generate component HTML based on type
            if component_type == 'event':
                html = self._generate_event_component_html(component)
            elif component_type == 'actions':
                html = self._generate_actions_component_html(component)
            else:
                html = self._generate_generic_component_html(component)
            
            components_html.append(html)
        
        # Replace placeholders in template
        html = template.replace('{{TITLE}}', config.get('title', 'Ka0s Dashboard'))
        html = html.replace('{{RUN_ID}}', str(self.run_id))
        html = html.replace('{{GENERATED_AT}}', datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        html = html.replace('{{COMPONENTS}}', '\n'.join(components_html))
        
        # Save HTML file
        output_file = os.path.join(self.dashboard_dir, f'dashboard_{self.run_id}.html')
        with open(output_file, 'w') as f:
            f.write(html)
        
        logger.info(f"Dashboard generated: {output_file}")
        return output_file
    
    def _generate_event_component_html(self, component):
        """Generate HTML for event component"""
        title = component.get('title', 'Event Data')
        data = component.get('data', {})
        
        # Generate table rows for event data
        rows = []
        for key, value in data.items():
            if isinstance(value, dict):
                value = json.dumps(value, indent=2)
            rows.append(f"<tr><td>{key}</td><td><pre>{value}</pre></td></tr>")
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {''.join(rows)}
                    </tbody>
                </table>
            </div>
        </div>
        """
    
    def _generate_actions_component_html(self, component):
        """Generate HTML for GitHub Actions component"""
        title = component.get('title', 'GitHub Actions')
        data = component.get('data', {})
        runs = data.get('runs', [])
        
        # Generate table rows for runs
        rows = []
        for run in runs:
            status_color = '#2ecc71' if run.get('conclusion') == 'success' else '#e74c3c'
            rows.append(f"""
            <tr>
                <td>{run.get('name', 'Unknown')}</td>
                <td>{run.get('workflow_id', 'Unknown')}</td>
                <td><span style="color: {status_color};">{run.get('conclusion', 'Unknown')}</span></td>
                <td>{run.get('created_at', 'Unknown')}</td>
                <td><a href="{run.get('url', '#')}" target="_blank">View</a></td>
            </tr>
            """)
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                <table>
                    <thead>
                        <tr>
                            <th>Workflow</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {''.join(rows) if rows else '<tr><td colspan="5">No workflow runs found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
        """
    
    def _generate_generic_component_html(self, component):
        """Generate HTML for generic component"""
        title = component.get('title', 'Component')
        data = component.get('data', {})
        
        # Generate content based on data type
        content = ""
        if isinstance(data, dict):
            # Generate table for dictionary data
            rows = []
            for key, value in data.items():
                if isinstance(value, (dict, list)):
                    value = json.dumps(value, indent=2)
                rows.append(f"<tr><td>{key}</td><td><pre>{value}</pre></td></tr>")
            
            content = f"""
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {''.join(rows)}
                </tbody>
            </table>
            """
        elif isinstance(data, list):
            # Generate list for array data
            items = []
            for item in data:
                if isinstance(item, (dict, list)):
                    item = json.dumps(item, indent=2)
                items.append(f"<li><pre>{item}</pre></li>")
            
            content = f"<ul>{''.join(items)}</ul>"
        else:
            # Simple text content
            content = f"<pre>{data}</pre>"
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                {content}
            </div>
        </div>
        """
    
    def serve_dashboard(self, port=8000):
        """Serve the dashboard using a simple HTTP server"""
        dashboard_file = os.path.join(self.dashboard_dir, f'dashboard_{self.run_id}.html')
        
        if not os.path.exists(dashboard_file):
            dashboard_file = self.generate_dashboard()
        
        # Create a simple index.html that redirects to the dashboard
        index_file = os.path.join(self.dashboard_dir, 'index.html')
        with open(index_file, 'w') as f:
            f.write(f"""<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=dashboard_{self.run_id}.html">
</head>
<body>
    <p>Redirecting to <a href="dashboard_{self.run_id}.html">dashboard</a>...</p>
</body>
</html>""")
        
        logger.info(f"Starting HTTP server on port {port}")
        logger.info(f"Dashboard available at: http://localhost:{port}/")
        
        # Change to the dashboard directory and start the server
        os.chdir(self.dashboard_dir)
        
        try:
            # Use Python's built-in HTTP server
            from http.server import HTTPServer, SimpleHTTPRequestHandler
            
            class DashboardHandler(SimpleHTTPRequestHandler):
                def log_message(self, format, *args):
                    logger.info(format % args)
            
            httpd = HTTPServer(('localhost', port), DashboardHandler)
            httpd.serve_forever()
        except KeyboardInterrupt:
            logger.info("Server stopped")
        except Exception as e:
            logger.error(f"Error serving dashboard: {str(e)}")

def parse_arguments():
    parser = argparse.ArgumentParser(description='Ka0s Dashboard Manager')
    parser.add_argument('--run-id', type=str, help='Run ID for the dashboard')
    parser.add_argument('--generate', action='store_true', help='Generate the dashboard')
    parser.add_argument('--serve', action='store_true', help='Serve the dashboard')
    return parser.parse_args()

            # Generate component HTML
        components_html = []
        for component_name in data['metadata']['components']:
            component = data['components'][component_name]
            component_type = component.get('type', 'generic')
            
            # Generate component HTML based on type
            if component_type == 'event':
                html = self._generate_event_component_html(component)
            elif component_type == 'actions':
                html = self._generate_actions_component_html(component)
            else:
                html = self._generate_generic_component_html(component)
            
            components_html.append(html)
        
        # Replace placeholders in template
        html = template.replace('{{TITLE}}', config.get('title', 'Ka0s Dashboard'))
        html = html.replace('{{RUN_ID}}', str(self.run_id))
        html = html.replace('{{GENERATED_AT}}', datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        html = html.replace('{{COMPONENTS}}', '\n'.join(components_html))
        
        # Save HTML file
        output_file = os.path.join(self.dashboard_dir, f'dashboard_{self.run_id}.html')
        with open(output_file, 'w') as f:
            f.write(html)
        
        logger.info(f"Dashboard generated: {output_file}")
        return output_file
    
    def _generate_event_component_html(self, component):
        """Generate HTML for event component"""
        title = component.get('title', 'Event Data')
        data = component.get('data', {})
        
        # Generate table rows for event data
        rows = []
        for key, value in data.items():
            if isinstance(value, dict):
                value = json.dumps(value, indent=2)
            rows.append(f"<tr><td>{key}</td><td><pre>{value}</pre></td></tr>")
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {''.join(rows)}
                    </tbody>
                </table>
            </div>
        </div>
        """
    
    def _generate_actions_component_html(self, component):
        """Generate HTML for GitHub Actions component"""
        title = component.get('title', 'GitHub Actions')
        data = component.get('data', {})
        runs = data.get('runs', [])
        
        # Generate table rows for runs
        rows = []
        for run in runs:
            status_color = '#2ecc71' if run.get('conclusion') == 'success' else '#e74c3c'
            rows.append(f"""
            <tr>
                <td>{run.get('name', 'Unknown')}</td>
                <td>{run.get('workflow_id', 'Unknown')}</td>
                <td><span style="color: {status_color};">{run.get('conclusion', 'Unknown')}</span></td>
                <td>{run.get('created_at', 'Unknown')}</td>
                <td><a href="{run.get('url', '#')}" target="_blank">View</a></td>
            </tr>
            """)
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                <table>
                    <thead>
                        <tr>
                            <th>Workflow</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {''.join(rows) if rows else '<tr><td colspan="5">No workflow runs found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
        """
    
    def _generate_generic_component_html(self, component):
        """Generate HTML for generic component"""
        title = component.get('title', 'Component')
        data = component.get('data', {})
        
        # Generate content based on data type
        content = ""
        if isinstance(data, dict):
            # Generate table for dictionary data
            rows = []
            for key, value in data.items():
                if isinstance(value, (dict, list)):
                    value = json.dumps(value, indent=2)
                rows.append(f"<tr><td>{key}</td><td><pre>{value}</pre></td></tr>")
            
            content = f"""
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {''.join(rows)}
                </tbody>
            </table>
            """
        elif isinstance(data, list):
            # Generate list for array data
            items = []
            for item in data:
                if isinstance(item, (dict, list)):
                    item = json.dumps(item, indent=2)
                items.append(f"<li><pre>{item}</pre></li>")
            
            content = f"<ul>{''.join(items)}</ul>"
        else:
            # Simple text content
            content = f"<pre>{data}</pre>"
        
        return f"""
        <div class="component">
            <div class="component-header">
                <h2>{title}</h2>
            </div>
            <div class="component-content">
                {content}
            </div>
        </div>
        """
    
    def serve_dashboard(self, port=8000):
        """Serve the dashboard using a simple HTTP server"""
        dashboard_file = os.path.join(self.dashboard_dir, f'dashboard_{self.run_id}.html')
        
        if not os.path.exists(dashboard_file):
            dashboard_file = self.generate_dashboard()
        
        # Create a simple index.html that redirects to the dashboard
        index_file = os.path.join(self.dashboard_dir, 'index.html')
        with open(index_file, 'w') as f:
            f.write(f"""<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=dashboard_{self.run_id}.html">
</head>
<body>
    <p>Redirecting to <a href="dashboard_{self.run_id}.html">dashboard</a>...</p>
</body>
</html>""")
        
        logger.info(f"Starting HTTP server on port {port}")
        logger.info(f"Dashboard available at: http://localhost:{port}/")
        
        # Change to the dashboard directory and start the server
        os.chdir(self.dashboard_dir)
        
        try:
            # Use Python's built-in HTTP server
            from http.server import HTTPServer, SimpleHTTPRequestHandler
            
            class DashboardHandler(SimpleHTTPRequestHandler):
                def log_message(self, format, *args):
                    logger.info(format % args)
            
            httpd = HTTPServer(('localhost', port), DashboardHandler)
            httpd.serve_forever()
        except KeyboardInterrupt:
            logger.info("Server stopped")
        except Exception as e:
            logger.error(f"Error serving dashboard: {str(e)}")

def parse_arguments():
    parser = argparse.ArgumentParser(description='Ka0s Dashboard Manager')
    parser.add_argument('--run-id', help='GitHub Actions run ID')
    parser.add_argument('--port', type=int, default=8000, help='Port for HTTP server')
    parser.add_argument('--serve', action='store_true', help='Serve the dashboard')
    parser.add_argument('--generate', action='store_true', help='Generate the dashboard')
    return parser.parse_args()

def main():
    args = parse_arguments()
    
    # Create dashboard manager
    dashboard = DashboardManager(run_id=args.run_id)
    
    if args.generate:
        # Generate dashboard
        output_file = dashboard.generate_dashboard()
        print(f"Dashboard generated: {output_file}")
    
    if args.serve:
        # Serve dashboard
        dashboard.serve_dashboard(port=args.port)
    
    if not args.generate and not args.serve:
        # Default: generate and serve
        dashboard.generate_dashboard()
        dashboard.serve_dashboard(port=args.port)

if __name__ == "__main__":
    main()