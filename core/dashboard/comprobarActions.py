import os
import json
import requests
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('github-actions-checker')

class GitHubActionsChecker:
    def __init__(self, token=None):
        self.token = token or os.environ.get('GH_TOKEN')
        if not self.token:
            logger.warning("No GitHub token provided. API rate limits may apply.")
        
        self.headers = {
            'Accept': 'application/vnd.github.v3+json'
        }
        if self.token:
            self.headers['Authorization'] = f'token {self.token}'
        
        self.repo_owner = os.environ.get('GITHUB_REPOSITORY_OWNER', 'default_owner')
        self.repo_name = os.environ.get('GITHUB_REPOSITORY', 'default_repo').split('/')[-1]
        self.base_url = f"https://api.github.com/repos/{self.repo_owner}/{self.repo_name}"
    
    def get_workflow_runs(self, workflow_id=None, branch=None, status=None, limit=10):
        """
        Get recent workflow runs from GitHub Actions
        
        Args:
            workflow_id (str, optional): Filter by workflow ID
            branch (str, optional): Filter by branch name
            status (str, optional): Filter by status (completed, success, failure)
            limit (int, optional): Maximum number of runs to return
            
        Returns:
            list: List of workflow runs
        """
        url = f"{self.base_url}/actions/runs"
        params = {'per_page': limit}
        
        if workflow_id:
            url = f"{self.base_url}/actions/workflows/{workflow_id}/runs"
        if branch:
            params['branch'] = branch
        if status:
            params['status'] = status
            
        try:
            response = requests.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            data = response.json()
            
            if 'workflow_runs' in data:
                return data['workflow_runs']
            return []
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching workflow runs: {str(e)}")
            return []
    
    def get_workflow_run_details(self, run_id):
        """
        Get detailed information about a specific workflow run
        
        Args:
            run_id (str): The workflow run ID
            
        Returns:
            dict: Workflow run details
        """
        url = f"{self.base_url}/actions/runs/{run_id}"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching workflow run details: {str(e)}")
            return {}
    
    def get_workflow_run_jobs(self, run_id):
        """
        Get jobs for a specific workflow run
        
        Args:
            run_id (str): The workflow run ID
            
        Returns:
            list: List of jobs in the workflow run
        """
        url = f"{self.base_url}/actions/runs/{run_id}/jobs"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            data = response.json()
            
            if 'jobs' in data:
                return data['jobs']
            return []
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching workflow run jobs: {str(e)}")
            return []
    
    def get_workflow_run_logs(self, run_id):
        """
        Get logs URL for a specific workflow run
        
        Args:
            run_id (str): The workflow run ID
            
        Returns:
            str: URL to download logs
        """
        url = f"{self.base_url}/actions/runs/{run_id}/logs"
        
        try:
            response = requests.get(url, headers=self.headers, allow_redirects=False)
            
            if response.status_code == 302:
                return response.headers.get('Location')
            return None
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching workflow run logs: {str(e)}")
            return None
    
    def generate_actions_report(self, output_path, limit=10):
        """
        Generate a report of recent GitHub Actions runs
        
        Args:
            output_path (str): Path to save the report
            limit (int, optional): Maximum number of runs to include
            
        Returns:
            str: Path to the generated report file
        """
        runs = self.get_workflow_runs(limit=limit)
        
        report = {
            'generated_at': datetime.now().isoformat(),
            'repository': f"{self.repo_owner}/{self.repo_name}",
            'total_runs': len(runs),
            'runs': []
        }
        
        for run in runs:
            run_details = {
                'id': run.get('id'),
                'name': run.get('name'),
                'workflow_id': run.get('workflow_id'),
                'status': run.get('status'),
                'conclusion': run.get('conclusion'),
                'branch': run.get('head_branch'),
                'commit_sha': run.get('head_sha'),
                'created_at': run.get('created_at'),
                'updated_at': run.get('updated_at'),
                'url': run.get('html_url'),
                'jobs': []
            }
            
            # Get jobs for this run
            jobs = self.get_workflow_run_jobs(run.get('id'))
            for job in jobs:
                job_details = {
                    'id': job.get('id'),
                    'name': job.get('name'),
                    'status': job.get('status'),
                    'conclusion': job.get('conclusion'),
                    'started_at': job.get('started_at'),
                    'completed_at': job.get('completed_at'),
                    'steps': job.get('steps', [])
                }
                run_details['jobs'].append(job_details)
            
            report['runs'].append(run_details)
        
        # Save report to file
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w') as f:
            json.dump(report, f, indent=2)
        
        logger.info(f"GitHub Actions report generated: {output_path}")
        return output_path

def main():
    # Example usage
    token = os.environ.get('GH_TOKEN')
    checker = GitHubActionsChecker(token)
    
    # Generate report
    output_path = os.path.join('core', 'results', 'dashboard', f'github_actions_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json')
    checker.generate_actions_report(output_path)

if __name__ == "__main__":
    main()