FROM alpine
RUN apk update && apk add nodejs && rm -rf /var/cache/apk/*
RUN npm install -g babel-cli

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app/

CMD ["npm", "start"]
