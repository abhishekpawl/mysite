ARG  NODE_VERSION
FROM node:$NODE_VERSION
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
# docker-compose.yml
# EXPOSE 3000
CMD npm start