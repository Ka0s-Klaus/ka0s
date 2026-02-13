import os
from pymongo import MongoClient

uri = os.environ['MONGO_SUPERUSER_CONNECTION']
client = MongoClient(uri)

try:
    # Test the connection
    client.admin.command('ping')
    print("Connected to MongoDB!")
except Exception as e:
    print(e)
finally:
    client.close()