FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe

COPY . .

EXPOSE 8888

CMD [ "npm", "run" , "start:prod" ]