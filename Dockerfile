FROM node:12.18.1

ENV NODE_ENV=production

COPY package*.json ./
COPY index.js /index.js

RUN npm install --production

COPY src/ ./src

EXPOSE 3000

CMD [ "node", "/index.js" ]