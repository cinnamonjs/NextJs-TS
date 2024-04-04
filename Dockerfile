FROM node:alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm run build


FROM node:alpi
WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]