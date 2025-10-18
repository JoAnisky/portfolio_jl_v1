# Étape 1 : Build de l'application
FROM node:16 AS builder
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Build de l'application React
RUN npm run build

# Étape 2 : Serveur de l'application React avec un serveur HTTP
FROM nginx:alpine

# Copier les fichiers générés dans l'image nginx
COPY --from=builder /app/build /usr/share/nginx/html

RUN sed -i 's/listen 80;/listen 3000;/g' /etc/nginx/conf.d/default.conf

# Exposer le port 3000
EXPOSE 3000

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
