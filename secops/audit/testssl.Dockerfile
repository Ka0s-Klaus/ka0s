FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y git bsdmainutils && \
    rm -rf /var/lib/apt/lists/* && \
    git clone --depth 1 https://github.com/drwetter/testssl.sh.git /testssl && \
    ln -s /testssl/testssl.sh /usr/local/bin/

WORKDIR /scan
ENTRYPOINT ["testssl.sh"]
CMD ["--help"]