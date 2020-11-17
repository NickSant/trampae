#Docker Image
FROM node:12

#Relative Path WorkDir
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./

#Bundle app source
COPY . .

RUN npm install

#Port
EXPOSE 3333

CMD ["node", "dist/server.js"]
