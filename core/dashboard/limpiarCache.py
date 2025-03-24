import os
import shutil
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('dashboard-cache-cleaner')

def clear_dashboard_cache():
    """Clear dashboard cache files"""
    dashboard_dir = os.path.join('core', 'results', 'dashboard')
    
    try:
        if os.path.exists(dashboard_dir):
            # Remove all files in the dashboard directory
            for file in os.listdir(dashboard_dir):
                file_path = os.path.join(dashboard_dir, file)
                if os.path.isfile(file_path):
                    os.remove(file_path)
                    logger.info(f"Removed file: {file_path}")
            
            logger.info(f"Dashboard cache cleared successfully")
        else:
            logger.info(f"Dashboard directory does not exist: {dashboard_dir}")
    except Exception as e:
        logger.error(f"Error clearing dashboard cache: {str(e)}")

if __name__ == "__main__":
    clear_dashboard_cache()
    print("Dashboard cache cleared. Your changes will be applied on the next dashboard generation.")