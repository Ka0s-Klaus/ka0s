FROM ubuntu:24.04
ENV TZ=Europe/Madrid

# Instalar dependencias para compilar módulos Nginx
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    nginx \
    certbot \
    python3-certbot-nginx \
    curl \
    git \
    build-essential \
    libpcre3-dev \
    zlib1g-dev \
    libssl-dev \
    wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Descargar y compilar headers-more-nginx-module
RUN cd /tmp && \
    wget https://github.com/openresty/headers-more-nginx-module/archive/refs/tags/v0.34.tar.gz && \
    tar -xzvf v0.34.tar.gz && \
    rm v0.34.tar.gz

# Recompilar Nginx con el módulo
RUN sed -i 's/^# deb-src/deb-src/' /etc/apt/sources.list && \
    echo 'deb-src http://archive.ubuntu.com/ubuntu noble main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb-src http://archive.ubuntu.com/ubuntu noble-updates main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb-src http://archive.ubuntu.com/ubuntu noble-backports main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb-src http://security.ubuntu.com/ubuntu noble-security main restricted universe multiverse' >> /etc/apt/sources.list && \
    apt-get update && \
    cd /tmp && \
    apt-get build-dep -y nginx && \
    wget http://nginx.org/download/nginx-1.25.3.tar.gz && \
    tar -xzvf nginx-1.25.3.tar.gz && \
    cd nginx-1.25.3 && \
    ./configure --with-compat --add-dynamic-module=/tmp/headers-more-nginx-module-0.34 \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --modules-path=/usr/lib/nginx/modules \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --pid-path=/var/run/nginx.pid \
    --lock-path=/var/run/nginx.lock \
    --http-client-body-temp-path=/var/cache/nginx/client_temp \
    --http-proxy-temp-path=/var/cache/nginx/proxy_temp \
    --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
    --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
    --http-scgi-temp-path=/var/cache/nginx/scgi_temp \
    --user=www-data \
    --group=www-data \
    --with-http_ssl_module \
    --with-http_realip_module \
    --with-http_addition_module \
    --with-http_sub_module \
    --with-http_dav_module \
    --with-http_flv_module \
    --with-http_mp4_module \
    --with-http_gunzip_module \
    --with-http_gzip_static_module \
    --with-http_random_index_module \
    --with-http_secure_link_module \
    --with-http_stub_status_module \
    --with-http_auth_request_module \
    --with-threads \
    --with-stream \
    --with-stream_ssl_module \
    --with-http_slice_module \
    --with-mail \
    --with-mail_ssl_module \
    --with-file-aio \
    --with-http_v2_module && \
    make && make install && \
    rm -rf /tmp/nginx-1.25.3* && \
    rm -rf /tmp/headers-more-nginx-module-0.34*

# Asegurar que el módulo se carga
RUN echo "load_module /usr/lib/nginx/modules/ngx_http_headers_more_filter_module.so;" > /etc/nginx/modules-enabled/50-mod-http-headers-more.conf

# Creación de directorios y configuración de permisos
RUN mkdir -p /var/www/html \
    && mkdir -p /var/log/nginx \
    && mkdir -p /etc/nginx/sites-available \
    && mkdir -p /etc/nginx/sites-enabled \
    && mkdir -p /etc/nginx/ssl \
    && chown -R www-data:www-data /var/www/html \
    && chown -R www-data:www-data /var/log/nginx \
    && chmod -R 750 /var/www/html \
    && chmod -R 755 /var/log/nginx

# Eliminar configuración por defecto de Nginx
RUN rm -f /etc/nginx/sites-enabled/default

# Solo exponer puerto HTTPS
EXPOSE 443

# Configuración Nginx
RUN rm -rf /etc/nginx/nginx.conf
COPY ./web_config/nginx.conf /etc/nginx/nginx.conf
COPY ./kaos_cert/ /etc/nginx/ssl/
COPY ./kaos_conf/ /etc/nginx/sites-available/
COPY ./sites/ /var/www/html/
RUN chown -R www-data:www-data /etc/nginx /var/www/html
RUN chmod -R 644 /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off; error_log /dev/stderr info; worker_processes 1;"]