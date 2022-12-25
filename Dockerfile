FROM node:14-alpine as build-stage

# in which directory we want to work in the container
WORKDIR /app

# installing deps
COPY package.json .
RUN npm install

# generating build
COPY . .
RUN npm run build

# production server setup
FROM nginx
EXPOSE 80
COPY --from=build-stage /app/build /usr/share/nginx/html