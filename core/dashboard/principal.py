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
        
        # Load Index.html template
        index_file = os.path.join(self.templates_dir, 'Index.html')
        if not os.path.exists(index_file):
            logger.error(f"Index.html file not found: {index_file}")
            return None
        
        with open(index_file, 'r', encoding='utf-8') as f:
            html = f.read()
        
        # Replace placeholders in template
        html = html.replace('{{TITLE}}', str(title))
        html = html.replace('{{HELLO_WORLD}}', str(hello_world_message))
        
        # Add seccion1 data if available
        seccion1_html = ""
        if seccion1_data:
            seccion1_html = f"<div class='seccion1'><h2>{seccion1_data.get('title', 'Sección 1')}</h2>"
            seccion1_html += f"<p>{seccion1_data.get('description', '')}</p>"
            
            hola_seccion1 = seccion1_data.get('hola_seccion1', '')
            if hola_seccion1:
                seccion1_html += f"<p class='hola-seccion1'>{hola_seccion1}</p>"
        
        html = html.replace('{{SECCION1}}', seccion1_html)
        
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
                def do_GET(self):
                    if self.path == '/' or self.path == '/Index.html':
                        # Generate fresh content
                        self.send_response(200)
                        self.send_header('Content-type', 'text/html')
                        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                        self.end_headers()
                        
                        # Generate dashboard content
                        dashboard_manager = DashboardManager()
                        content = dashboard_manager.generate_dashboard()
                        
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
    main()