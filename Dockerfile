FROM node:latest
WORKDIR /usr/src/app
COPY package*.json .
#ci(continous integration)
RUN npm ci 
COPY . .
EXPOSE 5555

CMD ["npm", "start"]
