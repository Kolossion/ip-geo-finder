FROM node:17-alpine
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
COPY . .
# NOTE: Port being handled by docker-compose
# EXPOSE 4000
CMD [ "npm", "start"]