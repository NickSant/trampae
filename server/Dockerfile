#Docker Image
FROM node:12

#Relative Path WorkDir
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

#Port
EXPOSE 3333

CMD ["node", "dist/server.js"]
