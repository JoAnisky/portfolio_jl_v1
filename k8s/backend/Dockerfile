FROM php:8.2-apache

# Active les modules
RUN a2enmod rewrite && \
    a2enmod headers

# Copie de la config Apache
COPY ./k8s/backend/000-default.conf /etc/apache2/sites-available/000-default.conf

# Copie du code PHP
COPY ./php /var/www/html/

# Copie des medias
COPY ./public/media /var/www/html/media

# Droits
RUN chown -R www-data:www-data /var/www/html/
