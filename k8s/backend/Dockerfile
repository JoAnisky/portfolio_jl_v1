FROM php:8.2-apache

# Active les modules
RUN a2enmod rewrite && a2enmod headers

# Installer Composer et PHPMailer
RUN apt-get update && apt-get install -y git curl && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    rm -rf /var/lib/apt/lists/* \

# Copie de la config Apache
COPY ./k8s/backend/000-default.conf /etc/apache2/sites-available/000-default.conf

# Copie du code PHP
COPY ./php /var/www/html/

# Installer les dépendances PHP avec Composer
WORKDIR /var/www/html
RUN composer install --no-dev --optimize-autoloader

# Copie des medias
COPY ./public/media /var/www/html/media

# Droits
RUN chown -R www-data:www-data /var/www/html/
