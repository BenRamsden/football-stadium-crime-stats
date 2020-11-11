FROM node:14

WORKDIR usr/src/

ADD package*.json ./
ADD babel.config.json ./

RUN npm install

ADD src/ src/

RUN npm run build

CMD npm start
