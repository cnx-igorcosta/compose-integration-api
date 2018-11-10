FROM node:8.11.3-alpine

WORKDIR /var/current
COPY . /var/current

RUN npm install

EXPOSE 3000

CMD ["npm", "debug"]