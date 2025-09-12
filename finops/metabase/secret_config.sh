echo "admin" | docker secret create metabase_db_user -
echo "tu_contraseña_segura" | docker secret create metabase_db_password -
echo "metabase" | docker config create metabase_db_name -