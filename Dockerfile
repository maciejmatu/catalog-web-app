FROM node:7.4

WORKDIR /www/app
COPY package.json /www/app/package.json
RUN npm install
COPY . /www/app