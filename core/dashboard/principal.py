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
    main()