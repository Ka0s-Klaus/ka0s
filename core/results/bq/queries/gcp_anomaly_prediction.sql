WITH historical_monthly_costs AS (
  SELECT
    service.description AS service_description,
    EXTRACT(YEAR FROM usage_start_time) AS year,
    EXTRACT(MONTH FROM usage_start_time) AS month,
    SUM(cost) AS total_cost
  FROM __ORGANIZATION__.__DATASET__.__TABLE__
  WHERE TIMESTAMP(usage_start_time) >= TIMESTAMP(DATE_SUB(DATE_TRUNC(CURRENT_DATE(), YEAR), INTERVAL 2 YEAR))
  GROUP BY service_description, year, month
),

-- Calculate historical stats including trend analysis
service_stats AS (
  SELECT
    service_description,
    AVG(total_cost) AS avg_cost,
    STDDEV(total_cost) AS stddev_cost,
    -- Calculate monthly growth rate
    EXP(AVG(LN(total_cost + 1))) - 1 AS monthly_growth_rate,
    -- Calculate seasonality factor (monthly pattern)
    CORR(EXTRACT(MONTH FROM DATE(year, month, 1)), total_cost) AS seasonality
  FROM historical_monthly_costs
  GROUP BY service_description
),

-- Generate future months for current year
future_months AS (
  SELECT
    service_description,
    EXTRACT(YEAR FROM CURRENT_DATE()) AS year,
    month,
    DATE_DIFF(DATE(EXTRACT(YEAR FROM CURRENT_DATE()), month, 1), 
              DATE_TRUNC(CURRENT_DATE(), MONTH), MONTH) AS months_ahead
  FROM 
    UNNEST(GENERATE_ARRAY(EXTRACT(MONTH FROM CURRENT_DATE()) + 1, 12)) AS month
  CROSS JOIN (SELECT DISTINCT service_description FROM historical_monthly_costs)
),

-- Projected costs with growth and seasonality
projected_costs AS (
  SELECT
    f.service_description,
    f.year,
    f.month,
    -- Project cost considering growth rate and seasonality
    s.avg_cost * POWER(1 + s.monthly_growth_rate, f.months_ahead) * 
    (1 + s.seasonality * SIN(2*ACOS(-1)*(f.month-1)/12)) AS projected_cost,
    s.avg_cost,
    s.stddev_cost
  FROM future_months f
  JOIN service_stats s ON f.service_description = s.service_description
),

-- Identify potential anomalies in projections
predicted_anomalies AS (
  SELECT
    service_description,
    year,
    month,
    projected_cost,
    avg_cost,
    ROUND(stddev_cost, 2) AS stddev_cost,
    (projected_cost - avg_cost) / NULLIF(stddev_cost, 0) AS z_score,
    CASE
      WHEN (projected_cost - avg_cost) / NULLIF(stddev_cost, 0) > 3 THEN 'Potential high spike'
      WHEN (projected_cost - avg_cost) / NULLIF(stddev_cost, 0) < -3 THEN 'Potential sudden drop'
      WHEN projected_cost > avg_cost * 1.5 THEN 'Potential significant increase'
      ELSE 'Normal projection'
    END AS predicted_anomaly_type
  FROM projected_costs
)

SELECT
  service_description,
  year,
  month,
  ROUND(projected_cost, 2) AS projected_cost,
  ROUND(avg_cost, 2) AS historical_avg_cost,
  stddev_cost,
  ROUND(z_score, 2) AS z_score,
  predicted_anomaly_type,
  CASE
    WHEN predicted_anomaly_type != 'Normal projection' 
    THEN CONCAT('Alert: ', predicted_anomaly_type, ' expected in ', 
                FORMAT_DATE('%B', DATE(year, month, 1)))
    ELSE 'No significant anomalies predicted'
  END AS alert_message
FROM predicted_anomalies
ORDER BY 
  predicted_anomaly_type DESC,
  ABS(z_score) DESC,
  service_description,
  month;