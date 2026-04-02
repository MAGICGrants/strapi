#!/bin/sh
set -eux
envsubst '${NGINX_SERVER_NAME}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx -t
exec nginx -g 'daemon off;'
