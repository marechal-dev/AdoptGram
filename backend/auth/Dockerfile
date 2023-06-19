FROM node:lts-alpine AS build

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333


