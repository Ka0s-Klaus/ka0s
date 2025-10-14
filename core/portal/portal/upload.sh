#!/bin/bash
CONFIGS=(app-config.yaml app-config.production.yaml catalog-info.yaml backstage.json)
CONFIG_DIR="core/portal/portal"
for file in "${CONFIGS[@]}"; do
  config_name="$(echo "$file" | tr . _ | tr -d -)"
  docker config create "$config_name" "$CONFIG_DIR/$file"
done