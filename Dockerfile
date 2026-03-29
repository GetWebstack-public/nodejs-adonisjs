FROM node:20-alpine
WORKDIR /app
RUN npm install -g tsx
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3333
ENV PORT=3333
ENV HOST=0.0.0.0
CMD ["tsx", "watch", "bin/server.ts"]
