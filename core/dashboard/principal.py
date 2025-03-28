<<<<<<< HEAD
import os
import sys
import json
import argparse
import logging
from datetime import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)
logger = logging.getLogger('dashboard-principal')

class DashboardManager:
    def __init__(self):
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.dashboard_dir = os.path.join(self.base_dir, 'dashboard')
        self.templates_dir = self.base_dir
        
        # Create necessary directories
        os.makedirs(self.dashboard_dir, exist_ok=True)
        os.makedirs(os.path.join(self.dashboard_dir, 'sections'), exist_ok=True)
        
        logger.info("Dashboard Manager initialized")

    def generate_dashboard(self):
        """Generate dashboard HTML content from JSON files"""
        # prueba
        # Load principal.json for title and hello world message
        principal_json_path = os.path.join(self.dashboard_dir, 'principal.json')
        title = "Ka0s Dashboard"  # Default title
        hello_world_message = "Hello World"  # Default message
        seccion1_data = None  # Default seccion1 data
        
        try:
            if os.path.exists(principal_json_path):
                with open(principal_json_path, 'r', encoding='utf-8') as f:
                    principal_config = json.load(f)
                    title = principal_config.get('title', title)
                    hello_world_message = principal_config.get('hello_world', hello_world_message)
                    logger.info(f"Loaded title and hello world message from principal.json")
            else:
                logger.warning(f"principal.json not found at {principal_json_path}")
        except Exception as e:
            logger.error(f"Error loading principal.json: {str(e)}")
        
        # Load seccion1.json from the sections directory
        seccion1_json_path = os.path.join(self.dashboard_dir, 'sections', 'seccion1.json')
        try:
            if os.path.exists(seccion1_json_path):
                with open(seccion1_json_path, 'r', encoding='utf-8') as f:
                    seccion1_data = json.load(f)
                    logger.info(f"Loaded data from seccion1.json")
            else:
                logger.warning(f"seccion1.json not found at {seccion1_json_path}")
        except Exception as e:
            logger.error(f"Error loading seccion1.json: {str(e)}")
        
        # Load seccion2.json from the sections directory
        seccion2_json_path = os.path.join(self.dashboard_dir, 'sections', 'seccion2.json')
        seccion2_data = None
        try:
            if os.path.exists(seccion2_json_path):
                with open(seccion2_json_path, 'r', encoding='utf-8') as f:
                    seccion2_data = json.load(f)
                    logger.info(f"Loaded data from seccion2.json")
            else:
                logger.warning(f"seccion2.json not found at {seccion2_json_path}")
        except Exception as e:
            logger.error(f"Error loading seccion2.json: {str(e)}")
        

         # Load footer.json from the sections directory
        footer_json_path = os.path.join(self.dashboard_dir, 'sections', 'footer.json')
        footer_data = None
        try:
            if os.path.exists(footer_json_path):
                with open(footer_json_path, 'r', encoding='utf-8') as f:
                    footer_data = json.load(f)
                    logger.info(f"Loaded data from footer.json")
            else:
                logger.warning(f"footer.json not found at {footer_json_path}")
        except Exception as e:
            logger.error(f"Error loading footer.json: {str(e)}")
        # Load Index.html template
        index_file = os.path.join(self.templates_dir, 'Index.html')
        if not os.path.exists(index_file):
            logger.error(f"Index.html file not found: {index_file}")
            return None
        
        with open(index_file, 'r', encoding='utf-8') as f:
            html = f.read()
        
        # Inside generate_dashboard method
        # Replace placeholders in template
        html = html.replace('{{TITLE}}', str(title))
        logger.info(f"After TITLE replacement: {html[:50]}...")
        html = html.replace('{{HELLO_WORLD}}', str(hello_world_message))
        logger.info(f"After HELLO_WORLD replacement: {html[:50]}...")
        
        # Add seccion 1 data if available
        seccion1_html = ""
        if seccion1_data:
            # Get styles and layout from JSON
            styles = seccion1_data.get('styles', {})
            layout = seccion1_data.get('layout', {})
            
            # Create CSS styles
            section_style = '; '.join([f'{k}: {v}' for k, v in styles.get('section', {}).items()])
            title_style = '; '.join([f'{k}: {v}' for k, v in styles.get('title', {}).items()])
            desc_style = '; '.join([f'{k}: {v}' for k, v in styles.get('description', {}).items()])
            message_style = '; '.join([f'{k}: {v}' for k, v in styles.get('message', {}).items()])
            
            # Create layout style
            layout_style = f"""
                display: {layout.get('type', 'block')};
                flex-direction: {layout.get('direction', 'row')};
                align-items: {layout.get('alignment', 'flex-start')};
                gap: {layout.get('spacing', '0')};
                max-width: {layout.get('maxWidth', 'none')};
                margin: {layout.get('margin', '0')};
            """
            
            # Build HTML with styles
            seccion1_html = f"""
                <div class='seccion1' style='{section_style}'>
                    <div style='{layout_style}'>
                        <h2 style='{title_style}'>{seccion1_data.get('title', 'Sección 1')}</h2>
                        <p style='{desc_style}'>{seccion1_data.get('description', '')}</p>
                        <p class='hola-seccion1' style='{message_style}'>{seccion1_data.get('hola_seccion1', '')}</p>
                    </div>
                </div>
            """
        
        # Add seccion2 data if available
        seccion2_html = ""
        if seccion2_data:
            # Get styles and layout from JSON
            styles = seccion2_data.get('styles', {})
            layout = seccion2_data.get('layout', {})
            
            # Create CSS styles
            section_style = '; '.join([f'{k}: {v}' for k, v in styles.get('section', {}).items()])
            title_style = '; '.join([f'{k}: {v}' for k, v in styles.get('title', {}).items()])
            desc_style = '; '.join([f'{k}: {v}' for k, v in styles.get('description', {}).items()])
            message_style = '; '.join([f'{k}: {v}' for k, v in styles.get('message', {}).items()])
            
            # Create layout style
            layout_style = f"""
                display: {layout.get('type', 'block')};
                flex-direction: {layout.get('direction', 'row')};
                align-items: {layout.get('alignment', 'flex-start')};
                gap: {layout.get('spacing', '0')};
                max-width: {layout.get('maxWidth', 'none')};
                margin: {layout.get('margin', '0')};
            """
            
            # Build HTML with styles
            seccion2_html = f"""
                <div class='seccion2' style='{section_style}'>
                    <div style='{layout_style}'>
                        <h2 style='{title_style}'>{seccion2_data.get('title', 'Sección 2')}</h2>
                        <p style='{desc_style}'>{seccion2_data.get('description', '')}</p>
                        <p class='hola-seccion1' style='{message_style}'>{seccion2_data.get('hola_seccion1', '')}</p>
                    </div>
                </div>
            """
            logger.info(f"Generated seccion2_html with length: {len(seccion2_html)}")
        
        # Replace all placeholders
        html = html.replace('{{TITLE}}', str(title))
        html = html.replace('{{HELLO_WORLD}}', str(hello_world_message))
        html = html.replace('{{SECCION1}}', seccion1_html)
        html = html.replace('{{SECCION2}}', seccion2_html)
        
        logger.info(f"Final HTML length: {len(html)}")
     
    # Add footer data if available
        footer_html = ""
        if footer_data:
            styles = footer_data.get('styles', {})
            layout = footer_data.get('layout', {})
            
            section_style = '; '.join([f'{k}: {v}' for k, v in styles.get('section', {}).items()])
            title_style = '; '.join([f'{k}: {v}' for k, v in styles.get('title', {}).items()])
            desc_style = '; '.join([f'{k}: {v}' for k, v in styles.get('description', {}).items()])
            copyright_style = '; '.join([f'{k}: {v}' for k, v in styles.get('copyright', {}).items()])
            
            layout_style = f"""
                display: {layout.get('type', 'block')};
                flex-direction: {layout.get('direction', 'row')};
                align-items: {layout.get('alignment', 'flex-start')};
                gap: {layout.get('spacing', '0')};
                max-width: {layout.get('maxWidth', 'none')};
                margin: {layout.get('margin', '0')};
            """
            
            footer_html = f"""
                <footer style='{section_style}'>
                    <div style='{layout_style}'>
                        <h3 style='{title_style}'>{footer_data.get('title', 'Footer')}</h3>
                        <p style='{desc_style}'>{footer_data.get('description', '')}</p>
                        <p style='{copyright_style}'>{footer_data.get('copyright', '')}</p>
                    </div>
                </footer>
            """
        
        html = html.replace('{{FOOTER}}', footer_html)
        logger.info(f"After FOOTER replacement: {html[:50]}...")

        return html
    def serve_dashboard(self, port=8000):
        """Serve the dashboard using a simple HTTP server"""
        # Update Index.html with latest data
        self.generate_dashboard()
        
        logger.info(f"Starting HTTP server on port {port}")
        logger.info(f"Dashboard available at: http://localhost:{port}/")
        
        # Change to the base directory and start the server
        os.chdir(self.base_dir)
        
        try:
            class DashboardHandler(SimpleHTTPRequestHandler):
                # Inside the do_GET method in DashboardHandler class
                def do_GET(self):
                    if self.path == '/' or self.path == '/Index.html' or self.path.startswith('/?'):
                        # Generate fresh content
                        self.send_response(200)
                        self.send_header('Content-type', 'text/html; charset=utf-8')
                        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                        self.end_headers()
                        
                        # Generate dashboard content
                        dashboard_manager = DashboardManager()
                        content = dashboard_manager.generate_dashboard()
                        
                        # Check if content is None before writing
                        if content is None:
                            # Error handling code...
                            error_message = "<html><body><h1>Error 500: Internal Server Error</h1><p>Could not generate dashboard content. Check server logs for details.</p></body></html>"
                            self.wfile.write(error_message.encode('utf-8'))
                        else:
                            # Log the first 100 characters to see if placeholders are still there
                            logger.info(f"Content preview: {content[:100]}...")
                            # Send the content directly as bytes
                            self.wfile.write(content.encode('utf-8'))
                        return
                    return SimpleHTTPRequestHandler.do_GET(self)
                    
                def log_message(self, format, *args):
                    logger.info(format % args)
            
            httpd = HTTPServer(('localhost', port), DashboardHandler)
            httpd.serve_forever()
        except KeyboardInterrupt:
            logger.info("Server stopped")
        except Exception as e:
            logger.error(f"Error serving dashboard: {str(e)}")

def main():
    parser = argparse.ArgumentParser(description='Ka0s Dashboard Manager')
    parser.add_argument('--port', type=int, default=8000, help='Port for HTTP server')
    args = parser.parse_args()
    
    # Create dashboard manager and serve
    dashboard = DashboardManager()
    dashboard.serve_dashboard(port=args.port)

if __name__ == "__main__":
=======
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

# Create logs directory before configuring logging
os.makedirs(os.path.join('core', 'logs'), exist_ok=True)

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

# Import local modules
from dashboard.comprobarActions import GitHubActionsChecker

class DashboardManager:
    def __init__(self, run_id=None):
        self.run_id = run_id or os.environ.get('KAOS_CODE')
        self.results_dir = os.path.join('core', 'results')
        self.dashboard_dir = os.path.join(self.results_dir, 'dashboard')
        self.config_dir = os.path.join('core', 'dashboard', 'config')
        self.templates_dir = os.path.join('core', 'dashboard', 'templates')
        
        # Create necessary directories
        os.makedirs(self.dashboard_dir, exist_ok=True)
        
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
        
        # Load principal.json for hello world message
        principal_json_path = os.path.join('core', 'dashboard', 'dashboard', 'principal.json')
        hello_world_message = "Hello World"  # Default message
        
        try:
            if os.path.exists(principal_json_path):
                with open(principal_json_path, 'r') as f:
                    principal_config = json.load(f)
                    hello_world_message = principal_config.get('hello_world', hello_world_message)
                    logger.info(f"Loaded hello world message from principal.json")
            else:
                logger.warning(f"principal.json not found at {principal_json_path}")
        except Exception as e:
            logger.error(f"Error loading principal.json: {str(e)}")
        
        # Load HTML template
        template_file = os.path.join(self.templates_dir, 'Index.html')
        if not os.path.exists(template_file):
            logger.error(f"Template file not found: {template_file}")
            return None
        
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
        html = html.replace('{{HELLO_WORLD}}', hello_world_message)
        html = html.replace('{{COMPONENTS}}', '\n'.join(components_html))
        
        # Save HTML file
        output_file = os.path.join(self.dashboard_dir, f'dashboard_{self.run_id}.html')
        with open(output_file, 'w') as f:
            f.write(html)
        
        logger.info(f"Dashboard generated: {output_file}")
        return output_file

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
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <thead>
                    <tr>
                        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Key</th>
                        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Value</th>
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
        <div style="background-color: white; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <div style="padding: 15px; border-bottom: 1px solid #eee;">
                <h2>{title}</h2>
            </div>
            <div style="padding: 15px;">
                {content}
            </div>
        </div>
        """
    
    def _generate_event_component_html(self, component):
        """Generate HTML for event component"""
        title = component.get('title', 'Event Data')
        data = component.get('data', {})
        
        # Generate table rows for event data
        rows = []
        for key, value in data.items():
            if isinstance(value, (dict, list)):
                value = json.dumps(value, indent=2)
            rows.append(f"<tr><td>{key}</td><td><pre>{value}</pre></td></tr>")
        
        return f"""
        <div style="background-color: white; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <div style="padding: 15px; border-bottom: 1px solid #eee;">
                <h2>{title}</h2>
            </div>
            <div style="padding: 15px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Field</th>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Value</th>
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
        <div style="background-color: white; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <div style="padding: 15px; border-bottom: 1px solid #eee;">
                <h2>{title}</h2>
            </div>
            <div style="padding: 15px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Workflow</th>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">ID</th>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Status</th>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Created</th>
                            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {''.join(rows) if rows else '<tr><td colspan="5">No workflow runs found</td></tr>'}
                    </tbody>
                </table>
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
>>>>>>> origin
    main()