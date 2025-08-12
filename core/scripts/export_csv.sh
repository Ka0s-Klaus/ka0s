jq -r '
  [
    "id",
    "name",
    "status",
    "conclusion",
    "created_at",
    "updated_at",
    "run_started_at",
    "duracion"
  ] as $cols
  | $cols, 
  (.[] | [
    .id,
    .name,
    .status,
    .conclusion,
    .created_at,
    .updated_at,
    .run_started_at,
    (try (
      (.updated_at | fromdateiso8601) - (.run_started_at | fromdateiso8601)
    ) // 0 | 
      (./3600 | floor | tostring | ("00" + .)[-2:]) + ":" +
      (.%3600/60 | floor | tostring | ("00" + .)[-2:]) + ":" +
      (.%60 | tostring | ("00" + .)[-2:])
    )
  ])
  | @csv' audit/workflows/workflows-runs-16901566256.json > audit/workflows/workflow_stats.csv

echo "CSV generado con $(grep -c '.' audit/workflows/workflow_stats.csv) registros"