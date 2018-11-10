# this the first build stage, it will not persist in the final image
FROM alpine as intermediate

# install git and ssh
RUN apk update
RUN apk upgrade
RUN apk add --no-cache git

RUN git clone https://igorgcosta:nGnTRaZEuQ7duqHnFPvG@bitbucket.org/igorgcosta/persons-api.git

FROM node:8.11.3-alpine

# copy the repository form the previous image
COPY --from=intermediate /persons-api /srv/persons-api

WORKDIR /srv/persons-api

#RUN npm install

EXPOSE 3000

CMD ["npm", "install"]