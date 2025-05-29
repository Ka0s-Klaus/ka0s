WITH monthly_costs AS (
  SELECT
    service.description AS service_description,
    EXTRACT(YEAR FROM usage_start_time) AS year,
    EXTRACT(MONTH FROM usage_start_time) AS month,
    SUM(cost) AS total_cost
  FROM __ORGANIZATION__.__DATASET__.__TABLE__
  WHERE TIMESTAMP(usage_start_time) >= TIMESTAMP(DATE_SUB(DATE_TRUNC(CURRENT_DATE(), YEAR), INTERVAL 1 YEAR))
  GROUP BY service_description, year, month
),

stats AS (
  SELECT
    service_description,
    AVG(total_cost) AS avg_cost,
    STDDEV(total_cost) AS stddev_cost
  FROM monthly_costs
  GROUP BY service_description
),

anomalies AS (
  SELECT
    m.service_description,
    m.year,
    m.month,
    m.total_cost,
    s.avg_cost,
    s.stddev_cost,
    (m.total_cost - s.avg_cost) / NULLIF(s.stddev_cost, 0) AS z_score
  FROM monthly_costs m
  JOIN stats s ON m.service_description = s.service_description
  WHERE 
    -- Flag as anomaly if cost is more than 3 standard deviations from mean
    ABS((m.total_cost - s.avg_cost) / NULLIF(s.stddev_cost, 0)) > 3
    OR 
    -- Or if cost is more than 50% higher than average (for low-variance services)
    (m.total_cost > s.avg_cost * 1.5 AND s.stddev_cost < s.avg_cost * 0.1)
)

SELECT
  service_description,
  year,
  month,
  total_cost,
  avg_cost,
  ROUND(stddev_cost, 2) AS stddev_cost,
  ROUND(z_score, 2) AS z_score,
  CASE
    WHEN z_score > 3 THEN 'High spike'
    WHEN z_score < -3 THEN 'Sudden drop'
    WHEN total_cost > avg_cost * 1.5 THEN 'Significant increase'
    ELSE 'Other anomaly'
  END AS anomaly_type
FROM anomalies
ORDER BY 
  service_description,
  year DESC,
  month DESC;