FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y nmap && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /scan
ENTRYPOINT ["nmap"]
CMD ["--help"]