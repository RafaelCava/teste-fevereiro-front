FROM nginx

LABEL app="front-teste"

COPY . /usr/share/nginx/html

EXPOSE 80