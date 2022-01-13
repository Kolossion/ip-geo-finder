FROM node:17-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY public ./public
COPY .env ./.env
# NOTE: Port being handled by docker-compose
# EXPOSE 3000
CMD [ "npm", "start" ]