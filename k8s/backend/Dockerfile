FROM php:8.2-apache

# Active mod_rewrite
RUN a2enmod rewrite

# Copie du code PHP
COPY ./php /var/www/html/

# Copie des medias
COPY ./public/media /var/www/html/media

# Droits
RUN chown -R www-data:www-data /var/www/html/
