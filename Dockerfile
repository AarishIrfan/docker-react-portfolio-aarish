FROM nginx:alpine

# Copy built files into nginx default html directory
COPY build/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
