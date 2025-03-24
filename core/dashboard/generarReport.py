import os
import json
import argparse
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('dashboard-report-generator')

def parse_arguments():
    parser = argparse.ArgumentParser(description='Generate dashboard report')
    parser.add_argument('--run-id', required=True, help='GitHub Actions run ID')
    return parser.parse_args()

def generate_html_report(run_id):
    """Generate HTML report from processed dashboard data"""
    results_path = os.path.join('core', 'results')
    dashboard_data_file = os.path.join(results_path, 'dashboard', f'dashboard_data_{run_id}.json')
    
    try:
        # Load processed data
        with open(dashboard_data_file, 'r') as f:
            dashboard_data = json.load(f)
        
        # Load HTML template
        template_path = os.path.join('core', 'dashboard', 'templates', 'report_template.html')
        with open(template_path, 'r') as f:
            template = f.read()
        
        # Generate component HTML
        components_html = []
        for component_name in dashboard_data['metadata']['components']:
            component = dashboard_data['components'][component_name]
            component_type = component.get('type', 'generic')
            
            # Load component template
            component_template_path = os.path.join('core', 'dashboard', 'templates', f'{component_type}_component.html')
            with open(component_template_path, 'r') as f:
                component_template = f.read()
            
            # Replace placeholders with actual data
            component_html = component_template.replace('{{TITLE}}', component.get('title', component_name))
            # Additional replacements would be done here based on component type and data
            
            components_html.append(component_html)
        
        # Replace placeholders in main template
        report_html = template.replace('{{RUN_ID}}', run_id)
        report_html = report_html.replace('{{GENERATED_AT}}', dashboard_data['metadata']['generated_at'])
        report_html = report_html.replace('{{COMPONENTS}}', '\n'.join(components_html))
        
        # Save HTML report
        output_file = os.path.join(results_path, 'dashboard', f'dashboard_report_{run_id}.html')
        with open(output_file, 'w') as f:
            f.write(report_html)
        
        logger.info(f"HTML report generated: {output_file}")
        return output_file
        
    except Exception as e:
        logger.error(f"Error generating HTML report: {str(e)}")
        raise

def main():
    args = parse_arguments()
    try:
        output_file = generate_html_report(args.run_id)
        logger.info(f"Report generation completed successfully: {output_file}")
    except Exception as e:
        logger.error(f"Report generation failed: {str(e)}")
        exit(1)

if __name__ == "__main__":
    main()