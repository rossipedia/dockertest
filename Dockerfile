FROM node:20-alpine

WORKDIR /app
COPY server.js server.js

CMD node server.js
