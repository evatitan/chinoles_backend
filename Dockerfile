FROM node:18-alpine

# Update Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
