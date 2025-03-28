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
logger = logging.getLogger('dashboard-processor')

def parse_arguments():
    parser = argparse.ArgumentParser(description='Process data for dashboard visualization')
    parser.add_argument('--run-id', required=True, help='GitHub Actions run ID')
    return parser.parse_args()

def load_configuration():
    """Load dashboard configuration from JSON files"""
    config_path = os.path.join('core', 'dashboard', 'config')
    config = {}
    
    try:
        # Load main configuration
        with open(os.path.join(config_path, 'dashboard_config.json'), 'r') as f:
            config['main'] = json.load(f)
            
        # Load visualization components
        components_path = os.path.join(config_path, 'components')
        config['components'] = {}
        
        for filename in os.listdir(components_path):
            if filename.endswith('.json'):
                component_name = os.path.splitext(filename)[0]
                with open(os.path.join(components_path, filename), 'r') as f:
                    config['components'][component_name] = json.load(f)
                    
        logger.info(f"Loaded configuration with {len(config['components'])} components")
        return config
    
    except Exception as e:
        logger.error(f"Error loading configuration: {str(e)}")
        raise

def process_data(run_id):
    """Process data based on configuration and prepare for dashboard"""
    config = load_configuration()
    results_path = os.path.join('core', 'results')
    
    # Create output directory if it doesn't exist
    os.makedirs(os.path.join(results_path, 'dashboard'), exist_ok=True)
    
    # Process data for each component
    dashboard_data = {
        'metadata': {
            'run_id': run_id,
            'generated_at': datetime.now().isoformat(),
            'components': []
        },
        'components': {}
    }
    
    for component_name, component_config in config['components'].items():
        try:
            logger.info(f"Processing component: {component_name}")
            

            dashboard_data['components'][component_name] = {
                'type': component_config.get('type', 'generic'),
                'title': component_config.get('title', component_name),
                'data': {}  
            }
            
            dashboard_data['metadata']['components'].append(component_name)
            
        except Exception as e:
            logger.error(f"Error processing component {component_name}: {str(e)}")
    
    # Save processed data
    output_file = os.path.join(results_path, 'dashboard', f'dashboard_data_{run_id}.json')
    with open(output_file, 'w') as f:
        json.dump(dashboard_data, f, indent=2)
    
    logger.info(f"Dashboard data saved to {output_file}")
    return output_file

def main():
    args = parse_arguments()
    try:
        output_file = process_data(args.run_id)
        logger.info(f"Dashboard processing completed successfully: {output_file}")
    except Exception as e:
        logger.error(f"Dashboard processing failed: {str(e)}")
        exit(1)

if __name__ == "__main__":
    main()