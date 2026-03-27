import psycopg2
import os

conn = psycopg2.connect(
    host="localhost",
    port="5433",
    user="ka0s_ai",
    password="change_me_in_production_vector_db_123!",
    dbname="ka0s_memory"
)
cur = conn.cursor()
cur.execute("SELECT count(*) FROM kaos_memory WHERE content_hash IS NOT NULL;")
print(f"Total rows WITH hash in DB: {cur.fetchone()[0]}")
cur.close()
conn.close()
