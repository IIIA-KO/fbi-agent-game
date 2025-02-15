FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install && npm install -g http-server

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["http-server", "dist/fbi-agent-game-frontend/browser", "-p", "3000"]
