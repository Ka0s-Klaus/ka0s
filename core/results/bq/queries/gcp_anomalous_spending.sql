WITH daily_costs AS (
  SELECT
    DATE(usage_start_time) AS day,
    service.description AS service_description,
    SUM(cost) AS daily_cost,
    currency
  FROM __ORGANIZATION__.__DATASET__.__TABLE__
  WHERE DATE(usage_start_time) >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
  GROUP BY day, service_description, currency
),

stats AS (
  SELECT
    service_description,
    currency,
    AVG(daily_cost) AS avg_daily_cost,
    STDDEV(daily_cost) AS stddev_daily_cost
  FROM daily_costs
  GROUP BY service_description, currency
)

SELECT
  d.day,
  d.service_description,
  d.daily_cost,
  s.avg_daily_cost,
  (d.daily_cost - s.avg_daily_cost) / NULLIF(s.stddev_daily_cost, 0) AS z_score,
  d.currency
FROM daily_costs d
JOIN stats s ON d.service_description = s.service_description AND d.currency = s.currency
WHERE ABS((d.daily_cost - s.avg_daily_cost) / NULLIF(s.stddev_daily_cost, 0)) > 3
ORDER BY ABS(z_score) DESC