#Docker Image
FROM node:alpine

#Relative Path WorkDir
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./

#Bundle app source
COPY . .

RUN  npm install

#Port
EXPOSE 3333

CMD yarn server