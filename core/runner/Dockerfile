FROM nginx:1.25.3

# Copiar configuración que carga el módulo headers-more
COPY docker_web/web_config/headers_more.conf /etc/nginx/conf.d/

# Copiar el resto de configuraciones
COPY docker_web/web_config/nginx.conf /etc/nginx/nginx.conf
COPY docker_web/kaos_cert/ /etc/nginx/ssl/
COPY docker_web/kaos_conf/ /etc/nginx/sites-available/
COPY docker_web/sites/ /var/www/html/

# Configurar permisos
RUN chown -R www-data:www-data /etc/nginx /var/www/html \
    && chmod -R 644 /etc/nginx/nginx.conf \
    && chmod -R 644 /etc/nginx/ssl/ \
    && chmod -R 644 /etc/nginx/sites-available/

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
 