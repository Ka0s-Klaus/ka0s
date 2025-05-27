# GCP Billing Query Documentation

## Overview
This document describes all BigQuery SQL queries available for analyzing GCP billing data.

---

## Queries

### 1. gcp_anomalous_spending.sql
**Purpose**: Identifies unusual spending patterns by service using statistical analysis (z-scores).  
**Key Metrics**:
- `daily_cost`: Actual daily spending
- `avg_daily_cost`: Historical average daily spending
- `z_score`: Standard deviations from the mean
- `currency`: Currency used

**Output**: Services with spending anomalies (>3 standard deviations from mean).

---

### 2. gcp_commitment_utilization.sql
**Purpose**: Analyzes committed usage discounts vs on-demand spending.  
**Key Metrics**:
- `commitment_cost`: Cost from committed usage discounts
- `on_demand_cost`: Regular on-demand costs
- `total_cost`: Combined cost
- `currency`: Currency used

**Output**: Monthly breakdown of commitment utilization by service.

---

### 3. gcp_cost_anomaly_detection.sql
**Purpose**: Detects monthly cost anomalies using statistical methods.  
**Key Metrics**:
- `monthly_cost`: Actual monthly spending
- `avg_monthly_cost`: Historical average
- `z_score`: Standard deviations from mean
- `anomaly_status`: Classification (CRITICAL_HIGH, HIGH, etc.)
- `percent_change`: Percentage difference from average

**Output**: Services with abnormal monthly spending patterns.

---

### 4. gcp_cost_by_project_environment.sql
**Purpose**: Breaks down costs by project and environment label.  
**Key Metrics**:
- `project_name`: GCP project name
- `environment`: Environment label value
- `total_cost`: Monthly cost
- `currency`: Currency used

**Output**: Cost distribution across projects and environments.

---

### 5. gcp_cost_by_region.sql
**Purpose**: Shows cost distribution by geographic region.  
**Key Metrics**:
- `region`: Cloud region
- `zone`: Availability zone
- `service_description`: GCP service
- `total_cost`: Monthly cost

**Output**: Regional cost breakdown for capacity planning.

---

### 6. gcp_cost_efficiency.sql
**Purpose**: Measures cost efficiency by calculating cost per usage unit.  
**Key Metrics**:
- `cost_per_unit`: Cost divided by usage amount
- `total_usage`: Consumption amount
- `unit`: Measurement unit (e.g., GB-hours)

**Output**: Services ranked by cost efficiency.

---

### 7. gcp_credit_breakdown.sql
**Purpose**: Analyzes credit usage by type and name.  
**Key Metrics**:
- `credit_type`: Type of credit (e.g., promotional)
- `credit_name`: Specific credit name
- `credit_amount`: Amount applied
- `currency`: Currency used

**Output**: Monthly credit utilization details.

---

### 8. gcp_day_month_cost_service.sql
**Purpose**: Daily cost tracking by service.  
**Key Metrics**:
- `net_cost`: Base cost before credits
- `total_credits`: Credits applied
- `final_cost`: Net cost after credits

**Output**: Daily cost trends for current month.

---

### 9. gcp_forecasted_spend.sql
**Purpose**: Predicts future spending using 3-month moving average.  
**Key Metrics**:
- `monthly_cost`: Actual monthly cost
- `forecasted_cost`: Predicted cost
- `currency`: Currency used

**Output**: Spending forecasts for budget planning.

---

### 10. gcp_idle_resource_detection.sql
**Purpose**: Identifies potentially underutilized resources.  
**Key Metrics**:
- `usage_amount`: Resource consumption
- `cost_per_unit`: Cost efficiency metric
- `usage_unit`: Measurement unit

**Output**: Resources with high cost relative to usage.

---

### 11. gcp_monthly_cost_summary.sql
**Purpose**: Basic monthly cost overview by service.  
**Key Metrics**:
- `total_cost`: Base cost
- `total_credits`: Credits applied
- `final_cost`: Net cost

**Output**: Simplified monthly cost report.

---

### 12. gcp_monthly_cost_trend_yoy.sql
**Purpose**: Compares current year costs to previous year.  
**Key Metrics**:
- `current_year_cost`: Current period cost
- `previous_year_cost`: Year-ago cost
- `currency`: Currency used

**Output**: Year-over-year cost trends.

---

### 13. gcp_project_cost_comparison.sql
**Purpose**: Compares actual vs list prices by project.  
**Key Metrics**:
- `actual_cost`: Actual spending
- `estimated_cost`: List price estimate
- `cost_difference`: Variance

**Output**: Projects with largest pricing variances.

---

### 14. gcp_project_monthly_cost_summary.sql
**Purpose**: Detailed cost breakdown by project and service.  
**Key Metrics**:
- `project_name`: GCP project
- `service_description`: GCP service
- `total_cost`: Base cost
- `final_cost`: Net cost after credits

**Output**: Granular project-level cost analysis.

---

### 15. gcp_test.sql
**Purpose**: Basic cost query template.  
**Key Metrics**:
- `net_cost`: Base cost
- `final_cost`: After credits

**Output**: Simple daily cost data.

---

### 16. gcp_top_10_services_current_year.sql
**Purpose**: Identifies top spending services.  
**Key Metrics**:
- `total_cost`: Monthly spending
- `currency`: Currency used

**Output**: Monthly top 10 services by cost.

---

### 17. gcp_top_growing_services_mom.sql
**Purpose**: Finds services with fastest month-over-month growth.  
**Key Metrics**:
- `growth_rate`: Percentage increase
- `monthly_cost`: Current month cost
- `previous_month_cost`: Prior month cost

**Output**: Services with >50% MoM growth.