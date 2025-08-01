FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y nikto && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /scan
ENTRYPOINT ["nikto"]
CMD ["-help"]