#!/bin/bash
set -e

mkdir -p wazuh-certificates
cd wazuh-certificates

# 1. Root CA
echo "Generating Root CA..."
openssl req -x509 -new -nodes -newkey rsa:2048 -keyout root-ca.key -out root-ca.pem -days 3650 -batch -subj "/C=US/L=California/O=Wazuh/CN=Wazuh Root CA"

# Function to generate cert
generate_cert() {
    NAME=$1
    CN=$2
    SANS=$3 # Comma separated

    echo "Generating $NAME ($CN)..."
    
    # Config for SANs
    cat > ${NAME}.conf <<EOF
[req]
distinguished_name = req_distinguished_name
req_extensions = v3_req
prompt = no

[req_distinguished_name]
C = US
L = California
O = Wazuh
CN = ${CN}

[v3_req]
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = @alt_names

[alt_names]
EOF

    # Parse SANs
    IFS=',' read -ra ADDR <<< "$SANS"
    I=1
    for i in "${ADDR[@]}"; do
        if [[ "$i" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
            echo "IP.$I = $i" >> ${NAME}.conf
        else
            echo "DNS.$I = $i" >> ${NAME}.conf
        fi
        ((I++))
    done

    openssl req -new -nodes -newkey rsa:2048 -keyout ${NAME}-key.pem -out ${NAME}.csr -config ${NAME}.conf
    openssl x509 -req -in ${NAME}.csr -CA root-ca.pem -CAkey root-ca.key -CAcreateserial -out ${NAME}.pem -days 3650 -extensions v3_req -extfile ${NAME}.conf
    
    rm ${NAME}.conf ${NAME}.csr
}

# 2. Admin
generate_cert "admin" "admin" "admin"

# 3. Indexer
# Note: Using headless service DNS for discovery
generate_cert "wazuh-indexer" "wazuh-indexer" "wazuh-indexer,wazuh-indexer.soc.svc,wazuh-indexer.soc.svc.cluster.local,127.0.0.1"

# 4. Manager
generate_cert "wazuh-manager" "wazuh-manager" "wazuh-manager,wazuh-manager.soc.svc,wazuh-manager.soc.svc.cluster.local,127.0.0.1"

# 5. Dashboard
generate_cert "wazuh-dashboard" "wazuh-dashboard" "wazuh-dashboard,wazuh-dashboard.soc.svc,wazuh-dashboard.soc.svc.cluster.local,soc.ka0s.io,127.0.0.1"

echo "Certificates generated in wazuh-certificates/"
ls -l
