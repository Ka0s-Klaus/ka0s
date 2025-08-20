# 0.- Creación stack ELK

## Acceso:
	- ssh kaos@83.32.50.40 -p 1712
	- Sm180817

networks:
  elk:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.0/24
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.13.0
    container_name: elasticsearch
    restart: unless-stopped
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - ES_JAVA_OPTS=-Xms1g -Xmx1g
      - xpack.fleet.registryUrl="https://epr.elastic.co"
      - ELASTIC_PASSWORD=changeme
      - xpack.security.authc.realms.native.native1.order=0
    ports:
      - 9400:9300
      - 9500:9400
    volumes:
      - esdata:/usr/share/elasticsearch/data
    networks:
      elk:
        ipv4_address: 172.20.0.2

  logstash:
    image: logstash-mongodb:latest
    container_name: logstash
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
    ports:
      - "5044:5044"
    environment:
      - LOGSTASH_START=1
    depends_on:
      - elasticsearch
    networks:
      elk:
        ipv4_address: 172.20.0.4

  kibana:
    image: docker.elastic.co/kibana/kibana:8.13.0
    container_name: kibana
    ports:
      - 5601:5601
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      - xpack.security.enabled=false
      - xpack.fleet.agents.enabled=true
      - ELASTICSEARCH_USERNAME=user_kibana
      - ELASTICSEARCH_PASSWORD=changeme
    depends_on:
      - elasticsearch
    networks:
      elk:
        ipv4_address: 172.20.0.3

  fleet-server:
    image: docker.elastic.co/beats/elastic-agent:8.13.0
    container_name: fleet-server
    environment:
      - FLEET_SERVER_ENABLE=1
      - FLEET_SERVER_ELASTICSEARCH_HOST=http://elasticsearch:9200
      - FLEET_SERVER_ELASTICSEARCH_USERNAME=elastic
      - FLEET_SERVER_ELASTICSEARCH_PASSWORD=changeme
      - FLEET_SERVER_POLICY_ID=fleet-server-policy
      - KIBANA_HOST=http://kibana:5601
      - KIBANA_USERNAME=user_kibana
      - KIBANA_PASSWORD=changeme
    ports:
      - 8220:8220
    depends_on:
      - elasticsearch
      - kibana
    networks:
      elk:
        ipv4_address: 172.20.0.5

volumes:
  esdata:
    driver: local

# 1.- Configuración logstash para ingestar MONGO

kaos@kaos-node-1:~/observability/elk$ cd logstash
kaos@kaos-node-1:~/observability/elk/logstash$ ls
pipeline
kaos@kaos-node-1:~/observability/elk/logstash$ cd pipeline
kaos@kaos-node-1:~/observability/elk/logstash/pipeline$ ls -lnrt
total 4
-rw-r--r-- 1 0 0 432 ago 12 11:17 logstash.conf
kaos@kaos-node-1:~/observability/elk/logstash/pipeline$ cat logstash.conf

input {
  mongodb {
    uri => 'mongodb://Admin:Password@192.168.1.35:27017/inspector?authSource=admin'
    placeholder_db_dir => '/opt/logstash-mongodb'
    placeholder_db_name => 'logstash_sqlite.db'
    collection => 'col_json'
    batch_size => 500
  }
}

output {
  elasticsearch {
    hosts => ["http://172.20.0.2:9200"]
    index => "mongo_data"
    ssl => false
  }
}

filter {
  mutate {
    remove_field => ["_id"]
  }
}

# 2.- Se crea un índice

curl -u elastic:changeme -X PUT "http://172.20.0.2:9200/mongo_data" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
  },
  "mappings": {
    "properties": {
      "@timestamp": { "type": "date" },
      "@version": { "type": "keyword" },
      "content": { "type": "text" },
      "content.keyword": { "type": "keyword" },
      "filename": { "type": "keyword" },
      "hash": { "type": "keyword" },
      "host": { "type": "keyword" },
      "import_date": { "type": "date" },
      "log_entry": { "type": "text" },
      "log_entry.keyword": { "type": "keyword" }
    }
  }
}'

## Para consultar el índice:

curl -u elastic:changeme -X GET "http://172.20.0.2:9200/mongo_data/_search?pretty" (devuelve la 10 primeras filas)


# 3.- Se crea el data_view:

Hay que tener en cuenta que si se activa la seguridad, habrá que indicar las credenciales en la llamada curl:

curl -X POST http://172.20.0.3:5601/api/data_views/data_view \
-H 'Content-Type: application/json' \
-H 'kbn-xsrf: true' \
-d '{
  "data_view": {
    "title": "mongo_data",
    "timeFieldName": "workflow.createdAt"
  }
}'

# 4.- Se crea el pipeline para indexar datos en ELK:

PUT _ingest/pipeline/mongo_content_parser
{
  "description": "Extrae campos clave del JSON embebido en 'content'",
  "processors": [
    {
      "json": {
        "field": "content",
        "target_field": "workflow"
      }
    },
    {
      "foreach": {
        "field": "workflow.jobs",
        "processor": {
          "script": {
            "source": """
              if (ctx != null) {
                ctx.job_name = ctx.name;
                ctx.job_startedAt = ctx.startedAt;
                ctx.job_completedAt = ctx.completedAt;
              }
            """
          }
        }
      }
    }
  ]
}

POST _reindex
{
  "source": {
    "index": "mongo_data1"
  },
  "dest": {
    "index": "mongo_data_parsed",
    "pipeline": "mongo_content_parser"
  }
}

## Borrado de índice

curl -X DELETE "http://172.20.0.2:9200/mongo_data_parsed1"

{"acknowledged":true}


## Vaciar un índice:

curl -X POST "http://172.20.0.2:9200/mongo_data/_delete_by_query" \
-H 'Content-Type: application/json' \
-d '{
  "query": {
    "match_all": {}
  }
}'




