import os
import sys
import json
import argparse
import logging
from datetime import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler

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

class DashboardManager:
    def __init__(self, run_id=None):
        self.run_id = run_id or os.environ.get('KAOS_CODE')
        self.results_dir = os.path.join('core', 'results')
        self.dashboard_dir = os.path.join(self.results_dir, 'dashboard')
        self.templates_dir = os.path.join('core', 'dashboard', 'templates')
        
        # Create necessary directories
        os.makedirs(self.dashboard_dir, exist_ok=True)
        
        logger.info(f"Dashboard Manager initialized with run_id: {self.run_id}")
    
    def generate_dashboard(self):
        """Generate dashboard HTML from collected data"""
        # Load principal.json for title and hello world message
        principal_json_path = os.path.join('core', 'dashboard', 'dashboard', 'principal.json')
        title = "Ka0s Dashboard"  # Default title
        hello_world_message = "Hello World"  # Default message
        
        try:
            if os.path.exists(principal_json_path):
                with open(principal_json_path, 'r') as f:
                    principal_config = json.load(f)
                    title = principal_config.get('title', title)
                    hello_world_message = principal_config.get('hello_world', hello_world_message)
                    logger.info(f"Loaded title and hello world message from principal.json")
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
        
        # Replace placeholders in template
        html = template.replace('{{TITLE}}', title)
        html = html.replace('{{HELLO_WORLD}}', hello_world_message)
                
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